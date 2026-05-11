import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
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

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = landingPageMap[slug];

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

  if (!page) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbs(page);
  const faqs = getFaqs(page);
  const introParagraphs = getIntroParagraphs(page);
  const relatedSearchLinks = getRelatedSearchLinks(page);
  const pageUrl = `${baseUrl}/${page.slug}`;
  const pageImageUrl = page.image || `${baseUrl}/og.svg`;
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
            <img
              src={page.image || pillars[1].image}
              alt={page.alt}
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

        <section className="pillars section-pad" aria-labelledby="network-route-title">
          <div className="section-heading">
            <p className="eyebrow">Choose a category</p>
            <h2 id="network-route-title">Browse the Florida Deals Network</h2>
          </div>
          <div className="pillar-grid landing-card-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.key}>
                <div className="pillar-image">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    width="900"
                    height="620"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{pillar.badge}</span>
                </div>
                <div className="pillar-body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
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

        <section className="related-pages section-pad" aria-labelledby="related-title">
          <div className="section-heading compact">
            <p className="eyebrow">Keep exploring</p>
            <h2 id="related-title">Related Florida Deal Searches</h2>
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

        <NewsletterSection />
      </main>
      <SiteFooter />
      <Script id={`${page.slug}-breadcrumbs-schema`} type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id={`${page.slug}-faq-schema`} type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id={`${page.slug}-item-list-schema`} type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </Script>
      {articleSchema ? (
        <Script id={`${page.slug}-article-schema`} type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </Script>
      ) : null}
    </>
  );
}
