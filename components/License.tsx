"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const License = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<number | null>(null);
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

  const licenses = [
    {
      title: "Tour Guide License",
      image: "/images/license/license1.jpeg",
      issueDate: "Valid & Certified",
      description: "Official Sri Lanka Tourism License",
    },
    {
      title: "Srilanka Tourist Authority",
      image: "/images/license/license2.jpeg",
      issueDate: "Valid & Certified",
      description: "Authorized Transport Services",
    },
  ];

  const closeLightbox = () => {
    setSelectedLicense(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-yellow-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              My License
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Certified and authorized to provide professional tourism services
          </p>
        </div>

        {/* License Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {licenses.map((license, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 200}ms` : "0ms",
              }}
            >
              {/* Certificate Frame */}
              <div className="relative group cursor-pointer" onClick={() => setSelectedLicense(index)}>
                {/* Decorative Corners */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl z-10"></div>
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-yellow-500 rounded-tr-3xl z-10"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-4 border-l-4 border-green-500 rounded-bl-3xl z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-blue-500 rounded-br-3xl z-10"></div>

                {/* License Image Container */}
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105">
                  {/* Verified Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold">
                      <span className="text-xl">✓</span>
                      VERIFIED
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 mt-6 overflow-hidden rounded-lg border-4 border-gray-100 group-hover:border-gray-200 transition-colors">
                    <Image
                      src={license.image}
                      alt={license.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-6 py-3 rounded-full">
                        <p className="text-gray-800 font-semibold flex items-center gap-2">
                          <span className="text-xl">🔍</span>
                          Click to Enlarge
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* License Info */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      {license.title}
                    </h3>
                    <p className="text-green-600 font-semibold mb-1">{license.issueDate}</p>
                    <p className="text-gray-600">{license.description}</p>
                  </div>

                  {/* Decorative Inner Lines */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-xl opacity-50"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-200 rounded-br-xl opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedLicense !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-colors z-10"
              onClick={closeLightbox}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Enlarged Image */}
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={licenses[selectedLicense].image}
                alt={licenses[selectedLicense].title}
                fill
                className="object-contain"
              />
            </div>

            {/* License Title */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full">
              <p className="text-white font-bold text-lg">
                {licenses[selectedLicense].title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default License;
