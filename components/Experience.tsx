"use client";

import { useEffect, useRef, useState } from "react";

const Experience = () => {
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
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Left Edge Decorative Lines */}
      <div className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
          <div className="w-16 h-16 border-4 border-blue-500 rounded-full opacity-30"></div>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Right Edge Decorative Lines */}
      <div className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4 items-end pr-4">
          <div className="w-16 h-1 bg-gradient-to-l from-green-500 to-transparent rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-l from-yellow-500 to-transparent rounded-full"></div>
          <div className="w-12 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full"></div>
          <div className="w-16 h-16 border-4 border-yellow-500 rounded-full opacity-30"></div>
          <div className="w-12 h-1 bg-gradient-to-l from-green-500 to-transparent rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-l from-yellow-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-green-500 rounded-full blur-3xl"></div>
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
              Our Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Content */}
        <div className="max-w-4xl mx-auto">
          {/* Main Experience Box */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 border-t-4 border-gradient">
              <div className="relative pt-16 sm:pt-20">
                {/* Years Badge */}
                <div
                  className={`absolute -top-20 sm:-top-24 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
                    isVisible ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="bg-gradient-to-br from-blue-600 via-yellow-600 to-green-600 text-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold">15+</div>
                      <div className="text-xs sm:text-sm font-semibold">YEARS</div>
                    </div>
                  </div>
                </div>

                {/* Experience Text */}
                <div className="text-center">
                  <p
                    className={`text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed transition-all duration-1000 delay-700 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="font-semibold text-blue-600">15 years</span> in the trade of{" "}
                    <span className="font-semibold text-yellow-600">hospitality (hotel)</span>{" "}
                    holding different capacity and since{" "}
                    <span className="font-semibold text-green-600">2013</span> I started this job.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Lines */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-yellow-500 rounded-tr-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-green-500 rounded-bl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-blue-500 rounded-br-2xl"></div>
          </div>

          {/* Statistics Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Years Experience</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-4xl font-bold mb-2">2013</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Started Journey</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Hospitality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default Experience;
