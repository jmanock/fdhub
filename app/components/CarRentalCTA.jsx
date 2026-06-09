export default function CarRentalCTA({ recommendation }) {
  if (!recommendation) {
    return null;
  }

  return (
    <section className="car-rental-cta section-pad" aria-labelledby="car-rental-cta-title">
      <div className="section-heading">
        <p className="eyebrow">Florida transportation planning</p>
        <h2 id="car-rental-cta-title">{recommendation.guidanceTitle}</h2>
        <p>{recommendation.intro}</p>
      </div>
      <article className="content-card car-rental-card">
        <div>
          <p className="best-for-tag">{recommendation.destination}</p>
          <h3>{recommendation.title}</h3>
          <p>{recommendation.description}</p>
          <ul>
            {recommendation.planningTips.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
          <p className="affiliate-disclosure">Some links on this site may earn us a commission at no extra cost to you.</p>
        </div>
        <a
          className="affiliate-cta"
          href={recommendation.affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          data-affiliate-program={recommendation.network}
          data-affiliate="vipcars"
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
