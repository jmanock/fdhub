import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SAMBOAT_AFFILIATE_URL } from "../app/lib/affiliate/affiliateInventory.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const hubRoot = path.resolve(scriptDir, "..");
const draftDir = path.join(hubRoot, "story-drafts");
const requiredFields = [
  "slug",
  "title",
  "excerpt",
  "content",
  "category",
  "destination",
  "heroImage",
  "heroImageAlt",
  "publishDate",
  "updatedDate",
  "status",
  "relatedDestinations",
  "relatedGuides",
  "relatedSites",
  "tags",
  "faqs"
];

async function getDraftFiles() {
  try {
    return (await readdir(draftDir)).filter((file) => file.endsWith(".json"));
  } catch {
    return [];
  }
}

const files = await getDraftFiles();

if (!files.length) {
  console.log("No story drafts found in story-drafts/.");
  process.exit(0);
}

let failures = 0;

for (const file of files) {
  const filePath = path.join(draftDir, file);
  const story = JSON.parse(await readFile(filePath, "utf8"));
  const missing = requiredFields.filter((field) => !(field in story));
  const activeAffiliateLinks = (story.affiliateLinks || []).filter((link) => Boolean(link.affiliateUrl));
  const nonTrackedSailo = activeAffiliateLinks.filter(
    (link) => link.advertiser === "sailo" && !link.affiliateUrl.includes("awin")
  );
  const invalidSamBoat = activeAffiliateLinks.filter(
    (link) => link.advertiser === "samboat" && link.affiliateUrl !== SAMBOAT_AFFILIATE_URL
  );
  const warnings = [];

  if (missing.length) {
    warnings.push(`missing fields: ${missing.join(", ")}`);
  }

  if (!Array.isArray(story.content) || story.content.length < 3) {
    warnings.push("content should include at least three practical sections");
  }

  if (!["draft", "reviewed", "published"].includes(story.status)) {
    warnings.push("status must be draft, reviewed, or published");
  }

  if (!Array.isArray(story.faqs) || story.faqs.length < 2) {
    warnings.push("add at least two FAQs for story pages");
  }

  if (nonTrackedSailo.length) {
    warnings.push("Sailo links must use tracked AWIN URLs or remain unpublished");
  }

  if (invalidSamBoat.length) {
    warnings.push("SamBoat links must use the approved tracked AWIN URL");
  }

  if (!story.heroImageAlt || story.heroImageAlt.length < 20) {
    warnings.push("heroImageAlt should be descriptive");
  }

  if (warnings.length) {
    failures += 1;
    console.log(`WARN ${file}: ${warnings.join("; ")}`);
  } else {
    console.log(`OK ${file}: ready for manual editorial review`);
  }
}

if (failures) {
  console.log(`${failures} draft file(s) need editorial updates before publishing.`);
}
