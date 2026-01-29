"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Carousel images - Add your images to public/images/carousel/
  const slides = [
    {
      image: "/images/carousel/slide1.jpg",
      alt: "Beautiful destinations in Sri Lanka",
    },
    {
      image: "/images/carousel/slide2.jpg",
      alt: "Explore amazing places",
    },
    {
      image: "/images/carousel/slide3.jpg",
      alt: "Experience Sri Lankan culture",
    },
    {
      image: "/images/carousel/slide4.jpg",
      alt: "Adventure awaits",
    },
  ];

  // Animated texts
  const texts = [
    "Discover Paradise Island",
    "Experience Sri Lankan Culture",
    "Explore Ancient Wonders",
    "Adventure Awaits",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Auto-change text animation
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(textInterval);
  }, [texts.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full max-w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full bg-gray-900">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 w-full">
          <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center">
            {texts.map((text, index) => (
              <h1
                key={index}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white absolute transition-all duration-1000 ${
                  index === currentTextIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  textShadow: "3px 3px 10px rgba(0,0,0,0.9)",
                }}
              >
                {text}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hidden md:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hidden md:flex items-center justify-center"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 w-8 sm:w-10"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
