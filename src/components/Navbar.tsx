import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUsPage" },
    { name: "Services", path: "/ServicesPage" },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/Guiddera-01.png" className='w-[60px]'/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link, idx) => {
            const isActive = router.pathname === link.path;
            return (
              <li key={idx} className="relative">
                <Link
                  href={link.path}
                  className={`
                    transition-colors duration-300
                    ${isActive ? 'text-orange-500' : 'hover:text-orange-500'}
                  `}
                >
                  {link.name}
                </Link>
                {/* Underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 transition-all duration-300
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    origin-left
                  `}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 py-4 px-6 font-medium text-gray-700">
            {navLinks.map((link, idx) => {
              const isActive = router.pathname === link.path;
              return (
                <li key={idx} className="relative">
                  <Link
                    href={link.path}
                    className={`
                      transition-colors duration-300
                      ${isActive ? 'text-orange-500' : 'hover:text-orange-500'}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`
                      absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 transition-all duration-300
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                      origin-left
                    `}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
