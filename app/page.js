import NewsletterSection from "./components/NewsletterSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  expediaHotelCards,
  pillars,
  planTripLinks,
  popularPages,
  sites,
  tripRouterCards
} from "./lib/network";

const trust = [
  ["Curated Florida Deals", "A focused network built around travel, savings, and things to do across the state."],
  ["One Connected Network", "Four niche sites make it easier to find the kind of deal you actually want."],
  ["Free Deal Alerts", "Join once and watch for timely savings on trips, stays, cruises, and local plans."],
  ["Built for Travelers & Locals", "Useful for fly-ins, weekenders, families, staycationers, and everyday Florida life."]
];

const previews = [
  ["Flight Deal", "Orlando to New York weekend fare watch", sites.flights, "From Florida airports", "sky"],
  ["Hotel Deal", "Gulf Coast resort staycation spotlight", sites.hotels, "Beach and family stays", "sand"],
  ["Cruise Deal", "3-night Bahamas cruise from Port Canaveral", sites.cruises, "Short sailings and escapes", "sea"],
  ["Local Deal", "Family attractions and restaurant specials", sites.local, "Events, dining, and fun", "sun"]
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Flights. Stays. Cruises. Local savings.</p>
            <h1>Find the Best Deals Across Florida</h1>
            <p className="hero-subhead">
              Flights, hotels, cruises, local events, restaurants, attractions, and weekend
              getaways - all connected through Florida Deals Hub.
            </p>
            <div className="hero-actions" aria-label="Explore Florida deals categories">
              <a href={sites.flights}>Explore Flights</a>
              <a href={sites.hotels}>Browse Hotels</a>
              <a href={sites.cruises}>See Cruises</a>
              <a href={sites.local}>Find Local Deals</a>
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
            <h2 id="trip-router-title">Start Your Florida Trip</h2>
          </div>
          <div className="router-card-grid">
            {tripRouterCards.map((card) => (
              <article className="router-card" key={card.title}>
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

        <section className="booking-hotels section-pad" aria-labelledby="booking-title">
          <div className="section-heading">
            <p className="eyebrow">Hotel planning</p>
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

        <section className="plan-trip section-pad" aria-labelledby="plan-title">
          <div className="section-heading compact">
            <p className="eyebrow">Quick routes</p>
            <h2 id="plan-title">Plan Your Florida Trip</h2>
          </div>
          <div className="popular-link-grid">
            {planTripLinks.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
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

        <section className="preview section-pad" aria-labelledby="preview-title">
          <div className="section-heading">
            <p className="eyebrow">A quick look</p>
            <h2 id="preview-title">Deal previews from across the network</h2>
          </div>
          <div className="preview-grid">
            {previews.map(([type, title, href, detail, tone]) => (
              <a className={`preview-card ${tone}`} href={href} key={type}>
                <span>{type}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="popular-searches section-pad" aria-labelledby="popular-title">
          <div className="section-heading compact">
            <p className="eyebrow">Popular searches</p>
            <h2 id="popular-title">Popular Florida Deal Searches</h2>
          </div>
          <div className="popular-link-grid">
            {popularPages.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
        </section>

        <NewsletterSection />
      </main>

      <SiteFooter />
    </>
  );
}
