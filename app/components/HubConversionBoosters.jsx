"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "../lib/analytics";
import { SKYLARK_DEALS_AFFILIATE_URL, SKYLARK_HOME_AFFILIATE_URL, ZENHOTELS_AFFILIATE_URL } from "../lib/revenuePartners";

const rel = "sponsored nofollow noopener noreferrer";

function trackAffiliate(eventName, advertiser, url, ctaText, placement) {
  const params = { affiliate_program: "awin", advertiser, cta_text: ctaText, outbound_url: url, placement, page_path: window.location.pathname };
  trackEvent(eventName, params);
  trackEvent("affiliate_click", params);
}

export function VacationPackageBookingStack() {
  const steps = [
    ["Step 1", "Find Flights", "Compare Florida airports and route timing before locking in the trip.", "https://flightdealsflorida.org/google-flights-vs-skyscanner-for-florida-routes", "Compare Flights"],
    ["Step 2", "Book Hotel", "Compare stays for the destination, dates, and family size.", ZENHOTELS_AFFILIATE_URL, "Compare Hotels", "affiliate_click_zenhotels", "zenhotels"],
    ["Step 3", "Add Cruise", "Turn a Florida trip into a short Bahamas or weekend sailing.", "https://cruisedealsflorida.org/weekend-cruises-from-florida", "Explore Cruises"],
    ["Step 4", "Add Attractions", "Find theme parks, tours, activities, and local things to do.", "https://localdealsflorida.org/best-things-to-do-in-florida", "Find Attractions"]
  ];

  return (
    <section className="section-pad" aria-labelledby="vacation-booking-stack-title">
      <div className="section-heading">
        <p className="eyebrow">Vacation package funnel</p>
        <h2 id="vacation-booking-stack-title">Build The Trip In Four Booking Steps</h2>
        <p>Start with flights and hotels, then add cruises and attractions when they fit the vacation style.</p>
      </div>
      <div className="guide-card-grid">
        {steps.map(([step, title, copy, href, cta, eventName, advertiser]) => (
          <a
            className="content-card"
            href={href}
            key={title}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={eventName ? rel : undefined}
            onClick={() => {
              trackEvent("related_guide_click", { item_title: title, outbound_url: href, page_path: window.location.pathname });
              if (eventName) trackAffiliate(eventName, advertiser, href, cta, "vacation_package_booking_stack");
            }}
          >
            <p className="best-for-tag">{step}</p>
            <h3>{title}</h3>
            <p>{copy}</p>
            <span className="affiliate-cta">{cta}</span>
          </a>
        ))}
      </div>
      <div className="guide-card-grid" style={{ marginTop: "1rem" }}>
        <a className="content-card" href={SKYLARK_HOME_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark", "skylark", SKYLARK_HOME_AFFILIATE_URL, "Plan Luxury Florida Travel", "vacation_package_luxury")}>
          <p className="best-for-tag">Luxury upgrade</p>
          <h3>Plan Premium Florida Travel</h3>
          <p>Use this path when the package is built around premium hotels, upgraded amenities, and luxury service.</p>
          <span className="affiliate-cta">Plan Luxury Travel</span>
        </a>
        <a className="content-card" href={SKYLARK_DEALS_AFFILIATE_URL} target="_blank" rel={rel} onClick={() => trackAffiliate("affiliate_click_skylark_deals", "skylark", SKYLARK_DEALS_AFFILIATE_URL, "View Luxury Hotel Deals", "vacation_package_luxury")}>
          <p className="best-for-tag">Luxury hotel deals</p>
          <h3>Compare Luxury Hotel Deals</h3>
          <p>Check premium hotel options when the stay is the centerpiece of the Florida vacation.</p>
          <span className="affiliate-cta">View Luxury Hotel Deals</span>
        </a>
      </div>
      <p className="affiliate-disclosure">Affiliate links. We may earn a commission at no extra cost to you.</p>
    </section>
  );
}

export function HubContinuePlanningGuides() {
  const guides = [
    ["Family Vacation Packages", "/family-vacations", "Compare family-focused trip ideas."],
    ["Weekend Cruises From Florida", "https://cruisedealsflorida.org/weekend-cruises-from-florida", "Add a short sailing to the plan."],
    ["Florida Budget Hotels", "https://hoteldealsflorida.org/florida-budget-hotels", "Find value stays by destination."],
    ["Best Things To Do In Florida", "https://localdealsflorida.org/best-things-to-do-in-florida", "Add attractions and local activities."]
  ];
  return (
    <section className="related-pages section-pad" aria-labelledby="continue-florida-trip-title">
      <div className="section-heading compact"><p className="eyebrow">Continue planning your Florida trip</p><h2 id="continue-florida-trip-title">Keep Moving Through The Trip Plan</h2></div>
      <div className="guide-card-grid">
        {guides.map(([title, href, copy]) => <a className="guide-card" href={href} key={href} onClick={() => {
          const params = { item_title: title, outbound_url: href, page_path: window.location.pathname };
          trackEvent("related_guide_click", params);
          trackEvent("continue_planning_click", params);
          if (href.startsWith("https://")) trackEvent("cross_site_click", params);
        }}><h3>{title}</h3><p>{copy}</p><span className="affiliate-cta">Continue Planning</span></a>)}
      </div>
    </section>
  );
}

export function ExitNewsletterCapture() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progress >= 0.7 && !dismissed && !visible) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed, visible]);
  if (!visible || dismissed) return null;
  return <aside className="exit-newsletter-capture"><button type="button" onClick={() => setDismissed(true)}>Close</button><p className="eyebrow">Get New Florida Deals Every Week</p><h2>Vacation ideas, hotel picks, cruise routes, and things to do.</h2><a className="affiliate-cta" href="#newsletter" onClick={() => setDismissed(true)}>Join free alerts</a></aside>;
}
