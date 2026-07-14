import liveData from "../../data/live-intelligence.json";
import Link from "next/link";
import SafeImage from "./SafeImage";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { GuideLink, TripChecklist } from "./TripGuideActions";
import { ConversionScrollAnalytics } from "./ConversionCards";

function GuidanceList({ items }) {
  return <div className="reality-guidance-list">{items.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function SimpleList({ items }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function TripRealityGuidePage({ guide }) {
  const route = `/${guide.slug}`;
  const location = liveData.locations.find((item) => item.locationId === guide.liveLocationId);
  const current = liveData.status === "current" && location?.weather?.summary?.status === "current";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: guide.title, description: guide.description, image: guide.heroImage, mainEntityOfPage: `https://floridadealshub.com/${guide.slug}`, author: { "@type": "Organization", name: "Florida Deals Network" }, publisher: { "@type": "Organization", name: "Florida Deals Hub" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: "https://floridadealshub.com" }, { "@type": "ListItem", position: 2, name: guide.title, item: `https://floridadealshub.com/${guide.slug}` }] }
    ]
  };

  return <>
    <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" />
    <ConversionScrollAnalytics />
    <SiteHeader />
    <main className="reality-page">
      <section className="reality-hero">
        <div className="reality-hero-copy"><nav aria-label="Breadcrumb"><Link href="/">Florida Deals Hub</Link><span>/</span><span>Trip Reality Guide</span></nav><p className="eyebrow">{guide.eyebrow}</p><h1>{guide.title}</h1><p className="reality-lead">{guide.description}</p><p className="reality-editorial-note"><strong>Editorial note:</strong> We organize official travel data, practical planning information, and relevant partner options. Affiliate relationships do not change the factual guidance on this page.</p></div>
        <SafeImage alt={guide.heroAlt} decoding="async" fetchPriority="high" height="760" loading="eager" src={guide.heroImage} width="1100" />
      </section>

      <section className="reality-summary"><p className="eyebrow">Quick reality check</p><h2>The decision in one minute</h2><p>{guide.quickAnswer}</p><dl>{guide.reality.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>

      <section className="reality-two-column"><div><p className="eyebrow">The good</p><h2>What genuinely works</h2><GuidanceList items={guide.good} /></div><div><p className="eyebrow">The drawbacks</p><h2>Where the trip pushes back</h2><GuidanceList items={guide.drawbacks} /></div></section>

      <section className="reality-surprises"><p className="eyebrow">What visitors underestimate</p><h2>Costs, friction, and planning gaps</h2><GuidanceList items={guide.surprises} /></section>

      <section className="reality-two-column reality-cost"><div><p className="eyebrow">Worth the Cost?</p><h2>Upgrades that can solve a real problem</h2><GuidanceList items={guide.worth} /></div><div><p className="eyebrow">What may not be worth it</p><h2>Expenses to question</h2><GuidanceList items={guide.skip} /></div></section>

      <section className="reality-three-column">
        <article><p className="eyebrow">Preparation</p><h2>What to pack</h2><SimpleList items={guide.pack} /></article>
        <article><p className="eyebrow">Easy to miss</p><h2>What people forget</h2><SimpleList items={guide.forget} /></article>
        <article><p className="eyebrow">Better next time</p><h2>What experienced travelers do differently</h2><SimpleList items={guide.differently} /></article>
      </section>

      <section className="reality-live"><p className="eyebrow">Current conditions</p><h2>{location?.name || "Florida"} live context</h2><p>{current ? `${location.weather.summary.value}. ${location.weather.temperature.value}°${location.weather.temperature.unit}.` : "Current values are unavailable. Use the official sources linked from the full status page."} Live data updates independently from editorial review dates.</p><GuideLink className="fdn-button-primary" eventName="live_condition_click" href={guide.liveHref} placement="trip_reality_live_context" route={route}>{guide.liveLabel}</GuideLink></section>

      <TripChecklist items={guide.checklist} route={route} storageKey={`fdn-${guide.slug}`} />

      <section className="reality-next"><div><p className="eyebrow">Continue planning</p><h2>Recommended next steps</h2><div className="reality-link-grid">{guide.nextSteps.map((link) => <GuideLink href={link.href} key={link.href} route={route}>{link.label}<span aria-hidden="true">→</span></GuideLink>)}</div></div><div><p className="eyebrow">Sources and methodology</p><h2>How this guide is supported</h2><p>Official sources support changeable facts. Editorial judgments are conditional and name the traveler who benefits. No first-person trip is implied.</p><ul className="reality-source-list">{guide.sources.map((source) => <li key={source.href}><a href={source.href} rel="noopener noreferrer" target={source.href.startsWith("http") ? "_blank" : undefined}>{source.label}</a></li>)}</ul><details><summary>Editorial freshness</summary><p>Published and editorially reviewed July 14, 2026. Live timestamps update separately. Recheck after material destination, transport, parking, weather-policy, or partner changes.</p></details></div></section>
    </main>
    <SiteFooter />
  </>;
}
