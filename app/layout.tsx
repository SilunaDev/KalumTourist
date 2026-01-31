import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://eraeliyatours.com'),
  title: {
    default: "Era Eliya Tours - Premium Sri Lanka Tour Packages & Travel Services",
    template: "%s | Era Eliya Tours"
  },
  description: "Discover Sri Lanka with Era Eliya Tours. Offering customized tour packages, professional travel services, and unforgettable experiences across Sri Lanka's beautiful destinations. Licensed & certified tour operators.",
  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel packages",
    "Era Eliya Tours",
    "Sri Lanka tourism",
    "tour packages Sri Lanka",
    "Sri Lanka vacation",
    "travel Sri Lanka",
    "Sri Lanka tour operator",
    "Sri Lanka holidays",
    "Sri Lanka attractions",
    "Colombo tours",
    "Kandy tours",
    "Galle tours",
    "Sri Lanka adventure tours",
    "cultural tours Sri Lanka",
    "beach holidays Sri Lanka"
  ],
  authors: [{ name: "Era Eliya Tours" }],
  creator: "Era Eliya Tours",
  publisher: "Era Eliya Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eraeliyatours.com",
    siteName: "Era Eliya Tours",
    title: "Era Eliya Tours - Premium Sri Lanka Tour Packages & Travel Services",
    description: "Discover Sri Lanka with Era Eliya Tours. Offering customized tour packages, professional travel services, and unforgettable experiences across Sri Lanka's beautiful destinations.",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Era Eliya Tours - Sri Lanka Tourism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Era Eliya Tours - Premium Sri Lanka Tour Packages & Travel Services",
    description: "Discover Sri Lanka with Era Eliya Tours. Offering customized tour packages, professional travel services, and unforgettable experiences.",
    images: ["/images/logo/logo.png"],
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
    // Add your verification codes after registering with search engines
    google: '', // Add Google Search Console verification code
    // yandex: '',
    // bing: '',
  },
  alternates: {
    canonical: "https://eraeliyatours.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://eraeliyatours.com" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>{children}</body>
    </html>
  );
}
