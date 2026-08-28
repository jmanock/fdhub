import AnalyticsBootstrap from "./components/AnalyticsBootstrap";
import { ANALYTICS_CONFIG } from "./lib/analyticsConfig";
import NetworkNavigation from "./components/NetworkNavigation";
import "./globals.css";


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Florida Deals Hub",
  url: "https://floridadealshub.com",
  logo: "https://floridadealshub.com/favicon.svg",
  sameAs: [
    "https://flightdealsflorida.org",
    "https://hoteldealsflorida.org",
    "https://cruisedealsflorida.org",
    "https://localdealsflorida.org"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Florida Deals Hub",
  url: "https://floridadealshub.com",
  description:
    "Florida Deals Hub connects visitors with Florida flight deals, hotel deals, cruise deals, local deals, events, attractions, restaurants, and weekend getaway savings.",
  publisher: {
    "@type": "Organization",
    name: "Florida Deals Hub"
  }
};

export const metadata = {
  metadataBase: new URL("https://floridadealshub.com"),
  title: "Florida Deals Hub | Florida Vacation Packages & Trip Planning",
  description:
    "Discover complete Florida vacation packages with cruises, hotels, flights, activities, destination guides, budgets, and weekend trip ideas.",
  alternates: {
    canonical: "https://floridadealshub.com"
  },
  openGraph: {
    title: "Florida Deals Hub | Florida Vacation Packages & Trip Planning",
    description:
      "Discover complete Florida vacation packages with cruises, hotels, flights, activities, destination guides, budgets, and weekend trip ideas.",
    url: "https://floridadealshub.com",
    siteName: "Florida Deals Hub",
    type: "website",
    images: [
      {
        url: "https://floridadealshub.com/og.svg",
        width: 1200,
        height: 630,
        alt: "Florida Deals Hub coastal travel and lifestyle deals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Deals Hub | Florida Vacation Packages & Trip Planning",
    description:
      "Discover complete Florida vacation packages with cruises, hotels, flights, activities, destination guides, budgets, and weekend trip ideas.",
    images: ["https://floridadealshub.com/og.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          id="fdn-ga-library"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.measurementId}`}
        />
      </head>
      <body className="fdn-site">
        <NetworkNavigation />
        {children}
        <AnalyticsBootstrap />
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
