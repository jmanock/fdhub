import Link from "next/link";
import NewsletterSection from "../components/NewsletterSection";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import VacationBuilder from "../components/VacationBuilder";
import { baseUrl, pageImages } from "../lib/network";
import { budgetOptions, budgetVacationHubs, departureRegionOptions, travelerOptions, vacationRecommendations, vacationTypeOptions } from "../lib/vacationBuilder";

export const metadata = {
  title: "Florida Vacation Builder | Find Trips By Budget & Travel Style",
  description: "Build a Florida vacation by budget, travelers, vacation type, departure region, and dates. Compare recommended cruises, beaches, family trips, hotels, flights, and activities.",
  alternates: { canonical: `${baseUrl}/vacation-builder` },
  openGraph: { title: "Florida Vacation Builder | Find Trips By Budget & Travel Style", description: "Start with your budget and discover complete Florida vacation recommendations.", url: `${baseUrl}/vacation-builder`, images: [pageImages.familyTrip] }
};

export default function VacationBuilderPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span aria-current="page">Vacation Builder</span></nav><p className="eyebrow">Florida vacation budget planner</p><h1>Build A Florida Vacation Around Your Budget</h1><p className="hero-subhead">Tell us who is traveling, what you want to spend, and the kind of trip you want. We will recommend complete vacation ideas across the Florida Deals Network.</p><div className="hero-actions"><a href="#vacation-builder-title">Start Building</a><Link href="/vacation-packages">Browse Vacation Packages</Link></div></div>
          <div className="landing-visual"><SafeImage src={pageImages.familyTrip} alt="Family using the Florida vacation builder to compare trip budgets" fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div>
        </section>
        <VacationBuilder recommendations={vacationRecommendations} budgetOptions={budgetOptions} travelerOptions={travelerOptions} vacationTypeOptions={vacationTypeOptions} departureRegionOptions={departureRegionOptions} />
        <section className="package-categories section-pad" aria-labelledby="builder-budget-title"><div className="section-heading"><p className="eyebrow">Browse by complete trip budget</p><h2 id="builder-budget-title">Know Your Budget Already?</h2><p>Open a budget hub to compare practical trip recommendations and estimated complete costs.</p></div><div className="guide-card-grid visual-card-grid">{budgetVacationHubs.map((hub) => <Link className="guide-card story-card" href={`/${hub.slug}`} key={hub.slug}><SafeImage src={hub.image} alt={`${hub.title} vacation ideas`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><h3>{hub.title}</h3><p>{hub.description}</p></Link>)}</div></section>
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
