import Link from "next/link";
import AffiliateBookingSection from "./AffiliateBookingSection";
import AuthorityLinks from "./AuthorityLinks";
import CarRentalCTA from "./CarRentalCTA";
import NewsletterSection from "./NewsletterSection";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { baseUrl } from "../lib/network";
import { getVacationPackageGallery } from "../lib/vacationPackages";
import { getPackageDiscoveryFields } from "../lib/packageDiscovery";
import ThingsToDoSection from "./ThingsToDoSection";
import TravelEssentialsBlock from "./TravelEssentialsBlock";
import { StoryModule } from "./StoryModules";
import { getTrendingStories } from "../lib/stories";
import { familyGuideLinks } from "../lib/familyVacations";
import { cruiseGuideLinks } from "../lib/cruisePlanning";
import { getAffiliateRecommendationsForPage, getCarRentalRecommendationForPage } from "../lib/affiliate/affiliateInventory.mjs";

export function VacationPackageCards({ packages, title = "Vacation Packages Built Around Real Trip Decisions", id = "vacation-packages" }) {
  if (!packages.length) return null;

  return (
    <section className="vacation-packages section-pad" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="eyebrow">Vacation package planners</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>Compare the full trip across stays, transportation, activities, cruises, and realistic planning ranges.</p>
      </div>
      <div className="guide-card-grid visual-card-grid">
        {packages.map((item) => (
          <Link className="guide-card story-card package-card" href={`/${item.slug}`} key={item.slug}>
            <SafeImage
              src={item.image}
              alt={item.imageAlt}
              fallback="/images/fallbacks/florida-travel-placeholder.svg"
              width="720"
              height="430"
              loading="lazy"
              decoding="async"
            />
            <span className="story-category-label">{item.destination} package</span>
            <h3>{item.h1}</h3>
            <p>{item.summary}</p>
            <p className="best-for-tag">Best for: {item.bestFor.join(", ")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function VacationPackagePage({ packagePage }) {
  const pageUrl = `${baseUrl}/${packagePage.slug}`;
  const gallery = getVacationPackageGallery(packagePage);
  const discovery = getPackageDiscoveryFields(packagePage);
  const bestMonths = packagePage.destination === "Florida" ? "Varies by trip type" : packagePage.destination === "Miami" || packagePage.destination === "Key West" ? "November-April" : "October-May";
  const familyRating = discovery.styles.includes("Family") ? "Strong family fit" : "Best for adults or flexible families";
  const relatedStories = getTrendingStories(3);
  const affiliateRecommendations = getAffiliateRecommendationsForPage(packagePage.slug);
  const carRentalRecommendation = getCarRentalRecommendationForPage(packagePage.slug);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Vacation Packages", item: `${baseUrl}/florida-vacation-planning-guide` },
      { "@type": "ListItem", position: 3, name: packagePage.h1, item: pageUrl }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: packagePage.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: packagePage.h1,
    description: packagePage.metaDescription,
    image: packagePage.image,
    datePublished: "2026-06-06",
    mainEntityOfPage: pageUrl,
    author: { "@type": "Organization", name: "Florida Deals Hub", url: baseUrl },
    publisher: { "@type": "Organization", name: "Florida Deals Hub", url: baseUrl }
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero package-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <span><Link href="/">Home</Link></span>
              <span aria-hidden="true">/</span>
              <span><Link href="/florida-vacation-planning-guide">Vacation planning</Link></span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{packagePage.h1}</span>
            </nav>
            <p className="eyebrow">{packagePage.eyebrow}</p>
            <h1>{packagePage.h1}</h1>
            <p className="hero-subhead">{packagePage.summary}</p>
            <div className="story-tags" aria-label="Best for">
              {packagePage.bestFor.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <figure className="landing-visual story-hero-figure">
            <SafeImage
              src={packagePage.image}
              alt={packagePage.imageAlt}
              fallback="/images/fallbacks/florida-travel-placeholder.svg"
              width="900"
              height="720"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <figcaption>{packagePage.imageAlt}</figcaption>
          </figure>
        </section>

        <section className="package-summary section-pad" aria-labelledby="package-summary-title">
          <div className="content-card package-summary-card">
            <p className="eyebrow">How to use this planner</p>
            <h2 id="package-summary-title">Compare The Complete Vacation Cost</h2>
            <p>{packagePage.assumptions}</p>
            <p>
              These are editorial planning ranges, not live quotes or guaranteed prices. Airfare, hotel rates,
              cruise fares, taxes, fees, and availability change. Confirm the final total with each provider.
            </p>
            <dl className="package-facts">
              <div><dt>Vacation type</dt><dd>{discovery.styles.join(", ")}</dd></div>
              <div><dt>Duration</dt><dd>{discovery.duration}</dd></div>
              <div><dt>Budget</dt><dd>Up to ${discovery.maxBudget.toLocaleString()}</dd></div>
              <div><dt>Best travel months</dt><dd>{bestMonths}</dd></div>
              <div><dt>Family rating</dt><dd>{familyRating}</dd></div>
            </dl>
          </div>
        </section>

        <section className="package-gallery section-pad" aria-labelledby="package-gallery-title">
          <div className="section-heading">
            <p className="eyebrow">Destination gallery</p>
            <h2 id="package-gallery-title">Picture The Complete Florida Trip</h2>
          </div>
          <div className="package-gallery-grid">
            {gallery.map((item, index) => (
              <figure key={item.image}>
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  fallback="/images/fallbacks/florida-travel-placeholder.svg"
                  width="720"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{index === 0 ? "Trip anchor" : index === 1 ? "Destination option" : "Build the full vacation around the pace your group wants."}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {packagePage.options.map((option, optionIndex) => (
          <section className="package-option section-pad" aria-labelledby={`${packagePage.slug}-option-${optionIndex}`} key={option.name}>
            <div className="section-heading">
              <p className="eyebrow">{option.destination} trip framework</p>
              <h2 id={`${packagePage.slug}-option-${optionIndex}`}>{option.name}</h2>
              <p className="package-total">Estimated total: <strong>{option.estimatedCost}</strong></p>
            </div>
            <div className="package-summary-grid">
              {[["Cruise", option.cruise], ["Hotel", option.hotel], ["Flights & transport", option.flight], ["Activities", option.activities]].map(([label, value]) => (
                <article className="package-summary-item" key={label}>
                  <p className="best-for-tag">{label}</p>
                  <p>{value}</p>
                </article>
              ))}
            </div>
            <div className="comparison-table-wrap package-cost-table">
              <table className="comparison-table">
                <thead><tr><th>Budget category</th><th>Estimated planning range</th></tr></thead>
                <tbody>
                  {option.costRows.map(([label, cost]) => <tr key={label}><th scope="row">{label}</th><td>{cost}</td></tr>)}
                  <tr><th scope="row">Estimated package total</th><td><strong>{option.estimatedCost}</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div className="section-heading compact booking-section-heading">
              <p className="eyebrow">Booking section</p>
              <h3>Book Each Part Of The Package</h3>
            </div>
            <div className="router-card-grid package-actions">
              {option.links.map(([label, href, site]) => (
                <article className="router-card" key={href}>
                  <span className="router-badge">{site}</span>
                  <h3>{label}</h3>
                  <p>Continue this {option.destination} package plan on the focused Florida Deals Network site.</p>
                  <a href={href}>{label}</a>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="travel-tips section-pad" aria-labelledby="family-travel-tips-title">
          <div className="section-heading">
            <p className="eyebrow">Family travel tips</p>
            <h2 id="family-travel-tips-title">Keep The Package Practical</h2>
          </div>
          <div className="guide-card-grid">
            {packagePage.tips.map((tip, index) => <article className="guide-card" key={tip}><p className="best-for-tag">Tip {index + 1}</p><h3>{tip}</h3></article>)}
          </div>
        </section>

        <ThingsToDoSection title={`Add Activities To This ${packagePage.destination} Vacation`} />
        <AffiliateBookingSection recommendations={affiliateRecommendations} title={`Add A Boat Day To This ${packagePage.destination} Vacation`} />
        <CarRentalCTA recommendation={carRentalRecommendation} />
        <TravelEssentialsBlock
          pageType="vacation_package"
          title="Don’t forget the gear around this package."
          description="Before the trip becomes real, make sure luggage, day bags, and comfort items match the destination, travel days, and activities in the package."
          maxItems={4}
        />

        {discovery.styles.includes("Family") ? (
          <section className="related-pages section-pad" aria-labelledby={`${packagePage.slug}-family-links-title`}>
            <div className="section-heading compact">
              <p className="eyebrow">Family vacation authority</p>
              <h2 id={`${packagePage.slug}-family-links-title`}>Compare More Florida Family Vacations</h2>
            </div>
            <div className="popular-link-grid">
              {familyGuideLinks.slice(0, 12).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            </div>
          </section>
        ) : null}

        {discovery.styles.includes("Cruise") ? (
          <section className="related-pages section-pad" aria-labelledby={`${packagePage.slug}-cruise-links-title`}>
            <div className="section-heading compact">
              <p className="eyebrow">Cruise command center</p>
              <h2 id={`${packagePage.slug}-cruise-links-title`}>Compare Florida Cruise Ports And Guides</h2>
            </div>
            <div className="popular-link-grid">
              {cruiseGuideLinks.slice(0, 16).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            </div>
          </section>
        ) : null}

        <StoryModule
          eyebrow="Related travel stories"
          title="Read Before You Book"
          stories={relatedStories}
          id={`${packagePage.slug}-related-stories`}
        />

        <section className="related-pages section-pad" aria-labelledby="package-related-title">
          <div className="section-heading compact">
            <p className="eyebrow">Keep planning</p>
            <h2 id="package-related-title">Related Florida Vacation Guides</h2>
          </div>
          <div className="popular-link-grid">
            {packagePage.related.map((slug) => <Link href={`/${slug}`} key={slug}>{slug.replaceAll("-", " ")}</Link>)}
          </div>
        </section>

        <section className="faq-section section-pad" aria-labelledby="package-faq-title">
          <div className="section-heading compact">
            <p className="eyebrow">Helpful answers</p>
            <h2 id="package-faq-title">{packagePage.h1} FAQ</h2>
          </div>
          <div className="faq-list">
            {packagePage.faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </section>

        <AuthorityLinks currentPath={`/${packagePage.slug}`} cluster={discovery.styles.includes("Cruise") ? "cruises" : discovery.styles.includes("Family") ? "family" : "packages"} destination={packagePage.destination === "Florida" ? null : packagePage.destination} />
        <NewsletterSection
          eyebrow="Florida vacation planning"
          title="Get Florida Travel Deals & Vacation Ideas"
          copy="Get useful package planners, destination ideas, cruise tips, hotel guides, and family travel inspiration."
          buttonLabel="Join The Florida Travel List"
        />
      </main>
      <SiteFooter />
      <script id={`${packagePage.slug}-breadcrumbs-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id={`${packagePage.slug}-faq-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id={`${packagePage.slug}-article-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
