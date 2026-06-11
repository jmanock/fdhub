import { pageImages, sites } from "./network";

const commonLinks = [
  ["Florida Vacation Packages", "/vacation-packages"],
  ["Miami Travel Guide", "/destinations/miami"],
  ["Orlando Travel Guide", "/destinations/orlando"],
  ["Florida Road Trips", "/best-florida-road-trips"],
  ["Weekend Getaways", "/weekend-getaways"],
  ["Compare Florida Hotels", sites.hotels],
  ["Compare Florida Flights", sites.flights],
  ["Florida Attractions & Activities", sites.local],
  ["Florida Cruise Deals", sites.cruises]
];

const guides = [
  {
    slug: "miami-world-cup-travel-guide",
    preferredPath: "/world-cup-miami-travel-guide",
    title: "Miami World Cup 2026 Travel Guide",
    description: "Plan a Miami World Cup 2026 trip with hotel-area comparisons, airport choices, transportation, attractions, food, beaches, and flexible match-day planning.",
    focus: "Use Miami as Florida's World Cup host-city anchor, then build the trip around verified match details, the right hotel area, practical transportation, and time to enjoy South Florida.",
    destinations: ["Miami", "Fort Lauderdale"],
    image: pageImages.miami,
    hotelAreas: ["Downtown and Brickell for central transit and dining", "Miami Beach for a vacation-first stay", "Airport-area hotels for early or late flights"],
    transportation: ["Compare MIA and FLL before choosing a hotel", "Use transit, rideshare, or event transportation for match-day movement", "Reserve a rental car for regional day trips rather than every city day"],
    fanExperiences: ["Beach morning before an evening event", "Wynwood and Little Havana neighborhood time", "A flexible Biscayne Bay or museum day"],
    itinerary: ["Arrive and settle into the hotel area", "Host-city neighborhoods and food", "Verified event or match day", "Beach, museum, or South Florida add-on"]
  },
  {
    slug: "orlando-world-cup-travel-guide",
    preferredPath: "/world-cup-orlando-guide",
    title: "Orlando World Cup 2026 Travel Guide",
    description: "Use Orlando as a Florida World Cup trip gateway with flight comparisons, theme park add-ons, hotels, family planning, and transportation to South Florida.",
    focus: "Orlando is not a World Cup host city, but it can work as a major Florida flight gateway and family-vacation add-on before or after verified Miami event plans.",
    destinations: ["Orlando", "Miami"],
    image: pageImages.orlando,
    hotelAreas: ["Airport area for a simple overnight connection", "Theme park resort areas for a family add-on", "Downtown Orlando for a city-focused stay"],
    transportation: ["Compare a separate South Florida flight, rail, or rental-car plan", "Do not treat Orlando-to-Miami travel as a quick match-day transfer", "Leave a full buffer day before a verified event"],
    fanExperiences: ["Theme park day", "Resort pool and recovery day", "Orlando dining or local attraction day"],
    itinerary: ["Arrive in Orlando", "Theme park or family activity", "Transfer to South Florida with a full buffer", "Verified Miami event plan"]
  },
  {
    slug: "florida-world-cup-fan-guide",
    preferredPath: "/world-cup-fan-guide-to-florida",
    title: "Florida World Cup 2026 Fan Guide",
    description: "Build a Florida World Cup fan trip around Miami, flights, hotels, transportation, beaches, attractions, family plans, and Florida vacation add-ons.",
    focus: "Turn a verified World Cup event plan into a complete Florida vacation without overloading the schedule or relying on unsupported match details.",
    destinations: ["Miami", "Orlando", "Florida Keys"],
    image: pageImages.calendar,
    hotelAreas: ["Miami host-city areas", "South Florida beach bases", "Orlando or Keys add-on stays"],
    transportation: ["Choose one main Florida region", "Compare airports before booking hotels", "Use a rental car only when the itinerary truly needs one"],
    fanExperiences: ["South Florida beaches", "Neighborhood food and culture", "Theme park or Keys add-on"],
    itinerary: ["Arrive before the event window", "Explore the host-city area", "Verified match or fan experience", "Florida vacation add-on"]
  },
  {
    slug: "where-to-stay-world-cup-miami",
    title: "Where To Stay For The World Cup In Miami",
    description: "Compare Miami hotel areas for World Cup travel by transportation, dining, beaches, airport access, and the kind of Florida trip you want.",
    focus: "Choose the Miami hotel area before comparing individual properties. Location affects transportation, meals, beach time, airport access, and the pace of the entire World Cup trip.",
    destinations: ["Miami"],
    image: pageImages.miami,
    hotelAreas: ["Downtown and Brickell", "Miami Beach", "Airport and Doral areas"],
    transportation: ["Check the verified venue journey from the hotel", "Compare parking and transit before renting a car", "Keep airport choice in the hotel decision"],
    fanExperiences: ["Walkable dining", "Beach time", "Neighborhood attractions"],
    itinerary: ["Arrive and explore the hotel neighborhood", "Flexible Miami day", "Verified event day", "Departure or beach add-on"]
  },
  {
    slug: "best-hotels-world-cup-visitors",
    title: "Best Hotel Areas For World Cup Visitors In Florida",
    description: "Compare hotel areas for Florida World Cup visitors across Miami, Fort Lauderdale, Orlando add-ons, beaches, airports, and transportation.",
    focus: "The best hotel is the one that supports the verified event plan and the rest of the vacation. Compare neighborhoods and transportation before amenities.",
    destinations: ["Miami", "Fort Lauderdale", "Orlando"],
    image: pageImages.planning,
    hotelAreas: ["Central Miami for host-city access", "Fort Lauderdale for airport and beach alternatives", "Orlando for a separate family add-on"],
    transportation: ["Price the full airport-to-hotel-to-event journey", "Avoid changing hotels on event day", "Check cancellation terms before committing"],
    fanExperiences: ["Beach hotels", "City dining districts", "Family resort extensions"],
    itinerary: ["Hotel-area comparison", "Arrival buffer", "Verified event plan", "Optional Florida extension"]
  },
  {
    slug: "flights-to-miami-world-cup",
    title: "Flights To Miami For World Cup 2026",
    description: "Compare flights to Miami for World Cup 2026 with MIA and FLL airport choices, arrival buffers, hotels, ground transportation, and Florida add-ons.",
    focus: "Compare Miami and Fort Lauderdale airports as complete arrival plans, including hotel access, baggage, transportation, and enough buffer before verified events.",
    destinations: ["Miami", "Fort Lauderdale"],
    image: pageImages.miami,
    hotelAreas: ["MIA airport area for late arrivals", "Downtown and Brickell", "Fort Lauderdale airport and beach areas"],
    transportation: ["Compare MIA and FLL total journey time", "Arrive before the event day", "Avoid tight connections before a fixed event"],
    fanExperiences: ["Miami neighborhood day", "South Florida beach time", "Pre-event food plan"],
    itinerary: ["Arrival buffer", "Hotel and neighborhood orientation", "Verified event", "Flexible departure day"]
  },
  {
    slug: "flights-to-orlando-world-cup",
    title: "Flights To Orlando For A Florida World Cup Trip",
    description: "Compare flights to Orlando for a Florida World Cup vacation add-on with family attractions, hotels, and realistic transportation to Miami.",
    focus: "Orlando can support a separate theme-park or family extension, but travelers should build a deliberate transfer plan before continuing to Miami.",
    destinations: ["Orlando", "Miami"],
    image: pageImages.orlando,
    hotelAreas: ["MCO airport area", "Theme park resort areas", "Downtown Orlando"],
    transportation: ["Compare MCO and Sanford where useful", "Allow a full transfer buffer before Miami plans", "Price rail, flights, and rental cars as complete journeys"],
    fanExperiences: ["Theme parks", "Family attractions", "Resort recovery day"],
    itinerary: ["Fly into Orlando", "Family or theme park day", "Transfer buffer", "Miami event plan"]
  },
  {
    slug: "transportation-between-florida-host-cities",
    preferredPath: "/florida-transportation-during-world-cup",
    title: "Florida World Cup Transportation Guide",
    description: "Plan transportation for a Florida World Cup trip across Miami, airports, hotels, Orlando add-ons, beaches, and regional destinations.",
    focus: "Miami is Florida's host-city anchor. Use this guide to compare airport transfers, city transportation, and optional travel to other Florida destinations.",
    destinations: ["Miami", "Orlando", "Fort Lauderdale"],
    image: pageImages.roadTrip,
    hotelAreas: ["Stay near the main event plan", "Use airport hotels only when timing demands it", "Avoid unnecessary hotel moves"],
    transportation: ["Compare transit, rideshare, rental cars, rail, and flights by total time", "Plan tolls, parking, and one-way fees before driving", "Never schedule a long regional transfer immediately before an event"],
    fanExperiences: ["Miami neighborhoods", "Fort Lauderdale beach add-on", "Orlando extension"],
    itinerary: ["Arrive in the main region", "Use local transportation", "Verified event day", "Regional add-on after the event"]
  },
  {
    slug: "things-to-do-miami-world-cup",
    title: "Things To Do In Miami During World Cup 2026",
    description: "Plan things to do in Miami during World Cup 2026 with beaches, neighborhoods, museums, food, water activities, and flexible event-day timing.",
    focus: "Choose Miami activities that fit around verified event timing, weather, transportation, and the energy of your group.",
    destinations: ["Miami"],
    image: pageImages.miami,
    hotelAreas: ["Miami Beach", "Downtown and Brickell", "Wynwood and nearby areas"],
    transportation: ["Group activities by neighborhood", "Leave extra time before fixed events", "Use indoor backups for weather flexibility"],
    fanExperiences: ["South Beach", "Wynwood and Little Havana", "Museums and waterfront activities"],
    itinerary: ["Beach or neighborhood morning", "Lunch and rest", "Verified event or fan plan", "Flexible evening meal"]
  },
  {
    slug: "things-to-do-orlando-world-cup",
    title: "Things To Do In Orlando During A World Cup Florida Trip",
    description: "Plan Orlando activities during a Florida World Cup trip with theme parks, family attractions, hotels, and a realistic South Florida transfer.",
    focus: "Use Orlando as a separate vacation extension, with enough time for theme parks, rest, and the transfer to or from Miami.",
    destinations: ["Orlando"],
    image: pageImages.orlando,
    hotelAreas: ["Theme park resorts", "International Drive", "Airport area"],
    transportation: ["Keep Orlando activities in the same area", "Allow a full day for South Florida transfer", "Compare rental-car parking with hotel shuttles"],
    fanExperiences: ["Theme parks", "Indoor attractions", "Resort and dining time"],
    itinerary: ["Arrival and resort time", "Anchor attraction day", "Recovery or local day", "Transfer to the Miami plan"]
  },
  {
    slug: "best-beaches-world-cup-florida",
    preferredPath: "/best-beaches-to-visit-during-world-cup-florida",
    title: "Best Florida Beaches To Visit During World Cup 2026",
    description: "Compare Florida beach add-ons for a World Cup trip, including Miami Beach, Fort Lauderdale, the Keys, and Gulf Coast vacation ideas.",
    focus: "Add a beach stay only when it fits the verified event schedule and transportation plan. South Florida beaches are simplest around Miami; other coasts need more time.",
    destinations: ["Miami", "Fort Lauderdale", "Florida Keys"],
    image: pageImages.floridaCoast,
    hotelAreas: ["Miami Beach", "Fort Lauderdale Beach", "Florida Keys stays"],
    transportation: ["Keep short trips near South Florida", "Use a rental car for Keys or multi-stop plans", "Confirm parking and hotel beach access"],
    fanExperiences: ["Beach morning", "Waterfront dining", "Florida Keys extension"],
    itinerary: ["Event-city arrival", "Verified event plan", "Beach transfer", "Flexible beach day"]
  },
  {
    slug: "family-friendly-world-cup-trips",
    preferredPath: "/world-cup-family-vacation",
    title: "Family-Friendly Florida World Cup 2026 Trips",
    description: "Plan a family-friendly Florida World Cup trip with Miami event days, Orlando add-ons, hotels, transportation, beaches, and rest time.",
    focus: "Family event travel works best with fewer hotel changes, realistic transportation, flexible meals, and recovery time around verified event plans.",
    destinations: ["Miami", "Orlando"],
    image: pageImages.familyTrip,
    hotelAreas: ["Family-friendly Miami areas", "South Florida beach hotels", "Orlando resort areas"],
    transportation: ["Avoid same-day long transfers", "Compare car seats and luggage needs", "Choose hotels near the main trip anchor"],
    fanExperiences: ["Beach and pool time", "Family attractions", "Neighborhood food stops"],
    itinerary: ["Arrival and pool time", "Flexible family day", "Verified event", "Rest or Orlando extension"]
  },
  {
    slug: "world-cup-weekend-getaways-florida",
    preferredPath: "/world-cup-weekend-itinerary-florida",
    title: "World Cup Weekend Getaways In Florida",
    description: "Build a focused Florida World Cup weekend around Miami, flights, hotels, transportation, beaches, dining, and one verified event.",
    focus: "A World Cup weekend should prioritize one verified event, an easy hotel area, and a small number of nearby activities.",
    destinations: ["Miami", "Fort Lauderdale"],
    image: pageImages.weekendBeach,
    hotelAreas: ["Downtown and Brickell", "Miami Beach", "Fort Lauderdale alternatives"],
    transportation: ["Protect arrival time", "Stay near the main plan", "Avoid regional add-ons on a short weekend"],
    fanExperiences: ["Beach morning", "Neighborhood meal", "Host-city atmosphere"],
    itinerary: ["Friday arrival", "Saturday Miami exploration", "Verified event day", "Flexible departure"]
  },
  {
    slug: "budget-world-cup-travel-florida",
    title: "Budget Travel Guide For Florida World Cup Fans",
    description: "Plan a lower-cost Florida World Cup trip with flexible airports, hotel-area comparisons, transit, free activities, and realistic total-cost planning.",
    focus: "Budget around the complete trip rather than one cheap rate. Airport transfers, parking, hotel location, food, and schedule changes can erase an apparent saving.",
    destinations: ["Miami", "Fort Lauderdale"],
    image: pageImages.planning,
    hotelAreas: ["Airport-area comparisons", "Fort Lauderdale alternatives", "Transit-accessible Miami areas"],
    transportation: ["Compare MIA and FLL", "Use transit where practical", "Price parking before renting a car"],
    fanExperiences: ["Free beaches", "Walkable neighborhoods", "Parks and public spaces"],
    itinerary: ["Flexible arrival", "Low-cost neighborhood day", "Verified event", "Free beach or park time"]
  },
  {
    slug: "luxury-world-cup-travel-florida",
    title: "Luxury Florida World Cup 2026 Travel Guide",
    description: "Plan a luxury Florida World Cup trip with premium Miami hotels, easier transportation, dining, beach stays, and curated vacation extensions.",
    focus: "Luxury event travel should reduce logistical friction through stronger hotel location, flexible arrival timing, reserved transportation, and fewer rushed transitions.",
    destinations: ["Miami", "Miami Beach", "Florida Keys"],
    image: pageImages.romance,
    hotelAreas: ["Brickell and Downtown premium stays", "Miami Beach resorts", "Florida Keys extension hotels"],
    transportation: ["Prioritize reliable event-day transportation", "Use private or reserved transfers where useful", "Keep regional add-ons after the event"],
    fanExperiences: ["Premium dining", "Beach resort day", "Boat or Keys extension"],
    itinerary: ["Early arrival", "Curated Miami day", "Verified event", "Luxury beach or Keys extension"]
  },
  {
    slug: "best-restaurants-world-cup-miami",
    title: "Best Miami Dining Areas For World Cup Visitors",
    description: "Choose practical Miami dining areas for World Cup visitors around hotels, neighborhoods, transportation, reservations, and flexible event schedules.",
    focus: "Plan dining by neighborhood rather than chasing a long list of restaurants across Miami. Reservations and transportation matter most around fixed event times.",
    destinations: ["Miami"],
    image: pageImages.miami,
    hotelAreas: ["Brickell and Downtown", "Miami Beach", "Wynwood and Little Havana"],
    transportation: ["Eat near the hotel or activity area", "Reserve important meals", "Leave a large buffer before verified events"],
    fanExperiences: ["Cuban food and local neighborhoods", "Waterfront dining", "Casual post-event meals"],
    itinerary: ["Neighborhood breakfast", "Flexible lunch", "Verified event", "Reserved or nearby dinner"]
  },
  {
    slug: "florida-road-trips-world-cup",
    title: "Florida Road Trips During World Cup 2026",
    description: "Plan a Florida World Cup road trip from Miami to the Keys, beaches, Orlando, or Gulf Coast destinations with realistic drive times and event buffers.",
    focus: "Build the road trip after the verified event plan, not around it. Long drives need full buffer days, toll and parking planning, and fewer destination changes.",
    destinations: ["Miami", "Florida Keys", "Orlando"],
    image: pageImages.roadTrip,
    hotelAreas: ["Miami before the event", "Florida Keys road-trip stops", "Orlando as a separate extension"],
    transportation: ["Plan toll roads and parking", "Avoid long drives before fixed events", "Compare one-way rental terms"],
    fanExperiences: ["Overseas Highway", "South Florida beaches", "Orlando family extension"],
    itinerary: ["Miami arrival", "Verified event", "Road-trip departure", "Two-night destination extension"]
  },
  {
    slug: "world-cup-port-canaveral",
    preferredPath: "/world-cup-port-canaveral",
    title: "World Cup Port Canaveral Vacation Extension",
    description: "Plan a cruise before or after a Florida World Cup trip with Port Canaveral sailings, Kennedy Space Center, beach activities, hotels, and transportation.",
    focus: "Use Port Canaveral as a separate vacation extension after the verified Miami event plan, with a protective hotel night and enough time for the Space Coast.",
    destinations: ["Port Canaveral", "Orlando", "Miami"],
    image: pageImages.cruisePort,
    hotelAreas: ["Port Canaveral and Cape Canaveral", "Cocoa Beach", "Orlando airport or attraction areas"],
    transportation: ["Allow a full transfer day from South Florida", "Book a protective pre-cruise hotel night", "Compare MCO flights, rental cars, shuttles, and cruise parking"],
    fanExperiences: ["Port Canaveral cruise extension", "Kennedy Space Center", "Cocoa Beach and Space Coast activities"],
    itinerary: ["Complete the verified Miami event plan", "Transfer to the Space Coast", "Kennedy Space Center or beach day", "Begin the Port Canaveral cruise"]
  },
  {
    slug: "world-cup-things-to-do-in-florida",
    preferredPath: "/world-cup-things-to-do-in-florida",
    title: "Things To Do In Florida During World Cup 2026",
    description: "Plan Florida activities between World Cup events with theme parks, beaches, museums, boat tours, airboat tours, Kennedy Space Center, and family ideas.",
    focus: "Choose flexible Florida activities that fit the verified event schedule, weather, transportation, group energy, and the region where you are staying.",
    destinations: ["Miami", "Orlando", "Port Canaveral"],
    image: pageImages.floridaCoast,
    hotelAreas: ["Miami for host-city activities", "Orlando for theme parks and family attractions", "Space Coast for Kennedy Space Center and beaches"],
    transportation: ["Keep activity days in one region", "Avoid long transfers immediately before an event", "Use weather-friendly indoor backups"],
    fanExperiences: ["Theme parks and family attractions", "Beaches, boat tours, and airboat tours", "Museums and Kennedy Space Center"],
    itinerary: ["Choose one regional base", "Plan one anchor attraction", "Add a flexible beach, museum, or neighborhood activity", "Protect the next fixed event day"]
  },
  {
    slug: "best-family-attractions-world-cup",
    preferredPath: "/best-family-attractions-during-world-cup",
    title: "Best Family Attractions During World Cup 2026 In Florida",
    description: "Compare Florida family attractions during World Cup travel, including Disney, Universal, SeaWorld, Kennedy Space Center, beaches, museums, and aquariums.",
    focus: "Family attraction days should add fun without exhausting the group before a fixed event. Choose one anchor experience and protect rest time.",
    destinations: ["Orlando", "Miami", "Port Canaveral"],
    image: pageImages.familyTrip,
    hotelAreas: ["Orlando resort areas", "Family-friendly Miami areas", "Space Coast hotels"],
    transportation: ["Avoid changing hotels on attraction days", "Compare car seats, parking, and luggage needs", "Leave a full buffer before regional transfers"],
    fanExperiences: ["Disney and Universal Orlando", "SeaWorld and family attractions", "Kennedy Space Center, beaches, museums, and aquariums"],
    itinerary: ["Arrival and pool time", "Family attraction day", "Flexible rest or beach day", "Verified event plan"]
  },
  {
    slug: "three-day-orlando-world-cup-itinerary",
    preferredPath: "/3-day-orlando-world-cup-itinerary",
    title: "3 Day Orlando World Cup Vacation Itinerary",
    description: "Plan a three-day Orlando World Cup vacation extension with theme parks, family activities, hotels, airport guidance, and realistic travel to Miami.",
    focus: "A short Orlando extension works best as its own three-day block before or after Miami, not as a match-day side trip.",
    destinations: ["Orlando", "Miami"],
    image: pageImages.orlando,
    hotelAreas: ["Theme park resort areas", "International Drive", "MCO airport area for the final night"],
    transportation: ["Keep the three-day itinerary in one Orlando area", "Allow a full transfer buffer to Miami", "Compare MCO flights, rail, rental cars, and hotel parking"],
    fanExperiences: ["One major theme park day", "Kennedy Space Center or family attraction day", "Pool, dining, and recovery time"],
    itinerary: ["Arrive and settle into Orlando", "Anchor theme park day", "Family attraction or Kennedy Space Center", "Transfer with a full buffer"]
  },
  {
    slug: "miami-world-cup-travel-tips",
    preferredPath: "/miami-world-cup-travel-tips",
    title: "Miami World Cup Travel Tips For Hotels, Transport & Activities",
    description: "Use practical Miami World Cup travel tips for hotel areas, MIA and FLL airports, transportation, beaches, boat tours, dining, and family activities.",
    focus: "Make the Miami trip easier by choosing the hotel area and event-day transportation plan before filling the schedule with beaches, dining, and attractions.",
    destinations: ["Miami", "Fort Lauderdale"],
    image: pageImages.miami,
    hotelAreas: ["Downtown and Brickell", "Miami Beach", "Airport and Fort Lauderdale alternatives"],
    transportation: ["Compare MIA and FLL as complete journeys", "Avoid relying on a car for every city day", "Leave substantial event-day buffer"],
    fanExperiences: ["Beach morning", "Biscayne Bay or boat tour", "Wynwood, Little Havana, museums, and food"],
    itinerary: ["Arrive before the fixed event day", "Learn the hotel neighborhood", "Use a flexible Miami activity day", "Follow the verified event transportation plan"]
  },
  {
    slug: "best-airports-world-cup-visitors",
    preferredPath: "/best-airports-for-world-cup-visitors",
    title: "Best Florida Airports For World Cup Visitors",
    description: "Compare MIA, FLL, and MCO for a Florida World Cup trip by hotel access, ground transportation, flight options, vacation add-ons, and total travel time.",
    focus: "The best airport is the one that supports the complete itinerary. Compare arrival time, hotel access, transportation, baggage, and the Florida extension before choosing.",
    destinations: ["Miami", "Fort Lauderdale", "Orlando"],
    image: pageImages.planning,
    hotelAreas: ["MIA airport and central Miami", "FLL airport and Fort Lauderdale", "MCO airport and Orlando resort areas"],
    transportation: ["Use MIA or FLL for the Miami host-city anchor", "Use MCO only for a deliberate Orlando extension", "Protect arrival time before fixed events"],
    fanExperiences: ["Miami host-city stay", "Fort Lauderdale beach alternative", "Orlando family vacation extension"],
    itinerary: ["Compare airports and arrival windows", "Choose the hotel area", "Build ground transportation", "Add only a realistic Florida extension"]
  }
];

export const worldCup2026Hub = {
  slug: "world-cup-2026",
  title: "World Cup 2026 Florida Travel Guide",
  description: "Travel, hotels, attractions, transportation, activities, and fan experiences for visitors coming to Florida during the FIFA World Cup.",
  focus: "Plan the complete Florida World Cup trip around verified official details, Miami host-city logistics, strong hotel areas, practical transportation, and useful Florida vacation extensions.",
  image: pageImages.miami,
  imageAlt: "Florida World Cup 2026 travel planning with Miami hotels flights and fan experiences",
  category: "World Cup 2026",
  audience: "Supporters, families, groups, and Florida vacation travelers",
  travelWindow: "Confirm official match, venue, and fan-event details before booking",
  packageStyles: ["Family Vacation", "Weekend Getaway", "Luxury Vacation"],
  destinations: ["Miami", "Orlando", "Fort Lauderdale"],
  hotelAreas: ["Miami host-city hotel areas", "Fort Lauderdale airport and beach alternatives", "Orlando and Port Canaveral vacation extensions"],
  transportation: ["Compare MIA and FLL for the Miami host-city anchor", "Treat Orlando and Port Canaveral as separate vacation extensions", "Follow verified event transportation and fan-zone guidance"],
  fanExperiences: ["Miami host-city neighborhoods and fan zones", "Florida beaches, museums, boat tours, and family attractions", "Orlando theme parks and Port Canaveral cruise extensions"],
  itinerary: ["Verify official match and fan-zone details", "Choose the hotel, airport, and transportation plan", "Add flexible Florida activities between events", "Extend the vacation to Orlando, Port Canaveral, or the beach"],
  planningSteps: ["Verify official event details", "Choose the Miami hotel and transportation plan", "Compare flights and arrival buffers", "Add one realistic Florida vacation extension"],
  schedule: ["Official event verification", "Flight and hotel comparison", "Transportation and activity planning", "Final ticket and itinerary review"],
  links: commonLinks,
  type: "world_cup_hub",
  parentSlug: null,
  worldCup2026: true,
  subpages: guides.map((page) => [page.slug, page.title, page.description])
};

export const worldCup2026Guides = guides.map((page) => ({
  ...worldCup2026Hub,
  ...page,
  imageAlt: `${page.title} Florida travel planning`,
  category: "World Cup 2026",
  audience: "World Cup travelers actively planning a Florida trip",
  travelWindow: "Confirm official event details before booking",
  packageStyles: page.title.includes("Family") ? ["Family Vacation", "Weekend Getaway"] : page.title.includes("Luxury") ? ["Luxury Vacation", "Weekend Getaway"] : ["Weekend Getaway", "Family Vacation", "Adventure Vacation"],
  planningSteps: ["Verify the official event plan", "Choose the right hotel area", "Compare transportation and airport options", "Add flexible attractions and food"],
  schedule: ["Official event check", "Hotel and flight comparison", "Transportation and activity plan", "Final itinerary review"],
  links: commonLinks,
  type: "world_cup_guide",
  parentSlug: "world-cup-2026",
  worldCup2026: true,
  subpages: []
}));

export const allWorldCup2026Pages = [worldCup2026Hub, ...worldCup2026Guides];

export function worldCup2026Path(page) {
  return page.type === "world_cup_hub" ? "/world-cup-2026" : page.preferredPath || `/world-cup-2026/${page.slug}`;
}

export function getWorldCup2026Page(parts = []) {
  if (!parts.length) return worldCup2026Hub;
  return worldCup2026Guides.find((page) => page.slug === parts.join("/")) || null;
}

export function getWorldCup2026PageByPath(path) {
  const normalizedPath = `/${String(path || "").replace(/^\/|\/$/g, "")}`;
  return allWorldCup2026Pages.find((page) => worldCup2026Path(page) === normalizedPath) || null;
}
