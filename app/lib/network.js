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
  ["Florida Weekend Deals", "/florida-weekend-deals"],
  ["Orlando Deals", "/orlando-deals"],
  ["Miami Deals", "/miami-deals"],
  ["Florida Family Deals", "/florida-family-deals"],
  ["Florida Deal Alerts", "/florida-deal-alerts"]
];

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
    alt: "Florida shoreline and travel planning cards for Florida travel deals",
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
    alt: "Weekend bag near a Florida beach for Florida weekend deals",
    related: ["florida-travel-deals", "florida-vacation-deals", "florida-beach-deals", "florida-deals-for-locals"],
    previews: [
      ["Weekend hotel getaways", "Browse Florida hotel deals for beach stays and city breaks.", sites.hotels, "sand"],
      ["Short Florida cruises", "Check current cruise offer pages from Florida ports.", sites.cruises, "sea"],
      ["Weekend flight ideas", "Find flight deal sources for quick trips in and out of Florida.", sites.flights, "sky"],
      ["Local events and dining", "Browse local Florida deals for restaurants, events, and attractions.", sites.local, "sun"]
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
    slug: "florida-family-deals",
    title: "Florida Family Deals | Hotels, Attractions, Flights & Cruises",
    metaDescription:
      "Find Florida family deals across hotel stays, attractions, restaurants, flights, cruises, events, and weekend activities.",
    h1: "Florida Family Deals",
    eyebrow: "Family savings",
    intro:
      "Families can use Florida Deals Hub as a starting point for hotel stays, attraction ideas, local events, flight deal sources, and cruise pages. Deals may change, so check current offers on the niche sites.",
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
    alt: "Orlando travel planning scene for flights hotels and attraction deals",
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
    alt: "Miami beach and skyline for Miami travel deals",
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
    alt: "Tampa waterfront at sunset for Tampa deals",
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

