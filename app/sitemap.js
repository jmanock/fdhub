import { baseUrl, landingPages } from "./lib/network";
import { getAllStories, getStoryCategories, hasJournalData, storyBasePath } from "./lib/stories";

const lastModified = new Date();

const staticPages = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
  { path: "/editorial-policy", priority: 0.4, changeFrequency: "monthly" },
  { path: "/how-we-find-deals", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" }
];

export default function sitemap() {
  const hubPages = landingPages.map((page) => ({
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

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })),
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
    ...storyPages
  ];
}
