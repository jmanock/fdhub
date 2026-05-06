import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-panel">
        <div>
          <p className="eyebrow">Free alerts</p>
          <h2 id="newsletter-title">Get Florida Deals Delivered</h2>
          <p>
            Free alerts for flights, hotels, cruises, local deals, weekend getaways, and things to
            do in Florida.
          </p>
          <p className="newsletter-trust">Free. No spam. Deals and prices can change quickly.</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
