import Link from "next/link";

export const metadata = {
  title: "Editorial Policy | Florida Deals Hub",
  description:
    "Read the Florida Deals Hub editorial policy for travel guides, local deal pages, source checks, affiliate disclosure, and content updates.",
  alternates: {
    canonical: "https://floridadealshub.com/editorial-policy"
  }
};

export default function EditorialPolicyPage() {
  return (
    <main className="section-pad simple-page">
      <article className="content-card">
        <p className="eyebrow">Editorial policy</p>
        <h1>Editorial Policy</h1>
        <p>
          Florida Deals Hub is built as a Florida travel and local deals resource. We organize
          guides, destination pages, comparison pages, and network links to help visitors choose
          where to look next for flights, hotels, cruises, attractions, restaurants, events, and
          local activities.
        </p>
        <p>
          Hub content is informational and routing-focused. We avoid fake scarcity, unsupported
          savings claims, fake countdowns, and pricing claims that cannot be maintained. When a
          page mentions prices, availability, schedules, or offers, visitors should confirm current
          details with the booking provider or official source.
        </p>
        <h2>How trip reality guides are researched</h2>
        <p>
          Trip reality guides separate durable planning advice from details that can change. We
          consult official city, airport, port, weather, transportation, attraction, cruise-line,
          and technology-provider sources where they are relevant. Source links appear on the
          guide so readers can verify current rules, schedules, alerts, and service limitations.
        </p>
        <p>
          We do not present invented trips, unnamed personal experience, or unverified prices as
          fact. Practical judgments are framed as tradeoffs, not universal promises. A guide&apos;s
          editorial review date is tracked separately from live conditions, whose own timestamps
          and source labels show when that data was retrieved.
        </p>
        <p>
          Some links may be sponsored or affiliate links. Florida Deals Hub may earn a commission when visitors
          book or buy through those links, at no extra cost to them. Affiliate
          relationships do not change the goal of the Hub: helping travelers and locals find the
          most relevant Florida category or guide page. Affiliate suggestions must fit the planning
          context, disclose the relationship, and explain material limitations. They do not replace
          an editorial recommendation or make a product suitable for every traveler.
        </p>
        <h2>Updates and corrections</h2>
        <p>
          Guides are reviewed when official guidance changes, live-data integrations change, a
          linked service changes, or reader feedback identifies a material issue. Cosmetic edits do
          not receive a false new freshness date. Corrections are made in the article and recorded
          in the network&apos;s editorial review process.
        </p>
        <p>
          To report an issue or correction, contact{" "}
          <a href="mailto:hello@floridadealshub.com">hello@floridadealshub.com</a>.
        </p>
        <p>
          <Link href="/how-we-find-deals">See how we find and organize deals</Link>
        </p>
      </article>
    </main>
  );
}
