import Link from "next/link";
import { thingsToDoCollections } from "../lib/packageDiscovery";

export default function ThingsToDoSection({ title = "Add Things To Do To The Vacation" }) {
  return (
    <section className="things-to-do-packages section-pad" aria-labelledby="things-to-do-packages-title">
      <div className="section-heading">
        <p className="eyebrow">Local Deals integration</p>
        <h2 id="things-to-do-packages-title">{title}</h2>
        <p>Complete the package with activities that fit the destination, budget, and pace of the trip.</p>
      </div>
      <div className="guide-card-grid">
        {thingsToDoCollections.map((item) => (
          <article className="guide-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="inline-link-pair">
              <a href={item.href}>Explore local activities</a>
              <Link href={item.packageHref}>View related package</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
