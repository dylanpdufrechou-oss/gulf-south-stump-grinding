import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
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
    default: `${business.name} | Stump Grinding in Southeast Louisiana & South Mississippi`,
    template: `%s | ${business.name}`,
  },
  description:
    "Fast, fully insured stump grinding for homeowners and businesses across the Northshore, Greater New Orleans, and the Mississippi Gulf South. Call or text for a free quote.",
  openGraph: {
    type: "website",
    siteName: business.name,
    url: business.url,
    title: `${business.name} | Stump Grinding in Southeast Louisiana & South Mississippi`,
    description:
      "Fast, fully insured stump grinding for homeowners and businesses across the Northshore, Greater New Orleans, and the Mississippi Gulf South.",
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
      </body>
    </html>
  );
}
