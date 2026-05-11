# Florida Deals Hub

Florida Deals Hub is the parent brand, network homepage, and starting point for the Florida Deals network. It sends visitors to the correct niche site for flights, hotels, cruises, and local deals while keeping any hotel monetization secondary.

The Hub is the network's content authority site. It should publish broad Florida travel guides, destination guides, trip-planning pages, and deal-routing pages that distribute traffic and authority to the category sites.

## Site Structure

The homepage is organized as a trip-planning router:

- Hero with four primary same-tab routes to the niche sites
- "Choose Your Deal Type" category cards
- "Trending Florida Deals" curated network highlights
- SEO travel-planning copy
- Popular destination guide links
- "Plan Your Florida Trip" routing cards
- Editorial travel guide links
- Seasonal travel guide links
- Trust, network, popular searches, FAQ, optional hotel planning, and newsletter signup

The Hub should remain an editorial gateway and authority resource, not a duplicate deals feed.

## SEO Page Strategy

SEO landing pages are broad entry points for Google traffic. They should explain the travel intent, link naturally to all four niche sites, include useful copy, and route users onward.

Core page themes include:

- Florida travel guide and statewide travel planning
- Destination guides for Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, Key West, Naples, Destin, and Clearwater
- Trip-planning guides and itineraries
- Seasonal Florida travel guides
- Florida travel deals
- Cheap Florida vacations
- Florida weekend getaways
- Florida vacation planning
- Best time to visit Florida
- Florida family vacations
- City and local deal pages

Each major SEO page should include useful, unique copy, visible breadcrumbs, `Updated: Month Year`, a professional trust strip, FAQ content, related Hub links, guide cards, and clear routes to Florida Flight Deals, Florida Hotel Deals, Florida Cruise Deals, and Local Deals Florida. Pages should be informational routing pages, not duplicate deal feeds.

## Sitemap And Canonicals

`public/robots.txt` allows crawling and points to `https://floridadealshub.com/sitemap.xml`.

`app/sitemap.js` generates `/sitemap.xml` from `landingPages` plus static pages. The sitemap uses HTTPS, the non-www canonical domain, no duplicate slash variants, and only canonical Hub URLs. New pages added to `landingPages` are included automatically.

Canonical tags are generated through Next metadata. The homepage canonical is defined in `app/layout.js`; SEO landing page canonicals are self-referencing absolute URLs generated in `app/[slug]/page.js`. Do not point multiple pages to the homepage unless the pages are truly duplicates.

## Metadata And Structured Data

Global metadata, Open Graph defaults, Twitter card defaults, Organization schema, and WebSite schema live in `app/layout.js`.

SEO page metadata is generated from `landingPages` in `app/lib/network.js`. Every page should have a unique title, meta description, canonical URL, Open Graph title/description/image/url, and Twitter `summary_large_image` metadata. Use a relevant Florida travel image and descriptive alt text for each important page.

Page-level JSON-LD in `app/[slug]/page.js` includes:

- `BreadcrumbList`
- `FAQPage`
- `ItemList` for featured routing cards
- `Article` for guide and destination pages

Do not add fake `Offer`, pricing, review, or product schema unless the underlying data is accurate and maintained.

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

- `navigation_click` for Hub links, network links, and outbound hotel links. Network clicks include `destination_site` as `flights`, `hotels`, `cruises`, or `local`, plus `link_text` and `page_path`.
- `network_site_click` for authority-routing clicks to the four network sites. Parameters include `source_site`, `destination_site`, `destination_type`, `cta_text`, and `page_path`.
- `deal_click` for clicks to the four Florida Deals network sites
- `hotel_booking_click` for Expedia hotel clicks, with provider, destination, page path, and outbound URL
- `newsletter_signup_started`
- `newsletter_signup_success`

Newsletter submissions use `floridadealshub.com` as the source in `app/api/newsletter/route.js`.

## Linking Rules

- Links to Hub pages and Florida Deals network sites open in the same tab.
- External affiliate links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Use descriptive CTA language such as `Find Flights`, `Compare Hotels`, `View Cruise Deals`, and `Explore Local Deals`.
- Do not use vague anchors such as `Click Here` or unsupported savings claims.

## Adding Destination Or SEO Pages

Hub SEO pages are defined in `app/lib/network.js`. Broad authority pages use `authorityPageConfigs`, destination guides use `destinationPageConfigs`, planning articles use `planningPageConfigs`, and legacy deal-routing pages live directly in `landingPages`.

To add a page:

1. Add a new config or page object with `slug`, metadata, H1, intro, related pages, and preview links.
2. Use `article: true` for editorial guides so Article schema is emitted.
3. Use existing network links from `sites` and hotel links from `getExpediaHotelLink`.
4. Add a relevant `image`, descriptive `alt`, page-specific `details`, FAQs if the default set is not specific enough, related pages, and preview links.
5. Keep the page as a router to the niche sites, not a duplicate deals feed.

Content pages automatically receive breadcrumbs, last-updated text, FAQ schema, related links, guide cards when provided, newsletter signup, and the Expedia "Need a place to stay?" hotel CTA section.

Before deployment, run `npm run lint` and `npm run build`, then spot-check robots, sitemap, canonical tags, Open Graph/Twitter metadata, schema, internal links, external affiliate link attributes, newsletter behavior, GA tracking, and mobile layout.
