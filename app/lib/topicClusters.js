import { cruiseGuideLinks } from "./cruisePlanning";
import { destinationAuthorities, destinationPageTypes, destinationPath } from "./destinationAuthority";
import { allEventTravelPages, eventTravelPath } from "./eventTravel";
import { familyGuideLinks } from "./familyVacations";
import { sites } from "./network";
import { packageCategories } from "./packageDiscovery";
import { getAllStories } from "./stories";
import { budgetVacationHubs, vacationRecommendations } from "./vacationBuilder";
import { vacationPackages } from "./vacationPackages";

export const authorityHubs = [
  ["Family Vacations", "/family-vacations", "Family destinations, budget trips, beaches, cruises, and complete family packages."],
  ["Cruises From Florida", "/cruises", "Florida ports, cruise lengths, family sailings, Bahamas trips, and cruise packages."],
  ["Florida Destinations", "/destinations", "Destination mini-sites with hotels, flights, attractions, packages, and local planning."],
  ["Vacation Packages", "/vacation-packages", "Complete trip frameworks connecting hotels, flights, cruises, activities, and budgets."],
  ["Things To Do In Florida", "/things-to-do", "Activities, attractions, local ideas, and the trips they complete."],
  ["Travel Events", "/events", "Event-driven trips, seasonal travel, theme park events, and trending destinations."],
  ["Travel Stories", "/journal", "Editorial destination stories, comparisons, and trip-planning reads."],
  ["Budget Travel", "/budget-travel", "Budget-first vacation ideas, family trips, cruises, and package comparisons."]
];

const clusterLinks = {
  family: familyGuideLinks,
  cruises: cruiseGuideLinks,
  destinations: destinationAuthorities.map((item) => [`${item.name} Travel Guide`, destinationPath(item)]),
  packages: [...packageCategories.map((item) => [item.title, `/${item.slug}`]), ...vacationPackages.map((item) => [item.h1, `/${item.slug}`])],
  activities: [
    ["Things To Do In Florida", "/things-to-do"],
    ["Things To Do In Orlando", `${sites.local}/things-to-do-in-orlando`],
    ["Things To Do In Miami", `${sites.local}/miami-things-to-do`],
    ["Free Things To Do In Florida", `${sites.local}/best-free-things-to-do-in-florida`],
    ["Weekend Activities In Florida", `${sites.local}/things-to-do-in-florida-this-weekend`]
  ],
  events: allEventTravelPages.map((item) => [item.title, eventTravelPath(item)]),
  stories: [["Florida Travel Journal", "/journal"], ...getAllStories().map((item) => [item.title, item.path])],
  budget: budgetVacationHubs.map((item) => [item.title, `/${item.slug}`])
};

const parentByCluster = {
  family: ["Family Vacations", "/family-vacations"],
  cruises: ["Cruises From Florida", "/cruises"],
  destinations: ["Florida Destinations", "/destinations"],
  packages: ["Vacation Packages", "/vacation-packages"],
  activities: ["Things To Do In Florida", "/things-to-do"],
  events: ["Travel Events", "/events"],
  stories: ["Travel Stories", "/journal"],
  budget: ["Budget Travel", "/budget-travel"]
};

const destinationAliases = {
  Clearwater: "Clearwater Beach",
  "Port Canaveral": "Orlando"
};

function withoutCurrent(links, currentPath, limit) {
  const unique = links.filter((item, index, array) => array.findIndex((candidate) => candidate[1] === item[1]) === index);
  const currentIndex = unique.findIndex(([, href]) => href === currentPath);
  const ordered = currentIndex >= 0 ? [...unique.slice(currentIndex + 1), ...unique.slice(0, currentIndex)] : unique;
  return ordered.filter(([, href]) => href !== currentPath).slice(0, limit);
}

function findDestination(destination) {
  const name = destinationAliases[destination] || destination;
  return destinationAuthorities.find((item) => item.name === name || item.slug === destination);
}

function relatedDestinationLinks(destination, limit = 6) {
  const selected = findDestination(destination);
  if (!selected) return clusterLinks.destinations.slice(0, limit);
  const related = selected.related.map((slug) => destinationAuthorities.find((item) => item.slug === slug)).filter(Boolean);
  return [[`${selected.name} Travel Guide`, destinationPath(selected)], ...related.map((item) => [`${item.name} Travel Guide`, destinationPath(item)])].slice(0, limit);
}

function destinationSpokeLinks(destination, limit = 6) {
  const selected = findDestination(destination);
  if (!selected) return [];
  return destinationPageTypes.slice(0, limit).map((type) => [`${selected.name} ${type.label}`, destinationPath(selected, type)]);
}

function packageLinks(destination, limit = 6) {
  const selectedName = destinationAliases[destination] || destination;
  return vacationPackages
    .filter((item) => !selectedName || item.destination === selectedName || item.destination === "Florida" || item.options.some((option) => option.destination === selectedName || option.destination === destination))
    .slice(0, limit)
    .map((item) => [item.h1, `/${item.slug}`]);
}

function recommendationLinks(destination, limit = 4) {
  const selectedName = destinationAliases[destination] || destination;
  return vacationRecommendations
    .filter((item) => !selectedName || item.destination === selectedName)
    .slice(0, limit)
    .map((item) => [item.title, item.packageHref]);
}

function storyLinks(destination, limit = 6) {
  return getAllStories()
    .filter((item) => !destination || item.destination === destination || item.relatedDestinations?.includes(destination))
    .slice(0, limit)
    .map((item) => [item.title, item.path]);
}

export function getAuthorityLinkGroups({ currentPath, cluster = "packages", destination = null }) {
  const parent = parentByCluster[cluster] || parentByCluster.packages;
  const siblingLinks = withoutCurrent(clusterLinks[cluster] || clusterLinks.packages, currentPath, 8);
  const destinations = withoutCurrent(relatedDestinationLinks(destination), currentPath, 6);
  const spokes = withoutCurrent(destinationSpokeLinks(destination), currentPath, 6);
  const packages = withoutCurrent([...recommendationLinks(destination), ...packageLinks(destination)], currentPath, 6);
  const stories = withoutCurrent(storyLinks(destination), currentPath, 5);
  const crossCluster = withoutCurrent(authorityHubs.map(([label, href]) => [label, href]), currentPath, 8);
  const network = [
    ["Compare Florida Flights", destination ? `${sites.flights}` : sites.flights],
    ["Compare Florida Hotels", destination ? `${sites.hotels}` : sites.hotels],
    ["Browse Florida Cruises", sites.cruises],
    ["Find Local Activities", sites.local]
  ];

  return {
    parent,
    groups: [
      { title: `More From ${parent[0]}`, links: siblingLinks },
      { title: "Related Destinations", links: destinations },
      { title: destination ? `${destination} Planning Guides` : "Destination Planning Guides", links: spokes },
      { title: "Related Vacation Packages", links: packages },
      { title: "Related Travel Stories", links: stories },
      { title: "Explore Travel Topics", links: crossCluster },
      { title: "Plan With The Florida Deals Network", links: network }
    ].filter((group) => group.links.length)
  };
}

export function inferTopicCluster(...values) {
  const text = values.filter(Boolean).join(" ").toLowerCase();
  if (text.includes("family")) return "family";
  if (text.includes("cruise") || text.includes("sailing") || text.includes("port canaveral")) return "cruises";
  if (text.includes("event") || text.includes("world cup") || text.includes("spring break") || text.includes("holiday")) return "events";
  if (text.includes("budget") || text.includes("cheap") || text.includes("under $") || text.includes("affordable")) return "budget";
  if (text.includes("things to do") || text.includes("activit") || text.includes("attraction")) return "activities";
  if (text.includes("story") || text.includes("journal")) return "stories";
  if (text.includes("destination") || text.includes("travel guide")) return "destinations";
  return "packages";
}
