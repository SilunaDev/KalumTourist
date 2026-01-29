"use client";

import { useEffect, useRef, useState } from "react";

const Services = () => {
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

  const services = [
    {
      icon: "✈️",
      title: "Airport Pickup/Drop-off",
      description: "Comfortable and reliable airport transfer services",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🗺️",
      title: "All Island Guiding",
      description: "Expert local guides for comprehensive island tours",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: "🚗",
      title: "Transport Services",
      description: "Modern fleet with professional drivers",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "🏨",
      title: "Hotel Reservation",
      description: "Best accommodations at competitive rates",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📋",
      title: "Tour Organising",
      description: "Customized itineraries tailored to your preferences",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🍽️",
      title: "Food Tours",
      description: "Authentic Sri Lankan culinary experiences",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "🦁",
      title: "Wildlife Safari",
      description: "Unforgettable wildlife encounters in national parks",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: "💼",
      title: "Business Travel",
      description: "Professional services for corporate travelers",
      color: "from-yellow-600 to-amber-600",
    },
    {
      icon: "🎯",
      title: "Adventure Activities",
      description: "Thrilling experiences for adventure seekers",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: "🎭",
      title: "Cultural Experiences",
      description: "Immerse in rich Sri Lankan heritage",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: "🌟",
      title: "Other Services",
      description: "Custom requests and special arrangements",
      color: "from-yellow-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Left Edge Travel Decorations */}
      <div className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-6 items-center">
          {/* Compass */}
          <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl transform hover:rotate-180 transition-transform duration-700">
            🧭
          </div>
          {/* Plane */}
          <div className="text-4xl transform -rotate-45 hover:translate-x-2 transition-transform duration-500">
            ✈️
          </div>
          {/* Map */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            🗺️
          </div>
          {/* Camera */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            📷
          </div>
          {/* Luggage */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            🧳
          </div>
        </div>
      </div>

      {/* Right Edge Travel Decorations */}
      <div className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-6 items-center">
          {/* Beach */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            🏖️
          </div>
          {/* Mountain */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            🏔️
          </div>
          {/* Passport */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            📮
          </div>
          {/* Globe */}
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-2xl hover:rotate-180 transition-transform duration-700">
            🌏
          </div>
          {/* Ticket */}
          <div className="text-3xl hover:scale-110 transition-transform duration-300">
            🎫
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
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
              Our Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive travel solutions for an unforgettable Sri Lankan experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)] xl:w-[calc(20%-26px)] transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Glass Morphism Card */}
              <div className="group relative h-full">
                {/* Floating Icon Container */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-xl flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Glass Card */}
                <div className="relative pt-12 pb-8 px-6 h-full backdrop-blur-lg bg-white/40 rounded-3xl border border-white/50 shadow-xl group-hover:shadow-2xl group-hover:bg-white/60 transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}
                  ></div>

                  {/* Corner Accents */}
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Left Corner Decoration */}
        <div className="absolute left-4 sm:left-8 lg:left-12 bottom-8 hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              🌴
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
            </div>
            <div className="text-3xl hover:scale-110 transition-transform duration-300">
              🥥
            </div>
          </div>
        </div>

        {/* Bottom Right Corner Decoration */}
        <div className="absolute right-4 sm:right-8 lg:right-12 bottom-8 hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="text-3xl hover:scale-110 transition-transform duration-300">
              🌺
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-1 bg-gradient-to-l from-green-500 to-transparent rounded-full ml-auto"></div>
              <div className="w-12 h-1 bg-gradient-to-l from-yellow-500 to-transparent rounded-full ml-auto"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full ml-auto"></div>
            </div>
            <div className="text-4xl hover:scale-110 transition-transform duration-300">
              🏄
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default Services;
