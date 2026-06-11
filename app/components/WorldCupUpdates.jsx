import Link from "next/link";

const defaultUpdates = [
  ["Match Day Guides", "/world-cup-fan-guide-to-florida", "Practical planning notes for verified event days, neighborhoods, food, and schedule buffers."],
  ["Airport Updates", "/best-airports-for-world-cup-visitors", "Compare MIA, FLL, and MCO as complete arrival plans before choosing flights and hotels."],
  ["Transportation Tips", "/florida-transportation-during-world-cup", "Plan local movement, regional transfers, parking, tolls, rail, and rental cars."],
  ["Attraction Updates", "/world-cup-things-to-do-in-florida", "Build flexible Florida activity days around weather, rest, and verified event timing."]
];

export default function WorldCupUpdates({ items = defaultUpdates }) {
  return (
    <section className="world-cup-updates section-pad" aria-labelledby="world-cup-updates-title">
      <div className="section-heading">
        <p className="eyebrow">World Cup updates</p>
        <h2 id="world-cup-updates-title">Travel Notes To Watch Before The Trip</h2>
        <p>This reusable update board is ready for verified match-day guides, airport changes, transportation notes, and attraction updates.</p>
      </div>
      <div className="guide-card-grid">
        {items.map(([title, href, description]) => (
          <Link className="guide-card" href={href} key={href}>
            <p className="best-for-tag">Planning update</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
