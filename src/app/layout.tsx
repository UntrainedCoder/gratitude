import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appreciation Portal - Spread Recognition & Gratitude",
  description: "Create beautiful appreciation messages and recognition cards. Boost morale, build trust, and create a positive culture by recognizing others.",
  keywords: "appreciation, recognition, gratitude, workplace culture, thank you cards, employee recognition",
  authors: [{ name: "TechPremi" }],
  openGraph: {
    title: "Appreciation Portal - Spread Recognition & Gratitude",
    description: "Create beautiful appreciation messages and recognition cards. Boost morale, build trust, and create a positive culture by recognizing others.",
    type: "website",
    url: "https://appreciation-portal.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appreciation Portal - Spread Recognition & Gratitude",
    description: "Create beautiful appreciation messages and recognition cards. Boost morale, build trust, and create a positive culture by recognizing others.",
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
        {children}
      </body>
    </html>
  );
}
