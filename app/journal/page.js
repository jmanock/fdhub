import Link from "next/link";
import NewsletterSection from "../components/NewsletterSection";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import {
  getAllStories,
  getFeaturedStories,
  getJournalCategorySections,
  getPopularStories,
  getTrendingStories,
  storyBasePath
} from "../lib/stories";
import { baseUrl } from "../lib/network";

const pageTitle = "Florida Travel Journal | Destination Ideas, Weekend Trips & Planning Stories";
const pageDescription =
  "Read Florida travel stories, destination spotlights, comparisons, cruise ideas, hotel planning, flight tips, local activities, and weekend trip guides.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${baseUrl}${storyBasePath}`
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${baseUrl}${storyBasePath}`,
    siteName: "Florida Deals Hub",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og.svg`,
        width: 1200,
        height: 630,
        alt: "Florida Travel Journal stories and planning guides"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/og.svg`]
  }
};

function StoryCard({ story, compact = false }) {
  return (
    <Link
      className={compact ? "guide-card story-card compact-story-card" : "guide-card story-card"}
      href={story.path}
      data-story-link="true"
    >
      {!compact ? (
        <SafeImage
          src={story.heroImage}
          alt={story.heroImageAlt || story.title}
          fallback="/images/fallbacks/florida-travel-placeholder.svg"
          width="720"
          height="430"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <span className="story-category-label">{story.categoryDetails.name}</span>
      <h3>{story.title}</h3>
      <p>{story.excerpt}</p>
      <p className="updated-label">Updated {story.updatedDate}</p>
    </Link>
  );
}

export default function JournalPage() {
  const allStories = getAllStories();
  const [featuredStory] = getFeaturedStories(1);
  const trendingStories = getTrendingStories(4);
  const popularStories = getPopularStories(5);
  const categorySections = getJournalCategorySections();
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Florida Travel Journal stories",
    url: `${baseUrl}${storyBasePath}`,
    itemListElement: allStories.map((story, index) => ({
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
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Florida Travel Journal",
    description: pageDescription,
    url: `${baseUrl}${storyBasePath}`,
    publisher: {
      "@type": "Organization",
      name: "Florida Deals Hub",
      url: baseUrl
    }
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero journal-hero section-pad">
          <div className="landing-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Journal</span>
            </nav>
            <p className="eyebrow">Florida Travel Journal</p>
            <h1>Florida Travel Stories For Smarter Trip Planning</h1>
            <p className="hero-subhead">
              Destination spotlights, comparisons, flight ideas, hotel planning, cruise stories,
              local activities, and practical Florida travel notes from the Florida Deals network.
            </p>
            <div className="hero-actions" aria-label="Florida Travel Journal quick links">
              <a href="#featured-stories">Featured Stories</a>
              <a href="#trending-stories">Trending</a>
              <a href="#story-categories">Categories</a>
            </div>
          </div>
          {featuredStory ? (
            <Link className="landing-visual journal-feature" href={featuredStory.path} data-story-link="true">
              <SafeImage
                src={featuredStory.heroImage}
                alt={featuredStory.heroImageAlt || featuredStory.title}
                fallback="/images/fallbacks/florida-travel-placeholder.svg"
                width="900"
                height="720"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="journal-feature-copy">
                <span>{featuredStory.categoryDetails.name}</span>
                <h2>{featuredStory.title}</h2>
                <p>{featuredStory.excerpt}</p>
              </div>
            </Link>
          ) : null}
        </section>

        <section className="page-trust section-pad" aria-label="Florida Travel Journal trust notes">
          <div className="trust-notes page-trust-notes">
            <span>Editorial Florida travel stories</span>
            <span>Updated monthly where useful</span>
            <span>Affiliate links disclosed</span>
            <span>Confirm current details with official sources</span>
          </div>
        </section>

        <section className="travel-guides section-pad" id="featured-stories" aria-labelledby="featured-stories-title">
          <div className="section-heading">
            <p className="eyebrow">Editor picks</p>
            <h2 id="featured-stories-title">Featured Florida Travel Stories</h2>
          </div>
          <div className="guide-card-grid">
            {getFeaturedStories(3).map((story) => (
              <StoryCard story={story} key={story.slug} />
            ))}
          </div>
        </section>

        <section className="popular-this-week section-pad" id="trending-stories" aria-labelledby="trending-stories-title">
          <div className="section-heading">
            <p className="eyebrow">Popular Florida searches</p>
            <h2 id="trending-stories-title">Trending Travel Journal Reads</h2>
          </div>
          <div className="guide-card-grid">
            {trendingStories.map((story) => (
              <StoryCard story={story} compact key={story.slug} />
            ))}
          </div>
        </section>

        <section className="travel-guides section-pad" id="story-categories" aria-labelledby="story-categories-title">
          <div className="section-heading">
            <p className="eyebrow">Browse by intent</p>
            <h2 id="story-categories-title">Florida Travel Journal Categories</h2>
          </div>
          <div className="cluster-grid">
            {categorySections.map((category) => (
              <article className="cluster-card" key={category.slug}>
                <p className="eyebrow">{category.name}</p>
                <h3>{category.description}</h3>
                <div>
                  {category.stories.length ? (
                    category.stories.map((story) => (
                      <Link href={story.path} key={story.slug} data-story-link="true">
                        {story.title}
                      </Link>
                    ))
                  ) : (
                    <span className="story-empty-label">More stories coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="best-for section-pad" aria-labelledby="popular-journal-title">
          <div className="section-heading">
            <p className="eyebrow">Most popular</p>
            <h2 id="popular-journal-title">Most Popular Florida Travel Journal Stories</h2>
          </div>
          <div className="guide-card-grid">
            {popularStories.slice(0, 3).map((story) => (
              <StoryCard story={story} compact key={story.slug} />
            ))}
          </div>
        </section>

        <NewsletterSection />
      </main>
      <SiteFooter />
      <script
        id="journal-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        id="journal-item-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
