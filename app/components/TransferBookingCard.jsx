"use client";
import { trackEvent } from "../lib/analytics";
import { getTransferAffiliateUrl } from "../lib/revenuePartners";

export default function TransferBookingCard({ slug, title = "Need Airport Transportation?" }) {
  const href = getTransferAffiliateUrl("floridadealshub.com", slug);
  return <article className="content-card"><p className="best-for-tag">Airport and destination transfers</p><h3>{title}</h3><p>Compare airport transfer options, then confirm pickup locations, timing, luggage needs, and provider terms.</p><a className="affiliate-cta" href={href} rel="sponsored" onClick={() => trackEvent("transfer_click", { affiliate: "airport_transfer_portal", category: "airport_transfer", page_path: window.location.pathname, outbound_url: href })}>Compare Airport Transfers</a><p className="affiliate-disclosure">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p></article>;
}
