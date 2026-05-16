import { baseUrl, landingPages } from "./lib/network";

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

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })),
    ...hubPages
  ];
}
