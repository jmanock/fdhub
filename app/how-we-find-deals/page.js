import Link from "next/link";

export const metadata = {
  title: "How We Find Deals | Florida Deals Hub",
  description:
    "Learn how Florida Deals Hub organizes Florida travel guides, deal categories, destination pages, and network links for flights, hotels, cruises, and local deals.",
  alternates: {
    canonical: "https://floridadealshub.com/how-we-find-deals"
  }
};

export default function HowWeFindDealsPage() {
  return (
    <main className="section-pad simple-page">
      <article className="content-card">
        <p className="eyebrow">How it works</p>
        <h1>How We Find And Organize Deals</h1>
        <p>
          Florida Deals Hub does not try to be one giant feed. The Hub organizes Florida travel
          research into useful entry points: statewide guides, destination pages, seasonal planning,
          comparison pages, and category routes for flights, hotels, cruises, and local deals.
        </p>
        <p>
          When a visitor needs airfare, the Hub routes them to Florida Flight Deals. When the trip
          depends on a stay, it routes to Florida Hotel Deals. Cruise travelers can move to Florida
          Cruise Deals, while restaurants, attractions, events, and things to do belong on Local
          Deals Florida.
        </p>
        <p>
          We also organize pages by destination and trip type so visitors can compare options
          before choosing a vertical site. Examples include Orlando family trips, Miami cruise
          planning, Tampa weekend ideas, Florida beach vacations, budget travel, and seasonal
          getaways.
        </p>
        <p>
          Prices, dates, schedules, and availability can change quickly. Always verify current
          details with the booking provider, airline, hotel, cruise line, restaurant, venue,
          attraction, event organizer, or official source.
        </p>
        <p>
          <Link href="/editorial-policy">Read the editorial policy</Link>
        </p>
      </article>
    </main>
  );
}
