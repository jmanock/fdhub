"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "../lib/analytics";

export default function StoryAnalytics({ story }) {
  const readCompleteTracked = useRef(false);

  useEffect(() => {
    if (!story) {
      return undefined;
    }

    const baseParams = {
      source_site: "floridadealshub.com",
      story_slug: story.slug,
      story_title: story.title,
      category: story.category,
      destination: story.destination,
      page_path: window.location.pathname
    };

    trackEvent("story_view", baseParams);

    function handleScroll() {
      if (readCompleteTracked.current) {
        return;
      }

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 1;

      if (progress >= 0.72) {
        readCompleteTracked.current = true;
        trackEvent("story_read_complete", baseParams);
      }
    }

    function handleClick(event) {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      const ctaText = link.innerText?.trim() || link.getAttribute("aria-label") || link.href;
      const params = {
        ...baseParams,
        cta_text: ctaText,
        outbound_url: link.href,
        destination_site: link.dataset.destinationSite || link.hostname,
        target_site: link.dataset.destinationSite || link.hostname
      };

      if (link.dataset.storyAffiliate === "true") {
        trackEvent("story_affiliate_click", {
          ...params,
          affiliate_program: link.dataset.affiliateProgram,
          advertiser: link.dataset.advertiser,
          item_title: link.dataset.itemTitle || ctaText
        });
        return;
      }

      if (link.dataset.storyNetwork === "true") {
        trackEvent("story_network_click", params);
        return;
      }

      if (link.dataset.storyLink === "true") {
        trackEvent("story_click", params);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [story]);

  return null;
}
