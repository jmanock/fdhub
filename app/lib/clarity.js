export const CLARITY_ID = "x2rq163j9a";

export function trackClarityEvent(eventName, data = {}) {
  if (typeof window === "undefined" || typeof window.clarity !== "function") {
    return;
  }

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      window.clarity("set", key, String(value));
    }
  });
  window.clarity("event", eventName);
}
