import Link from "next/link";
import { nav } from "../lib/network";

const planningNav = [
  ["Vacation Builder", "/vacation-builder"],
  ["Budget Travel", "/budget-travel"],
  ["Vacation Packages", "/vacation-packages"],
  ["Destinations", "/destinations"],
  ["Events", "/events"],
  ["Family Vacations", "/family-vacations"],
  ["Cruises", "/cruises"],
  ["Beach Vacations", "/beach-vacations"],
  ["Weekend Getaways", "/weekend-getaways"],
  ["Things To Do", "/things-to-do"],
  ["Travel Guides", "/journal"]
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Florida Deals Hub home">
        <span className="brand-mark">FDH</span>
        <span>
          <strong>Florida Deals Hub</strong>
          <small>Official network home</small>
        </span>
      </Link>
      <nav className="network-nav" aria-label="Florida Deals network">
        {nav.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
        <Link className="active" href="/">
          Florida Deals Hub
        </Link>
      </nav>
      <a className="header-cta" href="#newsletter">
        Get Alerts
      </a>
      <nav className="planning-nav" aria-label="Vacation planning">
        {planningNav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
    </header>
  );
}
