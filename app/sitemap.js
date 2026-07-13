import { baseUrl, landingPages } from "./lib/network";
import { destinationHubs } from "./lib/destinationHubs";
import { getAllStories, getStoryCategories, hasJournalData, storyBasePath } from "./lib/stories";
import { getTravelNewsItems } from "./lib/travelNews";
import { vacationPackages } from "./lib/vacationPackages";
import { packageCategories } from "./lib/packageDiscovery";
import { familyVacationGuides, getFamilyVacationGuide } from "./lib/familyVacations";
import { cruisePlanningGuides, getCruisePlanningGuide } from "./lib/cruisePlanning";
import { destinationAuthorities, destinationPageTypes, destinationPath } from "./lib/destinationAuthority";
import { budgetVacationHubs } from "./lib/vacationBuilder";
import { allEventTravelPages, eventTravelPath } from "./lib/eventTravel";

const lastModified = new Date();

const staticPages = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
  { path: "/editorial-policy", priority: 0.4, changeFrequency: "monthly" },
  { path: "/how-we-find-deals", priority: 0.4, changeFrequency: "monthly" },
  { path: "/vacation-packages", priority: 0.95, changeFrequency: "weekly" },
  { path: "/vacation-builder", priority: 0.98, changeFrequency: "weekly" },
  { path: "/budget-travel", priority: 0.96, changeFrequency: "weekly" },
  { path: "/destinations", priority: 0.96, changeFrequency: "weekly" },
  { path: "/events", priority: 0.97, changeFrequency: "weekly" },
  { path: "/florida-right-now", priority: 0.98, changeFrequency: "daily" },
  { path: "/how-florida-live-data-works", priority: 0.72, changeFrequency: "monthly" },
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
  const destinationAuthorityPages = destinationAuthorities.flatMap((destination) => [
    { url: `${baseUrl}${destinationPath(destination)}`, lastModified, changeFrequency: "weekly", priority: 0.94 },
    ...destinationPageTypes.map((type) => ({ url: `${baseUrl}${destinationPath(destination, type)}`, lastModified, changeFrequency: "weekly", priority: 0.86 }))
  ]);
  const budgetVacationHubPages = budgetVacationHubs.map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.91
  }));
  const eventTravelPages = allEventTravelPages.map((item) => ({
    url: `${baseUrl}${eventTravelPath(item)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: item.type === "world_cup_hub" ? 0.96 : item.type === "event_hub" ? 0.92 : item.worldCup2026 ? 0.9 : 0.84
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })),
    ...destinationHubPages,
    ...destinationAuthorityPages,
    ...budgetVacationHubPages,
    ...eventTravelPages,
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
