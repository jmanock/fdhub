"use client";

import { useEffect } from "react";
import {
  getHotelBookingProvider,
  getNetworkCategory,
  getNetworkDestination,
  trackDealClick,
  trackHotelBookingClick,
  trackNavigationClick,
  trackNetworkSiteClick
} from "../lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleDocumentClick(event) {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      const destinationSite = getNetworkDestination(link.href);
      const destination = getNetworkCategory(link.href);
      const hotelProvider = getHotelBookingProvider(link.href);
      const linkText = link.innerText?.trim() || link.getAttribute("aria-label") || link.href;
      const affiliateProgram = link.dataset.affiliateProgram;

      if (affiliateProgram) {
        window.gtag?.("event", "affiliate_click", {
          source_site: "floridadealshub.com",
          affiliate_program: affiliateProgram,
          affiliate: link.dataset.affiliate || link.dataset.advertiser,
          advertiser: link.dataset.advertiser,
          item_title: link.dataset.itemTitle || linkText,
          category: link.dataset.category,
          cta_text: linkText,
          outbound_url: link.href,
          page_path: window.location.pathname
        });
        window.dataLayer?.push({
          event: "affiliate_click",
          source_site: "floridadealshub.com",
          affiliate_program: affiliateProgram,
          affiliate: link.dataset.affiliate || link.dataset.advertiser,
          advertiser: link.dataset.advertiser,
          item_title: link.dataset.itemTitle || linkText,
          category: link.dataset.category,
          cta_text: linkText,
          outbound_url: link.href,
          page_path: window.location.pathname
        });
      }

      trackNavigationClick({
        linkText,
        destinationUrl: link.href,
        destinationSite: destinationSite || hotelProvider || "floridadealshub.com",
        destination: destination || hotelProvider || "hub"
      });

      if (hotelProvider) {
        trackHotelBookingClick({
          destination: link.dataset.hotelDestination || link.dataset.bookingDestination || linkText,
          outboundUrl: link.href,
          provider: hotelProvider
        });
      }

      if (!destinationSite) {
        return;
      }

      trackDealClick(destinationSite, linkText);
      trackNetworkSiteClick({
        destinationSite,
        destinationType: destination,
        ctaText: linkText
      });
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}
