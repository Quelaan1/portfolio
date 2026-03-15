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
  title: "Tilak Kumar | Senior Software Engineer",
  description:
    "Portfolio of Tilak Kumar, a Senior Software Engineer specializing in scalable backend microservices and responsive frontend applications.",
  openGraph: {
    title: "Tilak Kumar | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in scalable backend microservices, distributed systems, and AI-driven features.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilak Kumar | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in scalable backend microservices, distributed systems, and AI-driven features.",
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
