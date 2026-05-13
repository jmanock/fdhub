"use client";

import { trackImageFallbackUsed } from "../lib/analytics";

export default function SafeImage({
  alt,
  fallback = "/images/fallbacks/florida-travel-placeholder.svg",
  ...props
}) {
  function handleError(event) {
    const image = event.currentTarget;

    if (image.dataset.fallbackApplied === "true") {
      return;
    }

    image.dataset.fallbackApplied = "true";
    trackImageFallbackUsed(image.currentSrc || image.src);
    image.src = fallback;
  }

  return <img {...props} alt={alt || ""} onError={handleError} />;
}
