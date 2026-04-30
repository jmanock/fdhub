import Link from "next/link";

export const metadata = {
  title: "Terms | Florida Deals Hub",
  description: "Terms of use for Florida Deals Hub."
};

export default function TermsPage() {
  return (
    <main className="section-pad simple-page">
      <article className="content-card">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
        <p>
          Florida Deals Hub provides links, summaries, and alerts related to Florida travel,
          lifestyle, and local savings. Deals may change, expire, or vary by provider.
        </p>
        <p>
          Visitors are responsible for reviewing final prices, restrictions, fees, dates, and terms
          on the provider or niche network site before booking or purchasing.
        </p>
        <p>
          The network may link to third-party websites. Florida Deals Hub is not responsible for the
          content, availability, or policies of third-party sites.
        </p>
        <p>
          <Link href="/">Return home</Link>
        </p>
      </article>
    </main>
  );
}
