

"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaShieldVirus, FaCalendarCheck, FaFlask } from "react-icons/fa"; // Icons for UV, Date, Liquid

const HomeHighlights = () => {
  const features = [
    {
      icon: <FaShieldVirus className="text-4xl text-[#E6B65C]" />,
      title: "UV Sanitized",
      desc: "Bacteria-free shells processed with advanced UV light for 100% safety."
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-[#C84C4C]" />,
      title: "Date Stamped",
      desc: "Every egg is stamped with its packing date so you know exactly how fresh it is."
    },
    {
      icon: <FaFlask className="text-4xl text-blue-500" />,
      title: "Liquid Gold",
      desc: "Pasteurized liquid eggs. No shells, no mess—just pure protein ready to cook."
    }
  ];

  return (
    <section className="w-full py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1F1F1F]">
            The Arush <span className="text-[#E6B65C]">Difference</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
            Science meets Nature
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#FBF7F2] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#E6B65C]/20 group"
            >
              <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#E6B65C] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View Details Link */}
        <div className="mt-10 text-center">
          <a href="/why-arush" className="inline-block text-sm font-bold text-[#1F1F1F] border-b-2 border-[#E6B65C] hover:text-[#E6B65C] transition-colors pb-1">
            See How We Do It &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomeHighlights;