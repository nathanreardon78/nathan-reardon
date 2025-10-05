import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Reardon | Inventor & Innovator",
  description: "Personal website showcasing patents, gallery, and innovation projects.",
  keywords: "Nathan Reardon, inventor, innovator, patents, automotive, technology, entrepreneur",
  authors: [{ name: "Nathan Reardon" }],
  creator: "Nathan Reardon",
  publisher: "Nathan Reardon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nathanreardon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nathan Reardon | Inventor & Innovator",
    description: "Personal website showcasing patents, gallery, and innovation projects.",
    url: "https://nathanreardon.com",
    siteName: "Nathan Reardon Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nathan Reardon - Inventor & Innovator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Reardon | Inventor & Innovator",
    description: "Personal website showcasing patents, gallery, and innovation projects.",
    images: ["/og-image.png"],
    creator: "@nathanreardon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden`}
      >
        <div className="flex min-h-screen flex-col w-full max-w-[100vw]">
          <Header />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
