const fs = require("fs");
const path = require("path");
const { ollamaEmbed, ollamaChat } = require("../lib/ollama");



const EMBEDDING_MODEL = "nomic-embed-text";
const LLM_MODEL = "govdocs";

let faqEmbeddings = [];
let faqs = [];

// --- Load FAQs safely ---
try {
  const faqPath = path.join(process.cwd(), "faqs.json");
  faqs = JSON.parse(fs.readFileSync(faqPath, "utf-8"));
  if (!Array.isArray(faqs)) {
    console.error("❌ faqs.json is not an array!");
    faqs = [];
  }
} catch (err) {
  console.error("❌ Failed to load faqs.json:", err.message);
  faqs = [];
}

// --- Cosine similarity ---
function cosineSimilarity(vecA, vecB) {
  if (!vecA?.length || !vecB?.length) return 0;
  const dot = vecA.reduce((acc, v, i) => acc + v * (vecB[i] || 0), 0);
  const normA = Math.sqrt(vecA.reduce((acc, v) => acc + v * v, 0));
  const normB = Math.sqrt(vecB.reduce((acc, v) => acc + v * v, 0));
  return normA && normB ? dot / (normA * normB) : 0;
}

// --- Init FAQ embeddings ---
async function initEmbeddings() {
  console.log("⚡ Generating FAQ embeddings...");
  faqEmbeddings = [];

  for (const faq of faqs) {
    try {
      const text = `${faq.question} ${faq.answer}`;
      const embedding = await ollamaEmbed(EMBEDDING_MODEL, text);

      if (Array.isArray(embedding)) {
        faqEmbeddings.push({ ...faq, embedding });
      } else {
        console.error("❌ Invalid embedding for:", faq.question);
      }
    } catch (err) {
      console.error("❌ Embedding error:", faq.question, err.message ?? err);
    }
  }

  console.log(`✅ FAQ embeddings ready! (${faqEmbeddings.length})`);
}

// --- Clean Answer ---
function cleanAnswer(text) {
  return text
    .replace(/<think>.*?<\/think>/gis, "")
    .replace(/<think>.*$/gis, "")
    .replace(/Thinking.*$/gis, "")
    .replace(/\[.*?\]/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

// --- Small Talk ---
function handleSmallTalk(query, onToken) {
  const q = query.toLowerCase().trim();
  const greetings = ["hi", "hello", "hey", "salam", "assalamualaikum"];

  if (greetings.includes(q)) {
    const reply = "Hello! 👋 How can I help you with driving license information today?";
    if (onToken) [...reply].forEach((ch) => onToken(ch));
    return reply;
  }

  if (q.includes("thanks") || q.includes("thank you")) {
    const reply = "You’re welcome! 😊";
    if (onToken) [...reply].forEach((ch) => onToken(ch));
    return reply;
  }

  return null;
}

// --- Get AI Answer (with streaming) ---
async function getAIAnswer(query, onToken) {
  // Step 1: handle small talk
  const smallTalk = handleSmallTalk(query, onToken);
  if (smallTalk) return { answer: smallTalk, source: null };

  if (!faqEmbeddings.length) {
    throw new Error("FAQ embeddings not initialized. Call initEmbeddings()");
  }

  // Step 2: embed query
  let queryEmb;
  try {
    queryEmb = await ollamaEmbed(EMBEDDING_MODEL, query);
  } catch (err) {
    console.error("❌ Query embedding error:", err.message);
    if (onToken) onToken("I don’t have that information right now.");
    return { answer: "I don’t have that information right now.", source: null };
  }

  // Step 3: find best FAQ
  let bestMatch = null;
  let bestScore = -1;
  for (const faq of faqEmbeddings) {
    const score = cosineSimilarity(queryEmb, faq.embedding);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  if (!bestMatch || bestScore < 0.4) {
    if (onToken) onToken("I don’t have that information right now.");
    return { answer: "I don’t have that information right now.", source: null };
  }

  // Step 4: if score is high → return FAQ directly
  if (bestScore > 0.75) {
    const answer = bestMatch.answer.trim();
    if (onToken) [...answer].forEach((ch) => onToken(ch));
    return { answer, source: { ...bestMatch, similarity: bestScore } };
  }

  // Step 5: otherwise → rephrase with LLM
  const prompt = `
You are a strict FAQ answering assistant.
Rules:
- ONLY answer using the FAQ provided below.
- If missing or incomplete, reply exactly: "I don’t have that information right now."
- No reasoning, no <think>, no notes.
- Max 4 lines.

FAQ:
Q: ${bestMatch.question}
A: ${bestMatch.answer}

User question: ${query}

Answer:
`;

  let streamedAnswer = "";
  try {
    await ollamaChat(LLM_MODEL, prompt, (token) => {
      streamedAnswer += token;
      if (onToken) onToken(token);
    });
  } catch (err) {
    console.error("❌ LLM error:", err.message);
    if (onToken) onToken(bestMatch.answer);
    return { answer: bestMatch.answer, source: { ...bestMatch, similarity: bestScore } };
  }

  const cleaned = cleanAnswer(streamedAnswer);

  return {
    answer: cleaned || bestMatch.answer || "I don’t have that information right now.",
    source: { ...bestMatch, similarity: bestScore }
  };
}

module.exports = { initEmbeddings, getAIAnswer };










































/* ─────────────── MAIN RAG LOGIC ─────────────── */
async function getAIAnswer(query, onToken) {
  const small = handleSmallTalk(query, onToken);
  if (small) return { answer: small, source: null };

  try {
    // 1️⃣ Expand + Embed query
    const variations = await expandQuery(query);
    const embeddings = await embedText(variations);

    // Merge embeddings
    const mergedVector = Array(embeddings[0].length).fill(0);
    let count = 0;
    for (const emb of embeddings) {
      if (emb?.length) {
        count++;
        emb.forEach((v, i) => (mergedVector[i] += v));
      }
    }
    if (count > 0) for (let i = 0; i < mergedVector.length; i++) mergedVector[i] /= count;

    // 2️⃣ Search both collections
    const [faqRes, userRes] = await Promise.all([
      qdrant.search(COLLECTION_FAQS, { vector: mergedVector, limit: 7, with_payload: true, score_threshold: 0.1 }),
      qdrant.search(COLLECTION_USER, { vector: mergedVector, limit: 7, with_payload: true, score_threshold: 0.1 }),
    ]);

    let allResults = [...(faqRes || []), ...(userRes || [])];

    // 3️⃣ Deduplicate and rank
    const dedup = new Map();
    allResults.forEach(r => {
      const key = r.payload?.question?.trim() || "";
      if (!dedup.has(key) || r.score > dedup.get(key).score) dedup.set(key, r);
    });
    const searchRes = Array.from(dedup.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    console.log(
      "🔍 Qdrant Results:",
      searchRes.map(r => ({
        score: r.score.toFixed(3),
        q: r.payload?.question,
        a: (r.payload?.answer || "").slice(0, 60) + "..."
      }))
    );

    if (!searchRes.length) {
      const msg = "I don’t have that information right now.";
      if (onToken) onToken(msg);
      return { answer: msg, source: null };
    }

    const topScore = searchRes[0].score || 0;

    // 4️⃣ If Gemini fails or confidence is low → fallback
    if (topScore < 0.3) {
      console.log(`⚠️ Low confidence (${topScore.toFixed(3)}) — fallback to Qdrant answers.`);
      const combined = searchRes
        .slice(0, 2)
        .map(r => r.payload?.answer)
        .join("\n\n");
      if (onToken) [...combined].forEach(ch => onToken(ch));
      return { answer: combined, source: searchRes[0].payload };
    }

    // 5️⃣ Otherwise, generate Gemini-based response
    const context = searchRes
      .map((r, i) => `(${i + 1}) Q: ${r.payload.question}\nA: ${r.payload.answer}`)
      .join("\n\n");

    const prompt = `
You are a professional government assistant for driving licenses and national ID services in Pakistan.
Use the provided context below to answer the user's question with a **detailed and complete explanation**.
Include all possible steps, locations, required documents, eligibility details, and practical examples.
Be very clear and descriptive — do not summarize or give a short answer.
If the information is not directly in the context, reason based on real-world Pakistan government procedures.


Context:
${context}

User question: "${query}"

Answer:
`;

    const result = await generateAnswer(prompt);
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const cleaned = cleanAnswer(text);

    // 🧩 If Gemini fails → fallback to top answers
    if (!cleaned || cleaned.length < 10) {
      console.log("⚠️ Gemini returned empty response — fallback to top answers.");
      const combined = searchRes
        .slice(0, 1)
        .map(r => r.payload?.answer)
        .join("\n\n");
      if (onToken) [...combined].forEach(ch => onToken(ch));
      return { answer: combined, source: searchRes[0].payload };
    }

    if (onToken) [...cleaned].forEach(ch => onToken(ch));

    // 6️⃣ Save learning
    await saveUserInteraction(query, cleaned);

    return { answer: cleaned, source: searchRes[0].payload };
  } catch (err) {
    console.error("❌ getAIAnswer error:", err.message);
    const msg = "I don’t have that information right now.";
    if (onToken) onToken(msg);
    return { answer: msg, source: null };
  }
}