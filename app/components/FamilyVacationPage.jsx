import Link from "next/link";
import AuthorityLinks from "./AuthorityLinks";
import CarRentalCTA from "./CarRentalCTA";
import NewsletterSection from "./NewsletterSection";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import PackageFinder from "./PackageFinder";
import { baseUrl, lastUpdatedLabel } from "../lib/network";
import { familyGuideLinks, getFamilyGallery, getFamilyPackages } from "../lib/familyVacations";
import { getPackageDiscoveryFields } from "../lib/packageDiscovery";
import { getCarRentalRecommendationForPage } from "../lib/affiliate/affiliateInventory.mjs";

export default function FamilyVacationPage({ guide }) {
  const packages = getFamilyPackages(guide);
  const finderPackages = packages.map((item) => ({
    slug: item.slug,
    h1: item.h1,
    summary: item.summary,
    image: item.image,
    imageAlt: item.imageAlt,
    destination: item.destination,
    optionDestinations: [...new Set(item.options.map((option) => option.destination))],
    ...getPackageDiscoveryFields(item)
  }));
  const gallery = getFamilyGallery(guide);
  const pageUrl = `${baseUrl}/${guide.slug}`;
  const carRentalRecommendation = getCarRentalRecommendationForPage(guide.slug, { pageType: "family", destination: guide.destination });
  const faqs = [
    [`What is the best way to plan ${guide.h1.toLowerCase()}?`, "Choose the trip anchor first, then compare the complete cost of flights, hotels, cruises, transportation, food, and activities."],
    [`What budget should a family of four expect for ${guide.destination}?`, "A focused long weekend may fit near $2,000, while longer stays, flights, premium hotels, cruises, or theme parks can move the total toward $3,000-$5,000 or more."],
    [`When is the best time for ${guide.h1.toLowerCase()}?`, guide.bestMonths],
    ["Are the package costs guaranteed prices?", "No. They are editorial planning ranges. Confirm live pricing, fees, restrictions, and availability with each provider."]
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Family Vacations", item: `${baseUrl}/family-vacations` },
      { "@type": "ListItem", position: 3, name: guide.h1, item: pageUrl }
    ]
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span><Link href="/family-vacations">Family Vacations</Link></span><span aria-hidden="true">/</span><span aria-current="page">{guide.h1}</span></nav>
            <p className="eyebrow">Florida family vacation authority</p>
            <h1>{guide.h1}</h1>
            <p className="updated-label">Updated: {lastUpdatedLabel}</p>
            <p className="hero-subhead">{guide.intro}</p>
            <div className="hero-actions">{guide.network.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
          </div>
          <figure className="landing-visual story-hero-figure"><SafeImage src={guide.image} alt={guide.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /><figcaption>{guide.imageAlt}</figcaption></figure>
        </section>

        <section className="package-summary section-pad"><div className="content-card package-summary-card"><p className="eyebrow">Family trip summary</p><h2>Plan The Whole Family Vacation</h2><dl className="package-facts"><div><dt>Travel party</dt><dd>Family of 4</dd></div><div><dt>Best months</dt><dd>{guide.bestMonths}</dd></div><div><dt>Family-friendly rating</dt><dd>{guide.rating}</dd></div><div><dt>Budget range</dt><dd>$1,500-$5,000+</dd></div><div><dt>Trip anchor</dt><dd>{guide.destination}</dd></div></dl></div></section>

        <section className="package-gallery section-pad" aria-labelledby={`${guide.slug}-gallery-title`}><div className="section-heading"><p className="eyebrow">Family destination gallery</p><h2 id={`${guide.slug}-gallery-title`}>Picture The Family Trip</h2></div><div className="package-gallery-grid">{gallery.map((image, index) => <figure key={image}><SafeImage src={image} alt={`${guide.destination} family vacation idea ${index + 1}`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="480" loading="lazy" decoding="async" /><figcaption>{index === 0 ? "Destination anchor" : "Family vacation option"}</figcaption></figure>)}</div></section>

        <section className="family-budget-section section-pad" aria-labelledby={`${guide.slug}-budget-title`}><div className="section-heading"><p className="eyebrow">Family of four budgets</p><h2 id={`${guide.slug}-budget-title`}>Compare Family Vacation Budgets</h2></div><div className="guide-card-grid">{guide.budgets.map(([label, budget, copy]) => <article className="guide-card family-budget-card" key={label}><p className="best-for-tag">{label}</p><h3>{budget}</h3><p>{copy}</p></article>)}</div></section>

        <section className="comparison-section section-pad" aria-labelledby={`${guide.slug}-comparison-title`}><div className="section-heading"><p className="eyebrow">Vacation comparison</p><h2 id={`${guide.slug}-comparison-title`}>Which Family Trip Fits?</h2></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>Compare</th><th>Value plan</th><th>Comfort plan</th></tr></thead><tbody><tr><th scope="row">Hotel</th><td>Value-focused area or shorter stay</td><td>Stronger location, resort, or larger room</td></tr><tr><th scope="row">Activities</th><td>One anchor activity plus free time</td><td>Multiple paid activities with backup options</td></tr><tr><th scope="row">Transportation</th><td>Drive or flexible airfare</td><td>Better flight times or simpler transfers</td></tr><tr><th scope="row">Best for</th><td>Families controlling total cost</td><td>Families prioritizing convenience</td></tr></tbody></table></div></section>

        <section className="family-activity-highlights section-pad" aria-labelledby={`${guide.slug}-activities-title`}><div className="section-heading"><p className="eyebrow">Family activity highlights</p><h2 id={`${guide.slug}-activities-title`}>Build Days Everyone Can Handle</h2></div><div className="guide-card-grid">{guide.activities.map((activity, index) => <article className="guide-card" key={activity}><p className="best-for-tag">Family activity {index + 1}</p><h3>{activity}</h3><p>Keep travel time, weather, rest breaks, and nearby food options in the plan.</p></article>)}</div></section>

        <PackageFinder packages={finderPackages} />
        <CarRentalCTA recommendation={carRentalRecommendation} />

        <section className="related-pages section-pad" aria-labelledby={`${guide.slug}-related-title`}><div className="section-heading compact"><p className="eyebrow">Family vacation ecosystem</p><h2 id={`${guide.slug}-related-title`}>Related Family Vacations</h2></div><div className="popular-link-grid">{familyGuideLinks.filter(([, href]) => href !== `/${guide.slug}`).slice(0, 12).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div></section>

        <section className="faq-section section-pad" aria-labelledby={`${guide.slug}-faq-title`}><div className="section-heading compact"><p className="eyebrow">Family planning answers</p><h2 id={`${guide.slug}-faq-title`}>{guide.h1} FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
        <AuthorityLinks currentPath={`/${guide.slug}`} cluster="family" destination={guide.destination === "Florida" ? null : guide.destination} />
        <NewsletterSection title="Get Florida Family Vacation Ideas" copy="Family packages, beach ideas, cruise planning, destination guides, and practical budget tips." />
      </main>
      <SiteFooter />
      <script id={`${guide.slug}-faq-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id={`${guide.slug}-breadcrumbs-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
