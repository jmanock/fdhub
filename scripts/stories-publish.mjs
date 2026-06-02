import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const draftDir = path.join(process.cwd(), "story-drafts");
const sharedStoriesPath = path.join(process.cwd(), "..", "shared", "data", "stories.json");
const publishFlag = process.argv.includes("--confirm-reviewed");

if (!publishFlag) {
  console.log("Publishing requires manual review. Re-run with --confirm-reviewed after editorial approval.");
  process.exit(1);
}

let files = [];

try {
  files = (await readdir(draftDir)).filter((file) => file.endsWith(".json"));
} catch {
  files = [];
}

if (!files.length) {
  console.log("No reviewed story drafts found in story-drafts/.");
  process.exit(0);
}

const existingStories = JSON.parse(await readFile(sharedStoriesPath, "utf8"));
const existingSlugs = new Set(existingStories.map((story) => story.slug));
const newStories = [];

for (const file of files) {
  const story = JSON.parse(await readFile(path.join(draftDir, file), "utf8"));

  if (existingSlugs.has(story.slug)) {
    console.log(`SKIP ${file}: slug already exists in shared/data/stories.json`);
    continue;
  }

  newStories.push(story);
}

if (!newStories.length) {
  console.log("No new stories to publish.");
  process.exit(0);
}

await writeFile(sharedStoriesPath, `${JSON.stringify([...existingStories, ...newStories], null, 2)}\n`);
console.log(`Published ${newStories.length} reviewed stories into shared/data/stories.json.`);
