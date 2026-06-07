import Link from "next/link";
import { baseUrl } from "../lib/network";
import { getAuthorityLinkGroups } from "../lib/topicClusters";

function LinkItem({ href, children }) {
  return href.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href}>{children}</a>;
}

export default function AuthorityLinks({ currentPath, cluster, destination = null, title = "Continue Planning Your Florida Trip", breadcrumbLabel = null }) {
  const { parent, groups } = getAuthorityLinkGroups({ currentPath, cluster, destination });
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${title} related content`,
    itemListElement: groups.flatMap((group) => group.links).slice(0, 30).map(([label, href], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      url: href.startsWith("/") ? `${baseUrl}${href}` : href
    }))
  };
  const breadcrumbSchema = breadcrumbLabel ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Florida Deals Hub", item: baseUrl },
      ...(currentPath === parent[1] ? [] : [{ "@type": "ListItem", position: 2, name: parent[0], item: `${baseUrl}${parent[1]}` }]),
      { "@type": "ListItem", position: currentPath === parent[1] ? 2 : 3, name: breadcrumbLabel, item: `${baseUrl}${currentPath}` }
    ]
  } : null;

  return (
    <section className="authority-links section-pad" aria-labelledby={`${cluster}-authority-links-title`}>
      <div className="section-heading">
        <p className="eyebrow">Florida travel authority network</p>
        <h2 id={`${cluster}-authority-links-title`}>{title}</h2>
        <p>Move up to the main topic, sideways to related ideas, or deeper into a destination and complete package plan.</p>
        {currentPath !== parent[1] ? <p className="authority-parent-link"><Link href={parent[1]}>Back to {parent[0]}</Link></p> : null}
      </div>
      <div className="authority-link-groups">
        {groups.map((group) => (
          <article className="authority-link-group" key={group.title}>
            <h3>{group.title}</h3>
            <div>{group.links.map(([label, href]) => <LinkItem href={href} key={`${label}-${href}`}>{label}</LinkItem>)}</div>
          </article>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {breadcrumbSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /> : null}
    </section>
  );
}
