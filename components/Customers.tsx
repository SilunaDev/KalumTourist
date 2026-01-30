"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const customers = [
    {
      name: "John & Sarah Miller",
      country: "United States",
      image: "/images/customers/customer1.jpeg",
      review: "Amazing experience! The tour was perfectly organized and our guide was exceptional. Highly recommend!",
      rating: 5,
    },
    {
      name: "David Thompson",
      country: "United Kingdom",
      review: "Professional service from start to finish. The wildlife safari was the highlight of our trip!",
      image: "/images/customers/customer2.jpeg",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      review: "Unforgettable journey through Sri Lanka. Every detail was taken care of perfectly.",
      image: "/images/customers/customer3.jpeg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      country: "Australia",
      review: "Best travel experience ever! The cultural tours and food experiences were outstanding.",
      image: "/images/customers/customer4.jpeg",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      country: "France",
      review: "Exceptional hospitality and service. Will definitely come back and recommend to friends!",
      image: "/images/customers/customer5.jpeg",
      rating: 5,
    },
    {
      name: "James Wilson",
      country: "Canada",
      review: "The hotel arrangements and transport were top-notch. Professional and reliable service!",
      image: "/images/customers/customer6.jpeg",
      rating: 5,
    },
  ];

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

  // Auto-rotate carousel
  useEffect(() => {
    if (!isRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isRotating, customers.length]);

  const handleNext = () => {
    setIsRotating(false);
    setCurrentIndex((prev) => (prev + 1) % customers.length);
    setTimeout(() => setIsRotating(true), 5000);
  };

  const handlePrev = () => {
    setIsRotating(false);
    setCurrentIndex((prev) => (prev - 1 + customers.length) % customers.length);
    setTimeout(() => setIsRotating(true), 5000);
  };

  const getCardStyle = (index: number, isMobile: boolean = false) => {
    const diff = (index - currentIndex + customers.length) % customers.length;
    
    // On mobile, use simple positioning
    if (isMobile) {
      if (diff !== 0) {
        return {
          transform: 'scale(0.8)',
          opacity: 0,
          zIndex: 0,
          willChange: 'transform, opacity',
          pointerEvents: 'none' as const,
          display: 'none',
        };
      }
      return {
        transform: 'scale(1)',
        opacity: 1,
        zIndex: 10,
        willChange: 'transform, opacity',
      };
    }
    
    // Desktop 3D calculations
    const angle = (diff * 60) - 30;
    const translateX = angle * 8;
    const translateZ = diff === 0 ? 0 : -200;
    
    const scale = diff === 0 ? 1 : 0.75;
    const opacity = diff === 0 ? 1 : diff <= 2 ? 0.5 : 0;
    const zIndex = diff === 0 ? 10 : 5;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      willChange: 'transform, opacity',
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              Our Happy Customers
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by travelers from around the world
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[550px] sm:h-[600px] flex items-center justify-center overflow-visible px-4 sm:px-0">
          <div className="relative w-full h-full max-w-sm sm:max-w-none mx-auto" style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", perspective: "1000px" }}>
            {customers.map((customer, index) => {
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const style = getCardStyle(index, isMobile);
              
              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                  style={{
                    ...style,
                    transformStyle: isMobile ? "flat" : "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                {/* Customer Card */}
                <div className="w-[280px] sm:w-80 lg:w-96 bg-white rounded-3xl shadow-2xl p-5 sm:p-8 backdrop-blur-lg border border-gray-100">
                  {/* Customer Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-yellow-500 to-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-1 bg-white rounded-full overflow-hidden">
                      <Image
                        src={customer.image}
                        alt={customer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Country Flag Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-600 to-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      🌍
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {customer.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{customer.country}</p>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(customer.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">⭐</span>
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <div className="relative">
                    <div className="text-4xl text-blue-200 absolute -top-2 -left-2">"</div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic px-4">
                      {customer.review}
                    </p>
                    <div className="text-4xl text-green-200 absolute -bottom-6 -right-2">"</div>
                  </div>

                  {/* Decorative Bottom Line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 rounded-full"></div>
                </div>
              </div>
            );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous customer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next customer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {customers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsRotating(false);
                  setCurrentIndex(index);
                  setTimeout(() => setIsRotating(true), 5000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-green-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to customer ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default Customers;
