/* eslint-disable @next/next/no-html-link-for-pages */
import liveData from "../../data/live-intelligence.json";
export default function FloridaRightNow() {
  const unavailable = liveData.status !== "current";
  const alerts =
    liveData.locations?.reduce(
      (n, x) => n + (x.officialAlerts?.length || 0),
      0,
    ) || 0;
  const impacts =
    liveData.airports?.filter((x) => x.status === "potential_weather_impact")
      .length || 0;
  return (
    <section className="landing-intro" aria-labelledby="hub-live-heading">
      <div className="article-trust">
        <p className="eyebrow">Florida travel intelligence</p>
        <h2 id="hub-live-heading">
          Florida conditions, organized for travelers
        </h2>
        <p>
          {unavailable
            ? "Current official alert and airport-impact data is temporarily unavailable."
            : alerts
            ? `${alerts} active official alert records found.`
            : "No active official alert was found in the latest successful update."}{" "}
          {unavailable
            ? ""
            : impacts
            ? `${impacts} pilot airports have potential weather impacts.`
            : "No pilot airport has an active official weather alert."}
        </p>
        <p className="updated-label">
          Conditions updated{" "}
          <time dateTime={liveData.generatedAt}>
            {new Date(liveData.generatedAt).toLocaleString("en-US", {
              timeZone: "America/New_York",
            })}{" "}
            ET
          </time>
          .
        </p>
        <a className="text-link" href="/florida-right-now">
          Open Florida Right Now
        </a>
      </div>
    </section>
  );
}
