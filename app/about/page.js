import Link from "next/link";

export const metadata = {
  title: "About Florida Deals Hub",
  description: "Learn about Florida Deals Hub and the connected Florida deals network."
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
          The hub exists to help travelers and locals start in the right place, then move quickly
          to the niche site that matches what they want to book or explore.
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
