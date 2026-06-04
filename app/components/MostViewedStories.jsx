"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const storageKey = "fdh_story_views";

export default function MostViewedStories({ stories = [], title = "Most Viewed Stories" }) {
  const [localViews] = useState(() => {
    if (typeof window === "undefined") {
      return {};
    }

    try {
      return JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  });

  const rankedStories = useMemo(
    () =>
      stories
        .map((story) => ({
          ...story,
          localViewCount: Number(localViews[story.slug] || 0)
        }))
        .sort((a, b) => b.localViewCount - a.localViewCount || b.views - a.views)
        .slice(0, 5),
    [localViews, stories]
  );

  if (!rankedStories.length) {
    return null;
  }

  return (
    <section className="most-viewed-widget section-pad" aria-labelledby="most-viewed-title">
      <div className="section-heading compact">
        <p className="eyebrow">Most viewed</p>
        <h2 id="most-viewed-title">{title}</h2>
      </div>
      <div className="most-viewed-list">
        {rankedStories.map((story, index) => (
          <Link href={story.path} key={story.slug} data-story-link="true">
            <span>{index + 1}</span>
            <strong>{story.title}</strong>
            <small>{story.destination}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
