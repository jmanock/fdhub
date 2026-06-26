"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";
import { generalTravelEssentials } from "../lib/travelEssentials";

const rel = "sponsored nofollow noopener noreferrer";

function eventForAdvertiser(advertiser) {
  if (advertiser === "nomatic") return "affiliate_click_nomatic";
  if (advertiser === "outfitr") return "affiliate_click_outfitr";
  if (advertiser === "bedsure") return "affiliate_click_bedsure";
  return "travel_essentials_click";
}

export default function TravelEssentialsBlock({ pageType = "hub", title = "Don’t forget the trip-prep basics.", description = "Flights, hotels, cruises, and activities are easier when luggage, day bags, and comfort items are handled before the last minute.", maxItems = 4 }) {
  const items = generalTravelEssentials.slice(0, maxItems);

  useEffect(() => {
    trackEvent("travel_essentials_view", {
      source_site: "floridadealshub.com",
      page_type: pageType,
      page_path: window.location.pathname,
      item_count: items.length
    });
  }, [items.length, pageType]);

  function trackClick(item) {
    const params = {
      source_site: "floridadealshub.com",
      affiliate_program: "awin",
      advertiser: item.advertiser,
      category: item.category,
      cta_text: item.cta,
      item_title: item.title,
      outbound_url: item.affiliateUrl,
      page_type: pageType,
      page_path: window.location.pathname
    };
    trackEvent("travel_essentials_click", params);
    trackEvent(eventForAdvertiser(item.advertiser), params);
    trackEvent("affiliate_click", params);
  }

  return (
    <section className="travel-essentials section-pad" aria-labelledby="travel-essentials-title">
      <div className="content-card">
        <p className="eyebrow">Travel essentials</p>
        <h2 id="travel-essentials-title">{title}</h2>
        <p>{description}</p>
        <div className="guide-card-grid">
          {items.map((item) => (
            <a className="guide-card affiliate-gear-card" href={item.affiliateUrl} target="_blank" rel={rel} key={`${item.advertiser}-${item.title}`} onClick={() => trackClick(item)}>
              <p className="best-for-tag">{item.category.replaceAll("_", " ")}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="affiliate-cta">{item.cta}</span>
            </a>
          ))}
        </div>
        <p className="affiliate-disclosure">Some links may be sponsored. We may earn a commission if you book or buy through them.</p>
      </div>
    </section>
  );
}
