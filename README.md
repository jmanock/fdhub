# Florida Deals Hub

Florida Deals Hub is the parent routing site for the Florida Deals network. It sends visitors to the correct niche site for flights, hotels, cruises, and local deals while adding a lightweight hotel monetization layer.

## Site Structure

The homepage is organized as a trip-planning router:

- Hero with four primary same-tab routes to the niche sites
- "Start With What You Need" category cards
- "Top Florida Deals Right Now" curated network highlights
- SEO travel-planning copy
- "Plan Your Florida Trip" routing cards
- Trust, network, popular searches, optional hotel planning, and newsletter signup

The Hub should remain a clean gateway, not a duplicate deals feed.

## SEO Page Strategy

SEO landing pages are broad entry points for Google traffic. They should explain the travel intent, link naturally to all four niche sites, include useful copy, and route users onward.

Core page themes include:

- Florida travel deals
- Cheap Florida vacations
- Florida weekend getaways
- Florida vacation planning
- Best time to visit Florida
- Florida family vacations
- City and local deal pages

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

- `navigation_click` for internal Hub links, network links, and outbound hotel links. Network clicks include `destination` as `flights`, `hotels`, `cruises`, or `local`, plus `link_text` and `page_path`.
- `deal_click` for clicks to the four Florida Deals network sites
- `hotel_booking_click` for Expedia hotel clicks, with provider, destination, page path, and outbound URL
- `newsletter_signup_started`
- `newsletter_signup_success`

## Linking Rules

- Links to Hub pages and Florida Deals network sites open in the same tab.
- External affiliate links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Use descriptive CTA language such as `Find Flights`, `Compare Hotels`, `View Cruise Deals`, and `Explore Local Deals`.
- Do not use vague anchors such as `Click Here` or unsupported claims about guaranteed savings.

## Adding Destination Or SEO Pages

Hub SEO pages are defined in `app/lib/network.js` inside `landingPages`.

To add a page:

1. Add a new object to `landingPages` with `slug`, metadata, H1, intro, related pages, and preview links.
2. Add the new URL to `public/sitemap.xml`.
3. Use existing network links from `sites` and hotel links from `getExpediaHotelLink`.
4. Keep the page as a router to the niche sites, not a duplicate deals feed.

Content pages automatically receive breadcrumbs, last-updated text, FAQ schema, related links, newsletter signup, and the Expedia "Need a place to stay?" hotel CTA section.
