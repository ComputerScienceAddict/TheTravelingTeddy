import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-cute",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Traveling Teddy Co. — Stuffed With Love",
  description:
    "Mobile bear-stuffing parties that bring joy to every celebration. The Traveling Teddy Co. — making memories, one teddy at a time.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
