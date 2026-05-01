import { nav } from "../lib/network";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Florida Deals Hub home">
        <span className="brand-mark">FDH</span>
        <span>
          <strong>Florida Deals Hub</strong>
          <small>Official network home</small>
        </span>
      </a>
      <nav className="network-nav" aria-label="Florida Deals network">
        {nav.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
        <a className="active" href="/">
          Florida Deals Hub
        </a>
      </nav>
      <a className="header-cta" href="#newsletter">
        Get Alerts
      </a>
    </header>
  );
}
