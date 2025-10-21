import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Main Robotic Construction Corporation",
  description:
    "Develop a modern, minimalist website representing Main Robotic Construction Corporation, highlighting expertise in development, infrastructure, and construction sectors.",
  keywords: [
    "Main Robotic Construction Corporation",
    "robotic construction",
    "infrastructure development",
    "modern construction",
    "engineering solutions",
  ],
  authors: [{ name: "Main Robotic Construction Corporation" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Main Robotic Construction Corporation",
    description:
      "Develop a modern, minimalist website representing Main Robotic Construction Corporation, highlighting expertise in development, infrastructure, and construction sectors.",
    url: "https://mainco.io",
    siteName: "Main Robotic Construction Corporation",
    images: [
      {
        url: "https://mainco.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Main Robotic Construction Corporation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Robotic Construction Corporation",
    description:
      "Develop a modern, minimalist website representing Main Robotic Construction Corporation, highlighting expertise in development, infrastructure, and construction sectors.",
    images: ["https://mainco.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
