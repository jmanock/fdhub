import { notFound } from "next/navigation";
import EventTravelPage from "../../components/EventTravelPage";
import { baseUrl } from "../../lib/network";
import { getWorldCup2026Page, worldCup2026Guides, worldCup2026Path } from "../../lib/worldCup2026";

export function generateStaticParams() {
  return [{ slug: [] }, ...worldCup2026Guides.map((page) => ({ slug: [page.slug] }))];
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const page = getWorldCup2026Page(slug);
  if (!page) return {};
  const url = `${baseUrl}${worldCup2026Path(page)}`;
  return {
    title: `${page.title} | Hotels, Flights & Florida Trip Planning`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, siteName: "Florida Deals Hub", type: "article", images: [{ url: page.image, width: 1200, height: 630, alt: page.imageAlt }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.image] }
  };
}

export default async function WorldCup2026Route({ params }) {
  const { slug = [] } = await params;
  const page = getWorldCup2026Page(slug);
  if (!page) notFound();
  return <EventTravelPage page={page} />;
}
