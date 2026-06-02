import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const titleArg = args.find((arg) => arg.startsWith("--title="));
const categoryArg = args.find((arg) => arg.startsWith("--category="));
const destinationArg = args.find((arg) => arg.startsWith("--destination="));

const title = titleArg?.split("=").slice(1).join("=") || "Untitled Florida Travel Story";
const category = categoryArg?.split("=").slice(1).join("=") || "travel-tips";
const destination = destinationArg?.split("=").slice(1).join("=") || "Florida";
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const today = new Date().toISOString().slice(0, 10);
const draftDir = path.join(process.cwd(), "story-drafts");
const draftPath = path.join(draftDir, `${slug || "untitled-florida-story"}.json`);

const draft = {
  slug,
  title,
  excerpt: "Add a practical Florida travel summary before review.",
  content: [
    {
      heading: "Add A Specific Planning Section",
      body: "Replace this draft copy with original, destination-specific planning advice."
    }
  ],
  category,
  destination,
  heroImage: "",
  heroImageAlt: "",
  publishDate: today,
  updatedDate: today,
  featured: false,
  trending: false,
  affiliateLinks: [],
  relatedDestinations: [destination],
  relatedGuides: [],
  relatedSites: [],
  tags: [],
  views: 0,
  faqs: []
};

await mkdir(draftDir, { recursive: true });
await writeFile(draftPath, `${JSON.stringify(draft, null, 2)}\n`);

console.log(`Story draft created: ${draftPath}`);
console.log("Review, edit, and run npm run stories:review before publishing.");
