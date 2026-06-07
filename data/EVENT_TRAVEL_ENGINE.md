# Event Travel & Trending Destinations Engine

The `/events` section is powered by `app/lib/eventTravel.js`.

## Add An Event Hub

Add a record to `hubs` with:

- `slug`, `title`, `description`, `category`
- `audience`, `travelWindow`, `packageStyles`, `destinations`
- `planningSteps`, `schedule`, and network `links`
- optional focused `subpages`

Exact dates, countdowns, and Event schema must remain disabled until an official source has been reviewed. Set `dateVerified: true` and add `startDate` only after verification.

## Add A Trend Page

Add a record to `trends`. Trend copy should explain why the destination or travel style is worth comparing and connect users to practical packages. Avoid unsupported popularity claims.

## Monitoring Framework

`eventTrendSources` documents future inputs for Google Trends, travel news, cruise news, theme park news, airline news, and official tourism announcements. Every candidate requires editorial review before publication.

Recommended future workflow:

1. Collect candidate trend or announcement.
2. Record source URL, published date, and proposed event category.
3. Verify dates and location against an official source.
4. Add or update the registry record.
5. Run lint, build, SEO validation, and sitemap checks.
6. Queue the changed URLs for IndexNow after human-approved publishing.
