// services/initService.js
const { initCollection } = require("./vectorDbClient");
const { checkGeminiStatus } = require("./geminiService");

/**
 * Initialize external AI + vector DB dependencies
 * - Checks Gemini API health
 * - Ensures Qdrant collections exist
 */
async function initAll() {
  console.log("⚡ Initializing Gemini + Qdrant...");

  // ✅ 1️⃣ Check Gemini connectivity
  try {
    await checkGeminiStatus();
    console.log("✅ Gemini API: Online");
  } catch (err) {
    console.warn("⚠️ Gemini health check failed:", err?.message || err);
  }

  // ✅ 2️⃣ Ensure Qdrant collections exist
  try {
    await Promise.all([
      initCollection("faqs"),
      initCollection("user_learned"),
    ]);
    console.log("✅ Qdrant collections initialized (faqs + user_learned)");
  } catch (err) {
    console.error("❌ Failed to initialize Qdrant collections:", err.message);
  }

  console.log("🚀 Initialization complete.\n");
}

module.exports = { initAll };
