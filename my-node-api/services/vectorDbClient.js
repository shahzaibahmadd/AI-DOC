// services/vectorDbClient.js
require("dotenv").config();
const { QdrantClient } = require("@qdrant/js-client-rest");

const client = new QdrantClient({
  url: process.env.QDRANT_URL || "http://localhost:6333",
  apiKey: process.env.QDRANT_API_KEY || undefined,
});

async function initCollection(name = "faqs") {
  try {
    const collections = await client.getCollections();
    const exists = collections.collections.some(c => c.name === name);
    if (!exists) {
      console.log(`🆕 Creating Qdrant collection '${name}'...`);
      await client.createCollection(name, {
        vectors: { size: 768, distance: "Cosine" },
      });
    } else {
      console.log(`✅ Collection '${name}' ready.`);
    }
  } catch (err) {
    console.error("❌ Qdrant init error:", err.message);
  }
}

async function upsertPoints(points, name = "faqs") {
  if (!Array.isArray(points) || !points.length) return console.warn("⚠️ No points to upload.");
  await client.upsert(name, { points });
  console.log(`✅ ${points.length} documents indexed successfully!`);
}

async function search(name, vector, limit = 5, threshold = 0.02) {
  return await client.search(name, {
    vector,
    limit,
    with_payload: true,
    score_threshold: threshold,
  });
}

module.exports = { client, initCollection, upsertPoints, search };
