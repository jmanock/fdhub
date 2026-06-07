import { pageImages, sites } from "./network";
import { vacationRecommendations } from "./vacationBuilder";

const networkLinks = {
  general: [
    ["Compare Flights", sites.flights],
    ["Compare Hotels", sites.hotels],
    ["Find Local Activities", sites.local],
    ["Browse Vacation Packages", "/vacation-packages"]
  ],
  cruise: [
    ["Browse Cruise Deals", sites.cruises],
    ["Compare Port Hotels", `${sites.hotels}/hotels-near-florida-cruise-ports`],
    ["Compare Flights", sites.flights],
    ["Find Port Activities", sites.local]
  ],
  orlando: [
    ["Find Orlando Flights", `${sites.flights}/cheap-flights-from-orlando`],
    ["Compare Orlando Hotels", `${sites.hotels}/hotels-near-disney`],
    ["Find Orlando Activities", `${sites.local}/things-to-do-in-orlando`],
    ["View Orlando Packages", "/destinations/orlando/vacation-packages"]
  ]
};

export const eventTrendSources = [
  { source: "Google Trends", category: "search_demand", reviewRequired: true, useFor: ["trend priority", "destination interest", "seasonal demand"] },
  { source: "Travel News", category: "editorial_news", reviewRequired: true, useFor: ["new event candidates", "destination trends"] },
  { source: "Cruise Industry News", category: "cruise_news", reviewRequired: true, useFor: ["ship launches", "inaugural sailings", "port changes"] },
  { source: "Theme Park News", category: "theme_park_news", reviewRequired: true, useFor: ["special events", "new attractions", "grand openings"] },
  { source: "Airline News", category: "airline_news", reviewRequired: true, useFor: ["new routes", "airport changes", "event flight planning"] },
  { source: "Tourism Announcements", category: "official_tourism", reviewRequired: true, useFor: ["festivals", "destination events", "official schedules"] }
];

const hubs = [
  {
    slug: "world-cup-travel",
    title: "World Cup Travel",
    description: "Build a complete World Cup trip around verified match schedules, host-city hotels, flights, transportation, family plans, and things to do.",
    image: pageImages.calendar,
    imageAlt: "World Cup event travel planning with flights hotels and activities",
    category: "Sporting Event",
    audience: "Families, supporters, and weekend travelers",
    travelWindow: "Match dates and host-city schedules vary",
    packageStyles: ["Family Vacation", "Weekend Getaway", "Adventure Vacation"],
    destinations: ["Miami", "Orlando", "Fort Lauderdale"],
    planningSteps: ["Verify the official match and venue schedule", "Choose a hotel area with practical venue transportation", "Compare flights before locking the match date", "Plan one flexible host-city activity day"],
    schedule: ["Official schedule and venue check", "Flight and hotel booking window", "Transportation and activity planning", "Final ticket and entry requirement review"],
    links: networkLinks.general,
    subpages: [
      ["travel-guide", "World Cup Travel Guide", "Plan the complete trip around verified matches, host cities, hotels, flights, transportation, and activities."],
      ["hotels-near-venues", "Hotels Near World Cup Venues", "Compare hotel areas by venue access, transportation, neighborhood fit, and complete stay cost."],
      ["flights-to-host-cities", "Flights To World Cup Cities", "Compare airports, flexible dates, route timing, and ground transportation before choosing a flight."],
      ["family-vacation-packages", "Family World Cup Vacation Packages", "Build a family match trip with realistic hotel, flight, activity, transportation, and rest-day planning."],
      ["weekend-packages", "World Cup Weekend Packages", "Plan a compact match weekend around airport timing, hotel location, venue access, and one host-city activity."],
      ["things-to-do-near-stadiums", "Things To Do Near World Cup Stadiums", "Add flexible attractions, family activities, and dining areas around the verified venue schedule."],
      ["restaurants-near-venues", "Best Restaurants Near World Cup Venues", "Choose practical dining areas around hotel location, venue transportation, and reservation demand."]
    ]
  },
  {
    slug: "super-bowl-travel",
    title: "Super Bowl Travel",
    description: "Plan Super Bowl travel around the confirmed host city, event-week schedule, hotels, flights, transportation, and local activities.",
    image: pageImages.calendar, imageAlt: "Super Bowl travel package planning", category: "Sporting Event",
    audience: "Weekend travelers, groups, and football fans", travelWindow: "Confirm the official host-city event schedule",
    packageStyles: ["Weekend Getaway", "Luxury Vacation", "Adventure Vacation"], destinations: ["Miami", "Tampa"],
    planningSteps: ["Confirm official event locations", "Compare hotel areas against transportation", "Protect arrival time from delays", "Budget for event-week demand"],
    schedule: ["Host-city confirmation", "Hotel and flight comparison", "Event-week transportation plan", "Local activity reservations"],
    links: networkLinks.general,
    subpages: [
      ["travel-packages", "Super Bowl Travel Packages", "Compare complete event-weekend plans with hotels, flights, transportation, and local activities."],
      ["hotels-near-events", "Hotels Near Super Bowl Events", "Compare hotel areas around official events, transportation, dining, and airport access."],
      ["flights-to-host-city", "Flights To The Super Bowl Host City", "Compare flight timing, nearby airports, baggage, and event-week ground transportation."],
      ["weekend-packages", "Super Bowl Weekend Packages", "Build a compact Friday-to-Monday plan around the game and related events."],
      ["things-to-do-during-super-bowl-week", "Things To Do During Super Bowl Week", "Find flexible attractions, dining, and local plans around the official event schedule."]
    ]
  },
  {
    slug: "spring-break-travel",
    title: "Florida Spring Break Travel",
    description: "Compare Florida spring break destinations, family-friendly beach trips, cruises, theme parks, hotels, flights, and complete vacation packages.",
    image: pageImages.clearwater, imageAlt: "Florida spring break beach vacation planning", category: "Seasonal Travel",
    audience: "Families, couples, students, and beach travelers", travelWindow: "School and college break dates vary",
    packageStyles: ["Beach", "Family Vacation", "Cruise"], destinations: ["Clearwater Beach", "Miami", "Orlando", "Fort Lauderdale"],
    planningSteps: ["Confirm school or college dates", "Choose the right destination atmosphere", "Compare complete hotel and transportation costs", "Keep a weather backup plan"],
    schedule: ["Choose destination style", "Compare flights and hotels", "Add cruise or attraction options", "Confirm local policies and reservations"],
    links: networkLinks.general,
    subpages: [
      ["florida-destinations", "Florida Spring Break Destinations", "Compare beach, theme park, city, cruise, and family spring break options."],
      ["family-friendly-options", "Family-Friendly Spring Break Options", "Build a calmer spring break around family hotels, beaches, attractions, and flexible days."],
      ["beach-vacation-packages", "Spring Break Beach Vacation Packages", "Compare Florida beach packages with hotels, flights, activities, and realistic costs."],
      ["cruise-packages", "Spring Break Cruise Packages", "Plan spring break cruises with port hotels, flights, transfers, and pre-cruise activities."]
    ]
  },
  {
    slug: "summer-vacation-travel", title: "Summer Vacation Travel", description: "Plan Florida summer vacations around beaches, cruises, theme parks, family schedules, heat, storms, and indoor backups.",
    image: pageImages.summer, imageAlt: "Florida summer vacation event travel", category: "Seasonal Travel", audience: "Families and longer-stay travelers", travelWindow: "Late May through August; school calendars vary",
    packageStyles: ["Beach", "Family Vacation", "Adventure Vacation"], destinations: ["Orlando", "Clearwater Beach", "Destin"], planningSteps: ["Choose an anchor destination", "Balance outdoor time with heat backups", "Compare longer-stay hotel costs", "Keep travel days flexible"], schedule: ["Early planning", "Hotel and flight comparison", "Activity reservations", "Weather and packing review"], links: networkLinks.general, subpages: []
  },
  {
    slug: "christmas-travel", title: "Florida Christmas Travel", description: "Plan Christmas travel around Florida holiday events, theme parks, cruises, hotels, flights, family schedules, and seasonal activities.",
    image: pageImages.calendar, imageAlt: "Florida Christmas holiday event travel", category: "Holiday Travel", audience: "Families and multi-generational groups", travelWindow: "Holiday dates and official event schedules vary",
    packageStyles: ["Family Vacation", "Cruise", "Theme Parks"], destinations: ["Orlando", "Miami", "St. Augustine"], planningSteps: ["Confirm official holiday event dates", "Compare peak-date travel costs", "Plan meals and reservations early", "Leave room for family schedule changes"], schedule: ["Event calendar review", "Flight and hotel booking", "Meal and attraction reservations", "Final schedule confirmation"], links: networkLinks.general, subpages: []
  },
  {
    slug: "new-years-travel", title: "Florida New Year's Travel", description: "Compare Florida New Year's beach, city, cruise, theme park, hotel, flight, and weekend package ideas.",
    image: pageImages.miami, imageAlt: "Florida New Years travel and city event planning", category: "Holiday Travel", audience: "Couples, groups, and families", travelWindow: "Confirm official New Year's event schedules",
    packageStyles: ["Weekend Getaway", "Luxury Vacation", "Cruise"], destinations: ["Miami", "Orlando", "Key West"], planningSteps: ["Choose the celebration style", "Confirm official event details", "Compare hotel location and transportation", "Protect the return travel day"], schedule: ["Destination choice", "Hotel and flight booking", "Official event confirmation", "Transportation and dining plan"], links: networkLinks.general, subpages: []
  },
  {
    slug: "disney-special-events", title: "Disney Special Events Travel", description: "Plan Orlando travel around verified Disney festivals, holiday events, ticketed experiences, hotels, flights, and family vacation packages.",
    image: pageImages.themePark, imageAlt: "Orlando theme park special event travel planning", category: "Theme Park Event", audience: "Families and theme park travelers", travelWindow: "Confirm current dates and admission requirements with the official event source",
    packageStyles: ["Theme Parks", "Family Vacation"], destinations: ["Orlando"], planningSteps: ["Verify the official event calendar", "Understand separate-ticket requirements", "Choose a practical hotel area", "Balance event nights with rest time"], schedule: ["Official event verification", "Ticket and hotel comparison", "Flight and transportation plan", "Dining and rest-day plan"], links: networkLinks.orlando,
    subpages: [["festivals", "Disney Festival Travel", "Plan around verified festival dates, admission rules, hotels, flights, dining, and family pacing."], ["holiday-events", "Disney Holiday Events Travel", "Build an Orlando holiday trip around verified theme park events and complete vacation logistics."], ["new-attractions", "Disney New Attractions Travel", "Plan a trip around confirmed openings without relying on rumored dates or unsupported claims."]]
  },
  {
    slug: "universal-events", title: "Universal Orlando Events Travel", description: "Plan Universal Orlando event travel around verified special events, new attractions, hotels, flights, and complete family packages.",
    image: pageImages.themePark, imageAlt: "Universal Orlando special event travel planning", category: "Theme Park Event", audience: "Families, groups, and theme park fans", travelWindow: "Confirm dates and admission requirements with the official event source",
    packageStyles: ["Theme Parks", "Family Vacation", "Weekend Getaway"], destinations: ["Orlando"], planningSteps: ["Verify official dates and tickets", "Choose hotel access strategy", "Compare Orlando airport options", "Build recovery time into the itinerary"], schedule: ["Official event verification", "Hotel and ticket comparison", "Flight and activity plan", "Final operating-hours review"], links: networkLinks.orlando,
    subpages: [["special-events", "Universal Special Events Travel", "Plan around verified Universal Orlando special events, hotels, flights, and park-day pacing."], ["new-attractions", "Universal New Attractions Travel", "Build a trip around confirmed attraction openings and verified operating details."], ["grand-openings", "Universal Grand Opening Travel", "Plan hotels, flights, transportation, and flexible park days around a confirmed grand opening."]]
  },
  {
    slug: "cruise-launch-events", title: "Cruise Launch Events", description: "Plan travel around verified new-ship launches, inaugural sailings, Florida cruise ports, hotels, flights, and pre-cruise activities.",
    image: pageImages.cruisePort, imageAlt: "New cruise ship launch event travel planning", category: "Cruise Event", audience: "Cruise fans, families, and inaugural-sailing travelers", travelWindow: "Confirm launch and inaugural sailing dates with the cruise line",
    packageStyles: ["Cruise", "Luxury Vacation", "Family Vacation"], destinations: ["Miami", "Port Canaveral", "Fort Lauderdale"], planningSteps: ["Verify the cruise-line announcement", "Confirm departure port and terminal", "Book a protective pre-cruise hotel night", "Compare inaugural-sailing extras carefully"], schedule: ["Official launch confirmation", "Sailing and cabin comparison", "Port hotel and flight plan", "Final cruise document review"], links: networkLinks.cruise, subpages: []
  },
  {
    slug: "trending-destinations", title: "Trending Travel Destinations", description: "Compare emerging destination and vacation trends through practical budgets, routes, packages, travel timing, and verified planning guidance.",
    image: pageImages.roadTrip, imageAlt: "Trending travel destination discovery and vacation planning", category: "Travel Trend", audience: "Travelers discovering where to go next", travelWindow: "Trend interest changes; verify current travel guidance and provider availability",
    packageStyles: ["Adventure Vacation", "Family Vacation", "Cruise"], destinations: ["Miami", "Orlando", "Fort Lauderdale"], planningSteps: ["Understand why the destination is gaining interest", "Compare complete trip costs", "Check current travel guidance", "Connect the trend to a practical package"], schedule: ["Trend signal review", "Destination fit comparison", "Budget and route planning", "Final provider verification"], links: networkLinks.general, subpages: []
  }
];

const trends = [
  ["why-travelers-are-comparing-portugal", "Why Travelers Are Comparing Portugal", "A trend-planning guide for Florida travelers comparing Portugal flights, timing, trip length, and complete vacation costs.", pageImages.roadTrip, "International Destination Trend", ["Adventure Vacation", "Luxury Vacation"]],
  ["top-caribbean-destinations-this-year", "Top Caribbean Destinations To Compare This Year", "Compare Caribbean destination styles through Florida cruise ports, flight options, trip length, and family fit.", pageImages.cruisePort, "Cruise Destination Trend", ["Cruise", "Beach"]],
  ["trending-family-vacation-destinations", "Trending Family Vacation Destinations", "Compare destinations families are considering by budget, travel time, activities, weather, and complete-trip fit.", pageImages.familyTrip, "Family Destination Trend", ["Family Vacation", "Theme Parks"]],
  ["best-cruise-destinations-this-season", "Best Cruise Destinations To Compare This Season", "Compare cruise destination styles from Florida ports without relying on unsupported price or availability claims.", pageImages.cruisePort, "Cruise Destination Trend", ["Cruise", "Beach"]]
];

export const eventTravelHubs = hubs.map((item) => ({ ...item, type: "event_hub", parentSlug: null, focus: item.description }));

export const eventTravelSubpages = eventTravelHubs.flatMap((hub) => hub.subpages.map(([slug, title, focus]) => ({
  ...hub,
  slug,
  title,
  focus,
  description: focus,
  type: "event_guide",
  parentSlug: hub.slug,
  subpages: []
})));

export const trendingDestinationPages = trends.map(([slug, title, description, image, category, packageStyles]) => ({
  slug, title, description, focus: description, image, imageAlt: `${title} travel trend planning`, category, packageStyles,
  audience: "Travelers comparing emerging vacation ideas", travelWindow: "Use current official travel guidance and provider availability",
  destinations: ["Miami", "Orlando", "Fort Lauderdale"], planningSteps: ["Define the trip purpose", "Compare complete transportation costs", "Choose a practical travel window", "Connect the trend to a bookable vacation plan"],
  schedule: ["Trend review", "Destination comparison", "Budget and route planning", "Final provider verification"], links: networkLinks.general, type: "trend", parentSlug: "trending-destinations", subpages: []
}));

export const allEventTravelPages = [...eventTravelHubs, ...eventTravelSubpages, ...trendingDestinationPages];
export const eventTravelPageMap = Object.fromEntries(allEventTravelPages.map((item) => [`${item.parentSlug ? `${item.parentSlug}/` : ""}${item.slug}`, item]));

export function getEventTravelPage(parts) {
  return eventTravelPageMap[parts.join("/")] || null;
}

export function eventTravelPath(page) {
  return `/events/${page.parentSlug ? `${page.parentSlug}/` : ""}${page.slug}`;
}

export function getEventRecommendations(page, limit = 4) {
  return vacationRecommendations
    .map((item) => ({ item, score: item.styles.filter((style) => page.packageStyles.includes(style)).length * 3 + (page.destinations.includes(item.destination) ? 5 : 0) }))
    .sort((a, b) => b.score - a.score || a.item.estimatedCost - b.item.estimatedCost)
    .slice(0, limit)
    .map(({ item }) => item);
}
