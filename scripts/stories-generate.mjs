import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const hubRoot = path.resolve(scriptDir, "..");

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
const draftDir = path.join(hubRoot, "story-drafts");
const draftPath = path.join(draftDir, `${slug || "untitled-florida-story"}.json`);

const draft = {
  slug,
  title,
  excerpt: "Add a practical Florida travel summary before review.",
  content: [
    {
      heading: "Start With The Trip Goal",
      body: "Replace this draft copy with original, destination-specific planning advice."
    },
    {
      heading: "Compare The Main Planning Tradeoffs",
      body: "Add practical context about timing, hotels, flights, activities, budget, weather, or local logistics."
    },
    {
      heading: "Turn The Idea Into A Florida Trip",
      body: "Add next-step guidance with internal links and network routes that help the reader keep planning."
    }
  ],
  category,
  destination,
  heroImage: "",
  heroImageAlt: "",
  publishDate: today,
  updatedDate: today,
  status: "draft",
  featured: false,
  trending: false,
  popular: false,
  editorPick: false,
  affiliateLinks: [],
  relatedDestinations: [destination],
  relatedGuides: [],
  relatedSites: [],
  tags: [],
  views: 0,
  faqs: [
    {
      question: "Who is this Florida travel story best for?",
      answer: "Replace with a specific answer for the destination, trip type, or planning intent."
    },
    {
      question: "What should travelers compare before booking?",
      answer: "Replace with specific flight, hotel, cruise, activity, timing, or budget advice."
    }
  ],
  metadataTitle: `${title} | Florida Travel Journal`,
  metaDescription: "Replace with a unique, human-readable meta description before review."
};

await mkdir(draftDir, { recursive: true });
await writeFile(draftPath, `${JSON.stringify(draft, null, 2)}\n`);

console.log(`Story draft created: ${draftPath}`);
console.log("Review, edit, and run npm run stories:review before publishing.");
