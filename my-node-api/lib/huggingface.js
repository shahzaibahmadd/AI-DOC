// lib/huggingface.js
require("dotenv").config();
const { InferenceClient } = require("@huggingface/inference");

// ✅ Ensure the token is a clean string
const HF_API_KEY = process.env.HF_API_KEY?.trim();

if (!HF_API_KEY) {
  throw new Error("❌ HF_API_KEY missing in .env");
}

// Initialize Hugging Face Inference client
const hf = new InferenceClient({ apiKey: HF_API_KEY });

module.exports = { hf };
