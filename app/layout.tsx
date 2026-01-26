import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

/* Google Fonts */
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

/* Local Ekhaya font (headings) */
const ekhayaFont = localFont({
  src: "../public/fonts/EkhayaDisplayFont.otf",
  variable: "--font-ekhaya",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ekhaya Farms | Growing Malawi, Feeding Communities",
  description:
    "Ekhaya Farms is a trusted Malawian agricultural company producing high-quality fresh produce distributed across all 8 districts of Malawi through Ekhaya Farm Food Stores.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfairDisplay.variable} ${geistMono.variable} ${ekhayaFont.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
