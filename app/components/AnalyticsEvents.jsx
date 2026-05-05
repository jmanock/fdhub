"use client";

import { useEffect } from "react";
import {
  getHotelBookingProvider,
  getNetworkCategory,
  getNetworkDestination,
  trackDealClick,
  trackHotelBookingClick,
  trackNavigationClick
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
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}
