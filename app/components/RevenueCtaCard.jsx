import Link from "next/link";

export default function RevenueCtaCard({ eyebrow, headline, benefits, href, cta, trust = "Compare current prices, availability, and provider terms before booking." }) {
  const action = href.startsWith("/") ? <Link className="affiliate-cta" href={href}>{cta}</Link> : <a className="affiliate-cta" href={href}>{cta}</a>;
  return (
    <article className="content-card revenue-cta-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{headline}</h3>
      <ul>{benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      {action}
      <p className="affiliate-disclosure">{trust}</p>
    </article>
  );
}
