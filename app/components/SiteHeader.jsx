import Link from "next/link";
import { nav } from "../lib/network";

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
    </header>
  );
}
