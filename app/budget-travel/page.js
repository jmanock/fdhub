import Link from "next/link";
import AuthorityLinks from "../components/AuthorityLinks";
import NewsletterSection from "../components/NewsletterSection";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { baseUrl, pageImages } from "../lib/network";
import { budgetVacationHubs } from "../lib/vacationBuilder";

export const metadata = {
  title: "Florida Budget Travel | Vacations, Family Trips & Cruises By Budget",
  description: "Compare Florida vacations, family trips, cruises, destinations, and complete packages by budget with practical planning ranges.",
  alternates: { canonical: `${baseUrl}/budget-travel` }
};

export default function BudgetTravelPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link></span><span aria-hidden="true">/</span><span aria-current="page">Budget Travel</span></nav><p className="eyebrow">Florida budget travel authority</p><h1>Plan A Florida Vacation Around Your Budget</h1><p className="hero-subhead">Compare complete Florida trips by budget, then connect the right destinations, family vacations, cruises, hotels, flights, activities, and package plans.</p><div className="hero-actions"><Link href="/vacation-builder">Use Vacation Builder</Link><Link href="/vacations-under-2000">Vacations Under $2,000</Link><Link href="/cruises-under-2000">Cruises Under $2,000</Link></div></div>
          <div className="landing-visual"><SafeImage src={pageImages.planning} alt="Florida budget vacation planning with trip costs and packages" fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div>
        </section>
        <section className="travel-guides section-pad" aria-labelledby="budget-hubs-title"><div className="section-heading"><p className="eyebrow">Budget-first trip planning</p><h2 id="budget-hubs-title">Choose A Complete Trip Budget</h2><p>Every estimate is a planning range, not a guaranteed price. Verify current rates, fees, and availability before booking.</p></div><div className="guide-card-grid visual-card-grid">{budgetVacationHubs.map((item) => <Link className="guide-card story-card" href={`/${item.slug}`} key={item.slug}><SafeImage src={item.image} alt={`${item.title} Florida travel planning`} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><h3>{item.title}</h3><p>{item.description}</p></Link>)}</div></section>
        <AuthorityLinks currentPath="/budget-travel" cluster="budget" breadcrumbLabel="Budget Travel" />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
