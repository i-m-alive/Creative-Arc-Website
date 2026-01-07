import type { Metadata } from "next";
import "./globals.css";
import "@/styles/variables.css";
import "@/styles/animations.css";
import "@/styles/responsive.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "CreativeArc – AI Solutions That Simplify Everyday Life",
    template: "%s | CreativeArc",
  },
  description:
    "CreativeArc Services Private Limited builds intelligent AI solutions and products that combine precision, creativity, and responsible AI.",
  keywords: [
    "AI solutions",
    "Artificial Intelligence company India",
    "AI services",
    "AI products",
    "Creative AI",
    "Responsible AI",
  ],
  authors: [{ name: "CreativeArc Services Private Limited" }],
  creator: "CreativeArc",
  metadataBase: new URL("https://creativearc.ai"), // change later to real domain
  openGraph: {
    title: "CreativeArc – AI Solutions That Simplify Everyday Life",
    description:
      "Building AI solutions and products that blend precision, creativity, and responsible AI.",
    url: "https://creativearc.ai",
    siteName: "CreativeArc",
    images: [
      {
        url: "/og-image.png", // we’ll add this later
        width: 1200,
        height: 630,
        alt: "CreativeArc AI",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativeArc – AI Solutions That Simplify Everyday Life",
    description:
      "AI services and products designed for real-world impact.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
