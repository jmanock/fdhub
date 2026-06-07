import Link from "next/link";
import { sites } from "../lib/network";

const footerDestinations = [
  ["All Destinations", "/destinations"],
  ["Orlando", "/destinations/orlando"],
  ["Miami", "/destinations/miami"],
  ["Clearwater Beach", "/destinations/clearwater-beach"],
  ["Key West", "/destinations/key-west"],
  ["Tampa", "/destinations/tampa"],
  ["St. Augustine", "/destinations/st-augustine"]
];

const footerGuides = [
  ["Vacation Builder", "/vacation-builder"],
  ["Vacation Packages", "/vacation-packages"],
  ["Vacations Under $1,000", "/vacations-under-1000"],
  ["Vacations Under $2,000", "/vacations-under-2000"],
  ["Vacations Under $3,000", "/vacations-under-3000"],
  ["Vacations Under $5,000", "/vacations-under-5000"],
  ["Family Vacation Packages", "/family-vacations"],
  ["Best Family Vacations", "/best-florida-family-vacations"],
  ["Family Beach Vacations", "/family-beach-vacations-florida"],
  ["Family Cruise Vacations", "/family-cruise-vacations-florida"],
  ["Cruises From Florida", "/cruises"],
  ["Weekend Cruises", "/weekend-cruises-from-florida"],
  ["Bahamas Cruises", "/bahamas-cruises-from-florida"],
  ["Beach Vacation Packages", "/beach-vacations"],
  ["Things To Do", "/things-to-do"],
  ["Florida Travel Journal", "/journal"],
  ["Florida Weekend Getaways", "/florida-weekend-getaways"],
  ["Cheap Florida Vacations", "/cheap-florida-vacations"],
  ["Best Time To Visit Florida", "/best-time-to-visit-florida"],
  ["Florida Family Vacations", "/florida-family-vacations"],
  ["Family Vacations Under $2,000", "/florida-family-vacations-under-2000"],
  ["Florida Vacation Planning Guide", "/florida-vacation-planning-guide"]
];

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
        <div className="footer-nav-grid">
          <nav aria-label="Florida destinations">
            <h2>Florida Destinations</h2>
            {footerDestinations.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Travel categories">
            <h2>Travel Categories</h2>
            <a href={sites.flights}>Florida Flight Deals</a>
            <a href={sites.hotels}>Florida Hotel Deals</a>
            <a href={sites.cruises}>Florida Cruise Deals</a>
            <a href={sites.local}>Local Florida Deals</a>
          </nav>
          <nav aria-label="Florida travel guides">
            <h2>Travel Guides</h2>
            {footerGuides.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Company links">
            <h2>Trust</h2>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <Link href="/how-we-find-deals">How We Find Deals</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
        <p className="affiliate-disclosure">
          Some links on this site may earn us a commission at no extra cost to you. This helps keep our deal alerts free.
        </p>
      </div>
    </footer>
  );
}
