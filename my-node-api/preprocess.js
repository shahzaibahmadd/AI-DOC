const fs = require("fs");

const faqs = require("./faqsnadra.json");

const cleaned = faqs.map(faq => ({
  question: faq.question.replace(/\s+/g, " ").trim(),
  answer: faq.answer.replace(/\s+/g, " ").trim(),
}));

fs.writeFileSync("./faqs_cleannadra.json", JSON.stringify(cleaned, null, 2));
console.log("✅ Cleaned data saved to faqs_clean.json");
