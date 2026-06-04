import { readFileSync } from "node:fs";
import path from "node:path";
import { baseUrl } from "./network";

const travelNewsPath = path.join(process.cwd(), "data", "journal", "travelNews.json");

function loadTravelNewsSafe() {
  try {
    const parsed = JSON.parse(readFileSync(travelNewsPath, "utf8"));

    if (!Array.isArray(parsed)) {
      console.warn(`[travel-news] ${travelNewsPath} must be a JSON array. Using empty data.`);
      return [];
    }

    return parsed;
  } catch (error) {
    console.warn(`[travel-news] Could not load ${travelNewsPath}: ${error.message}. Using empty data.`);
    return [];
  }
}

const travelNewsItems = loadTravelNewsSafe();

export function getTravelNewsItems(limit = 4) {
  return travelNewsItems
    .map((item) => ({
      ...item,
      path: `/journal/news/${item.slug}`,
      url: `${baseUrl}/journal/news/${item.slug}`
    }))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

export function getTravelNewsItem(slug) {
  return getTravelNewsItems(100).find((item) => item.slug === slug) || null;
}
