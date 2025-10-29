const fetch = require("node-fetch");

/**
 * Chat with Ollama using streaming responses.
 * @param {string} model - The model name (e.g., "llama3.2")
 * @param {string} prompt - The user query or prompt
 * @param {function} onToken - Callback(token) for streaming tokens
 * @returns {Promise<string>} Full response text
 */
async function ollamaChat(model, prompt, onToken) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt,
      stream: true,
    }),
  });

  if (!res.ok) {
    throw new Error(`Ollama chat failed: ${res.status} ${res.statusText}`);
  }

  let fullText = "";
  let buffer = "";

  for await (const chunk of res.body) {
    const lines = chunk.toString().split("\n").filter(Boolean);
    for (const line of lines) {
      try {
        const data = JSON.parse(line);

        if (data.response) {
          buffer += data.response;

          // strip <think> sections before exposing to user
          let cleaned = buffer
            .replace(/<think>[\s\S]*?<\/think>/gi, "")
            .replace(/<think>[\s\S]*$/gi, "");

          const delta = cleaned.slice(fullText.length);
          if (delta) {
            fullText = cleaned;
            if (onToken) onToken(delta);
          }
        }
      } catch {
        // ignore JSON parse errors from keep-alives
      }
    }
  }

  return fullText.trim();
}

/**
 * Get embedding vector from Ollama
 * @param {string} model - Embedding model (e.g., "nomic-embed-text")
 * @param {string} text - Text to embed
 * @returns {Promise<number[]>} Embedding vector
 */
async function ollamaEmbed(model, text) {
  const res = await fetch("http://localhost:11434/api/embeddings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt: text,
    }),
  });

  if (!res.ok) {
    throw new Error(`Ollama embed failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  if (!data.embedding) {
    throw new Error("No embedding returned from Ollama");
  }

  return data.embedding;
}

module.exports = { ollamaChat, ollamaEmbed };
