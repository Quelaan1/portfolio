import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tilak Kumar | Digital Architect",
  description:
    "Engineering high-performance distributed systems and ML pipelines with a focus on scale, security, and computational efficiency.",
  openGraph: {
    title: "Tilak Kumar | Digital Architect",
    description:
      "Engineering high-performance distributed systems and ML pipelines with a focus on scale, security, and computational efficiency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilak Kumar | Digital Architect",
    description:
      "Engineering high-performance distributed systems and ML pipelines with a focus on scale, security, and computational efficiency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
