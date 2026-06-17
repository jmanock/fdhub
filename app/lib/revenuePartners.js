export const AIRPORT_TRANSFER_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=597088&mid=124434&awinaffid=2881665&linkid=4690637&clickref=";
export const EXPEDIA_GENERAL_AFFILIATE_URL = "https://expedia.com/affiliates/expedia-home.DHcy34V";
export const ZENHOTELS_AFFILIATE_URL = "http://www.awin1.com/cread.php?awinmid=115208&awinaffid=2881665";
export const SKYLARK_HOME_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=564694&mid=106305&awinaffid=2881665&linkid=4324767&clickref=";
export const SKYLARK_DEALS_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=564694&mid=106305&awinaffid=2881665&linkid=4324766&clickref=";
export const transferAndTravelSlugs = new Set([
  "best-florida-family-vacations", "florida-travel-guide", "best-florida-road-trips",
  "cheap-florida-vacation-ideas", "best-places-to-visit-in-florida"
]);
export const conversionSlugs = new Set(["best-florida-family-vacations", "best-florida-beaches", "best-places-to-visit-in-florida", "best-florida-road-trips", "florida-travel-guide"]);
export const getTransferAffiliateUrl = (site, slug) =>
  `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`${site}:${slug}`)}`;
