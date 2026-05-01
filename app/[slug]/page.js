import { notFound } from "next/navigation";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { baseUrl, landingPageMap, landingPages, pillars } from "../lib/network";

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
          url: `${baseUrl}/og.svg`,
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
      images: [`${baseUrl}/og.svg`]
    }
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const page = landingPageMap[slug];

  if (!page) {
    notFound();
  }

  const relatedPages = page.related.map((slug) => landingPageMap[slug]).filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="hero-subhead">{page.intro}</p>
            <div className="hero-actions" aria-label={`${page.h1} network links`}>
              <a href={pillars[0].href}>{pillars[0].anchor}</a>
              <a href={pillars[1].href}>{pillars[1].anchor}</a>
              <a href={pillars[2].href}>{pillars[2].anchor}</a>
              <a href={pillars[3].href}>{pillars[3].anchor}</a>
            </div>
          </div>
          <div className="landing-visual">
            <img src={pillars[1].image} alt={page.alt} />
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

        <section className="landing-intro section-pad" aria-labelledby="guide-title">
          <div className="content-card">
            <p className="eyebrow">Florida Deals Hub guide</p>
            <h2 id="guide-title">Start with the right deal source</h2>
            <p>
              Florida Deals Hub is the network front door. Use this page to decide whether your
              search belongs on the flight, hotel, cruise, or local deals site. Current offers,
              prices, dates, and availability may change, so always check the linked source before
              making plans.
            </p>
          </div>
        </section>

        <section className="pillars section-pad" aria-labelledby="network-route-title">
          <div className="section-heading">
            <p className="eyebrow">Choose a category</p>
            <h2 id="network-route-title">Browse the Florida Deals Network</h2>
          </div>
          <div className="pillar-grid landing-card-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.key}>
                <div className="pillar-image">
                  <img src={pillar.image} alt={pillar.alt} />
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

        <section className="related-pages section-pad" aria-labelledby="related-title">
          <div className="section-heading compact">
            <p className="eyebrow">Keep exploring</p>
            <h2 id="related-title">Related Florida deal pages</h2>
          </div>
          <div className="popular-link-grid">
            {relatedPages.map((related) => (
              <a href={`/${related.slug}`} key={related.slug}>
                {related.h1}
              </a>
            ))}
          </div>
        </section>

        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
