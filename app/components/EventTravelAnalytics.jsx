"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function EventTravelAnalytics({ title, category, pageType }) {
  useEffect(() => {
    trackEvent("event_travel_view", {
      item_title: title,
      category,
      content_type: pageType,
      page_path: window.location.pathname
    });
  }, [category, pageType, title]);

  return null;
}
