import { pageImages, sites } from "./network";

const flights = (path) => `${sites.flights}/${path}`;
const hotels = (path) => `${sites.hotels}/${path}`;
const cruises = (path) => `${sites.cruises}/${path}`;
const local = (path) => `${sites.local}/${path}`;

export const vacationPackages = [
  {
    slug: "florida-family-vacations-under-2000",
    title: "Florida Family Vacations Under $2,000 | Practical Trip Plans",
    metaDescription:
      "Compare Florida family vacations under $2,000 with realistic cost plans for Orlando, Clearwater Beach, St. Augustine, hotels, flights, and activities.",
    h1: "Florida Family Vacations Under $2,000",
    eyebrow: "Family vacation cost guide",
    summary:
      "Three practical Florida family vacation frameworks for a family of four, with tradeoffs that keep the estimated trip total near $2,000.",
    image: pageImages.familyTrip,
    imageAlt: "Family planning an affordable Florida beach and attraction vacation",
    destination: "Florida",
    bestFor: ["Families of four", "Short school-break trips", "Drive-market vacations"],
    assumptions: "Estimated for two adults and two children, three nights, flexible dates, and a mix of paid and free activities.",
    options: [
      {
        name: "Clearwater Beach Long Weekend",
        destination: "Clearwater",
        cruise: "Skip the cruise and use the budget for a beach-area hotel.",
        hotel: "Three nights in a family hotel near Clearwater or St. Pete.",
        flight: "Drive when practical or compare Tampa flights for four travelers.",
        activities: "Beach time, sunset walks, a local attraction, and a rainy-day backup.",
        estimatedCost: "$1,550-$2,000",
        costRows: [["Hotel", "$650-$900"], ["Transportation", "$250-$550"], ["Food", "$400-$500"], ["Activities", "$250-$350"]],
        links: [
          ["Compare Clearwater Beach hotels", hotels("clearwater-beachfront-hotels"), "hotels"],
          ["Search Tampa flight ideas", flights("cheap-flights-from-tampa"), "flights"],
          ["Find Florida water activities", local("florida-water-activities"), "local"]
        ]
      },
      {
        name: "Orlando Two-Park Family Trip",
        destination: "Orlando",
        cruise: "Keep this trip land-based to protect the activity budget.",
        hotel: "Three nights outside the highest-priced resort areas.",
        flight: "Compare MCO and Sanford, or drive if Orlando is within reach.",
        activities: "Choose one major park day and one lower-cost local activity day.",
        estimatedCost: "$1,750-$2,200",
        costRows: [["Hotel", "$450-$700"], ["Transportation", "$250-$600"], ["Food", "$350-$500"], ["Activities", "$700-$900"]],
        links: [
          ["Compare cheap Orlando hotels", hotels("cheap-hotels-in-orlando"), "hotels"],
          ["Search flights to Orlando", flights("cheap-flights-from-orlando"), "flights"],
          ["Explore Orlando things to do", local("things-to-do-in-orlando"), "local"]
        ]
      },
      {
        name: "St. Augustine History And Beach Trip",
        destination: "St. Augustine",
        cruise: "Not needed; use the savings for a walkable hotel area.",
        hotel: "Three nights near the historic district or beach.",
        flight: "Drive or compare Jacksonville flights.",
        activities: "Historic streets, beach time, family attractions, and local dining.",
        estimatedCost: "$1,350-$1,900",
        costRows: [["Hotel", "$500-$750"], ["Transportation", "$200-$450"], ["Food", "$400-$500"], ["Activities", "$250-$350"]],
        links: [
          ["Compare St. Augustine hotels", hotels("st-augustine-hotel-deals"), "hotels"],
          ["Search Jacksonville flights", flights("jacksonville-flight-deals"), "flights"],
          ["Explore St. Augustine local ideas", local("st-augustine-local-deals"), "local"]
        ]
      }
    ],
    tips: [
      "Treat the $2,000 figure as a planning ceiling, not a promised package price.",
      "Control the biggest cost first: theme park tickets, flights for four, or a beachfront hotel.",
      "Leave one day lightly scheduled so weather or tired kids do not create expensive last-minute changes."
    ],
    related: ["florida-family-vacations-under-3000", "best-florida-family-vacations", "florida-vacation-planning-guide"],
    faqs: [
      ["Can a family of four vacation in Florida for under $2,000?", "Yes, especially for a three-night drive-market trip with flexible dates and a mix of free and paid activities. Flights or multiple theme park days can push the total higher."],
      ["What is the cheapest kind of Florida family vacation?", "A focused beach or historic-city trip within driving distance often costs less than a fly-in theme park or cruise vacation."],
      ["Are these package prices bookable offers?", "No. They are transparent planning estimates. Confirm current rates and availability with each linked provider."]
    ]
  },
  {
    slug: "florida-family-vacations-under-3000",
    title: "Florida Family Vacations Under $3,000 | 2026 Cost Plans",
    metaDescription:
      "Plan Florida family vacations under $3,000 with cost breakdowns for Orlando, beach resorts, cruises, flights, hotels, and activities.",
    h1: "Florida Family Vacations Under $3,000",
    eyebrow: "Family vacation planner",
    summary:
      "A $3,000 planning target gives families room for a longer beach stay, a short cruise, or a fuller Orlando itinerary without pretending every date costs the same.",
    image: pageImages.familyTrip,
    imageAlt: "Florida family vacation with resort pool beach and activity planning",
    destination: "Florida",
    bestFor: ["Families of four", "Four-to-five-night trips", "Cruise or resort comparisons"],
    assumptions: "Estimated for two adults and two children, flexible 2026 dates, and one primary trip anchor.",
    options: [
      {
        name: "Port Canaveral Cruise And Orlando Night",
        destination: "Port Canaveral",
        cruise: "Three-night Bahamas sailing from Port Canaveral.",
        hotel: "One pre-cruise night near the port or Orlando airport.",
        flight: "Compare Orlando airfare, then price transfers or a rental car.",
        activities: "One low-key pre-cruise activity and beach time.",
        estimatedCost: "$2,400-$3,200",
        costRows: [["Cruise fare and fees", "$1,350-$1,800"], ["Hotel", "$180-$300"], ["Flights/transport", "$500-$850"], ["Food/activities", "$350-$500"]],
        links: [
          ["Browse Port Canaveral cruises", cruises("cruises-from-port-canaveral"), "cruises"],
          ["Compare cruise port hotels", hotels("hotels-near-florida-cruise-ports"), "hotels"],
          ["Search Orlando flights", flights("orlando-flight-deals"), "flights"]
        ]
      },
      {
        name: "Four-Night Florida Beach Resort Trip",
        destination: "Clearwater",
        cruise: "Skip sailing and spend the budget on a resort-style beach stay.",
        hotel: "Four nights at a family-friendly Gulf Coast hotel.",
        flight: "Compare Tampa flights or drive.",
        activities: "Beach days, pool time, one paid family activity, and local dining.",
        estimatedCost: "$2,300-$3,000",
        costRows: [["Hotel", "$1,100-$1,500"], ["Transportation", "$400-$700"], ["Food", "$550-$700"], ["Activities", "$250-$400"]],
        links: [
          ["Compare family resorts", hotels("best-family-resorts-in-florida"), "hotels"],
          ["Search Tampa flights", flights("cheap-flights-from-tampa"), "flights"],
          ["Find family activities", local("best-family-activities-in-florida"), "local"]
        ]
      }
    ],
    tips: [
      "Pick one premium element, such as the cruise, resort, or theme park tickets.",
      "Compare full totals including resort fees, cruise gratuities, parking, and airport transfers.",
      "Use nearby free activities to create breathing room in the daily budget."
    ],
    related: ["florida-family-vacations-under-2000", "family-cruise-vacation-package", "best-florida-family-vacations"],
    faqs: [
      ["What can a $3,000 Florida family vacation include?", "Depending on dates and origin, it can support a short cruise with a pre-cruise hotel, a four-night beach trip, or an Orlando vacation with carefully chosen park days."],
      ["Should families book a package or each part separately?", "Compare both. Bundles can simplify planning, while separate bookings can make it easier to control hotel location, flights, and cancellation terms."],
      ["Do the estimates include every fee?", "They include planning ranges, but travelers should verify taxes, resort fees, cruise gratuities, parking, baggage, and transfers before booking."]
    ]
  },
  {
    slug: "family-cruise-vacation-package",
    title: "Family Cruise Vacation Package From Florida | Cost Guide",
    metaDescription:
      "Plan a family cruise vacation package from Florida with cruise, pre-cruise hotel, flight, activity, and estimated family cost guidance.",
    h1: "Family Cruise Vacation Package From Florida",
    eyebrow: "Cruise package planner",
    summary:
      "Build a family cruise vacation around the full trip, not only the advertised fare: sailing, port hotel, flights, transfers, and a calm pre-cruise day.",
    image: pageImages.cruisePort,
    imageAlt: "Family cruise vacation package departing from a Florida port",
    destination: "Florida",
    bestFor: ["First-time family cruisers", "Bahamas sailings", "School-break trips"],
    assumptions: "Estimated for two adults and two children on a three-to-four-night sailing with one pre-cruise hotel night.",
    options: [
      {
        name: "Port Canaveral Family Cruise Package",
        destination: "Port Canaveral",
        cruise: "Three-to-four-night Bahamas itinerary.",
        hotel: "One night near Port Canaveral or Orlando before departure.",
        flight: "Fly into Orlando with enough time for transfers and delays.",
        activities: "Kennedy Space Coast or a low-key beach afternoon before sailing.",
        estimatedCost: "$2,500-$4,200",
        costRows: [["Cruise fare and taxes", "$1,500-$2,500"], ["Hotel", "$180-$320"], ["Flights/transfers", "$550-$950"], ["Activities/extras", "$270-$430"]],
        links: [
          ["Compare family cruises from Florida", cruises("family-cruises-from-florida"), "cruises"],
          ["Find cruise port hotels", hotels("hotels-near-florida-cruise-ports"), "hotels"],
          ["Search Orlando flights", flights("orlando-flight-deals"), "flights"],
          ["Explore pre-cruise activities", local("best-family-activities-in-florida"), "local"]
        ]
      }
    ],
    tips: [
      "Arrive the day before sailing when flights or a long drive are involved.",
      "Compare cabin occupancy, gratuities, drink packages, Wi-Fi, and port transportation.",
      "Choose one pre-cruise activity that does not create a rushed embarkation morning."
    ],
    related: ["port-canaveral-vacation-packages", "bahamas-cruise-vacation-packages", "florida-family-vacations-under-3000"],
    faqs: [
      ["What should a family cruise vacation package include?", "Plan for cruise fare, taxes, gratuities, a pre-cruise hotel, flights or driving, port transfers, meals before sailing, and optional activities."],
      ["Which Florida port is easiest for an Orlando family trip?", "Port Canaveral is the closest major cruise port to Orlando and works well when families want to combine a sailing with Central Florida."],
      ["Is a short family cruise cheaper than a resort vacation?", "Sometimes, but compare the complete total. Cruise extras, flights, hotels, and transfers can narrow the difference."]
    ]
  },
  {
    slug: "weekend-cruise-packages-from-florida",
    title: "Weekend Cruise Packages From Florida | Ports, Hotels & Flights",
    metaDescription:
      "Compare weekend cruise packages from Florida with short sailings, cruise-port hotels, flight planning, Miami and Port Canaveral options.",
    h1: "Weekend Cruise Packages From Florida",
    eyebrow: "Short cruise planning",
    summary:
      "Weekend cruises can be efficient Florida getaways when the departure port, pre-cruise night, and transportation plan fit together.",
    image: pageImages.cruisePort,
    imageAlt: "Weekend cruise ship vacation departing from Florida",
    destination: "Florida",
    bestFor: ["Three-night sailings", "Couples and families", "Long weekends"],
    assumptions: "Estimated for two travelers; family totals vary by cabin occupancy and sailing date.",
    options: [
      {
        name: "Miami Weekend Cruise",
        destination: "Miami",
        cruise: "Two-to-four-night Bahamas or private-island sailing.",
        hotel: "One pre-cruise night in Miami or near the airport.",
        flight: "Compare MIA and FLL schedules, baggage costs, and transfer time.",
        activities: "Dinner, waterfront walk, or a short pre-cruise Miami activity.",
        estimatedCost: "$1,250-$2,500 for two",
        costRows: [["Cruise fare and taxes", "$650-$1,350"], ["Hotel", "$180-$350"], ["Flights/transfers", "$300-$600"], ["Activities/extras", "$120-$200"]],
        links: [
          ["Browse weekend cruises", cruises("weekend-cruises-from-florida"), "cruises"],
          ["Compare Miami cruise-port hotels", hotels("hotels-near-miami-cruise-port"), "hotels"],
          ["Search Miami flights", flights("miami-flight-deals"), "flights"],
          ["Find Miami pre-cruise ideas", local("miami-things-to-do"), "local"]
        ]
      }
    ],
    tips: ["Protect the short trip by arriving before embarkation day.", "Compare airport-to-port time, not only airfare.", "Avoid overpacking activities into a brief cruise weekend."],
    related: ["miami-cruise-vacation-packages", "bahamas-cruise-vacation-packages", "family-cruise-vacation-package"],
    faqs: [
      ["Where do weekend cruises leave from in Florida?", "Miami, Port Canaveral, Fort Lauderdale, and Tampa commonly support shorter itineraries, although schedules vary."],
      ["How many hotel nights does a weekend cruise need?", "Travelers flying or driving a long distance should usually plan at least one pre-cruise night."],
      ["Are weekend cruises good for first-time cruisers?", "They can be a manageable introduction, but compare the ship, itinerary, cabin, and complete trip cost."]
    ]
  },
  {
    slug: "bahamas-cruise-vacation-packages",
    title: "Bahamas Cruise Vacation Packages From Florida | Planning Guide",
    metaDescription:
      "Plan Bahamas cruise vacation packages from Florida with Miami and Port Canaveral sailings, hotels, flights, activities, and cost estimates.",
    h1: "Bahamas Cruise Vacation Packages From Florida",
    eyebrow: "Bahamas cruise planner",
    summary:
      "Compare the two most useful Bahamas cruise package shapes: Miami for South Florida access and Port Canaveral for Orlando add-ons.",
    image: pageImages.cruisePort,
    imageAlt: "Bahamas cruise vacation package from a Florida departure port",
    destination: "Florida",
    bestFor: ["First cruises", "Short tropical trips", "Florida add-on vacations"],
    assumptions: "Illustrative estimates for two travelers on a three-to-four-night sailing with one hotel night.",
    options: [
      {
        name: "Miami Bahamas Cruise Package",
        destination: "Miami",
        cruise: "Short Bahamas itinerary from PortMiami.",
        hotel: "One South Florida pre-cruise hotel night.",
        flight: "Compare Miami and Fort Lauderdale airports.",
        activities: "Beach, dining, or a simple waterfront activity before sailing.",
        estimatedCost: "$1,400-$2,800 for two",
        costRows: [["Cruise fare and taxes", "$700-$1,500"], ["Hotel", "$200-$400"], ["Flights/transfers", "$350-$650"], ["Activities/extras", "$150-$250"]],
        links: [
          ["Browse Bahamas cruises", cruises("bahamas-cruises-from-florida"), "cruises"],
          ["Compare Miami hotels", hotels("hotels-near-miami-cruise-port"), "hotels"],
          ["Search South Florida flights", flights("miami-airport-vs-fort-lauderdale-airport"), "flights"]
        ]
      },
      {
        name: "Port Canaveral Bahamas Cruise Package",
        destination: "Port Canaveral",
        cruise: "Short Bahamas itinerary from the Space Coast.",
        hotel: "One port-area or Orlando hotel night.",
        flight: "Use Orlando airports and price the ground transfer.",
        activities: "Space Coast beach time or one Orlando add-on.",
        estimatedCost: "$1,450-$2,950 for two",
        costRows: [["Cruise fare and taxes", "$700-$1,500"], ["Hotel", "$170-$330"], ["Flights/transfers", "$400-$750"], ["Activities/extras", "$180-$370"]],
        links: [
          ["Browse Port Canaveral cruises", cruises("bahamas-cruises-from-port-canaveral"), "cruises"],
          ["Compare cruise-port hotels", hotels("hotels-near-florida-cruise-ports"), "hotels"],
          ["Search Orlando flights", flights("orlando-flight-deals"), "flights"]
        ]
      }
    ],
    tips: ["Compare port logistics before choosing the cheapest sailing.", "Check passport and identification requirements with official sources.", "Budget separately for gratuities and onboard extras."],
    related: ["weekend-cruise-packages-from-florida", "port-canaveral-vacation-packages", "miami-cruise-vacation-packages"],
    faqs: [
      ["Which Florida port is best for a Bahamas cruise?", "Miami offers broad South Florida access, while Port Canaveral works well with Orlando and Space Coast trips. The best option depends on airfare, sailing schedule, and add-on plans."],
      ["How long are Bahamas cruises from Florida?", "Many are three to five nights, though exact itineraries and schedules vary."],
      ["What costs are outside the advertised cruise fare?", "Taxes, gratuities, drinks, Wi-Fi, excursions, flights, hotels, transfers, parking, and insurance may be separate."]
    ]
  },
  {
    slug: "port-canaveral-vacation-packages",
    title: "Port Canaveral Vacation Packages | Cruise, Hotel & Orlando",
    metaDescription:
      "Build Port Canaveral vacation packages with cruises, port hotels, Orlando flights, Space Coast activities, family costs, and planning links.",
    h1: "Port Canaveral Vacation Packages",
    eyebrow: "Space Coast package planner",
    summary:
      "Port Canaveral packages work best when cruise timing, Orlando transportation, a pre-cruise hotel, and one Space Coast or theme park add-on are planned together.",
    image: pageImages.cruisePort,
    imageAlt: "Port Canaveral cruise vacation with hotel and Orlando travel planning",
    destination: "Port Canaveral",
    bestFor: ["Orlando plus cruise trips", "Family sailings", "Space Coast weekends"],
    assumptions: "Estimated for a family of four combining a short cruise with one hotel night.",
    options: [
      {
        name: "Cruise Plus Space Coast Package",
        destination: "Port Canaveral",
        cruise: "Three-to-four-night cruise from Port Canaveral.",
        hotel: "One night near the port.",
        flight: "Fly into Orlando or drive to the Space Coast.",
        activities: "Beach time or a Space Coast attraction before sailing.",
        estimatedCost: "$2,600-$4,400",
        costRows: [["Cruise fare and taxes", "$1,500-$2,600"], ["Hotel", "$180-$320"], ["Transportation", "$500-$900"], ["Activities/extras", "$420-$580"]],
        links: [
          ["Browse cruises from Port Canaveral", cruises("cruises-from-port-canaveral"), "cruises"],
          ["Compare port-area hotels", hotels("hotels-near-florida-cruise-ports"), "hotels"],
          ["Search Orlando flight deals", flights("orlando-flight-deals"), "flights"],
          ["Explore family activities", local("best-family-activities-in-florida"), "local"]
        ]
      }
    ],
    tips: ["Decide whether Orlando or the port is the trip anchor.", "Price transfers before choosing an airport hotel.", "Keep embarkation morning simple."],
    related: ["family-cruise-vacation-package", "bahamas-cruise-vacation-packages", "florida-family-vacations-under-3000"],
    faqs: [
      ["How far is Port Canaveral from Orlando?", "Travel time varies with the airport, hotel, traffic, and transfer method. Build a generous buffer and confirm the current route before sailing."],
      ["Should I stay near Orlando or Port Canaveral before a cruise?", "Stay near the port for a calmer embarkation morning; stay near Orlando when a theme park or airport schedule is the stronger anchor."],
      ["What can families do near Port Canaveral?", "Beach time, Space Coast attractions, waterfront dining, and Orlando add-ons are common choices."]
    ]
  },
  {
    slug: "miami-cruise-vacation-packages",
    title: "Miami Cruise Vacation Packages | Cruise, Hotel & Flights",
    metaDescription:
      "Plan Miami cruise vacation packages with PortMiami sailings, cruise-port hotels, MIA and FLL flights, pre-cruise activities, and cost estimates.",
    h1: "Miami Cruise Vacation Packages",
    eyebrow: "Miami cruise planner",
    summary:
      "A useful Miami cruise package connects the sailing with the right airport, hotel neighborhood, and one realistic South Florida experience.",
    image: pageImages.miami,
    imageAlt: "Miami cruise vacation package with skyline hotel and waterfront",
    destination: "Miami",
    bestFor: ["Caribbean cruises", "Pre-cruise city stays", "South Florida weekends"],
    assumptions: "Estimated for two travelers with one hotel night before a four-to-seven-night cruise.",
    options: [
      {
        name: "Miami Cruise And City Night",
        destination: "Miami",
        cruise: "Caribbean or Bahamas sailing from PortMiami.",
        hotel: "One night in downtown Miami, Brickell, or an airport-area hotel.",
        flight: "Compare MIA and FLL based on arrival time and transfer cost.",
        activities: "Waterfront dinner, neighborhood walk, or a short boat-day option.",
        estimatedCost: "$2,000-$4,500 for two",
        costRows: [["Cruise fare and taxes", "$1,200-$3,000"], ["Hotel", "$220-$450"], ["Flights/transfers", "$400-$750"], ["Activities/extras", "$180-$300"]],
        links: [
          ["Browse cruises from Miami", cruises("cruises-from-miami"), "cruises"],
          ["Compare Miami cruise-port hotels", hotels("hotels-near-miami-cruise-port"), "hotels"],
          ["Compare MIA and FLL", flights("miami-airport-vs-fort-lauderdale-airport"), "flights"],
          ["Explore Miami things to do", local("miami-things-to-do"), "local"]
        ]
      }
    ],
    tips: ["Choose the hotel by arrival time and port plan, not only neighborhood popularity.", "Compare MIA and FLL with ground transportation included.", "Leave enough margin for embarkation."],
    related: ["weekend-cruise-packages-from-florida", "bahamas-cruise-vacation-packages", "miami"],
    faqs: [
      ["Which airport is best for a Miami cruise?", "Miami International is closer to PortMiami, while Fort Lauderdale can sometimes offer a better schedule or fare. Compare the complete transfer plan."],
      ["Where should I stay before a Miami cruise?", "Downtown and Brickell are convenient for the port; airport-area hotels can make sense after a late arrival."],
      ["How early should I arrive for a Miami cruise?", "Travelers flying in should strongly consider arriving at least one day before departure."]
    ]
  },
  {
    slug: "clearwater-beach-vacation-packages",
    title: "Clearwater Beach Vacation Packages | Family Hotel & Trip Costs",
    metaDescription:
      "Plan Clearwater Beach vacation packages with family hotels, Tampa flights, beach activities, cost estimates, and Gulf Coast trip ideas.",
    h1: "Clearwater Beach Vacation Packages",
    eyebrow: "Gulf Coast package planner",
    summary:
      "Build a Clearwater Beach trip around hotel location, beach time, Tampa access, and a balanced mix of free and paid family activities.",
    image: pageImages.clearwater,
    imageAlt: "Clearwater Beach family vacation package with Gulf Coast hotel",
    destination: "Clearwater",
    bestFor: ["Family beach trips", "Gulf Coast weekends", "Pool-and-beach vacations"],
    assumptions: "Estimated for a family of four staying four nights with flexible dates.",
    options: [
      {
        name: "Clearwater Family Beach Package",
        destination: "Clearwater",
        cruise: "Optional Tampa cruise add-on for longer trips.",
        hotel: "Four nights near the beach or in a value-focused nearby area.",
        flight: "Compare Tampa flights or drive.",
        activities: "Beach days, pool time, sunset outings, and one paid family activity.",
        estimatedCost: "$2,200-$3,400",
        costRows: [["Hotel", "$1,000-$1,600"], ["Transportation", "$400-$750"], ["Food", "$550-$750"], ["Activities", "$250-$300"]],
        links: [
          ["Compare Clearwater beachfront hotels", hotels("clearwater-beachfront-hotels"), "hotels"],
          ["Search Tampa flights", flights("cheap-flights-from-tampa"), "flights"],
          ["Explore Florida water activities", local("florida-water-activities"), "local"],
          ["Browse cruises from Tampa", cruises("cruises-from-tampa"), "cruises"]
        ]
      }
    ],
    tips: ["Compare beachfront convenience against parking and resort fees.", "Plan at least one weather-proof activity.", "Use free beach time to balance one premium experience."],
    related: ["florida-family-vacations-under-3000", "best-florida-family-vacations", "clearwater"],
    faqs: [
      ["Is Clearwater Beach good for family vacations?", "Yes. Families often value the beach, sunset activities, hotel pools, Tampa access, and nearby indoor options."],
      ["Do I need a rental car in Clearwater?", "It depends on hotel location and planned activities. Compare parking, airport transfer, and rideshare costs before deciding."],
      ["When are Clearwater Beach hotels most expensive?", "Rates can rise around holidays, spring break, winter demand, and major events. Confirm current prices for your dates."]
    ]
  },
  {
    slug: "key-west-vacation-packages",
    title: "Key West Vacation Packages | Flights, Hotels & Island Activities",
    metaDescription:
      "Plan Key West vacation packages with island hotels, flights, road-trip options, water activities, realistic costs, and travel tips.",
    h1: "Key West Vacation Packages",
    eyebrow: "Island package planner",
    summary:
      "Key West packages are easier to compare when you decide between flying, driving the Overseas Highway, and paying more for a walkable hotel.",
    image: pageImages.keyWest,
    imageAlt: "Key West island vacation package with hotel water and sunset",
    destination: "Key West",
    bestFor: ["Couples", "Island weekends", "Water activities"],
    assumptions: "Estimated for two travelers staying three nights.",
    options: [
      {
        name: "Key West Fly-In Weekend",
        destination: "Key West",
        cruise: "Optional; this package focuses on the island stay.",
        hotel: "Three nights in a walkable or value-focused Key West area.",
        flight: "Compare direct Key West flights with Miami or Fort Lauderdale plus driving.",
        activities: "Sunset, waterfront time, one water activity, and local dining.",
        estimatedCost: "$2,000-$4,000 for two",
        costRows: [["Hotel", "$1,050-$2,100"], ["Flights/transport", "$500-$1,000"], ["Food", "$300-$550"], ["Activities", "$150-$350"]],
        links: [
          ["Compare Key West hotels", hotels("key-west-hotel-deals"), "hotels"],
          ["Search Key West flights", flights("key-west-flight-deals"), "flights"],
          ["Explore Florida water activities", local("florida-water-activities"), "local"]
        ]
      }
    ],
    tips: ["Compare the cost of walkability against parking and transportation.", "Do not over-schedule a short island trip.", "Price flight and road-trip options as complete journeys."],
    related: ["miami-vs-key-west-vacation", "florida-water-activities-guide", "key-west"],
    faqs: [
      ["Is it cheaper to fly or drive to Key West?", "It depends on origin, airfare, rental car, parking, and how much of the Overseas Highway experience you want."],
      ["How many nights are enough for Key West?", "Three nights can work for a focused weekend; longer stays allow more water activities and slower island time."],
      ["Are Key West vacation packages expensive?", "Key West can be costly, especially for walkable hotels and peak dates. Flexible timing and careful hotel-area comparisons matter."]
    ]
  }
];

export const vacationPackageMap = Object.fromEntries(vacationPackages.map((item) => [item.slug, item]));

export function getVacationPackage(slug) {
  return vacationPackageMap[slug] || null;
}

export function getVacationPackagesForDestination(destination, limit = 3) {
  return vacationPackages
    .filter((item) => item.destination === destination || item.destination === "Florida" || item.options.some((option) => option.destination === destination))
    .sort((a, b) => {
      const score = (item) =>
        (item.destination === destination ? 4 : 0) +
        (item.options.some((option) => option.destination === destination) ? 2 : 0) +
        (item.destination === "Florida" ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

const destinationGalleryImages = {
  Orlando: [pageImages.orlando, pageImages.themePark, pageImages.familyTrip],
  Miami: [pageImages.miami, pageImages.cruisePort, pageImages.floridaCoast],
  Clearwater: [pageImages.clearwater, pageImages.floridaCoast, pageImages.familyTrip],
  "Key West": [pageImages.keyWest, pageImages.floridaCoast, pageImages.clearwater],
  "Port Canaveral": [pageImages.cruisePort, pageImages.orlando, pageImages.floridaCoast],
  "St. Augustine": [pageImages.roadTrip, pageImages.floridaCoast, pageImages.familyTrip],
  Florida: [pageImages.floridaCoast, pageImages.familyTrip, pageImages.cruisePort]
};

export function getVacationPackageGallery(packagePage) {
  const destinations = [packagePage.destination, ...packagePage.options.map((option) => option.destination)];
  const images = destinations.flatMap((destination) => destinationGalleryImages[destination] || destinationGalleryImages.Florida);

  return [...new Set(images)].slice(0, 4).map((image, index) => ({
    image,
    alt: `${packagePage.destination} vacation planning view ${index + 1}`
  }));
}

export const searchDemandContentPlan = [
  {
    theme: "Florida family vacations",
    provenQueries: ["florida family vacations", "family vacation in florida", "florida beach vacation"],
    livePages: ["best-florida-family-vacations", "florida-family-vacations-under-2000", "florida-family-vacations-under-3000"]
  },
  {
    theme: "Florida cruises",
    provenQueries: ["cruises from florida", "weekend cruises from florida", "florida bahamas cruise"],
    livePages: ["family-cruise-vacation-package", "weekend-cruise-packages-from-florida", "bahamas-cruise-vacation-packages"]
  },
  {
    theme: "Florida hotels",
    provenQueries: ["florida beach hotel deals", "clearwater beach hotel deals", "hotel deals key west"],
    livePages: ["clearwater-beach-vacation-packages", "key-west-vacation-packages", "best-florida-beaches"]
  },
  {
    theme: "Things to do",
    provenQueries: ["things to do in florida this weekend", "free things to do in florida", "orlando activity deals"],
    livePages: ["florida-weekend-getaways", "best-florida-family-vacations", "florida-vacation-planning-guide"]
  }
];
