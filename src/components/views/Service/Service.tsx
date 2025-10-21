"use client";

import { motion } from "framer-motion";
import React from "react";
import { servicesData } from "@/mock";
import { CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

type ColorType = "red" | "blue" | "yellow";
const colorCycle: ColorType[] = ["red", "blue", "yellow"];

const colorMap: Record<ColorType, string> = {
  red: "text-red-500 bg-red-50",
  blue: "text-blue-500 bg-blue-50",
  yellow: "text-yellow-500 bg-yellow-50",
};

const bulletColor: Record<ColorType, string> = {
  red: "text-red-500",
  blue: "text-blue-500",
  yellow: "text-yellow-500",
};

const Service: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="absolute top-80 left-0 w-[400px] h-[300px] bg-gradient-to-br from-[#1C398E] via-[#6C5DD3] to-transparent rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <div className="relative z-10">
        <div className=" max-w-4xl mx-auto text-center pt-10 pb-20">
          <motion.h4
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-blue-800 font-semibold uppercase tracking-wide mb-2"
          >
            Our Services
          </motion.h4>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug"
          >
            Comprehensive construction solutions powered by advanced robotics
            and innovative technology
          </motion.h2>
        </div>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.0 }}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const color = colorCycle[index % colorCycle.length];

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                custom={index * 0.1}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorMap[color]}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className={bulletColor[color]} />
                    <span>Advanced robotic automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className={bulletColor[color]} />
                    <span>Quality assurance and testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className={bulletColor[color]} />
                    <span>Sustainable construction practices</span>
                  </li>
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
