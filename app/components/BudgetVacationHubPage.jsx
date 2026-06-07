import Link from "next/link";
import NewsletterSection from "./NewsletterSection";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import VacationBuilder from "./VacationBuilder";
import { baseUrl, lastUpdatedLabel } from "../lib/network";
import { budgetOptions, departureRegionOptions, getRecommendationsForHub, travelerOptions, vacationRecommendations, vacationTypeOptions } from "../lib/vacationBuilder";

export default function BudgetVacationHubPage({ hub }) {
  const recommendations = getRecommendationsForHub(hub);
  const faqItems = [
    [`Can I plan ${hub.title.toLowerCase()}?`, `Yes, but the strongest options depend on traveler count, origin, dates, and trip type. The estimates shown here are planning ranges rather than bookable package prices.`],
    ["What costs should a vacation budget include?", "Include lodging, flights or driving, cruise fares where relevant, taxes, fees, parking, food, activities, and a buffer for changes."],
    ["How do I use these recommendations?", "Compare the complete trip shape first, then follow the focused booking links to verify current prices and availability."]
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.title,
    itemListElement: recommendations.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${baseUrl}${item.packageHref}` }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Vacation Builder", item: `${baseUrl}/vacation-builder` },
      { "@type": "ListItem", position: 3, name: hub.title, item: `${baseUrl}/${hub.slug}` }
    ]
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span><Link href="/vacation-builder">Vacation Builder</Link></span><span aria-hidden="true">/</span><span aria-current="page">{hub.title}</span></nav>
            <p className="eyebrow">Budget-first vacation discovery</p>
            <h1>{hub.title}</h1>
            <p className="updated-label">Updated: {lastUpdatedLabel}</p>
            <p className="hero-subhead">{hub.description}</p>
            <div className="hero-actions"><Link href="/vacation-builder">Build My Vacation</Link><Link href="/vacation-packages">Compare All Packages</Link></div>
          </div>
          <div className="landing-visual"><SafeImage src={hub.image} alt={`${hub.title} vacation planning`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div>
        </section>
        <section className="section-pad" aria-labelledby={`${hub.slug}-recommendations-title`}>
          <div className="section-heading"><p className="eyebrow">Recommended vacation plans</p><h2 id={`${hub.slug}-recommendations-title`}>Compare Complete Trips, Not Isolated Prices</h2><p>These recommendations show the trip components most likely to shape the budget. Prices and availability change.</p></div>
          <div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Vacation</th><th>Estimated cost</th><th>Duration</th><th>Includes</th><th>Plan</th></tr></thead><tbody>{recommendations.map((item) => <tr key={item.id}><th scope="row">{item.title}</th><td>{item.costLabel}</td><td>{item.duration}</td><td>{item.includes.join(", ")}</td><td><Link href={item.packageHref}>View package plan</Link></td></tr>)}</tbody></table></div>
        </section>
        <section className="vacation-packages section-pad" aria-labelledby={`${hub.slug}-cards-title`}>
          <div className="section-heading"><p className="eyebrow">Visual vacation comparison</p><h2 id={`${hub.slug}-cards-title`}>Trips That Can Fit This Budget</h2></div>
          <div className="guide-card-grid visual-card-grid">{recommendations.map((item) => <Link className="guide-card story-card package-card" href={item.packageHref} key={item.id}><SafeImage src={item.image} alt={item.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><span className="story-category-label">{item.destination} · {item.duration}</span><h3>{item.title}</h3><p>{item.summary}</p><p className="best-for-tag">{item.costLabel}</p></Link>)}</div>
        </section>
        <VacationBuilder recommendations={vacationRecommendations} budgetOptions={budgetOptions} travelerOptions={travelerOptions} vacationTypeOptions={vacationTypeOptions} departureRegionOptions={departureRegionOptions} />
        <section className="related-pages section-pad" aria-labelledby={`${hub.slug}-related-title`}><div className="section-heading compact"><p className="eyebrow">Continue planning</p><h2 id={`${hub.slug}-related-title`}>Related Budget And Vacation Guides</h2></div><div className="popular-link-grid"><Link href="/vacations-under-1000">Vacations Under $1,000</Link><Link href="/vacations-under-2000">Vacations Under $2,000</Link><Link href="/vacations-under-3000">Vacations Under $3,000</Link><Link href="/vacations-under-5000">Vacations Under $5,000</Link><Link href="/family-vacations">Family Vacations</Link><Link href="/cruises">Cruises From Florida</Link><Link href="/destinations">Florida Destinations</Link><Link href="/vacation-packages">Vacation Packages</Link></div></section>
        <section className="faq-section section-pad" aria-labelledby={`${hub.slug}-faq-title`}><div className="section-heading compact"><p className="eyebrow">Budget planning answers</p><h2 id={`${hub.slug}-faq-title`}>{hub.title} FAQ</h2></div><div className="faq-list">{faqItems.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
        <NewsletterSection />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <SiteFooter />
    </>
  );
}
