import Link from "next/link";
import SafeImage from "./SafeImage";

export function StoryCard({ story, compact = false, label }) {
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
      <span className="story-category-label">{label || story.categoryDetails.name}</span>
      <h3>{story.title}</h3>
      <p className="best-for-tag">{story.destination}</p>
      <p>{story.excerpt}</p>
      <p className="updated-label">Updated {story.updatedDate}</p>
    </Link>
  );
}

export function StoryModule({ eyebrow, title, stories = [], id, compact = true }) {
  if (!stories.length) {
    return null;
  }

  return (
    <section className="story-module section-pad" id={id} aria-labelledby={`${id || title}-title`}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id || title}-title`}>{title}</h2>
      </div>
      <div className="guide-card-grid">
        {stories.map((story) => (
          <StoryCard story={story} compact={compact} key={story.slug} />
        ))}
      </div>
    </section>
  );
}

export function TravelTipsModule({ tips = [] }) {
  if (!tips.length) {
    return null;
  }

  return (
    <section className="travel-tips-module section-pad" aria-labelledby="travel-tips-module-title">
      <div className="section-heading compact">
        <p className="eyebrow">Florida travel tips</p>
        <h2 id="travel-tips-module-title">Small Planning Moves That Keep Trips Moving</h2>
      </div>
      <div className="router-card-grid compact-router-grid">
        {tips.map((tip) => (
          <article className="router-card" key={tip.title}>
            <h3>{tip.title}</h3>
            <p>{tip.copy}</p>
            <a href={tip.href}>{tip.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
