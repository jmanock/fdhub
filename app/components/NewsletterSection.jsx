import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-panel">
        <div>
          <p className="eyebrow">Free alerts</p>
          <h2 id="newsletter-title">Get Florida Travel Deals & Vacation Ideas</h2>
          <p>
            Weekly Florida travel ideas, weekend getaways, hotel searches, cruise deals, flight
            alerts, and local things to do.
          </p>
          <p className="newsletter-trust">Free. No spam. Prices and offers can change quickly.</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
