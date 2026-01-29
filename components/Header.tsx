"use client";

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "LICENSE", href: "#license" },
    { name: "CUSTOMERS", href: "#customers" },
    { name: "ABOUT US", href: "#about" },
    { name: "PLACES", href: "#places" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name Section */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/images/logo/logo.png"
                alt="LankaHorizon Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              BandaraTours - SL
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 font-semibold text-sm xl:text-base transition-all duration-300 hover:text-blue-600 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 px-4 sm:px-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative text-gray-700 font-semibold text-base py-2 transition-all duration-300 hover:text-blue-600 group ${
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 transition-all duration-500 ${
                    isMobileMenuOpen ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : "0ms",
                  }}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
