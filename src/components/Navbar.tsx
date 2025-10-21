"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {Button} from '@heroui/button'; 

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl">
              <span
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
              >
                MRCC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors duration-300 ${
                  pathname === link.path
                    ? isScrolled
                      ? "text-blue-900"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "bg-blue-900 hover:bg-blue-800 text-white"
                    : "bg-white hover:bg-gray-100 text-blue-900"
                }`}
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-blue-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  pathname === link.path
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
