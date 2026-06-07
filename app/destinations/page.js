import Link from "next/link";
import NewsletterSection from "../components/NewsletterSection";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { baseUrl, pageImages } from "../lib/network";
import { destinationAuthorities, destinationPath } from "../lib/destinationAuthority";

export const metadata = {
  title: "Florida Destinations | Travel Guides, Packages & Things To Do",
  description: "Explore authoritative Florida destination guides for Orlando, Miami, Clearwater Beach, Key West, Tampa, St. Augustine, Daytona Beach, Fort Lauderdale, Naples, and Destin.",
  alternates: { canonical: `${baseUrl}/destinations` }
};

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy"><p className="eyebrow">Florida destination authority</p><h1>Explore Florida Destinations</h1><p className="hero-subhead">Choose a Florida destination, then compare complete vacation packages, hotels, flights, cruises, attractions, budgets, and travel guides.</p><div className="hero-actions"><Link href="/vacation-packages">Search Vacation Packages</Link><Link href="/family-vacations">Family Vacations</Link><Link href="/cruises">Cruises From Florida</Link></div></div>
          <div className="landing-visual"><SafeImage src={pageImages.floridaCoast} alt="Florida destination discovery with beaches cities hotels and vacation packages" fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div>
        </section>
        <section className="popular-destinations section-pad" aria-labelledby="destination-directory-title"><div className="section-heading"><p className="eyebrow">Destination mini-sites</p><h2 id="destination-directory-title">Plan A Complete Florida Trip</h2></div><div className="guide-card-grid visual-card-grid">{destinationAuthorities.map((destination) => <Link className="guide-card story-card" href={destinationPath(destination)} key={destination.slug}><SafeImage src={destination.image} alt={destination.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><span className="story-category-label">{destination.region}</span><h3>{destination.name}</h3><p>{destination.overview}</p><p className="best-for-tag">Best time: {destination.bestMonths}</p></Link>)}</div></section>
        <NewsletterSection title="Get Florida Destination Ideas" copy="Vacation packages, destination guides, hotels, flights, cruises, attractions, and weekend trip ideas." />
      </main>
      <SiteFooter />
    </>
  );
}
