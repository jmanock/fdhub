import { baseUrl, landingPages } from "./lib/network";
import { destinationHubs } from "./lib/destinationHubs";
import { getAllStories, getStoryCategories, hasJournalData, storyBasePath } from "./lib/stories";
import { getTravelNewsItems } from "./lib/travelNews";
import { vacationPackages } from "./lib/vacationPackages";
import { packageCategories } from "./lib/packageDiscovery";
import { familyVacationGuides, getFamilyVacationGuide } from "./lib/familyVacations";
import { cruisePlanningGuides, getCruisePlanningGuide } from "./lib/cruisePlanning";

const lastModified = new Date();

const staticPages = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
  { path: "/editorial-policy", priority: 0.4, changeFrequency: "monthly" },
  { path: "/how-we-find-deals", priority: 0.4, changeFrequency: "monthly" },
  { path: "/vacation-packages", priority: 0.95, changeFrequency: "weekly" },
  { path: "/things-to-do", priority: 0.85, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" }
];

export default function sitemap() {
  const hubPages = landingPages.filter((page) => !getFamilyVacationGuide(page.slug) && !getCruisePlanningGuide(page.slug)).map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: page.article ? 0.9 : 0.8
  }));
  const storyPages = getAllStories().map((story) => ({
    url: story.url,
    lastModified: new Date(story.updatedDate),
    changeFrequency: "monthly",
    priority: story.featured ? 0.8 : 0.7
  }));
  const storyCategoryPages = getStoryCategories().map((category) => ({
    url: `${baseUrl}${storyBasePath}/${category.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.72
  }));
  const destinationHubPages = destinationHubs.map((hub) => ({
    url: `${baseUrl}/${hub.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.86
  }));
  const travelNewsPages = getTravelNewsItems(100).map((item) => ({
    url: item.url,
    lastModified: new Date(item.publishDate),
    changeFrequency: "weekly",
    priority: 0.68
  }));
  const vacationPackagePages = vacationPackages.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9
  }));
  const packageCategoryPages = packageCategories.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.88
  }));
  const familyVacationPages = familyVacationGuides.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: item.slug === "family-vacations" ? 0.96 : 0.9
  }));
  const cruisePlanningPages = cruisePlanningGuides.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: item.slug === "cruises" ? 0.96 : 0.9
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })),
    ...destinationHubPages,
    ...familyVacationPages,
    ...cruisePlanningPages,
    ...packageCategoryPages,
    ...vacationPackagePages,
    ...hubPages,
    ...(hasJournalData()
      ? [
          {
            url: `${baseUrl}${storyBasePath}`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.85
          },
          ...storyCategoryPages
        ]
      : []),
    ...storyPages,
    ...travelNewsPages
  ];
}
