import Link from "next/link";
import AuthorityLinks from "./AuthorityLinks";
import CarRentalCTA from "./CarRentalCTA";
import NewsletterSection from "./NewsletterSection";
import RevenueCtaCard from "./RevenueCtaCard";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ThingsToDoSection from "./ThingsToDoSection";
import { VacationPackageCards } from "./VacationPackagePage";
import { lastUpdatedLabel } from "../lib/network";
import { getCarRentalRecommendationForPage } from "../lib/affiliate/affiliateInventory.mjs";

export default function PackageCategoryPage({ category }) {
  const carRentalRecommendation = getCarRentalRecommendationForPage(category.slug);
  const packageComponents = [
    ["Where To Stay", "Compare hotel areas, current availability, cancellation terms, and the location of the activities that matter most."],
    ["What To Do", "Choose a small set of attractions, tours, beach days, or family experiences that fit the destination and trip pace."],
    ["Transportation", "Plan airport choices, driving time, transfers, parking, and realistic movement between the hotel and activities."],
    ["Estimated Budget", "Compare the complete trip cost, including lodging, transportation, activities, taxes, fees, and a flexible buffer."],
    ["Suggested Length Of Stay", "Use the package cards below to compare short weekends with longer family and resort stays."]
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span><Link href="/vacation-packages">Vacation Packages</Link></span><span aria-hidden="true">/</span><span aria-current="page">{category.title}</span></nav>
            <p className="eyebrow">Vacation package category</p>
            <h1>{category.title}</h1>
            <p className="updated-label">Updated: {lastUpdatedLabel}</p>
            <p className="hero-subhead">{category.description}</p>
            <div className="hero-actions"><Link href="/vacation-packages">Search all packages</Link><Link href="/florida-vacation-planning-guide">Use the planning guide</Link></div>
          </div>
          <div className="landing-visual"><SafeImage src={category.image} alt={category.title} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div>
        </section>
        <VacationPackageCards packages={category.packages} title={`Compare ${category.title}`} id={`${category.slug}-packages`} />
        <section className="travel-guides section-pad" aria-labelledby={`${category.slug}-components-title`}>
          <div className="section-heading">
            <p className="eyebrow">Vacation package components</p>
            <h2 id={`${category.slug}-components-title`}>Compare The Complete Trip Before Booking</h2>
            <p>A strong package plan connects the stay, activities, transportation, budget, and trip length instead of treating each booking as a separate decision.</p>
          </div>
          <div className="guide-card-grid">
            {packageComponents.map(([title, description]) => <article className="guide-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>
        <section className="travel-guides section-pad" aria-labelledby={`${category.slug}-revenue-title`}>
          <div className="section-heading">
            <p className="eyebrow">Build the complete package</p>
            <h2 id={`${category.slug}-revenue-title`}>Hotels, Attractions & Transportation</h2>
            <p>Compare each trip component before committing to the complete vacation.</p>
          </div>
          <div className="guide-card-grid">
            <RevenueCtaCard eyebrow="Hotels" headline="Compare Florida stays" benefits={["Review current hotel availability", "Confirm cancellation terms and final fees"]} href="https://hoteldealsflorida.org" cta="Find Florida Hotels" trust="Hotel links may earn a commission. Confirm current rates, taxes, fees, and cancellation terms." />
            <RevenueCtaCard eyebrow="Attractions" headline="Add Florida activities" benefits={["Theme parks, tours, and family attractions", "Useful destination activity guides"]} href="https://localdealsflorida.org/best-attractions-in-florida" cta="Compare Florida Attractions" trust="Attraction tickets and availability vary. Confirm current schedules, restrictions, and provider terms." />
            <RevenueCtaCard eyebrow="Transportation" headline="Plan the complete journey" benefits={["Compare flights and airport choices", "Allow realistic transfer and driving time"]} href="https://flightdealsflorida.org" cta="Compare Florida Flights" />
          </div>
        </section>
        <ThingsToDoSection />
        <CarRentalCTA recommendation={carRentalRecommendation} />
        <AuthorityLinks currentPath={`/${category.slug}`} cluster="packages" breadcrumbLabel={category.title} />
        <NewsletterSection title="Get Florida Vacation Package Alerts" copy="Florida package ideas, hotel searches, attraction planning, weekend trips, and practical budget guidance." buttonLabel="Send Package Ideas" />
      </main>
      <SiteFooter />
    </>
  );
}
