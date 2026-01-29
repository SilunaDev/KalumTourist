"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-yellow-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                {/* Main Image */}
                <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/about-us.jpg"
                    alt="LankaHorizon Tourism"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-yellow-500 rounded-br-2xl"></div>
              </div>
            </div>

            {/* Right Side - Description */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Welcome to <span className="text-blue-600">Bandara Tours</span>
                  </h3>
                  <p className="text-lg text-yellow-600 font-semibold">
                    Your Trusted Travel Partner Since 2013
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    With over <span className="font-bold text-blue-600">15 years of excellence</span> in Sri Lankan hospitality, 
                    <span className="font-semibold"> LankaHorizon</span> has been crafting unforgettable journeys across the 
                    breathtaking landscapes of the Pearl of the Indian Ocean.
                  </p>

                  <p>
                    We are more than just tour guides – we are storytellers, adventurers, and your local friends who are 
                    passionate about sharing the hidden gems and rich cultural heritage of Sri Lanka. From the ancient ruins 
                    of Sigiriya to the pristine beaches of Mirissa, from the misty hills of Ella to the wildlife wonders of 
                    Yala, we bring you closer to the authentic soul of this beautiful island.
                  </p>

                  <p>
                    Our team of experienced, licensed tourist guides specializes in creating personalized experiences that go 
                    beyond ordinary sightseeing. Whether you're seeking thrilling adventures, cultural immersion, wildlife 
                    encounters, or peaceful beach escapes, we tailor every journey to match your dreams.
                  </p>

                  <p className="font-semibold text-gray-800">
                    What sets us apart is our commitment to excellence, attention to detail, and genuine love for what we do. 
                    We don't just show you Sri Lanka – we help you <span className="text-green-600">feel it, taste it, and live it</span>.
                  </p>
                </div>

                {/* Stats/Features */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-yellow-600">1000+</div>
                    <div className="text-sm text-gray-600 font-medium">Happy Travelers</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-6">
                  <p className="text-xl font-semibold text-gray-900 italic">
                    "Let us turn your Sri Lankan dream into a lifetime memory."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default AboutUs;
