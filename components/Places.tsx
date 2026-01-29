"use client";

import { useState } from "react";
import Image from "next/image";

const Places = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const places = [
    {
      name: "Galle Fort",
      image: "/images/places/place1.jpg",
    },
    {
      name: "Sigiriya",
      image: "/images/places/place2.jpg",
    },
    {
      name: "Kandy",
      image: "/images/places/place3.jpg",
    },
    {
      name: "Yala National Park",
      image: "/images/places/place4.jpg",
    },
    {
      name: "Mirissa Beach",
      image: "/images/places/place5.jpg",
    },
    {
      name: "Ella",
      image: "/images/places/place6.jpg",
    },
  ];

  const handleImageClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 1000);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              Few Places We Visited
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the beautiful destinations across Sri Lanka
          </p>
        </div>

        {/* Map with Images Layout */}
        <div className="relative max-w-7xl mx-auto flex items-center justify-center">
          {/* Left Side Images */}
          <div className="hidden lg:flex flex-col space-y-8 mr-8">
            {places.slice(0, 3).map((place, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="relative w-64 h-48 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-bold">{place.name}</h3>
                  </div>
                  {/* Decorative Corners */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-500" />
                </div>
                {/* Radar Effect */}
                {clickedIndex === index && (
                  <>
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-xl animate-ping" style={{ animationDuration: '1s' }} />
                    <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl animate-ping" style={{ animationDuration: '1s', animationDelay: '0.1s' }} />
                    <div className="absolute inset-0 border-4 border-green-500 rounded-xl animate-ping" style={{ animationDuration: '1s', animationDelay: '0.2s' }} />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Center Map */}
          <div className="relative w-full lg:w-auto flex-shrink-0">
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
              <img
                src="/images/map/srilanka-map.jpg"
                alt="Sri Lanka Map"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side Images */}
          <div className="hidden lg:flex flex-col space-y-8 ml-8">
            {places.slice(3, 6).map((place, index) => (
              <div
                key={index + 3}
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(index + 3)}
              >
                <div className="relative w-64 h-48 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-bold">{place.name}</h3>
                  </div>
                  {/* Decorative Corners */}
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-green-500" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500" />
                </div>
                {/* Radar Effect */}
                {clickedIndex === index + 3 && (
                  <>
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-xl animate-ping" style={{ animationDuration: '1s' }} />
                    <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl animate-ping" style={{ animationDuration: '1s', animationDelay: '0.1s' }} />
                    <div className="absolute inset-0 border-4 border-green-500 rounded-xl animate-ping" style={{ animationDuration: '1s', animationDelay: '0.2s' }} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {places.map((place, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white text-sm font-bold">{place.name}</h3>
                </div>
              </div>
              {/* Radar Effect */}
              {clickedIndex === index && (
                <>
                  <div className="absolute inset-0 border-4 border-blue-500 rounded-xl animate-ping" style={{ animationDuration: '1s' }} />
                  <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl animate-ping" style={{ animationDuration: '1s', animationDelay: '0.1s' }} />
                  <div className="absolute inset-0 border-4 border-green-500 rounded-xl animate-ping" style={{ animationDuration: '1s', animationDelay: '0.2s' }} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default Places;
