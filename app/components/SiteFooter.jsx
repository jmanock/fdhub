import Link from "next/link";
import { sites } from "../lib/network";

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
    </footer>
  );
}
