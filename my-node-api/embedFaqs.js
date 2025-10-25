require("dotenv").config();
const fs = require("fs");
const { embedText } = require("./services/geminiService");

(async () => {
  const faqs = require("./faqs_clean.json");
  const texts = faqs.map(f => `${f.question} ${f.answer}`);

  console.log("Embedding", texts.length, "FAQs...");
  const embeddings = await embedText(texts);

  const embeddedFaqs = faqs.map((faq, i) => ({
    ...faq,
    embedding: embeddings[i]?.values || []
  }));

  fs.writeFileSync("./faqs_embedded.json", JSON.stringify(embeddedFaqs, null, 2));
  console.log("✅ Embeddings saved to faqs_embedded.json");
})();