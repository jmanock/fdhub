export default function AffiliateBookingSection({ recommendations, title = "Planning Time On The Water?" }) {
  if (!recommendations?.length) {
    return null;
  }

  return (
    <section className="affiliate-booking section-pad" aria-labelledby="affiliate-booking-title">
      <div className="section-heading">
        <p className="eyebrow">Contextual booking options</p>
        <h2 id="affiliate-booking-title">{title}</h2>
        <p>Compare available boats, yachts, catamarans, and day charters from trusted providers. Use the trip-planning checks below before booking.</p>
      </div>
      <div className="guide-card-grid">
        {recommendations.map((item) => (
          <article className="guide-card affiliate-booking-card" key={`${item.advertiser}-${item.destination}`}>
            <p className="best-for-tag">{item.destination} water-day planning</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.planningTips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
            <a
              className="affiliate-cta"
              href={item.affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              data-affiliate-program={item.network}
              data-advertiser={item.advertiser}
              data-item-title={item.itemTitle}
              data-category={item.category}
            >
              {item.cta}
            </a>
            <p className="affiliate-disclosure">Some links on this site may earn us a commission at no extra cost to you.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
