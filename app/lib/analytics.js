export const siteName = "floridadealshub.com";

export const networkDomains = {
  "flightdealsflorida.org": {
    site: "flightdealsflorida.org",
    destination: "flights"
  },
  "hoteldealsflorida.org": {
    site: "hoteldealsflorida.org",
    destination: "hotels"
  },
  "cruisedealsflorida.org": {
    site: "cruisedealsflorida.org",
    destination: "cruises"
  },
  "localdealsflorida.org": {
    site: "localdealsflorida.org",
    destination: "local"
  }
};

export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}

export function trackNewsletterSignupStarted() {
  trackEvent("newsletter_signup_started", {
    site: siteName,
    source: "hub"
  });
}

export function trackNewsletterSignupSuccess() {
  trackEvent("newsletter_signup_success", {
    site: siteName,
    source: "hub"
  });
}

export function getNetworkDestination(url) {
  try {
    const { hostname } = new URL(url);
    const normalizedHost = hostname.replace(/^www\./, "");
    return networkDomains[normalizedHost]?.site || null;
  } catch {
    return null;
  }
}

export function getNetworkCategory(url) {
  try {
    const { hostname } = new URL(url);
    const normalizedHost = hostname.replace(/^www\./, "");
    return networkDomains[normalizedHost]?.destination || null;
  } catch {
    return null;
  }
}

export function trackDealClick(destinationSite, linkText) {
  trackEvent("deal_click", {
    site: siteName,
    destination_site: destinationSite,
    link_text: linkText
  });
}

export function getHotelBookingProvider(url) {
  try {
    const { hostname } = new URL(url);
    const normalizedHost = hostname.replace(/^www\./, "");
    return normalizedHost === "expedia.com" ? "expedia" : null;
  } catch {
    return null;
  }
}

export function trackHotelBookingClick({ destination, outboundUrl, provider = "expedia" }) {
  trackEvent("hotel_booking_click", {
    site: siteName,
    source: "hub",
    provider,
    destination,
    page_path: window.location.pathname,
    outbound_url: outboundUrl
  });
}

export function trackNavigationClick({ linkText, destinationUrl, destinationSite, destination }) {
  trackEvent("navigation_click", {
    site: siteName,
    destination,
    link_text: linkText,
    page_path: window.location.pathname,
    destination_url: destinationUrl,
    destination_site: destinationSite
  });
}
