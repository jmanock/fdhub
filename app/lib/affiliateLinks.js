export const EXPEDIA_AFFILIATE_BASE = "https://expedia.com/affiliate/2Wbjdi2";

export function getExpediaHotelLink(destination) {
  const links = {
    // Replace these values with Expedia destination deep links after final affiliate URLs are issued.
    orlando: EXPEDIA_AFFILIATE_BASE,
    miami: EXPEDIA_AFFILIATE_BASE,
    tampa: EXPEDIA_AFFILIATE_BASE,
    fortLauderdale: EXPEDIA_AFFILIATE_BASE,
    jacksonville: EXPEDIA_AFFILIATE_BASE
  };

  return links[destination] ?? EXPEDIA_AFFILIATE_BASE;
}
