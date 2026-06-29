import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorityLinks from "../../components/AuthorityLinks";
import MostViewedStories from "../../components/MostViewedStories";
import NewsletterSection from "../../components/NewsletterSection";
import ReadingProgressBar from "../../components/ReadingProgressBar";
import SafeImage from "../../components/SafeImage";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import StoryAnalytics from "../../components/StoryAnalytics";
import { StoryModule, TravelTipsModule } from "../../components/StoryModules";
import TravelEssentialsBlock from "../../components/TravelEssentialsBlock";
import {
  getAllStories,
  getPlanThisTripLinks,
  getStoriesByCategory,
  getStoryCategories,
  getStoryCategory,
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
  return [
    ...getAllStories().map((story) => ({ slug: story.slug })),
    ...getStoryCategories().map((category) => ({ slug: category.slug }))
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = getStory(slug);
  const category = getStoryCategory(slug);

  if (category) {
    const title = `${category.name} Stories | Florida Travel Journal`;
    const description = `${category.description} Read Florida travel stories, guides, and planning ideas from Florida Deals Hub.`;

    return {
      title,
      description,
      alternates: {
        canonical: `${baseUrl}${storyBasePath}/${category.slug}`
      },
      openGraph: {
        title,
        description,
        url: `${baseUrl}${storyBasePath}/${category.slug}`,
        siteName: "Florida Deals Hub",
        type: "website",
        images: [
          {
            url: `${baseUrl}/og.svg`,
            width: 1200,
            height: 630,
            alt: `${category.name} Florida Travel Journal stories`
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${baseUrl}/og.svg`]
      }
    };
  }

  if (!story) {
    return {};
  }

  const title = story.metadataTitle || `${story.title} | Florida Travel Journal`;
  const description = story.metaDescription || story.excerpt;
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
  const category = getStoryCategory(slug);

  if (category) {
    return <StoryCategoryPage category={category} />;
  }

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedStories(story, 6);
  const popularStories = getAllStories().filter((candidate) => candidate.slug !== story.slug);
  const affiliateLinks = getStoryAffiliateLinks(story);
  const planLinks = getPlanThisTripLinks(story);
  const relatedPlanLinks = getStoryPlanLinks(story);
  const defaultNetworkLinks = getNetworkPlanDefaults();
  const storyTravelTips = [
    {
      title: "Compare the next booking step",
      copy: "Move from the story into flights, hotels, cruises, or local activities while the destination and trip style are fresh.",
      href: "/florida-vacation-planning-guide",
      cta: "Use The Planning Guide"
    },
    {
      title: "Check nearby destinations",
      copy: "A nearby Florida city, beach, or cruise port can make the same trip idea easier to book or more affordable.",
      href: "/best-places-to-visit-in-florida",
      cta: "Compare Places"
    },
    {
      title: "Pack only for the plan",
      copy: "Choose gear around the actual activity: beach, cruise, fishing, road trip, theme parks, or a rainy-day backup.",
      href: "/travel-essentials",
      cta: "Review Essentials"
    }
  ];
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
      <ReadingProgressBar />
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
              <p className="updated-label">Published {story.publishDate} · Updated {story.updatedDate}</p>
              <p className="hero-subhead">{story.excerpt}</p>
              <div className="story-tags" aria-label="Story tags">
                <span>{story.destination}</span>
                {(story.tags || []).slice(0, 5).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <figure className="landing-visual story-hero-figure">
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
              <figcaption>{story.heroImageAlt || `${story.destination} travel planning image`}</figcaption>
            </figure>
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
              {story.content.length >= 4 ? (
                <nav className="story-toc" aria-label="Story table of contents">
                  <p className="best-for-tag">In this story</p>
                  <div>
                    {story.content.map((section) => (
                      <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} key={section.heading}>
                        {section.heading}
                      </a>
                    ))}
                  </div>
                </nav>
              ) : null}
              {story.content.map((section) => (
                <section
                  key={section.heading}
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
                  className="story-section-block"
                >
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                  {section.image ? (
                    <figure className="story-inline-figure">
                      <SafeImage
                        src={section.image}
                        alt={section.imageAlt || section.heading}
                        fallback="/images/fallbacks/florida-travel-placeholder.svg"
                        width="900"
                        height="520"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>{section.imageAlt || `${section.heading} travel planning image`}</figcaption>
                    </figure>
                  ) : null}
                </section>
              ))}
              <div className="story-inline-links">
                <p className="best-for-tag">Related planning links</p>
                {(story.relatedGuides || []).slice(0, 4).map((guide) => (
                  <a href={guide.href} key={guide.href} data-story-link="true">
                    {guide.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </article>

        <section className="plan-trip section-pad" aria-labelledby="story-plan-title">
          <div className="section-heading">
            <p className="eyebrow">Plan your trip</p>
            <h2 id="story-plan-title">Plan This Florida Trip</h2>
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
              <p className="eyebrow">Related deals and products</p>
              <h2 id="story-affiliate-title">Helpful Gear, Experiences And Booking Links</h2>
            </div>
            <div className="guide-card-grid">
              {affiliateLinks.map((link) => (
                <article className="guide-card" key={`${story.slug}-${link.title}`}>
                  <SafeImage
                    src={link.imageUrl || story.heroImage}
                    alt={link.imageAlt || link.title}
                    fallback="/images/fallbacks/florida-deals-placeholder.svg"
                    width="640"
                    height="420"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="story-category-label">{link.advertiser}</span>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                  <a
                    className="affiliate-cta"
                    href={link.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    data-story-affiliate="true"
                    data-affiliate-program={link.network}
                    data-advertiser={link.advertiser}
                    data-item-title={link.title}
                    data-category={link.category}
                  >
                    {link.cta}
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <TravelEssentialsBlock
          pageType="journal"
          title="Don’t forget the practical trip gear."
          description="If this story turns into a real Florida plan, make sure the day bag, luggage, comfort items, and memory-keeping gear are handled before the last-minute packing scramble."
          maxItems={3}
        />

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

        <StoryModule
          eyebrow="Keep reading"
          title="Popular Florida Travel Stories"
          stories={popularStories.slice(0, 6)}
          id="story-popular-stories"
        />

        <MostViewedStories stories={popularStories} title="Most Viewed Florida Stories" />

        <TravelTipsModule tips={storyTravelTips} />

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
            {relatedPlanLinks.map((link) => (
              <a
                href={link.href}
                key={`${link.site}-${link.href}`}
                data-story-network={link.site !== "hub" ? "true" : undefined}
                data-story-link={link.site === "hub" ? "true" : undefined}
                data-destination-site={link.site}
              >
                {link.label}
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

        <AuthorityLinks currentPath={story.path} cluster="stories" destination={story.destination} />
        <NewsletterSection
          eyebrow="Florida travel list"
          title="Get Florida Travel Ideas Every Week"
          copy="Weekend trips, beach ideas, cruise tips, hotel guides, and Florida travel stories sent to your inbox."
          buttonLabel="Join the Florida Travel List"
        />
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

function StoryCategoryPage({ category }) {
  const stories = getStoriesByCategory(category.slug, 60);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} stories`,
    url: `${baseUrl}${storyBasePath}/${category.slug}`,
    itemListElement: stories.map((story, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: story.title,
        description: story.excerpt,
        url: story.url
      }
    }))
  };

  return (
    <>
      <ReadingProgressBar />
      <SiteHeader />
      <main>
        <section className="landing-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <span><Link href="/">Home</Link></span>
              <span aria-hidden="true">/</span>
              <span><Link href={storyBasePath}>Journal</Link></span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{category.name}</span>
            </nav>
            <p className="eyebrow">Florida Travel Journal</p>
            <h1>{category.name} Stories</h1>
            <p className="hero-subhead">{category.description}</p>
            <div className="hero-actions">
              <Link href="/journal">All Stories</Link>
              <a href="#category-stories">Browse {category.name}</a>
              <a href="#newsletter">Get Weekly Ideas</a>
            </div>
          </div>
          {stories[0] ? (
            <Link className="landing-visual journal-feature" href={stories[0].path} data-story-link="true">
              <SafeImage
                src={stories[0].heroImage}
                alt={stories[0].heroImageAlt || stories[0].title}
                fallback="/images/fallbacks/florida-travel-placeholder.svg"
                width="900"
                height="720"
                loading="eager"
                decoding="async"
              />
              <div className="journal-feature-copy">
                <span>{stories[0].destination}</span>
                <h2>{stories[0].title}</h2>
                <p>{stories[0].excerpt}</p>
              </div>
            </Link>
          ) : null}
        </section>

        <section className="travel-guides section-pad" id="category-stories" aria-labelledby="category-stories-title">
          <div className="section-heading">
            <p className="eyebrow">Story collection</p>
            <h2 id="category-stories-title">{category.name} Planning Reads</h2>
          </div>
          <div className="guide-card-grid">
            {stories.map((story) => (
              <Link className="guide-card story-card compact-story-card" href={story.path} key={story.slug} data-story-link="true">
                <span className="story-category-label">{story.destination}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <AuthorityLinks currentPath={`${storyBasePath}/${category.slug}`} cluster="stories" breadcrumbLabel={`${category.name} Stories`} />
        <NewsletterSection
          eyebrow="Florida travel list"
          title="Get Florida Travel Ideas Every Week"
          copy="Weekend trips, beach ideas, cruise tips, hotel guides, and Florida travel stories sent to your inbox."
          buttonLabel="Join the Florida Travel List"
        />
      </main>
      <SiteFooter />
      <script
        id="story-category-item-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
