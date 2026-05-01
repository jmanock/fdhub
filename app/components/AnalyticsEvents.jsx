"use client";

import { useEffect } from "react";
import { getNetworkDestination, trackDealClick } from "../lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleDocumentClick(event) {
      const link = event.target.closest("a[href]");

      if (!link) {
        return;
      }

      const destinationSite = getNetworkDestination(link.href);

      if (!destinationSite) {
        return;
      }

      const linkText = link.innerText?.trim() || link.getAttribute("aria-label") || link.href;
      trackDealClick(destinationSite, linkText);
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}
