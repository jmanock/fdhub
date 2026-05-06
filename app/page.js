import Script from "next/script";
import NewsletterSection from "./components/NewsletterSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  baseUrl,
  expediaHotelCards,
  homepageFaqs,
  homepageSeoParagraphs,
  lastUpdatedLabel,
  pillars,
  planTripCards,
  popularSearchLinks,
  sites,
  topPicks,
  tripRouterCards
} from "./lib/network";

const trust = [
  ["Curated Florida Deals", "A focused network built around travel, savings, and things to do across the state."],
  ["One Connected Network", "Four niche sites make it easier to find the kind of deal you actually want."],
  ["Free Deal Alerts", "Join once and watch for timely savings on trips, stays, cruises, and local plans."],
  ["Built for Travelers & Locals", "Useful for fly-ins, weekenders, families, staycationers, and everyday Florida life."]
];

const homeItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top Florida Deal Picks Right Now",
  url: baseUrl,
  itemListElement: topPicks.map((pick, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "WebPage",
      name: pick.title,
      description: `${pick.value}: ${pick.copy}`,
      url: pick.href
    }
  }))
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Updated: {lastUpdatedLabel}</p>
            <h1>Find the Best Deals Across Florida</h1>
            <p className="hero-subhead">
              Flights, hotels, cruises, local events, restaurants, attractions, and weekend
              getaways - all connected through Florida Deals Hub.
            </p>
            <div className="hero-actions" aria-label="Explore Florida deals categories">
              <a href={sites.flights}>Find Flight Deals</a>
              <a href={sites.hotels}>Compare Hotel Deals</a>
              <a href={sites.cruises}>Browse Cruise Deals</a>
              <a href={sites.local}>Explore Local Deals</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Florida Deals Hub category preview cards">
            {pillars.map((pillar, index) => (
              <a className={`stack-card card-${index + 1}`} href={pillar.href} key={pillar.title}>
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  width="900"
                  height="620"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span>{pillar.badge}</span>
                <strong>{pillar.title.replace("Florida ", "")}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="trip-router section-pad" aria-labelledby="trip-router-title">
          <div className="section-heading">
            <p className="eyebrow">Plan with the network</p>
            <h2 id="trip-router-title">Choose Your Deal Type</h2>
          </div>
          <div className="router-card-grid">
            {tripRouterCards.map((card) => (
              <article className="router-card" key={card.title}>
                <span className="router-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <a href={card.href}>{card.cta}</a>
              </article>
            ))}
          </div>
          <div className="trust-notes" aria-label="Florida Deals Hub trust notes">
            <span>Curated Florida travel deals</span>
            <span>Updated regularly</span>
            <span>Prices and availability may change</span>
            <span>Confirm current details with the source</span>
          </div>
        </section>

        <section className="preview section-pad" aria-labelledby="preview-title">
          <div className="section-heading">
            <p className="eyebrow">Curated routes</p>
            <h2 id="preview-title">Top Florida Deal Picks Right Now</h2>
          </div>
          <div className="preview-grid">
            {topPicks.map((pick) => (
              <a className={`preview-card ${pick.tone}`} href={pick.href} key={pick.title}>
                <span>{pick.label}</span>
                <h3>{pick.title}</h3>
                <p className="pick-value">{pick.value}</p>
                <p>{pick.copy}</p>
                <strong className="top-pick-cta">{pick.cta}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="home-seo section-pad" aria-labelledby="home-seo-title">
          <div className="content-card">
            <p className="eyebrow">Florida travel planning</p>
            <h2 id="home-seo-title">Start planning with the right Florida deal source</h2>
            {homepageSeoParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="plan-trip section-pad" aria-labelledby="plan-title">
          <div className="section-heading">
            <p className="eyebrow">Trip routes</p>
            <h2 id="plan-title">Plan Your Florida Trip</h2>
          </div>
          <div className="router-card-grid">
            {planTripCards.map((card) => (
              <article className="router-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <a href={card.href}>{card.title}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-band section-pad" aria-labelledby="why-title">
          <div className="section-heading compact">
            <p className="eyebrow">Why it works</p>
            <h2 id="why-title">Why Florida Deals Hub</h2>
          </div>
          <div className="trust-grid">
            {trust.map(([title, copy]) => (
              <article className="trust-item" key={title}>
                <span aria-hidden="true"></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pillars section-pad" aria-labelledby="network-title">
          <div className="section-heading">
            <p className="eyebrow">The network</p>
            <h2 id="network-title">Explore the Florida Deals Network</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <div className="pillar-image">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    width="900"
                    height="620"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{pillar.badge}</span>
                </div>
                <div className="pillar-body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                  <a href={pillar.href}>{pillar.button}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="popular-searches section-pad" aria-labelledby="popular-title">
          <div className="section-heading compact">
            <p className="eyebrow">Popular searches</p>
            <h2 id="popular-title">Popular Florida Deal Searches</h2>
          </div>
          <div className="popular-link-grid">
            {popularSearchLinks.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
        </section>

        <section className="faq-section section-pad" aria-labelledby="home-faq-title">
          <div className="section-heading compact">
            <p className="eyebrow">Helpful answers</p>
            <h2 id="home-faq-title">Florida Deals Hub FAQ</h2>
          </div>
          <div className="faq-list">
            {homepageFaqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="booking-hotels section-pad" aria-labelledby="booking-title">
          <div className="section-heading">
            <p className="eyebrow">Optional hotel planning</p>
            <h2 id="booking-title">Find Florida Hotels</h2>
          </div>
          <div className="router-card-grid">
            {expediaHotelCards.map((hotel) => (
              <article className="router-card booking-card" key={hotel.destination}>
                <h3>{hotel.title}</h3>
                <p>{hotel.copy}</p>
                <a
                  href={hotel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hotel-destination={hotel.destination}
                  data-hotel-provider="expedia"
                >
                  {hotel.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <NewsletterSection />
      </main>

      <SiteFooter />
      <Script id="home-top-picks-schema" type="application/ld+json">
        {JSON.stringify(homeItemListSchema)}
      </Script>
      <Script id="home-faq-schema" type="application/ld+json">
        {JSON.stringify(homeFaqSchema)}
      </Script>
    </>
  );
}
