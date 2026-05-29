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
    copy: "Cheap route ideas, weekend escapes, and airfare finds from major Florida airports.",
    bestFor: "Weekend Trips, Flexible Dates",
    why:
      "Useful when airfare or airport choice controls the rest of the Florida trip.",
    button: "Explore Florida Flights",
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
    copy: "Beach resorts, city hotels, family stays, weekend getaways, and staycation searches.",
    bestFor: "Beach Stays, Family Hotels",
    why:
      "Hotel location often decides how easy a Florida trip feels once you arrive.",
    button: "Compare Florida Hotels",
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
    copy: "Bahamas, Caribbean, weekend, and family cruise planning from Florida ports.",
    bestFor: "Cruise Travelers, Port Nights",
    why:
      "Florida cruise ports can anchor a full getaway with flights, hotels, and local plans.",
    button: "Browse Florida Cruises",
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
    copy: "Restaurants, events, attractions, family fun, local guides, and things to do.",
    bestFor: "Local Activities, Families",
    why:
      "Local deals help turn a flight, hotel, or cruise trip into a complete Florida plan.",
    button: "Explore Local Florida Deals",
    href: sites.local,
    badge: "LOCAL",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Sunny Florida beach for local deals and weekend getaways"
  }
];

export const popularPages = [
  ["Florida Travel Guide", "/florida-travel-guide"],
  ["Best Places To Visit In Florida", "/best-places-to-visit-in-florida"],
  ["Florida Travel Deals", "/florida-travel-deals"],
  ["Florida Weekend Getaways", "/florida-weekend-getaways"],
  ["Best Florida Beaches", "/best-florida-beaches"],
  ["Florida Vacation Planning", "/florida-vacation-planning"],
  ["Best Time To Visit Florida", "/best-time-to-visit-florida"],
  ["Orlando Travel Guide", "/orlando-travel-guide"]
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
    bestFor: "Theme Park Trips",
    copy: "Useful for watching flexible trips in and out of Central Florida airports.",
    cta: "Find Flight Deals",
    href: sites.flights,
    tone: "sky"
  },
  {
    label: "Popular",
    title: "Miami Beach stays",
    value: "Hotel pick",
    bestFor: "Beach Escape",
    copy: "Helpful for comparing beach stays, weekend hotel ideas, and South Florida getaways.",
    cta: "Compare Hotel Deals",
    href: sites.hotels,
    tone: "sand"
  },
  {
    label: "Weekend Idea",
    title: "Bahamas sailings from Florida",
    value: "Cruise pick",
    bestFor: "Cruise Travelers",
    copy: "A practical starting point for weekend cruises and port-based trip planning.",
    cta: "Browse Cruise Deals",
    href: sites.cruises,
    tone: "sea"
  },
  {
    label: "Family Pick",
    title: "Orlando attraction deals",
    value: "Local pick",
    bestFor: "Family Activities",
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
  ["Florida Travel Guide", "/florida-travel-guide"],
  ["Florida Weekend Getaways", "/florida-weekend-getaways"],
  ["Cheap Florida Vacations", "/cheap-florida-vacations"],
  ["Orlando Travel Guide", "/orlando-travel-guide"],
  ["Miami Travel Guide", "/miami-travel-guide"],
  ["Tampa Travel Guide", "/tampa-travel-guide"],
  ["Best Florida Beaches", "/best-florida-beaches"],
  ["Best Places To Visit In Florida", "/best-places-to-visit-in-florida"],
  ["Best Time To Visit Florida", "/best-time-to-visit-florida"],
  ["Orlando Flight Deals", sites.flights],
  ["Miami Beach Hotel Deals", sites.hotels],
  ["Cruises From Miami", sites.cruises],
  ["Orlando Local Deals", sites.local]
];

export const popularDestinationLinks = [
  ["Orlando", "/orlando-travel-guide", "Theme parks, family hotels, attraction planning, and Central Florida flights."],
  ["Miami", "/miami-travel-guide", "Beaches, cruise departures, restaurants, nightlife, and South Florida hotels."],
  ["Tampa", "/tampa-travel-guide", "Gulf Coast hotels, cruise departures, local dining, and nearby beaches."],
  ["Fort Lauderdale", "/fort-lauderdale-travel-guide", "Beach stays, cruise-night hotels, airport access, and South Florida trips."],
  ["Key West", "/key-west-travel-guide", "Island hotels, road trips, romantic getaways, restaurants, and water activities."]
];

export const travelGuideLinks = [
  ["Florida Travel Guide", "/florida-travel-guide", "Start with the statewide guide for destinations, timing, categories, and trip planning."],
  ["Best Places To Visit In Florida", "/best-places-to-visit-in-florida", "Compare cities, beaches, family areas, cruise ports, and weekend destinations."],
  ["Florida Vacation Planning Guide", "/florida-vacation-planning-guide", "Build a practical plan across flights, hotels, cruises, attractions, and local deals."],
  ["How To Plan A Florida Trip", "/how-to-plan-a-florida-trip", "Walk through the planning steps before choosing the right network site."]
];

export const seasonalTravelLinks = [
  ["Summer Florida Vacations", "/summer-florida-vacations", "Plan beaches, family trips, hotels, attractions, and heat-friendly schedules."],
  ["Winter Florida Getaways", "/winter-florida-getaways", "Compare warmer-weather escapes, cruise ideas, hotels, and local winter events."],
  ["Spring Break Florida", "/spring-break-florida", "Compare beaches, Orlando hotels, flights, cruises, and family spring travel."],
  ["Florida Holiday Travel", "/florida-holiday-travel", "Plan flights, hotels, cruises, family activities, and local events around busy dates."],
  ["Hurricane Season Tips", "/florida-hurricane-season-travel-tips", "Plan flexible Florida trips around weather, policies, and backup activities."],
  ["Memorial Day Weekend", "/memorial-day-florida-weekend", "Explore beach weekends, hotel areas, local events, and short-trip planning."],
  ["Labor Day Weekend", "/labor-day-florida-weekend", "Plan late-summer Florida weekends with hotels, beaches, flights, and activities."]
];

export const popularThisWeekLinks = [
  ["Florida Travel Deals", "/florida-travel-deals", "Best for first-time Florida deal searches"],
  ["Florida Weekend Getaways", "/florida-weekend-getaways", "Best for short trips"],
  ["Orlando Deals", "/orlando-deals", "Best for families and theme parks"],
  ["Miami Deals", "/miami-deals", "Best for beach and cruise trips"],
  ["Florida Hotel Deals", sites.hotels, "Best for comparing stays"],
  ["Florida Cruise Deals", sites.cruises, "Best for Florida port departures"],
  ["Florida Flight Deals", sites.flights, "Best for flexible routes"],
  ["Florida Local Deals", sites.local, "Best for attractions and events"]
];

export const editorPicks = [
  ["Best for families", "Orlando vacation planning", "/orlando-travel-guide", "Theme park trips, family hotels, local attractions, and flexible flight options."],
  ["Best beach escape", "Miami and Florida Keys trips", "/miami-travel-guide", "Beach hotels, restaurants, nightlife, cruises, and tropical road-trip add-ons."],
  ["Best cruise starter", "Miami cruise departures", sites.cruises, "A practical route for travelers planning flights, hotels, and port nights around a sailing."],
  ["Best budget idea", "Florida weekend getaways", "/florida-weekend-getaways", "Shorter stays can keep hotel nights, drive time, and daily spending easier to manage."],
  ["Best local discovery", "Orlando local deals", sites.local, "Useful for attractions, restaurants, events, and things to do after travel is booked."]
];

export const destinationClusters = [
  {
    title: "Orlando Cluster",
    bestFor: "Families, Theme Park Trips",
    links: [
      ["Orlando Deals", "/orlando-deals"],
      ["Orlando Travel Guide", "/orlando-travel-guide"],
      ["Orlando Flight Deals", sites.flights],
      ["Orlando Hotel Deals", sites.hotels],
      ["Orlando Local Deals", sites.local],
      ["Florida Family Vacations", "/florida-family-vacations"]
    ]
  },
  {
    title: "Miami Cluster",
    bestFor: "Beach Escapes, Cruise Travelers",
    links: [
      ["Miami Deals", "/miami-deals"],
      ["Miami Travel Guide", "/miami-travel-guide"],
      ["Miami Flight Deals", sites.flights],
      ["Miami Beach Hotel Deals", sites.hotels],
      ["Cruises From Miami", sites.cruises],
      ["Miami Local Deals", sites.local]
    ]
  },
  {
    title: "Tampa Cluster",
    bestFor: "Gulf Coast, Cruise Departures",
    links: [
      ["Tampa Deals", "/tampa-deals"],
      ["Tampa Travel Guide", "/tampa-travel-guide"],
      ["Tampa Flight Deals", sites.flights],
      ["Tampa Hotel Deals", sites.hotels],
      ["Cruises From Tampa", sites.cruises],
      ["Tampa Local Deals", sites.local]
    ]
  },
  {
    title: "Fort Lauderdale Cluster",
    bestFor: "Beach Stays, Cruise Nights",
    links: [
      ["Fort Lauderdale Deals", "/fort-lauderdale-deals"],
      ["Fort Lauderdale Travel Guide", "/fort-lauderdale-travel-guide"],
      ["Fort Lauderdale Flight Deals", sites.flights],
      ["Fort Lauderdale Hotel Deals", sites.hotels],
      ["Fort Lauderdale Cruise Ideas", sites.cruises],
      ["Fort Lauderdale Local Deals", sites.local]
    ]
  },
  {
    title: "Jacksonville Cluster",
    bestFor: "Northeast Florida, Road Trips",
    links: [
      ["Jacksonville Deals", "/jacksonville-deals"],
      ["Jacksonville Travel Guide", "/jacksonville-travel-guide"],
      ["Jacksonville Flight Deals", sites.flights],
      ["Jacksonville Hotel Deals", sites.hotels],
      ["Jacksonville Local Deals", sites.local],
      ["Florida Road Trips", "/best-florida-road-trips"]
    ]
  },
  {
    title: "Key West Cluster",
    bestFor: "Romantic Getaways, Road Trips",
    links: [
      ["Key West Travel Guide", "/key-west-travel-guide"],
      ["Key West Hotel Deals", sites.hotels],
      ["Key West Flight Deals", sites.flights],
      ["Key West Local Deals", sites.local],
      ["Romantic Florida Getaways", "/romantic-florida-getaways"],
      ["Florida Road Trips", "/best-florida-road-trips"]
    ]
  },
  {
    title: "Clearwater Cluster",
    bestFor: "Beach Trips, Family Weekends",
    links: [
      ["Clearwater Travel Guide", "/clearwater-travel-guide"],
      ["Clearwater Hotel Deals", sites.hotels],
      ["Tampa Flight Deals", sites.flights],
      ["Clearwater Local Deals", sites.local],
      ["Best Florida Beaches", "/best-florida-beaches"],
      ["Florida Weekend Getaways", "/florida-weekend-getaways"]
    ]
  },
  {
    title: "St. Augustine Cluster",
    bestFor: "History, Weekend Trips",
    links: [
      ["St. Augustine Travel Guide", "/st-augustine-travel-guide"],
      ["Jacksonville Flight Deals", sites.flights],
      ["St. Augustine Hotel Deals", sites.hotels],
      ["St. Augustine Local Deals", sites.local],
      ["Florida Weekend Getaways", "/florida-weekend-getaways"],
      ["Florida Road Trips", "/best-florida-road-trips"]
    ]
  },
  {
    title: "Daytona Beach Cluster",
    bestFor: "Beach Weekends, Events",
    links: [
      ["Daytona Beach Travel Guide", "/daytona-beach-travel-guide"],
      ["Daytona Beach Flight Deals", sites.flights],
      ["Daytona Beach Hotel Deals", sites.hotels],
      ["Daytona Beach Local Deals", sites.local],
      ["Best Florida Beaches", "/best-florida-beaches"],
      ["Florida Weekend Getaways", "/florida-weekend-getaways"]
    ]
  },
  {
    title: "Naples Cluster",
    bestFor: "Couples, Gulf Coast Stays",
    links: [
      ["Naples Florida Guide", "/naples-florida-guide"],
      ["Naples Flight Deals", sites.flights],
      ["Naples Hotel Deals", sites.hotels],
      ["Naples Local Deals", sites.local],
      ["Romantic Florida Getaways", "/romantic-florida-getaways"],
      ["Best Florida Beaches", "/best-florida-beaches"]
    ]
  },
  {
    title: "Destin Cluster",
    bestFor: "Family Beach Vacations",
    links: [
      ["Destin Florida Guide", "/destin-florida-guide"],
      ["Destin Flight Deals", sites.flights],
      ["Destin Hotel Deals", sites.hotels],
      ["Destin Local Deals", sites.local],
      ["Cheap Florida Vacation Ideas", "/cheap-florida-vacation-ideas"],
      ["Best Florida Family Vacations", "/best-florida-family-vacations"]
    ]
  },
  {
    title: "Port Canaveral Cluster",
    bestFor: "Cruises, Orlando Add-Ons",
    links: [
      ["Port Canaveral Travel Guide", "/port-canaveral-travel-guide"],
      ["Cruises From Port Canaveral", sites.cruises],
      ["Bahamas Cruises From Port Canaveral", sites.cruises],
      ["Orlando Flight Deals", sites.flights],
      ["Hotels Near Florida Cruise Ports", sites.hotels],
      ["Orlando Things To Do", sites.local]
    ]
  }
];

export const comparisonGuideLinks = [
  ["Orlando vs Miami Vacation", "/orlando-vs-miami-vacation", "Compare theme parks, beaches, hotels, flights, nightlife, cruises, and family travel."],
  ["Miami vs Tampa Travel", "/miami-vs-tampa-travel", "Compare South Florida energy with Gulf Coast hotels, beaches, cruises, and local plans."],
  ["Beach Vacation vs Theme Park Trip", "/florida-beach-vacation-vs-theme-park-trip", "Choose between coastal downtime and attraction-heavy family travel."],
  ["Weekend Trip vs Weeklong Vacation", "/florida-weekend-trip-vs-weeklong-vacation", "Decide whether a short escape or longer itinerary fits your budget and schedule."]
];

export const bestForLinks = [
  ["Best for Families", "/best-florida-family-vacations", "Family vacation ideas, Orlando planning, beach trips, attractions, and flexible hotels."],
  ["Best for Couples", "/best-couples-getaways-florida", "Romantic Florida getaways, Key West ideas, Naples weekends, and beach hotels."],
  ["Best for Budget Travelers", "/florida-budget-travel-guide", "Budget travel tips, cheap vacation ideas, weekend trips, and flexible planning."],
  ["Best for Beach Trips", "/florida-beach-vacation-guide", "Coastal guides, beach hotels, local activities, and Florida beach comparisons."],
  ["Best for Theme Park Trips", "/florida-theme-park-guide", "Orlando attraction planning, family hotels, flights, and local deals."],
  ["Best for Cruise Travelers", "/best-florida-cruise-ports", "Florida port comparisons, cruise hotels, flights, and pre-cruise activities."],
  ["Best for Weekend Getaways", "/florida-weekend-getaways", "Short Florida trips, beach weekends, hotel ideas, and local events."]
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
    "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
  calendar:
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
  keyWest:
    "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=1200&q=80",
  clearwater:
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
  roadTrip:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  cruisePort:
    "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
  summer:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  romance:
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  themePark:
    "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
};

const networkPreviewCards = [
  ["Florida flight deals", "Compare airfare sources for Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, and more.", sites.flights, "sky"],
  ["Florida hotel deals", "Review hotel deal pages for beach stays, family resorts, city weekends, and staycations.", sites.hotels, "sand"],
  ["Florida cruise deals", "Browse cruise planning pages for sailings from Miami, Tampa, Port Canaveral, and other Florida ports.", sites.cruises, "sea"],
  ["Local Florida deals", "Find attractions, restaurants, events, museums, family activities, and things to do around Florida.", sites.local, "sun"]
];

const authorityPageConfigs = [
  {
    slug: "florida-travel-guide",
    title: "Florida Travel Guide | Beaches, Cities, Flights, Hotels & Things To Do",
    metaDescription:
      "Plan a Florida trip with travel tips for beaches, cities, flights, hotels, cruises, family vacations, local attractions, and seasonal travel ideas.",
    h1: "Florida Travel Guide",
    eyebrow: "Florida travel authority",
    intro:
      "The Florida Travel Guide is the central planning resource inside Florida Deals Hub, built to help travelers choose destinations, compare trip categories, and move into the right deal source.",
    image: pageImages.floridaCoast,
    alt: "Florida coastline travel guide with beaches hotels flights and local attractions",
    related: ["best-places-to-visit-in-florida", "best-time-to-visit-florida", "florida-vacation-planning-guide", "florida-budget-travel-guide"],
    destinations: "Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, Key West, Naples, Destin, and Clearwater",
    advice:
      "Start by deciding whether your trip is driven by a destination, a season, a budget, or a specific experience. Theme park trips, beach vacations, cruise departures, family travel, road trips, and local weekend plans all need different first steps.",
    recommendations: [
      ["Best places to visit", "/best-places-to-visit-in-florida", "Compare Florida cities, beach towns, family areas, and local trip ideas."],
      ["When to go", "/best-time-to-visit-florida", "Use seasonal timing to compare weather, crowds, hotel demand, and event calendars."],
      ["Vacation planning", "/florida-vacation-planning-guide", "Build a practical plan across flights, hotels, cruises, activities, and local travel."],
      ["Florida travel gear", "/florida-travel-gear-guide", "Pack for beaches, fishing days, parks, springs, and weekend outdoor trips."]
    ]
  },
  {
    slug: "best-florida-beaches",
    title: "Best Florida Beaches | Coastal Vacation Ideas, Hotels & Things To Do",
    metaDescription:
      "Explore the best Florida beaches for family trips, romantic getaways, weekend escapes, hotels, local attractions, and coastal vacation planning.",
    h1: "Best Florida Beaches",
    eyebrow: "Beach travel",
    intro:
      "Florida beach trips work best when you match the coast to the kind of vacation you want: quiet sand, family activities, resort areas, nightlife, shelling, fishing, or a quick weekend escape.",
    image: pageImages.clearwater,
    alt: "Clear Florida beach water and coastal hotels for beach vacation planning",
    related: ["florida-beach-deals", "romantic-florida-getaways", "florida-summer-travel-guide", "best-places-to-visit-in-florida"],
    destinations: "Clearwater Beach, Miami Beach, Destin, Naples, Fort Lauderdale, Key West, Sarasota, St. Augustine, and the Panhandle",
    advice:
      "For hotel-heavy beach trips, compare location carefully. A cheaper room far from the beach may add parking, transportation, or time costs. For family beach trips, look for calmer water, walkable food options, and backup activities for rainy afternoons.",
    recommendations: [
      ["Miami Beach", "/miami-travel-guide", "Best for nightlife, dining, art, beach hotels, and cruises from Miami."],
      ["Clearwater", "/clearwater-travel-guide", "Best for Gulf Coast beaches, family-friendly hotels, and sunset weekends."],
      ["Destin", "/destin-florida-guide", "Best for Panhandle beaches, family trips, boating, and longer stays."]
    ]
  },
  {
    slug: "best-florida-family-vacations",
    title: "Best Florida Family Vacations | Beaches, Theme Parks & Trip Ideas",
    metaDescription:
      "Find Florida family vacation ideas with theme parks, beaches, hotels, attractions, cruises, road trips, and budget-friendly planning tips.",
    h1: "Best Florida Family Vacations",
    eyebrow: "Family travel",
    intro:
      "The best Florida family vacations balance easy logistics, flexible hotels, weather backup plans, kid-friendly attractions, and realistic daily schedules.",
    image: pageImages.familyTrip,
    alt: "Florida family vacation planning with beaches attractions hotels and flights",
    related: ["florida-family-vacations", "orlando-travel-guide", "cheap-florida-family-vacations", "florida-theme-park-guide"],
    destinations: "Orlando, Tampa Bay, Clearwater, Miami, Jacksonville, Destin, Naples, and cruise ports near family-friendly sailings",
    advice:
      "Families should plan around travel time as much as price. A hotel close to attractions can save energy, while a beach rental or resort-style hotel may work better when the goal is a slower trip with fewer daily moves.",
    recommendations: [
      ["Orlando family trips", "/orlando-travel-guide", "Use Orlando as the anchor for theme parks, hotels, attractions, and flexible flights."],
      ["Cheap family vacations", "/cheap-florida-family-vacations", "Compare lower-cost Florida family trip ideas across beaches, hotels, and local activities."],
      ["Theme park planning", "/florida-theme-park-guide", "Plan park days, hotel areas, attraction timing, and local restaurant options."]
    ]
  },
  {
    slug: "cheap-florida-vacation-ideas",
    title: "Cheap Florida Vacation Ideas | Affordable Beaches, Hotels & Trips",
    metaDescription:
      "Explore cheap Florida vacation ideas including affordable beach towns, flexible flights, hotel areas, road trips, cruises, and local things to do.",
    h1: "Cheap Florida Vacation Ideas",
    eyebrow: "Budget ideas",
    intro:
      "Cheap Florida vacation ideas usually come from flexible timing, realistic destinations, smart hotel areas, and local activities that do not require every day to be expensive.",
    image: pageImages.planning,
    alt: "Florida budget vacation planning with beaches hotels routes and activities",
    related: ["cheap-florida-vacations", "florida-budget-travel-guide", "best-florida-weekend-trips", "florida-fall-travel-guide"],
    destinations: "Tampa Bay, Jacksonville, Daytona Beach, St. Augustine, the Space Coast, inland Central Florida, and shoulder-season beach towns",
    advice:
      "Look for value by comparing nearby airports, avoiding peak holiday dates, choosing hotel areas with easy parking or walkability, and mixing paid attractions with beaches, parks, free events, and local dining.",
    recommendations: [
      ["Budget travel guide", "/florida-budget-travel-guide", "Learn how to compare Florida costs across flights, hotels, cruises, and activities."],
      ["Weekend trips", "/best-florida-weekend-trips", "Find shorter Florida trips that are easier to fit around work and school schedules."],
      ["Fall travel", "/florida-fall-travel-guide", "Use shoulder-season timing for beach towns, city stays, and local events."]
    ]
  },
  {
    slug: "best-places-to-visit-in-florida",
    title: "Best Places To Visit In Florida | Cities, Beaches & Vacation Ideas",
    metaDescription:
      "Discover the best places to visit in Florida including Orlando, Miami, Tampa, Key West, Clearwater, Destin, Naples, Jacksonville, and coastal getaways.",
    h1: "Best Places To Visit In Florida",
    eyebrow: "Destination guide",
    intro:
      "The best places to visit in Florida depend on whether you want beaches, theme parks, cruises, food, nightlife, family activities, road trips, or quiet coastal time.",
    image: pageImages.miami,
    alt: "Florida destinations with city skyline beaches hotels and travel ideas",
    related: ["florida-travel-guide", "orlando-travel-guide", "miami-travel-guide", "key-west-travel-guide"],
    destinations: "Orlando for theme parks, Miami for beaches and culture, Tampa for Gulf Coast access, Key West for island trips, Destin for Panhandle beaches, and Jacksonville for Northeast Florida",
    advice:
      "Choose a destination by matching the trip style first. A family vacation may point toward Orlando or Clearwater, while a couples trip may fit Key West, Naples, or Miami. Cruise travelers should plan around departure ports before picking hotels.",
    recommendations: [
      ["Orlando", "/orlando-travel-guide", "Theme parks, family hotels, attractions, restaurants, and Central Florida flights."],
      ["Miami", "/miami-travel-guide", "Beaches, nightlife, cruises, hotels, restaurants, and South Florida travel."],
      ["Key West", "/key-west-travel-guide", "Island stays, romantic getaways, road trips, local dining, and tropical activities."]
    ]
  },
  {
    slug: "romantic-florida-getaways",
    title: "Romantic Florida Getaways | Beaches, Hotels & Couples Trip Ideas",
    metaDescription:
      "Plan romantic Florida getaways with beach towns, hotels, Key West trips, Naples weekends, Miami escapes, cruises, restaurants, and couples activities.",
    h1: "Romantic Florida Getaways",
    eyebrow: "Couples travel",
    intro:
      "Romantic Florida getaways can be coastal, city-focused, cruise-based, quiet, or food-driven depending on the pace you want for the trip.",
    image: pageImages.romance,
    alt: "Romantic Florida beach getaway with sunset coast and travel planning",
    related: ["best-couples-getaways-florida", "key-west-travel-guide", "naples-florida-guide", "best-florida-beaches"],
    destinations: "Key West, Naples, Miami Beach, Fort Lauderdale, St. Augustine, Amelia Island, Sarasota, and Gulf Coast beach towns",
    advice:
      "For couples trips, hotel location can matter more than filling the schedule. Walkable dining, beach access, sunset spots, spa options, and a manageable flight or drive can make the trip feel smoother.",
    recommendations: [
      ["Key West", "/key-west-travel-guide", "Island hotels, sunsets, restaurants, water activities, and road-trip planning."],
      ["Naples", "/naples-florida-guide", "Quiet beaches, polished hotels, dining, shopping, and Gulf Coast weekends."],
      ["Couples getaways", "/best-couples-getaways-florida", "Compare romantic Florida trip ideas by pace, budget, and season."]
    ]
  },
  {
    slug: "best-florida-road-trips",
    title: "Best Florida Road Trips | Scenic Drives, Beaches & Weekend Routes",
    metaDescription:
      "Explore the best Florida road trips including beach routes, Key West drives, Gulf Coast weekends, family stops, hotels, attractions, and local deals.",
    h1: "Best Florida Road Trips",
    eyebrow: "Road trips",
    intro:
      "Florida road trips are useful when you want beaches, small towns, attractions, food stops, and flexible hotel nights without building the whole trip around one airport.",
    image: pageImages.roadTrip,
    alt: "Florida road trip route with coastal drive beaches hotels and attractions",
    related: ["how-to-plan-a-florida-trip", "7-day-florida-itinerary", "key-west-travel-guide", "florida-beach-vacation-guide"],
    destinations: "Miami to Key West, Tampa to Clearwater and St. Pete, Jacksonville to St. Augustine, Orlando to the Space Coast, and Gulf Coast beach routes",
    advice:
      "Keep drive days realistic. A strong Florida road trip leaves time for beach stops, local restaurants, attractions, and hotel check-ins instead of turning every day into a long highway push.",
    recommendations: [
      ["7-day itinerary", "/7-day-florida-itinerary", "Use a weeklong structure to connect cities, beaches, and local activities."],
      ["Key West drive", "/key-west-travel-guide", "Plan the Overseas Highway, hotel areas, restaurants, and island activities."],
      ["Beach vacation guide", "/florida-beach-vacation-guide", "Compare coastal areas before choosing hotels and local stops."]
    ]
  },
  {
    slug: "florida-vacation-planning-guide",
    title: "Florida Vacation Planning Guide | Flights, Hotels, Cruises & Activities",
    metaDescription:
      "Use this Florida vacation planning guide to compare flights, hotels, cruises, attractions, family activities, beaches, and seasonal trip ideas.",
    h1: "Florida Vacation Planning Guide",
    eyebrow: "Planning guide",
    intro:
      "The Florida Vacation Planning Guide helps travelers turn a broad idea into a practical plan across destinations, dates, flights, hotels, cruises, and local activities.",
    image: pageImages.planning,
    alt: "Florida vacation planning guide with itinerary flights hotels cruises and attractions",
    related: ["how-to-plan-a-florida-trip", "florida-travel-guide", "best-time-to-visit-florida", "florida-budget-travel-guide"],
    destinations: "Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, Key West, Clearwater, Destin, Naples, and cruise ports around Florida",
    advice:
      "A useful Florida plan starts with one anchor: dates, destination, budget, cruise departure, family event, or beach preference. Once the anchor is clear, use the network to compare airfare, hotels, cruise options, and local activities.",
    recommendations: [
      ["How to plan", "/how-to-plan-a-florida-trip", "Walk through dates, destinations, flights, hotels, cruises, and daily activities."],
      ["Best time to visit", "/best-time-to-visit-florida", "Compare seasons, weather, event demand, beach timing, and hotel patterns."],
      ["Budget planning", "/florida-budget-travel-guide", "Keep costs realistic across transportation, stays, food, attractions, and local plans."]
    ]
  },
  {
    slug: "florida-budget-travel-guide",
    title: "Florida Budget Travel Guide | Cheap Trips, Hotels & Local Ideas",
    metaDescription:
      "Plan Florida budget travel with affordable trip ideas, flexible flights, hotel tips, cruises, beaches, local attractions, and seasonal savings strategies.",
    h1: "Florida Budget Travel Guide",
    eyebrow: "Budget travel",
    intro:
      "Florida budget travel is less about one magic discount and more about choosing the right season, destination, airport, hotel area, and activity mix.",
    image: pageImages.planning,
    alt: "Florida budget travel guide with affordable hotels flights beaches and local activities",
    related: ["cheap-florida-vacation-ideas", "cheap-florida-vacations", "cheap-florida-family-vacations", "florida-fall-travel-guide"],
    destinations: "Jacksonville, Tampa Bay, the Space Coast, Daytona Beach, St. Augustine, Fort Myers, and shoulder-season Gulf Coast towns",
    advice:
      "Budget travelers should compare nearby airports, avoid the most compressed peak dates, and plan local activities before booking. Restaurants, parking, attraction tickets, resort fees, and transportation can change the real cost of a trip.",
    recommendations: [
      ["Cheap vacation ideas", "/cheap-florida-vacation-ideas", "Compare lower-cost Florida trip styles and destination types."],
      ["Family budget trips", "/cheap-florida-family-vacations", "Plan family-friendly Florida vacations with practical cost tradeoffs."],
      ["Weekend travel", "/best-florida-weekend-trips", "Use short trips to control hotel nights, travel time, and daily spending."]
    ]
  },
  {
    slug: "florida-water-activities-guide",
    title: "Florida Water Activities Guide | Beaches, Fishing, Springs & Outdoor Gear",
    metaDescription:
      "Plan Florida water activities with beach ideas, fishing trips, springs, boating days, family outings, outdoor gear notes, and related travel guides.",
    h1: "Florida Water Activities Guide",
    eyebrow: "Florida outdoor guide",
    intro:
      "Florida water activities can shape an entire trip, from easy beach days and springs to fishing, kayaking, boating, aquariums, and waterfront local plans.",
    image: pageImages.clearwater,
    alt: "Florida water activities guide with beach fishing springs and outdoor trip planning",
    related: ["best-florida-beaches", "florida-travel-gear-guide", "florida-weekend-getaways", "best-florida-family-vacations"],
    destinations: "Clearwater, Key West, Naples, Destin, Miami, Tampa Bay, St. Augustine, springs, beaches, piers, parks, and waterfront districts",
    advice:
      "Choose water activities by comfort level, weather, transportation, and how much gear the day requires. Beach days, fishing piers, springs, kayak routes, boating days, and aquariums all need different timing and backup plans.",
    article: true,
    showPiscifunGear: true,
    recommendations: [
      ["Best Florida beaches", "/best-florida-beaches", "Compare coastal towns and beach trip ideas."],
      ["Florida travel gear guide", "/florida-travel-gear-guide", "Review practical gear sources for beach and outdoor days."],
      ["Florida weekend getaways", "/florida-weekend-getaways", "Build a short water-focused trip with hotels, flights, and local activities."]
    ]
  },
  {
    slug: "florida-travel-gear-guide",
    title: "Florida Travel Gear Guide | Outdoor, Fishing & Beach Trip Essentials",
    metaDescription:
      "Pack smarter for Florida trips with outdoor gear ideas for beach weekends, fishing days, parks, springs, cruise add-ons, and family activities.",
    h1: "Florida Travel Gear Guide",
    eyebrow: "Trip packing guide",
    intro:
      "Florida travel gear should support the trip you are actually taking: beaches, parks, fishing days, springs, cruises, hotel pool time, or weekend road trips.",
    image: pageImages.planning,
    alt: "Florida travel gear guide for beach fishing outdoor and weekend trips",
    related: ["florida-water-activities-guide", "cheap-florida-vacation-ideas", "florida-weekend-getaways", "florida-vacation-planning-guide"],
    destinations: "Beach weekends, fishing piers, local parks, springs, outdoor attractions, cruise packing, hotel pool days, and Florida road trips",
    advice:
      "Avoid overpacking by choosing items that solve real Florida problems: sun, water, storage, weather changes, light carrying, and simple outdoor comfort. Confirm current product details and availability with the merchant before buying.",
    article: true,
    showPiscifunGear: true,
    recommendations: [
      ["Florida water activities", "/florida-water-activities-guide", "Plan beaches, fishing, springs, boating, and waterfront activities."],
      ["Cheap Florida vacation ideas", "/cheap-florida-vacation-ideas", "Keep packing and activity choices aligned with budget trips."],
      ["Florida weekend trips", "/florida-weekend-getaways", "Pack for short trips without overcomplicating the plan."]
    ]
  },
  {
    slug: "florida-summer-travel-guide",
    title: "Florida Summer Travel Guide | Beaches, Hotels & Family Trip Tips",
    metaDescription:
      "Plan Florida summer travel with beach ideas, family vacation tips, hotels, flights, cruises, attractions, weather notes, and local things to do.",
    h1: "Florida Summer Travel Guide",
    eyebrow: "Seasonal travel",
    intro:
      "Florida summer travel can work well for beach trips, family vacations, local events, and longer stays when you plan around heat, storms, crowds, and flexible indoor options.",
    image: pageImages.summer,
    alt: "Florida summer beach travel with blue water hotels and family vacation planning",
    related: ["best-florida-beaches", "best-florida-family-vacations", "florida-theme-park-guide", "best-time-to-visit-florida"],
    destinations: "Clearwater, Destin, Miami Beach, Orlando, Tampa Bay, Jacksonville beaches, Naples, and the Florida Keys",
    advice:
      "Summer plans should include weather flexibility. Morning beach time, afternoon breaks, indoor attractions, flexible dinner reservations, and hotels with strong amenities can make hot or rainy days easier.",
    recommendations: [
      ["Beach guide", "/best-florida-beaches", "Choose coastal areas by water, hotel type, activities, and travel time."],
      ["Family vacations", "/best-florida-family-vacations", "Compare family-friendly destinations, hotels, attractions, and local activities."],
      ["Theme parks", "/florida-theme-park-guide", "Plan park days around heat, crowds, hotels, transportation, and rest time."]
    ]
  },
  {
    slug: "florida-fall-travel-guide",
    title: "Florida Fall Travel Guide | Beaches, Events & Affordable Trip Ideas",
    metaDescription:
      "Plan Florida fall travel with beach weekends, events, hotel ideas, flights, cruises, family trips, and seasonal vacation planning tips.",
    h1: "Florida Fall Travel Guide",
    eyebrow: "Seasonal travel",
    intro:
      "Florida fall travel can be a strong time for flexible travelers who want beach weekends, local events, food festivals, lower-pressure hotel searches, and shorter getaways.",
    image: pageImages.weekendBeach,
    alt: "Florida fall beach weekend with coastal hotels events and travel ideas",
    related: ["florida-weekend-getaways", "cheap-florida-vacation-ideas", "best-florida-road-trips", "best-time-to-visit-florida"],
    destinations: "Tampa Bay, St. Augustine, Orlando, Miami, Fort Lauderdale, Jacksonville, Naples, and Gulf Coast beach towns",
    advice:
      "Fall travelers should watch event calendars and weather patterns while staying flexible on dates. It can be a good season for road trips, quick hotel stays, cruise planning, and local Florida activities.",
    recommendations: [
      ["Weekend getaways", "/florida-weekend-getaways", "Plan short Florida trips around hotels, events, flights, cruises, and local activities."],
      ["Road trips", "/best-florida-road-trips", "Build fall drives around beaches, food stops, historic towns, and hotel nights."],
      ["Budget guide", "/florida-budget-travel-guide", "Compare seasonal value across destinations, hotels, and things to do."]
    ]
  },
  {
    slug: "florida-spring-break-guide",
    title: "Florida Spring Break Guide | Beaches, Hotels & Family Travel Tips",
    metaDescription:
      "Plan Florida spring break travel with beach destinations, family hotels, flights, cruises, local activities, crowd tips, and vacation planning ideas.",
    h1: "Florida Spring Break Guide",
    eyebrow: "Seasonal travel",
    intro:
      "Florida spring break travel needs early planning because beach hotels, flights, attractions, restaurants, and cruise dates can all tighten around school calendars.",
    image: pageImages.clearwater,
    alt: "Florida spring break beach travel with family hotels flights and local activities",
    related: ["best-florida-beaches", "florida-family-vacations", "orlando-travel-guide", "best-time-to-visit-florida"],
    destinations: "Orlando, Clearwater, Miami Beach, Fort Lauderdale, Destin, Daytona Beach, Tampa Bay, and cruise ports with school-break sailings",
    advice:
      "Compare destination style before booking. Some spring break trips are beach-first, while others are built around theme parks, cruises, family resorts, or local events. Confirm policies, parking, and booking terms before committing.",
    recommendations: [
      ["Orlando spring trips", "/orlando-travel-guide", "Plan theme parks, family hotels, flights, attractions, and restaurants."],
      ["Beach options", "/best-florida-beaches", "Compare Florida beaches by family fit, nightlife, hotels, and travel logistics."],
      ["Family vacations", "/best-florida-family-vacations", "Balance attractions, hotels, flights, food, and flexible schedules."]
    ]
  },
  {
    slug: "florida-holiday-travel-guide",
    title: "Florida Holiday Travel Guide | Flights, Hotels, Cruises & Events",
    metaDescription:
      "Plan Florida holiday travel with flights, hotels, cruises, beach trips, local events, family activities, seasonal crowds, and trip-planning tips.",
    h1: "Florida Holiday Travel Guide",
    eyebrow: "Holiday travel",
    intro:
      "Florida holiday travel can be rewarding, but it needs careful timing because flights, hotels, cruises, events, and family attractions often see compressed demand.",
    image: pageImages.calendar,
    alt: "Florida holiday travel planning with flights hotels cruises events and family activities",
    related: ["best-time-to-visit-florida", "florida-family-vacations", "best-florida-weekend-trips", "florida-vacation-planning-guide"],
    destinations: "Orlando, Miami, Tampa Bay, Fort Lauderdale, Key West, Naples, Jacksonville, and cruise ports with holiday sailings",
    advice:
      "Holiday travelers should confirm schedules, minimum hotel stays, cancellation rules, restaurant hours, attraction calendars, and transportation timing. Flexibility on airports or dates can help widen the search.",
    recommendations: [
      ["Best time to visit", "/best-time-to-visit-florida", "Compare holidays with other Florida travel seasons and planning windows."],
      ["Family trips", "/best-florida-family-vacations", "Plan kid-friendly holiday travel with hotels, attractions, flights, and local activities."],
      ["Cruise ports", "/best-florida-cruise-ports", "Compare Florida cruise departure areas before choosing hotels or flights."]
    ]
  }
];

const v2SeasonalPageConfigs = [
  {
    slug: "summer-florida-vacations",
    title: "Summer Florida Vacations | Beaches, Hotels & Family Trip Ideas",
    metaDescription:
      "Plan summer Florida vacations with beach ideas, family hotels, flights, cruises, attractions, weather tips, and local things to do.",
    h1: "Summer Florida Vacations",
    eyebrow: "Seasonal travel",
    intro:
      "Summer Florida vacations work best when the plan balances beaches, hotels, indoor breaks, flexible restaurants, and weather-aware local activities.",
    image: pageImages.summer,
    alt: "Summer Florida vacation with beach water family hotels flights and attractions",
    related: ["florida-summer-travel-guide", "best-florida-beaches", "best-florida-family-vacations", "florida-theme-park-guide"],
    destinations: "Clearwater, Destin, Miami Beach, Orlando, Tampa Bay, Jacksonville beaches, Naples, Key West, and the Florida Keys",
    advice:
      "Summer travelers should plan around heat, afternoon storms, school schedules, and beach demand. Look for hotels with useful amenities, morning outdoor plans, indoor backup activities, and flexible local options if weather changes.",
    recommendations: [
      ["Florida beach vacation guide", "/florida-beach-vacation-guide", "Compare beach areas before choosing hotels and local plans."],
      ["Florida family vacations", "/best-florida-family-vacations", "Plan family-friendly destinations, hotels, attractions, and activities."],
      ["Florida hotel deals", sites.hotels, "Compare hotel deal pages for beach, city, and family stays."]
    ]
  },
  {
    slug: "winter-florida-getaways",
    title: "Winter Florida Getaways | Warm Beaches, Cruises & Trip Ideas",
    metaDescription:
      "Plan winter Florida getaways with warm beaches, hotels, cruises, flights, local events, family trips, and seasonal travel planning tips.",
    h1: "Winter Florida Getaways",
    eyebrow: "Seasonal travel",
    intro:
      "Winter Florida getaways often focus on warmer weather, beach towns, cruises, family visits, local events, and city stays that feel easier than colder destinations.",
    image: pageImages.floridaCoast,
    alt: "Winter Florida getaway with warm beach hotels cruises and local events",
    related: ["best-time-to-visit-florida", "best-florida-beaches", "best-florida-cruise-ports", "romantic-florida-getaways"],
    destinations: "Miami, Fort Lauderdale, Naples, Key West, Clearwater, Tampa, Orlando, cruise ports, and South Florida beach towns",
    advice:
      "Winter visitors should compare hotel demand, holiday timing, cruise departures, local event calendars, and flight options early. Some destinations are busier in winter, so flexible dates and nearby airports can help widen the search.",
    recommendations: [
      ["Best time to visit Florida", "/best-time-to-visit-florida", "Compare winter with other Florida travel seasons."],
      ["Cruise ports", "/best-florida-cruise-ports", "Plan winter sailings around port hotels and flights."],
      ["Florida flight deals", sites.flights, "Check airfare routes into major Florida airports."]
    ]
  },
  {
    slug: "spring-break-florida",
    title: "Spring Break Florida | Beaches, Hotels, Flights & Family Tips",
    metaDescription:
      "Plan spring break Florida trips with beach destinations, Orlando hotels, flights, cruises, family activities, crowd tips, and local deals.",
    h1: "Spring Break Florida",
    eyebrow: "Seasonal travel",
    intro:
      "Spring Break Florida trips need early planning because beach hotels, flights, attractions, local restaurants, and cruise dates can all tighten around school calendars.",
    image: pageImages.clearwater,
    alt: "Spring break Florida beach vacation with hotels flights cruises and family activities",
    related: ["florida-spring-break-guide", "best-florida-beaches", "orlando-travel-guide", "florida-family-vacations"],
    destinations: "Orlando, Clearwater, Miami Beach, Fort Lauderdale, Destin, Daytona Beach, Tampa Bay, and cruise ports with school-break sailings",
    advice:
      "Decide whether the trip is beach-first, theme-park-first, cruise-first, or family-resort-first. Then compare flights, hotel areas, cancellation terms, local activities, and transportation before dates get too compressed.",
    recommendations: [
      ["Orlando travel guide", "/orlando-travel-guide", "Plan theme parks, family hotels, flights, and attractions."],
      ["Best Florida beaches", "/best-florida-beaches", "Compare beach areas by hotel type, trip style, and travel time."],
      ["Local Florida deals", sites.local, "Find attractions, restaurants, events, and family activities."]
    ]
  },
  {
    slug: "florida-holiday-travel",
    title: "Florida Holiday Travel | Flights, Hotels, Cruises & Events",
    metaDescription:
      "Plan Florida holiday travel with flights, hotels, cruises, beach trips, local events, family activities, seasonal crowds, and trip tips.",
    h1: "Florida Holiday Travel",
    eyebrow: "Seasonal travel",
    intro:
      "Florida holiday travel can be rewarding, but it needs careful timing because flights, hotels, cruises, events, and family attractions often see compressed demand.",
    image: pageImages.calendar,
    alt: "Florida holiday travel planning with flights hotels cruises events and family activities",
    related: ["florida-holiday-travel-guide", "best-time-to-visit-florida", "florida-family-vacations", "best-florida-cruise-ports"],
    destinations: "Orlando, Miami, Tampa Bay, Fort Lauderdale, Key West, Naples, Jacksonville, Clearwater, and cruise ports with holiday sailings",
    advice:
      "Holiday travelers should confirm schedules, minimum hotel stays, cancellation rules, restaurant hours, attraction calendars, and transportation timing. Flexibility on airports or dates can help widen the search.",
    recommendations: [
      ["Florida vacation planning guide", "/florida-vacation-planning-guide", "Build a holiday trip around dates, hotels, activities, and routes."],
      ["Florida cruise deals", sites.cruises, "Browse cruise planning pages for holiday sailings from Florida ports."],
      ["Florida hotel deals", sites.hotels, "Compare hotel deal pages for holiday stays and family trips."]
    ]
  },
  {
    slug: "florida-hurricane-season-travel-tips",
    title: "Florida Hurricane Season Travel Tips | Flexible Trip Planning",
    metaDescription:
      "Use Florida hurricane season travel tips for flexible flights, hotels, cruises, beach plans, cancellation policies, weather awareness, and local activities.",
    h1: "Florida Hurricane Season Travel Tips",
    eyebrow: "Weather-aware planning",
    intro:
      "Florida hurricane season travel requires flexibility, policy awareness, and backup plans. The goal is not to avoid every trip, but to understand how weather can affect flights, hotels, cruises, beaches, and local activities.",
    image: pageImages.planning,
    alt: "Florida hurricane season travel planning with flexible hotels flights and weather-aware trip tips",
    related: ["best-time-to-visit-florida", "florida-vacation-planning-guide", "florida-budget-travel-guide", "florida-beach-vacation-guide"],
    destinations: "Miami, Tampa Bay, the Gulf Coast, the Atlantic Coast, Orlando, Jacksonville, the Florida Keys, and cruise ports with weather-sensitive sailings",
    advice:
      "Review cancellation terms, travel insurance options, airline policies, cruise line updates, hotel flexibility, and local weather sources before booking. Build backup indoor activities and avoid plans that depend on one fragile outdoor window.",
    recommendations: [
      ["Best time to visit Florida", "/best-time-to-visit-florida", "Compare weather, crowds, hotel demand, and seasonal timing."],
      ["Florida flight deals", sites.flights, "Watch flexible routes and airports when dates may need to move."],
      ["Local Florida deals", sites.local, "Use local activities as backup options when weather changes."]
    ]
  },
  {
    slug: "memorial-day-florida-weekend",
    title: "Memorial Day Florida Weekend | Beaches, Hotels & Things To Do",
    metaDescription:
      "Plan Memorial Day Florida weekend trips with beaches, hotels, flights, cruises, local events, family activities, and short getaway ideas.",
    h1: "Memorial Day Florida Weekend",
    eyebrow: "Holiday weekend",
    intro:
      "Memorial Day Florida weekend trips often start summer travel season with beach demand, family plans, local events, hotel searches, and short getaway timing.",
    image: pageImages.weekendBeach,
    alt: "Memorial Day Florida weekend with beaches hotels flights and local events",
    related: ["florida-weekend-getaways", "summer-florida-vacations", "best-florida-beaches", "best-florida-weekend-trips"],
    destinations: "Clearwater, Tampa Bay, Miami Beach, Fort Lauderdale, Destin, Jacksonville beaches, Orlando, and Gulf Coast beach towns",
    advice:
      "Keep the weekend focused. Choose one beach, city, cruise port, or family attraction area, then compare hotels, flights, local events, restaurants, and parking before the schedule gets crowded.",
    recommendations: [
      ["Florida weekend getaways", "/florida-weekend-getaways", "Compare short-trip ideas across beaches, hotels, cruises, and local events."],
      ["Florida hotel deals", sites.hotels, "Compare hotel deal pages for holiday weekend stays."],
      ["Local Florida deals", sites.local, "Find restaurants, attractions, events, and things to do."]
    ]
  },
  {
    slug: "labor-day-florida-weekend",
    title: "Labor Day Florida Weekend | Beaches, Hotels & Late Summer Trips",
    metaDescription:
      "Plan Labor Day Florida weekend trips with beaches, hotels, flights, cruises, local events, family activities, and late-summer getaway tips.",
    h1: "Labor Day Florida Weekend",
    eyebrow: "Holiday weekend",
    intro:
      "Labor Day Florida weekend can work for late-summer beach trips, quick city stays, family activities, cruises, and local events when the plan stays realistic and weather-aware.",
    image: pageImages.summer,
    alt: "Labor Day Florida weekend with late summer beaches hotels and local activities",
    related: ["florida-weekend-getaways", "florida-fall-travel-guide", "florida-hurricane-season-travel-tips", "best-florida-beaches"],
    destinations: "Tampa Bay, Clearwater, Miami, Fort Lauderdale, Orlando, Jacksonville beaches, Naples, and the Panhandle",
    advice:
      "Late-summer weekends benefit from flexible plans. Compare hotel areas, watch weather, keep indoor options nearby, and confirm current event schedules, restaurant hours, and attraction policies before you go.",
    recommendations: [
      ["Florida fall travel guide", "/florida-fall-travel-guide", "Compare late-summer weekends with shoulder-season trip ideas."],
      ["Florida beach vacation guide", "/florida-beach-vacation-guide", "Choose beach areas by hotel type, activities, and travel logistics."],
      ["Florida flight deals", sites.flights, "Check airfare sources for major Florida airports."]
    ]
  }
];

function createAuthorityPage(config) {
  return {
    ...config,
    article: true,
    details: [
      `${config.h1} should start with the destinations that fit the trip. Useful Florida planning often includes ${config.destinations}. Each area has different flight options, hotel patterns, cruise access, attractions, restaurant scenes, and local transportation needs.`,
      config.advice,
      "Use Florida Deals Hub as the editorial layer for the network. Start with the travel idea on this page, then move into the focused vertical site when you are ready to compare Florida flight deals, Florida hotel deals, Florida cruise deals, or local Florida deals.",
      "Before booking, confirm current dates, rates, schedules, cancellation terms, attraction hours, restaurant availability, cruise details, and weather considerations with the provider or official source."
    ],
    previews: networkPreviewCards
  };
}

const destinationPageConfigs = [
  ["orlando-travel-guide", "Orlando Travel Guide | Flights, Hotels, Attractions & Vacation Tips", "Plan an Orlando vacation with hotel ideas, flight tips, theme park attractions, cruises near Orlando, restaurants, and local Florida travel recommendations.", "Orlando Travel Guide", "Central Florida guide", pageImages.orlando, "Orlando travel guide with theme parks hotels flights and attractions", "Orlando is Florida's biggest family-travel planning hub, with theme parks, resorts, convention areas, restaurants, day trips, and nearby cruise options.", "Orlando International Airport, theme park hotel corridors, International Drive, Lake Buena Vista, Winter Park, downtown Orlando, and Port Canaveral cruise access", ["florida-theme-park-guide", "best-florida-family-vacations", "7-day-florida-itinerary", "orlando-deals"]],
  ["miami-travel-guide", "Miami Travel Guide | Beaches, Hotels, Cruises & Local Tips", "Plan a Miami trip with beaches, hotels, flights, cruises from Miami, restaurants, nightlife, attractions, and South Florida travel ideas.", "Miami Travel Guide", "South Florida guide", pageImages.miami, "Miami travel guide with beach skyline hotels cruises and restaurants", "Miami works well for beach trips, food-focused weekends, nightlife, arts districts, cruise departures, and South Florida road-trip add-ons.", "Miami International Airport, Miami Beach, Brickell, Wynwood, Downtown Miami, Little Havana, Coral Gables, and PortMiami cruise departures", ["best-florida-beaches", "romantic-florida-getaways", "best-florida-cruise-ports", "miami-deals"]],
  ["tampa-travel-guide", "Tampa Travel Guide | Hotels, Flights, Cruises & Gulf Coast Ideas", "Plan a Tampa trip with flights, hotels, cruise departures, Gulf Coast beaches, restaurants, attractions, events, and local Florida travel tips.", "Tampa Travel Guide", "Gulf Coast guide", pageImages.tampa, "Tampa waterfront travel guide with hotels flights cruises and local attractions", "Tampa is a flexible Gulf Coast base for city stays, beaches, restaurants, sports, family attractions, and cruise departures.", "Tampa International Airport, downtown Tampa, Ybor City, St. Pete, Clearwater, Gulf beaches, Busch Gardens, and Port Tampa Bay", ["clearwater-travel-guide", "best-florida-weekend-trips", "best-florida-cruise-ports", "tampa-deals"]],
  ["fort-lauderdale-travel-guide", "Fort Lauderdale Travel Guide | Beaches, Hotels, Flights & Cruises", "Plan a Fort Lauderdale trip with beach hotels, flights, cruises, restaurants, attractions, local events, and South Florida travel ideas.", "Fort Lauderdale Travel Guide", "Coastal guide", pageImages.floridaCoast, "Fort Lauderdale beach and marina travel guide with hotels cruises and flights", "Fort Lauderdale is useful for beach stays, cruise-night hotels, South Florida flights, waterfront dining, and easy connections to Miami or Palm Beach.", "Fort Lauderdale-Hollywood International Airport, beach hotels, Las Olas, Port Everglades, Hollywood Beach, Pompano Beach, and South Florida day trips", ["miami-travel-guide", "best-florida-beaches", "romantic-florida-getaways", "fort-lauderdale-deals"]],
  ["jacksonville-travel-guide", "Jacksonville Travel Guide | Flights, Hotels, Beaches & Local Things To Do", "Plan a Jacksonville trip with flights, hotels, beaches, restaurants, family attractions, local events, and Northeast Florida travel ideas.", "Jacksonville Travel Guide", "Northeast Florida guide", pageImages.roadTrip, "Jacksonville travel guide with riverfront beaches hotels flights and local attractions", "Jacksonville is a strong base for Northeast Florida beaches, riverfront weekends, sports, family activities, local restaurants, and nearby St. Augustine trips.", "Jacksonville International Airport, downtown Jacksonville, Riverside, Jacksonville Beach, Atlantic Beach, Amelia Island, and St. Augustine", ["best-florida-road-trips", "florida-family-vacations", "florida-deals-for-locals", "jacksonville-deals"]],
  ["key-west-travel-guide", "Key West Travel Guide | Hotels, Road Trips, Flights & Things To Do", "Plan a Key West trip with hotel areas, flight tips, road trip ideas, restaurants, beaches, water activities, and romantic Florida getaway planning.", "Key West Travel Guide", "Florida Keys guide", pageImages.keyWest, "Key West tropical travel guide with island hotels road trips and things to do", "Key West is best for island hotels, sunsets, food, water activities, couples trips, road trips, and a slower Florida vacation pace.", "Key West International Airport, Old Town, Duval Street, Mallory Square, beaches, marinas, the Overseas Highway, and Florida Keys road-trip stops", ["romantic-florida-getaways", "best-florida-road-trips", "best-couples-getaways-florida", "best-florida-beaches"]],
  ["naples-florida-guide", "Naples Florida Guide | Beaches, Hotels, Dining & Romantic Getaways", "Plan a Naples Florida trip with beach hotels, restaurants, couples getaway ideas, family activities, Gulf Coast travel tips, and local things to do.", "Naples Florida Guide", "Gulf Coast guide", pageImages.romance, "Naples Florida guide with beach hotels dining romantic getaways and local activities", "Naples is a polished Gulf Coast destination for beaches, dining, shopping, couples trips, family stays, and slower weekend getaways.", "Naples beaches, Fifth Avenue South, Third Street South, Marco Island, golf areas, waterfront dining, and nearby Everglades day trips", ["romantic-florida-getaways", "best-florida-beaches", "florida-weekend-getaways", "best-couples-getaways-florida"]],
  ["destin-florida-guide", "Destin Florida Guide | Beaches, Family Hotels & Vacation Ideas", "Plan a Destin Florida vacation with beaches, family hotels, flights, local attractions, restaurants, boating, and Panhandle trip ideas.", "Destin Florida Guide", "Panhandle guide", pageImages.clearwater, "Destin Florida beach guide with family hotels vacation ideas and local attractions", "Destin is a popular Panhandle beach destination for family vacations, longer stays, boating, fishing, beach condos, and Gulf Coast local activities.", "Destin-Fort Walton Beach Airport, Miramar Beach, Henderson Beach, HarborWalk Village, 30A access, family beach hotels, and local restaurants", ["best-florida-beaches", "best-florida-family-vacations", "florida-summer-travel-guide", "cheap-florida-vacation-ideas"]],
  ["clearwater-travel-guide", "Clearwater Travel Guide | Beaches, Hotels, Tampa Trips & Things To Do", "Plan a Clearwater Florida trip with beach hotels, Tampa flights, Gulf Coast restaurants, family activities, events, and local things to do.", "Clearwater Travel Guide", "Gulf beach guide", pageImages.clearwater, "Clearwater beach travel guide with Gulf Coast hotels Tampa flights and family activities", "Clearwater works well for beach weekends, family hotels, Tampa-area flights, sunset trips, restaurants, and Gulf Coast local activities.", "Clearwater Beach, Sand Key, Dunedin, St. Pete, Tampa International Airport, Pier 60, family hotels, and Gulf Coast day trips", ["tampa-travel-guide", "best-florida-beaches", "florida-weekend-getaways", "best-florida-family-vacations"]],
  ["st-augustine-travel-guide", "St. Augustine Travel Guide | Hotels, History, Beaches & Weekend Ideas", "Plan a St. Augustine trip with historic district hotels, Jacksonville flights, beaches, tours, restaurants, family attractions, and weekend ideas.", "St. Augustine Travel Guide", "Historic Coast guide", pageImages.roadTrip, "St. Augustine historic street travel guide with hotels tours beaches and weekend ideas", "St. Augustine is ideal for historic weekends, walkable hotels, restaurants, museums, beaches, family tours, and Northeast Florida road trips.", "Historic District, Castillo de San Marcos, Anastasia Island, Vilano Beach, St. George Street, Jacksonville airport access, and nearby beach hotels", ["jacksonville-travel-guide", "best-florida-road-trips", "florida-weekend-getaways", "best-places-to-visit-in-florida"]],
  ["daytona-beach-travel-guide", "Daytona Beach Travel Guide | Hotels, Events, Flights & Things To Do", "Plan a Daytona Beach trip with oceanfront hotels, Orlando flights, Speedway events, beach weekends, restaurants, and local things to do.", "Daytona Beach Travel Guide", "Atlantic beach guide", pageImages.weekendBeach, "Daytona Beach travel guide with oceanfront hotels events flights and things to do", "Daytona Beach works for affordable beach weekends, racing events, family trips, road trips, and Atlantic Coast hotel searches.", "Daytona Beach, the Speedway area, oceanfront hotels, boardwalk attractions, Ponce Inlet, Daytona Beach International Airport, Orlando airport access, and local event districts", ["orlando-travel-guide", "best-florida-beaches", "florida-weekend-getaways", "best-florida-family-vacations"]],
  ["port-canaveral-travel-guide", "Port Canaveral Travel Guide | Cruises, Hotels, Orlando Flights & Things To Do", "Plan a Port Canaveral cruise trip with nearby hotels, Orlando flights, Bahamas cruises, transportation, beaches, and pre-cruise things to do.", "Port Canaveral Travel Guide", "Cruise port guide", pageImages.cruisePort, "Port Canaveral cruise ship travel guide with hotels Orlando flights and local things to do", "Port Canaveral is one of Florida's most important cruise ecosystems because it connects Orlando flights, theme park add-ons, Cocoa Beach hotels, family cruises, and Bahamas sailings.", "Port Canaveral terminals, Cocoa Beach hotels, Orlando International Airport, Kennedy Space Center, Cape Canaveral, beach restaurants, family attractions, and Bahamas cruise departures", ["orlando-travel-guide", "best-florida-cruise-ports", "florida-family-vacations", "florida-vacation-planning-guide"]]
];

function createDestinationPage([slug, title, metaDescription, h1, eyebrow, image, alt, intro, destinations, related]) {
  const city = h1.replace(" Travel Guide", "").replace(" Florida Guide", "").replace(" Guide", "");

  return {
    slug,
    title,
    metaDescription,
    h1,
    eyebrow,
    intro,
    image,
    alt,
    article: true,
    related,
    details: [
      `${h1} visitors should plan around the parts of the trip that create the biggest decisions: flights, hotel location, local transportation, restaurants, attractions, cruise access, and day-trip timing.`,
      `Useful planning areas include ${destinations}. Compare those areas before choosing dates or hotels, because the best base for a family trip may be different from the best base for a couples getaway, beach weekend, convention trip, or cruise night.`,
      `Use Florida Flight Deals for ${city} flight deals, Florida Hotel Deals for ${city} hotel searches, Florida Cruise Deals for nearby cruise departures from Florida, and Local Deals Florida for ${city} attraction discounts, restaurants, events, and things to do.`,
      "Prices, hours, schedules, hotel rules, attraction details, and availability may change seasonally. Confirm current details with the airline, hotel, cruise line, attraction, restaurant, event organizer, or official source before making plans."
    ],
    recommendations: [
      [`${city} flight deals`, sites.flights, `Compare flight deal sources and airport routing for ${city} travel.`],
      [`${city} hotel searches`, sites.hotels, `Review Florida hotel deal pages for city, beach, family, and weekend stays.`],
      [`${city} cruise departures`, sites.cruises, "Check Florida cruise pages for nearby departure ports and sailing ideas."],
      [`${city} attraction discounts`, sites.local, "Find local Florida deals for restaurants, events, attractions, and things to do."]
    ],
    previews: networkPreviewCards
  };
}

const planningPageConfigs = [
  ["how-to-plan-a-florida-trip", "How To Plan A Florida Trip | Flights, Hotels, Cruises & Activities", "Learn how to plan a Florida trip with destination tips, flights, hotels, cruises, attractions, beaches, local activities, and budget guidance.", "How To Plan A Florida Trip", "Planning steps", pageImages.planning, "Florida trip planning checklist with flights hotels cruises and activities", "Planning a Florida trip is easier when you choose one anchor first: destination, dates, budget, beach type, cruise port, family activity, or hotel area.", "Break the trip into phases: choose destinations, compare travel dates, check flights, narrow hotel areas, decide whether a cruise fits, and leave room for local attractions, restaurants, events, and flexible weather plans.", ["florida-vacation-planning-guide", "florida-travel-guide", "best-time-to-visit-florida", "7-day-florida-itinerary"]],
  ["7-day-florida-itinerary", "7 Day Florida Itinerary | Beaches, Cities, Attractions & Road Trip Ideas", "Plan a 7 day Florida itinerary with beaches, cities, theme parks, hotels, flights, local attractions, road trips, and cruise add-ons.", "7 Day Florida Itinerary", "Itinerary ideas", pageImages.roadTrip, "Seven day Florida itinerary with road trip beaches cities and attractions", "A 7 day Florida itinerary should avoid trying to see the whole state at once. Pick one region or two connected regions, then build in time for weather, traffic, food, and local stops.", "A practical week could pair Orlando with the Space Coast, Miami with Key West, Tampa with Clearwater and St. Pete, or Jacksonville with St. Augustine and Amelia Island. Use the network links when flights, hotels, cruises, or local activities become the next planning step.", ["best-florida-road-trips", "orlando-travel-guide", "miami-travel-guide", "how-to-plan-a-florida-trip"]],
  ["best-florida-weekend-trips", "Best Florida Weekend Trips | Beaches, Cities, Cruises & Local Ideas", "Find the best Florida weekend trips with beaches, city breaks, cruises, hotel ideas, attractions, restaurants, events, and quick getaway planning tips.", "Best Florida Weekend Trips", "Weekend ideas", pageImages.weekendBeach, "Florida weekend trip ideas with beaches city hotels cruises and activities", "The best Florida weekend trips are easy to reach, simple to navigate, and not overloaded with too many stops. A strong weekend usually needs one main plan and a few flexible local ideas.", "Weekend travelers can compare beach hotels, city stays, short cruises, theme park trips, food weekends, and local events. Keep travel time realistic so the trip feels like a getaway instead of a commute.", ["florida-weekend-getaways", "tampa-travel-guide", "clearwater-travel-guide", "romantic-florida-getaways"]],
  ["cheap-florida-family-vacations", "Cheap Florida Family Vacations | Budget Hotels, Beaches & Attractions", "Plan cheap Florida family vacations with budget-friendly hotel areas, beaches, attractions, flights, local activities, and practical trip ideas.", "Cheap Florida Family Vacations", "Family budget travel", pageImages.familyTrip, "Cheap Florida family vacation planning with budget hotels beaches and attractions", "Cheap Florida family vacations depend on managing the whole trip cost, not just finding a lower room rate. Flights, parking, food, attraction tickets, beach gear, and transportation all matter.", "Families can reduce pressure by choosing fewer hotel moves, comparing nearby airports, using free beach or park time, mixing big attractions with local activities, and planning meals before every day becomes expensive.", ["best-florida-family-vacations", "cheap-florida-vacation-ideas", "florida-budget-travel-guide", "orlando-travel-guide"]],
  ["best-couples-getaways-florida", "Best Couples Getaways Florida | Romantic Beaches, Hotels & Weekend Ideas", "Explore the best couples getaways in Florida with romantic beaches, hotels, Key West trips, Naples weekends, Miami escapes, cruises, and local dining ideas.", "Best Couples Getaways Florida", "Couples trips", pageImages.romance, "Florida couples getaway with romantic beach hotels dining and travel ideas", "The best couples getaways in Florida depend on pace. Some trips are built around quiet beaches and hotels, while others lean into restaurants, nightlife, boat days, cruises, or historic towns.", "Couples should compare hotel location, walkability, dinner options, sunset spots, and travel time before filling the itinerary. A slower plan often makes a short Florida getaway feel more polished.", ["romantic-florida-getaways", "key-west-travel-guide", "naples-florida-guide", "miami-travel-guide"]],
  ["florida-beach-vacation-guide", "Florida Beach Vacation Guide | Hotels, Family Trips & Coastal Ideas", "Plan a Florida beach vacation with coastal destination ideas, hotel tips, family activities, flights, restaurants, and things to do near the beach.", "Florida Beach Vacation Guide", "Beach planning", pageImages.clearwater, "Florida beach vacation guide with coastal hotels family activities and things to do", "A Florida beach vacation should start with the coast that fits your trip style: Gulf Coast sunsets, Atlantic surf, Miami energy, Panhandle sand, island escapes, or quieter family towns.", "Once the beach style is clear, compare hotel location, airport access, restaurants, parking, weather, local activities, and whether you want a car. Beach trips are often smoother when local food and rainy-day plans are chosen early.", ["best-florida-beaches", "clearwater-travel-guide", "destin-florida-guide", "miami-travel-guide"]],
  ["best-florida-cruise-ports", "Best Florida Cruise Ports | Miami, Tampa, Port Canaveral & More", "Compare the best Florida cruise ports including Miami, Port Canaveral, Tampa, Fort Lauderdale, nearby hotels, flights, and pre-cruise trip ideas.", "Best Florida Cruise Ports", "Cruise planning", pageImages.cruisePort, "Florida cruise ports guide with ships hotels flights and pre cruise planning", "Florida cruise ports can shape the whole trip. The departure city affects flights, hotels, transportation, pre-cruise activities, and whether a beach or theme park add-on makes sense.", "Compare Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville by route options, hotel areas, airport access, and local activities. Confirm cruise schedules and port details with the cruise line before booking.", ["miami-travel-guide", "tampa-travel-guide", "orlando-travel-guide", "fort-lauderdale-travel-guide"]],
  ["florida-theme-park-guide", "Florida Theme Park Guide | Orlando Hotels, Flights & Attraction Tips", "Plan Florida theme park travel with Orlando hotel areas, flight tips, attraction planning, local deals, family schedules, and vacation ideas.", "Florida Theme Park Guide", "Attraction planning", pageImages.themePark, "Florida theme park guide with Orlando hotels flights attractions and family planning", "Florida theme park trips need a practical plan for hotel location, transportation, park days, rest time, meals, weather, and family energy levels.", "Use Orlando as the main planning base, then compare nearby flights, hotel corridors, attraction timing, restaurant plans, and local deals. Keeping one flexible day can make a theme park vacation easier for families.", ["orlando-travel-guide", "best-florida-family-vacations", "cheap-florida-family-vacations", "how-to-plan-a-florida-trip"]]
];

function createPlanningPage([slug, title, metaDescription, h1, eyebrow, image, alt, intro, advice, related]) {
  return {
    slug,
    title,
    metaDescription,
    h1,
    eyebrow,
    intro,
    image,
    alt,
    article: true,
    related,
    details: [
      advice,
      "Use this Hub guide as the research layer before moving into the network's conversion-focused sites. Florida Flight Deals is useful when airfare or airports drive the plan. Florida Hotel Deals is useful when location, room type, or budget is the key decision. Florida Cruise Deals helps with port-based trips, and Local Deals Florida helps fill the itinerary with restaurants, attractions, events, and things to do.",
      "Keep the plan flexible where possible. Florida travel demand can shift around holidays, school breaks, cruise departures, festivals, sports, weather, and beach weekends.",
      "Confirm current prices, schedules, attraction hours, hotel terms, cruise details, and local availability with the provider or official source before booking."
    ],
    recommendations: [
      ["Compare Florida flights", sites.flights, "Start with airfare when dates or airports will shape the trip."],
      ["Compare Florida hotels", sites.hotels, "Review hotel deal pages for destination, beach, city, family, and budget stays."],
      ["Browse Florida cruises", sites.cruises, "Check cruise departure ideas when a sailing could anchor the vacation."],
      ["Find Florida activities", sites.local, "Use local deals for restaurants, attractions, events, and things to do."]
    ],
    previews: networkPreviewCards
  };
}

const comparisonPageConfigs = [
  {
    slug: "orlando-vs-miami-vacation",
    title: "Orlando vs Miami Vacation | Which Florida Trip Is Better?",
    metaDescription:
      "Compare Orlando and Miami vacations by beaches, theme parks, hotels, flights, nightlife, family travel, cruises, and budget planning.",
    h1: "Orlando vs Miami Vacation",
    intro:
      "Choosing between Orlando and Miami depends on whether your Florida vacation is built around theme parks and family attractions or beaches, nightlife, restaurants, and cruise departures.",
    image: pageImages.orlando,
    alt: "Orlando and Miami vacation comparison with theme parks beaches hotels and flights",
    optionA: "Orlando",
    optionB: "Miami",
    related: ["orlando-travel-guide", "miami-travel-guide", "best-florida-family-vacations", "best-florida-beaches"],
    rows: [
      ["Best for", "Families, theme parks, attractions, first-time Florida visitors", "Beach escapes, nightlife, restaurants, cruises, couples trips"],
      ["Trip style", "Structured days, park tickets, resort areas, family schedules", "Beach time, dining, neighborhoods, port access, flexible weekends"],
      ["Hotel strategy", "Stay near parks, convention areas, or resort corridors", "Choose Miami Beach, Brickell, Downtown, or airport/cruise areas"],
      ["Deal path", "Start with flights and hotels, then local attraction deals", "Start with hotels or cruises, then flights and local dining"]
    ]
  },
  {
    slug: "miami-vs-tampa-travel",
    title: "Miami vs Tampa Travel | Beaches, Hotels, Cruises & Trip Planning",
    metaDescription:
      "Compare Miami and Tampa travel for beaches, hotels, flights, cruise departures, restaurants, family trips, nightlife, and Florida vacation planning.",
    h1: "Miami vs Tampa Travel",
    intro:
      "Miami and Tampa both work for Florida trips, but they serve different travel styles. Miami leans beach, nightlife, culture, and major cruise departures, while Tampa works well for Gulf Coast access, family attractions, sports, and easier beach add-ons.",
    image: pageImages.miami,
    alt: "Miami versus Tampa travel comparison with beaches waterfront hotels and cruises",
    optionA: "Miami",
    optionB: "Tampa",
    related: ["miami-travel-guide", "tampa-travel-guide", "best-florida-beaches", "best-florida-cruise-ports"],
    rows: [
      ["Best for", "Beach weekends, nightlife, dining, cruises from Miami", "Gulf Coast hotels, family trips, sports, cruises from Tampa"],
      ["Airport planning", "Miami and nearby Fort Lauderdale can widen flight options", "Tampa is convenient for Gulf Coast and Clearwater plans"],
      ["Hotel strategy", "Choose beach, city, airport, or port areas carefully", "Compare downtown, airport, St. Pete, and Clearwater areas"],
      ["Local activities", "Food, arts districts, beaches, nightlife, boat days", "Museums, beaches, restaurants, sports, family attractions"]
    ]
  },
  {
    slug: "florida-beach-vacation-vs-theme-park-trip",
    title: "Florida Beach Vacation vs Theme Park Trip | Which Is Better?",
    metaDescription:
      "Compare a Florida beach vacation and a theme park trip by hotels, flights, family travel, budgets, weather, attractions, and local activities.",
    h1: "Florida Beach Vacation vs Theme Park Trip",
    intro:
      "A Florida beach vacation and a theme park trip can both be memorable, but they require very different planning. Beach trips are often about location and pace, while theme park trips depend on tickets, timing, hotels, and transportation.",
    image: pageImages.clearwater,
    alt: "Florida beach vacation versus theme park trip comparison with hotels and family travel",
    optionA: "Beach Vacation",
    optionB: "Theme Park Trip",
    related: ["florida-beach-vacation-guide", "florida-theme-park-guide", "best-florida-family-vacations", "orlando-travel-guide"],
    rows: [
      ["Best for", "Relaxed schedules, couples, beach families, coastal dining", "Families, first-time visitors, structured attraction days"],
      ["Main cost drivers", "Hotel location, parking, resort fees, dining, flights", "Tickets, hotel proximity, food, transportation, rest days"],
      ["Weather plan", "Build in indoor meals, museums, shopping, and flexible beach time", "Plan breaks, indoor shows, hotel pool time, and backup evenings"],
      ["Deal path", "Compare hotels first, then flights and local activities", "Compare flights and hotels, then local attraction planning"]
    ]
  },
  {
    slug: "florida-weekend-trip-vs-weeklong-vacation",
    title: "Florida Weekend Trip vs Weeklong Vacation | Which Should You Plan?",
    metaDescription:
      "Compare a Florida weekend trip and a weeklong vacation by hotels, flights, cruises, beaches, attractions, family travel, and budget planning.",
    h1: "Florida Weekend Trip vs Weeklong Vacation",
    intro:
      "A Florida weekend trip is best when the plan is focused and easy to reach. A weeklong vacation gives you more room for beaches, cities, theme parks, cruises, road trips, and local activities.",
    image: pageImages.weekendBeach,
    alt: "Florida weekend trip versus weeklong vacation comparison with beaches hotels and activities",
    optionA: "Weekend Trip",
    optionB: "Weeklong Vacation",
    related: ["florida-weekend-getaways", "7-day-florida-itinerary", "best-florida-road-trips", "florida-vacation-planning-guide"],
    rows: [
      ["Best for", "Short escapes, locals, couples, quick beach or city stays", "Families, road trips, mixed destinations, deeper planning"],
      ["Planning focus", "Minimize travel time and hotel moves", "Balance regions, rest days, activities, and transportation"],
      ["Budget style", "Fewer nights but often compressed timing", "More total cost but better pacing and flexibility"],
      ["Deal path", "Start with hotels or local events", "Start with flights, itinerary, hotels, and activity clusters"]
    ]
  },
  {
    slug: "cheap-florida-vacation-vs-luxury-florida-trip",
    title: "Cheap Florida Vacation vs Luxury Florida Trip | Planning Comparison",
    metaDescription:
      "Compare cheap Florida vacations and luxury Florida trips by hotels, flights, beaches, cruises, restaurants, attractions, and planning tradeoffs.",
    h1: "Cheap Florida Vacation vs Luxury Florida Trip",
    intro:
      "A cheap Florida vacation and a luxury Florida trip can use the same destinations, but the planning choices are different. Budget trips rely on flexibility and tradeoffs, while luxury trips lean on location, service, amenities, and convenience.",
    image: pageImages.planning,
    alt: "Cheap Florida vacation versus luxury Florida trip comparison with hotels beaches and travel planning",
    optionA: "Cheap Florida Vacation",
    optionB: "Luxury Florida Trip",
    related: ["cheap-florida-vacation-ideas", "florida-budget-travel-guide", "romantic-florida-getaways", "naples-florida-guide"],
    rows: [
      ["Best for", "Flexible travelers, families watching total cost, short trips", "Couples, special occasions, resort stays, convenience-first travel"],
      ["Hotel strategy", "Compare areas, parking, fees, and off-peak dates", "Prioritize location, amenities, views, dining, and service"],
      ["Activity style", "Mix beaches, parks, free events, and selective paid attractions", "Build around restaurants, spas, tours, boating, and premium hotels"],
      ["Deal path", "Start with flights and hotel value", "Start with destination and hotel experience"]
    ]
  },
  {
    slug: "orlando-vs-tampa-family-vacation",
    title: "Orlando vs Tampa Family Vacation | Theme Parks, Beaches & Hotels",
    metaDescription:
      "Compare Orlando and Tampa family vacations by theme parks, beaches, hotels, flights, attractions, local activities, and budget planning.",
    h1: "Orlando vs Tampa Family Vacation",
    intro:
      "Orlando and Tampa are both strong family vacation bases. Orlando is best when theme parks and major attractions are the anchor, while Tampa is better when a family wants Gulf Coast beaches, museums, sports, and a slightly more mixed itinerary.",
    image: pageImages.familyTrip,
    alt: "Orlando versus Tampa family vacation comparison with theme parks beaches hotels and attractions",
    optionA: "Orlando",
    optionB: "Tampa",
    related: ["orlando-travel-guide", "tampa-travel-guide", "best-florida-family-vacations", "clearwater-travel-guide"],
    rows: [
      ["Best for", "Theme park trips, resort corridors, attraction-heavy days", "Gulf Coast beaches, city stays, sports, museums, flexible family days"],
      ["Hotel strategy", "Stay near the park or area driving most of the trip", "Compare Tampa, St. Pete, Clearwater, and airport areas"],
      ["Local activities", "Theme parks, dinner shows, shopping, attractions", "Beaches, museums, sports, restaurants, parks, family attractions"],
      ["Deal path", "Start with flights, hotels, then attraction and local deals", "Start with hotel area, beach plans, flights, and local activities"]
    ]
  }
];

function createComparisonPage(config) {
  return {
    ...config,
    eyebrow: "Florida comparison guide",
    article: true,
    details: [
      `${config.h1} is useful when two good Florida trip ideas compete for the same dates or budget. The right choice depends on who is traveling, how much structure the trip needs, and which costs are most likely to shape the plan.`,
      "Use the comparison below as a starting point, then move into the Florida Deals network when you are ready to compare flights, hotels, cruises, or local activities. The Hub explains the tradeoffs; the category sites help with the next step.",
      "Prices, schedules, attraction hours, cruise departures, hotel rules, and local availability may change. Confirm current details with booking providers and official sources before committing."
    ],
    recommendations: [
      [`Choose ${config.optionA}`, config.related[0] ? `/${config.related[0]}` : "/florida-travel-guide", `Best for travelers leaning toward ${config.optionA.toLowerCase()} after comparing the tradeoffs.`],
      [`Choose ${config.optionB}`, config.related[1] ? `/${config.related[1]}` : "/florida-travel-guide", `Best for travelers leaning toward ${config.optionB.toLowerCase()} after comparing the tradeoffs.`],
      ["Start planning with deals", "/florida-travel-deals", "Move from comparison research into flights, hotels, cruises, and local deal routes."]
    ],
    previews: networkPreviewCards
  };
}

const generatedAuthorityPages = authorityPageConfigs.map(createAuthorityPage);
const generatedV2SeasonalPages = v2SeasonalPageConfigs.map(createAuthorityPage);
const generatedDestinationPages = destinationPageConfigs.map(createDestinationPage);
const generatedPlanningPages = planningPageConfigs.map(createPlanningPage);
const generatedComparisonPages = comparisonPageConfigs.map(createComparisonPage);
const v7HubProgrammaticPages = [
  ["orlando-weekend-trip-guide", "Orlando Weekend Trip Guide | Hotels, Flights & Things To Do", "Plan an Orlando weekend trip with flights, hotels, family activities, theme parks, restaurants, and nearby Port Canaveral cruise ideas.", "Orlando Weekend Trip Guide", "Weekend planning", pageImages.orlando, "Orlando weekend trip guide with hotels flights attractions and family activities", "Orlando weekend trips work best when the plan has one anchor: a theme park day, resort weekend, sports event, family visit, convention, or nearby cruise add-on.", "Orlando, Lake Buena Vista, International Drive, Winter Park, downtown Orlando, and Port Canaveral", "Compare flight timing, hotel area, parking, attraction hours, and family pacing before booking a short Orlando trip.", ["orlando-travel-guide", "florida-theme-park-guide", "best-florida-family-vacations", "florida-weekend-getaways"]],
  ["miami-weekend-trip-guide", "Miami Weekend Trip Guide | Beaches, Hotels, Cruises & Nightlife", "Plan a Miami weekend trip with beach hotels, flights, cruises, restaurants, nightlife, boat days, and South Florida activities.", "Miami Weekend Trip Guide", "Weekend planning", pageImages.miami, "Miami weekend trip guide with beach hotels cruises nightlife and restaurants", "Miami weekend trips can lean beach, food, nightlife, boating, art, or pre-cruise planning depending on where you stay.", "Miami Beach, Brickell, Wynwood, Downtown Miami, Little Havana, PortMiami, and Biscayne Bay", "Choose the hotel area before filling the itinerary because Miami traffic, beach access, parking, and port timing can shape the whole weekend.", ["miami-travel-guide", "best-florida-beaches", "best-florida-cruise-ports", "romantic-florida-getaways"]],
  ["tampa-weekend-trip-guide", "Tampa Weekend Trip Guide | Gulf Coast Hotels, Flights & Activities", "Plan a Tampa weekend trip with hotels, flights, restaurants, museums, sports, Clearwater beach ideas, and cruise add-ons.", "Tampa Weekend Trip Guide", "Weekend planning", pageImages.tampa, "Tampa weekend trip guide with waterfront hotels Gulf Coast activities and flights", "Tampa weekend trips work for city breaks, sports, restaurants, museums, family attractions, cruise nights, and Gulf beach add-ons.", "Downtown Tampa, Water Street, Ybor City, Westshore, St. Pete, Clearwater, and Port Tampa Bay", "Decide whether the trip is city-first or beach-first before comparing hotels and activities around Tampa Bay.", ["tampa-travel-guide", "clearwater-travel-guide", "best-florida-weekend-trips", "best-florida-cruise-ports"]],
  ["fort-lauderdale-weekend-trip-guide", "Fort Lauderdale Weekend Trip Guide | Beaches, Hotels & Boating", "Plan a Fort Lauderdale weekend trip with beach hotels, flights, cruises, boating, restaurants, Las Olas, and South Florida activities.", "Fort Lauderdale Weekend Trip Guide", "Weekend planning", pageImages.floridaCoast, "Fort Lauderdale weekend trip guide with beach hotels boating and cruise port planning", "Fort Lauderdale weekend trips are useful for beach time, boating, cruise add-ons, waterfront dining, and a calmer South Florida base.", "Fort Lauderdale Beach, Las Olas, Port Everglades, Hollywood Beach, FLL airport, and marina districts", "Compare beach access, port timing, airport convenience, and boating plans before choosing a hotel.", ["fort-lauderdale-travel-guide", "miami-travel-guide", "best-florida-beaches", "best-florida-cruise-ports"]],
  ["jacksonville-weekend-trip-guide", "Jacksonville Weekend Trip Guide | Beaches, Hotels & Family Ideas", "Plan a Jacksonville weekend trip with flights, hotels, beaches, museums, free activities, restaurants, and Northeast Florida road trip ideas.", "Jacksonville Weekend Trip Guide", "Weekend planning", pageImages.roadTrip, "Jacksonville weekend trip guide with beaches riverfront hotels and family activities", "Jacksonville weekend trips can combine beaches, riverfront events, museums, markets, sports, and nearby St. Augustine or Amelia Island add-ons.", "Downtown Jacksonville, Riverside, Jacksonville Beach, Atlantic Beach, Amelia Island, and St. Augustine", "Use Jacksonville as a broad Northeast Florida base and compare drive time before choosing activities across the region.", ["jacksonville-travel-guide", "st-augustine-travel-guide", "best-florida-road-trips", "cheap-florida-vacation-ideas"]],
  ["key-west-weekend-trip-guide", "Key West Weekend Trip Guide | Hotels, Flights, Boating & Dining", "Plan a Key West weekend trip with hotels, flights, road trip ideas, boating, restaurants, sunset activities, and Florida Keys planning tips.", "Key West Weekend Trip Guide", "Island weekend", pageImages.keyWest, "Key West weekend trip guide with island hotels boating dining and flights", "Key West weekends work best with realistic arrival timing and a compact itinerary around hotel location, sunset plans, restaurants, and water activities.", "Old Town, Duval Street, Mallory Square, Key West International Airport, marinas, beaches, and the Overseas Highway", "Compare flying into Key West with a Miami fly-and-drive route before committing to a short island weekend.", ["key-west-travel-guide", "florida-keys-travel-guide", "romantic-florida-getaways", "florida-water-activities-guide"]],
  ["clearwater-weekend-trip-guide", "Clearwater Weekend Trip Guide | Beach Hotels, Tampa Flights & Activities", "Plan a Clearwater weekend trip with Gulf beach hotels, Tampa flights, family activities, boat tours, restaurants, and sunset ideas.", "Clearwater Weekend Trip Guide", "Beach weekend", pageImages.clearwater, "Clearwater weekend trip guide with Gulf beach hotels activities and Tampa flights", "Clearwater weekend trips are strongest when the hotel location, beach access, restaurant plan, and Tampa Bay transportation all fit the same short itinerary.", "Clearwater Beach, Sand Key, Dunedin, Pier 60, Tampa International Airport, and nearby St. Pete", "Check parking, beach access, hotel fees, and weather before building a weekend around the Gulf.", ["clearwater-travel-guide", "tampa-travel-guide", "best-florida-beaches", "florida-beach-vacation-guide"]],
  ["st-augustine-weekend-trip-guide", "St. Augustine Weekend Trip Guide | History, Hotels & Beaches", "Plan a St. Augustine weekend trip with historic district hotels, Jacksonville flights, tours, restaurants, beaches, and family ideas.", "St. Augustine Weekend Trip Guide", "Historic weekend", pageImages.roadTrip, "St Augustine weekend trip guide with historic hotels beaches and local tours", "St. Augustine weekends work well when travelers stay close to the historic district or deliberately split time between the old city and the beach.", "Historic District, St. George Street, Anastasia Island, Vilano Beach, Jacksonville airport, and local museums", "Confirm parking, walkability, tour times, and restaurant plans before a busy holiday or festival weekend.", ["st-augustine-travel-guide", "jacksonville-travel-guide", "best-florida-road-trips", "romantic-florida-getaways"]],
  ["daytona-beach-weekend-trip-guide", "Daytona Beach Weekend Trip Guide | Hotels, Events & Beach Ideas", "Plan a Daytona Beach weekend trip with oceanfront hotels, flights, Speedway events, beach activities, family ideas, and local restaurants.", "Daytona Beach Weekend Trip Guide", "Atlantic beach weekend", pageImages.weekendBeach, "Daytona Beach weekend trip guide with oceanfront hotels events and family activities", "Daytona Beach weekends can be affordable beach escapes or event-focused trips depending on race schedules, hotel location, and family plans.", "Daytona Beach, the Speedway area, boardwalk districts, Ponce Inlet, Ormond Beach, and Orlando airport access", "Check event calendars before comparing hotels because race weekends and concerts can change availability quickly.", ["daytona-beach-travel-guide", "orlando-travel-guide", "best-florida-beaches", "best-florida-family-vacations"]],
  ["naples-weekend-trip-guide", "Naples Weekend Trip Guide | Beaches, Hotels, Dining & Couples Ideas", "Plan a Naples weekend trip with Gulf Coast hotels, romantic restaurants, beaches, Fort Myers flights, outdoor activities, and travel tips.", "Naples Weekend Trip Guide", "Gulf Coast weekend", pageImages.romance, "Naples weekend trip guide with beaches hotels dining and couples getaway ideas", "Naples weekends are best for travelers who want polished hotels, beaches, dining, shopping, and a slower Gulf Coast pace.", "Downtown Naples, Fifth Avenue South, beach hotels, North Naples, Marco Island, and Southwest Florida airport access", "Compare hotel location, restaurant reservations, beach access, and seasonal rates before booking a short Naples stay.", ["naples-florida-guide", "romantic-florida-getaways", "best-couples-getaways-florida", "best-florida-beaches"]],
  ["destin-weekend-trip-guide", "Destin Weekend Trip Guide | Beaches, Family Hotels & Fishing Ideas", "Plan a Destin weekend trip with beach hotels, family activities, fishing, flights, outdoor gear, restaurants, and Panhandle travel tips.", "Destin Weekend Trip Guide", "Panhandle beach weekend", pageImages.clearwater, "Destin weekend trip guide with beaches family hotels fishing and outdoor activities", "Destin weekend trips are built around beach access, family pacing, fishing plans, traffic timing, and practical outdoor gear choices.", "Destin, Miramar Beach, Henderson Beach, HarborWalk Village, 30A access, and nearby Panhandle airports", "Plan around beach parking, summer crowds, fishing plans, and hotel location before filling the itinerary.", ["destin-florida-guide", "best-florida-beaches", "florida-water-activities-guide", "florida-travel-gear-guide"]],
  ["sarasota-weekend-trip-guide", "Sarasota Weekend Trip Guide | Beaches, Hotels, Arts & Dining", "Plan a Sarasota weekend trip with Gulf beaches, hotels, arts, restaurants, family activities, flights, and nearby Tampa Bay ideas.", "Sarasota Weekend Trip Guide", "Gulf Coast weekend", pageImages.clearwater, "Sarasota weekend trip guide with Gulf beaches hotels arts and dining", "Sarasota weekends can blend beaches, arts, restaurants, family activities, and relaxed Gulf Coast hotels without needing a packed itinerary.", "Sarasota beaches, downtown Sarasota, St. Armands, Siesta Key, SRQ airport, and Tampa Bay access", "Compare beach proximity, hotel style, and restaurant plans before deciding whether Sarasota or nearby Tampa Bay is the better base.", ["florida-beach-vacation-guide", "clearwater-travel-guide", "tampa-travel-guide", "romantic-florida-getaways"]],
  ["fort-myers-weekend-trip-guide", "Fort Myers Weekend Trip Guide | Beaches, Hotels & Outdoor Ideas", "Plan a Fort Myers weekend trip with Southwest Florida flights, beach hotels, shelling, family activities, fishing, and Gulf Coast travel tips.", "Fort Myers Weekend Trip Guide", "Southwest Florida weekend", pageImages.romance, "Fort Myers weekend trip guide with beaches hotels shelling and outdoor activities", "Fort Myers weekend trips work best when travelers choose between beach time, family activities, shelling, fishing, and nearby Naples or island add-ons.", "Fort Myers, nearby beaches, Southwest Florida International Airport, Sanibel-area trips, Cape Coral, and Naples add-ons", "Check beach access, driving time, weather, and hotel area before planning a packed Southwest Florida weekend.", ["naples-florida-guide", "florida-beach-vacation-guide", "florida-water-activities-guide", "best-florida-weekend-trips"]],
  ["florida-keys-road-trip-guide", "Florida Keys Road Trip Guide | Hotels, Fishing, Boating & Key West Tips", "Plan a Florida Keys road trip with hotels, fishing, boating, Key West, Miami flights, scenic stops, and island travel tips.", "Florida Keys Road Trip Guide", "Island road trip", pageImages.keyWest, "Florida Keys road trip guide with island hotels fishing boating and Key West", "A Florida Keys road trip should leave room for water activities, food stops, hotel check-ins, traffic, sunset timing, and weather changes.", "Miami, Key Largo, Islamorada, Marathon, Big Pine Key, Key West, marinas, and the Overseas Highway", "Keep drive days realistic and choose hotel bases that match fishing, boating, beach, or nightlife plans.", ["key-west-travel-guide", "florida-water-activities-guide", "best-florida-road-trips", "miami-travel-guide"]],
  ["port-canaveral-cruise-trip-guide", "Port Canaveral Cruise Trip Guide | Orlando Flights, Hotels & Activities", "Plan a Port Canaveral cruise trip with Orlando flights, Cocoa Beach hotels, Bahamas cruises, transfers, and pre-cruise activities.", "Port Canaveral Cruise Trip Guide", "Cruise trip planning", pageImages.cruisePort, "Port Canaveral cruise trip guide with Orlando flights hotels and beach activities", "Port Canaveral cruise planning connects Orlando flights, Cocoa Beach hotels, pre-cruise activities, transfers, and Bahamas or family sailings.", "Port Canaveral, Cocoa Beach, Orlando International Airport, Kennedy Space Center, beach hotels, and cruise terminals", "Protect the cruise schedule first, then compare hotels, flights, transfers, and local activities around the port.", ["port-canaveral-travel-guide", "orlando-travel-guide", "best-florida-cruise-ports", "florida-vacation-planning-guide"]],
  ["florida-fishing-trip-guide", "Florida Fishing Trip Guide | Beaches, Piers, Hotels & Outdoor Gear", "Plan a Florida fishing trip with beach piers, Gulf Coast ideas, Keys trips, hotels, outdoor gear, local activities, and travel tips.", "Florida Fishing Trip Guide", "Outdoor travel guide", pageImages.clearwater, "Florida fishing trip guide with beaches piers hotels and outdoor gear", "Florida fishing trips can be simple pier outings, beach add-ons, Keys vacations, Panhandle trips, or full outdoor weekends with hotels and gear planning.", "Destin, the Florida Keys, Fort Myers, Naples, Clearwater, Jacksonville, piers, marinas, beaches, and local parks", "Choose the destination and gear around the activity type, weather, rules, and how much time the trip actually leaves for fishing.", ["florida-water-activities-guide", "florida-travel-gear-guide", "destin-florida-guide", "florida-keys-road-trip-guide"]],
  ["florida-outdoor-gear-guide", "Florida Outdoor Gear Guide | Fishing, Camping, Rain Gear & Beach Trips", "Plan Florida outdoor gear for fishing trips, camping weekends, rainy days, beach travel, parks, springs, and local activities.", "Florida Outdoor Gear Guide", "Outdoor gear guide", pageImages.planning, "Florida outdoor gear guide with fishing camping rain gear and beach trip essentials", "Florida outdoor gear should match real trip conditions: sun, rain, water, trails, piers, camping sites, beach days, and compact travel storage.", "Florida beaches, parks, springs, campgrounds, fishing piers, wet-weather activities, and outdoor weekends statewide", "Use affiliate gear recommendations as planning support, not as a reason to overpack. Confirm product details and current availability with the merchant.", ["florida-travel-gear-guide", "florida-fishing-trip-guide", "florida-water-activities-guide", "florida-camping-and-outdoor-guide"]],
  ["florida-camping-and-outdoor-guide", "Florida Camping & Outdoor Guide | Parks, Cabins, Gear & Weekend Trips", "Plan Florida camping and outdoor trips with parks, cabins, waterproof gear, rain planning, hotels, flights, and local activity ideas.", "Florida Camping & Outdoor Guide", "Camping and outdoor guide", pageImages.roadTrip, "Florida camping and outdoor guide with parks cabins gear and weekend trips", "Florida camping and outdoor trips need weather flexibility, waterproof packing, realistic drive times, and backup plans near parks, springs, beaches, or cabins.", "North Florida parks, springs, Gulf Coast campgrounds, cabins, beach-adjacent outdoor trips, and road trip corridors", "Match gear to the environment: rain, mud, bugs, sun, water, and walking distance can matter more than packing a long list.", ["florida-outdoor-gear-guide", "best-florida-road-trips", "florida-weekend-getaways", "cheap-florida-vacation-ideas"]],
  ["miami-yacht-rental-guide", "Miami Yacht Rental Guide | Boat Days, Hotels, Cruises & Local Planning", "Plan Miami yacht rental ideas with boating days, hotels, cruises, pre-cruise activities, restaurants, and waterfront trip tips.", "Miami Yacht Rental Guide", "Boating guide", pageImages.miami, "Miami yacht rental guide with waterfront hotels cruise planning and boating days", "Miami yacht rental planning should start with the occasion, group size, marina area, weather, hotel location, and whether the day is part of a cruise or weekend trip.", "Miami, Miami Beach, Biscayne Bay, Downtown Miami, PortMiami, waterfront restaurants, and South Florida hotels", "Do not publish outbound Sailo CTAs until tracked affiliate URLs are available. Keep boating content helpful and use internal planning links until then.", ["miami-travel-guide", "florida-water-activities-guide", "best-florida-cruise-ports", "romantic-florida-getaways"]],
  ["florida-beach-day-essentials-guide", "Florida Beach Day Essentials Guide | Packing, Hotels & Local Tips", "Plan Florida beach day essentials with packing tips, hotel location, outdoor gear, family activities, weather backups, and local planning ideas.", "Florida Beach Day Essentials Guide", "Beach packing guide", pageImages.floridaCoast, "Florida beach day essentials guide with packing hotels and local tips", "A strong Florida beach day starts with location, parking, weather, shade, water, footwear, simple outdoor gear, and a backup plan if storms move in.", "Clearwater, Miami Beach, Daytona Beach, Destin, Fort Lauderdale, Naples, Sarasota, and beach towns statewide", "Pack for the beach you are actually visiting and confirm hotel beach rules, parking, and local weather before committing to a full day outside.", ["florida-beach-vacation-guide", "best-florida-beaches", "florida-travel-gear-guide", "florida-water-activities-guide"]],
  ["florida-rainy-day-trip-guide", "Florida Rainy Day Trip Guide | Indoor Activities, Hotels & Backup Plans", "Plan Florida rainy-day trips with indoor attractions, museums, hotels, restaurants, family activities, and flexible travel backup ideas.", "Florida Rainy Day Trip Guide", "Weather backup guide", pageImages.planning, "Florida rainy day trip guide with indoor activities hotels and backup plans", "Florida rainy-day planning is not just for summer. A good itinerary includes nearby indoor attractions, restaurants, flexible hotel time, and short drive distances.", "Orlando, Miami, Tampa, Jacksonville, St. Augustine, Clearwater, Fort Lauderdale, and museums or aquariums statewide", "Choose indoor backups close to the original plan so weather does not turn into a long drive or an expensive scramble.", ["best-florida-family-vacations", "florida-vacation-planning-guide", "florida-weekend-getaways", "florida-deals-for-locals"]],
  ["florida-holiday-weekend-guide", "Florida Holiday Weekend Guide | Flights, Hotels, Beaches & Events", "Plan Florida holiday weekends with flights, hotels, beaches, events, cruises, family activities, restaurants, and seasonal travel tips.", "Florida Holiday Weekend Guide", "Holiday weekend planning", pageImages.calendar, "Florida holiday weekend guide with flights hotels beaches events and cruises", "Florida holiday weekends need earlier planning around flights, hotels, beach access, events, restaurant reservations, and family schedules.", "Orlando, Miami, Tampa Bay, Clearwater, St. Augustine, Daytona Beach, Naples, Key West, and Florida cruise ports", "Use safe freshness labels, compare flexible dates, and confirm official event details before building a holiday weekend itinerary.", ["florida-summer-travel-guide", "florida-fall-travel-guide", "best-time-to-visit-florida", "florida-weekend-getaways"]],
  ["florida-local-food-weekend-guide", "Florida Food Weekend Guide | Restaurants, Hotels & Local Trips", "Plan a Florida food weekend with restaurants, hotels, flights, local events, date nights, beaches, and city getaway ideas.", "Florida Food Weekend Guide", "Food weekend planning", pageImages.tampa, "Florida food weekend guide with restaurants hotels date nights and city trips", "Florida food weekends work best when hotel location, walkability, restaurant reservations, events, and local transportation are planned together.", "Miami, Tampa, St. Petersburg, Orlando, Sarasota, Naples, Fort Lauderdale, St. Augustine, and Jacksonville", "Anchor the trip with one or two dining areas, then keep nearby local activities flexible so the weekend does not become overbooked.", ["romantic-florida-getaways", "miami-travel-guide", "tampa-travel-guide", "best-florida-weekend-trips"]],
  ["florida-family-outdoor-trip-guide", "Florida Family Outdoor Trip Guide | Beaches, Parks, Gear & Hotels", "Plan Florida family outdoor trips with beaches, parks, fishing, hotels, outdoor gear, rainy-day backups, and weekend activity ideas.", "Florida Family Outdoor Trip Guide", "Family outdoor guide", pageImages.familyTrip, "Florida family outdoor trip guide with beaches parks gear and hotels", "Family outdoor trips in Florida should balance beach or park time with shade, water, travel time, gear, and realistic weather backups.", "Orlando, Clearwater, Destin, Jacksonville, Fort Myers, the Florida Keys, state parks, beaches, springs, and family hotels", "Choose fewer activities and keep gear practical so the trip feels manageable for kids and adults.", ["best-florida-family-vacations", "florida-outdoor-gear-guide", "florida-beach-day-essentials-guide", "florida-rainy-day-trip-guide"]]
].map(([slug, title, metaDescription, h1, eyebrow, image, alt, intro, destinations, advice, related]) =>
  createAuthorityPage({
    slug,
    title,
    metaDescription,
    h1,
    eyebrow,
    image,
    alt,
    intro,
    destinations,
    advice,
    related,
    showPiscifunGear: /gear|fishing|camping|outdoor|beach-day/.test(slug)
  })
);

export const landingPages = [
  ...generatedAuthorityPages,
  ...generatedV2SeasonalPages,
  ...generatedDestinationPages,
  ...generatedPlanningPages,
  ...generatedComparisonPages,
  ...v7HubProgrammaticPages,
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
    title: "Florida Weekend Getaways | Beaches, Cruises & Cheap Travel Ideas",
    metaDescription:
      "Discover Florida weekend getaway ideas including beaches, cruises, hotels, attractions, and affordable short trips across the state.",
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
    title: "Best Time To Visit Florida | Weather, Deals, Seasons & Trip Tips",
    metaDescription:
      "Learn the best time to visit Florida for weather, flights, hotels, cruises, beaches, attractions, events, family trips, and weekend getaways.",
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
  if (page.slug === "florida-travel-deals" || page.slug === "florida-travel-guide") {
    return [
      { label: "Home", href: "/" },
      { label: page.h1, href: `/${page.slug}` }
    ];
  }

  return [
    { label: "Home", href: "/" },
    { label: "Florida Travel Guide", href: "/florida-travel-guide" },
    { label: page.h1, href: `/${page.slug}` }
  ];
}
