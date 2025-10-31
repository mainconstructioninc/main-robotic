"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { features, servicesData } from "@/mock";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative h-screen bg-blue-50 flex flex-col md:flex-row items-center justify-center overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse-slow z-10"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-blue-300 rounded-xl opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-25 blur-3xl animate-pulse-slow"></div>

        <div className="relative h-screen max-w-7xl flex flex-col md:flex-row items-center justify-center z-10">
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.h1
              className="text-xl md:text-3xl font-bold text-[#0A1A4F] leading-tight"
              variants={fadeUp}
              custom={0.1}
            >
              Building the Future
              <br />
              <span className="text-[#1C398E] text-4xl md:text-6xl font-semibold">
                With Robotic Precision
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg md:text-xl mt-6 mb-8"
              variants={fadeUp}
              custom={0.3}
            >
              Leading innovation in construction and infrastructure development
              through advanced robotics and modern engineering solutions.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.5}>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-[#1C398E] hover:bg-[#142b73] text-white px-8 py-6 text-lg rounded-xl"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 md:mt-0 md:ml-12 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/hero-robotic.png"
              width={480}
              height={480}
              alt="Main Robotic Construction Corporation"
              className="w-[680px] max-w-full hidden lg:block"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose Main Robotic
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge robotic technology ensures unmatched speed,
              consistency, and a 99.9% precision rate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15}
                >
                  <div className="bg-blue-900 p-3 rounded-lg mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Service
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions across multiple sectors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden mt-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            {servicesData.slice(0, 6).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="bg-white border border-gray-200 p-6 flex flex-col hover:shadow-lg transition-all"
                  variants={fadeUp}
                  custom={i * 0.1}
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg border border-gray-200">
                      <Icon size={28} className="text-blue-900" />
                    </div>
                  </div>
                  <h3 className="text-blue-900 font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <div className="relative col-span-1 row-span-2 rounded-tr-[40px] rounded-bl-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                alt="Main construction site"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-tr-[40px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a"
                alt="Building cranes"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-tl-[40px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1759503452557-6cddb2a7f4a1"
                alt="Workers on site"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            custom={0.2}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Pioneering Construction Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Main Robotic Construction Corporation stands at the forefront of
              modern construction, combining traditional expertise with
              cutting-edge robotics and AI technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive services span commercial development, industrial
              infrastructure, luxury residential projects, and specialized
              solutions across multiple sectors.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
