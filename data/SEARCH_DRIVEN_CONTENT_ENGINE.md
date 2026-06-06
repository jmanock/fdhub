# Search-Driven Travel Content Engine

Florida Deals Hub uses proven search demand to build planning pages that connect users to the focused Flights, Hotels, Cruises, and Local Deals properties.

## Content Rules

- Start with a demonstrated query theme, not a generic blog idea.
- Build a complete planning answer around the query intent.
- Vacation package pages must include assumptions, transparent cost ranges, booking categories, internal links, network links, tips, and FAQs.
- Cost ranges are editorial planning estimates, never live quotes or guaranteed prices.
- Every destination or trend story should lead to a relevant vacation package or planning guide.
- Do not publish a package whose only unique element is a changed destination name.

## Live Registries

- `app/lib/vacationPackages.js`: vacation package pages and search-demand map.
- `app/lib/packageDiscovery.js`: package categories, filter attributes, and Things To Do collections.
- `app/lib/familyVacations.js`: the Florida family vacation authority cluster, destination family pages, budgets, and family booking paths.
- `app/lib/destinationHubs.js`: destination discovery pages.
- `data/journal/stories.json`: editorial and trend stories.
- `app/lib/network.js`: statewide guides, comparisons, seasonal pages, and deal routers.

The dynamic route at `app/[slug]/page.js` consumes vacation packages, destination hubs, and network landing pages. New registry entries are automatically included in static generation and the sitemap.

The `/vacation-packages` route is the primary discovery experience. It filters the same package registry by budget, destination, travel style, and duration. Category hubs should curate existing useful packages rather than creating thin duplicates.

## Adding A Vacation Package

1. Confirm the query belongs to family vacations, cruises, hotels, activities, or another proven Search Console theme.
2. Add one unique object to `vacationPackages`.
3. Include realistic assumptions and at least one complete trip option.
4. Link to the most relevant network pages, using descriptive anchor text.
5. Add related Hub pages and page-specific FAQs.
6. Run `npm run content:packages`, `npm run lint`, `npm run build`, `npm run seo:validate`, and `npm run seo:report`.

## Trend And Event Content

Travel trends, cruise news, airline news, theme park news, seasonal travel, and World Cup travel content belong in the journal. A trend story should explain the Florida trip decision it changes and link back to a relevant vacation package, destination hub, or planning guide.
