"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@heroui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
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
    <AnimatePresence>
      <motion.nav
        key={isScrolled ? "fixed" : "absolute"}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`top-0 left-0 right-0 z-50 ${
          isScrolled ? "fixed bg-white shadow-md" : "absolute bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logomain.png"
                alt="Logo"
                width={50}
                height={50}
                className="w-16 object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${
                    pathname === link.path
                      ? "text-blue-900 font-semibold"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-900"
                      : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="rounded-xl px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>

            <button
              aria-label="Toggle Menu"
              className={`md:hidden transition-colors duration-300 cursor-pointer ${
                isScrolled ? "text-blue-900" : "text-blue-900"
              }`}
              onClick={() => setIsMobileMenuOpen((p) => !p)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden bg-white shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                      pathname === link.path
                        ? "bg-blue-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full mt-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
