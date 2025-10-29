require("dotenv").config();
const { QdrantClient } = require("@qdrant/js-client-rest");
const { embedText, generateAnswer } = require("./geminiService");
const { searchGoogle } = require("./serperService");

const QDRANT_URL = process.env.QDRANT_URL;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY;
const COLLECTION_FAQS = "faqs";
const COLLECTION_USER = "user_learned";
const MODEL_NAME = "gemini-2.5-flash";

const qdrant = new QdrantClient({ url: QDRANT_URL, apiKey: QDRANT_API_KEY });

// 🧠 In-memory conversation memory (temporary per chat)
const chatSessions = new Map(); // key: sessionId, value: [{role, content}]

/* ---------------- Cleanup helpers ---------------- */
function cleanAnswer(text) {
  return (text || "")
    .replace(/<think>.*?<\/think>/gis, "")
    .replace(/\[.*?\]/g, "")
    .replace(/\*|#|`/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

/* ---------------- Format as numbered steps ---------------- */
function formatAsSteps(text, maxSteps = 10) {
  if (!text) return "";
  const lines = text
    .split(/\r?\n|(?<=[.?!])\s+/)
    .map(t => t.trim())
    .filter(Boolean)
    .slice(0, maxSteps);
  return lines.map((s, i) => `${i + 1}. ${s}`).join("\n");
}

/*----------------helper for storing recent queries and context in session memory--------- */
function getSession(sessionId) {
  if (!chatSessions.has(sessionId)) {
    chatSessions.set(sessionId, []);
  }
  return chatSessions.get(sessionId);
}

function updateSession(sessionId, role, content) {
  const history = getSession(sessionId);
  history.push({ role, content });

  // Limit memory to last 6 turns to avoid long context
  if (history.length > 12) history.splice(0, history.length - 12);

  return history;
}

/* ---------------- Save user query to Qdrant ---------------- */
async function saveUserInteraction(query, answer, source = "user") {
  try {
    const [embedding] = await embedText([query]);
    if (!embedding?.length) return;
    await qdrant.upsert(COLLECTION_USER, {
      points: [
        {
          id: Date.now(),
          vector: embedding,
          payload: {
            question: query,
            answer,
            source,
            timestamp: new Date().toISOString(),
          },
        },
      ],
    });
    console.log("✅ Saved successfully.");
  } catch (err) {
    console.error("⚠️ saveUserInteraction failed:", err.message);
  }
}

/* ---------------- Gemini generation (main prompt) ---------------- */
async function generateFromGemini(query, context) {
  const prompt = `
You are a professional government assistant for Pakistani public services such as driving licenses,national ID cards and Passports.
Answer the user's question in clear, complete sentences. 
Include steps, requirements, fees, locations and links if relevant — but do not output bullet symbols or markdown.

Context (trimmed to relevant info):
${context.slice(0, 4500)}

Current user question: "${query}"
Final helpful answer:

`;

  console.log("🤖 Generating answer from Gemini...");
  console.log("🧠 Model:", MODEL_NAME);

  const res = await generateAnswer(prompt, {
    generationConfig: { temperature: 0.3, maxOutputTokens: 1024 },
  });

  const text = res?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  const finishReason = res?.candidates?.[0]?.finishReason || "unknown";
  console.log("🧩 Raw Gemini output length:", text.length);

  if (!text) {
    console.warn("⚠️ Gemini returned empty response:", JSON.stringify(res, null, 2));
  }

  // Retry if truncated or too short
  if ((finishReason === "MAX_TOKENS" || text.length < 40)) {
    console.log("🔁 Retrying with higher token limit...");
    const retry = await generateAnswer(prompt, {
      generationConfig: { temperature: 0.3, maxOutputTokens: 4096 },
    });
    const retryText = retry?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return cleanAnswer(retryText);
  }

  return cleanAnswer(text);
}

/* ---------------- Enhanced Google fallback (with Gemini summarization) ---------------- */
async function handleGoogleFallback(query, onToken) {
  console.log("🌐 Triggering Google fallback...");

  try {
    const results = await searchGoogle(query);
    if (!results?.length)
      return { answer: "No relevant info found on Google.", source: "google" };

    // Combine top 5 search results into a textual context
    const context = results
      .slice(0, 5)
      .map(
        (r, i) =>
          `(${i + 1}) Title: ${r.title}\nSnippet: ${r.snippet}\nLink: ${r.link}`
      )
      .join("\n\n");

    // Summarize using Gemini
    console.log("🧠 Summarizing Google results using Gemini...");
    const summarizePrompt = `
You are a helpful assistant. 
The following are Google search results about "${query}". 
Summarize and answer the user's question in a well-structured, easy-to-understand form.
Do not list result numbers or raw URLs unless necessary. Provide a coherent and factual explanation.

Google Results:
${context}

Final summarized answer:
`;

    const res = await generateAnswer(summarizePrompt, {
      generationConfig: { temperature: 0.4, maxOutputTokens: 2048 },
    });

    const text = cleanAnswer(res?.candidates?.[0]?.content?.parts?.[0]?.text || "");
    const formatted = formatAsSteps(text);

    if (onToken) [...formatted].forEach(ch => onToken(ch));

    await saveUserInteraction(query, formatted, "google_summarized");
    return { answer: formatted, source: "google_summarized" };
  } catch (err) {
    console.error("❌ Google fallback failed:", err.message);
    return { answer: "⚠️ Failed to fetch or summarize Google results.", source: "google" };
  }
}

/* ---------------- Main RAG pipeline ---------------- */
async function getAIAnswer(query, onToken, sessionId = "default") {
  console.log("\n==============================================");
  console.log(`🧠 Processing Query: ${query}`);
  console.log("==============================================");

    // 🟢 Hardcoded responses for greeting-type messages
  const lower = query.toLowerCase().trim();
  const greetingResponses = {
    "hello": "Hello there! 👋 How can I assist you today?",
    "hey": "Hey! 😊 How can I help you?",
    "hi": "Hi! 👋 What would you like to know?",
    "yoo": "Yoo! 😎 What’s up? Need help with any government service?",
  };

  if (["hello", "hey", "hi", "yo"].includes(lower)) {
    const answer = greetingResponses[lower];
    if (onToken) [...answer].forEach(ch => onToken(ch));
    await saveUserInteraction(query, answer, "hardcoded");
    return { answer, source: "hardcoded" };
  }

  // 🧠 Retrieve or create chat memory
const history = getSession(sessionId);

// Save user query into memory
updateSession(sessionId, "user", query);

// Construct contextual history (recent few exchanges)
const recentContext = history
  .slice(-6)
  .map(h => `${h.role.toUpperCase()}: ${h.content}`)
  .join("\n");

  try {
    console.log("🧩 Generating embedding...");
    const [embedding] = await embedText([query]);
    console.log("📏 Embedding vector length:", embedding.length);

    const faqResults = await qdrant.search(COLLECTION_FAQS, {
      vector: embedding,
      limit: 5,
      with_payload: true,
    });

    console.log("📚 FAQ matches found:", faqResults?.length || 0);
    if (!faqResults?.length) return await handleGoogleFallback(query, onToken);

    const topScore = faqResults[0]?.score || 0;
    console.log(`📊 Top FAQ Score: ${topScore.toFixed(3)}`);

    // If FAQ similarity is low, skip to Google
    if (topScore < 0.1) {
      console.log("⚠️ Low FAQ relevance → fallback to Google");
      return await handleGoogleFallback(query, onToken);
    }

    // Prepare FAQ context
    const context = faqResults
      .slice(0, 3)
      .map(
        (r, i) => `(${i + 1}) Q: ${r.payload.question}\nA: ${r.payload.answer}`
      )
      .join("\n\n");

    // Generate Gemini answer
    // const geminiAnswer = await generateFromGemini(query, context);
    const combinedContext = `${context}\n\nRecent chat history:\n${recentContext}`;
const geminiAnswer = await generateFromGemini(query, combinedContext);


    if (!geminiAnswer || geminiAnswer.length < 50) {
      console.log("⚠️ Weak Gemini output → fallback to Google summarization");
      return await handleGoogleFallback(query, onToken);
    }

    const formatted = formatAsSteps(geminiAnswer);
    updateSession(sessionId, "assistant", formatted);

    if (onToken) [...formatted].forEach(ch => onToken(ch));
    await saveUserInteraction(query, formatted, "gemini");

    return { answer: formatted, source: "gemini" };
  } catch (err) {
    console.error("❌ getAIAnswer error:", err.message);
    return await handleGoogleFallback(query, onToken);
  }
}

module.exports = { getAIAnswer, saveUserInteraction };
