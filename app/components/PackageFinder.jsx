"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";

export default function PackageFinder({ packages }) {
  const [budget, setBudget] = useState("all");
  const [destination, setDestination] = useState("all");
  const [style, setStyle] = useState("all");
  const [duration, setDuration] = useState("all");
  const destinations = [...new Set(packages.flatMap((item) => [item.destination, ...item.optionDestinations]))].sort();
  const styles = [...new Set(packages.flatMap((item) => item.styles))].sort();
  const durations = [...new Set(packages.map((item) => item.duration))].sort();
  const results = packages.filter(
    (item) =>
      (budget === "all" || item.maxBudget <= Number(budget)) &&
      (destination === "all" || item.destination === destination || item.optionDestinations.includes(destination)) &&
      (style === "all" || item.styles.includes(style)) &&
      (duration === "all" || item.duration === duration)
  );

  return (
    <section className="package-finder section-pad" aria-labelledby="package-finder-title">
      <div className="section-heading">
        <p className="eyebrow">Vacation package search</p>
        <h2 id="package-finder-title">Find A Florida Vacation That Fits</h2>
        <p>Filter complete trip frameworks by budget, destination, travel style, and duration.</p>
      </div>
      <div className="package-filter-bar">
        <label htmlFor="package-budget">Budget<select id="package-budget" value={budget} onChange={(event) => setBudget(event.target.value)}><option value="all">Any budget</option><option value="2000">Up to $2,000</option><option value="3000">Up to $3,000</option><option value="5000">Up to $5,000</option></select></label>
        <label htmlFor="package-destination">Destination<select id="package-destination" value={destination} onChange={(event) => setDestination(event.target.value)}><option value="all">All destinations</option>{destinations.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label htmlFor="package-style">Travel style<select id="package-style" value={style} onChange={(event) => setStyle(event.target.value)}><option value="all">All travel styles</option>{styles.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label htmlFor="package-duration">Duration<select id="package-duration" value={duration} onChange={(event) => setDuration(event.target.value)}><option value="all">Any duration</option>{durations.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <p className="package-result-count" aria-live="polite">{results.length} vacation package{results.length === 1 ? "" : "s"} found</p>
      <div className="guide-card-grid visual-card-grid">
        {results.map((item) => (
          <Link className="guide-card story-card package-card" href={`/${item.slug}`} key={item.slug}>
            <SafeImage src={item.image} alt={item.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="720" height="430" loading="lazy" decoding="async" />
            <span className="story-category-label">{item.destination} · {item.duration}</span>
            <h3>{item.h1}</h3>
            <p>{item.summary}</p>
            <p className="best-for-tag">Up to ${item.maxBudget.toLocaleString()} · {item.styles.join(" · ")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
