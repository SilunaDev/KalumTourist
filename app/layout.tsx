import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EraEliyaTours - Your Travel Companion",
  description: "Explore the beautiful horizons of Sri Lanka with LankaHorizon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
