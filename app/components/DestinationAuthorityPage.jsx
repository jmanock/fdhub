import Link from "next/link";
import AuthorityLinks from "./AuthorityLinks";
import NewsletterSection from "./NewsletterSection";
import PackageFinder from "./PackageFinder";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { StoryModule } from "./StoryModules";
import { baseUrl, lastUpdatedLabel, pageImages } from "../lib/network";
import { destinationAuthorities, destinationPageTypes, destinationPath, getDestinationPackages } from "../lib/destinationAuthority";
import { getPackageDiscoveryFields } from "../lib/packageDiscovery";
import { getAllStories } from "../lib/stories";

export default function DestinationAuthorityPage({ destination, type = null }) {
  const focus = type?.focus || "the best time to visit, hotels, flights, attractions, transportation, budgets, packages, and nearby trip ideas";
  const h1 = type ? `${destination.name} ${type.label}` : `${destination.name} Travel Guide`;
  const packages = getDestinationPackages(destination);
  const finderPackages = packages.map((item) => ({ slug: item.slug, h1: item.h1, summary: item.summary, image: item.image, imageAlt: item.imageAlt, destination: item.destination, optionDestinations: [...new Set(item.options.map((option) => option.destination))], ...getPackageDiscoveryFields(item) }));
  const stories = getAllStories().filter((story) => story.destination === destination.name || story.relatedDestinations?.includes(destination.name)).slice(0, 3);
  const relatedDestinations = destination.related.map((slug) => destinationAuthorities.find((item) => item.slug === slug)).filter(Boolean);
  const pagePath = destinationPath(destination, type);
  const faqs = [
    [`When is the best time to visit ${destination.name}?`, destination.bestMonths],
    [`What airport should travelers use for ${destination.name}?`, destination.airport],
    [`How should visitors get around ${destination.name}?`, destination.transportation],
    [`What should a ${destination.name} vacation budget include?`, "Plan for transportation, hotels, food, activities, parking, resort fees, and weather or schedule changes. Confirm current prices before booking."]
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Destinations", item: `${baseUrl}/destinations` }, { "@type": "ListItem", position: 3, name: destination.name, item: `${baseUrl}${destinationPath(destination)}` }, ...(type ? [{ "@type": "ListItem", position: 4, name: type.label, item: `${baseUrl}${pagePath}` }] : [])] };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span><Link href="/destinations">Destinations</Link></span><span aria-hidden="true">/</span>{type ? <><span><Link href={destinationPath(destination)}>{destination.name}</Link></span><span aria-hidden="true">/</span></> : null}<span aria-current="page">{type?.label || destination.name}</span></nav><p className="eyebrow">{destination.region} destination authority</p><h1>{h1}</h1><p className="updated-label">Updated: {lastUpdatedLabel}</p><p className="hero-subhead">{destination.overview} This guide focuses on {focus}.</p><div className="hero-actions"><a href={destination.links[0]}>Book Flights</a><a href={destination.links[1]}>Book Hotels</a><a href={destination.links[2]}>Book Cruises</a><a href={destination.links[3]}>Find Activities</a><Link href={destinationPath(destination, destinationPageTypeMapSafe("vacation-packages"))}>View Vacation Packages</Link></div></div>
          <figure className="landing-visual story-hero-figure"><SafeImage src={destination.image} alt={destination.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /><figcaption>{destination.imageAlt}</figcaption></figure>
        </section>

        <section className="package-summary section-pad"><div className="content-card package-summary-card"><p className="eyebrow">Destination overview</p><h2>Plan A Complete {destination.name} Vacation</h2><dl className="package-facts"><div><dt>Region</dt><dd>{destination.region}</dd></div><div><dt>Best time to visit</dt><dd>{destination.bestMonths}</dd></div><div><dt>Airport</dt><dd>{destination.airport}</dd></div><div><dt>Cruise access</dt><dd>{destination.cruise}</dd></div><div><dt>Weather</dt><dd>{destination.weather}</dd></div></dl></div></section>

        <section className="package-gallery section-pad" aria-labelledby={`${destination.slug}-gallery-title`}><div className="section-heading"><p className="eyebrow">Destination gallery</p><h2 id={`${destination.slug}-gallery-title`}>Explore {destination.name}</h2></div><div className="package-gallery-grid">{[destination.image, pageImages.familyTrip, pageImages.floridaCoast, pageImages.planning].filter((item, index, array) => array.indexOf(item) === index).map((image, index) => <figure key={image}><SafeImage src={image} alt={`${destination.name} travel view ${index + 1}`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="480" loading="lazy" decoding="async" /><figcaption>{index === 0 ? `${destination.name} trip anchor` : "Build the itinerary around your travel style."}</figcaption></figure>)}</div></section>

        <section className="destination-subpages section-pad" aria-labelledby={`${destination.slug}-plans-title`}><div className="section-heading"><p className="eyebrow">Plan by travel intent</p><h2 id={`${destination.slug}-plans-title`}>{destination.name} Vacation Planning Guides</h2></div><div className="guide-card-grid">{destinationPageTypes.map((item) => <Link className="guide-card" href={destinationPath(destination, item)} key={item.slug}><h3>{destination.name} {item.label}</h3><p>Plan around {item.focus}.</p></Link>)}</div></section>

        <section className="destination-details section-pad" aria-labelledby={`${destination.slug}-details-title`}><div className="section-heading"><p className="eyebrow">Travel tips and logistics</p><h2 id={`${destination.slug}-details-title`}>Know Before You Go</h2></div><div className="guide-card-grid"><article className="guide-card"><h3>Weather</h3><p>{destination.weather}</p></article><article className="guide-card"><h3>Transportation</h3><p>{destination.transportation}</p></article><article className="guide-card"><h3>Neighborhood Highlights</h3><p>{destination.neighborhoods.join(", ")}</p></article></div></section>

        <section className="family-activity-highlights section-pad" aria-labelledby={`${destination.slug}-attractions-title`}><div className="section-heading"><p className="eyebrow">Featured attractions</p><h2 id={`${destination.slug}-attractions-title`}>Top {destination.name} Attractions</h2></div><div className="guide-card-grid">{destination.attractions.map((item, index) => <article className="guide-card" key={item}><p className="best-for-tag">Attraction {index + 1}</p><h3>{item}</h3><p>Check current hours, reservations, tickets, weather, and travel time before visiting.</p></article>)}</div></section>

        <section className="comparison-section section-pad" aria-labelledby={`${destination.slug}-budget-title`}><div className="section-heading"><p className="eyebrow">Budget guide</p><h2 id={`${destination.slug}-budget-title`}>Compare {destination.name} Vacation Budgets</h2></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Trip style</th><th>Estimated planning range</th><th>Best use</th></tr></thead><tbody>{destination.budgets.map(([label, budget]) => <tr key={label}><th scope="row">{label}</th><td>{budget}</td><td>Compare live flights, hotels, activities, fees, and transportation.</td></tr>)}</tbody></table></div></section>

        <section className="travel-guides section-pad" aria-labelledby={`${destination.slug}-itinerary-title`}><div className="section-heading"><p className="eyebrow">Suggested itinerary</p><h2 id={`${destination.slug}-itinerary-title`}>A Practical {destination.name} Trip</h2></div><div className="guide-card-grid">{destination.itinerary.map((item, index) => <article className="guide-card" key={item}><p className="best-for-tag">Day {index + 1}</p><h3>{item}</h3><p>Keep travel time realistic and leave room for weather or schedule changes.</p></article>)}</div></section>

        <PackageFinder packages={finderPackages} />
        <StoryModule eyebrow="Related travel stories" title={`${destination.name} Stories And Guides`} stories={stories} id={`${destination.slug}-stories`} />

        <section className="related-pages section-pad" aria-labelledby={`${destination.slug}-related-title`}><div className="section-heading compact"><p className="eyebrow">Related destinations and sections</p><h2 id={`${destination.slug}-related-title`}>Keep Planning Florida</h2></div><div className="popular-link-grid">{relatedDestinations.map((item) => <Link href={destinationPath(item)} key={item.slug}>{item.name} Travel Guide</Link>)}<Link href="/family-vacations">Family Vacations</Link><Link href="/cruises">Cruises From Florida</Link><Link href="/journal">Travel Stories</Link><Link href="/vacation-packages">Vacation Packages</Link></div></section>

        <section className="faq-section section-pad" aria-labelledby={`${destination.slug}-faq-title`}><div className="section-heading compact"><p className="eyebrow">Destination planning answers</p><h2 id={`${destination.slug}-faq-title`}>{h1} FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
        <AuthorityLinks currentPath={pagePath} cluster="destinations" destination={destination.name} />
        <NewsletterSection title={`Get ${destination.name} Travel Ideas`} copy="Destination packages, hotels, flights, attractions, travel guides, and Florida trip ideas." />
      </main>
      <SiteFooter />
      <script id={`${destination.slug}-${type?.slug || "hub"}-faq-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id={`${destination.slug}-${type?.slug || "hub"}-breadcrumbs-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

function destinationPageTypeMapSafe(slug) {
  return destinationPageTypes.find((item) => item.slug === slug);
}
