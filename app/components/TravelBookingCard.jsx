"use client";
import { trackEvent } from "../lib/analytics";
import { EXPEDIA_GENERAL_AFFILIATE_URL } from "../lib/revenuePartners";

export default function TravelBookingCard({ title = "Compare The Complete Florida Trip" }) {
  return <article className="content-card"><p className="best-for-tag">Travel booking options</p><h3>{title}</h3><p>Compare travel options for the trip, then confirm current prices, availability, cancellation terms, and provider details.</p><a className="affiliate-cta" href={EXPEDIA_GENERAL_AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" onClick={() => trackEvent("expedia_click", { affiliate: "expedia", category: "travel_booking", component_type: "TravelBookingCard", placement: "travel_booking_section", partner: "expedia", page: window.location.pathname, page_path: window.location.pathname, outbound_url: EXPEDIA_GENERAL_AFFILIATE_URL })}>Compare Travel Options</a><p className="affiliate-disclosure">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p></article>;
}
