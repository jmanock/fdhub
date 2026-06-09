export const SAMBOAT_AFFILIATE_URL = "https://www.awin1.com/awclick.php?gid=444366&mid=32679&awinaffid=2881665&linkid=4565586&clickref=";
export const VIP_CARS_AFFILIATE_URL = "https://www.awin1.com/cread.php?awinmid=125318&awinaffid=2881665&ued=https%3A%2F%2Fwww.vipcars.com%2F";
export const WORLD_CUP_EXPLORER_AFFILIATE_URL = "https://www.awin1.com/awclick.php?gid=605937&mid=126955&awinaffid=2881665&linkid=4788428&clickref=";

export const affiliateInventory = {
  boatRentals: {
    advertiser: "samboat",
    network: "awin",
    category: "boat rentals",
    affiliateUrl: SAMBOAT_AFFILIATE_URL,
    title: "Compare Florida Boat Rentals",
    description: "Compare available boats, yachts, catamarans, and day charters for a Florida waterfront day.",
    cta: "View Available Boats",
    disclosureRequired: true,
    status: "active"
  },
  carRentals: {
    advertiser: "vipcars",
    network: "awin",
    category: "car_rental",
    affiliateUrl: VIP_CARS_AFFILIATE_URL,
    title: "Need a Rental Car?",
    description: "Compare prices from major rental companies and find the best rates for your Florida trip.",
    cta: "Compare Rental Cars",
    disclosureRequired: true,
    status: "active"
  },
  flights: {
    advertiser: "trip.com / mytrip",
    category: "flights",
    status: "partner_mapping_only"
  },
  hotels: {
    advertiser: "booking partners",
    category: "hotels",
    status: "partner_mapping_only"
  },
  worldCupTravel: {
    advertiser: "world-cup-explorer",
    network: "awin",
    category: "world_cup_travel",
    affiliateUrl: WORLD_CUP_EXPLORER_AFFILIATE_URL,
    title: "Planning Your World Cup Trip?",
    description: "Find hotels, transportation, attractions, and fan experiences for your World Cup visit.",
    cta: "Plan Your World Cup Trip",
    disclosureRequired: true,
    status: "active"
  }
};

const samBoatPageMap = {
  "boat-rentals": { cta: "Compare Florida Boat Rentals", destination: "Florida" },
  "miami-yacht-rental-guide": { cta: "Search Yacht Charters", destination: "Miami" },
  "florida-water-activities-guide": { cta: "Explore Available Boats", destination: "Florida" },
  "key-west-travel-guide": { cta: "Find Boat Rentals", destination: "Key West" },
  "florida-keys-road-trip-guide": { cta: "Explore Available Boats", destination: "Florida Keys" },
  "miami-cruise-vacation-packages": { cta: "Search Yacht Charters", destination: "Miami" },
  "key-west-vacation-packages": { cta: "View Available Boats", destination: "Key West" },
  "destinations/miami": { cta: "Search Yacht Charters", destination: "Miami" },
  "destinations/miami/luxury-vacations": { cta: "Search Yacht Charters", destination: "Miami" },
  "destinations/miami/things-to-do": { cta: "Find Boat Rentals", destination: "Miami" },
  "destinations/miami/vacation-packages": { cta: "Compare Boat Rentals", destination: "Miami" },
  "destinations/key-west": { cta: "Find Boat Rentals", destination: "Key West" },
  "destinations/key-west/luxury-vacations": { cta: "Search Yacht Charters", destination: "Key West" },
  "destinations/key-west/things-to-do": { cta: "Explore Available Boats", destination: "Key West" },
  "destinations/key-west/vacation-packages": { cta: "Compare Boat Rentals", destination: "Key West" }
};

const carRentalPageConfigs = {
  "best-florida-road-trips": ["Florida road-trip planning", "Best Airports For Florida Road Trips"],
  "florida-keys-road-trip-guide": ["Florida Keys", "Florida Keys Driving Guide"],
  "7-day-florida-itinerary": ["Florida multi-stop trips", "Renting A Car In Florida"],
  "orlando-travel-guide": ["Orlando", "Orlando Airport Car Rentals"],
  "miami-travel-guide": ["Miami", "Miami Airport Transportation"],
  "tampa-travel-guide": ["Tampa Bay", "Renting A Car In Tampa Bay"],
  "jacksonville-travel-guide": ["Jacksonville", "Jacksonville Airport Car Rentals"],
  "port-canaveral-travel-guide": ["Port Canaveral", "Driving From Orlando To Port Canaveral"],
  "port-canaveral-cruise-trip-guide": ["Port Canaveral", "Driving From Orlando To Port Canaveral"],
  "florida-beach-vacation-guide": ["Florida beach trips", "Florida Beach Trip Transportation"],
  "best-florida-weekend-trips": ["Florida weekend trips", "Renting A Car For A Florida Weekend"],
  "florida-weekend-getaways": ["Florida weekend getaways", "Renting A Car For A Florida Weekend"],
  "florida-family-vacation-planner": ["Florida family trips", "Family Vacation Transportation"],
  "cheap-florida-family-vacations": ["Florida family trips", "Compare Family Trip Transportation"],
  "orlando-weekend-trip-guide": ["Orlando", "Orlando Airport Car Rentals"],
  "miami-weekend-trip-guide": ["Miami", "Miami Airport Transportation"],
  "tampa-weekend-trip-guide": ["Tampa Bay", "Renting A Car In Tampa Bay"],
  "jacksonville-weekend-trip-guide": ["Jacksonville", "Jacksonville Airport Car Rentals"],
  "key-west-weekend-trip-guide": ["Florida Keys", "Florida Keys Driving Guide"],
  "clearwater-weekend-trip-guide": ["Clearwater and Tampa Bay", "Tampa Airport To Clearwater"],
  "st-augustine-weekend-trip-guide": ["St. Augustine", "Driving From Jacksonville To St. Augustine"],
  "daytona-beach-weekend-trip-guide": ["Daytona Beach", "Driving From Orlando To Daytona Beach"],
  "naples-weekend-trip-guide": ["Naples", "Southwest Florida Airport Transportation"],
  "destin-weekend-trip-guide": ["Destin", "Panhandle Airport And Driving Tips"],
  "sarasota-weekend-trip-guide": ["Sarasota", "Sarasota And Tampa Bay Driving Tips"],
  "fort-myers-weekend-trip-guide": ["Fort Myers", "Southwest Florida Airport Transportation"],
  "florida-family-vacations-under-2000": ["Florida family trips", "Compare Family Trip Transportation"],
  "florida-family-vacations-under-3000": ["Florida family trips", "Compare Family Trip Transportation"],
  "port-canaveral-vacation-packages": ["Port Canaveral", "Driving From Orlando To Port Canaveral"],
  "clearwater-beach-vacation-packages": ["Clearwater and Tampa Bay", "Tampa Airport To Clearwater"],
  "key-west-vacation-packages": ["Florida Keys", "Florida Keys Driving Guide"],
  "beach-vacations": ["Florida beach trips", "Florida Beach Trip Transportation"],
  "weekend-getaways": ["Florida weekend getaways", "Renting A Car For A Florida Weekend"],
  "disney-vacation-packages": ["Orlando", "Orlando Airport Car Rentals"],
  "last-minute-vacations": ["Florida flexible trips", "Renting A Car In Florida"]
};

const destinationCarRentalNames = {
  orlando: ["Orlando", "Orlando Airport Car Rentals"],
  miami: ["Miami", "Miami Airport Transportation"],
  tampa: ["Tampa Bay", "Renting A Car In Tampa Bay"],
  jacksonville: ["Jacksonville", "Jacksonville Airport Car Rentals"],
  "key-west": ["Florida Keys", "Florida Keys Driving Guide"],
  "clearwater-beach": ["Clearwater and Tampa Bay", "Tampa Airport To Clearwater"],
  "st-augustine": ["St. Augustine", "Driving From Jacksonville To St. Augustine"],
  "daytona-beach": ["Daytona Beach", "Driving From Orlando To Daytona Beach"],
  "fort-lauderdale": ["Fort Lauderdale", "South Florida Airport Transportation"],
  naples: ["Naples", "Southwest Florida Airport Transportation"],
  destin: ["Destin", "Panhandle Airport And Driving Tips"]
};

const cruisePortCarRentalConfigs = {
  "port-canaveral-cruises": ["Port Canaveral", "Driving From Orlando To Port Canaveral"],
  "miami-cruises": ["Miami", "Miami Airport Transportation"],
  "fort-lauderdale-cruises": ["Fort Lauderdale", "South Florida Airport Transportation"],
  "tampa-cruises": ["Tampa", "Tampa Airport And Cruise Port Transportation"],
  "jacksonville-cruises": ["Jacksonville", "Jacksonville Airport And Cruise Port Transportation"]
};

export function getCarRentalRecommendationForPage(pagePath, options = {}) {
  const normalizedPath = String(pagePath || "").replace(/^\/|\/$/g, "");
  let config = carRentalPageConfigs[normalizedPath];

  if (!config && options.pageType === "family") {
    config = [options.destination === "Florida" ? "Florida family trips" : options.destination, "Family Vacation Transportation"];
  }

  if (!config && options.pageType === "cruise_port") {
    config = cruisePortCarRentalConfigs[normalizedPath];
  }

  if (!config && normalizedPath.startsWith("destinations/")) {
    const [, destinationSlug, section] = normalizedPath.split("/");
    const allowedSections = new Set([undefined, "family-vacations", "weekend-getaways", "attractions-guide", "things-to-do", "vacation-packages"]);
    if (allowedSections.has(section)) {
      config = destinationCarRentalNames[destinationSlug];
    }
  }

  if (!config) {
    return null;
  }

  const [destination, guidanceTitle] = config;
  return {
    ...affiliateInventory.carRentals,
    destination,
    guidanceTitle,
    itemTitle: `${destination} rental cars with VIP Cars`,
    intro: "Flying into Florida? Renting a car is often the easiest way to explore beaches, attractions, and nearby destinations.",
    planningTips: [
      "Compare the airport pickup location with hotel parking, resort fees, and rideshare costs.",
      "Ask how toll roads, fuel, additional drivers, and one-way returns are handled before booking.",
      "Choose the smallest vehicle that comfortably fits travelers, luggage, and any beach or family gear."
    ]
  };
}

export function getWorldCupRecommendationForPage(pagePath) {
  const normalizedPath = String(pagePath || "").replace(/^\/|\/$/g, "");
  if (normalizedPath !== "world-cup-2026" && !normalizedPath.startsWith("world-cup-2026/")) {
    return null;
  }

  return {
    ...affiliateInventory.worldCupTravel,
    itemTitle: "World Cup Explorer 2026 Florida trip planning"
  };
}

export function getAffiliateRecommendationsForPage(pagePath) {
  const normalizedPath = String(pagePath || "").replace(/^\/|\/$/g, "");
  const pageConfig = samBoatPageMap[normalizedPath];

  if (!pageConfig) {
    return [];
  }

  return [{
    ...affiliateInventory.boatRentals,
    ...pageConfig,
    itemTitle: `${pageConfig.destination} boat rentals with SamBoat`,
    planningTips: [
      "Confirm the pickup area and how long it takes to reach from your hotel.",
      "Compare capacity, captain requirements, included equipment, and cancellation terms.",
      "Check weather, marina instructions, and current provider details before booking."
    ]
  }];
}

export function getSuggestedAffiliatePartners({ title = "", category = "", destination = "", tags = [] } = {}) {
  const topicText = [title, category, destination, ...tags].join(" ").toLowerCase();
  const suggestions = [];

  if (/(boat|boating|yacht|catamaran|water activit|waterfront|key west|florida keys)/.test(topicText)) {
    suggestions.push({ topic: "Boat Rentals", partner: "SamBoat", inventoryKey: "boatRentals", status: "active" });
  }
  if (/(road trip|car rental|drive|driving)/.test(topicText)) {
    suggestions.push({ topic: "Car Rentals", partner: "VIP Cars", inventoryKey: "carRentals", status: "active" });
  }
  if (/(flight|airport|airfare)/.test(topicText)) {
    suggestions.push({ topic: "Flights", partner: "Trip.com / MyTrip", inventoryKey: "flights", status: "partner_mapping_only" });
  }
  if (/(hotel|resort|stay|lodging)/.test(topicText)) {
    suggestions.push({ topic: "Hotels", partner: "Booking Partners", inventoryKey: "hotels", status: "partner_mapping_only" });
  }
  if (/(world cup|fifa)/.test(topicText)) {
    suggestions.push({ topic: "World Cup Travel", partner: "World Cup Explorer", inventoryKey: "worldCupTravel", status: "active" });
  }

  return suggestions;
}
