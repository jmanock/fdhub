import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const hubRoot = path.resolve(scriptDir, "..");
const networkRoot = path.resolve(hubRoot, "..");
const draftDir = path.join(hubRoot, "story-drafts");
const localJournalDir = path.join(hubRoot, "data", "journal");
const localStoriesPath = path.join(localJournalDir, "stories.json");
const sharedStoriesPath = path.join(networkRoot, "shared", "data", "stories.json");
const publishFlag = process.argv.includes("--confirm-reviewed");

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

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

const existingStories = (await exists(localStoriesPath))
  ? JSON.parse(await readFile(localStoriesPath, "utf8"))
  : [];
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

const nextStories = [...existingStories, ...newStories];

await mkdir(localJournalDir, { recursive: true });
await writeFile(localStoriesPath, `${JSON.stringify(nextStories, null, 2)}\n`);
console.log(`Published ${newStories.length} reviewed stories into Hub data/journal/stories.json.`);

if (await exists(path.dirname(sharedStoriesPath))) {
  await writeFile(sharedStoriesPath, `${JSON.stringify(nextStories, null, 2)}\n`);
  console.log("Synced reviewed stories into shared/data/stories.json.");
} else {
  console.log("shared/data was not found; Hub-local story data was updated only.");
}
