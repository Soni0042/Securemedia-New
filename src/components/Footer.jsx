// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/New Logo 1.png" // replace with your logo path
            alt="The Secure Media Logo"
            className="w-auto max-h-28 object-contain mb-4" // bigger but controlled
          />
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed text-center md:text-left">
            Empowering global businesses through performance marketing and strategic partnerships.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-bold text-lg text-gray-900 mb-4">Pages</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#E53935] transition">Home</a></li>
            <li><a href="/about-us" className="hover:text-[#E53935] transition">About Us</a></li>
            <li><a href="/contact-us" className="hover:text-[#E53935] transition">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-[#E53935] transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-bold text-lg text-gray-900 mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/Secureaffiliatemedia" className="p-2 bg-gray-100 rounded-full hover:bg-[#E53935] hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/secureaffiliatemedia/" className="p-2 bg-gray-100 rounded-full hover:bg-[#E53935] hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/the-secure-media/" className="p-2 bg-gray-100 rounded-full hover:bg-[#E53935] hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg text-gray-900 mb-4">Contact Info</h4>
          <p className="text-sm leading-relaxed">
            Plot No- 664, Udyog Vihar, Phase – 5<br />
            Gurugram, Haryana – 122016
          </p>
          <p className="mt-3 text-sm">📞 +91 85278 75483</p>
          <p className="mt-1 text-sm">📧 support@thesecuremedia.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        © 2025 Secure Affiliate Media Pvt. Ltd. | All Rights Reserved.
      </div>
    </footer>
  );
}
