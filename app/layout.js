import Script from "next/script";
import AnalyticsEvents from "./components/AnalyticsEvents";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-Q0DCC9Y491";

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
  title: "Florida Deals Hub | Flights, Hotels, Cruises & Local Florida Deals",
  description:
    "Plan a Florida trip with flight deals, hotel searches, cruise ideas, local attractions, weekend getaways, and destination travel guides.",
  alternates: {
    canonical: "https://floridadealshub.com"
  },
  openGraph: {
    title: "Florida Deals Hub | Flights, Hotels, Cruises & Local Florida Deals",
    description:
      "Plan a Florida trip with flight deals, hotel searches, cruise ideas, local attractions, weekend getaways, and destination travel guides.",
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
    title: "Florida Deals Hub | Flights, Hotels, Cruises & Local Florida Deals",
    description:
      "Plan a Florida trip with flight deals, hotel searches, cruise ideas, local attractions, weekend getaways, and destination travel guides.",
    images: ["https://floridadealshub.com/og.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsEvents />
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
