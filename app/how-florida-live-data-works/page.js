import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export const metadata = {
  title: "How Florida Live Intelligence Works",
  description:
    "Learn which official sources Florida Deals Network uses, how conditions are cached, when data becomes stale and how affiliate relationships are handled.",
  alternates: {
    canonical: "https://floridadealshub.com/how-florida-live-data-works",
  },
};
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="landing-hero">
          <div className="landing-copy">
            <p className="eyebrow">Sources and methodology</p>
            <h1>How Florida Live Intelligence works</h1>
            <p className="hero-subhead">
              The network organizes public travel-condition data without
              pretending to replace the agencies that publish it.
            </p>
          </div>
        </section>
      <article className="landing-intro article-trust">
          <h2>Official sources</h2>
          <p>
            Weather forecasts and alerts come from the National Weather Service.
            Tide predictions and water observations come from NOAA Tides and
            Currents stations. Tropical products come from the National
            Hurricane Center. FAA NAS Status is linked for operational
            verification but is not automatically ingested in V29.
          </p>
          <h2>Update schedules and caching</h2>
          <p>
            The collector runs server-side, caches successful responses and
            publishes only validated normalized data. Weather becomes stale
            after 90 minutes, water observations after 12 hours, and alerts
            expire according to their official expiration time. A failed source
            is isolated from the other categories.
          </p>
          <h2>Geographic mapping</h2>
          <p>
            Clearwater Beach uses NOAA station 8726724. Miami Beach uses station
            8723170. Port pilots identify their specific NOAA station. A station
            represents its named location and is not presented as an exact
            measurement for a distant beach.
          </p>
          <h2>Limits and corrections</h2>
          <p>
            No beach flags, TSA waits, airport delays, cruise delays, fish
            activity or local storm impact are invented. Visitors should follow
            posted flags, lifeguards, airlines, airports, ports, cruise lines
            and emergency officials. Corrections can be reported through the
            network contact page.
          </p>
          <h2>Editorial independence and affiliates</h2>
          <p>
            Dynamic data refreshes do not change editorial review dates.
            Planning links and affiliate recommendations appear after useful
            information and do not influence official data summaries. The
            network may earn a commission from clearly disclosed affiliate
            links.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
