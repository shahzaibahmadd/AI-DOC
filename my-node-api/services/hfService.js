const { InferenceClient } = require("@huggingface/inference");

const hf = new InferenceClient(process.env.HF_API_KEY);


// Embedding helper
async function embedText(prompt) {
  const response = await hf.featureExtraction({
    model: process.env.HF_EMBEDDING_MODEL || "sentence-transformers/all-MiniLM-L6-v2",
    inputs: prompt,
  });

  // Normalize: some models return [[...]], others [...]
  if (Array.isArray(response) && Array.isArray(response[0])) return response[0];
  return response;
}

// Text generation helper
async function generateText(prompt) {
  const response = await hf.textGeneration({
    model: process.env.HF_TEXT_GEN_MODEL || "gpt2",
    inputs: prompt,
    parameters: { max_new_tokens: 150 },
  });

  return response?.generated_text ||
         (Array.isArray(response) ? response[0]?.generated_text : null) ||
         (typeof response === "string" ? response : null);
}

module.exports = { embedText, generateText };
