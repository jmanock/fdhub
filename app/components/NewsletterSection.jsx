import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection({
  eyebrow = "Free alerts",
  title = "Get Florida Travel Deals & Vacation Ideas",
  copy = "Weekly Florida travel ideas, weekend getaways, hotel searches, cruise deals, flight alerts, and local things to do.",
  buttonLabel = "Send Me Deals"
}) {
  return (
    <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-panel">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="newsletter-title">{title}</h2>
          <p>{copy}</p>
          <p className="newsletter-trust">Free. No spam. Prices and offers can change quickly.</p>
        </div>
        <NewsletterForm buttonLabel={buttonLabel} />
      </div>
    </section>
  );
}
