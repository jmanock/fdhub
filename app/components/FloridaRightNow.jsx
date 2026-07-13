import liveData from "../../data/live-intelligence.json";
import Link from "next/link";

function formatUpdate(value) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York", timeZoneName: "short" }).format(new Date(value));
}

export default function FloridaRightNow() {
  const unavailable = liveData.status !== "current";
  const alerts = liveData.locations?.reduce((total, location) => total + (location.officialAlerts?.length || 0) + (location.marine?.officialAlerts?.length || 0), 0) || 0;
  const airportImpacts = liveData.airports?.filter((airport) => airport.status === "potential_weather_impact").length || 0;
  const clearwater = liveData.locations?.find((location) => location.locationId === "clearwater-beach");
  const activeSystems = liveData.tropicalWeather?.activeSystems?.length || 0;

  const cards = [
    ["Florida weather", unavailable ? "Unavailable" : `${liveData.locations?.length || 0} destinations monitored`, "NWS conditions"],
    ["Beach conditions", clearwater?.weather?.summary?.value || "Unavailable", clearwater?.waterTemperature?.value != null ? `Water ${Math.round(clearwater.waterTemperature.value)}°F` : "Water reading unavailable"],
    ["Airport impacts", unavailable ? "Unavailable" : airportImpacts ? `${airportImpacts} weather-impact flags` : "No weather-impact flags", "Not an FAA delay confirmation"],
    ["Cruise ports", `${liveData.cruisePorts?.length || 0} ports with tide context`, "Verify operations with port"],
    ["Tropical outlook", activeSystems ? `${activeSystems} active system record${activeSystems === 1 ? "" : "s"}` : "No active systems in feed", "Official NHC source"],
  ];

  return (
    <section className="florida-now-preview section-pad" aria-labelledby="hub-live-heading">
      <div className="florida-now-preview__header"><div><p className="eyebrow">Live Florida intelligence</p><h2 id="hub-live-heading">Florida Right Now</h2><p>Weather, beach conditions, airport context, cruise-port tides, and tropical information from official sources.</p></div><Link className="affiliate-cta" href="/florida-right-now">See Florida Right Now</Link></div>
      <div className="florida-now-preview__grid">{cards.map(([title, value, note]) => <article key={title}><span>{title}</span><strong>{value}</strong><small>{note}</small></article>)}</div>
      <div className="florida-now-preview__footer"><span>{alerts ? `${alerts} official alert record${alerts === 1 ? "" : "s"} found` : "No active official alert records found"}</span><span>Conditions updated <time dateTime={liveData.generatedAt}>{formatUpdate(liveData.generatedAt)}</time> · Sources: NWS, NOAA, NHC</span></div>
    </section>
  );
}
