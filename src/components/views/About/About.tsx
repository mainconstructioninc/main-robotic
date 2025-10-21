"use client";

import React from "react";
import { aboutData } from "@/mock";
import Image from "next/image";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white text-black py-24 mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-2xl"
          >
            Pioneering the future of construction through innovation,
            technology, and excellence.
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a"
              alt="Building cranes"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {aboutData.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-lg transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full min-h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYxMDEyMzI5fDA&ixlib=rb-4.1.0&q=85"
              alt="Our Team"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Main Robotic Construction Corporation, we are committed to
              revolutionizing the construction industry through advanced
              robotics, sustainable practices, and unwavering dedication to
              quality. Since 2015, we’ve been at the forefront of innovation,
              transforming how buildings are designed, constructed, and
              delivered.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to create exceptional structures that stand the
              test of time while minimizing environmental impact and maximizing
              efficiency through cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-blue-900 font-medium mb-2">
              Our Team
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
              Expert professionals dedicated to excellence in construction
              innovation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {[1, 2, 3].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl  transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-full h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzYxMDEyMzI5fDA&ixlib=rb-4.1.0&q=85"
                    alt="Team Member"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="pt-3 text-start">
                  <h3 className="text-lg font-bold text-gray-900">Mr. John</h3>
                  <p className="text-gray-600 text-sm">Managing Director</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
