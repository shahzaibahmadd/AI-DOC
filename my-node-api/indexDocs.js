require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { embedText } = require("./services/geminiService");
const { initCollection, upsertPoints } = require("./services/vectorDbClient");

const BATCH_SIZE = 500; // 👈 adjust if still too big

async function indexDocs() {
  await initCollection("faqs");

  const faqPath = path.join(__dirname, "faqs.json");
  if (!fs.existsSync(faqPath)) {
    console.error("faqs.json not found in project root.");
    process.exit(1);
  }

  const faqs = JSON.parse(fs.readFileSync(faqPath, "utf8"));
  console.log(`Indexing ${faqs.length} FAQ items...`);

  const texts = faqs.map(f => `${f.question}\n\n${f.answer}`);
  const embeddings = await embedText(texts);

  const points = faqs.map((faq, i) => ({
    id: i + 1,
    vector: embeddings[i] || [],
    payload: { question: faq.question, answer: faq.answer },
  })).filter(p => Array.isArray(p.vector) && p.vector.length > 0);

  console.log(`Uploading ${points.length} valid embeddings to Qdrant...`);

  // 🚀 Upload in batches
  for (let i = 0; i < points.length; i += BATCH_SIZE) {
    const batch = points.slice(i, i + BATCH_SIZE);
    console.log(`📦 Uploading batch ${i / BATCH_SIZE + 1} (${batch.length} points)...`);
    await upsertPoints(batch, "faqs");
  }

  console.log("✅ Upload complete!");
}

indexDocs().catch(err => {
  console.error("indexDocs failed:", err);
  process.exit(1);
});
