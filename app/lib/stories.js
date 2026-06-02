import { readFileSync } from "node:fs";
import path from "node:path";
import { baseUrl, sites } from "./network";

export const storyBasePath = "/journal";
const storyCategoriesPath = path.join(process.cwd(), "data", "journal", "storyCategories.json");
const storiesPath = path.join(process.cwd(), "data", "journal", "stories.json");

function warnJournalData(message) {
  console.warn(`[journal-data] ${message}`);
}

function readJsonArraySafe(filePath, label) {
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8"));

    if (!Array.isArray(parsed)) {
      warnJournalData(`${label} at ${filePath} must be a JSON array. Using empty data.`);
      return [];
    }

    return parsed;
  } catch (error) {
    warnJournalData(`${label} could not be loaded from ${filePath}: ${error.message}. Using empty data.`);
  }

  return [];
}

export function loadStoryCategoriesSafe() {
  return readJsonArraySafe(storyCategoriesPath, "Story categories");
}

export function loadStoriesSafe() {
  return readJsonArraySafe(storiesPath, "Stories");
}

const storyCategories = loadStoryCategoriesSafe();
const stories = loadStoriesSafe();

export function hasJournalData() {
  return storyCategories.length > 0 && stories.length > 0;
}

export const storyCategoryMap = Object.fromEntries(
  storyCategories.map((category) => [category.slug, category])
);

export function getStoryCategories() {
  return storyCategories;
}

export function getStoryCategory(slug) {
  return storyCategoryMap[slug] || null;
}

export function storyPath(slug) {
  return `${storyBasePath}/${slug}`;
}

export function getAllStories() {
  return stories
    .filter((story) => story.status !== "draft" && story.status !== "review")
    .map((story) => ({
      ...story,
      categoryDetails: storyCategoryMap[story.category] || {
        slug: story.category,
        name: story.category,
        description: "Florida travel story"
      },
      path: storyPath(story.slug),
      url: `${baseUrl}${storyPath(story.slug)}`
    }))
    .sort((a, b) => {
      const dateDiff = new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime();
      return dateDiff || b.views - a.views;
    });
}

export function getStory(slug) {
  return getAllStories().find((story) => story.slug === slug) || null;
}

export function getFeaturedStories(limit = 3) {
  return getAllStories()
    .filter((story) => story.featured)
    .slice(0, limit);
}

export function getEditorPickStories(limit = 4) {
  return getAllStories()
    .filter((story) => story.editorPick)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getTrendingStories(limit = 4) {
  return getAllStories()
    .filter((story) => story.trending)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getPopularStories(limit = 5) {
  return getAllStories()
    .sort((a, b) => Number(Boolean(b.popular)) - Number(Boolean(a.popular)) || b.views - a.views)
    .slice(0, limit);
}

export function getLatestStories(limit = 6) {
  return getAllStories()
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime() || b.views - a.views)
    .slice(0, limit);
}

export function getStoriesByCategory(categorySlug, limit = 6) {
  return getAllStories()
    .filter((story) => story.category === categorySlug)
    .slice(0, limit);
}

export function getRelatedStories(currentStory, limit = 3) {
  const currentTags = new Set(currentStory.tags || []);
  const currentDestinations = new Set(currentStory.relatedDestinations || []);

  return getAllStories()
    .filter((story) => story.slug !== currentStory.slug)
    .map((story) => {
      const tagScore = (story.tags || []).filter((tag) => currentTags.has(tag)).length;
      const destinationScore = (story.relatedDestinations || []).filter((destination) =>
        currentDestinations.has(destination)
      ).length;
      const categoryScore = story.category === currentStory.category ? 2 : 0;

      return {
        ...story,
        relatedScore: tagScore + destinationScore + categoryScore
      };
    })
    .sort((a, b) => b.relatedScore - a.relatedScore || b.views - a.views)
    .slice(0, limit);
}

export function getStoryPlanLinks(story) {
  const destination = story.destination === "Florida" ? "Florida" : story.destination;
  const relatedSites = story.relatedSites || [];
  const siteLinks = relatedSites.map((siteLink) => ({
    label: siteLink.label,
    href: siteLink.href,
    site: siteLink.site
  }));

  return [
    ...siteLinks,
    {
      label: `${destination} travel ideas on Florida Deals Hub`,
      href: story.destination === "Florida" ? "/florida-travel-guide" : `/${story.destination.toLowerCase().replaceAll(" ", "-")}-travel-guide`,
      site: "hub"
    }
  ].slice(0, 5);
}

export function getJournalCategorySections() {
  return storyCategories.map((category) => ({
    ...category,
    path: `${storyBasePath}/${category.slug}`,
    stories: getStoriesByCategory(category.slug, 3)
  }));
}

export function getStoryAffiliateLinks(story) {
  return (story.affiliateLinks || []).filter((link) => Boolean(link.affiliateUrl));
}

export function hasAffiliateDisclosure(story) {
  return (story.affiliateLinks || []).some((link) => link.disclosureRequired);
}

export function getNetworkPlanDefaults() {
  return [
    {
      label: "Find Florida flights",
      href: sites.flights,
      site: "flights"
    },
    {
      label: "Compare Florida hotels",
      href: sites.hotels,
      site: "hotels"
    },
    {
      label: "Browse Florida cruises",
      href: sites.cruises,
      site: "cruises"
    },
    {
      label: "Explore Florida things to do",
      href: sites.local,
      site: "local"
    }
  ];
}

const destinationPlanLinks = {
  Orlando: [
    ["Search Flights To Orlando", "https://flightdealsflorida.org/cheap-flights-from-orlando", "flights"],
    ["Compare Orlando Hotels", "https://hoteldealsflorida.org/cheap-hotels-in-orlando", "hotels"],
    ["Explore Orlando Things To Do", "https://localdealsflorida.org/things-to-do-in-orlando", "local"],
    ["Start With The Orlando Travel Guide", "/orlando-travel-guide", "hub"]
  ],
  Miami: [
    ["Search Flights To Miami", "https://flightdealsflorida.org/miami-flight-deals", "flights"],
    ["Compare Miami Hotels", "https://hoteldealsflorida.org/miami-beach-hotels", "hotels"],
    ["Browse Cruises From Miami", "https://cruisedealsflorida.org/cruises-from-miami", "cruises"],
    ["Read The Miami Travel Guide", "/miami-travel-guide", "hub"]
  ],
  "Key West": [
    ["Search Flights To Key West", "https://flightdealsflorida.org/key-west-flight-deals", "flights"],
    ["Compare Key West Hotels", "https://hoteldealsflorida.org/key-west-hotel-deals", "hotels"],
    ["Explore Key West Water Activities", "https://localdealsflorida.org/florida-water-activities", "local"],
    ["Read The Key West Travel Guide", "/key-west-travel-guide", "hub"]
  ],
  Clearwater: [
    ["Search Tampa Flights", "https://flightdealsflorida.org/cheap-flights-from-tampa", "flights"],
    ["Compare Clearwater Beach Hotels", "https://hoteldealsflorida.org/clearwater-beachfront-hotels", "hotels"],
    ["Explore Clearwater Things To Do", "https://localdealsflorida.org/florida-water-activities", "local"],
    ["Read The Clearwater Travel Guide", "/clearwater-travel-guide", "hub"]
  ],
  "Port Canaveral": [
    ["Browse Port Canaveral Cruises", "https://cruisedealsflorida.org/cruises-from-port-canaveral", "cruises"],
    ["Compare Cruise Port Hotels", "https://hoteldealsflorida.org/hotels-near-florida-cruise-ports", "hotels"],
    ["Search Orlando Flights Before Your Cruise", "https://flightdealsflorida.org/orlando-flight-deals", "flights"],
    ["Read The Port Canaveral Travel Guide", "/port-canaveral-travel-guide", "hub"]
  ],
  "St. Augustine": [
    ["Search Jacksonville Flights", "https://flightdealsflorida.org/jacksonville-flight-deals", "flights"],
    ["Compare St. Augustine Hotels", "https://hoteldealsflorida.org/st-augustine-hotel-deals", "hotels"],
    ["Explore St. Augustine Local Ideas", "https://localdealsflorida.org/st-augustine-local-deals", "local"],
    ["Read The St. Augustine Travel Guide", "/st-augustine-travel-guide", "hub"]
  ],
  Florida: [
    ["Find Florida Flights", sites.flights, "flights"],
    ["Compare Florida Hotels", sites.hotels, "hotels"],
    ["Browse Florida Cruises", sites.cruises, "cruises"],
    ["Explore Local Florida Deals", sites.local, "local"]
  ]
};

export function getPlanThisTripLinks(story) {
  const cruiseCategory = story.category === "cruise-stories";
  const baseLinks = destinationPlanLinks[story.destination] || destinationPlanLinks.Florida;

  if (cruiseCategory) {
    return [
      ["Browse Florida Cruise Deals", sites.cruises, "cruises"],
      ["Compare Cruise Port Hotels", "https://hoteldealsflorida.org/hotels-near-florida-cruise-ports", "hotels"],
      ["Search Flights Before Your Cruise", sites.flights, "flights"],
      ["Explore Things To Do Before Sailing", sites.local, "local"]
    ].map(([label, href, site]) => ({ label, href, site }));
  }

  return baseLinks.map(([label, href, site]) => ({ label, href, site }));
}
