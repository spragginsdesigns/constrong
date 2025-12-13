import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.constrong.ca"),
  title: "Constrong | Concrete Contractor in Kitchener-Waterloo",
  description:
    "Constrong is a professional concrete contractor proudly serving the construction industry in Kitchener-Waterloo and surrounding areas. Specializing in foundations, footings, slabs, and more.",
  keywords: [
    "concrete contractor",
    "Kitchener",
    "Waterloo",
    "Ontario",
    "foundations",
    "footings",
    "slabs",
    "construction",
    "formwork",
    "concrete walls",
    "residential concrete",
    "commercial concrete",
    "KW concrete",
  ],
  authors: [{ name: "Constrong" }],
  creator: "Constrong Inc.",
  publisher: "Constrong Inc.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.constrong.ca",
  },
  openGraph: {
    title: "Constrong | Concrete Contractor in Kitchener-Waterloo",
    description:
      "Professional concrete contractor proudly serving the construction industry in Kitchener-Waterloo and surrounding areas. Specializing in foundations, footings, slabs, and walls.",
    url: "https://www.constrong.ca",
    siteName: "Constrong",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constrong | Concrete Contractor in Kitchener-Waterloo",
    description:
      "Professional concrete contractor proudly serving the construction industry in Kitchener-Waterloo and surrounding areas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Constrong" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
