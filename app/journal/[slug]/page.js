import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterSection from "../../components/NewsletterSection";
import SafeImage from "../../components/SafeImage";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import StoryAnalytics from "../../components/StoryAnalytics";
import {
  getAllStories,
  getNetworkPlanDefaults,
  getRelatedStories,
  getStory,
  getStoryAffiliateLinks,
  getStoryPlanLinks,
  hasAffiliateDisclosure,
  storyBasePath
} from "../../lib/stories";
import { baseUrl } from "../../lib/network";

export function generateStaticParams() {
  return getAllStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) {
    return {};
  }

  const title = `${story.title} | Florida Travel Journal`;
  const description = story.excerpt;
  const imageUrl = story.heroImage || `${baseUrl}/og.svg`;

  return {
    title,
    description,
    alternates: {
      canonical: story.url
    },
    openGraph: {
      title,
      description,
      url: story.url,
      siteName: "Florida Deals Hub",
      type: "article",
      publishedTime: story.publishDate,
      modifiedTime: story.updatedDate,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: story.heroImageAlt || story.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export default async function StoryPage({ params }) {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedStories(story, 3);
  const affiliateLinks = getStoryAffiliateLinks(story);
  const planLinks = getStoryPlanLinks(story);
  const defaultNetworkLinks = getNetworkPlanDefaults();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Florida Deals Hub",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Florida Travel Journal",
        item: `${baseUrl}${storyBasePath}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: story.title,
        item: story.url
      }
    ]
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    image: story.heroImage || `${baseUrl}/og.svg`,
    datePublished: story.publishDate,
    dateModified: story.updatedDate,
    mainEntityOfPage: story.url,
    articleSection: story.categoryDetails.name,
    keywords: story.tags?.join(", "),
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
  };
  const faqSchema = story.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: story.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;

  return (
    <>
      <StoryAnalytics story={story} />
      <SiteHeader />
      <main>
        <article>
          <section className="landing-hero story-hero section-pad">
            <div className="landing-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span aria-hidden="true">/</span>
                <span>
                  <Link href={storyBasePath}>Journal</Link>
                </span>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{story.title}</span>
              </nav>
              <p className="eyebrow">{story.categoryDetails.name}</p>
              <h1>{story.title}</h1>
              <p className="updated-label">Updated {story.updatedDate}</p>
              <p className="hero-subhead">{story.excerpt}</p>
              <div className="story-tags" aria-label="Story tags">
                {(story.tags || []).slice(0, 5).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="landing-visual">
              <SafeImage
                src={story.heroImage}
                alt={story.heroImageAlt || story.title}
                fallback="/images/fallbacks/florida-travel-placeholder.svg"
                width="900"
                height="720"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </section>

          {hasAffiliateDisclosure(story) ? (
            <section className="article-trust section-pad" aria-label="Affiliate disclosure">
              <div className="content-card">
                <p className="affiliate-disclosure">
                  Some links on this site may earn us a commission at no extra cost to you.
                </p>
              </div>
            </section>
          ) : null}

          <section className="landing-intro section-pad" aria-labelledby="story-body-title">
            <div className="content-card story-body">
              <p className="eyebrow">Florida Travel Journal</p>
              <h2 id="story-body-title">{story.destination} Trip Decisions This Story Helps With</h2>
              {story.content.map((section) => (
                <section key={section.heading} className="story-section-block">
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </section>
        </article>

        <section className="plan-trip section-pad" aria-labelledby="story-plan-title">
          <div className="section-heading">
            <p className="eyebrow">Plan your trip</p>
            <h2 id="story-plan-title">Turn This Story Into A Florida Trip</h2>
          </div>
          <div className="guide-card-grid">
            {planLinks.map((link) => (
              <a
                className="guide-card"
                href={link.href}
                key={`${story.slug}-${link.href}`}
                data-story-network="true"
                data-destination-site={link.site}
              >
                <h3>{link.label}</h3>
                <p>Use this related Florida Deals Network page to compare the next part of the plan.</p>
              </a>
            ))}
          </div>
        </section>

        {affiliateLinks.length ? (
          <section className="travel-guides section-pad" aria-labelledby="story-affiliate-title">
            <div className="section-heading">
              <p className="eyebrow">Optional planning picks</p>
              <h2 id="story-affiliate-title">Helpful Gear And Booking Links</h2>
            </div>
            <div className="guide-card-grid">
              {affiliateLinks.map((link) => (
                <a
                  className="guide-card"
                  href={link.affiliateUrl}
                  key={`${story.slug}-${link.title}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  data-story-affiliate="true"
                  data-affiliate-program={link.network}
                  data-advertiser={link.advertiser}
                  data-item-title={link.title}
                  data-category={link.category}
                >
                  <span className="story-category-label">{link.advertiser}</span>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                  <p className="value-line">{link.cta}</p>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <section className="comparison-guides section-pad" aria-labelledby="story-related-title">
          <div className="section-heading">
            <p className="eyebrow">Related stories</p>
            <h2 id="story-related-title">Read More Florida Travel Journal Stories</h2>
          </div>
          <div className="guide-card-grid">
            {relatedStories.map((relatedStory) => (
              <Link
                className="guide-card story-card compact-story-card"
                href={relatedStory.path}
                key={relatedStory.slug}
                data-story-link="true"
              >
                <span className="story-category-label">{relatedStory.categoryDetails.name}</span>
                <h3>{relatedStory.title}</h3>
                <p>{relatedStory.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="popular-searches section-pad" aria-labelledby="story-destinations-title">
          <div className="section-heading compact">
            <p className="eyebrow">Related destinations</p>
            <h2 id="story-destinations-title">Explore More Florida Trip Ideas</h2>
          </div>
          <div className="popular-link-grid">
            {(story.relatedGuides || []).map((guide) => (
              <a href={guide.href} key={guide.href} data-story-link="true">
                {guide.label}
              </a>
            ))}
            {defaultNetworkLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                data-story-network="true"
                data-destination-site={link.site}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {story.faqs?.length ? (
          <section className="faq-section section-pad" aria-labelledby="story-faq-title">
            <div className="section-heading compact">
              <p className="eyebrow">Helpful answers</p>
              <h2 id="story-faq-title">{story.title} FAQ</h2>
            </div>
            <div className="faq-list">
              {story.faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <NewsletterSection />
      </main>
      <SiteFooter />
      <script
        id="story-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="story-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          id="story-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}
