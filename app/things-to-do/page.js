import Link from "next/link";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ThingsToDoSection from "../components/ThingsToDoSection";
import { VacationPackageCards } from "../components/VacationPackagePage";
import { baseUrl } from "../lib/network";
import { vacationPackages } from "../lib/vacationPackages";

export const metadata = {
  title: "Things To Do In Florida | Add Activities To Your Vacation",
  description: "Find things to do in Orlando, Miami, Florida this weekend, and free Florida activities, then connect them to complete vacation packages.",
  alternates: { canonical: `${baseUrl}/things-to-do` }
};

export default function ThingsToDoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-page section-pad">
          <p className="eyebrow">Complete the vacation</p>
          <h1>Things To Do In Florida</h1>
          <p className="hero-subhead">Connect Local Deals Florida activity ideas to the hotel, cruise, flight, budget, and destination choices that shape the rest of the trip.</p>
          <div className="hero-actions"><a href="https://localdealsflorida.org">Explore Local Deals Florida</a><Link href="/vacation-packages">Search Vacation Packages</Link></div>
        </section>
        <ThingsToDoSection title="Choose Activities By Trip Type" />
        <VacationPackageCards packages={vacationPackages.slice(0, 6)} title="Turn Activities Into Complete Trips" id="things-to-do-related-packages" />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
