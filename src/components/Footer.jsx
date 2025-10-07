import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Info */}
        <div className="text-center md:text-left space-y-3">
          <img src="/Guiddera-06.png" className="mx-auto md:mx-0 w-[180px]" alt="Guiddera Logo" />
          <p className="text-sm text-gray-400">© 2025 Guiddera. All Rights Reserved.</p>
          <p className="text-sm text-gray-400">info@guiddera.com | www.guiddera.com</p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
            <li>
              <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="/AboutUsPage" className="hover:text-orange-500 transition-colors duration-300">About Us</a>
            </li>
            <li>
              <a href="/ServicesPage" className="hover:text-orange-500 transition-colors duration-300">Services</a>
            </li>
            <li>
              <a href="/ContactUs" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        Made with <span className="text-red-500">❤️</span> by Guiddera Team
      </div>
    </footer>
  );
};

export default Footer;
