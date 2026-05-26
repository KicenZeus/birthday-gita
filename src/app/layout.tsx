import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AntiInspect from "@/components/AntiInspect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "Happy Birthday Sayang ❤️",

  description:
    "project kecil-kecilan",

  openGraph: {

    title: "Happy Birthday Sayang ❤️",

    description:
      "For Ur Birthday❤️",

    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AntiInspect />
        {children}
        </body>
    </html>
  );
}
