export const AIRPORT_TRANSFER_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=597088&mid=124434&awinaffid=2881665&linkid=4690637&clickref=";
export const EXPEDIA_GENERAL_AFFILIATE_URL = "https://expedia.com/affiliates/expedia-home.DHcy34V";
export const transferAndTravelSlugs = new Set([
  "best-florida-family-vacations", "florida-travel-guide", "best-florida-road-trips",
  "cheap-florida-vacation-ideas", "best-places-to-visit-in-florida"
]);
export const conversionSlugs = new Set(["best-florida-family-vacations", "best-florida-beaches", "best-places-to-visit-in-florida", "best-florida-road-trips", "florida-travel-guide"]);
export const getTransferAffiliateUrl = (site, slug) =>
  `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`${site}:${slug}`)}`;
