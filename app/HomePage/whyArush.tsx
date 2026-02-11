"use client";
import { FaShieldAlt, FaBacteria, FaCalendar, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBacteria className="text-brand-red text-2xl" />,
    title: "UV Sanitized",
    desc: "100% Bacteria Free",
    bgColor: "bg-red-50",
  },
  {
    icon: <FaCalendar className="text-brand-#1F1F1F text-2xl" />,
    title: "Date Stamped",
    desc: "Know your egg's age",
    bgColor: "bg-gray-100",
  },
  {
    icon: <FaTruck className="text-brand-gold text-2xl" />,
    title: "24hr Fresh",
    desc: "Farm to Doorstep",
    bgColor: "bg-yellow-50",
  },
  {
    icon: <FaShieldAlt className="text-brand-green text-2xl" />,
    title: "Antibiotic Free",
    desc: "Pure & Natural Nutrition",
    bgColor: "bg-green-50",
  },
];

export const WhyArush = () => {
  return (
    <section className="w-[98%] mx-auto py-12 px-4">
      {/* Optional: Section Title */}
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl font-bold text-[#1F1F1F]">Why Choose <span className="text-[#E6B65C]">Arush?</span></h2>
        <div className="w-16 h-1.5 bg-[#E6B65C] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Icon Container */}
            <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-bold text-[#1F1F1F] mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-[#6B6B6B] font-medium">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};