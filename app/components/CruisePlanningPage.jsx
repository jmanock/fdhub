import Link from "next/link";
import AuthorityLinks from "./AuthorityLinks";
import NewsletterSection from "./NewsletterSection";
import PackageFinder from "./PackageFinder";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { baseUrl, lastUpdatedLabel, pageImages } from "../lib/network";
import { cruiseGuideLinks, getCruisePackages } from "../lib/cruisePlanning";
import { getPackageDiscoveryFields } from "../lib/packageDiscovery";

export default function CruisePlanningPage({ guide }) {
  const packages = getCruisePackages(guide);
  const finderPackages = packages.map((item) => ({ slug: item.slug, h1: item.h1, summary: item.summary, image: item.image, imageAlt: item.imageAlt, destination: item.destination, optionDestinations: [...new Set(item.options.map((option) => option.destination))], ...getPackageDiscoveryFields(item) }));
  const pageUrl = `${baseUrl}/${guide.slug}`;
  const defaultFaqs = [
    [`Which Florida port is best for ${guide.h1.toLowerCase()}?`, "The best port depends on sailing schedule, airfare, drive time, hotel cost, and the activities you want before or after the cruise."],
    ["Should cruise travelers arrive the day before sailing?", "Travelers flying or driving a long distance should strongly consider a pre-cruise hotel night to reduce embarkation-day risk."],
    ["What costs are outside the advertised cruise fare?", "Taxes, gratuities, drinks, Wi-Fi, excursions, flights, hotels, transportation, parking, and insurance may be separate."],
    [`When is the best time for ${guide.h1.toLowerCase()}?`, guide.bestMonths]
  ];
  const faqs = guide.faqs || defaultFaqs;
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Cruises From Florida", item: `${baseUrl}/cruises` }, { "@type": "ListItem", position: 3, name: guide.h1, item: pageUrl }] };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: guide.heroTitle || guide.h1, description: guide.metaDescription, image: guide.image, mainEntityOfPage: pageUrl, publisher: { "@type": "Organization", name: "Florida Deals Hub", url: baseUrl } };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span><Link href="/cruises">Cruises</Link></span><span aria-hidden="true">/</span><span aria-current="page">{guide.h1}</span></nav><p className="eyebrow">Florida cruise command center</p><h1>{guide.heroTitle || guide.h1}</h1><p className="updated-label">Updated: {lastUpdatedLabel}</p><p className="hero-subhead">{guide.intro}</p><div className="hero-actions">{guide.network.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div></div>
          <figure className="landing-visual story-hero-figure"><SafeImage src={guide.image} alt={guide.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /><figcaption>{guide.imageAlt}</figcaption></figure>
        </section>

        <section className="package-summary section-pad"><div className="content-card package-summary-card"><p className="eyebrow">Cruise vacation summary</p><h2>Plan Beyond The Cruise Fare</h2><dl className="package-facts"><div><dt>Departure area</dt><dd>{guide.destination}</dd></div><div><dt>Best months</dt><dd>{guide.bestMonths}</dd></div><div><dt>Family suitability</dt><dd>{guide.rating}</dd></div><div><dt>Itineraries</dt><dd>{guide.itineraries.join(", ")}</dd></div><div><dt>Cruise lines</dt><dd>{guide.cruiseLines.join(", ")}</dd></div></dl></div></section>

        <section className="package-gallery section-pad" aria-labelledby={`${guide.slug}-gallery-title`}><div className="section-heading"><p className="eyebrow">Cruise destination gallery</p><h2 id={`${guide.slug}-gallery-title`}>Picture The Complete Cruise Vacation</h2></div><div className="package-gallery-grid">{[guide.image, pageImages.miami, pageImages.cruisePort, pageImages.floridaCoast].filter((item, index, array) => array.indexOf(item) === index).map((image, index) => <figure key={image}><SafeImage src={image} alt={`${guide.h1} planning view ${index + 1}`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="480" loading="lazy" decoding="async" /><figcaption>{index === 0 ? "Cruise departure" : "Pre- or post-cruise vacation idea"}</figcaption></figure>)}</div></section>

        {guide.bestFor ? <section className="travel-guides section-pad" aria-labelledby={`${guide.slug}-best-for-title`}><div className="section-heading"><p className="eyebrow">Quick answer</p><h2 id={`${guide.slug}-best-for-title`}>{guide.bestForTitle || "Who Should Choose A Weekend Cruise?"}</h2><p>{guide.bestForIntro || "Weekend cruises work best when the port journey, sailing length, and pre-cruise buffer fit the time you actually have."}</p></div><div className="guide-card-grid">{guide.bestFor.map(([title, copy]) => <article className="guide-card" key={title}><p className="best-for-tag">Best for</p><h3>{title}</h3><p>{copy}</p></article>)}</div></section> : null}

        {guide.portComparison ? <section className="comparison-section section-pad" aria-labelledby={`${guide.slug}-ports-title`}><div className="section-heading"><p className="eyebrow">Florida departure ports</p><h2 id={`${guide.slug}-ports-title`}>Compare Ports For A Short Cruise</h2><p>The easiest port is often the one that keeps your arrival day simple, even when another sailing fare looks lower.</p></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Port</th><th>Airport choices</th><th>Best trip angle</th><th>Plan the port</th></tr></thead><tbody>{guide.portComparison.map(([port, airports, angle, href]) => <tr key={port}><th scope="row">{port}</th><td>{airports}</td><td>{angle}</td><td><Link href={href}>Explore {port} cruises</Link></td></tr>)}</tbody></table></div></section> : null}

        {guide.durationComparison ? <section className="comparison-section section-pad" aria-labelledby={`${guide.slug}-duration-title`}><div className="section-heading"><p className="eyebrow">{guide.durationEyebrow || "Weekend cruise lengths"}</p><h2 id={`${guide.slug}-duration-title`}>{guide.durationTitle || "2-Night vs 3-Night vs 4-Night Cruises"}</h2></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Length</th><th>Trip shape</th><th>Planning tradeoff</th><th>Best for</th></tr></thead><tbody>{guide.durationComparison.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></section> : null}

        {guide.planningSteps ? <section className="cruise-port-section section-pad" aria-labelledby={`${guide.slug}-steps-title`}><div className="section-heading"><p className="eyebrow">{guide.planningEyebrow || "A practical weekend plan"}</p><h2 id={`${guide.slug}-steps-title`}>{guide.planningTitle || "Build The Trip In The Right Order"}</h2></div><div className="cruise-port-map" aria-label={guide.planningAriaLabel || "Weekend cruise planning steps"}>{guide.planningSteps.map(([title, copy], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section> : null}

        {guide.port ? <section className="cruise-port-section section-pad" aria-labelledby={`${guide.slug}-port-title`}><div className="section-heading"><p className="eyebrow">Port planning</p><h2 id={`${guide.slug}-port-title`}>{guide.destination} Departure Information</h2></div><div className="cruise-port-map" aria-label={`${guide.destination} cruise planning map`}><article><span>1</span><h3>Airport</h3><p>{guide.airport}</p></article><article><span>2</span><h3>Pre-Cruise Hotel</h3><p>{guide.hotels}</p></article><article><span>3</span><h3>Transportation</h3><p>{guide.transportation}</p></article><article><span>4</span><h3>Cruise Port</h3><p>Confirm terminal and arrival instructions with the cruise line.</p></article></div></section> : null}

        {guide.cruiseLine ? <section className="cruise-line-fit section-pad" aria-labelledby={`${guide.slug}-line-title`}><div className="section-heading"><p className="eyebrow">Cruise line guide</p><h2 id={`${guide.slug}-line-title`}>Florida Departure And Family Fit</h2></div><div className="guide-card-grid"><article className="guide-card"><p className="best-for-tag">Family suitability</p><h3>{guide.rating}</h3><p>Compare cabin layout, kids programming, ship size, dining, and daily pace before choosing the sailing.</p></article><article className="guide-card"><p className="best-for-tag">Florida departure ports</p><h3>{guide.ports.join(", ")}</h3><p>Port availability and ships change by season. Confirm the current departure schedule with the cruise line.</p></article><article className="guide-card"><p className="best-for-tag">Popular itineraries</p><h3>{guide.itineraries.join(", ")}</h3><p>Compare itinerary length, port calls, sea days, and the complete vacation cost.</p></article></div></section> : null}

        <section className="comparison-section section-pad" aria-labelledby={`${guide.slug}-comparison-title`}><div className="section-heading"><p className="eyebrow">Cruise comparison</p><h2 id={`${guide.slug}-comparison-title`}>Compare The Whole Cruise Trip</h2></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Compare</th><th>Short cruise</th><th>Longer cruise</th></tr></thead><tbody><tr><th scope="row">Vacation time</th><td>Weekend or three-to-four nights</td><td>Five nights or more</td></tr><tr><th scope="row">Port hotel</th><td>Usually one night when flying</td><td>One or two nights can support a destination add-on</td></tr><tr><th scope="row">Best for</th><td>First cruises and quick getaways</td><td>Families and travelers wanting more itinerary depth</td></tr><tr><th scope="row">Budget focus</th><td>Control airfare and transfers</td><td>Compare cabin, gratuities, and onboard extras</td></tr></tbody></table></div></section>

        <section className="travel-guides section-pad" aria-labelledby={`${guide.slug}-opportunities-title`}><div className="section-heading"><p className="eyebrow">Cruise package opportunities</p><h2 id={`${guide.slug}-opportunities-title`}>Build A Complete Cruise Vacation</h2></div><div className="guide-card-grid">{guide.packages.map((item) => <article className="guide-card" key={item}><p className="best-for-tag">Package opportunity</p><h3>{item}</h3><p>Combine the sailing with a port hotel, flight or drive plan, transportation, and a local activity.</p></article>)}</div></section>

        <PackageFinder packages={finderPackages} />

        {guide.clusterLinks ? <section className="related-pages section-pad" aria-labelledby={`${guide.slug}-cluster-title`}><div className="section-heading"><p className="eyebrow">{guide.clusterEyebrow || "Weekend cruise planning path"}</p><h2 id={`${guide.slug}-cluster-title`}>{guide.clusterTitle || "Compare Sailings, Ports & Complete Packages"}</h2><p>{guide.clusterIntro || "Use these focused guides to move from a short-cruise idea to a complete Florida departure plan."}</p></div><div className="popular-link-grid">{guide.clusterLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div></section> : null}

        <section className="related-pages section-pad" aria-labelledby={`${guide.slug}-related-title`}><div className="section-heading compact"><p className="eyebrow">Cruise planning ecosystem</p><h2 id={`${guide.slug}-related-title`}>Related Florida Cruise Guides</h2></div><div className="popular-link-grid">{cruiseGuideLinks.filter(([, href]) => href !== `/${guide.slug}`).slice(0, 16).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div></section>

        <section className="faq-section section-pad" aria-labelledby={`${guide.slug}-faq-title`}><div className="section-heading compact"><p className="eyebrow">Cruise planning answers</p><h2 id={`${guide.slug}-faq-title`}>{guide.h1} FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
        <AuthorityLinks currentPath={`/${guide.slug}`} cluster="cruises" destination={guide.destination === "Florida" ? null : guide.destination} />
        <NewsletterSection title="Get Florida Cruise Deals & Port Guides" copy="Cruise package ideas, Florida port planning, hotel guides, flight ideas, and pre-cruise activities." />
      </main>
      <SiteFooter />
      <script id={`${guide.slug}-faq-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id={`${guide.slug}-breadcrumbs-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id={`${guide.slug}-article-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
