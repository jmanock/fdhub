import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-panel">
        <div>
          <p className="eyebrow">Free alerts</p>
          <h2 id="newsletter-title">Get the Best Florida Deals Delivered</h2>
          <p>
            Get daily Florida deals for flights, hotels, cruises, local savings, and weekend
            getaways. Do not miss limited-time offers.
          </p>
          <p className="newsletter-trust">Free. No spam. Cancel anytime.</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
