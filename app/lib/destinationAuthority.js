import { pageImages, sites } from "./network";
import { vacationPackages } from "./vacationPackages";

export const destinationPageTypes = [
  { slug: "family-vacations", label: "Family Vacations", focus: "family-friendly hotels, flexible schedules, kid-friendly attractions, rest time, and weather backups" },
  { slug: "weekend-getaways", label: "Weekend Getaways", focus: "easy arrival, a focused itinerary, walkable areas, and activities that fit a short trip" },
  { slug: "luxury-vacations", label: "Luxury Vacations", focus: "premium hotels, stronger locations, easier transportation, dining, and fewer logistical compromises" },
  { slug: "budget-vacations", label: "Budget Vacations", focus: "affordable hotel areas, flexible travel, free activities, and control of the largest trip costs" },
  { slug: "hotels-guide", label: "Hotels Guide", focus: "hotel neighborhoods, resort styles, location tradeoffs, fees, parking, and transportation" },
  { slug: "attractions-guide", label: "Attractions Guide", focus: "anchor attractions, ticket planning, travel time, reservations, and weather backups" },
  { slug: "things-to-do", label: "Things To Do", focus: "local activities, free ideas, family options, food areas, and flexible daily plans" },
  { slug: "vacation-packages", label: "Vacation Packages", focus: "complete flight, hotel, cruise, activity, transportation, and budget combinations" }
];

const rows = [
  {
    name: "Orlando", slug: "orlando", region: "Central Florida", image: pageImages.orlando,
    overview: "Florida's biggest family-travel hub, built around theme parks, resorts, entertainment districts, convention travel, and easy Port Canaveral add-ons.",
    bestMonths: "January-May and September-November", weather: "Warm most of the year, with hotter and wetter afternoons in summer.",
    airport: "Orlando International Airport (MCO); Sanford can be useful for some routes.",
    cruise: "Port Canaveral is the closest major cruise ecosystem.",
    neighborhoods: ["Lake Buena Vista", "International Drive", "Winter Park", "Downtown Orlando"],
    attractions: ["Walt Disney World", "Universal Orlando", "SeaWorld and Discovery Cove", "Kennedy Space Center day trip"],
    transportation: "Rental cars, rideshare, hotel shuttles, and attraction-area transportation.",
    budgets: [["Value weekend", "$1,500-$2,200"], ["Balanced family trip", "$2,500-$4,000"], ["Resort and park vacation", "$4,500+"]],
    itinerary: ["Arrival and resort pool", "Anchor theme park day", "Flexible attraction or rest day"],
    related: ["tampa", "clearwater-beach", "daytona-beach"],
    links: [`${sites.flights}/cheap-flights-from-orlando`, `${sites.hotels}/hotels-near-disney`, `${sites.cruises}/cruises-from-port-canaveral`, `${sites.local}/things-to-do-in-orlando`]
  },
  {
    name: "Miami", slug: "miami", region: "South Florida", image: pageImages.miami,
    overview: "A beach, culture, food, nightlife, and cruise city where the right neighborhood shapes the entire vacation.",
    bestMonths: "November-April", weather: "Warm year-round, with hotter, wetter, and more humid summers.",
    airport: "Miami International Airport (MIA); Fort Lauderdale (FLL) can broaden flight options.",
    cruise: "PortMiami supports Bahamas, Caribbean, weekend, and family cruises.",
    neighborhoods: ["Miami Beach", "Downtown and Brickell", "Wynwood", "Coconut Grove"],
    attractions: ["South Beach", "Wynwood Walls", "Vizcaya Museum and Gardens", "Biscayne Bay activities"],
    transportation: "Rideshare, Metrorail, Metromover, rental cars, and private transfers.",
    budgets: [["Value city weekend", "$1,600-$2,400"], ["Beach and culture trip", "$2,800-$4,200"], ["Luxury or cruise add-on", "$4,500+"]],
    itinerary: ["Beach and neighborhood arrival", "Culture and waterfront day", "Cruise, boat, or food-focused day"],
    related: ["fort-lauderdale", "key-west", "naples"],
    links: [`${sites.flights}/miami-flight-deals`, `${sites.hotels}/miami-beach-hotels`, `${sites.cruises}/cruises-from-miami`, `${sites.local}/miami-things-to-do`]
  },
  {
    name: "Clearwater Beach", slug: "clearwater-beach", region: "Gulf Coast", image: pageImages.clearwater,
    overview: "A family-friendly Gulf Coast beach base with sunset activities, hotel pools, Tampa access, and easy water-focused days.",
    bestMonths: "October-May", weather: "Warm and sunny much of the year, with summer heat and afternoon storms.",
    airport: "Tampa International Airport (TPA) is the primary major airport.",
    cruise: "Tampa cruise departures can extend a Gulf Coast trip.",
    neighborhoods: ["Clearwater Beach", "Sand Key", "Dunedin", "St. Pete Beach"],
    attractions: ["Clearwater Beach", "Pier 60", "Clearwater Marine Aquarium", "Caladesi Island area"],
    transportation: "Rental cars, rideshare, beach trolley, and hotel-area walking.",
    budgets: [["Beach weekend", "$1,400-$2,100"], ["Family beach vacation", "$2,400-$3,600"], ["Beach resort stay", "$4,000+"]],
    itinerary: ["Beach and sunset arrival", "Pool and family activity day", "Dunedin, aquarium, or Tampa day trip"],
    related: ["tampa", "orlando", "naples"],
    links: [`${sites.flights}/cheap-flights-from-tampa`, `${sites.hotels}/clearwater-beachfront-hotels`, `${sites.cruises}/cruises-from-tampa`, `${sites.local}/florida-water-activities`]
  },
  {
    name: "Key West", slug: "key-west", region: "Florida Keys", image: pageImages.keyWest,
    overview: "An island destination for sunsets, water activities, historic streets, food, couples trips, and slower family vacations.",
    bestMonths: "November-April", weather: "Tropical and warm, with a wetter summer and weather-sensitive fall.",
    airport: "Key West International Airport (EYW); Miami and Fort Lauderdale support road-trip options.",
    cruise: "Cruise calls and Florida departure cruises can complement a Keys trip.",
    neighborhoods: ["Old Town", "New Town", "Duval Street area", "Stock Island"],
    attractions: ["Mallory Square", "Historic Old Town", "Water activities", "Overseas Highway"],
    transportation: "Walking, bikes, scooters, taxis, rideshare, and rental cars for Keys road trips.",
    budgets: [["Focused island weekend", "$1,900-$3,000"], ["Balanced Key West stay", "$3,000-$4,500"], ["Premium island vacation", "$5,000+"]],
    itinerary: ["Old Town and sunset arrival", "Water activity day", "History, food, and flexible island time"],
    related: ["miami", "fort-lauderdale", "naples"],
    links: [`${sites.flights}/key-west-flight-deals`, `${sites.hotels}/key-west-hotel-deals`, `${sites.cruises}/family-cruises-from-florida`, `${sites.local}/florida-water-activities`]
  },
  {
    name: "Tampa", slug: "tampa", region: "Gulf Coast", image: pageImages.tampa,
    overview: "A flexible city-and-coast base for family attractions, dining, sports, cruises, and Clearwater or St. Pete add-ons.",
    bestMonths: "October-May", weather: "Warm year-round, with humid summers and frequent afternoon storms.",
    airport: "Tampa International Airport (TPA).", cruise: "Port Tampa Bay supports Caribbean and seasonal sailings.",
    neighborhoods: ["Downtown and Water Street", "Ybor City", "Hyde Park", "Westshore"],
    attractions: ["Tampa Riverwalk", "Busch Gardens", "Florida Aquarium", "Ybor City"],
    transportation: "Rental cars, rideshare, streetcar, walking in central districts, and regional drives.",
    budgets: [["City weekend", "$1,300-$2,000"], ["Family Gulf Coast trip", "$2,300-$3,500"], ["Cruise and beach add-on", "$4,000+"]],
    itinerary: ["Riverwalk and food arrival", "Family attraction day", "Clearwater, St. Pete, or cruise day"],
    related: ["clearwater-beach", "orlando", "naples"],
    links: [`${sites.flights}/cheap-flights-from-tampa`, `${sites.hotels}/tampa-hotel-deals`, `${sites.cruises}/cruises-from-tampa`, `${sites.local}/tampa-weekend-activities`]
  },
  {
    name: "St. Augustine", slug: "st-augustine", region: "Historic Coast", image: pageImages.roadTrip,
    overview: "A walkable historic destination with beaches, family tours, restaurants, museums, and easy Northeast Florida road trips.",
    bestMonths: "October-May", weather: "Mild winters, warm springs and falls, and hot humid summers.",
    airport: "Jacksonville International Airport (JAX) is the primary major airport.",
    cruise: "Jacksonville cruise departures may support a Northeast Florida add-on.",
    neighborhoods: ["Historic District", "Anastasia Island", "Vilano Beach", "St. Augustine Beach"],
    attractions: ["Castillo de San Marcos", "St. George Street", "Anastasia State Park", "Historic tours"],
    transportation: "Walking in the historic district, trolley tours, rental cars, and rideshare.",
    budgets: [["History weekend", "$1,100-$1,800"], ["Beach and history trip", "$2,000-$3,000"], ["Boutique stay", "$3,500+"]],
    itinerary: ["Historic district arrival", "History and food day", "Beach or family attraction day"],
    related: ["daytona-beach", "orlando", "tampa"],
    links: [`${sites.flights}/jacksonville-flight-deals`, `${sites.hotels}/st-augustine-hotel-deals`, `${sites.cruises}/cruises-from-jacksonville`, `${sites.local}/st-augustine-local-deals`]
  },
  {
    name: "Daytona Beach", slug: "daytona-beach", region: "Atlantic Coast", image: pageImages.weekendBeach,
    overview: "An Atlantic beach destination for affordable oceanfront stays, racing events, family weekends, and road trips.",
    bestMonths: "March-May and October-November", weather: "Warm beach weather much of the year, with hotter summers and event-driven demand.",
    airport: "Daytona Beach International Airport (DAB); Orlando airports widen options.",
    cruise: "Port Canaveral is the nearest major cruise ecosystem.",
    neighborhoods: ["Oceanfront", "Speedway area", "Ponce Inlet", "Ormond Beach"],
    attractions: ["Daytona International Speedway", "Beach and boardwalk", "Ponce Inlet", "Oceanfront activities"],
    transportation: "Rental cars, rideshare, walking in select oceanfront areas, and regional drives.",
    budgets: [["Beach weekend", "$1,000-$1,700"], ["Family oceanfront trip", "$1,900-$2,900"], ["Event weekend", "$3,000+"]],
    itinerary: ["Oceanfront arrival", "Beach or Speedway day", "Ponce Inlet or Orlando add-on"],
    related: ["orlando", "st-augustine", "clearwater-beach"],
    links: [`${sites.flights}/daytona-beach-flight-deals`, `${sites.hotels}/daytona-beach-hotel-deals`, `${sites.cruises}/cruises-from-port-canaveral`, `${sites.local}/daytona-beach-local-deals`]
  },
  {
    name: "Fort Lauderdale", slug: "fort-lauderdale", region: "South Florida", image: pageImages.floridaCoast,
    overview: "A beach-and-cruise destination with a convenient airport, Port Everglades, waterfront neighborhoods, and easy Miami access.",
    bestMonths: "November-April", weather: "Warm year-round with a wetter, hotter summer.",
    airport: "Fort Lauderdale-Hollywood International Airport (FLL).", cruise: "Port Everglades is one of Florida's major cruise ports.",
    neighborhoods: ["Fort Lauderdale Beach", "Las Olas", "Downtown", "Hollywood Beach"],
    attractions: ["Fort Lauderdale Beach", "Las Olas Boulevard", "Water taxi", "Hollywood Beach"],
    transportation: "Rideshare, water taxi, rental cars, and private cruise transfers.",
    budgets: [["Beach or cruise weekend", "$1,500-$2,400"], ["South Florida vacation", "$2,700-$4,000"], ["Premium beach and cruise", "$4,500+"]],
    itinerary: ["Beach and Las Olas arrival", "Waterfront activity day", "Cruise or Miami add-on"],
    related: ["miami", "key-west", "naples"],
    links: [`${sites.flights}/fort-lauderdale-flight-deals`, `${sites.hotels}/fort-lauderdale-hotel-deals`, `${sites.cruises}/cruises-from-fort-lauderdale`, `${sites.local}/fort-lauderdale-things-to-do`]
  },
  {
    name: "Naples", slug: "naples", region: "Southwest Florida", image: pageImages.romance,
    overview: "A polished Gulf Coast destination for beaches, dining, shopping, couples getaways, family stays, and slower vacations.",
    bestMonths: "November-April", weather: "Warm winters and hot, wetter summers.",
    airport: "Southwest Florida International Airport (RSW).", cruise: "Miami, Fort Lauderdale, and Tampa cruises require a regional drive.",
    neighborhoods: ["Fifth Avenue South", "Old Naples", "North Naples", "Marco Island"],
    attractions: ["Naples beaches", "Fifth Avenue South", "Naples Pier area", "Everglades day trips"],
    transportation: "Rental cars and rideshare are the most practical options.",
    budgets: [["Quiet Gulf weekend", "$1,600-$2,500"], ["Balanced Naples vacation", "$2,800-$4,200"], ["Luxury Gulf Coast stay", "$5,000+"]],
    itinerary: ["Beach and dining arrival", "Shopping and water day", "Everglades or Marco Island add-on"],
    related: ["miami", "fort-lauderdale", "clearwater-beach"],
    links: [`${sites.flights}/fort-myers-flight-deals`, `${sites.hotels}/naples-hotel-deals`, `${sites.cruises}/cruises-from-florida`, `${sites.local}/naples-local-deals`]
  },
  {
    name: "Destin", slug: "destin", region: "Florida Panhandle", image: pageImages.clearwater,
    overview: "A Panhandle beach destination for family vacations, fishing, boating, beach condos, and longer Gulf Coast stays.",
    bestMonths: "April-May and September-October", weather: "Warm summers, mild shoulder seasons, and cooler winter beach days.",
    airport: "Destin-Fort Walton Beach Airport (VPS); Northwest Florida Beaches (ECP) is another option.",
    cruise: "Cruise add-ons generally require travel to another Florida port.",
    neighborhoods: ["Destin", "Miramar Beach", "Henderson Beach", "30A area"],
    attractions: ["Emerald Coast beaches", "HarborWalk Village", "Fishing and boating", "Henderson Beach"],
    transportation: "Rental cars are usually the most practical choice.",
    budgets: [["Beach weekend", "$1,400-$2,200"], ["Family beach vacation", "$2,500-$4,000"], ["Premium condo or resort", "$4,500+"]],
    itinerary: ["Beach and harbor arrival", "Fishing, boating, or family beach day", "30A or Henderson Beach day"],
    related: ["clearwater-beach", "daytona-beach", "orlando"],
    links: [`${sites.flights}/destin-flight-deals`, `${sites.hotels}/destin-hotel-deals`, `${sites.cruises}/cruises-from-florida`, `${sites.local}/florida-water-activities`]
  }
];

export const destinationAuthorities = rows.map((item) => ({
  ...item,
  imageAlt: `${item.name} destination authority guide with hotels flights activities and vacation packages`
}));

export const destinationAuthorityMap = Object.fromEntries(destinationAuthorities.map((item) => [item.slug, item]));
export const destinationPageTypeMap = Object.fromEntries(destinationPageTypes.map((item) => [item.slug, item]));

export function getDestinationAuthority(slug) {
  return destinationAuthorityMap[slug] || null;
}

export function getDestinationPageType(slug) {
  return destinationPageTypeMap[slug] || null;
}

export function getDestinationPackages(destination, limit = 6) {
  return vacationPackages
    .filter((item) => item.destination === destination.name || item.destination === "Florida" || item.options.some((option) => option.destination === destination.name || (destination.name === "Clearwater Beach" && option.destination === "Clearwater")))
    .sort((a, b) => Number(b.destination === destination.name) - Number(a.destination === destination.name))
    .slice(0, limit);
}

export function destinationPath(destination, type) {
  return `/destinations/${destination.slug}${type ? `/${type.slug}` : ""}`;
}
