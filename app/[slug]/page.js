import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateBookingSection from "../components/AffiliateBookingSection";
import AuthorityLinks from "../components/AuthorityLinks";
import CarRentalCTA from "../components/CarRentalCTA";
import NewsletterSection from "../components/NewsletterSection";
import PackageCategoryPage from "../components/PackageCategoryPage";
import FamilyVacationPage from "../components/FamilyVacationPage";
import CruisePlanningPage from "../components/CruisePlanningPage";
import EventTravelPage from "../components/EventTravelPage";
import BudgetVacationHubPage from "../components/BudgetVacationHubPage";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import TransferBookingCard from "../components/TransferBookingCard";
import TravelBookingCard from "../components/TravelBookingCard";
import { StoryModule, TravelTipsModule } from "../components/StoryModules";
import VacationPackagePage, { VacationPackageCards } from "../components/VacationPackagePage";
import { getAffiliateRecommendationsForPage, getCarRentalRecommendationForPage } from "../lib/affiliate/affiliateInventory.mjs";
import { piscifunGearPicks } from "../lib/affiliate/piscifunLinks";
import { destinationHubs, getDestinationHub, getDestinationHubStories, getDestinationHubUrl } from "../lib/destinationHubs";
import {
  baseUrl,
  getBreadcrumbs,
  getFaqs,
  getIntroParagraphs,
  getRelatedSearchLinks,
  landingPageMap,
  landingPages,
  lastUpdatedLabel,
  pillars,
  stayWithTripCards
} from "../lib/network";
import { getLatestStories, getTrendingStories } from "../lib/stories";
import { getTravelNewsItems } from "../lib/travelNews";
import { transferAndTravelSlugs } from "../lib/revenuePartners";
import { inferTopicCluster } from "../lib/topicClusters";
import { getPackageCategory, packageCategories } from "../lib/packageDiscovery";
import { familyVacationGuides, getFamilyVacationGuide } from "../lib/familyVacations";
import { cruisePlanningGuides, getCruisePlanningGuide } from "../lib/cruisePlanning";
import { budgetVacationHubs, getBudgetVacationHub } from "../lib/vacationBuilder";
import { getWorldCup2026PageByPath, worldCup2026Guides, worldCup2026Path } from "../lib/worldCup2026";
import {
  getVacationPackage,
  getVacationPackagesForDestination,
  vacationPackages
} from "../lib/vacationPackages";

export function generateStaticParams() {
  return [
    ...landingPages.filter((page) => !getFamilyVacationGuide(page.slug) && !getCruisePlanningGuide(page.slug)).map((page) => ({ slug: page.slug })),
    ...destinationHubs.map((hub) => ({ slug: hub.slug })),
    ...vacationPackages.map((item) => ({ slug: item.slug })),
    ...packageCategories.map((item) => ({ slug: item.slug })),
    ...familyVacationGuides.map((item) => ({ slug: item.slug })),
    ...cruisePlanningGuides.map((item) => ({ slug: item.slug })),
    ...budgetVacationHubs.map((item) => ({ slug: item.slug })),
    ...worldCup2026Guides
      .filter((item) => worldCup2026Path(item).split("/").filter(Boolean).length === 1)
      .map((item) => ({ slug: worldCup2026Path(item).slice(1) }))
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = landingPageMap[slug];
  const destinationHub = getDestinationHub(slug);
  const vacationPackage = getVacationPackage(slug);
  const packageCategory = getPackageCategory(slug);
  const familyVacationGuide = getFamilyVacationGuide(slug);
  const cruisePlanningGuide = getCruisePlanningGuide(slug);
  const budgetVacationHub = getBudgetVacationHub(slug);
  const worldCupPage = getWorldCup2026PageByPath(slug);

  if (worldCupPage) {
    const url = `${baseUrl}${worldCup2026Path(worldCupPage)}`;
    return {
      title: `${worldCupPage.title} | Florida Travel Planning`,
      description: worldCupPage.description,
      alternates: { canonical: url },
      openGraph: { title: worldCupPage.title, description: worldCupPage.description, url, siteName: "Florida Deals Hub", type: "article", images: [{ url: worldCupPage.image, width: 1200, height: 630, alt: worldCupPage.imageAlt }] },
      twitter: { card: "summary_large_image", title: worldCupPage.title, description: worldCupPage.description, images: [worldCupPage.image] }
    };
  }

  if (budgetVacationHub) {
    const url = `${baseUrl}/${budgetVacationHub.slug}`;
    return {
      title: `${budgetVacationHub.title} | Florida Vacation Budget Planner`,
      description: budgetVacationHub.description,
      alternates: { canonical: url },
      openGraph: { title: budgetVacationHub.title, description: budgetVacationHub.description, url, siteName: "Florida Deals Hub", type: "website", images: [{ url: budgetVacationHub.image, width: 1200, height: 630, alt: `${budgetVacationHub.title} vacation planning` }] },
      twitter: { card: "summary_large_image", title: budgetVacationHub.title, description: budgetVacationHub.description, images: [budgetVacationHub.image] }
    };
  }

  if (cruisePlanningGuide) {
    const url = `${baseUrl}/${cruisePlanningGuide.slug}`;
    return {
      title: cruisePlanningGuide.title,
      description: cruisePlanningGuide.metaDescription,
      alternates: { canonical: url },
      openGraph: { title: cruisePlanningGuide.title, description: cruisePlanningGuide.metaDescription, url, siteName: "Florida Deals Hub", type: "article", images: [{ url: cruisePlanningGuide.image, width: 1200, height: 630, alt: cruisePlanningGuide.imageAlt }] },
      twitter: { card: "summary_large_image", title: cruisePlanningGuide.title, description: cruisePlanningGuide.metaDescription, images: [cruisePlanningGuide.image] }
    };
  }

  if (familyVacationGuide) {
    const url = `${baseUrl}/${familyVacationGuide.slug}`;
    return {
      title: familyVacationGuide.title,
      description: familyVacationGuide.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        title: familyVacationGuide.title,
        description: familyVacationGuide.metaDescription,
        url,
        siteName: "Florida Deals Hub",
        type: "article",
        images: [{ url: familyVacationGuide.image, width: 1200, height: 630, alt: familyVacationGuide.imageAlt }]
      },
      twitter: { card: "summary_large_image", title: familyVacationGuide.title, description: familyVacationGuide.metaDescription, images: [familyVacationGuide.image] }
    };
  }

  if (packageCategory) {
    const url = `${baseUrl}/${packageCategory.slug}`;
    return {
      title: packageCategory.title,
      description: packageCategory.description,
      alternates: { canonical: url },
      openGraph: { title: packageCategory.title, description: packageCategory.description, url, siteName: "Florida Deals Hub", type: "website", images: [packageCategory.image] },
      twitter: { card: "summary_large_image", title: packageCategory.title, description: packageCategory.description, images: [packageCategory.image] }
    };
  }

  if (vacationPackage) {
    const url = `${baseUrl}/${vacationPackage.slug}`;

    return {
      title: vacationPackage.title,
      description: vacationPackage.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        title: vacationPackage.title,
        description: vacationPackage.metaDescription,
        url,
        siteName: "Florida Deals Hub",
        type: "article",
        images: [{ url: vacationPackage.image, width: 1200, height: 630, alt: vacationPackage.imageAlt }]
      },
      twitter: {
        card: "summary_large_image",
        title: vacationPackage.title,
        description: vacationPackage.metaDescription,
        images: [vacationPackage.image]
      }
    };
  }

  if (destinationHub) {
    const title = `${destinationHub.name} Florida Travel Hub | Stories, Guides, Flights, Hotels & Things To Do`;
    const description = `Plan a ${destinationHub.name} Florida trip with travel stories, destination guides, flights, hotels, cruises, local activities, and related Florida Deals Network links.`;

    return {
      title,
      description,
      alternates: {
        canonical: getDestinationHubUrl(destinationHub)
      },
      openGraph: {
        title,
        description,
        url: getDestinationHubUrl(destinationHub),
        siteName: "Florida Deals Hub",
        type: "website",
        images: [
          {
            url: destinationHub.image,
            width: 1200,
            height: 630,
            alt: destinationHub.imageAlt
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [destinationHub.image]
      }
    };
  }

  if (!page) {
    return {};
  }

  const url = `${baseUrl}/${page.slug}`;
  const imageUrl = page.image || `${baseUrl}/og.svg`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url,
      siteName: "Florida Deals Hub",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: [imageUrl]
    }
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const page = landingPageMap[slug];
  const destinationHub = getDestinationHub(slug);
  const vacationPackage = getVacationPackage(slug);
  const packageCategory = getPackageCategory(slug);
  const familyVacationGuide = getFamilyVacationGuide(slug);
  const cruisePlanningGuide = getCruisePlanningGuide(slug);
  const budgetVacationHub = getBudgetVacationHub(slug);
  const worldCupPage = getWorldCup2026PageByPath(slug);

  if (worldCupPage) {
    return <EventTravelPage page={worldCupPage} />;
  }

  if (budgetVacationHub) {
    return <BudgetVacationHubPage hub={budgetVacationHub} />;
  }

  if (cruisePlanningGuide) {
    return <CruisePlanningPage guide={cruisePlanningGuide} />;
  }

  if (familyVacationGuide) {
    return <FamilyVacationPage guide={familyVacationGuide} />;
  }

  if (packageCategory) {
    return <PackageCategoryPage category={packageCategory} />;
  }

  if (vacationPackage) {
    return <VacationPackagePage packagePage={vacationPackage} />;
  }

  if (destinationHub) {
    return <DestinationHubPage hub={destinationHub} />;
  }

  if (!page) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbs(page);
  const faqs = getFaqs(page);
  const introParagraphs = getIntroParagraphs(page);
  const relatedSearchLinks = getRelatedSearchLinks(page);
  const gearPicks = page.showPiscifunGear ? piscifunGearPicks : [];
  const affiliateRecommendations = getAffiliateRecommendationsForPage(page.slug);
  const carRentalRecommendation = getCarRentalRecommendationForPage(page.slug);
  const showTransferAndTravel = transferAndTravelSlugs.has(page.slug);
  const pageStories = getTrendingStories(6);
  const pageTravelTips = [
    {
      title: "Choose the planning anchor",
      copy: "Use this guide to decide whether the next step is flights, hotels, cruises, local activities, or travel gear.",
      href: "/florida-vacation-planning-guide",
      cta: "Plan The Trip"
    },
    {
      title: "Compare related destinations",
      copy: "Move from a broad Florida idea into a destination hub when location starts to matter more than category.",
      href: "/best-places-to-visit-in-florida",
      cta: "Browse Destinations"
    },
    {
      title: "Keep searches connected",
      copy: "Use network links on this page so flights, hotels, cruises, and local ideas support the same trip.",
      href: "/florida-travel-deals",
      cta: "Explore The Network"
    }
  ];
  const pageUrl = `${baseUrl}/${page.slug}`;
  const pageImageUrl = page.image || `${baseUrl}/og.svg`;
  const topicCluster = inferTopicCluster(page.h1, page.eyebrow, page.summary, page.intro);
  const modifiedDate = new Date().toISOString().slice(0, 10);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href === "/" ? "" : crumb.href}`
    }))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.h1} deal preview links`,
    url: pageUrl,
    itemListElement: page.previews.map(([label, copy, href], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: label,
        description: copy,
        url: href
      }
    }))
  };
  const articleSchema = page.article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.h1,
        description: page.metaDescription,
        image: pageImageUrl,
        dateModified: modifiedDate,
        datePublished: modifiedDate,
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: "Florida Deals Hub",
          url: baseUrl
        },
        publisher: {
          "@type": "Organization",
          name: "Florida Deals Hub",
          url: baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/favicon.svg`
          }
        }
      }
    : null;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.href}>
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {index === breadcrumbs.length - 1 ? (
                    <span aria-current="page">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  )}
                </span>
              ))}
            </nav>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="updated-label">Updated: {lastUpdatedLabel}</p>
            <p className="hero-subhead">{introParagraphs[0]}</p>
            <div className="hero-actions" aria-label={`${page.h1} network links`}>
              <a href={pillars[0].href}>{pillars[0].anchor}</a>
              <a href={pillars[1].href}>{pillars[1].anchor}</a>
              <a href={pillars[2].href}>{pillars[2].anchor}</a>
              <a href={pillars[3].href}>{pillars[3].anchor}</a>
            </div>
          </div>
          <div className="landing-visual">
            <SafeImage
              src={page.image || pillars[1].image}
              alt={page.alt}
              fallback="/images/fallbacks/florida-travel-placeholder.svg"
              width="900"
              height="720"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="landing-badges" aria-label="Florida Deals Hub categories">
              {pillars.map((pillar) => (
                <a href={pillar.href} key={pillar.key}>
                  <span>{pillar.badge}</span>
                  {pillar.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="page-trust section-pad" aria-label="Florida Deals Hub trust notes">
          <div className="trust-notes page-trust-notes">
            <span>Curated Florida travel and local deal pages</span>
            <span>Updated regularly</span>
            <span>Prices and availability may change</span>
            <span>Confirm current details with the source</span>
          </div>
        </section>

        {page.article ? (
          <section className="article-trust section-pad" aria-labelledby="article-trust-title">
            <div className="content-card">
              <p className="eyebrow">Why trust Florida Deals Hub?</p>
              <h2 id="article-trust-title">A Florida-focused planning network</h2>
              <p>
                Florida Deals Hub organizes flights, hotels, cruises, attractions, restaurants,
                events, and destination guides by city, category, and trip type so travelers can
                compare options faster. Prices and availability may change, so confirm current
                details with booking or official sources before making plans.
              </p>
            </div>
          </section>
        ) : null}

        <section className="landing-intro section-pad" aria-labelledby="guide-title">
          <div className="content-card">
            <p className="eyebrow">Florida Deals Hub guide</p>
            <h2 id="guide-title">Start with the right deal source</h2>
            {introParagraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Florida Deals Hub is the network front door. Use this page to decide whether your
              search belongs on the flight, hotel, cruise, or local deals site.
            </p>
          </div>
        </section>

        {page.recommendations?.length ? (
          <section className="guide-recommendations section-pad" aria-labelledby="recommendations-title">
            <div className="section-heading compact">
              <p className="eyebrow">Travel planning</p>
              <h2 id="recommendations-title">Related Florida Guides</h2>
            </div>
            <div className="guide-card-grid">
              {page.recommendations.map(([label, href, copy]) => (
                <a className="guide-card" href={href} key={`${page.slug}-${label}`}>
                  <h3>{label}</h3>
                  <p>{copy}</p>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <StoryModule
          eyebrow="Related stories"
          title="Florida Travel Journal Picks"
          stories={pageStories.slice(0, 3)}
          id={`${page.slug}-story-picks`}
        />

        {page.rows?.length ? (
          <section className="comparison-section section-pad" aria-labelledby="comparison-title">
            <div className="section-heading compact">
              <p className="eyebrow">Comparison guide</p>
              <h2 id="comparison-title">Which Florida trip fits better?</h2>
            </div>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Compare</th>
                    <th>{page.optionA}</th>
                    <th>{page.optionB}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.rows.map(([label, optionA, optionB]) => (
                    <tr key={`${page.slug}-${label}`}>
                      <th scope="row">{label}</th>
                      <td>{optionA}</td>
                      <td>{optionB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <section className="pillars section-pad" aria-labelledby="network-route-title">
          <div className="section-heading">
            <p className="eyebrow">Choose a category</p>
            <h2 id="network-route-title">Start Planning Your Florida Trip</h2>
          </div>
          <div className="pillar-grid landing-card-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.key}>
                <div className="pillar-image">
                  <SafeImage
                    src={pillar.image}
                    alt={pillar.alt}
                    fallback="/images/fallbacks/florida-deals-placeholder.svg"
                    width="900"
                    height="620"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{pillar.badge}</span>
                </div>
                <div className="pillar-body">
                  <h3>{pillar.title}</h3>
                  <p className="best-for-tag">Best for: {pillar.bestFor}</p>
                  <p>{pillar.copy}</p>
                  <p className="value-line">Why this exists: {pillar.why}</p>
                  <a href={pillar.href}>{pillar.anchor}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="preview section-pad" aria-labelledby="featured-title">
          <div className="section-heading">
            <p className="eyebrow">Featured routes</p>
            <h2 id="featured-title">Featured Florida savings to check</h2>
          </div>
          <div className="preview-grid">
            {page.previews.map(([label, copy, href, tone]) => (
              <a className={`preview-card ${tone}`} href={href} key={label}>
                <span>{label}</span>
                <h3>{label}</h3>
                <p>{copy}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="stay-with-trip section-pad" aria-labelledby="stay-with-trip-title">
          <div className="section-heading">
            <p className="eyebrow">Stay with your trip</p>
            <h2 id="stay-with-trip-title">Need a place to stay?</h2>
          </div>
          <div className="router-card-grid compact-router-grid">
            {stayWithTripCards.map((hotel) => (
              <article className="router-card booking-card" key={`${page.slug}-${hotel.title}`}>
                <h3>{hotel.title}</h3>
                <p>{hotel.copy}</p>
                <a
                  href={hotel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hotel-destination={hotel.destination}
                  data-hotel-provider="expedia"
                >
                  {hotel.title}
                </a>
              </article>
            ))}
          </div>
        </section>

        {gearPicks.length ? (
          <section className="gear-picks section-pad" aria-labelledby="gear-picks-title">
            <div className="section-heading">
              <p className="eyebrow">Outdoor trip essentials</p>
              <h2 id="gear-picks-title">Florida Travel Gear Picks</h2>
              <p>
                Helpful gear sources for beach weekends, fishing trips, water activities, parks,
                springs, and Florida road trips. Product availability and prices may change.
              </p>
            </div>
            <div className="guide-card-grid">
              {gearPicks.map((item) => (
                <article className="guide-card affiliate-gear-card" key={item.title}>
                  <SafeImage
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fallback="/images/fallbacks/florida-deals-placeholder.svg"
                    width="640"
                    height="420"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="best-for-tag">Best for: {item.bestForTags.join(", ")}</p>
                  <a
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    data-affiliate-program="awin"
                    data-advertiser={item.advertiser || "piscifun"}
                    data-item-title={item.title}
                    data-category={item.category}
                  >
                    {item.advertiser === "tidewe" ? "Browse TideWe Outdoor Gear" : item.title === "Shop Outdoor Gear" ? "Shop Outdoor Gear" : "Browse Piscifun Products"}
                  </a>
                  <p className="affiliate-disclosure">
                    Some links on this site may earn us a commission at no extra cost to you.
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <AffiliateBookingSection recommendations={affiliateRecommendations} />
        <CarRentalCTA recommendation={carRentalRecommendation} />
        {showTransferAndTravel ? <section className="section-pad"><div className="guide-card-grid"><TransferBookingCard slug={page.slug} /><TravelBookingCard /></div></section> : null}

        <TravelTipsModule tips={pageTravelTips} />

        <section className="related-pages section-pad" aria-labelledby="related-title">
          <div className="section-heading compact">
            <p className="eyebrow">Keep exploring</p>
            <h2 id="related-title">Related Florida Searches</h2>
          </div>
          <div className="popular-link-grid">
            {relatedSearchLinks.map((related) => (
              <a href={related.href} key={related.href}>
                {related.label}
              </a>
            ))}
          </div>
        </section>

        <section className="faq-section section-pad" aria-labelledby="faq-title">
          <div className="section-heading compact">
            <p className="eyebrow">Helpful answers</p>
            <h2 id="faq-title">{page.h1} FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorityLinks currentPath={`/${page.slug}`} cluster={topicCluster} />
        <NewsletterSection />
      </main>
      <SiteFooter />
      <script
        id={`${page.slug}-breadcrumbs-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id={`${page.slug}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id={`${page.slug}-item-list-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {articleSchema ? (
        <script
          id={`${page.slug}-article-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      ) : null}
    </>
  );
}

function DestinationHubPage({ hub }) {
  const stories = getDestinationHubStories(hub.name, 6);
  const packages = getVacationPackagesForDestination(hub.name, 3);
  const latestStories = getLatestStories(4);
  const newsItems = getTravelNewsItems(3).filter(
    (item) => item.destination === hub.name || item.destination === "Florida"
  );
  const pageUrl = getDestinationHubUrl(hub);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${hub.name} Florida planning links`,
    url: pageUrl,
    itemListElement: [...hub.networkLinks, ...hub.guides].map(([label, href], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: label,
        url: href.startsWith("http") ? href : `${baseUrl}${href}`
      }
    }))
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <span><Link href="/">Home</Link></span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{hub.name}</span>
            </nav>
            <p className="eyebrow">Destination hub</p>
            <h1>{hub.name} Florida Travel Hub</h1>
            <p className="updated-label">Updated: {lastUpdatedLabel}</p>
            <p className="hero-subhead">{hub.description}</p>
            <div className="hero-actions" aria-label={`${hub.name} planning links`}>
              {hub.networkLinks.slice(0, 4).map(([label, href]) => (
                <a href={href} key={href}>{label}</a>
              ))}
            </div>
          </div>
          <div className="landing-visual">
            <SafeImage
              src={hub.image}
              alt={hub.imageAlt}
              fallback="/images/fallbacks/florida-travel-placeholder.svg"
              width="900"
              height="720"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        <section className="travel-guides section-pad" aria-labelledby="destination-stories-title">
          <div className="section-heading">
            <p className="eyebrow">Stories and ideas</p>
            <h2 id="destination-stories-title">{hub.name} Travel Stories</h2>
          </div>
          <div className="guide-card-grid">
            {stories.map((story) => (
              <Link className="guide-card story-card" href={story.path} key={story.slug}>
                <SafeImage
                  src={story.heroImage}
                  alt={story.heroImageAlt || story.title}
                  fallback="/images/fallbacks/florida-travel-placeholder.svg"
                  width="720"
                  height="430"
                  loading="lazy"
                  decoding="async"
                />
                <span className="story-category-label">{story.categoryDetails.name}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <VacationPackageCards
          packages={packages}
          title={`${hub.name} Vacation Packages And Cost Planners`}
          id={`${hub.slug}-vacation-packages`}
        />

        <section className="popular-searches section-pad" aria-labelledby={`${hub.slug}-package-styles-title`}>
          <div className="section-heading compact">
            <p className="eyebrow">Compare package styles</p>
            <h2 id={`${hub.slug}-package-styles-title`}>Choose A {hub.name} Vacation Style</h2>
          </div>
          <div className="popular-link-grid">
            <Link href="/family-vacations">Family packages</Link>
            <Link href="/cruise-packages">Cruise packages</Link>
            <Link href="/weekend-getaways">Weekend packages</Link>
            <Link href="/family-vacations-under-3000">Budget packages</Link>
            <Link href="/luxury-vacations">Luxury packages</Link>
          </div>
        </section>

        <section className="plan-trip section-pad" aria-labelledby="destination-network-title">
          <div className="section-heading">
            <p className="eyebrow">Plan your trip</p>
            <h2 id="destination-network-title">Build A {hub.name} Trip Across The Network</h2>
          </div>
          <div className="router-card-grid">
            {hub.networkLinks.map(([label, href, site]) => (
              <article className="router-card" key={href}>
                <h3>{label}</h3>
                <p>Continue planning with the {site === "hub" ? "Florida Deals Hub" : `Florida Deals ${site}`} network.</p>
                <a href={href}>{label}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="popular-searches section-pad" aria-labelledby="destination-guides-title">
          <div className="section-heading compact">
            <p className="eyebrow">Guides</p>
            <h2 id="destination-guides-title">Popular {hub.name} Planning Guides</h2>
          </div>
          <div className="popular-link-grid">
            {hub.guides.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </div>
        </section>

        {newsItems.length ? (
          <section className="travel-guides section-pad" aria-labelledby="destination-news-title">
            <div className="section-heading">
              <p className="eyebrow">Travel updates</p>
              <h2 id="destination-news-title">Florida Travel News To Watch</h2>
            </div>
            <div className="guide-card-grid">
              {newsItems.map((item) => (
                <Link className="guide-card story-card compact-story-card" href={item.path} key={item.slug}>
                  <span className="story-category-label">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <StoryModule
          eyebrow="Recently published"
          title="Recent Florida Travel Journal Reads"
          stories={latestStories}
          id={`${hub.slug}-recent-stories`}
        />

        <AuthorityLinks currentPath={`/${hub.slug}`} cluster="destinations" destination={hub.name} breadcrumbLabel={`${hub.name} Travel Hub`} />
        <NewsletterSection
          eyebrow="Florida travel list"
          title="Get Florida Travel Ideas Every Week"
          copy="Weekend trips, beach ideas, cruise tips, hotel guides, and Florida travel stories sent to your inbox."
          buttonLabel="Join the Florida Travel List"
        />
      </main>
      <SiteFooter />
      <script
        id={`${hub.slug}-destination-item-list-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
