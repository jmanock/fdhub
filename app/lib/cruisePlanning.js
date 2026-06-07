import { pageImages, sites } from "./network";
import { vacationPackages } from "./vacationPackages";

const cruiseNetwork = (cruisePath = "") => [
  ["Book Cruise", `${sites.cruises}${cruisePath ? `/${cruisePath}` : ""}`],
  ["Book Hotel", `${sites.hotels}/hotels-near-florida-cruise-ports`],
  ["Book Flight", sites.flights],
  ["View Local Attractions", sites.local]
];

const portConfigs = {
  "Port Canaveral": {
    slug: "port-canaveral-cruises",
    intro: "Port Canaveral connects family cruises and Bahamas sailings with Orlando flights, Space Coast hotels, beaches, and theme park add-ons.",
    airport: "Orlando International Airport (MCO), with Sanford as a secondary comparison",
    hotels: "Cocoa Beach, Cape Canaveral, and Orlando airport-area hotels",
    transportation: "Rental cars, shared shuttles, private transfers, and cruise-line transfers",
    cruiseLines: ["Royal Caribbean", "Carnival", "Disney Cruise Line", "MSC"],
    packages: ["Port Canaveral cruise package", "Family cruise package", "Bahamas cruise package"],
    bestMonths: "November-April for milder weather; year-round sailings vary",
    network: [
      ["Book Cruise", `${sites.cruises}/cruises-from-port-canaveral`],
      ["Book Hotel", `${sites.hotels}/hotels-near-florida-cruise-ports`],
      ["Book Flight", `${sites.flights}/orlando-flight-deals`],
      ["View Local Attractions", `${sites.local}/best-family-activities-in-florida`]
    ]
  },
  Miami: {
    slug: "miami-cruises",
    intro: "Miami is Florida's broadest cruise-planning base for Bahamas, Caribbean, weekend, family, and premium sailings.",
    airport: "Miami International Airport (MIA), with Fort Lauderdale (FLL) as a useful comparison",
    hotels: "Downtown Miami, Brickell, Miami Beach, and airport-area hotels",
    transportation: "Rideshare, taxi, hotel shuttles, private transfers, and rental cars",
    cruiseLines: ["Royal Caribbean", "Carnival", "Norwegian", "MSC", "Disney Cruise Line"],
    packages: ["Miami cruise package", "Weekend cruise package", "Bahamas cruise package"],
    bestMonths: "November-April for cooler South Florida weather",
    network: [
      ["Book Cruise", `${sites.cruises}/cruises-from-miami`],
      ["Book Hotel", `${sites.hotels}/hotels-near-miami-cruise-port`],
      ["Book Flight", `${sites.flights}/miami-flight-deals`],
      ["View Local Attractions", `${sites.local}/miami-things-to-do`]
    ]
  },
  "Fort Lauderdale": {
    slug: "fort-lauderdale-cruises",
    intro: "Fort Lauderdale makes cruise planning relatively compact because Port Everglades, FLL airport, beach hotels, and Miami are close together.",
    airport: "Fort Lauderdale-Hollywood International Airport (FLL), with MIA as a secondary option",
    hotels: "Fort Lauderdale beach, downtown, airport-area, and Port Everglades hotels",
    transportation: "Rideshare, taxi, hotel shuttle, and private transfer",
    cruiseLines: ["Royal Caribbean", "Celebrity", "Princess", "Holland America"],
    packages: ["South Florida cruise package", "Beach plus cruise package", "Family cruise package"],
    bestMonths: "November-April",
    network: [
      ["Book Cruise", `${sites.cruises}/cruises-from-fort-lauderdale`],
      ["Book Hotel", `${sites.hotels}/hotels-near-florida-cruise-ports`],
      ["Book Flight", `${sites.flights}/fort-lauderdale-flight-deals`],
      ["View Local Attractions", `${sites.local}/fort-lauderdale-things-to-do`]
    ]
  },
  Tampa: {
    slug: "tampa-cruises",
    intro: "Tampa cruise trips pair Gulf Coast city stays, nearby beaches, a convenient airport, and Caribbean itineraries.",
    airport: "Tampa International Airport (TPA)",
    hotels: "Downtown Tampa, Channelside, Ybor City, airport-area, and Clearwater",
    transportation: "Rideshare, taxi, hotel shuttle, rental car, and private transfer",
    cruiseLines: ["Carnival", "Royal Caribbean", "Norwegian"],
    packages: ["Tampa cruise package", "Clearwater plus cruise package", "Family cruise package"],
    bestMonths: "November-April",
    network: [
      ["Book Cruise", `${sites.cruises}/cruises-from-tampa`],
      ["Book Hotel", `${sites.hotels}/tampa-hotel-deals`],
      ["Book Flight", `${sites.flights}/cheap-flights-from-tampa`],
      ["View Local Attractions", `${sites.local}/tampa-weekend-activities`]
    ]
  },
  Jacksonville: {
    slug: "jacksonville-cruises",
    intro: "Jacksonville supports simpler drive-market cruise trips with Northeast Florida hotels, beaches, and St. Augustine add-ons.",
    airport: "Jacksonville International Airport (JAX)",
    hotels: "Airport-area, downtown Jacksonville, Jacksonville Beach, and St. Augustine",
    transportation: "Rental car, rideshare, taxi, and private transfer",
    cruiseLines: ["Carnival"],
    packages: ["Jacksonville drive-to cruise package", "Northeast Florida weekend package"],
    bestMonths: "October-May",
    network: [
      ["Book Cruise", `${sites.cruises}/cruises-from-jacksonville`],
      ["Book Hotel", `${sites.hotels}/jacksonville-hotel-deals`],
      ["Book Flight", `${sites.flights}/jacksonville-flight-deals`],
      ["View Local Attractions", `${sites.local}/jacksonville-family-activities`]
    ]
  }
};

const intentGuides = [
  ["cruises", "Cruises From Florida", "Plan the complete cruise vacation above the fare: departure port, sailing length, hotel, flight, transportation, and things to do.", "All Florida cruise vacations"],
  ["weekend-cruises-from-florida", "Weekend Cruises From Florida", "Compare short Florida cruises with port-night hotels, airport choices, transportation, and realistic weekend timing.", "Short cruise getaways"],
  ["cheap-cruises-from-florida", "Cheap Cruises From Florida", "Find value by comparing total cruise-trip cost, not only the advertised fare.", "Budget cruise planning"],
  ["family-cruises-from-florida", "Family Cruises From Florida", "Compare Florida family cruises by port, cabin plan, sailing length, hotel night, flights, and kid-friendly activities.", "Family cruise vacations"],
  ["bahamas-cruises-from-florida", "Bahamas Cruises From Florida", "Plan Bahamas cruises from Miami, Port Canaveral, Fort Lauderdale, and other Florida ports with complete-trip logistics.", "Bahamas cruise planning"],
  ["3-day-cruises-from-florida", "3 Day Cruises From Florida", "Build a compact three-day cruise vacation with one port-night hotel and simple transportation.", "Three-day cruises"],
  ["cruise-hotel-packages", "Cruise + Hotel Packages From Florida", "Compare Florida cruise trips with a practical pre-cruise hotel, airport plan, transportation, and time to explore the departure city.", "Cruise travelers building a complete port stay"],
  ["4-day-cruises-from-florida", "4 Day Cruises From Florida", "Compare four-day cruise trips that balance vacation time, port logistics, and itinerary variety.", "Four-day cruises"],
  ["5-day-cruises-from-florida", "5 Day Cruises From Florida", "Plan a five-day cruise with enough time for a fuller itinerary while controlling hotel, flight, and transfer costs.", "Five-day cruises"],
  ["last-minute-cruise-deals-florida", "Last Minute Cruise Deals From Florida", "Use flexible ports, drive-market options, and realistic documentation and transportation checks when departure is close.", "Flexible last-minute cruisers"],
  ["best-cruises-for-families", "Best Cruises For Families From Florida", "Compare family suitability, cabin needs, departure ports, schedules, and complete vacation costs.", "Families comparing cruise options"]
];

const guideEnhancements = {
  "weekend-cruises-from-florida": {
    title: "Weekend Cruises From Florida (2026) | Ports, Packages & Planning",
    metaDescription: "Compare weekend cruises from Florida, including Miami, Port Canaveral, Fort Lauderdale, and Tampa departures, short cruise lengths, hotels, flights, and Bahamas trip ideas.",
    heroTitle: "Weekend Cruises From Florida: Miami, Port Canaveral & More",
    intro: "Plan a short Florida cruise without treating the sailing as the whole trip. Compare ports, two-to-four-night cruise shapes, pre-cruise hotels, airport options, and Bahamas getaway ideas.",
    rating: "Couples, families, first-time cruisers, and travelers with limited vacation time",
    bestMonths: "November-April for milder port weather; short sailings operate throughout the year",
    itineraries: ["Bahamas", "Private-island stops", "Short Caribbean itineraries"],
    packages: ["Weekend cruise package", "Cruise + hotel package", "Bahamas cruise package"],
    network: [
      ["Compare Weekend Cruise Deals", `${sites.cruises}/weekend-cruises-from-florida`],
      ["Find Hotels Near Florida Cruise Ports", `${sites.hotels}/hotels-near-florida-cruise-ports`],
      ["Compare Florida Flights", sites.flights],
      ["Plan Pre-Cruise Activities", sites.local]
    ],
    bestFor: [
      ["Limited vacation time", "A short sailing can fit around one or two extra days away from work when port travel is planned carefully."],
      ["First-time cruisers", "A weekend cruise offers a smaller commitment while still letting travelers test cabins, dining, sea days, and port routines."],
      ["Couples and friend trips", "Short sailings work well for celebrations and quick resets, especially from South Florida ports."],
      ["Families near Florida ports", "Drive-to departures can simplify airfare planning, but families should still compare parking, hotels, and cabin needs."]
    ],
    durationComparison: [
      ["2-night cruise", "Fastest getaway", "Usually requires a very efficient port plan", "Travelers close to the departure port"],
      ["3-night cruise", "Classic long-weekend shape", "Often pairs well with one pre-cruise hotel night", "First cruises, couples, and short family trips"],
      ["4-night cruise", "More itinerary time", "Usually needs extra vacation days", "Travelers wanting a fuller short-cruise experience"]
    ],
    portComparison: [
      ["Miami", "MIA or FLL", "Broad short-cruise choice and South Florida add-ons", "/miami-cruises"],
      ["Port Canaveral", "MCO or SFB", "Orlando, Space Coast, and family trip combinations", "/port-canaveral-cruises"],
      ["Fort Lauderdale", "FLL or MIA", "Compact airport, beach, hotel, and Port Everglades planning", "/fort-lauderdale-cruises"],
      ["Tampa", "TPA", "Gulf Coast drive trips and city or beach add-ons", "/tampa-cruises"]
    ],
    planningSteps: [
      ["Choose the port before the ship", "Compare the drive or flight, hotel area, transfer time, and available short sailings before narrowing the cruise line."],
      ["Protect embarkation day", "When flying or driving a long distance, arrive the day before and use the hotel night as part of the getaway."],
      ["Compare the complete cost", "Include taxes, gratuities, parking, transfers, hotel, meals ashore, and onboard extras alongside the cruise fare."],
      ["Plan a useful port-day add-on", "Choose one nearby beach, neighborhood, attraction, or meal instead of overloading a short trip."]
    ],
    clusterLinks: [
      ["Cruises From Florida", "/cruises"],
      ["3 Day Cruises From Florida", "/3-day-cruises-from-florida"],
      ["Cheap Cruises From Florida", "/cheap-cruises-from-florida"],
      ["Bahamas Cruises From Florida", "/bahamas-cruises-from-florida"],
      ["Cruise + Hotel Packages", "/cruise-hotel-packages"],
      ["Weekend Cruise Vacation Packages", "/weekend-cruise-packages-from-florida"],
      ["Miami Cruise Vacation Packages", "/miami-cruise-vacation-packages"],
      ["Port Canaveral Vacation Packages", "/port-canaveral-vacation-packages"]
    ],
    faqs: [
      ["Can a Florida cruise fit into a long weekend?", "A two- or three-night sailing can fit a long weekend, but travelers should include the trip to the port and strongly consider arriving before embarkation day."],
      ["Which Florida port has the most weekend cruise options?", "Miami and Port Canaveral are strong starting points for short-cruise comparisons. Fort Lauderdale and Tampa can also be useful depending on the current sailing schedule and your travel route."],
      ["Where do weekend cruises from Florida usually go?", "Many short Florida cruises focus on the Bahamas, private-island stops, or compact Caribbean itineraries. Routes and ports of call change, so confirm the live itinerary before booking."],
      ["Is a cruise and hotel package worth comparing?", "Yes. Comparing the cruise with a pre-cruise hotel can make the total trip easier to evaluate and reduce the risk of missing embarkation because of travel delays."],
      ["What should I budget beyond the cruise fare?", "Plan for taxes, gratuities, drinks, Wi-Fi, excursions, parking or transfers, a possible hotel night, meals ashore, and travel insurance where appropriate."]
    ]
  },
  "cruise-hotel-packages": {
    title: "Cruise + Hotel Packages From Florida | Port Stay Planning Guide",
    metaDescription: "Plan a Florida cruise and hotel package with port-area stays, airport comparisons, transportation, activities, and links to Miami and Port Canaveral cruise trips.",
    packages: ["Weekend cruise plus hotel", "Miami cruise plus hotel", "Port Canaveral cruise plus hotel"]
  }
};

const cruiseLines = [
  ["royal-caribbean-cruises-from-florida", "Royal Caribbean Cruises From Florida", "Very strong for families, active ships, private-island itineraries, and multi-generational trips.", ["Miami", "Port Canaveral", "Fort Lauderdale", "Tampa"], ["Bahamas", "Eastern Caribbean", "Western Caribbean"]],
  ["carnival-cruises-from-florida", "Carnival Cruises From Florida", "Strong for value-focused families, casual trips, and travelers comparing several Florida ports.", ["Miami", "Port Canaveral", "Tampa", "Jacksonville"], ["Bahamas", "Caribbean", "Short cruises"]],
  ["norwegian-cruises-from-florida", "Norwegian Cruises From Florida", "Good for flexible dining, couples, families, and Caribbean itinerary variety.", ["Miami", "Tampa"], ["Bahamas", "Caribbean", "Longer tropical itineraries"]],
  ["msc-cruises-from-florida", "MSC Cruises From Florida", "Useful for value comparisons, families, and travelers interested in modern ships and private-island calls.", ["Miami", "Port Canaveral"], ["Bahamas", "Caribbean", "Ocean Cay"]],
  ["disney-cruise-line-from-florida", "Disney Cruise Line From Florida", "Excellent family suitability with a premium price profile and strong Port Canaveral connections.", ["Port Canaveral", "Fort Lauderdale"], ["Bahamas", "Caribbean", "Private-island itineraries"]]
];

function commonGuide(slug, h1, intro, rating) {
  return {
    slug,
    h1,
    title: `${h1} | Ports, Packages, Hotels & Flights`,
    metaDescription: `${intro} Compare Florida ports, cruise packages, hotels, flights, transportation, activities, and planning FAQs.`,
    intro,
    rating,
    image: pageImages.cruisePort,
    imageAlt: `${h1} cruise ship departure planning from Florida`,
    bestMonths: "November-April for milder weather; compare schedules year-round",
    network: cruiseNetwork(),
    cruiseLines: ["Royal Caribbean", "Carnival", "Norwegian", "MSC", "Disney Cruise Line"],
    itineraries: ["Bahamas", "Caribbean", "Weekend and short cruises"],
    packages: ["Weekend cruise package", "Family cruise package", "Bahamas cruise package"],
    destination: "Florida"
  };
}

export const cruisePlanningGuides = [
  ...intentGuides.map(([slug, h1, intro, rating]) => ({ ...commonGuide(slug, h1, intro, rating), ...(guideEnhancements[slug] || {}) })),
  ...Object.entries(portConfigs).map(([destination, config]) => ({
    ...commonGuide(config.slug, `${destination} Cruises`, config.intro, `Best for departures from ${destination}`),
    ...config,
    destination,
    port: true
  })),
  ...cruiseLines.map(([slug, h1, rating, ports, itineraries]) => ({
    ...commonGuide(slug, h1, `Compare ${h1} by family suitability, Florida departure ports, itineraries, and complete vacation package opportunities.`, rating),
    cruiseLine: true,
    cruiseLines: [h1.replace(" Cruises From Florida", "").replace(" From Florida", "")],
    ports,
    itineraries
  }))
];

export const cruisePlanningGuideMap = Object.fromEntries(cruisePlanningGuides.map((guide) => [guide.slug, guide]));
cruisePlanningGuideMap["cruises-from-florida"] = cruisePlanningGuideMap.cruises;

export function getCruisePlanningGuide(slug) {
  return cruisePlanningGuideMap[slug] || null;
}

export function getCruisePackages(guide, limit = 6) {
  return vacationPackages
    .filter((item) =>
      guide.port
        ? item.destination === guide.destination ||
          item.options.some((option) => option.destination === guide.destination) ||
          (item.destination === "Florida" && (item.h1.toLowerCase().includes("cruise") || item.summary.toLowerCase().includes("cruise")))
        : item.destination === guide.destination ||
          item.options.some((option) => option.destination === guide.destination) ||
          item.h1.toLowerCase().includes("cruise") ||
          item.summary.toLowerCase().includes("cruise")
    )
    .sort((a, b) => {
      const score = (item) => (item.destination === guide.destination ? 4 : 0) + (item.options.some((option) => option.destination === guide.destination) ? 3 : 0) + (item.h1.toLowerCase().includes("cruise") ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export const cruiseGuideLinks = [
  ["Cruises From Florida", "/cruises"],
  ...intentGuides.slice(1).map(([, h1], index) => [h1, `/${intentGuides[index + 1][0]}`]),
  ...Object.entries(portConfigs).map(([name, config]) => [`${name} Cruises`, `/${config.slug}`]),
  ...cruiseLines.map(([slug, h1]) => [h1, `/${slug}`])
];
