# Florida Deals Hub

Florida Deals Hub is the parent routing site for the Florida Deals network. It sends visitors to the correct niche site for flights, hotels, cruises, and local deals while adding a lightweight hotel monetization layer.

## Expedia Affiliate Links

Expedia links live in `app/lib/affiliateLinks.js`.

`EXPEDIA_AFFILIATE_BASE` is the temporary base link:

```js
export const EXPEDIA_AFFILIATE_BASE = "https://expedia.com/affiliate/2Wbjdi2";
```

All Expedia hotel links should go through `getExpediaHotelLink(destination)`. When Expedia deep links are available, replace the destination values inside that helper only. Do not paste Expedia URLs directly into page components.

## Tracking

Global GA4 is loaded in `app/layout.js` with `next/script`.

Click tracking is handled in `app/components/AnalyticsEvents.jsx` and `app/lib/analytics.js`.

Tracked events include:

- `navigation_click` for internal Hub links, network links, and outbound hotel links
- `deal_click` for clicks to the four Florida Deals network sites
- `hotel_booking_click` for Expedia hotel clicks, with provider, destination, page path, and outbound URL
- `newsletter_signup_started`
- `newsletter_signup_success`

## Adding Destination Or SEO Pages

Hub SEO pages are defined in `app/lib/network.js` inside `landingPages`.

To add a page:

1. Add a new object to `landingPages` with `slug`, metadata, H1, intro, related pages, and preview links.
2. Add the new URL to `public/sitemap.xml`.
3. Use existing network links from `sites` and hotel links from `getExpediaHotelLink`.
4. Keep the page as a router to the niche sites, not a duplicate deals feed.

Content pages automatically receive breadcrumbs, last-updated text, FAQ schema, related links, newsletter signup, and the Expedia "Need a place to stay?" hotel CTA section.
