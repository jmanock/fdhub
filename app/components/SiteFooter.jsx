import Link from "next/link";
import { popularPages, sites } from "../lib/network";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">FDH</span>
          <span>
            <strong>Florida Deals Hub</strong>
            <small>Flights, stays, cruises, and local savings.</small>
          </span>
        </Link>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer">
          <a href={sites.flights}>Flight Deals</a>
          <a href={sites.hotels}>Hotel Deals</a>
          <a href={sites.cruises}>Cruise Deals</a>
          <a href={sites.local}>Local Deals</a>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>
        <nav className="footer-popular" aria-label="Popular Florida deal searches">
          {popularPages.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <p className="affiliate-disclosure">
          Florida Deals Hub may earn a commission when you book through some links. This helps keep
          our deal alerts free.
        </p>
      </div>
    </footer>
  );
}
