"use client";

import { useEffect } from "react";
import { getNetworkDestination, trackDealClick, trackNavigationClick } from "../lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleDocumentClick(event) {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      const destinationSite = getNetworkDestination(link.href);
      const linkText = link.innerText?.trim() || link.getAttribute("aria-label") || link.href;

      trackNavigationClick(linkText, link.href);

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
