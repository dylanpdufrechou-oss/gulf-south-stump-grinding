import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { business } from "@/lib/site-config";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Stump Grinding in the Florida Parishes & South Mississippi`,
    template: `%s | ${business.name}`,
  },
  description:
    "Fast, fully insured stump grinding for homeowners and businesses across the Northshore, the Florida Parishes, and South Mississippi. Call or text for a free quote.",
  openGraph: {
    type: "website",
    siteName: business.name,
    url: business.url,
    title: `${business.name} | Stump Grinding in the Florida Parishes & South Mississippi`,
    description:
      "Fast, fully insured stump grinding for homeowners and businesses across the Northshore, the Florida Parishes, and South Mississippi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink-500">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={business.googleAnalyticsId} />
      </body>
    </html>
  );
}
