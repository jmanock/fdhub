import Script from "next/script";
import AnalyticsEvents from "./components/AnalyticsEvents";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-Q0DCC9Y491";

export const metadata = {
  metadataBase: new URL("https://floridadealshub.com"),
  title: "Florida Deals Hub | Flights, Hotels, Cruises & Local Florida Deals",
  description:
    "Find the best Florida deals in one place, including flight deals, hotel discounts, cruise offers, restaurant specials, local events, attractions, and weekend getaways.",
  alternates: {
    canonical: "https://floridadealshub.com"
  },
  openGraph: {
    title: "Florida Deals Hub | Flights, Hotels, Cruises & Local Florida Deals",
    description:
      "Find the best Florida deals in one place, including flight deals, hotel discounts, cruise offers, restaurant specials, local events, attractions, and weekend getaways.",
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
      "Flights, hotels, cruises, local events, restaurants, attractions, and weekend getaways across Florida.",
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
