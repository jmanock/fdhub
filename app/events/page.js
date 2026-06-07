import Link from "next/link";
import AuthorityLinks from "../components/AuthorityLinks";
import NewsletterSection from "../components/NewsletterSection";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { baseUrl, pageImages } from "../lib/network";
import { eventTravelHubs, eventTravelPath, trendingDestinationPages } from "../lib/eventTravel";

export const metadata = {
  title: "Event Travel & Trending Destinations | Florida Deals Hub",
  description: "Plan travel around major events, sporting events, spring break, holidays, theme parks, cruise launches, and trending destinations.",
  alternates: { canonical: `${baseUrl}/events` }
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad"><div className="landing-copy"><p className="eyebrow">Event travel command center</p><h1>Plan Travel Around The Events That Matter</h1><p className="hero-subhead">Discover event-driven vacation ideas, then connect verified schedules to hotels, flights, packages, activities, cruises, and destination guides.</p><div className="hero-actions"><Link href="/vacation-builder">Build An Event Vacation</Link><Link href="/vacation-packages">Compare Vacation Packages</Link><Link href="/destinations">Explore Destinations</Link></div></div><div className="landing-visual"><SafeImage src={pageImages.calendar} alt="Event travel and trending destination planning calendar" fallback="/images/fallbacks/florida-travel-placeholder.svg" width="900" height="720" loading="eager" decoding="async" fetchPriority="high" /></div></section>
        <section className="travel-guides section-pad" aria-labelledby="event-hubs-title"><div className="section-heading"><p className="eyebrow">Major event travel hubs</p><h2 id="event-hubs-title">Start With The Event</h2><p>Each hub is built to expand rapidly when verified schedules, official announcements, and travel opportunities become available.</p></div><div className="guide-card-grid visual-card-grid">{eventTravelHubs.map((item) => <Link className="guide-card story-card" href={eventTravelPath(item)} key={item.slug}><SafeImage src={item.image} alt={item.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><span className="story-category-label">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><p className="best-for-tag">{item.travelWindow}</p></Link>)}</div></section>
        <section className="travel-guides section-pad" aria-labelledby="trending-destinations-title"><div className="section-heading"><p className="eyebrow">Trending destination watch</p><h2 id="trending-destinations-title">Travel Trends Worth Comparing</h2><p>Trend pages explain why a destination idea matters and connect it to practical package planning without unsupported hype.</p></div><div className="guide-card-grid visual-card-grid">{trendingDestinationPages.map((item) => <Link className="guide-card story-card" href={eventTravelPath(item)} key={item.slug}><SafeImage src={item.image} alt={item.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" /><span className="story-category-label">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></Link>)}</div></section>
        <AuthorityLinks currentPath="/events" cluster="events" breadcrumbLabel="Travel Events" />
        <NewsletterSection title="Get Florida Event Travel Ideas" copy="Major event guides, trending destinations, seasonal travel ideas, vacation packages, and destination planning." />
      </main>
      <SiteFooter />
    </>
  );
}
