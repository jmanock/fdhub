import { pageImages, sites } from "./network";
import { vacationPackages } from "./vacationPackages";

const destinationConfigs = {
  Orlando: {
    slug: "orlando-family-vacations",
    image: pageImages.orlando,
    intro: "Orlando gives families the widest range of theme parks, resort pools, flexible hotels, indoor attractions, and nearby cruise add-ons.",
    bestMonths: "January-May and September-November",
    rating: "Excellent for theme parks and first Florida trips",
    activities: ["Theme park days", "Resort pool time", "Indoor attractions", "Port Canaveral add-on"],
    network: [
      ["Book Flight", `${sites.flights}/cheap-flights-from-orlando`],
      ["Book Hotel", `${sites.hotels}/hotels-near-disney`],
      ["Book Cruise", `${sites.cruises}/cruises-from-port-canaveral`],
      ["View Activities", `${sites.local}/things-to-do-in-orlando`]
    ]
  },
  Clearwater: {
    slug: "clearwater-family-vacations",
    image: pageImages.clearwater,
    intro: "Clearwater works for families who want a Gulf Coast beach, hotel pool, sunsets, and an easier schedule than a theme park trip.",
    bestMonths: "October-May",
    rating: "Excellent for beach-first family trips",
    activities: ["Beach and pool days", "Sunset outings", "Aquarium or indoor backup", "Tampa day trip"],
    network: [
      ["Book Flight", `${sites.flights}/cheap-flights-from-tampa`],
      ["Book Hotel", `${sites.hotels}/clearwater-beachfront-hotels`],
      ["Book Cruise", `${sites.cruises}/cruises-from-tampa`],
      ["View Activities", `${sites.local}/florida-water-activities`]
    ]
  },
  "Key West": {
    slug: "key-west-family-vacations",
    image: pageImages.keyWest,
    intro: "Key West fits families who value island time, water activities, sunsets, walkability, and a slower schedule.",
    bestMonths: "November-April",
    rating: "Best for older kids and water-loving families",
    activities: ["Water activities", "Sunset gathering", "Historic streets", "Florida Keys road trip"],
    network: [
      ["Book Flight", `${sites.flights}/key-west-flight-deals`],
      ["Book Hotel", `${sites.hotels}/key-west-hotel-deals`],
      ["View Cruises", `${sites.cruises}/family-cruises-from-florida`],
      ["View Activities", `${sites.local}/florida-water-activities`]
    ]
  },
  Tampa: {
    slug: "tampa-family-vacations",
    image: pageImages.tampa,
    intro: "Tampa combines city attractions, Gulf Coast access, cruises, family dining, and easy Clearwater add-ons.",
    bestMonths: "October-May",
    rating: "Strong all-around family city and coast base",
    activities: ["Family attractions", "Riverwalk time", "Clearwater day trip", "Cruise departure add-on"],
    network: [
      ["Book Flight", `${sites.flights}/cheap-flights-from-tampa`],
      ["Book Hotel", `${sites.hotels}/tampa-hotel-deals`],
      ["Book Cruise", `${sites.cruises}/cruises-from-tampa`],
      ["View Activities", `${sites.local}/tampa-weekend-activities`]
    ]
  },
  "St. Augustine": {
    slug: "st-augustine-family-vacations",
    image: pageImages.roadTrip,
    intro: "St. Augustine offers a walkable historic district, nearby beaches, family attractions, and manageable road-trip pacing.",
    bestMonths: "October-May",
    rating: "Excellent for history, beaches, and short road trips",
    activities: ["Historic district walks", "Family tours", "Beach time", "Jacksonville add-on"],
    network: [
      ["Book Flight", `${sites.flights}/jacksonville-flight-deals`],
      ["Book Hotel", `${sites.hotels}/st-augustine-hotel-deals`],
      ["View Cruises", `${sites.cruises}/family-cruises-from-florida`],
      ["View Activities", `${sites.local}/st-augustine-local-deals`]
    ]
  },
  Miami: {
    slug: "miami-family-vacations",
    image: pageImages.miami,
    intro: "Miami family trips work best when beach time, hotel location, indoor backups, and cruise or neighborhood activities are planned together.",
    bestMonths: "November-April",
    rating: "Strong for beaches, cruises, and older kids",
    activities: ["Beach morning", "Museum or aquarium", "Waterfront outing", "Pre-cruise activity"],
    network: [
      ["Book Flight", `${sites.flights}/miami-flight-deals`],
      ["Book Hotel", `${sites.hotels}/miami-beach-hotels`],
      ["Book Cruise", `${sites.cruises}/cruises-from-miami`],
      ["View Activities", `${sites.local}/miami-things-to-do`]
    ]
  }
};

const familyThemes = [
  ["family-vacations", "Florida Family Vacations", "Build a complete Florida family vacation around the destination, budget, travel time, lodging, and activities that fit your family.", pageImages.familyTrip, "Florida", "All family trip styles"],
  ["best-florida-family-vacations", "Best Family Vacations In Florida", "Compare Florida's strongest family destinations for theme parks, beaches, cruises, history, and easy weekend trips.", pageImages.familyTrip, "Florida", "Families comparing destinations"],
  ["family-vacations-under-5000", "Florida Family Vacations Under $5,000", "Compare complete family trips with room for stronger hotels, flights, theme parks, beach time, or a short cruise.", pageImages.familyTrip, "Florida", "Families planning a fuller vacation"],
  ["affordable-florida-family-vacations", "Affordable Florida Family Vacations", "Find practical family trips that control the largest costs while keeping beaches, activities, and memorable experiences in the plan.", pageImages.planning, "Florida", "Value-focused families"],
  ["luxury-florida-family-vacations", "Luxury Florida Family Vacations", "Compare higher-comfort Florida family trips built around resorts, premium locations, cruise cabins, and easier logistics.", pageImages.romance, "Florida", "Families prioritizing comfort"],
  ["family-beach-vacations-florida", "Florida Family Beach Vacations", "Compare family beach vacations by water access, hotel convenience, nearby activities, weather backups, and realistic cost.", pageImages.clearwater, "Florida", "Beach-loving families"],
  ["family-weekend-getaways-florida", "Florida Family Weekend Getaways", "Plan short Florida family trips with one clear anchor, fewer hotel moves, and activities that fit a long weekend.", pageImages.weekendBeach, "Florida", "Short family trips"],
  ["family-cruise-vacations-florida", "Florida Family Cruise Vacations", "Build a family cruise vacation around the sailing, port hotel, flights, transfers, and pre-cruise activity plan.", pageImages.cruisePort, "Florida", "Families considering a cruise"]
];

function budgetCards(destination) {
  return [
    ["Value plan", "$1,500-$2,000", `A focused ${destination} long weekend with fewer paid activities and flexible lodging.`],
    ["Balanced plan", "$2,500-$3,500", `A fuller ${destination} trip with a stronger hotel location and two or three anchor activities.`],
    ["Comfort plan", "$4,000-$5,000+", `A higher-comfort ${destination} vacation with easier logistics, premium stays, or cruise add-ons.`]
  ];
}

function makeTheme([slug, h1, intro, image, destination, rating]) {
  return {
    slug,
    h1,
    title: `${h1} | Packages, Costs & Family Trip Ideas`,
    metaDescription: `${intro} Compare flights, hotels, cruises, activities, budgets, and family package ideas.`,
    intro,
    image,
    imageAlt: `${h1} with family-friendly hotels activities flights and vacation packages`,
    destination,
    bestMonths: "Varies by destination and trip style",
    rating,
    activities: ["Beach and pool time", "Family attractions", "Rainy-day backup", "Flexible local activity"],
    network: [
      ["Book Flight", sites.flights],
      ["Book Hotel", sites.hotels],
      ["Book Cruise", sites.cruises],
      ["View Activities", sites.local]
    ],
    budgets: budgetCards(destination)
  };
}

function makeDestination(name, config) {
  return {
    ...config,
    h1: `${name} Family Vacations`,
    title: `${name} Family Vacations | Packages, Costs & Things To Do`,
    metaDescription: `Plan ${name} family vacations with suggested flights, hotels, cruises, activities, estimated budgets, best travel months, and related Florida packages.`,
    imageAlt: `${name} family vacation with hotels flights activities and package planning`,
    destination: name,
    budgets: budgetCards(name)
  };
}

export const familyVacationGuides = [
  ...familyThemes.map(makeTheme),
  ...Object.entries(destinationConfigs).map(([name, config]) => makeDestination(name, config))
];

export const familyVacationGuideMap = Object.fromEntries(familyVacationGuides.map((guide) => [guide.slug, guide]));
familyVacationGuideMap["florida-family-vacations"] = familyVacationGuideMap["family-vacations"];

export function getFamilyVacationGuide(slug) {
  return familyVacationGuideMap[slug] || null;
}

export function getFamilyPackages(guide, limit = 6) {
  const isStatewide = guide.destination === "Florida";

  return vacationPackages
    .filter((item) =>
      isStatewide
        ? item.bestFor.some((tag) => tag.toLowerCase().includes("famil")) || item.destination === "Florida"
        : item.destination === guide.destination ||
          item.options.some((option) => option.destination === guide.destination) ||
          (item.destination === "Florida" && item.bestFor.some((tag) => tag.toLowerCase().includes("famil")))
    )
    .sort((a, b) => {
      const score = (item) =>
        (item.destination === guide.destination ? 4 : 0) +
        (item.options.some((option) => option.destination === guide.destination) ? 3 : 0) +
        (item.destination === "Florida" ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function getFamilyGallery(guide) {
  const images = [guide.image, pageImages.familyTrip, pageImages.clearwater, pageImages.orlando, pageImages.cruisePort];
  return [...new Set(images)].slice(0, 4);
}

export const familyGuideLinks = [
  ["Florida Family Vacations", "/family-vacations"],
  ["Best Family Vacations In Florida", "/best-florida-family-vacations"],
  ["Family Vacations Under $2,000", "/florida-family-vacations-under-2000"],
  ["Family Vacations Under $3,000", "/florida-family-vacations-under-3000"],
  ["Family Vacations Under $5,000", "/family-vacations-under-5000"],
  ["Affordable Family Vacations", "/affordable-florida-family-vacations"],
  ["Luxury Family Vacations", "/luxury-florida-family-vacations"],
  ["Family Beach Vacations", "/family-beach-vacations-florida"],
  ["Family Weekend Getaways", "/family-weekend-getaways-florida"],
  ["Family Cruise Vacations", "/family-cruise-vacations-florida"],
  ...Object.entries(destinationConfigs).map(([name, config]) => [`${name} Family Vacations`, `/${config.slug}`])
];
