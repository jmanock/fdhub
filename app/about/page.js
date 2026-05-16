import Link from "next/link";

export const metadata = {
  title: "About Florida Deals Hub | Florida Travel & Local Deals Network",
  description:
    "Learn how Florida Deals Hub organizes Florida flights, hotels, cruises, local deals, destination guides, and travel planning resources.",
  alternates: {
    canonical: "https://floridadealshub.com/about"
  }
};

export default function AboutPage() {
  return (
    <main className="section-pad simple-page">
      <article className="content-card">
        <p className="eyebrow">About</p>
        <h1>Florida Deals Hub</h1>
        <p>
          Florida Deals Hub is the parent home for a focused network of Florida savings sites
          covering flights, hotels, cruises, restaurants, attractions, events, and weekend ideas.
        </p>
        <p>
          The Hub exists to help travelers and locals start in the right place, understand their
          options, and then move quickly to the niche site that matches what they want to compare,
          book, or explore.
        </p>
        <p>
          Content is organized by city, season, trip type, and category. Prices, schedules,
          availability, event details, and travel terms may change, so visitors should confirm
          current information with booking providers, official sources, venues, restaurants,
          airlines, hotels, cruise lines, or attraction operators before making plans.
        </p>
        <p>
          Start with the <a href="https://flightdealsflorida.org">flight deals</a>, browse{" "}
          <a href="https://hoteldealsflorida.org">hotel deals</a>, compare{" "}
          <a href="https://cruisedealsflorida.org">cruise deals</a>, or find{" "}
          <a href="https://localdealsflorida.org">local Florida deals</a>.
        </p>
        <p>
          <Link href="/">Return to Florida Deals Hub</Link>
        </p>
      </article>
    </main>
  );
}
