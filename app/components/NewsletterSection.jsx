import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-panel">
        <div>
          <p className="eyebrow">Free alerts</p>
          <h2 id="newsletter-title">Get the Best Florida Deals Delivered</h2>
          <p>Join free alerts for flights, hotels, cruises, local deals, and weekend getaways.</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
