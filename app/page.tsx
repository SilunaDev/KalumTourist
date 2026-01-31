import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import License from "@/components/License";
import Customers from "@/components/Customers";
import Places from "@/components/Places";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // JSON-LD structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Era Eliya Tours",
    "description": "Premium Sri Lanka tour packages and travel services",
    "url": "https://eraeliyatours.com",
    "logo": "https://eraeliyatours.com/images/logo/logo.png",
    "image": "https://eraeliyatours.com/images/logo/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressRegion": "Sri Lanka"
    },
    "sameAs": [
      // Add your social media profiles here
      // "https://www.facebook.com/eraeliyatours",
      // "https://www.instagram.com/eraeliyatours",
      // "https://twitter.com/eraeliyatours"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "serviceType": [
      "Tour Packages",
      "Travel Planning",
      "Transportation Services",
      "Hotel Booking",
      "Tour Guide Services"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 overflow-x-hidden w-full">
        <Header />
        <Carousel />
        <Experience />
        <Services />
        <License />
        <Customers />
        <Places />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
