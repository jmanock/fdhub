import { getExpediaHotelLink } from "./affiliateLinks";

export const baseUrl = "https://floridadealshub.com";

export const sites = {
  flights: "https://flightdealsflorida.org",
  hotels: "https://hoteldealsflorida.org",
  cruises: "https://cruisedealsflorida.org",
  local: "https://localdealsflorida.org"
};

export const nav = [
  ["Flights", sites.flights],
  ["Hotels", sites.hotels],
  ["Cruises", sites.cruises],
  ["Local Deals", sites.local]
];

export const pillars = [
  {
    key: "flights",
    title: "Florida Flight Deals",
    anchor: "Florida flight deals",
    copy: "Cheap flights in and out of Orlando, Miami, Tampa, Fort Lauderdale, and Jacksonville.",
    button: "View Flight Deals",
    href: sites.flights,
    badge: "FLY",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    alt: "Airplane wing above clouds for Florida flight deals"
  },
  {
    key: "hotels",
    title: "Florida Hotel Deals",
    anchor: "Florida hotel deals",
    copy: "Beach resorts, family stays, weekend getaways, and staycation deals.",
    button: "View Hotel Deals",
    href: sites.hotels,
    badge: "STAY",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    alt: "Resort pool and palms for Florida hotel deals"
  },
  {
    key: "cruises",
    title: "Florida Cruise Deals",
    anchor: "Florida cruise deals",
    copy: "Bahamas, Caribbean, weekend, and family cruise deals from Florida ports.",
    button: "View Cruise Deals",
    href: sites.cruises,
    badge: "SAIL",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80",
    alt: "Cruise ship at sea for Florida cruise deals"
  },
  {
    key: "local",
    title: "Local Deals Florida",
    anchor: "local Florida deals",
    copy: "Restaurants, events, attractions, family fun, and hidden local savings.",
    button: "View Local Deals",
    href: sites.local,
    badge: "LOCAL",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Sunny Florida beach for local deals and weekend getaways"
  }
];

export const popularPages = [
  ["Florida Travel Deals", "/florida-travel-deals"],
  ["Florida Weekend Getaways", "/florida-weekend-getaways"],
  ["Cheap Florida Vacations", "/cheap-florida-vacations"],
  ["Florida Vacation Planning", "/florida-vacation-planning"],
  ["Best Time To Visit Florida", "/best-time-to-visit-florida"],
  ["Florida Family Vacations", "/florida-family-vacations"],
  ["Florida Deal Alerts", "/florida-deal-alerts"]
];

export const tripRouterCards = [
  {
    badge: "FLY",
    title: "Flight Deals",
    copy: "Cheap flights from Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, and more.",
    cta: "Find Flights",
    href: sites.flights
  },
  {
    badge: "STAY",
    title: "Hotel Deals",
    copy: "Florida hotels, beach resorts, weekend stays, family hotels, and budget searches.",
    cta: "Compare Hotels",
    href: sites.hotels
  },
  {
    badge: "SAIL",
    title: "Cruise Deals",
    copy: "Bahamas, Caribbean, weekend, and family cruises from Florida ports.",
    cta: "Browse Cruises",
    href: sites.cruises
  },
  {
    badge: "LOCAL",
    title: "Local Deals",
    copy: "Restaurants, attractions, events, family activities, and things to do across Florida.",
    cta: "Explore Local Deals",
    href: sites.local
  }
];

export const topPicks = [
  {
    label: "Top Pick",
    title: "Orlando fare finds",
    value: "Flight pick",
    copy: "Useful for watching flexible trips in and out of Central Florida airports.",
    cta: "Find Flight Deals",
    href: sites.flights,
    tone: "sky"
  },
  {
    label: "Popular",
    title: "Miami Beach stays",
    value: "Hotel pick",
    copy: "Helpful for comparing beach stays, weekend hotel ideas, and South Florida getaways.",
    cta: "Compare Hotel Deals",
    href: sites.hotels,
    tone: "sand"
  },
  {
    label: "Weekend Idea",
    title: "Bahamas sailings from Florida",
    value: "Cruise pick",
    copy: "A practical starting point for weekend cruises and port-based trip planning.",
    cta: "Browse Cruise Deals",
    href: sites.cruises,
    tone: "sea"
  },
  {
    label: "Family Pick",
    title: "Orlando attraction deals",
    value: "Local pick",
    copy: "Good for finding things to do in Florida after flights and hotels are handled.",
    cta: "Explore Local Deals",
    href: sites.local,
    tone: "sun"
  }
];

export const planTripCards = [
  {
    title: "Find Flights",
    copy: "Start with cheap flights from Florida airports and flexible date ideas.",
    href: sites.flights
  },
  {
    title: "Find Hotels",
    copy: "Compare Florida hotel deals for beach trips, city stays, and family vacations.",
    href: sites.hotels
  },
  {
    title: "Book a Cruise",
    copy: "View cruise deals from Florida ports for short getaways and longer sailings.",
    href: sites.cruises
  },
  {
    title: "Explore Activities",
    copy: "Find things to do in Florida, from restaurants and events to attractions.",
    href: sites.local
  }
];

export const popularSearchLinks = [
  ["Florida Travel Deals", "/florida-travel-deals"],
  ["Florida Weekend Getaways", "/florida-weekend-getaways"],
  ["Cheap Florida Vacations", "/cheap-florida-vacations"],
  ["Orlando Travel Deals", "/orlando-deals"],
  ["Miami Travel Deals", "/miami-deals"],
  ["Tampa Travel Deals", "/tampa-deals"],
  ["Florida Family Vacations", "/florida-family-vacations"],
  ["Best Time To Visit Florida", "/best-time-to-visit-florida"],
  ["Orlando Flight Deals", sites.flights],
  ["Miami Beach Hotel Deals", sites.hotels],
  ["Cruises From Miami", sites.cruises],
  ["Orlando Local Deals", sites.local]
];

export const homepageSeoParagraphs = [
  "Florida Deals Hub connects travelers and locals with curated Florida flight deals, hotel searches, cruise sailings, and local things to do. The Hub is the parent homepage for the Florida Deals network, not another duplicate feed. It helps you choose the right path first, then sends you to the focused site that matches your trip or local plan.",
  "The network is split into Florida flight deals, Florida hotel deals, Florida cruise deals, and local Florida deals because each search behaves differently. A traveler comparing airfare needs airport routes and flexible dates. Someone planning Florida weekend getaways may need hotels, beach towns, or quick cruise options. A local resident may care more about restaurants, events, attractions, family activities, and things to do in Florida.",
  "The easiest way to find useful Florida travel deals is to stay flexible. Check nearby airports, compare beach and city hotel areas, watch cruise dates from multiple ports, and leave room for local attractions and events. Prices and availability may change, so visitors should confirm current details with the booking provider, event organizer, restaurant, attraction, cruise line, airline, or official source before making plans.",
  "Use Florida Deals Hub as a trip planning map. Start with the category you need, explore related Hub pages for broader planning ideas, and sign up for free alerts if you want network-wide updates for flights, hotels, cruises, local deals, weekend getaways, and things to do in Florida."
];

export const homepageFaqs = [
  {
    question: "What kind of deals can I find on Florida Deals Hub?",
    answer:
      "Florida Deals Hub helps users discover deal sources for Florida flights, hotels, cruises, local events, restaurants, attractions, weekend getaways, family activities, and things to do across the state."
  },
  {
    question: "Does Florida Deals Hub sell trips directly?",
    answer:
      "No. Florida Deals Hub is a network homepage and routing guide. It points visitors to focused deal pages and outside sources where they can confirm current details."
  },
  {
    question: "How often do Florida deals change?",
    answer:
      "Prices, dates, availability, restrictions, and offer details can change quickly. Always confirm current information with the booking provider, official source, or niche Florida Deals site before making plans."
  },
  {
    question: "Where should I start if I need a full Florida trip?",
    answer:
      "Start with the biggest decision first. Use Florida Flight Deals for airfare, Florida Hotel Deals for stays, Florida Cruise Deals for sailings, and Local Deals Florida for restaurants, events, attractions, and activities."
  },
  {
    question: "Can I find both travel and local deals?",
    answer:
      "Yes. The network covers travel categories like flights, hotels, cruises, and weekend getaways, plus local Florida deals for residents and visitors looking for restaurants, events, attractions, and family fun."
  },
  {
    question: "Are prices and availability guaranteed?",
    answer:
      "No. Florida Deals Hub helps users find deal sources and planning paths, but prices and availability are not guaranteed. Confirm current details with the booking or official source."
  }
];

export const expediaHotelCards = [
  {
    destination: "orlando",
    title: "Orlando Hotels",
    copy: "Theme park weekends, family stays, resort areas, and Central Florida getaways.",
    cta: "Check Availability",
    href: getExpediaHotelLink("orlando")
  },
  {
    destination: "miami",
    title: "Miami Hotels",
    copy: "Beachfront stays, South Florida weekends, nightlife trips, and coastal escapes.",
    cta: "Compare Hotels",
    href: getExpediaHotelLink("miami")
  },
  {
    destination: "tampa",
    title: "Tampa Hotels",
    copy: "Gulf Coast weekends, city stays, cruise nights, and nearby beach plans.",
    cta: "Check Availability",
    href: getExpediaHotelLink("tampa")
  },
  {
    destination: "fortLauderdale",
    title: "Fort Lauderdale Hotels",
    copy: "Beach hotels, cruise-night stays, South Florida trips, and quick getaways.",
    cta: "Compare Hotels",
    href: getExpediaHotelLink("fortLauderdale")
  }
];

export const stayWithTripCards = [
  {
    destination: "orlando",
    title: "Check Hotel Rates",
    copy: "Planning your trip? Compare hotel prices before they change.",
    href: getExpediaHotelLink("orlando")
  },
  {
    destination: "miami",
    title: "Compare Hotels",
    copy: "Turn your Florida trip into a full getaway with the right hotel.",
    href: getExpediaHotelLink("miami")
  },
  {
    destination: "tampa",
    title: "Find Places To Stay",
    copy: "Hotel rates may change. Check current availability.",
    href: getExpediaHotelLink("tampa")
  }
];

export const planTripLinks = [
  ["Cheap Florida Flights", sites.flights],
  ["Florida Hotel Deals", sites.hotels],
  ["Florida Cruise Deals", sites.cruises],
  ["Florida Local Deals", sites.local]
];

export const lastUpdatedLabel = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric"
}).format(new Date());

export const pageImages = {
  floridaCoast:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  weekendBeach:
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  familyTrip:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  planning:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  miami:
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1200&q=80",
  tampa:
    "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=1200&q=80",
  orlando:
    "https://images.unsplash.com/photo-1605880135636-7b553d681026?auto=format&fit=crop&w=1200&q=80",
  calendar:
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
};

export const landingPages = [
  {
    slug: "florida-travel-deals",
    title: "Florida Travel Deals | Flights, Hotels, Cruises & Local Savings",
    metaDescription:
      "Find Florida travel deals across flights, hotels, cruises, local attractions, restaurants, events, and weekend getaways.",
    h1: "Florida Travel Deals",
    eyebrow: "Travel savings",
    intro:
      "Florida Deals Hub connects travelers and locals with useful deal pages across flights, hotels, cruises, and local experiences. Browse the network to find current deal sources and curated Florida savings.",
    image: pageImages.floridaCoast,
    alt: "Florida shoreline and travel planning cards for Florida travel deals",
    details: [
      "Use this page when you are still deciding what kind of Florida deal you need. Some travelers start with airfare into Orlando, Miami, Tampa, Fort Lauderdale, or Jacksonville. Others need Florida hotel deals, cruise ideas from Florida ports, local attractions, restaurants, events, or weekend getaway inspiration.",
      "The Hub keeps broad Florida travel searches organized by sending each intent to a focused network site. That makes it easier to compare the right type of source without mixing flights, hotel stays, cruises, and local activities into one cluttered feed."
    ],
    related: ["florida-vacation-deals", "florida-weekend-deals", "florida-beach-deals", "florida-deal-alerts"],
    previews: [
      ["Florida flight deals", "Compare current flight deal sources for major Florida airports.", sites.flights, "sky"],
      ["Florida hotel deals", "Check resort, staycation, and weekend hotel pages.", sites.hotels, "sand"],
      ["Florida cruise deals", "Find cruise deal pages for short sailings and longer escapes.", sites.cruises, "sea"],
      ["Local Florida deals", "Browse local attractions, restaurants, events, and things to do.", sites.local, "sun"]
    ]
  },
  {
    slug: "florida-weekend-deals",
    title: "Florida Weekend Deals | Getaways, Hotels, Cruises & Local Events",
    metaDescription:
      "Find Florida weekend deals including hotel getaways, short cruises, flight deals, local events, restaurants, and things to do.",
    h1: "Florida Weekend Deals",
    eyebrow: "Weekend getaways",
    intro:
      "Use Florida Deals Hub to route weekend plans to the right part of the network, from quick hotel stays and short cruises to local events, restaurant savings, and flight deal sources.",
    image: pageImages.weekendBeach,
    alt: "Weekend bag near a Florida beach for Florida weekend deals",
    details: [
      "Weekend plans often depend on timing. A short Florida trip may start with a Friday flight, a two-night hotel, a cruise from a nearby port, or a local event that makes the getaway worthwhile.",
      "Use the network routes to compare Florida hotel deals for quick stays, cruise pages for short sailings, flight deal sources for flexible dates, and Local Deals Florida for restaurants, attractions, family activities, and things to do once you arrive."
    ],
    related: ["florida-travel-deals", "florida-vacation-deals", "florida-beach-deals", "florida-deals-for-locals"],
    previews: [
      ["Weekend hotel getaways", "Browse Florida hotel deals for beach stays and city breaks.", sites.hotels, "sand"],
      ["Short Florida cruises", "Check current cruise offer pages from Florida ports.", sites.cruises, "sea"],
      ["Weekend flight ideas", "Find flight deal sources for quick trips in and out of Florida.", sites.flights, "sky"],
      ["Local events and dining", "Browse local Florida deals for restaurants, events, and attractions.", sites.local, "sun"]
    ]
  },
  {
    slug: "florida-weekend-getaways",
    title: "Florida Weekend Getaways | Hotels, Flights, Cruises & Local Deals",
    metaDescription:
      "Plan Florida weekend getaways with hotel deal sources, cheap flight routes, short cruises, local events, restaurants, attractions, and beach savings.",
    h1: "Florida Weekend Getaways",
    eyebrow: "Weekend planning",
    intro:
      "Florida weekend getaways can be simple when the planning path is clear. Florida Deals Hub helps you move from broad getaway ideas into focused pages for flights, hotels, cruises, local events, restaurants, attractions, and short beach trips.",
    image: pageImages.weekendBeach,
    alt: "Florida beach weekend getaway planning with hotels and travel deals",
    details: [
      "Good weekend getaways usually come from combining a realistic travel window with the right destination. Orlando may work for family activities, Miami and Fort Lauderdale for beaches and nightlife, Tampa for Gulf Coast plans, and cruise ports for short sailings.",
      "Florida Deals Hub helps you split the search into flights, hotels, cruises, and local activities so each part can be checked with the right source. Prices and schedules may change, especially around holidays, major events, school breaks, and beach weekends."
    ],
    related: ["florida-weekend-deals", "florida-travel-deals", "florida-beach-deals", "cheap-florida-vacations"],
    previews: [
      ["Weekend hotel stays", "Check Florida hotel deal pages for quick getaways and staycations.", sites.hotels, "sand"],
      ["Short cruise ideas", "Browse Florida cruise deal pages for weekend and Bahamas sailings.", sites.cruises, "sea"],
      ["Quick Florida flights", "Find Florida flight deal sources for short weekend routes.", sites.flights, "sky"],
      ["Weekend local deals", "Explore local Florida deals for events, dining, and things to do.", sites.local, "sun"]
    ]
  },
  {
    slug: "cheap-florida-vacations",
    title: "Cheap Florida Vacations | Flights, Hotels, Cruises & Things To Do",
    metaDescription:
      "Plan cheap Florida vacations with flight deal sources, hotel deal pages, cruises from Florida ports, attractions, restaurants, events, and family activities.",
    h1: "Cheap Florida Vacations",
    eyebrow: "Vacation value",
    intro:
      "Cheap Florida vacations are easier to plan when you separate the trip into airfare, hotels, cruises, and local activities. Florida Deals Hub helps you choose the right network site for each part of the search.",
    image: pageImages.floridaCoast,
    alt: "Florida vacation planning with beach hotels flights cruises and activities",
    details: [
      "A lower-cost Florida vacation usually comes from flexibility. Compare nearby airports, watch hotel areas outside the busiest beach blocks, look at cruise dates from multiple ports, and leave room for restaurants, attractions, and local events that fit your budget.",
      "This page is built as a planning gateway. Start with the category that controls your trip cost, then use the related pages to compare beach vacations, family travel, weekend trips, and seasonal timing."
    ],
    related: ["florida-travel-deals", "cheap-florida-trips", "florida-vacation-planning", "florida-family-vacations"],
    previews: [
      ["Cheap flights from Florida", "Start with Florida flight deal sources for flexible routes and dates.", sites.flights, "sky"],
      ["Florida hotel deals", "Compare hotel deal pages for affordable beach, city, and family stays.", sites.hotels, "sand"],
      ["Cruise deals from Florida", "Browse cruise pages for short getaways and longer sailings.", sites.cruises, "sea"],
      ["Things to do in Florida", "Find local attractions, restaurants, events, and family activities.", sites.local, "sun"]
    ]
  },
  {
    slug: "florida-vacation-planning",
    title: "Florida Vacation Planning | Flights, Hotels, Cruises & Activities",
    metaDescription:
      "Plan a Florida vacation with helpful routes to flight deals, hotel deals, cruise deals, restaurants, attractions, events, and local activities.",
    h1: "Florida Vacation Planning",
    eyebrow: "Trip planning",
    intro:
      "Florida vacation planning can start with a flight, a hotel, a cruise, or a list of things to do. This Hub page organizes the first steps so travelers can move into the best niche site without sorting through a cluttered feed.",
    image: pageImages.planning,
    alt: "Florida vacation planning checklist for flights hotels cruises and activities",
    details: [
      "Use this page as a trip planning checklist. If your dates are flexible, begin with flights. If the destination matters most, compare hotels by city or beach area. If you want an easy packaged getaway, check cruise routes from Florida ports. Then use local deal pages to fill in attractions, restaurants, events, and family activities.",
      "The Hub does not sell travel directly. It helps you choose the correct source, understand what to compare, and confirm current details with the provider, booking site, cruise line, airline, venue, restaurant, or official source."
    ],
    related: ["florida-travel-deals", "florida-vacation-deals", "best-time-to-visit-florida", "florida-family-vacations"],
    previews: [
      ["Find flights", "Use flight deal sources for major Florida airports and flexible trip ideas.", sites.flights, "sky"],
      ["Compare hotels", "Check Florida hotel deal pages for resorts, beach towns, and city stays.", sites.hotels, "sand"],
      ["Plan a cruise", "Browse cruise deals from Florida ports for weekend and vacation sailings.", sites.cruises, "sea"],
      ["Explore activities", "Find restaurants, events, attractions, and things to do in Florida.", sites.local, "sun"]
    ]
  },
  {
    slug: "best-time-to-visit-florida",
    title: "Best Time To Visit Florida | Travel Deals, Seasons & Trip Tips",
    metaDescription:
      "Learn the best time to visit Florida for flights, hotels, cruises, beaches, attractions, events, family trips, and weekend getaways.",
    h1: "Best Time To Visit Florida",
    eyebrow: "Seasonal planning",
    intro:
      "The best time to visit Florida depends on your route, budget, weather preferences, and plans. Florida Deals Hub helps travelers compare flights, hotels, cruises, and local activities by season.",
    image: pageImages.calendar,
    alt: "Florida seasonal travel calendar with beaches flights hotels and cruises",
    details: [
      "Florida travel prices often move with school breaks, holidays, spring travel, cruise demand, weather patterns, festivals, sporting events, and beach season. A date that works well for a theme park trip may not be the best date for a beach hotel or cruise.",
      "Use this page to think through timing before you choose a category. Flexible travelers may compare nearby airports, shift hotel dates, check cruise departures from more than one port, and look for local activities that make an off-peak trip feel worthwhile."
    ],
    related: ["florida-travel-deals", "florida-vacation-planning", "florida-weekend-getaways", "florida-beach-deals"],
    previews: [
      ["Seasonal flight deals", "Watch Florida flight sources when dates and airports are flexible.", sites.flights, "sky"],
      ["Off-season hotel ideas", "Check hotel deal pages for beach towns, cities, and family areas.", sites.hotels, "sand"],
      ["Cruise timing", "Browse Florida cruise deal pages for seasonal sailings and port options.", sites.cruises, "sea"],
      ["Events and attractions", "Use local deal pages to plan around events, dining, and things to do.", sites.local, "sun"]
    ]
  },
  {
    slug: "florida-family-vacations",
    title: "Florida Family Vacations | Flights, Hotels, Cruises & Activities",
    metaDescription:
      "Plan Florida family vacations with flight deal sources, hotel stays, cruise ideas, attractions, restaurants, events, and family-friendly things to do.",
    h1: "Florida Family Vacations",
    eyebrow: "Family planning",
    intro:
      "Florida family vacations often need a clear path through flights, hotels, attractions, restaurants, events, and cruise options. Florida Deals Hub routes each part of the plan to the right network site.",
    image: pageImages.familyTrip,
    alt: "Florida family vacation planning with hotels attractions flights and cruises",
    details: [
      "Family trips need practical planning: airport timing, hotel location, room setup, attraction days, meals, transportation, and backup activities. Florida Deals Hub keeps those choices separated so families can compare each part without losing the bigger plan.",
      "Start with flights if airfare will decide the dates, hotels if location matters most, cruise pages if you want a sailing from a Florida port, and Local Deals Florida for attractions, restaurants, events, and family-friendly things to do."
    ],
    related: ["florida-family-deals", "orlando-deals", "cheap-florida-vacations", "florida-vacation-planning"],
    previews: [
      ["Family flight ideas", "Find flight deal sources for Orlando, Tampa, Miami, Jacksonville, and more.", sites.flights, "sky"],
      ["Family hotel deals", "Compare hotel deal pages for resorts, suites, beach stays, and weekends.", sites.hotels, "sand"],
      ["Family cruise deals", "Browse cruise pages for sailings from Florida ports.", sites.cruises, "sea"],
      ["Family activities", "Explore local deals for attractions, restaurants, events, and things to do.", sites.local, "sun"]
    ]
  },
  {
    slug: "florida-vacation-deals",
    title: "Florida Vacation Deals | Resorts, Flights, Cruises & Things To Do",
    metaDescription:
      "Find Florida vacation deals across resorts, flights, cruises, attractions, restaurants, events, and family-friendly things to do.",
    h1: "Florida Vacation Deals",
    eyebrow: "Vacation planning",
    intro:
      "Florida vacation planning often crosses flights, hotels, cruises, and local experiences. This page helps you choose the right Florida Deals Hub network site for current deal sources and featured Florida savings.",
    image: pageImages.floridaCoast,
    alt: "Florida resort pool and palm trees for Florida vacation deals",
    related: ["florida-travel-deals", "florida-family-deals", "florida-beach-deals", "miami-deals"],
    previews: [
      ["Resort and hotel deals", "Check Florida hotel deal pages for vacation stays and staycations.", sites.hotels, "sand"],
      ["Flights to Florida", "Browse Florida flight deals for Orlando, Miami, Tampa, and more.", sites.flights, "sky"],
      ["Cruises from Florida", "Find Florida cruise deal pages for Bahamas and Caribbean routes.", sites.cruises, "sea"],
      ["Attractions and dining", "Explore local Florida deals for things to do during your trip.", sites.local, "sun"]
    ]
  },
  {
    slug: "cheap-florida-trips",
    title: "Cheap Florida Trips | Flights, Hotels, Cruises & Local Savings",
    metaDescription:
      "Find cheap Florida trip ideas across flight deal sources, hotel savings, cruise pages, local attractions, restaurants, events, and weekend getaways.",
    h1: "Cheap Florida Trips",
    eyebrow: "Budget trip planning",
    intro:
      "Cheap Florida trips usually come from combining the right flight, a smart hotel choice, flexible dates, and local savings once you arrive. Florida Deals Hub routes each part of that search to the best niche site in the network.",
    image: pageImages.planning,
    alt: "Affordable Florida trip planning with hotel flight cruise and local deal cards",
    related: ["florida-travel-deals", "florida-vacation-deals", "florida-weekend-getaways", "florida-deal-alerts"],
    previews: [
      ["Cheap Florida flights", "Start with Florida flight deal sources for major airports.", sites.flights, "sky"],
      ["Budget hotel ideas", "Check Florida hotel deal pages for affordable stays and staycations.", sites.hotels, "sand"],
      ["Cruise value pages", "Browse Florida cruise deal pages for short and longer sailings.", sites.cruises, "sea"],
      ["Low-cost local plans", "Find local Florida deals for dining, attractions, events, and family fun.", sites.local, "sun"]
    ]
  },
  {
    slug: "florida-family-deals",
    title: "Florida Family Deals | Hotels, Attractions, Flights & Cruises",
    metaDescription:
      "Find Florida family deals across hotel stays, attractions, restaurants, flights, cruises, events, and weekend activities.",
    h1: "Florida Family Deals",
    eyebrow: "Family savings",
    intro:
      "Families can use Florida Deals Hub as a starting point for hotel stays, attraction ideas, local events, flight deal sources, and cruise pages. Deals may change, so check current offers on the niche sites.",
    image: pageImages.familyTrip,
    alt: "Family walking near a sunny Florida beach for family deals",
    related: ["orlando-deals", "florida-weekend-deals", "florida-vacation-deals", "florida-deal-alerts"],
    previews: [
      ["Family hotel deals", "Find Florida hotel deals for family stays and weekend trips.", sites.hotels, "sand"],
      ["Attractions and events", "Browse local Florida deals for family fun and things to do.", sites.local, "sun"],
      ["Family cruise pages", "Check Florida cruise deals for family-friendly sailing options.", sites.cruises, "sea"],
      ["Flights for family trips", "Use Florida flight deals to watch airport routes and fares.", sites.flights, "sky"]
    ]
  },
  {
    slug: "florida-beach-deals",
    title: "Florida Beach Deals | Hotels, Flights, Cruises & Coastal Savings",
    metaDescription:
      "Find Florida beach deals including coastal hotel stays, flight deal sources, cruises, restaurants, attractions, and weekend getaways.",
    h1: "Florida Beach Deals",
    eyebrow: "Coastal deals",
    intro:
      "Florida beach trips can start with a hotel, a flight, a cruise, or a local restaurant and attraction plan. Florida Deals Hub routes you to current deal sources across the coastal network.",
    image: pageImages.floridaCoast,
    alt: "Blue Florida beach water and umbrellas for Florida beach deals",
    related: ["florida-vacation-deals", "miami-deals", "fort-lauderdale-deals", "florida-weekend-deals"],
    previews: [
      ["Beach hotel deals", "Browse Florida hotel deals for beach resorts and coastal stays.", sites.hotels, "sand"],
      ["Flights to beach cities", "Check Florida flight deals for Miami, Fort Lauderdale, Tampa, and more.", sites.flights, "sky"],
      ["Cruises from beach ports", "Find Florida cruise deals from coastal departure ports.", sites.cruises, "sea"],
      ["Beach town local deals", "Explore local Florida deals for restaurants and attractions near the coast.", sites.local, "sun"]
    ]
  },
  {
    slug: "orlando-deals",
    title: "Orlando Deals | Flights, Hotels, Attractions & Local Savings",
    metaDescription:
      "Find Orlando deals including flight deals, hotel stays, local attractions, restaurants, family activities, and weekend savings.",
    h1: "Orlando Deals",
    eyebrow: "Central Florida",
    intro:
      "Use this Orlando deals page to route your search to Orlando flight deal sources, Orlando hotel deals, family attractions, restaurants, events, and cruise options from nearby Florida ports.",
    image: pageImages.orlando,
    alt: "Orlando travel planning scene for flights hotels and attraction deals",
    details: [
      "Orlando planning often starts with flights into Central Florida and hotels near theme parks, convention areas, family activities, or weekend event plans. The right source depends on whether airfare, lodging, attractions, or restaurants are driving the trip.",
      "Use Florida Flight Deals for Orlando airport routes, Florida Hotel Deals for family stays and weekend hotels, Florida Cruise Deals for Port Canaveral and nearby sailings, and Local Deals Florida for attractions, events, restaurants, and things to do around Orlando."
    ],
    related: ["florida-family-deals", "florida-weekend-deals", "tampa-deals", "florida-deal-alerts"],
    previews: [
      ["Orlando flight deals", "Check Florida flight deal sources for Orlando airport routes.", sites.flights, "sky"],
      ["Orlando hotel deals", "Browse Florida hotel deals for family stays and weekend trips.", sites.hotels, "sand"],
      ["Orlando attraction savings", "Find local Florida deals for attractions, restaurants, and events.", sites.local, "sun"],
      ["Cruises near Orlando", "Check cruise deals from Port Canaveral and other Florida ports.", sites.cruises, "sea"]
    ]
  },
  {
    slug: "miami-deals",
    title: "Miami Deals | Flights, Hotels, Cruises & Local Savings",
    metaDescription:
      "Find Miami deals including flights, hotels, cruises from Miami, restaurants, attractions, events, and beach savings.",
    h1: "Miami Deals",
    eyebrow: "South Florida",
    intro:
      "Miami deal searches often include flights, beach hotels, cruises from Miami, dining, events, and attractions. Florida Deals Hub points you to the right niche site for current deal sources.",
    image: pageImages.miami,
    alt: "Miami beach and skyline for Miami travel deals",
    details: [
      "Miami trips can combine airfare, South Florida hotel areas, cruises from Miami, restaurants, nightlife, beaches, events, and local attractions. Because those searches have different timing and availability, the Hub keeps each route clear.",
      "Start with flights if you are comparing Miami and nearby airports, hotels if you need a beach or city stay, cruises if the port is the anchor of the trip, and Local Deals Florida for dining, events, attractions, and neighborhood ideas."
    ],
    related: ["fort-lauderdale-deals", "florida-beach-deals", "florida-vacation-deals", "florida-travel-deals"],
    previews: [
      ["Miami flight deals", "Browse Florida flight deals for Miami and nearby airports.", sites.flights, "sky"],
      ["Miami hotel deals", "Check Florida hotel deal pages for beach and city stays.", sites.hotels, "sand"],
      ["Cruises from Miami", "Find Florida cruise deal pages for sailings from Miami.", sites.cruises, "sea"],
      ["Miami local deals", "Explore local Florida deals for restaurants, events, and attractions.", sites.local, "sun"]
    ]
  },
  {
    slug: "tampa-deals",
    title: "Tampa Deals | Flights, Hotels, Cruises & Local Savings",
    metaDescription:
      "Find Tampa deals including flight deals, hotel stays, cruise offers, restaurants, events, attractions, and weekend savings.",
    h1: "Tampa Deals",
    eyebrow: "Gulf Coast",
    intro:
      "Tampa is a strong starting point for Gulf Coast hotels, flights, cruises, local dining, events, and attractions. Use Florida Deals Hub to choose the right network site for current offers.",
    image: pageImages.tampa,
    alt: "Tampa waterfront at sunset for Tampa deals",
    details: [
      "Tampa deal searches often include flights into the Gulf Coast, hotels for city or beach-adjacent stays, cruises from Tampa, restaurants, events, attractions, and nearby weekend trips. The best next click depends on which part of the plan is most important.",
      "Use the Hub to move into the focused site for airfare, hotel searches, cruise departures, or local things to do. Confirm current prices, schedules, restrictions, and availability with the provider or official source before making plans."
    ],
    related: ["florida-beach-deals", "florida-weekend-deals", "orlando-deals", "florida-deals-for-locals"],
    previews: [
      ["Tampa flight deals", "Check Florida flight deals for Tampa airport routes.", sites.flights, "sky"],
      ["Tampa hotel deals", "Browse Florida hotel deals for Gulf Coast stays and weekends.", sites.hotels, "sand"],
      ["Cruises from Tampa", "Find Florida cruise deals from Tampa and other Florida ports.", sites.cruises, "sea"],
      ["Tampa local deals", "Explore local Florida deals for events, dining, and attractions.", sites.local, "sun"]
    ]
  },
  {
    slug: "fort-lauderdale-deals",
    title: "Fort Lauderdale Deals | Flights, Hotels, Cruises & Local Savings",
    metaDescription:
      "Find Fort Lauderdale deals including flights, beach hotels, cruises, restaurants, attractions, events, and weekend savings.",
    h1: "Fort Lauderdale Deals",
    eyebrow: "South Florida coast",
    intro:
      "Fort Lauderdale deal searches can include airport routes, beach hotels, cruises, local restaurants, events, and attractions. This hub page sends visitors to the right Florida Deals network site.",
    alt: "Fort Lauderdale beach and marina for local travel deals",
    related: ["miami-deals", "florida-beach-deals", "florida-vacation-deals", "florida-deal-alerts"],
    previews: [
      ["Fort Lauderdale flight deals", "Browse Florida flight deals for Fort Lauderdale and nearby airports.", sites.flights, "sky"],
      ["Fort Lauderdale hotel deals", "Check Florida hotel deals for beach stays and weekends.", sites.hotels, "sand"],
      ["Fort Lauderdale cruise deals", "Find Florida cruise deal pages for nearby departure ports.", sites.cruises, "sea"],
      ["Local Fort Lauderdale deals", "Explore local Florida deals for dining, events, and attractions.", sites.local, "sun"]
    ]
  },
  {
    slug: "jacksonville-deals",
    title: "Jacksonville Deals | Flights, Hotels, Local Events & Weekend Savings",
    metaDescription:
      "Find Jacksonville deals including flight deal sources, hotel stays, restaurants, attractions, events, and weekend savings.",
    h1: "Jacksonville Deals",
    eyebrow: "Northeast Florida",
    intro:
      "Jacksonville visitors and locals can use Florida Deals Hub to find the right deal source for flights, hotel stays, restaurants, events, attractions, and nearby getaway ideas.",
    alt: "Jacksonville riverfront skyline for Jacksonville deals",
    related: ["florida-deals-for-locals", "florida-weekend-deals", "florida-family-deals", "florida-travel-deals"],
    previews: [
      ["Jacksonville flight deals", "Check Florida flight deals for Jacksonville airport routes.", sites.flights, "sky"],
      ["Jacksonville hotel deals", "Browse Florida hotel deals for city stays and beach weekends.", sites.hotels, "sand"],
      ["Jacksonville local deals", "Explore local Florida deals for events, dining, and attractions.", sites.local, "sun"],
      ["Florida cruise ideas", "Find cruise deal pages for Florida departure ports.", sites.cruises, "sea"]
    ]
  },
  {
    slug: "florida-deals-for-locals",
    title: "Florida Deals for Locals | Restaurants, Events, Hotels & Getaways",
    metaDescription:
      "Find Florida deals for locals including restaurants, events, attractions, hotel staycations, weekend trips, flights, and cruises.",
    h1: "Florida Deals for Locals",
    eyebrow: "Local savings",
    intro:
      "Florida Deals Hub is also built for people who live here. Route your search to local restaurants, attractions, events, hotel staycations, quick flights, and cruise deal pages.",
    alt: "Florida locals enjoying restaurants and weekend activities",
    related: ["florida-weekend-deals", "tampa-deals", "jacksonville-deals", "florida-deal-alerts"],
    previews: [
      ["Local Florida deals", "Browse restaurants, events, attractions, and things to do.", sites.local, "sun"],
      ["Florida hotel staycations", "Check Florida hotel deals for local weekend stays.", sites.hotels, "sand"],
      ["Quick flight ideas", "Find Florida flight deal sources for short trips.", sites.flights, "sky"],
      ["Cruises from Florida", "Browse cruise deal pages for departures close to home.", sites.cruises, "sea"]
    ]
  },
  {
    slug: "florida-deal-alerts",
    title: "Florida Deal Alerts | Free Flight, Hotel, Cruise & Local Deal Emails",
    metaDescription:
      "Sign up for free Florida deal alerts covering flights, hotels, cruises, restaurants, events, attractions, and weekend getaway deals.",
    h1: "Florida Deal Alerts",
    eyebrow: "Free email alerts",
    intro:
      "Join Florida Deals Hub alerts to hear about curated Florida deal pages across flights, hotels, cruises, local experiences, restaurants, events, attractions, and weekend getaway ideas.",
    alt: "Email alert card with Florida travel deal categories",
    related: ["florida-travel-deals", "florida-weekend-deals", "florida-family-deals", "florida-deals-for-locals"],
    previews: [
      ["Flight deal alerts", "Watch Florida flight deal sources for major airports.", sites.flights, "sky"],
      ["Hotel deal alerts", "Find Florida hotel deal pages for resorts and staycations.", sites.hotels, "sand"],
      ["Cruise deal alerts", "Check Florida cruise deal pages for current sailing offers.", sites.cruises, "sea"],
      ["Local deal alerts", "Browse local Florida deals for dining, events, and attractions.", sites.local, "sun"]
    ]
  }
];

export const landingPageMap = Object.fromEntries(landingPages.map((page) => [page.slug, page]));

export function getIntroParagraphs(page) {
  const pageDetails = page.details || [
    `${page.h1} are easier to research when flights, hotels, cruises, and local experiences are separated into focused sources. Florida Deals Hub keeps those paths connected so visitors can compare the right category without sorting through an unrelated feed.`,
    "Use the cards below to move into the best niche site for your trip, weekend, staycation, or local plan. Start with airfare if your dates are flexible, move into hotels when you know the city or beach area, and check cruise or local deal pages when the trip depends on ports, attractions, restaurants, events, or family activities."
  ];

  return [
    page.intro,
    ...pageDetails,
    "After you choose a direction, use the related searches and network cards to move deeper into the part of the Florida Deals network that matches your intent. The Hub is strongest when it acts like a map: broad enough to help with Florida travel planning, but focused enough to send flights, hotels, cruises, and local activities to the right destination.",
    "Deals, hotel prices, flight fares, cruise offers, dates, restrictions, and availability may change. Florida Deals Hub helps users discover deal sources and planning paths, but visitors should confirm current details with the booking provider, airline, hotel, cruise line, event organizer, restaurant, attraction, or official source before booking or buying."
  ];
}

export function getFaqs(page) {
  return [
    {
      question: `What is the best way to find ${page.h1.toLowerCase()}?`,
      answer:
        "Start by choosing the category that matches your plan: flights, hotels, cruises, or local experiences. Florida Deals Hub points you to focused pages where current deal sources are easier to review."
    },
    {
      question: "Are Florida deals updated regularly?",
      answer:
        "The network is built to route visitors toward current deal sources and featured Florida savings. Offers can change quickly, so it is best to check the linked niche site before making plans."
    },
    {
      question: "Do Florida deal prices and availability change?",
      answer:
        "Yes. Flight fares, hotel rates, cruise offers, event prices, restaurant specials, and attraction deals may change based on dates, demand, restrictions, and provider availability."
    },
    {
      question: "Are Florida hotel prices seasonal?",
      answer:
        "Yes. Hotel rates can shift around holidays, spring break, cruise departures, major events, beach weekends, and family travel seasons. Checking current availability helps you compare real options before booking."
    },
    {
      question: "How far in advance should I book hotels?",
      answer:
        "It depends on the destination and dates. For busy Florida beach, theme park, cruise, and holiday periods, it is usually helpful to compare hotels earlier and recheck rates as your trip gets closer."
    },
    {
      question: "Which Florida Deals site should I use first?",
      answer:
        "Use Florida Flight Deals for airfare, Florida Hotel Deals for stays, Florida Cruise Deals for sailings from Florida ports, and Local Deals Florida for restaurants, events, attractions, and things to do."
    }
  ];
}

export function getRelatedSearchLinks(page) {
  const hubLinks = page.related
    .map((slug) => landingPageMap[slug])
    .filter(Boolean)
    .slice(0, 4)
    .map((related) => ({
      label: related.h1,
      href: `/${related.slug}`
    }));

  return [
    ...hubLinks,
    { label: "cheap flights from Florida", href: sites.flights },
    { label: "Florida hotel deals", href: sites.hotels },
    { label: "cruise deals from Florida", href: sites.cruises },
    { label: "things to do in Florida", href: sites.local }
  ];
}

export function getBreadcrumbs(page) {
  if (page.slug === "florida-travel-deals") {
    return [
      { label: "Home", href: "/" },
      { label: page.h1, href: `/${page.slug}` }
    ];
  }

  return [
    { label: "Home", href: "/" },
    { label: "Florida Travel Deals", href: "/florida-travel-deals" },
    { label: page.h1, href: `/${page.slug}` }
  ];
}
