const express = require("express");
const { getAIAnswer } = require("../services/aiService");

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "⚠️ No message provided" });
    }

    let streamed = "";
    const result = await getAIAnswer(message, ch => (streamed += ch));
    const final = result?.answer || streamed || "⚠️ No response generated";

    res.json({
      reply: final.trim(),
      source: result?.source || "unknown",
    });
  } catch (err) {
    console.error("❌ /chat error:", err.message);
    res.status(500).json({ reply: "⚠️ AI service error" });
  }
});

module.exports = router;
