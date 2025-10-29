const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { URL } = require("url");

const BASE_URL = "https://www.punjab-zameen.gov.pk"; // 👈 Change this for other websites
const visited = new Set();
const results = [];

async function scrapePage(url) {
  try {
    if (visited.has(url)) return;
    visited.add(url);

    console.log(`🔍 Scraping: ${url}`);
    const { data } = await axios.get(url, { timeout: 20000 });
    const $ = cheerio.load(data);

    // Extract text pairs (FAQ-style)
    const faqs = extractFAQs($);
    if (faqs.length) {
      console.log(`✅ Found ${faqs.length} Q/A pairs on ${url}`);
      results.push(...faqs.map((f) => ({ ...f, source: url })));
    }

    // Extract links for next pages
    const links = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");
      if (!href) return;
      const absolute = new URL(href, BASE_URL).href;
      if (
        absolute.startsWith(BASE_URL) &&
        !absolute.match(/\.(pdf|jpg|jpeg|png|doc|xls|zip)$/i)
      ) {
        links.push(absolute.split("#")[0]);
      }
    });

    // Visit internal links recursively (limit depth)
    for (const link of [...new Set(links)]) {
      if (visited.size < 30) {
        await scrapePage(link);
      }
    }
  } catch (err) {
    console.error(`❌ Error scraping ${url}:`, err.message);
  }
}

function extractFAQs($) {
  const faqs = [];

  // 1️⃣ Punjab Zameen-style
  $("p.accordion").each((i, el) => {
    const question = $(el).text().trim();
    const answer = $(el).next(".panel").text().trim();
    if (question && answer) faqs.push({ question, answer });
  });

  // 2️⃣ Common accordion patterns
  $(".accordion-item, .faq-item").each((i, el) => {
    const question =
      $(el).find(".accordion-button, .question, h3, h4, summary").text().trim() ||
      "";
    const answer =
      $(el).find(".accordion-body, .answer, p, div").text().trim() || "";
    if (question && answer) faqs.push({ question, answer });
  });

  // 3️⃣ Details-summary style
  $("details").each((i, el) => {
    const question = $(el).find("summary").text().trim();
    const answer = $(el).text().replace(question, "").trim();
    if (question && answer) faqs.push({ question, answer });
  });

  // 4️⃣ General question patterns
  $("h2, h3, h4").each((i, el) => {
    const text = $(el).text().trim();
    if (/(\?$|faq|question)/i.test(text)) {
      const next = $(el).nextUntil("h2, h3, h4").text().trim();
      if (next && next.length > 20)
        faqs.push({ question: text, answer: next });
    }
  });

  // Remove duplicates
  return faqs.filter(
    (v, i, a) => a.findIndex((t) => t.question === v.question) === i
  );
}

(async () => {
  console.log(`🚀 Starting crawl from ${BASE_URL} ...`);
  await scrapePage(BASE_URL);

  fs.writeFileSync("faqs_full_data.json", JSON.stringify(results, null, 2));
  console.log(`\n✅ Saved ${results.length} total Q/A pairs to faqs_full_data.json`);
})();
