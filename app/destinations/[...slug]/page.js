import { notFound } from "next/navigation";
import DestinationAuthorityPage from "../../components/DestinationAuthorityPage";
import { baseUrl } from "../../lib/network";
import { destinationAuthorities, destinationPageTypes, destinationPath, getDestinationAuthority, getDestinationPageType } from "../../lib/destinationAuthority";

export function generateStaticParams() {
  return destinationAuthorities.flatMap((destination) => [
    { slug: [destination.slug] },
    ...destinationPageTypes.map((type) => ({ slug: [destination.slug, type.slug] }))
  ]);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getDestinationAuthority(slug?.[0]);
  const type = slug?.[1] ? getDestinationPageType(slug[1]) : null;
  if (!destination || slug.length > 2 || (slug[1] && !type)) return {};
  const h1 = type ? `${destination.name} ${type.label}` : `${destination.name} Travel Guide`;
  const title = `${h1} | Packages, Hotels & Things To Do`;
  const description = type
    ? `Plan ${destination.name} ${type.label.toLowerCase()} with ${type.focus}, vacation packages, hotels, flights, activities, budgets, and local travel tips.`
    : `Plan a ${destination.name} vacation with packages, hotels, flights, cruises, attractions, budgets, neighborhoods, itineraries, and travel tips.`;
  const url = `${baseUrl}${destinationPath(destination, type)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Florida Deals Hub", type: "article", images: [{ url: destination.image, width: 1200, height: 630, alt: destination.imageAlt }] },
    twitter: { card: "summary_large_image", title, description, images: [destination.image] }
  };
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const destination = getDestinationAuthority(slug?.[0]);
  const type = slug?.[1] ? getDestinationPageType(slug[1]) : null;
  if (!destination || slug.length > 2 || (slug[1] && !type)) notFound();
  return <DestinationAuthorityPage destination={destination} type={type} />;
}
