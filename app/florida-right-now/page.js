/* eslint-disable @next/next/no-html-link-for-pages */
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FloridaRightNow from "../components/FloridaRightNow";
import data from "../../data/live-intelligence.json";
export const metadata = {
  title: "Florida Right Now: Travel Weather, Alerts & Airport Impacts",
  description:
    "A calm Florida travel outlook using official weather alerts, airport weather context, NOAA coastal data and National Hurricane Center products.",
  alternates: { canonical: "https://floridadealshub.com/florida-right-now" },
};
export default function Page() {
  const unavailable = data.status !== "current";
  const alerts = data.locations.flatMap((x) => x.officialAlerts || []);
  const impacts = data.airports.filter(
    (x) => x.status === "potential_weather_impact",
  );
  const marine = data.locations.flatMap((x) => x.marine?.officialAlerts || []);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero">
          <div className="landing-copy">
            <p className="eyebrow">Florida Live Intelligence</p>
            <h1>Florida travel conditions right now</h1>
            <p className="hero-subhead">
              A source-linked outlook for weather, beaches, airports and
              tropical conditions. Dynamic updates never replace official
              guidance.
            </p>
          </div>
        </section>
      <FloridaRightNow />
      <section className="landing-intro">
        <h2>Current outlook</h2>
        <div className="guide-card-grid">
          <article className="guide-card">
            <h3>Official alerts</h3>
              <p>
              {unavailable
                ? "Current official alert data is temporarily unavailable."
                : alerts.length
                  ? `${alerts.length} active NWS alert records found across pilot locations.`
                  : "No active official alert found in the latest update."}
              </p>
            </article>
          <article className="guide-card">
            <h3>Airport weather impacts</h3>
              <p>
              {unavailable
                ? "Current airport weather-impact data is temporarily unavailable."
                : impacts.length
                  ? `${impacts.map((x) => x.code).join(", ")} may have weather context worth checking.`
                  : "No pilot airport has an active official weather alert."}
              </p>
            </article>
          <article className="guide-card">
            <h3>Beach and marine</h3>
              <p>
              {unavailable
                ? "Current marine alert data is temporarily unavailable."
                : marine.length
                  ? `${marine.length} official marine or coastal alert records found.`
                  : "No active official marine alert found for the pilot locations."}
              </p>
            </article>
          <article className="guide-card">
            <h3>Tropical weather</h3>
              <p>
                {data.tropicalWeather.status === "official_feed_available"
                  ? "The official NHC current-products feed is available. An active system does not by itself establish a Florida impact."
                  : "Current tropical data is temporarily unavailable."}
              </p>
            </article>
          </div>
        </section>
      <section className="landing-intro">
          <h2>Plan from the current context</h2>
        <div className="guide-card-grid">
            <a
            className="guide-card"
              href="https://localdealsflorida.org/clearwater-beach-conditions"
            >
              <h3>Clearwater Beach conditions</h3>
              <p>Weather, tides, water observation and official alerts.</p>
            </a>
            <a
            className="guide-card"
              href="https://flightdealsflorida.org/florida-airport-status"
            >
              <h3>Florida airport status</h3>
              <p>MCO, MIA, TPA and FLL weather-impact context.</p>
            </a>
            <a
            className="guide-card"
              href="https://cruisedealsflorida.org/florida-cruise-port-status"
            >
              <h3>Florida cruise-port status</h3>
              <p>NOAA tide stations and official verification guidance.</p>
            </a>
          </div>
          <p>
            <a className="text-link" href="/how-florida-live-data-works">
              How Florida Live Intelligence works
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
