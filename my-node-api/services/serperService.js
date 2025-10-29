require("dotenv").config();
const fetch = require("node-fetch");

const SERPER_API_KEY = process.env.SERPER_API_KEY;
const SERPER_URL = "https://google.serper.dev/search";

async function searchGoogle(query) {
  try {
    const res = await fetch(SERPER_URL, {
      method: "POST",
      headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, gl: "pk", hl: "en" }),
    });
    const data = await res.json();
    return (data.organic || [])
      .slice(0, 6)
      .map(r => ({ title: r.title, snippet: r.snippet || "", link: r.link }))
      .filter(r => r.title && r.snippet);
  } catch (err) {
    console.error("❌ Serper error:", err.message);
    return [];
  }
}

module.exports = { searchGoogle };
