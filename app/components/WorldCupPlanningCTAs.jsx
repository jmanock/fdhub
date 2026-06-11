import Link from "next/link";
import { sites } from "../lib/network";

const planningOptions = [
  ["Find Hotels", sites.hotels, "Compare Florida hotel areas, cruise-port stays, beach hotels, and family-friendly options."],
  ["Find Flights", sites.flights, "Compare Miami, Fort Lauderdale, and Orlando airport guides and route-planning ideas."],
  ["Find Activities", `${sites.local}/florida-vacation-activities`, "Explore Florida attractions, boat tours, family activities, and free things to do."],
  ["Find Attractions", `${sites.local}/orlando-attractions`, "Plan Orlando theme parks, Kennedy Space Center, and family vacation add-ons."],
  ["Compare Vacation Packages", "/family-vacation-packages", "Connect hotels, attractions, transportation, estimated budgets, and trip length."],
  ["Find Transportation", "/florida-transportation-during-world-cup", "Compare airport transfers, local transit, driving, rail, tolls, and regional trip timing."]
];

export default function WorldCupPlanningCTAs() {
  return (
    <section className="world-cup-planning-ctas section-pad" aria-labelledby="world-cup-planning-ctas-title">
      <div className="section-heading">
        <p className="eyebrow">Build the complete Florida trip</p>
        <h2 id="world-cup-planning-ctas-title">Hotels, Flights, Activities, Attractions & Transportation</h2>
        <p>Use focused planning resources for each part of the trip. Prices, schedules, and availability can change.</p>
      </div>
      <div className="router-card-grid">
        {planningOptions.map(([title, href, description]) => (
          <article className="router-card" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
            {href.startsWith("/") ? <Link href={href}>{title}</Link> : <a href={href}>{title}</a>}
          </article>
        ))}
      </div>
    </section>
  );
}
