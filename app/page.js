import Link from "next/link";
import NewsletterSection from "./components/NewsletterSection";
import SafeImage from "./components/SafeImage";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  baseUrl,
  bestForLinks,
  comparisonGuideLinks,
  destinationClusters,
  editorPicks,
  expediaHotelCards,
  homepageFaqs,
  homepageSeoParagraphs,
  lastUpdatedLabel,
  pillars,
  planTripCards,
  popularSearchLinks,
  popularThisWeekLinks,
  seasonalTravelLinks,
  sites,
  topPicks,
  travelGuideLinks,
  tripRouterCards
} from "./lib/network";
import { destinationHubs } from "./lib/destinationHubs";
import { getTravelNewsItems } from "./lib/travelNews";
import {
  getEditorPickStories,
  getFeaturedStories,
  getLatestStories,
  getPlanThisTripLinks,
  getTrendingStories
} from "./lib/stories";

const trust = [
  ["Curated Florida Deals", "A focused network built around travel, savings, and things to do across the state."],
  ["One Connected Network", "Four niche sites make it easier to find the kind of deal you actually want."],
  ["Free Deal Alerts", "Join once and watch for timely savings on trips, stays, cruises, and local plans."],
  ["Built for Travelers & Locals", "Useful for fly-ins, weekenders, families, staycationers, and everyday Florida life."]
];

const homeItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Trending Florida Deals",
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
  const [featuredJournalStory] = getFeaturedStories(1);
  const journalStories = getTrendingStories(5);
  const latestJournalStories = getLatestStories(4);
  const editorJournalStories = getEditorPickStories(3);
  const featuredPlanLinks = featuredJournalStory ? getPlanThisTripLinks(featuredJournalStory) : [];
  const travelNewsItems = getTravelNewsItems(3);
  const visualDestinationHubs = destinationHubs.slice(0, 6);
  const weekendHubs = destinationHubs.filter((hub) =>
    ["key-west", "clearwater", "destin", "st-augustine", "tampa"].includes(hub.slug)
  );

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
                <SafeImage
                  src={pillar.image}
                  alt={pillar.alt}
                  fallback="/images/fallbacks/florida-deals-placeholder.svg"
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

        <section className="popular-this-week section-pad" aria-labelledby="popular-week-title">
          <div className="section-heading">
            <p className="eyebrow">Updated travel interest</p>
            <h2 id="popular-week-title">Trending Florida Searches</h2>
            <p>Popular searches from Florida travelers this week.</p>
          </div>
          <div className="guide-card-grid">
            {popularThisWeekLinks.map(([label, href, bestFor]) => (
              <a className="guide-card" href={href} key={label}>
                <h3>{label}</h3>
                <p className="best-for-tag">{bestFor}</p>
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
            <h2 id="preview-title">Trending Florida Deals</h2>
          </div>
          <div className="preview-grid">
            {topPicks.map((pick) => (
              <a className={`preview-card ${pick.tone}`} href={pick.href} key={pick.title}>
                <span>{pick.label}</span>
                <h3>{pick.title}</h3>
                <p className="pick-value">{pick.value}</p>
                <p className="best-for-tag">Best for: {pick.bestFor}</p>
                <p>{pick.copy}</p>
                <strong className="top-pick-cta">{pick.cta}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="editor-picks section-pad" aria-labelledby="editor-title">
          <div className="section-heading">
            <p className="eyebrow">Editorial picks</p>
            <h2 id="editor-title">Editorial Picks For Florida Planning</h2>
          </div>
          <div className="guide-card-grid">
            {editorPicks.map(([label, title, href, copy]) => (
              <a className="guide-card" href={href} key={`${label}-${title}`}>
                <p className="best-for-tag">{label}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
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

        <section className="popular-destinations section-pad" aria-labelledby="destination-title">
          <div className="section-heading">
            <p className="eyebrow">Destination guides</p>
            <h2 id="destination-title">Popular Florida Destinations</h2>
          </div>
          <div className="guide-card-grid visual-card-grid">
            {visualDestinationHubs.map((hub) => (
              <Link className="guide-card story-card" href={`/${hub.slug}`} key={hub.slug}>
                <SafeImage
                  src={hub.image}
                  alt={hub.imageAlt}
                  fallback="/images/fallbacks/florida-travel-placeholder.svg"
                  width="720"
                  height="430"
                  loading="lazy"
                  decoding="async"
                />
                <span className="story-category-label">Destination Hub</span>
                <h3>{hub.name}</h3>
                <p>{hub.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="destination-clusters section-pad" aria-labelledby="clusters-title">
          <div className="section-heading">
            <p className="eyebrow">Destination clusters</p>
            <h2 id="clusters-title">Explore Florida By Destination</h2>
          </div>
          <div className="cluster-grid">
            {destinationClusters.map((cluster) => (
              <article className="cluster-card" key={cluster.title}>
                <p className="best-for-tag">Best for: {cluster.bestFor}</p>
                <h3>{cluster.title}</h3>
                <div>
                  {cluster.links.map(([label, href]) => (
                    <a href={href} key={`${cluster.title}-${label}`}>
                      {label}
                    </a>
                  ))}
                </div>
              </article>
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

        <section className="travel-guides section-pad" aria-labelledby="guides-title">
          <div className="section-heading">
            <p className="eyebrow">Editorial guides</p>
            <h2 id="guides-title">Plan With Florida Travel Guides</h2>
          </div>
          <div className="guide-card-grid">
            {travelGuideLinks.map(([label, href, copy]) => (
              <a className="guide-card" href={href} key={href}>
                <h3>{label}</h3>
                <p>{copy}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="comparison-guides section-pad" aria-labelledby="comparison-guides-title">
          <div className="section-heading">
            <p className="eyebrow">Compare trip ideas</p>
            <h2 id="comparison-guides-title">Comparison Guides</h2>
          </div>
          <div className="guide-card-grid">
            {comparisonGuideLinks.map(([label, href, copy]) => (
              <a className="guide-card" href={href} key={href}>
                <h3>{label}</h3>
                <p>{copy}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="travel-journal-home section-pad" aria-labelledby="travel-journal-home-title">
          <div className="section-heading">
            <p className="eyebrow">Florida Travel Journal</p>
            <h2 id="travel-journal-home-title">Start With A Florida Travel Story</h2>
          </div>
          <div className="journal-home-grid">
            {featuredJournalStory ? (
              <Link className="content-card journal-home-feature" href={featuredJournalStory.path}>
                <SafeImage
                  src={featuredJournalStory.heroImage}
                  alt={featuredJournalStory.heroImageAlt || featuredJournalStory.title}
                  fallback="/images/fallbacks/florida-travel-placeholder.svg"
                  width="720"
                  height="420"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="eyebrow">{featuredJournalStory.categoryDetails.name}</p>
                  <h3>{featuredJournalStory.title}</h3>
                  <p className="best-for-tag">{featuredJournalStory.destination}</p>
                  <p>{featuredJournalStory.excerpt}</p>
                  <p className="value-line">Read the story</p>
                </div>
              </Link>
            ) : null}
            <div className="guide-card-grid journal-home-list">
              {journalStories.map((story) => (
                <Link className="guide-card compact-story-card" href={story.path} key={story.slug}>
                  <span className="story-category-label">{story.categoryDetails.name}</span>
                  <h3>{story.title}</h3>
                  <p className="best-for-tag">{story.destination}</p>
                  <p>{story.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="router-card-grid journal-plan-grid">
            {featuredPlanLinks.map((link) => (
              <a className="router-card" href={link.href} key={link.href}>
                <h3>{link.label}</h3>
                <p>Use this next step to turn the featured story into flights, hotels, cruises, or local plans.</p>
              </a>
            ))}
          </div>
          <div className="guide-card-grid journal-home-list">
            {editorJournalStories.map((story) => (
              <Link className="guide-card compact-story-card" href={story.path} key={story.slug}>
                <span className="story-category-label">Editor Pick</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </Link>
            ))}
            {latestJournalStories.slice(0, 1).map((story) => (
              <Link className="guide-card compact-story-card" href={story.path} key={story.slug}>
                <span className="story-category-label">Latest</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="weekend-ideas section-pad" aria-labelledby="weekend-ideas-title">
          <div className="section-heading">
            <p className="eyebrow">Weekend trip ideas</p>
            <h2 id="weekend-ideas-title">Image-Led Florida Weekend Planning</h2>
          </div>
          <div className="guide-card-grid visual-card-grid">
            {weekendHubs.map((hub) => (
              <Link className="guide-card story-card" href={`/${hub.slug}`} key={hub.slug}>
                <SafeImage
                  src={hub.image}
                  alt={hub.imageAlt}
                  fallback="/images/fallbacks/florida-travel-placeholder.svg"
                  width="720"
                  height="430"
                  loading="lazy"
                  decoding="async"
                />
                <span className="story-category-label">Weekend Hub</span>
                <h3>{hub.name}</h3>
                <p>{hub.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {travelNewsItems.length ? (
          <section className="travel-news-home section-pad" aria-labelledby="travel-news-home-title">
            <div className="section-heading">
              <p className="eyebrow">Florida travel news</p>
              <h2 id="travel-news-home-title">Travel Updates To Watch</h2>
            </div>
            <div className="guide-card-grid visual-card-grid">
              {travelNewsItems.map((item) => (
                <Link className="guide-card story-card" href={item.path} key={item.slug}>
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallback="/images/fallbacks/florida-travel-placeholder.svg"
                    width="720"
                    height="430"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="story-category-label">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="best-for section-pad" aria-labelledby="best-for-title">
          <div className="section-heading">
            <p className="eyebrow">Best for</p>
            <h2 id="best-for-title">Find The Right Florida Trip Type</h2>
          </div>
          <div className="guide-card-grid">
            {bestForLinks.map(([label, href, copy]) => (
              <a className="guide-card" href={href} key={href}>
                <h3>{label}</h3>
                <p>{copy}</p>
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

        <section className="pillars section-pad" aria-labelledby="network-title">
          <div className="section-heading">
            <p className="eyebrow">The network</p>
            <h2 id="network-title">Explore the Florida Deals Network</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <div className="pillar-image">
                  <SafeImage
                    src={pillar.image}
                    alt={pillar.alt}
                    fallback={
                      pillar.key === "local"
                        ? "/images/fallbacks/florida-beach-placeholder.svg"
                        : "/images/fallbacks/florida-deals-placeholder.svg"
                    }
                    width="900"
                    height="620"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{pillar.badge}</span>
                </div>
                <div className="pillar-body">
                  <h3>{pillar.title}</h3>
                  <p className="best-for-tag">Best for: {pillar.bestFor}</p>
                  <p>{pillar.copy}</p>
                  <p className="value-line">Why this guide: {pillar.why}</p>
                  <a href={pillar.href}>{pillar.button}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="seasonal-travel section-pad" aria-labelledby="seasonal-title">
          <div className="section-heading">
            <p className="eyebrow">Seasonal travel</p>
            <h2 id="seasonal-title">Seasonal Florida Travel</h2>
          </div>
          <div className="guide-card-grid">
            {seasonalTravelLinks.map(([label, href, copy]) => (
              <a className="guide-card" href={href} key={href}>
                <h3>{label}</h3>
                <p>{copy}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="trust-band section-pad" aria-labelledby="trust-site-title">
          <div className="content-card">
            <p className="eyebrow">Why trust this site?</p>
            <h2 id="trust-site-title">A Florida-focused travel and local deals network</h2>
            <p>
              Florida Deals Hub is a Florida-focused travel and local deals network. We organize
              flights, hotels, cruises, attractions, restaurants, events, and destination guides by
              city, category, and trip type so visitors can compare options faster.
            </p>
            <div className="trust-notes" aria-label="Florida Deals Hub trust details">
              <span>Updated travel content</span>
              <span>Florida-focused network</span>
              <span>Prices and availability may change</span>
              <span>Confirm current details with official sources</span>
            </div>
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
      <script
        id="home-top-picks-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeItemListSchema) }}
      />
      <script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
    </>
  );
}
