export const SAMBOAT_AFFILIATE_URL = "https://www.awin1.com/awclick.php?gid=444366&mid=32679&awinaffid=2881665&linkid=4565586&clickref=";

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
    advertiser: "vip-cars",
    category: "car rentals",
    status: "partner_mapping_only"
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
    category: "event travel",
    status: "partner_mapping_only"
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
    suggestions.push({ topic: "Car Rentals", partner: "VIP Cars", inventoryKey: "carRentals", status: "partner_mapping_only" });
  }
  if (/(flight|airport|airfare)/.test(topicText)) {
    suggestions.push({ topic: "Flights", partner: "Trip.com / MyTrip", inventoryKey: "flights", status: "partner_mapping_only" });
  }
  if (/(hotel|resort|stay|lodging)/.test(topicText)) {
    suggestions.push({ topic: "Hotels", partner: "Booking Partners", inventoryKey: "hotels", status: "partner_mapping_only" });
  }
  if (/(world cup|fifa)/.test(topicText)) {
    suggestions.push({ topic: "World Cup Travel", partner: "World Cup Explorer", inventoryKey: "worldCupTravel", status: "partner_mapping_only" });
  }

  return suggestions;
}
