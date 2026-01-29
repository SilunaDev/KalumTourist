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
  return (
    <>
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
