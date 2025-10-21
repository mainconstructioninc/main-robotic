import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              MainCo
              <span className="block text-sm font-normal text-blue-400 mt-1">
                Construction Corporation
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future with robotic precision and innovative
              engineering solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Commercial Development</li>
              <li className="text-gray-400 text-sm">
                Industrial Infrastructure
              </li>
              <li className="text-gray-400 text-sm">Luxury Residential</li>
              <li className="text-gray-400 text-sm">Healthcare Facilities</li>
              <li className="text-gray-400 text-sm">Technology Centers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400 text-sm">asdsa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">asd</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">asdas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Main Robotic Construction Corporation.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
