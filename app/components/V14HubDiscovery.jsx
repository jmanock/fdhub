"use client";

import Link from "next/link";
import { trackEvent } from "../lib/analytics";

function track(item, placementName) {
  const params = {
    source_page: window.location.pathname,
    target_page: item.href,
    destination: item.title,
    placement_name: placementName,
    placement_type: "v14_hub_discovery",
    cta_text: item.cta
  };

  trackEvent("internal_related_click", params);
  trackEvent("related_guide_click", params);
  trackEvent("cta_click", params);
}

function SmartLink({ item, placementName, className, children }) {
  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className={className} onClick={() => track(item, placementName)}>
        {children}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} onClick={() => track(item, placementName)}>
      {children}
    </a>
  );
}

export default function V14HubDiscovery({ topic = "florida" }) {
  const primary = [
    {
      title: "Plan a full Florida vacation package",
      copy: "Combine flights, hotels, cruises, attractions, and family trip ideas from one planning path.",
      href: "/vacation-packages",
      cta: "Build a package"
    },
    {
      title: "Family vacation picks",
      copy: "Compare family beaches, theme parks, cruise ideas, hotel needs, and budget ranges.",
      href: "/best-florida-family-vacations",
      cta: "Explore family trips"
    },
    {
      title: "Beach vacation picks",
      copy: "Move from beach inspiration into hotels, activities, weekend plans, and destination guides.",
      href: "/best-florida-beaches",
      cta: "Compare beaches"
    },
    {
      title: "Budget trip picks",
      copy: "Find cheaper Florida vacation ideas and connect them to flights, hotels, and things to do.",
      href: "/cheap-florida-vacation-ideas",
      cta: "Plan cheaper trip"
    }
  ];
  const bundles = [
    { title: "Flights + hotels", href: "https://flightdealsflorida.org/google-flights-florida", cta: "Compare flight timing" },
    { title: "Hotels + attractions", href: "https://hoteldealsflorida.org/florida-budget-hotels", cta: "Compare hotels" },
    { title: "Cruises + port hotels", href: "https://cruisedealsflorida.org/weekend-cruises-from-florida", cta: "Compare cruises" },
    { title: "Things to do + weekend plans", href: "https://localdealsflorida.org/best-things-to-do-in-florida", cta: "Find activities" },
    { title: "World Cup Florida travel", href: "/world-cup-2026", cta: "Plan event travel" },
    { title: "Weekend getaways", href: "/florida-weekend-getaways", cta: "Plan weekend" }
  ].map((item) => ({ ...item, copy: "Continue into the most relevant network page for this part of the trip." }));

  return (
    <section className="related-pages section-pad" aria-labelledby={`${topic}-v14-hub-discovery-title`}>
      <div className="content-card">
        <p className="eyebrow">Trending now</p>
        <h2 id={`${topic}-v14-hub-discovery-title`}>Plan the full Florida trip, not just one deal.</h2>
        <p>
          Use these paths to move from inspiration into the next practical decision: flights, hotels,
          cruises, attractions, transportation, travel essentials, and vacation packages.
        </p>
        <div className="guide-card-grid">
          {primary.map((item) => (
            <SmartLink className="guide-card" item={item} key={item.href} placementName="hub_trending_now">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span>{item.cta}</span>
            </SmartLink>
          ))}
        </div>
      </div>
      <div className="content-card">
        <p className="eyebrow">Plan a full trip</p>
        <h2>Flights + hotels + cruises + things to do</h2>
        <div className="popular-link-grid">
          {bundles.map((item) => (
            <SmartLink item={item} key={item.href} placementName="hub_trip_bundles">
              {item.title}
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
