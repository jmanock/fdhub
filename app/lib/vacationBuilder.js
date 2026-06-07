import { pageImages, sites } from "./network";

const flights = (path) => `${sites.flights}/${path}`;
const hotels = (path) => `${sites.hotels}/${path}`;
const cruises = (path) => `${sites.cruises}/${path}`;
const local = (path) => `${sites.local}/${path}`;

export const travelerOptions = ["Solo", "Couple", "Family of 4", "Family of 5+", "Group"];
export const vacationTypeOptions = ["Cruise", "Beach", "Theme Parks", "Weekend Getaway", "Family Vacation", "Luxury Vacation", "Adventure Vacation"];
export const departureRegionOptions = ["Florida", "Southeast", "Northeast", "Midwest", "West Coast"];
export const budgetOptions = [
  { label: "Under $1,000", value: 1000 },
  { label: "$1,000-$2,000", value: 2000 },
  { label: "$2,000-$3,000", value: 3000 },
  { label: "$3,000-$5,000", value: 5000 },
  { label: "$5,000+", value: 7500 }
];

export const vacationRecommendations = [
  {
    id: "orlando-family-value",
    title: "Orlando Family Vacation",
    destination: "Orlando",
    summary: "A three-night Orlando plan with a value-focused hotel, one major attraction day, and flexible local activities.",
    estimatedCost: 2100,
    costLabel: "$1,850-$2,500",
    duration: "3-4 nights",
    bestMonths: "January-May and September-November",
    travelers: ["Family of 4", "Family of 5+", "Group"],
    styles: ["Theme Parks", "Family Vacation", "Weekend Getaway"],
    departureRegions: departureRegionOptions,
    includes: ["Hotel", "Attractions", "Activities", "Flight options"],
    image: pageImages.orlando,
    imageAlt: "Orlando family vacation with theme parks hotel and attractions",
    packageHref: "/florida-family-vacations-under-3000",
    actions: [
      ["Book Hotel", hotels("cheap-hotels-in-orlando")],
      ["Find Flights", flights("cheap-flights-from-orlando")],
      ["View Activities", local("things-to-do-in-orlando")]
    ]
  },
  {
    id: "clearwater-beach-value",
    title: "Clearwater Beach Vacation",
    destination: "Clearwater Beach",
    summary: "A Gulf Coast beach break built around a practical hotel, beach time, sunsets, and one paid family activity.",
    estimatedCost: 1850,
    costLabel: "$1,550-$2,250",
    duration: "3 nights",
    bestMonths: "March-May and October-November",
    travelers: ["Solo", "Couple", "Family of 4", "Family of 5+"],
    styles: ["Beach", "Family Vacation", "Weekend Getaway"],
    departureRegions: ["Florida", "Southeast", "Northeast", "Midwest"],
    includes: ["Resort or hotel", "Activities", "Local deals", "Tampa flight options"],
    image: pageImages.clearwater,
    imageAlt: "Clearwater Beach vacation with Gulf Coast hotel and water activities",
    packageHref: "/clearwater-beach-vacation-packages",
    actions: [
      ["Book Hotel", hotels("clearwater-beachfront-hotels")],
      ["Find Flights", flights("cheap-flights-from-tampa")],
      ["View Activities", local("florida-water-activities")]
    ]
  },
  {
    id: "st-augustine-budget-weekend",
    title: "St. Augustine History Weekend",
    destination: "St. Augustine",
    summary: "A drive-friendly historic-city weekend combining walkable sightseeing, beach time, and affordable local activities.",
    estimatedCost: 950,
    costLabel: "$750-$1,150",
    duration: "2-3 nights",
    bestMonths: "February-May and October-November",
    travelers: ["Solo", "Couple", "Family of 4"],
    styles: ["Weekend Getaway", "Family Vacation", "Adventure Vacation"],
    departureRegions: ["Florida", "Southeast"],
    includes: ["Hotel", "Historic attractions", "Beach time", "Local dining"],
    image: pageImages.roadTrip,
    imageAlt: "St Augustine historic weekend vacation and beach trip",
    packageHref: "/florida-family-vacations-under-2000",
    actions: [
      ["Book Hotel", hotels("st-augustine-hotel-deals")],
      ["Find Flights", flights("jacksonville-flight-deals")],
      ["View Activities", local("st-augustine-local-deals")]
    ]
  },
  {
    id: "miami-weekend-cruise",
    title: "Miami Weekend Cruise Package",
    destination: "Miami",
    summary: "A short Bahamas sailing with a pre-cruise Miami hotel, airport comparison, and a simple waterfront activity.",
    estimatedCost: 2350,
    costLabel: "$1,900-$2,850 for two",
    duration: "3-4 nights",
    bestMonths: "November-April",
    travelers: ["Solo", "Couple", "Family of 4", "Group"],
    styles: ["Cruise", "Weekend Getaway", "Luxury Vacation"],
    departureRegions: departureRegionOptions,
    includes: ["Cruise", "Hotel", "Activities", "Flight options"],
    image: pageImages.cruisePort,
    imageAlt: "Miami weekend cruise vacation package with hotel and flights",
    packageHref: "/miami-cruise-vacation-packages",
    actions: [
      ["Book Cruise", cruises("weekend-cruises-from-miami")],
      ["Book Hotel", hotels("hotels-near-miami-cruise-port")],
      ["Book Flights", flights("miami-flight-deals")],
      ["View Activities", local("miami-things-to-do")]
    ]
  },
  {
    id: "port-canaveral-family-cruise",
    title: "Port Canaveral Family Cruise Package",
    destination: "Port Canaveral",
    summary: "A family Bahamas cruise plan with a calm pre-cruise hotel night, Orlando flights, and a Space Coast activity.",
    estimatedCost: 3250,
    costLabel: "$2,700-$4,100",
    duration: "4-5 nights",
    bestMonths: "January-May and September-November",
    travelers: ["Family of 4", "Family of 5+", "Group"],
    styles: ["Cruise", "Family Vacation", "Adventure Vacation"],
    departureRegions: departureRegionOptions,
    includes: ["Cruise", "Hotel", "Transportation", "Activities", "Flights"],
    image: pageImages.cruisePort,
    imageAlt: "Port Canaveral family cruise package with hotel and Orlando flights",
    packageHref: "/family-cruise-vacation-package",
    actions: [
      ["Book Cruise", cruises("cruises-from-port-canaveral")],
      ["Book Hotel", hotels("hotels-near-florida-cruise-ports")],
      ["Book Flights", flights("orlando-flight-deals")],
      ["View Activities", local("best-family-activities-in-florida")]
    ]
  },
  {
    id: "key-west-couples-getaway",
    title: "Key West Island Getaway",
    destination: "Key West",
    summary: "A slower island vacation balancing a walkable hotel, sunset plans, water activities, and flight-versus-drive choices.",
    estimatedCost: 3900,
    costLabel: "$3,100-$4,700 for two",
    duration: "3-4 nights",
    bestMonths: "November-April",
    travelers: ["Solo", "Couple"],
    styles: ["Beach", "Luxury Vacation", "Adventure Vacation", "Weekend Getaway"],
    departureRegions: departureRegionOptions,
    includes: ["Hotel", "Flights or road trip", "Water activity", "Local dining"],
    image: pageImages.keyWest,
    imageAlt: "Key West island getaway with hotel and water activities",
    packageHref: "/key-west-vacation-packages",
    actions: [
      ["Book Hotel", hotels("key-west-hotel-deals")],
      ["Find Flights", flights("key-west-flight-deals")],
      ["View Activities", local("florida-water-activities")]
    ]
  },
  {
    id: "tampa-family-weekend",
    title: "Tampa Family Weekend",
    destination: "Tampa",
    summary: "A flexible family weekend pairing a convenient hotel with aquarium, waterfront, or theme park options.",
    estimatedCost: 1450,
    costLabel: "$1,150-$1,850",
    duration: "2-3 nights",
    bestMonths: "October-May",
    travelers: ["Couple", "Family of 4", "Family of 5+"],
    styles: ["Family Vacation", "Weekend Getaway", "Adventure Vacation"],
    departureRegions: ["Florida", "Southeast", "Northeast", "Midwest"],
    includes: ["Hotel", "Activities", "Local deals", "Flight options"],
    image: pageImages.floridaCoast,
    imageAlt: "Tampa family weekend vacation with waterfront activities",
    packageHref: "/destinations/tampa/vacation-packages",
    actions: [
      ["Book Hotel", hotels("tampa-hotel-deals")],
      ["Find Flights", flights("cheap-flights-from-tampa")],
      ["View Activities", local("date-night-ideas-tampa")]
    ]
  },
  {
    id: "fort-lauderdale-beach-cruise",
    title: "Fort Lauderdale Beach And Cruise Escape",
    destination: "Fort Lauderdale",
    summary: "Combine a South Florida beach stay with a short cruise option and easy FLL airport access.",
    estimatedCost: 2850,
    costLabel: "$2,300-$3,500 for two",
    duration: "4 nights",
    bestMonths: "November-April",
    travelers: ["Couple", "Family of 4", "Group"],
    styles: ["Beach", "Cruise", "Luxury Vacation"],
    departureRegions: departureRegionOptions,
    includes: ["Hotel", "Cruise option", "Flights", "Waterfront activities"],
    image: pageImages.miami,
    imageAlt: "Fort Lauderdale beach and cruise vacation escape",
    packageHref: "/destinations/fort-lauderdale/vacation-packages",
    actions: [
      ["Book Cruise", cruises("cruises-from-fort-lauderdale")],
      ["Book Hotel", hotels("fort-lauderdale-hotel-deals")],
      ["Find Flights", flights("fort-lauderdale-flight-deals")],
      ["View Activities", local("fort-lauderdale-local-deals")]
    ]
  },
  {
    id: "destin-family-beach",
    title: "Destin Family Beach Vacation",
    destination: "Destin",
    summary: "A longer Panhandle beach stay with a family hotel or condo, boating or fishing, and room for slower days.",
    estimatedCost: 4600,
    costLabel: "$3,800-$5,300",
    duration: "5-7 nights",
    bestMonths: "April-May and September-October",
    travelers: ["Family of 4", "Family of 5+", "Group"],
    styles: ["Beach", "Family Vacation", "Adventure Vacation", "Luxury Vacation"],
    departureRegions: departureRegionOptions,
    includes: ["Hotel or condo", "Activities", "Transportation", "Local deals"],
    image: pageImages.clearwater,
    imageAlt: "Destin family beach vacation with Gulf Coast activities",
    packageHref: "/destinations/destin/vacation-packages",
    actions: [
      ["Book Hotel", hotels("destin-hotel-deals")],
      ["Find Flights", flights("destin-flight-deals")],
      ["View Activities", local("best-florida-water-activities")]
    ]
  },
  {
    id: "miami-luxury-city-beach",
    title: "Miami Luxury City And Beach Trip",
    destination: "Miami",
    summary: "A higher-comfort Miami plan with a strong hotel location, beach time, dining, and optional boating.",
    estimatedCost: 6200,
    costLabel: "$5,200-$7,200 for two",
    duration: "4-5 nights",
    bestMonths: "November-April",
    travelers: ["Couple", "Group"],
    styles: ["Luxury Vacation", "Beach", "Adventure Vacation"],
    departureRegions: departureRegionOptions,
    includes: ["Premium hotel", "Flights", "Activities", "Dining plan"],
    image: pageImages.miami,
    imageAlt: "Miami luxury city and beach vacation",
    packageHref: "/destinations/miami/luxury-vacations",
    actions: [
      ["Book Hotel", hotels("miami-beach-hotels")],
      ["Find Flights", flights("miami-flight-deals")],
      ["View Activities", local("miami-things-to-do")]
    ]
  }
];

const hubDefinitions = [
  ["vacations-under-1000", "Vacations Under $1,000", "Compare practical Florida vacations under $1,000, including drive-friendly weekends, stays, and activity ideas.", 1000, null],
  ["vacations-under-2000", "Vacations Under $2,000", "Discover Florida beach breaks, family weekends, and short vacations with estimated totals under $2,000.", 2000, null],
  ["vacations-under-3000", "Vacations Under $3,000", "Compare Florida cruise, beach, family, and weekend vacation recommendations with estimated totals under $3,000.", 3000, null],
  ["vacations-under-5000", "Vacations Under $5,000", "Plan fuller Florida vacations with room for cruises, resorts, flights, activities, and longer stays under $5,000.", 5000, null],
  ["family-vacations-under-2000", "Family Vacations Under $2,000", "Compare practical Florida family vacations under $2,000 with beach, city, hotel, and activity planning.", 2000, "Family Vacation"],
  ["family-vacations-under-3000", "Family Vacations Under $3,000", "Compare Florida family vacation recommendations under $3,000 with complete-trip cost guidance.", 3000, "Family Vacation"],
  ["cruises-under-1000", "Cruises Under $1,000", "Explore lower-cost Florida cruise planning ideas and understand which pre-cruise costs can affect a $1,000 budget.", 1000, "Cruise"],
  ["cruises-under-2000", "Cruises Under $2,000", "Compare Florida cruise vacation ideas under $2,000 with port hotels, transportation, and complete-trip planning.", 2000, "Cruise"],
  ["cruises-under-3000", "Cruises Under $3,000", "Compare Florida cruise packages under $3,000 with Miami, Port Canaveral, flights, hotels, and activities.", 3000, "Cruise"]
];

export const budgetVacationHubs = hubDefinitions.map(([slug, title, description, maxBudget, style]) => ({
  slug,
  title,
  description,
  maxBudget,
  style,
  image: style === "Cruise" ? pageImages.cruisePort : maxBudget <= 2000 ? pageImages.weekendBeach : pageImages.familyTrip
}));

export const budgetVacationHubMap = Object.fromEntries(budgetVacationHubs.map((item) => [item.slug, item]));

export function getBudgetVacationHub(slug) {
  return budgetVacationHubMap[slug] || null;
}

export function getRecommendationsForHub(hub) {
  const matching = vacationRecommendations.filter((item) =>
    item.estimatedCost <= hub.maxBudget && (!hub.style || item.styles.includes(hub.style))
  );

  if (matching.length) return matching;

  return vacationRecommendations
    .filter((item) => !hub.style || item.styles.includes(hub.style))
    .sort((a, b) => a.estimatedCost - b.estimatedCost)
    .slice(0, 3);
}
