"use client";

import Link from "next/link";
import { trackEvent } from "../lib/analytics";

export default function TrackedRelatedLink({ href, children }) {
  function handleClick() {
    trackEvent("related_guide_click", {
      source_site: "floridadealshub.com",
      source_page: window.location.pathname,
      target_page: href,
      placement_type: "related_discovery",
      cta_text: typeof children === "string" ? children : "Related guide",
      page_path: window.location.pathname
    });
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
