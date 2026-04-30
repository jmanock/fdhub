import NewsletterForm from "./components/NewsletterForm";

const sites = {
  flights: "https://flightdealsflorida.org",
  hotels: "https://hoteldealsflorida.org",
  cruises: "https://cruisedealsflorida.org",
  local: "https://localdealsflorida.org"
};

const nav = [
  ["Flights", sites.flights],
  ["Hotels", sites.hotels],
  ["Cruises", sites.cruises],
  ["Local Deals", sites.local]
];

const pillars = [
  {
    title: "Florida Flight Deals",
    copy: "Cheap flights in and out of Orlando, Miami, Tampa, Fort Lauderdale, and Jacksonville.",
    button: "View Flight Deals",
    href: sites.flights,
    badge: "FLY",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    alt: "Airplane wing above clouds for Florida flight deals"
  },
  {
    title: "Florida Hotel Deals",
    copy: "Beach resorts, family stays, weekend getaways, and staycation deals.",
    button: "View Hotel Deals",
    href: sites.hotels,
    badge: "STAY",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    alt: "Resort pool and palms for Florida hotel deals"
  },
  {
    title: "Florida Cruise Deals",
    copy: "Bahamas, Caribbean, weekend, and family cruise deals from Florida ports.",
    button: "View Cruise Deals",
    href: sites.cruises,
    badge: "SAIL",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80",
    alt: "Cruise ship at sea for Florida cruise deals"
  },
  {
    title: "Local Deals Florida",
    copy: "Restaurants, events, attractions, family fun, and hidden local savings.",
    button: "View Local Deals",
    href: sites.local,
    badge: "LOCAL",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Sunny Florida beach for local deals and weekend getaways"
  }
];

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
      <header className="site-header">
        <a className="brand" href="/" aria-label="Florida Deals Hub home">
          <span className="brand-mark">FDH</span>
          <span>
            <strong>Florida Deals Hub</strong>
            <small>Official network home</small>
          </span>
        </a>
        <nav className="network-nav" aria-label="Florida Deals network">
          {nav.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a className="active" href="/">
            Florida Deals Hub
          </a>
        </nav>
        <a className="header-cta" href="#newsletter">
          Get Alerts
        </a>
      </header>

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
                <img src={pillar.image} alt={pillar.alt} />
                <span>{pillar.badge}</span>
                <strong>{pillar.title.replace("Florida ", "")}</strong>
              </a>
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
                  <img src={pillar.image} alt={pillar.alt} />
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

        <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
          <div className="newsletter-panel">
            <div>
              <p className="eyebrow">Free alerts</p>
              <h2 id="newsletter-title">Get the Best Florida Deals Delivered</h2>
              <p>
                Join free alerts for flights, hotels, cruises, local deals, and weekend getaways.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="/">
            <span className="brand-mark">FDH</span>
            <span>
              <strong>Florida Deals Hub</strong>
              <small>Flights, stays, cruises, and local savings.</small>
            </span>
          </a>
        </div>
        <nav aria-label="Footer">
          <a href={sites.flights}>Flight Deals</a>
          <a href={sites.hotels}>Hotel Deals</a>
          <a href={sites.cruises}>Cruise Deals</a>
          <a href={sites.local}>Local Deals</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>
      </footer>
    </>
  );
}
