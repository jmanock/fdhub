import Link from "next/link";
import AuthorityLinks from "./AuthorityLinks";
import NewsletterSection from "./NewsletterSection";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ThingsToDoSection from "./ThingsToDoSection";
import { VacationPackageCards } from "./VacationPackagePage";
import { lastUpdatedLabel } from "../lib/network";

export default function PackageCategoryPage({ category }) {
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
        <ThingsToDoSection />
        <AuthorityLinks currentPath={`/${category.slug}`} cluster="packages" breadcrumbLabel={category.title} />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
