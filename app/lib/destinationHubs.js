import { getAllStories } from "./stories";
import { baseUrl, sites } from "./network";

export const destinationHubs = [
  {
    name: "Orlando",
    slug: "orlando",
    description:
      "Theme parks, family hotels, Universal and Disney planning, cheap flights, local activities, and Port Canaveral cruise add-ons.",
    image:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Orlando destination hub with theme parks hotels flights and family vacation planning",
    guides: [
      ["Orlando Travel Guide", "/orlando-travel-guide"],
      ["Disney vs Universal", "/journal/disney-vs-universal"],
      ["Florida Theme Park Guide", "/florida-theme-park-guide"],
      ["Best Florida Family Vacations", "/best-florida-family-vacations"]
    ],
    networkLinks: [
      ["Search Flights To Orlando", "https://flightdealsflorida.org/cheap-flights-from-orlando", "flights"],
      ["Compare Orlando Hotels", "https://hoteldealsflorida.org/cheap-hotels-in-orlando", "hotels"],
      ["Explore Orlando Things To Do", "https://localdealsflorida.org/things-to-do-in-orlando", "local"],
      ["Browse Port Canaveral Cruises", "https://cruisedealsflorida.org/cruises-from-port-canaveral", "cruises"]
    ]
  },
  {
    name: "Miami",
    slug: "miami",
    description:
      "Beaches, cruises from Miami, Miami hotels, flights, boat days, nightlife, restaurants, and pre-cruise planning.",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Miami destination hub with beach hotels cruises flights and local activities",
    guides: [
      ["Miami Travel Guide", "/miami-travel-guide"],
      ["Miami Cruise Port Guide", "/journal/miami-cruise-port-guide-first-time-cruisers"],
      ["Miami Boat Rental Day Guide", "/journal/miami-boat-rental-day-guide"],
      ["What To Do Before A Miami Cruise", "/journal/what-to-do-before-a-miami-cruise"]
    ],
    networkLinks: [
      ["Search Flights To Miami", "https://flightdealsflorida.org/miami-flight-deals", "flights"],
      ["Compare Miami Hotels", "https://hoteldealsflorida.org/miami-beach-hotels", "hotels"],
      ["Browse Cruises From Miami", "https://cruisedealsflorida.org/cruises-from-miami", "cruises"],
      ["Explore Miami Things To Do", "https://localdealsflorida.org/miami-things-to-do", "local"]
    ]
  },
  {
    name: "Key West",
    slug: "key-west",
    description:
      "Florida Keys road trips, island hotels, flights, food, sunsets, fishing, boating, and weekend travel ideas.",
    image:
      "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Key West destination hub with island hotels flights food and water activities",
    guides: [
      ["Key West Travel Guide", "/key-west-travel-guide"],
      ["Key West Weekend Travel Guide", "/journal/key-west-weekend-travel-guide"],
      ["Florida Keys Road Trip Guide", "/florida-keys-road-trip-guide"],
      ["Florida Water Activities Guide", "/florida-water-activities-guide"]
    ],
    networkLinks: [
      ["Search Flights To Key West", "https://flightdealsflorida.org/key-west-flight-deals", "flights"],
      ["Compare Key West Hotels", "https://hoteldealsflorida.org/key-west-hotel-deals", "hotels"],
      ["Explore Water Activities", "https://localdealsflorida.org/florida-water-activities", "local"],
      ["Browse Florida Travel Stories", "/journal", "hub"]
    ]
  },
  {
    name: "Clearwater",
    slug: "clearwater",
    description:
      "Gulf Coast beach weekends, family hotels, Tampa flights, beach comparisons, water activities, and sunset trips.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Clearwater destination hub with Gulf beach hotels Tampa flights and family activities",
    guides: [
      ["Clearwater Travel Guide", "/clearwater-travel-guide"],
      ["Clearwater vs Destin", "/journal/clearwater-vs-destin-beach-trip"],
      ["Best Florida Beaches", "/best-florida-beaches"],
      ["Best Florida Beaches For Families", "/journal/best-florida-beaches-for-families"]
    ],
    networkLinks: [
      ["Search Tampa Flights", "https://flightdealsflorida.org/cheap-flights-from-tampa", "flights"],
      ["Compare Clearwater Hotels", "https://hoteldealsflorida.org/clearwater-beachfront-hotels", "hotels"],
      ["Explore Florida Water Activities", "https://localdealsflorida.org/florida-water-activities", "local"],
      ["Browse Weekend Trips", "/florida-weekend-getaways", "hub"]
    ]
  },
  {
    name: "Destin",
    slug: "destin",
    description:
      "Panhandle beaches, family hotels, fishing trips, boating, outdoor gear, and longer Gulf Coast vacation ideas.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Destin destination hub with family beach hotels fishing boating and Gulf Coast planning",
    guides: [
      ["Destin Florida Guide", "/destin-florida-guide"],
      ["Clearwater vs Destin", "/journal/clearwater-vs-destin-beach-trip"],
      ["Florida Fishing Weekend", "/journal/florida-fishing-weekend-trip-guide"],
      ["Florida Outdoor Weekend Guide", "/journal/florida-outdoor-weekend-guide"]
    ],
    networkLinks: [
      ["Search Destin Flights", "https://flightdealsflorida.org/destin-flight-deals", "flights"],
      ["Compare Destin Hotels", "https://hoteldealsflorida.org/destin-hotel-deals", "hotels"],
      ["Explore Water Activities", "https://localdealsflorida.org/florida-water-activities", "local"],
      ["Browse Outdoor Gear Ideas", "/florida-outdoor-gear-guide", "hub"]
    ]
  },
  {
    name: "St. Augustine",
    slug: "st-augustine",
    description:
      "Historic weekends, beach add-ons, Jacksonville flights, walkable hotels, food, tours, and Northeast Florida road trips.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "St Augustine destination hub with historic streets beaches hotels and weekend travel",
    guides: [
      ["St. Augustine Travel Guide", "/st-augustine-travel-guide"],
      ["St. Augustine Weekend Guide", "/journal/st-augustine-weekend-guide"],
      ["Best Florida Road Trips", "/best-florida-road-trips"],
      ["Florida Weekend Getaways", "/florida-weekend-getaways"]
    ],
    networkLinks: [
      ["Search Jacksonville Flights", "https://flightdealsflorida.org/jacksonville-flight-deals", "flights"],
      ["Compare St. Augustine Hotels", "https://hoteldealsflorida.org/st-augustine-hotel-deals", "hotels"],
      ["Explore Local Ideas", "https://localdealsflorida.org/st-augustine-local-deals", "local"],
      ["Browse Weekend Stories", "/journal/destination-spotlights", "hub"]
    ]
  },
  {
    name: "Tampa",
    slug: "tampa",
    description:
      "Gulf Coast weekends, food, hotels, Tampa flights, cruises, Clearwater add-ons, and local activities.",
    image:
      "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Tampa destination hub with Gulf Coast hotels flights food and cruise planning",
    guides: [
      ["Tampa Travel Guide", "/tampa-travel-guide"],
      ["Tampa Weekend Escape", "/journal/tampa-weekend-escape-story"],
      ["Florida Weekend Getaways", "/florida-weekend-getaways"],
      ["Clearwater Travel Guide", "/clearwater-travel-guide"]
    ],
    networkLinks: [
      ["Search Tampa Flights", "https://flightdealsflorida.org/cheap-flights-from-tampa", "flights"],
      ["Compare Tampa Hotels", "https://hoteldealsflorida.org/tampa-hotel-deals", "hotels"],
      ["Browse Cruises From Tampa", "https://cruisedealsflorida.org/cruises-from-tampa", "cruises"],
      ["Explore Tampa Activities", "https://localdealsflorida.org/tampa-weekend-activities", "local"]
    ]
  }
];

export const destinationHubMap = Object.fromEntries(destinationHubs.map((hub) => [hub.slug, hub]));

export function getDestinationHub(slug) {
  return destinationHubMap[slug] || null;
}

export function getDestinationHubStories(destination, limit = 6) {
  return getAllStories()
    .filter((story) => story.destination === destination || story.relatedDestinations?.includes(destination))
    .slice(0, limit);
}

export function getDestinationHubUrl(hub) {
  return `${baseUrl}/${hub.slug}`;
}
