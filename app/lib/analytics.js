export const siteName = "floridadealshub.com";

export const networkDomains = {
  "flightdealsflorida.org": "flightdealsflorida.org",
  "hoteldealsflorida.org": "hoteldealsflorida.org",
  "cruisedealsflorida.org": "cruisedealsflorida.org",
  "localdealsflorida.org": "localdealsflorida.org"
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
    return networkDomains[normalizedHost] || null;
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

export function trackNavigationClick({ linkText, destinationUrl, destinationSite }) {
  trackEvent("navigation_click", {
    site: siteName,
    link_text: linkText,
    destination_url: destinationUrl,
    destination_site: destinationSite
  });
}
