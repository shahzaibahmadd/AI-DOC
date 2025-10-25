require("dotenv").config();
const fetch = require("node-fetch");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// === Embed multiple texts ===
async function embedText(texts = []) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent";
  const results = [];
  for (const text of texts) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          model: "models/text-embedding-004",
          content: { parts: [{ text }] },
        }),
      });
      const data = await res.json();
      const vector =
        data?.embedding?.values || data?.embeddings?.[0]?.values || [];
      results.push(Array.isArray(vector) && vector.length ? vector : []);
    } catch {
      results.push([]);
    }
  }
  return results;
}

// === Generate answer using Gemini ===
async function generateAnswer(prompt, options = {}) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.6,top_p: 0.9,top_k: 40, maxOutputTokens: 2048 },
    ...options,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
}

// === Gemini health check ===
async function checkGeminiStatus() {
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models",
      {
        headers: { "x-goog-api-key": GEMINI_API_KEY },
      }
    );
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return true;
  } catch (err) {
    throw new Error("Gemini API unreachable: " + err.message);
  }
}

module.exports = { embedText, generateAnswer, checkGeminiStatus };
