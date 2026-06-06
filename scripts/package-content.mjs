import { readFile } from "node:fs/promises";
import path from "node:path";

const registryPath = path.join(process.cwd(), "app", "lib", "vacationPackages.js");
const source = await readFile(registryPath, "utf8");
const slugs = [...source.matchAll(/^\s+slug: "([^"]+)"/gm)].map((match) => match[1]);
const requiredFields = ["title:", "metaDescription:", "h1:", "summary:", "options:", "tips:", "related:", "faqs:"];
const missingFields = requiredFields.filter((field) => !source.includes(field));
const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);

if (missingFields.length || duplicateSlugs.length) {
  console.error("Vacation package registry validation failed.");
  if (missingFields.length) console.error(`Missing required fields: ${missingFields.join(", ")}`);
  if (duplicateSlugs.length) console.error(`Duplicate slugs: ${[...new Set(duplicateSlugs)].join(", ")}`);
  process.exitCode = 1;
} else {
  console.log(`Vacation package registry ready: ${slugs.length} unique search-driven package pages.`);
  console.log("Required review before adding a package: proven query, unique trip framework, transparent assumptions, cost rows, network links, FAQs, and current source checks.");
}
