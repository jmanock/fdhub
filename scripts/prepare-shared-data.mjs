import { access, copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const hubRoot = path.resolve(scriptDir, "..");
const networkRoot = path.resolve(hubRoot, "..");
const localJournalDir = path.join(hubRoot, "data", "journal");
const sharedDataDir = path.join(networkRoot, "shared", "data");
const files = ["storyCategories.json", "stories.json", "travelNews.json"];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function validateArrayFile(filePath) {
  try {
    const parsed = JSON.parse(await readFile(filePath, "utf8"));

    if (!Array.isArray(parsed)) {
      console.warn(`[journal-data] ${filePath} is not a JSON array. Journal will use empty data if loaded.`);
    }
  } catch (error) {
    console.warn(`[journal-data] Could not validate ${filePath}: ${error.message}`);
  }
}

await mkdir(localJournalDir, { recursive: true });

for (const fileName of files) {
  const sharedPath = path.join(sharedDataDir, fileName);
  const localPath = path.join(localJournalDir, fileName);

  if (await exists(sharedPath)) {
    await copyFile(sharedPath, localPath);
    await validateArrayFile(localPath);
    console.log(`[journal-data] Copied ${fileName} from shared/data into Hub data/journal.`);
    continue;
  }

  if (await exists(localPath)) {
    await validateArrayFile(localPath);
    console.log(`[journal-data] Using Hub-local ${fileName}.`);
    continue;
  }

  await writeFile(localPath, "[]\n");
  console.warn(`[journal-data] ${fileName} was missing. Created an empty Hub-local fallback.`);
}
