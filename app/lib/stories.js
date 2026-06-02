import { readFileSync } from "node:fs";
import path from "node:path";
import { baseUrl, sites } from "./network";

export const storyBasePath = "/journal";

function readSharedJson(fileName) {
  const filePath = path.join(process.cwd(), "..", "shared", "data", fileName);
  return JSON.parse(readFileSync(filePath, "utf8"));
}

const storyCategories = readSharedJson("storyCategories.json");
const stories = readSharedJson("stories.json");

export const storyCategoryMap = Object.fromEntries(
  storyCategories.map((category) => [category.slug, category])
);

export function storyPath(slug) {
  return `${storyBasePath}/${slug}`;
}

export function getAllStories() {
  return stories
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

export function getTrendingStories(limit = 4) {
  return getAllStories()
    .filter((story) => story.trending)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getPopularStories(limit = 5) {
  return getAllStories()
    .sort((a, b) => b.views - a.views)
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
