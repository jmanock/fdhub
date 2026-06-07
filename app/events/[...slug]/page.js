import { notFound } from "next/navigation";
import EventTravelPage from "../../components/EventTravelPage";
import { baseUrl } from "../../lib/network";
import { allEventTravelPages, eventTravelPath, getEventTravelPage } from "../../lib/eventTravel";

export function generateStaticParams() {
  return allEventTravelPages.map((page) => ({ slug: eventTravelPath(page).replace("/events/", "").split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getEventTravelPage(slug);
  if (!page) return {};
  const url = `${baseUrl}${eventTravelPath(page)}`;
  const title = `${page.title} | Packages, Hotels, Flights & Activities`;
  return {
    title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title, description: page.description, url, siteName: "Florida Deals Hub", type: "article", images: [{ url: page.image, width: 1200, height: 630, alt: page.imageAlt }] },
    twitter: { card: "summary_large_image", title, description: page.description, images: [page.image] }
  };
}

export default async function EventRoute({ params }) {
  const { slug } = await params;
  const page = getEventTravelPage(slug);
  if (!page) notFound();
  return <EventTravelPage page={page} />;
}
