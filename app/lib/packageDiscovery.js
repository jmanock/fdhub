import { pageImages, sites } from "./network";
import { vacationPackages } from "./vacationPackages";

const categoryDefinitions = [
  {
    slug: "family-vacation-packages",
    title: "Florida Family Vacation Packages",
    description: "Compare Florida family vacation packages with hotels, attractions, transportation, beaches, cruises, and realistic planning budgets.",
    image: pageImages.familyTrip,
    match: ["family", "orlando", "attraction"]
  },
  {
    slug: "weekend-vacation-packages",
    title: "Florida Weekend Vacation Packages",
    description: "Build short Florida vacation packages around practical hotels, transportation, activities, beaches, and cruise options.",
    image: pageImages.weekendBeach,
    match: ["weekend", "short", "three-night", "three night"]
  },
  {
    slug: "beach-vacation-packages",
    title: "Florida Beach Vacation Packages",
    description: "Compare Florida beach package ideas with coastal hotels, flights, water activities, transportation, and complete trip costs.",
    image: pageImages.clearwater,
    match: ["beach", "island", "water"]
  },
  {
    slug: "orlando-vacation-packages",
    title: "Orlando Vacation Packages",
    description: "Build Orlando vacation packages around family hotels, Disney and Universal attractions, flights, transportation, and realistic park-day planning.",
    image: pageImages.orlando,
    match: ["orlando", "family", "park"]
  },
  {
    slug: "florida-vacation-packages-guide",
    title: "Florida Vacation Packages Guide",
    description: "Compare complete Florida vacation package ideas with flights, hotels, cruises, attractions, transportation, and realistic planning budgets.",
    image: pageImages.planning,
    match: ["florida", "family", "weekend", "beach", "cruise"]
  },
  {
    slug: "miami-vacation-packages",
    title: "Miami Vacation Packages",
    description: "Build Miami vacation packages around beach hotels, flights, cruises, local activities, transportation, and practical weekend budgets.",
    image: pageImages.miami,
    match: ["miami", "cruise", "beach", "island"]
  },
  {
    slug: "family-vacation-packages-florida",
    title: "Family Vacation Packages Florida",
    description: "Compare Florida family vacation packages with flights, hotels, attractions, beaches, cruises, transportation, and realistic trip budgets.",
    image: pageImages.familyTrip,
    match: ["family", "orlando", "attraction", "beach"]
  },
  {
    slug: "weekend-vacation-packages-florida",
    title: "Weekend Vacation Packages Florida",
    description: "Compare Florida weekend vacation packages with short stays, flights, activities, beach trips, cruises, and manageable three-night plans.",
    image: pageImages.weekendBeach,
    match: ["weekend", "short", "three-night", "three night"]
  },
  {
    slug: "florida-resort-packages",
    title: "Florida Resort Vacation Packages",
    description: "Compare Florida resort package ideas with beach stays, family resorts, activities, transportation, and flexible vacation budgets.",
    image: pageImages.romance,
    match: ["resort", "beach", "family", "luxury"]
  },
  {
    slug: "cruise-packages",
    title: "Florida Cruise Vacation Packages",
    description: "Build a Florida cruise vacation with sailings, port hotels, flights, transfers, and pre-cruise activities.",
    image: pageImages.cruisePort,
    match: ["cruise", "sailing", "bahamas"]
  },
  {
    slug: "beach-vacations",
    title: "Florida Beach Vacation Packages",
    description: "Compare Florida beach vacations with coastal hotels, flights, water activities, and realistic trip costs.",
    image: pageImages.clearwater,
    match: ["beach", "island", "water"]
  },
  {
    slug: "weekend-getaways",
    title: "Florida Weekend Getaway Packages",
    description: "Discover short Florida trips that combine hotels, transportation, activities, cruises, and manageable schedules.",
    image: pageImages.weekendBeach,
    match: ["weekend", "short", "three-night", "three night"]
  },
  {
    slug: "disney-vacation-packages",
    title: "Disney Vacation Packages From Florida",
    description: "Build an Orlando theme park vacation around hotel location, flight options, attraction days, and a realistic family budget.",
    image: pageImages.themePark,
    match: ["orlando", "family"]
  },
  {
    slug: "couples-getaways",
    title: "Florida Couples Getaway Packages",
    description: "Compare Florida couples trips built around island stays, beaches, cruises, dining, and slower weekend schedules.",
    image: pageImages.romance,
    match: ["couples", "island", "miami"]
  },
  {
    slug: "last-minute-vacations",
    title: "Last Minute Florida Vacation Ideas",
    description: "Use flexible, lower-complexity Florida package frameworks when dates are close and availability matters more than a perfect itinerary.",
    image: pageImages.weekendBeach,
    match: ["weekend", "short", "drive"]
  },
  {
    slug: "luxury-vacations",
    title: "Luxury Florida Vacation Packages",
    description: "Compare higher-comfort Florida trips built around resort stays, island weekends, premium cruise plans, and more flexible budgets.",
    image: pageImages.romance,
    match: ["resort", "island", "miami", "cruise"]
  }
];

function packageText(item) {
  return [
    item.h1,
    item.summary,
    item.destination,
    ...item.bestFor,
    ...item.options.flatMap((option) => [option.name, option.destination, option.cruise, option.hotel, option.activities])
  ].join(" ").toLowerCase();
}

export const packageCategories = categoryDefinitions.map((category) => {
  const packages = vacationPackages.filter((item) =>
    category.match.some((term) => packageText(item).includes(term))
  );

  return {
    ...category,
    packages: packages.length ? packages : vacationPackages.slice(0, 4)
  };
});

export const packageCategoryMap = Object.fromEntries(packageCategories.map((category) => [category.slug, category]));

export function getPackageCategory(slug) {
  return packageCategoryMap[slug] || null;
}

export function getPackageDiscoveryFields(item) {
  const text = packageText(item);
  const styles = [
    text.includes("family") ? "Family" : null,
    text.includes("couple") || text.includes("island") ? "Couples" : null,
    text.includes("cruise") || text.includes("sailing") ? "Cruise" : null,
    text.includes("beach") || text.includes("island") ? "Beach" : null,
    text.includes("orlando") || text.includes("park") ? "Theme Park" : null,
    text.includes("weekend") || text.includes("three-night") ? "Weekend" : null
  ].filter(Boolean);
  const costText = item.options.map((option) => option.estimatedCost).join(" ");
  const maxBudget = costText.includes("5,") || costText.includes("4,") ? 5000 : costText.includes("3,") ? 3000 : 2000;
  const duration = text.includes("three-night") || text.includes("three night") ? "3 nights" : text.includes("four-night") || text.includes("four night") ? "4 nights" : "Weekend";

  return { styles: [...new Set(styles)], maxBudget, duration };
}

export const thingsToDoCollections = [
  {
    title: "Things To Do In Orlando",
    description: "Theme parks, family activities, free ideas, and rainy-day backups for Orlando packages.",
    href: `${sites.local}/things-to-do-in-orlando`,
    packageHref: "/florida-family-vacations-under-2000"
  },
  {
    title: "Things To Do In Miami",
    description: "Beaches, neighborhoods, waterfront activities, dining, and pre-cruise ideas.",
    href: `${sites.local}/miami-things-to-do`,
    packageHref: "/miami-cruise-vacation-packages"
  },
  {
    title: "Things To Do This Weekend",
    description: "Use current local ideas to complete a short Florida trip without overbuilding the itinerary.",
    href: `${sites.local}/things-to-do-in-florida-this-weekend`,
    packageHref: "/weekend-cruise-packages-from-florida"
  },
  {
    title: "Free Things To Do In Florida",
    description: "Balance hotel, flight, cruise, and attraction costs with useful free activities.",
    href: `${sites.local}/best-free-things-to-do-in-florida`,
    packageHref: "/florida-family-vacations-under-2000"
  }
];
