import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorityLinks from "../../../components/AuthorityLinks";
import NewsletterSection from "../../../components/NewsletterSection";
import SafeImage from "../../../components/SafeImage";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { baseUrl } from "../../../lib/network";
import { getTravelNewsItem, getTravelNewsItems } from "../../../lib/travelNews";

export function generateStaticParams() {
  return getTravelNewsItems(100).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getTravelNewsItem(slug);

  if (!item) {
    return {};
  }

  const title = `${item.title} | Florida Travel News`;
  const description = item.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: item.url
    },
    openGraph: {
      title,
      description,
      url: item.url,
      siteName: "Florida Deals Hub",
      type: "article",
      images: [
        {
          url: item.image || `${baseUrl}/og.svg`,
          width: 1200,
          height: 630,
          alt: item.imageAlt || item.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [item.image || `${baseUrl}/og.svg`]
    }
  };
}

export default async function TravelNewsPage({ params }) {
  const { slug } = await params;
  const item = getTravelNewsItem(slug);

  if (!item) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.excerpt,
    image: item.image || `${baseUrl}/og.svg`,
    datePublished: item.publishDate,
    dateModified: item.publishDate,
    mainEntityOfPage: item.url,
    articleSection: item.category,
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

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <section className="landing-hero section-pad">
            <div className="landing-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <span><Link href="/">Home</Link></span>
                <span aria-hidden="true">/</span>
                <span><Link href="/journal">Journal</Link></span>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{item.title}</span>
              </nav>
              <p className="eyebrow">Florida Travel News</p>
              <h1>{item.title}</h1>
              <p className="updated-label">Published {item.publishDate}</p>
              <p className="hero-subhead">{item.excerpt}</p>
              <div className="story-tags">
                <span>{item.category}</span>
                <span>{item.destination}</span>
              </div>
            </div>
            <div className="landing-visual">
              <SafeImage
                src={item.image}
                alt={item.imageAlt || item.title}
                fallback="/images/fallbacks/florida-travel-placeholder.svg"
                width="900"
                height="720"
                loading="eager"
                decoding="async"
              />
            </div>
          </section>

          <section className="landing-intro section-pad">
            <div className="content-card story-body">
              <p className="eyebrow">Planning update framework</p>
              {item.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="story-inline-links">
                <p className="best-for-tag">Related planning links</p>
                {item.relatedLinks.map((link) => (
                  <a href={link.href} key={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </section>
        </article>

        <AuthorityLinks currentPath={item.path} cluster="events" destination={item.destination} breadcrumbLabel={item.title} />
        <NewsletterSection
          eyebrow="Florida travel list"
          title="Get Florida Travel Ideas Every Week"
          copy="Weekend trips, beach ideas, cruise tips, hotel guides, and Florida travel stories sent to your inbox."
          buttonLabel="Join the Florida Travel List"
        />
      </main>
      <SiteFooter />
      <script
        id="travel-news-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
