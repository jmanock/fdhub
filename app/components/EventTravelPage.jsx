import Link from "next/link";
import AuthorityLinks from "./AuthorityLinks";
import EventCountdown from "./EventCountdown";
import EventTravelAnalytics from "./EventTravelAnalytics";
import NewsletterSection from "./NewsletterSection";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { baseUrl, lastUpdatedLabel, pageImages } from "../lib/network";
import { eventTravelHubs, eventTravelPath, getEventRecommendations, trendingDestinationPages } from "../lib/eventTravel";

export default function EventTravelPage({ page }) {
  const recommendations = getEventRecommendations(page);
  const path = eventTravelPath(page);
  const parent = page.parentSlug ? eventTravelHubs.find((item) => item.slug === page.parentSlug) : null;
  const relatedPages = page.type === "trend" ? trendingDestinationPages.filter((item) => item.slug !== page.slug) : eventTravelHubs.filter((item) => item.slug !== (parent?.slug || page.slug));
  const childTrendPages = page.slug === "trending-destinations" ? trendingDestinationPages : [];
  const faqs = [
    [`How should travelers plan for ${page.title}?`, "Start with verified official dates and locations, then compare the complete cost of hotels, flights, transportation, activities, tickets, and schedule changes."],
    [`When should travelers book ${page.title.toLowerCase()}?`, "Booking timing depends on confirmed dates, demand, cancellation terms, and transportation options. Compare flexible plans and verify current availability."],
    ["Are the package estimates guaranteed?", "No. They are editorial planning ranges. Confirm current prices, schedules, fees, rules, and availability with each provider or official event source."],
    ["How does Florida Deals Hub verify event details?", "The system is designed to publish confirmed dates and Event schema only when an official source has been reviewed. Unverified schedules remain clearly labeled."]
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const breadcrumbItems = [{ "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Event Travel", item: `${baseUrl}/events` }, ...(parent ? [{ "@type": "ListItem", position: 3, name: parent.title, item: `${baseUrl}${eventTravelPath(parent)}` }] : []), { "@type": "ListItem", position: parent ? 4 : 3, name: page.title, item: `${baseUrl}${path}` }];
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbItems };
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", name: `${page.title} vacation recommendations`, itemListElement: recommendations.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${baseUrl}${item.packageHref}` })) };
  const eventSchema = page.dateVerified && page.startDate ? { "@context": "https://schema.org", "@type": "Event", name: page.title, startDate: page.startDate, ...(page.endDate ? { endDate: page.endDate } : {}), eventStatus: "https://schema.org/EventScheduled", url: `${baseUrl}${path}`, image: page.image, description: page.description } : null;

  return (
    <>
      <SiteHeader />
      <EventTravelAnalytics title={page.title} category={page.category} pageType={page.type} />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span><Link href="/events">Events</Link></span><span aria-hidden="true">/</span>{parent ? <><span><Link href={eventTravelPath(parent)}>{parent.title}</Link></span><span aria-hidden="true">/</span></> : null}<span aria-current="page">{page.title}</span></nav>
            <p className="eyebrow">{page.category} travel planning</p><h1>{page.title}</h1><p className="updated-label">Updated: {lastUpdatedLabel}</p><p className="hero-subhead">{page.focus}</p>
            <div className="hero-actions">{page.links.map(([label, href]) => href.startsWith("/") ? <Link href={href} key={label}>{label}</Link> : <a href={href} key={label}>{label}</a>)}</div>
          </div>
          <figure className="landing-visual story-hero-figure"><SafeImage src={page.image} alt={page.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /><figcaption>{page.imageAlt}</figcaption></figure>
        </section>

        <section className="event-status-section section-pad"><EventCountdown startDate={page.startDate} dateVerified={page.dateVerified} /></section>

        <section className="package-summary section-pad"><div className="content-card package-summary-card"><p className="eyebrow">Event travel overview</p><h2>Build The Complete Trip Around The Event</h2><dl className="package-facts"><div><dt>Event type</dt><dd>{page.category}</dd></div><div><dt>Best for</dt><dd>{page.audience}</dd></div><div><dt>Travel window</dt><dd>{page.travelWindow}</dd></div><div><dt>Destination ideas</dt><dd>{page.destinations.join(", ")}</dd></div><div><dt>Package styles</dt><dd>{page.packageStyles.join(", ")}</dd></div></dl></div></section>

        <section className="package-gallery section-pad" aria-labelledby={`${page.slug}-gallery-title`}><div className="section-heading"><p className="eyebrow">Event travel gallery</p><h2 id={`${page.slug}-gallery-title`}>Picture The Full Event Trip</h2></div><div className="package-gallery-grid">{[page.image, pageImages.planning, pageImages.familyTrip, pageImages.floridaCoast].filter((item, index, array) => array.indexOf(item) === index).map((image, index) => <figure key={image}><SafeImage src={image} alt={`${page.title} planning view ${index + 1}`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="480" loading="lazy" decoding="async" /><figcaption>{index === 0 ? "Event travel anchor" : "Connect the event to a complete vacation plan."}</figcaption></figure>)}</div></section>

        <section className="event-schedule-section section-pad" aria-labelledby={`${page.slug}-schedule-title`}><div className="section-heading"><p className="eyebrow">Event planning timeline</p><h2 id={`${page.slug}-schedule-title`}>From Announcement To Arrival</h2><p>This planning schedule avoids unsupported event dates. Verify official schedules before booking.</p></div><div className="event-schedule-grid">{page.schedule.map((item, index) => <article key={item}><span>{index + 1}</span><h3>{item}</h3><p>{page.planningSteps[index] || "Confirm the next planning step with an official or booking source."}</p></article>)}</div></section>

        {page.subpages.length || childTrendPages.length ? <section className="travel-guides section-pad" aria-labelledby={`${page.slug}-guides-title`}><div className="section-heading"><p className="eyebrow">Focused event travel guides</p><h2 id={`${page.slug}-guides-title`}>Plan Every Part Of {page.title}</h2></div><div className="guide-card-grid">{page.subpages.map(([slug, title, description]) => <Link className="guide-card" href={`/events/${page.slug}/${slug}`} key={slug}><h3>{title}</h3><p>{description}</p></Link>)}{childTrendPages.map((item) => <Link className="guide-card" href={eventTravelPath(item)} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p></Link>)}</div></section> : null}

        <section className="vacation-packages section-pad" aria-labelledby={`${page.slug}-packages-title`}><div className="section-heading"><p className="eyebrow">Event vacation recommendations</p><h2 id={`${page.slug}-packages-title`}>Turn The Event Into A Complete Trip</h2><p>Recommendations connect the event idea to practical Florida package plans and focused booking sites.</p></div><div className="guide-card-grid visual-card-grid">{recommendations.map((item) => <Link className="guide-card story-card package-card" href={item.packageHref} key={item.id}><SafeImage src={item.image} alt={item.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><span className="story-category-label">{item.destination} · {item.duration}</span><h3>{item.title}</h3><p>{item.summary}</p><p className="best-for-tag">Estimated planning range: {item.costLabel}</p></Link>)}</div></section>

        <section className="travel-guides section-pad" aria-labelledby={`${page.slug}-booking-title`}><div className="section-heading"><p className="eyebrow">Event package booking paths</p><h2 id={`${page.slug}-booking-title`}>Book Each Part Of The Event Trip</h2><p>Compare the full trip before committing. Prices, schedules, and availability can change.</p></div><div className="router-card-grid">{recommendations.map((item) => <article className="router-card" key={item.id}><span className="router-badge">{item.destination}</span><h3>{item.title}</h3><p><strong>Estimated cost:</strong> {item.costLabel}</p><p><strong>Includes:</strong> {item.includes.join(", ")}</p><div className="builder-action-row"><Link href={item.packageHref}>View Package</Link>{item.actions.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></article>)}</div></section>

        <section className="comparison-section section-pad" aria-labelledby={`${page.slug}-comparison-title`}><div className="section-heading"><p className="eyebrow">Event package comparison</p><h2 id={`${page.slug}-comparison-title`}>Compare The Complete Event Travel Cost</h2></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Recommendation</th><th>Estimated cost</th><th>Includes</th><th>Continue planning</th></tr></thead><tbody>{recommendations.map((item) => <tr key={item.id}><th scope="row">{item.title}</th><td>{item.costLabel}</td><td>{item.includes.join(", ")}</td><td><Link href={item.packageHref}>View package plan</Link></td></tr>)}</tbody></table></div></section>

        <section className="related-pages section-pad" aria-labelledby={`${page.slug}-related-title`}><div className="section-heading compact"><p className="eyebrow">Related events and planning</p><h2 id={`${page.slug}-related-title`}>Keep Planning The Trip</h2></div><div className="popular-link-grid">{relatedPages.slice(0, 8).map((item) => <Link href={eventTravelPath(item)} key={eventTravelPath(item)}>{item.title}</Link>)}<Link href="/vacation-builder">Vacation Builder</Link><Link href="/vacation-packages">Vacation Packages</Link><Link href="/family-vacations">Family Vacations</Link><Link href="/destinations">Destination Guides</Link><Link href="/cruises">Cruise Packages</Link></div></section>

        <section className="faq-section section-pad" aria-labelledby={`${page.slug}-faq-title`}><div className="section-heading compact"><p className="eyebrow">Event travel answers</p><h2 id={`${page.slug}-faq-title`}>{page.title} FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
        <AuthorityLinks currentPath={path} cluster="events" destination={page.destinations[0]} />
        <NewsletterSection title="Get Florida Event Travel Ideas" copy="Event travel guides, trending destinations, vacation packages, flights, hotels, cruises, and activities." />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {eventSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} /> : null}
    </>
  );
}
