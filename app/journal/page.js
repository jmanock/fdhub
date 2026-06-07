import Link from "next/link";
import AuthorityLinks from "../components/AuthorityLinks";
import NewsletterSection from "../components/NewsletterSection";
import MostViewedStories from "../components/MostViewedStories";
import SafeImage from "../components/SafeImage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { StoryCard, StoryModule, TravelTipsModule } from "../components/StoryModules";
import {
  getAllStories,
  getEditorPickStories,
  getFeaturedStories,
  getJournalCategorySections,
  getLatestStories,
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

export default function JournalPage() {
  const allStories = getAllStories();
  const [featuredStory] = getFeaturedStories(1);
  const trendingStories = getTrendingStories(6);
  const popularStories = getPopularStories(6);
  const editorPicks = getEditorPickStories(4);
  const latestStories = getLatestStories(6);
  const categorySections = getJournalCategorySections();
  const travelTips = [
    {
      title: "Start With The Constraint",
      copy: "Pick the part of the trip that matters most first: dates, flights, hotel location, cruise port, or local activities.",
      href: "/florida-vacation-planning-guide",
      cta: "Use The Planning Guide"
    },
    {
      title: "Compare Nearby Florida Areas",
      copy: "A nearby airport, beach town, or hotel area can change the value of a trip without changing the whole vacation.",
      href: "/best-places-to-visit-in-florida",
      cta: "Compare Destinations"
    },
    {
      title: "Keep A Weather Backup",
      copy: "Florida trips are smoother when beach, park, and boating plans have a nearby indoor or lower-weather-risk option.",
      href: "/florida-rainy-day-trip-guide",
      cta: "Plan Rainy Day Ideas"
    }
  ];
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
              <a href="#latest-stories">Latest</a>
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
          {allStories.length ? (
            <div className="guide-card-grid">
              {getFeaturedStories(3).map((story) => (
                <StoryCard story={story} key={story.slug} />
              ))}
            </div>
          ) : (
            <div className="content-card">
              <p>
                Florida Travel Journal stories are being prepared. Use the Florida travel guides
                and network links below while new stories are reviewed.
              </p>
            </div>
          )}
        </section>

        <StoryModule
          eyebrow="Popular Florida searches"
          title="Trending Travel Journal Reads"
          stories={trendingStories}
          id="trending-stories"
        />

        <section className="travel-guides section-pad" id="story-categories" aria-labelledby="story-categories-title">
          <div className="section-heading">
            <p className="eyebrow">Browse by intent</p>
            <h2 id="story-categories-title">Florida Travel Journal Categories</h2>
          </div>
          <div className="popular-link-grid journal-filter-grid" aria-label="Journal category filters">
            {categorySections.map((category) => (
              <Link href={category.path} key={category.slug}>
                {category.name}
              </Link>
            ))}
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

        <section className="destination-spotlight section-pad" aria-labelledby="journal-destination-title">
          <div className="section-heading">
            <p className="eyebrow">Destination spotlight</p>
            <h2 id="journal-destination-title">Plan Around A Florida Place</h2>
          </div>
          <div className="guide-card-grid">
            {getStoriesByDestination(allStories, ["Orlando", "Miami", "Key West"]).map((story) => (
              <StoryCard story={story} compact key={story.slug} />
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

        <MostViewedStories stories={allStories} title="Most Viewed Florida Travel Stories" />

        <StoryModule
          eyebrow="Editor picks"
          title="Travel Stories Worth Starting With"
          stories={editorPicks}
          id="editor-picks"
        />

        <StoryModule
          eyebrow="Recently published"
          title="Latest Florida Travel Stories"
          stories={latestStories}
          id="latest-stories"
        />

        <TravelTipsModule tips={travelTips} />

        <AuthorityLinks currentPath="/journal" cluster="stories" breadcrumbLabel="Florida Travel Journal" />
        <NewsletterSection
          eyebrow="Florida travel list"
          title="Get Florida Travel Ideas Every Week"
          copy="Weekend trips, beach ideas, cruise tips, hotel guides, and Florida travel stories sent to your inbox."
          buttonLabel="Join the Florida Travel List"
        />
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

function getStoriesByDestination(stories, destinations) {
  const wanted = new Set(destinations);
  const picked = [];

  for (const story of stories) {
    if (wanted.has(story.destination) && !picked.some((item) => item.destination === story.destination)) {
      picked.push(story);
    }
  }

  return picked;
}
