"use client";

import { FaPhone, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Bnadara Tours
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted travel partner for exploring the wonders of Sri Lanka. Experience authentic adventures with 15+ years of excellence.
            </p>
            <div className="flex space-x-3 justify-center md:justify-start">
              <a
                href="https://facebook.com/KalumBandara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://wa.me/94777469391"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <FaWhatsapp className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#license" className="text-gray-400 hover:text-blue-400 transition-colors">
                  License
                </a>
              </li>
              <li>
                <a href="#customers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#places" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Places
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Airport Pickup</li>
              <li>All Island Guiding</li>
              <li>Hotel Reservation</li>
              <li>Tour Organizing</li>
              <li>Wildlife Safari</li>
              <li>Cultural Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+94777469391" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +94 77 746 9391
                </a>
              </li>
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400 mt-1 flex-shrink-0" />
                <a href="mailto:kalumns5@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors break-all">
                  kalumns5@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} StormWolfDev. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-2" /> for travelers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
