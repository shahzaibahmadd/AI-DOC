// scrape.js
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function scrapeDLIMS() {
  try {
    const url = "https://www.punjab-zameen.gov.pk/FAQs";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let faqs = [];

    // Select each accordion item
    $(".accordion-item").each((i, el) => {
      const question = $(el).find(".accordion-button").text().trim();
      const answer = $(el).find(".accordion-body").text().trim();

      faqs.push({ question, answer });
    });

    // Save to JSON file
    fs.writeFileSync("faqszameen.json", JSON.stringify(faqs, null, 2));
    console.log("✅ FAQs scraped and saved to faqs.json");
  } catch (err) {
    console.error("❌ Error scraping DLIMS:", err.message);
  }
}

scrapeDLIMS();
