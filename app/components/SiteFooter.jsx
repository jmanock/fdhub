import { sites } from "../lib/network";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">FDH</span>
          <span>
            <strong>Florida Deals Hub</strong>
            <small>Flights, stays, cruises, and local savings.</small>
          </span>
        </a>
      </div>
      <nav aria-label="Footer">
        <a href={sites.flights}>Flight Deals</a>
        <a href={sites.hotels}>Hotel Deals</a>
        <a href={sites.cruises}>Cruise Deals</a>
        <a href={sites.local}>Local Deals</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/sitemap.xml">Sitemap</a>
      </nav>
    </footer>
  );
}
