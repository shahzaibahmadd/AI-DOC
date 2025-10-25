// services/faqService.js

// Simple FAQ list (you can load this from DB or JSON)
const faqs = [
  {
    question: "What documents are required for the online learner driving license?",
    answer: "Scanned CNIC (front & back) and a medical certificate are required."
  },
  {
    question: "What is the age requirement for a learner driving license?",
    answer: "You must be at least 18 years old to apply for a learner license."
  },
  {
    question: "Can I apply for a learner license online?",
    answer: "Yes. Visit the DLIMS portal or your local traffic police website to apply online."
  }
];

/**
 * Very simple retriever:
 * Finds the FAQ that best matches the user query (case-insensitive).
 */
function findBestAnswer(userQuery) {
  const q = userQuery.toLowerCase();
  for (const faq of faqs) {
    if (q.includes(faq.question.toLowerCase().split(" ")[0])) {
      return faq.answer;
    }
  }
  return null; // no match → let AI handle it
}

module.exports = { findBestAnswer };
