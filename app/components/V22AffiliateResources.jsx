"use client";

import { getTransferAffiliateUrl, ZENHOTELS_AFFILIATE_URL } from "../lib/revenuePartners";
import { VIP_CARS_AFFILIATE_URL } from "../lib/affiliate/affiliateInventory.mjs";

function trackAffiliateClick(resource, slug, placement) {
  const payload = {
    partner: resource.partner,
    creative_id: resource.creativeId,
    category: resource.category,
    site: "floridadealshub",
    route: `/${slug}`,
    placement,
    cta_text: resource.cta
  };

  window.gtag?.("event", "affiliate_click", payload);
  window.dataLayer?.push({ event: "affiliate_click", ...payload });
}

export default function V22AffiliateResources({ slug }) {
  const isRoadTrip = /road|destination|places|guide|vacation|family/.test(slug);
  const resources = [
    isRoadTrip
      ? {
          partner: "VIP Cars",
          creativeId: "vip-cars-homepage",
          category: "car_rentals",
          title: "Compare rental cars for the wider trip",
          copy: "Useful when the Florida plan spans beaches, parks, airports, or multiple cities.",
          cta: "Compare rental cars",
          href: VIP_CARS_AFFILIATE_URL
        }
      : {
          partner: "Airport Transfer Portal",
          creativeId: "airport-transfer-portal-default",
          category: "airport_transfers",
          title: "Plan airport transfer timing",
          copy: "Use after choosing the destination, airport, and first hotel area.",
          cta: "Compare airport transfers",
          href: getTransferAffiliateUrl("floridadealshub", slug)
        },
    {
      partner: "Zen Hotels",
      creativeId: "zenhotels-homepage",
      category: "hotels",
      title: "Check hotel options",
      copy: "Compare stays after narrowing the Florida destination and trip style.",
      cta: "Check hotel options",
      href: ZENHOTELS_AFFILIATE_URL
    }
  ];

  return (
    <section className="section-pad" aria-labelledby="v22-hub-affiliate-title">
      <div className="content-card">
        <p className="eyebrow">Trip planning resources</p>
        <h2 id="v22-hub-affiliate-title">Connect the destination plan to booking logistics.</h2>
        <div className="guide-card-grid">
          {resources.map((resource) => (
            <a
              className="guide-card"
              href={resource.href}
              key={resource.creativeId}
              onClick={() => trackAffiliateClick(resource, slug, "v22_hub_trip_resources")}
              rel="sponsored noopener noreferrer"
              target="_blank"
            >
              <h3>{resource.title}</h3>
              <p>{resource.copy}</p>
              <span>{resource.cta}</span>
            </a>
          ))}
        </div>
        <p className="affiliate-note">
          Affiliate disclosure: some trip-planning links may earn Florida Deals Hub a commission at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
