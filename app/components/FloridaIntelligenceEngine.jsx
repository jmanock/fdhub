"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "../lib/revenuePartners";
import { generalTravelEssentials } from "../lib/travelEssentials";
import { trackEvent } from "../lib/analyticsContract";

const rel = "sponsored noopener noreferrer";

function track(event, payload = {}) {
  const data = {
    source_site: "floridadealshub.com",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    ...payload
  };
  trackEvent(event, data);
}

function topicLabel(topic) {
  if (!topic) return "Florida";
  if (topic.includes("cruise")) return "Florida cruise";
  if (topic.includes("family")) return "Florida family vacation";
  if (topic.includes("beach")) return "Florida beach vacation";
  if (topic.includes("world-cup")) return "World Cup Florida";
  if (topic.includes("destination")) return "Florida destination";
  if (topic.includes("package")) return "Florida vacation package";
  return topic.replaceAll("-", " ");
}

function recommendationsFor(topic) {
  const label = topicLabel(topic);
  const base = [
    ["Find hotels", "Compare places to stay before the itinerary gets too far along.", ZENHOTELS_AFFILIATE_URL, "Compare hotels", "hotel", true],
    ["Find flights", "Connect the trip idea to airport and route planning.", "https://flightdealsflorida.org/cheap-flights-to-florida-guide", "Compare flights", "flights", false],
    ["Find activities", "Add attractions, tours, beaches, and family-friendly activities.", "https://localdealsflorida.org/best-things-to-do-in-florida", "Find things to do", "activities", false],
    ["Build a vacation package", "Connect flights, hotels, cruises, and activities in one planning path.", "/vacation-packages", "Build package", "package", false]
  ];

  if (label.includes("cruise")) {
    return [
      ["Cruises from Florida", "Compare ports, short sailings, Bahamas routes, and cruise package ideas.", "https://cruisedealsflorida.org/weekend-cruises-from-florida", "Compare cruises", "cruise", false],
      ["Pre-cruise hotel", "Book a hotel buffer before sailing day.", ZENHOTELS_AFFILIATE_URL, "Compare port hotels", "hotel", true],
      ["Luxury cruise weekend", "Upgrade the pre-cruise stay for a special trip.", SKYLARK_HOME_AFFILIATE_URL, "Explore luxury stays", "luxury", true],
      ...base.slice(1)
    ];
  }

  if (label.includes("family")) {
    return [
      ["Family vacation packages", "Compare family-friendly budgets, destinations, hotels, and activities.", "/family-vacations", "Browse family trips", "family", false],
      ["Florida attractions", "Add theme parks, aquariums, museums, beaches, or rainy-day backups.", "https://localdealsflorida.org/best-florida-attractions", "Find attractions", "activities", false],
      ...base
    ];
  }

  return base;
}

export default function FloridaIntelligenceEngine({ topic = "homepage" }) {
  const [stage, setStage] = useState("Comparing");
  const label = topicLabel(topic);
  const recommendations = useMemo(() => recommendationsFor(topic).slice(0, 6), [topic]);
  const essentials = useMemo(() => generalTravelEssentials.slice(0, 3), []);
  const progress = [
    ["Trip idea chosen", true],
    ["Destination compared", topic !== "homepage"],
    ["Hotel or package checked", false],
    ["Flights considered", false],
    ["Activities added", false],
    ["Travel essentials ready", false]
  ];
  const percent = Math.round((progress.filter(([, done]) => done).length / progress.length) * 100);
  const seasonal = [
    ["Summer", "Beach trips, water parks, family vacations, rainy-day backups, and hurricane-aware planning."],
    ["Fall", "Football weekends, Halloween, food festivals, lower heat, and easier outdoor days."],
    ["Winter", "Holiday lights, snowbird travel, Christmas breaks, cruise trips, and beach escapes."],
    ["Spring", "Spring break, baseball, gardens, family trips, and early beach weekends."]
  ];
  const searches = ["Florida family vacations", "Weekend cruises from Florida", "Florida vacation packages", "Best things to do in Florida", "Florida beach vacations"];

  return (
    <section className="section-pad" aria-labelledby="hub-intelligence-title">
      <div className="content-card">
        <p className="eyebrow">Florida Intelligence Engine</p>
        <h2 id="hub-intelligence-title">Continue planning this {label} journey</h2>
        <p>
          Every Florida trip has a next step. Use these recommendations to move from inspiration into hotels, flights, cruises, attractions, travel essentials, and package planning.
        </p>

        <div className="trip-builder-grid" style={{ marginTop: "1.5rem" }}>
          <article className="guide-card">
            <h3>Trip Planning Progress</h3>
            <p className="best-for-tag">{percent}% complete</p>
            <ul className="planning-checklist">
              {progress.map(([item, done]) => (
                <li key={item}>{done ? "✓" : "□"} {item}</li>
              ))}
            </ul>
            <Link className="affiliate-cta" href="/vacation-packages" onClick={() => track("trip_progress_click", { cta_text: "Finish Planning", content_type: topic })}>
              Finish Planning
            </Link>
          </article>

          <article className="guide-card">
            <h3>Where are you in planning?</h3>
            <div className="popular-link-grid compact-link-grid" style={{ marginTop: "1rem" }}>
              {["Dreaming", "Comparing", "Booking", "Preparing", "Traveling"].map((item) => (
                <button className="affiliate-cta" type="button" key={item} aria-pressed={stage === item} onClick={() => { setStage(item); track("planning_stage_change", { content_type: topic, category: item.toLowerCase() }); }}>
                  {item}
                </button>
              ))}
            </div>
            <p className="value-line">
              {stage === "Booking" ? "Prioritize bookable hotels, packages, transfers, and attraction timing." : stage === "Preparing" ? "Handle luggage, eSIM, transfers, weather backups, and confirmations." : "Compare destinations, budgets, trip styles, and best next guides."}
            </p>
          </article>
        </div>

        <div className="guide-card-grid" style={{ marginTop: "1.5rem" }}>
          {recommendations.map(([title, copy, href, cta, category, affiliate]) => (
            <a
              className="guide-card"
              href={href}
              target={affiliate ? "_blank" : undefined}
              rel={affiliate ? rel : undefined}
              key={`${title}-${href}`}
              onClick={() => track(affiliate ? "affiliate_click" : "recommendation_click", { cta_text: cta, category, content_type: topic, outbound_url: href })}
            >
              <p className="best-for-tag">{category}</p>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="value-line">{cta}</span>
            </a>
          ))}
        </div>

        <div className="trip-builder-grid" style={{ marginTop: "1.5rem" }}>
          <article className="content-card">
            <p className="eyebrow">Seasonal intelligence</p>
            <div className="guide-card-grid">
              {seasonal.map(([season, copy]) => (
                <div className="guide-card" key={season}>
                  <h3>{season}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="content-card">
            <p className="eyebrow">Travel essentials</p>
            <div className="popular-link-grid compact-link-grid">
              {essentials.map((item) => (
                <a href={item.affiliateUrl} target="_blank" rel={rel} key={item.title} onClick={() => track("travel_essential_click", { advertiser: item.advertiser, category: item.category, cta_text: item.cta, outbound_url: item.affiliateUrl })}>
                  {item.title}
                </a>
              ))}
            </div>
            <p className="affiliate-disclosure">Some links may be sponsored. We may earn a commission at no extra cost to you.</p>
          </article>
        </div>

        <div className="trip-builder-grid" style={{ marginTop: "1.5rem" }}>
          <article className="content-card">
            <p className="eyebrow">Florida travel feed</p>
            <ul className="planning-checklist">
              <li>Watch airline routes, cruise launches, hotel openings, attraction updates, weather, and event travel.</li>
              <li>Use destination guides and package pages to turn travel news into actual trip planning.</li>
              <li>Check current details with official or booking sources before purchasing.</li>
            </ul>
          </article>
          <article className="content-card">
            <p className="eyebrow">Search suggestions</p>
            <div className="popular-link-grid compact-link-grid">
              {searches.map((item) => (
                <a href={`/search?q=${encodeURIComponent(item)}`} key={item} onClick={() => track("search_suggestion_click", { cta_text: item, content_type: topic })}>
                  {item}
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
