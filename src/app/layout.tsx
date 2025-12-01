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
  ],
  authors: [{ name: "Constrong" }],
  openGraph: {
    title: "Constrong | Concrete Contractor in Kitchener-Waterloo",
    description:
      "Professional concrete contractor serving the KW construction industry",
    type: "website",
    locale: "en_CA",
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
