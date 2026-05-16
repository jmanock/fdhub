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
        <p>
          Some links may be affiliate links. Florida Deals Hub may earn a commission when visitors
          book through those links, which helps keep the network and deal alerts free. Affiliate
          relationships do not change the goal of the Hub: helping travelers and locals find the
          most relevant Florida category or guide page.
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
