# Florida Deals Hub

Florida Deals Hub is the parent brand, network homepage, and starting point for the Florida Deals network. It sends visitors to the correct niche site for flights, hotels, cruises, and local deals while keeping any hotel monetization secondary.

The Hub is the network's content authority site. It should publish broad Florida travel guides, destination guides, trip-planning pages, and deal-routing pages that distribute traffic and authority to the category sites.

## Site Structure

The homepage is organized as a trip-planning router:

- Hero with four primary same-tab routes to the niche sites
- "Trending Florida Searches" freshness-oriented routing links
- "Choose Your Deal Type" category cards
- "Trending Florida Deals" curated network highlights with Best For tags
- SEO travel-planning copy
- Popular destination guide links
- Editorial picks
- Destination clusters for Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, Key West, Clearwater, and St. Augustine
- Comparison guides for destination and trip-type decisions
- Best For trip-type routes for families, couples, budget travelers, beach trips, theme parks, cruise travelers, and weekend getaways
- "Plan Your Florida Trip" routing cards
- Editorial travel guide links
- Seasonal travel guide links
- Trust, network, popular searches, FAQ, optional hotel planning, and newsletter signup
- Florida Travel Journal module with featured and trending stories

The Hub should remain an editorial gateway and authority resource, not a duplicate deals feed.

## Florida Travel Journal

Version 9 adds the Florida Travel Journal as the Hub's story and engagement layer.

Routes:

- `/journal`: featured stories, trending stories, most popular stories, and category sections
- `/journal/[slug]`: individual story pages with story body, related network links, affiliate-safe recommendations, related stories, FAQs, newsletter signup, and schema
- `/journal/[category]`: category collection pages generated from `data/journal/storyCategories.json`

Source data:

- `data/journal/stories.json`
- `data/journal/storyCategories.json`
- optional local-development source: `../shared/data/stories.json`
- optional local-development source: `../shared/data/storyCategories.json`
- `app/lib/stories.js`

Production safety:

- `app/lib/stories.js` loads Hub-local data first.
- Runtime Journal data loading stays inside the Hub app directory.
- Missing Journal data returns empty arrays with a clear `[journal-data]` warning.
- `/sitemap.xml` includes Journal URLs only when Journal data loads successfully.
- `npm run prebuild` runs `scripts/prepare-shared-data.mjs` before production builds.
- The Hub can build from `/var/www/fdhub` without `/var/www/shared`.

Manual workflow:

```bash
npm run stories:generate -- --title="Florida Beach Weekend Ideas" --category=destination-spotlights --destination=Clearwater
npm run stories:review
npm run stories:publish -- --confirm-reviewed
```

The publish step intentionally requires `--confirm-reviewed`. Do not use the story generator as an automatic publishing system.

Story requirements:

- unique title, excerpt, slug, destination, category, dates, hero image, and descriptive alt text
- useful editorial sections rather than generic SEO filler
- related guides, related destinations, related network sites, and FAQs
- `status: "published"` before the story appears on `/journal`, category pages, or `/journal/[slug]`
- optional `featured`, `trending`, `popular`, and `editorPick` flags for magazine modules
- affiliate disclosure when affiliate links are present
- tracked affiliate URLs only; do not publish Sailo outbound links without the supplied AWIN URL

## SEO Page Strategy

SEO landing pages are broad entry points for Google traffic. They should explain the travel intent, link naturally to all four niche sites, include useful copy, and route users onward.

Core page themes include:

- Florida travel guide and statewide travel planning
- Destination guides for Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, Key West, Naples, Destin, and Clearwater
- Trip-planning guides and itineraries
- Seasonal Florida travel guides for summer, winter, spring break, holiday travel, hurricane season, Memorial Day weekend, and Labor Day weekend
- Comparison guides for destination and trip-type decisions
- E-E-A-T trust pages including About, Contact, Editorial Policy, and How We Find Deals
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

`app/sitemap.js` generates `/sitemap.xml` from `landingPages` plus static pages. Journal pages are included only when Journal story data loads successfully. The sitemap uses HTTPS, the non-www canonical domain, no duplicate slash variants, and only canonical Hub URLs. New pages added to `landingPages` are included automatically.

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

## Image Fallback Strategy

Use `app/components/SafeImage.jsx` for Hub-controlled images. It preserves the image box, swaps failed image URLs to a local fallback, and tracks `image_fallback_used` without interrupting the page.

Fallback assets live in `public/images/fallbacks/`:

- `florida-travel-placeholder.svg`
- `florida-beach-placeholder.svg`
- `florida-deals-placeholder.svg`

Images should use descriptive alt text, stable width and height attributes, eager loading only for primary hero imagery, and lazy loading for below-the-fold cards. Match destination images to page topic whenever possible.

## Related Searches, Clusters, And Footer SEO

Every major Hub page should include a related searches grid with useful Hub links and descriptive same-tab routes to the four network sites. The page template calls this section `Related Florida Searches`.

Destination clusters group related pages and category links for Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, Key West, Clearwater, and St. Augustine. They are designed to build topical authority around major Florida destination searches while routing visitors to flights, hotels, cruises, and local deals.

The footer is a crawl-friendly navigation hub with sections for Florida Destinations, Travel Categories, Travel Guides, and Trust links. Keep footer links useful and limited enough to scan.

## Comparison Pages

Comparison pages are generated from `comparisonPageConfigs` in `app/lib/network.js`. Each comparison page should include unique metadata, a useful intro, comparison table rows, recommendations, related searches, FAQ schema, BreadcrumbList schema, ItemList schema, and Article schema.

Good comparison pages help users decide between destinations or trip styles, then send them into the right vertical site. Avoid fake rankings, fake savings, unsupported pricing claims, and thin city-vs-city copy.

## Seasonal Pages

Version 2 seasonal pages are generated from `v2SeasonalPageConfigs` in `app/lib/network.js`. These pages should give practical, evergreen travel guidance for high-intent seasonal searches, including destinations to consider, planning advice, relevant network routes, related searches, and FAQs.

Seasonal pages should stay useful without fake urgency. Use language like `travel dates can affect prices`, `availability varies`, and `confirm current details with the booking or official source`.

## Trust Pages

The Hub includes E-E-A-T support pages at `/about`, `/contact`, `/editorial-policy`, and `/how-we-find-deals`.

These pages should explain what Florida Deals Hub is, how the network is organized, how content is created, how affiliate links are handled, and why users should confirm prices, schedules, availability, and terms with the final source.

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
- `image_fallback_used` when a remote image fails and a local fallback is shown
- `newsletter_signup_started`
- `newsletter_signup_success`
- `story_view`
- `story_click`
- `story_read_complete`
- `story_affiliate_click`
- `story_network_click`

Newsletter submissions use `floridadealshub.com` as the source in `app/api/newsletter/route.js`.

## Linking Rules

- Links to Hub pages and Florida Deals network sites open in the same tab.
- External affiliate links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Use descriptive CTA language such as `Find Flights`, `Compare Hotels`, `View Cruise Deals`, and `Explore Local Deals`.
- Do not use vague generic anchors or unsupported savings claims.

## Adding Destination Or SEO Pages

Hub SEO pages are defined in `app/lib/network.js`. Broad authority pages use `authorityPageConfigs`, destination guides use `destinationPageConfigs`, planning articles use `planningPageConfigs`, seasonal articles use `v2SeasonalPageConfigs`, comparison pages use `comparisonPageConfigs`, and legacy deal-routing pages live directly in `landingPages`.

To add a page:

1. Add a new config or page object with `slug`, metadata, H1, intro, related pages, and preview links.
2. Use `article: true` for editorial guides so Article schema is emitted.
3. Use existing network links from `sites` and hotel links from `getExpediaHotelLink`.
4. Add a relevant `image`, descriptive `alt`, page-specific `details`, FAQs if the default set is not specific enough, related pages, and preview links.
5. Keep the page as a router to the niche sites, not a duplicate deals feed.

Content pages automatically receive breadcrumbs, last-updated text, FAQ schema, related links, guide cards when provided, newsletter signup, and the Expedia "Need a place to stay?" hotel CTA section.

Before deployment, run `npm run lint` and `npm run build`, then spot-check robots, sitemap, canonical tags, Open Graph/Twitter metadata, schema, internal links, external affiliate link attributes, newsletter behavior, GA tracking, and mobile layout.

## DigitalOcean PM2 Deploy

When deploying the Hub as `/var/www/fdhub`, use one clean PM2 process:

```bash
cd /var/www/fdhub
git pull origin main
npm install
npm run build
pm2 delete fdhub
PORT=3004 pm2 start npm --name fdhub -- start
pm2 save
curl -I http://localhost:3004
```

Deleting the old `fdhub` process before starting the new one avoids duplicate PM2 processes. Do not start multiple `fdhub` processes on the same port.
