import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Reardon | Inventor & Innovator",
  description: "Personal website showcasing patents, gallery, and innovation projects.",
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
