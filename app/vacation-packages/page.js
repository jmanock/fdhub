import Link from "next/link";
import NewsletterSection from "../components/NewsletterSection";
import PackageFinder from "../components/PackageFinder";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ThingsToDoSection from "../components/ThingsToDoSection";
import { baseUrl, pageImages } from "../lib/network";
import { getPackageDiscoveryFields, packageCategories } from "../lib/packageDiscovery";
import { vacationPackages } from "../lib/vacationPackages";

export const metadata = {
  title: "Florida Vacation Packages | Compare Complete Trip Ideas",
  description: "Search Florida vacation packages by budget, destination, travel style, and duration. Compare cruises, hotels, flights, activities, and estimated trip costs.",
  alternates: { canonical: `${baseUrl}/vacation-packages` }
};

export default function VacationPackagesPage() {
  const finderPackages = vacationPackages.map((item) => ({
    slug: item.slug, h1: item.h1, summary: item.summary, image: item.image, imageAlt: item.imageAlt,
    destination: item.destination, optionDestinations: [...new Set(item.options.map((option) => option.destination))],
    ...getPackageDiscoveryFields(item)
  }));

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy"><p className="eyebrow">Florida vacation discovery</p><h1>Build A Complete Florida Vacation</h1><p className="hero-subhead">Compare complete trip ideas across cruises, hotels, flights, local activities, destinations, budgets, and travel styles.</p><div className="hero-actions"><Link href="/vacation-builder">Use Vacation Builder</Link><a href="#package-finder-title">Search vacation packages</a><Link href="/florida-vacation-planning-guide">Plan a Florida trip</Link></div></div>
          <div className="landing-visual"><SafeImage src={pageImages.floridaCoast} alt="Florida vacation package discovery with beaches hotels cruises and activities" fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div>
        </section>
        <section className="package-categories section-pad" aria-labelledby="package-category-title"><div className="section-heading"><p className="eyebrow">Browse by vacation type</p><h2 id="package-category-title">Start With The Trip You Want</h2></div><div className="guide-card-grid visual-card-grid"><Link className="guide-card story-card" href="/family-vacations"><SafeImage src={pageImages.familyTrip} alt="Florida family vacation packages" fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><h3>Florida Family Vacations</h3><p>Compare family destinations, budgets, beaches, cruises, weekends, and complete family-of-four package ideas.</p></Link>{packageCategories.map((category) => <Link className="guide-card story-card" href={`/${category.slug}`} key={category.slug}><SafeImage src={category.image} alt={category.title} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><h3>{category.title}</h3><p>{category.description}</p></Link>)}</div></section>
        <PackageFinder packages={finderPackages} />
        <ThingsToDoSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
