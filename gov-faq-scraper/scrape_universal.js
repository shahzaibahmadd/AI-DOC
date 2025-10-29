const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const { URL } = require("url");

const BASE_URL = "https://www.punjab-zameen.gov.pk"; // change per site
const visited = new Set();
const results = [];

async function scrapePage(browser, url, depth = 0) {
  if (visited.has(url) || depth > 2) return; // limit depth to 2
  visited.add(url);
  console.log(`🔍 Scraping: ${url}`);

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  const html = await page.content();
  const $ = cheerio.load(html);

  const faqs = extractFAQs($);
  if (faqs.length) {
    console.log(`✅ Found ${faqs.length} Q/A pairs on ${url}`);
    results.push(...faqs.map((f) => ({ ...f, source: url })));
  }

  // find internal links
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

  await page.close();

  // recursively crawl a few more pages
  for (const link of [...new Set(links)]) {
    if (visited.size < 30) {
      await scrapePage(browser, link, depth + 1);
    }
  }
}

function extractFAQs($) {
  const faqs = [];

  $("p.accordion").each((i, el) => {
    const question = $(el).text().trim();
    const answer = $(el).next(".panel").text().trim();
    if (question && answer) faqs.push({ question, answer });
  });

  $(".accordion-item, .faq-item").each((i, el) => {
    const question =
      $(el).find(".accordion-button, .question, h3, h4, summary").text().trim() ||
      "";
    const answer =
      $(el).find(".accordion-body, .answer, p, div").text().trim() || "";
    if (question && answer) faqs.push({ question, answer });
  });

  $("details").each((i, el) => {
    const question = $(el).find("summary").text().trim();
    const answer = $(el).text().replace(question, "").trim();
    if (question && answer) faqs.push({ question, answer });
  });

  $("h2, h3, h4").each((i, el) => {
    const text = $(el).text().trim();
    if (/(\?$|faq|question)/i.test(text)) {
      const next = $(el).nextUntil("h2, h3, h4").text().trim();
      if (next && next.length > 20) faqs.push({ question: text, answer: next });
    }
  });

  return faqs.filter(
    (v, i, a) => a.findIndex((t) => t.question === v.question) === i
  );
}

(async () => {
  console.log(`🚀 Launching headless browser...`);
  const browser = await puppeteer.launch({ headless: true });
  await scrapePage(browser, BASE_URL);
  await browser.close();

  fs.writeFileSync("faqs_full_data.json", JSON.stringify(results, null, 2));
  console.log(`\n✅ Saved ${results.length} total Q/A pairs to faqs_full_data.json`);
})();
