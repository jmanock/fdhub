export default function WorldCupCTA({ recommendation }) {
  if (!recommendation) return null;

  return (
    <section className="world-cup-cta section-pad" aria-labelledby="world-cup-cta-title">
      <article className="content-card car-rental-card">
        <div>
          <p className="eyebrow">World Cup Explorer 2026</p>
          <h2 id="world-cup-cta-title">{recommendation.title}</h2>
          <p>{recommendation.description}</p>
          <p className="affiliate-disclosure">Some links on this site may earn us a commission at no extra cost to you.</p>
        </div>
        <a
          className="affiliate-cta"
          href={recommendation.affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          data-affiliate-program={recommendation.network}
          data-affiliate="world-cup-explorer"
          data-advertiser={recommendation.advertiser}
          data-item-title={recommendation.itemTitle}
          data-category={recommendation.category}
        >
          {recommendation.cta}
        </a>
      </article>
    </section>
  );
}
