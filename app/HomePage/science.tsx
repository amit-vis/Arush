"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMicroscope, FaStamp, FaLightbulb, FaCheckCircle, FaCalendarCheck } from "react-icons/fa";

export default function ScienceSection() {
  return (
    <section className="w-full py-28 bg-[#F2EFE9] text-[#1F1F1F] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black text-[#1F1F1F] tracking-tighter leading-none mb-4">
            We Don't <span className="text-[#E6B65C] italic">Hide Anything.</span>
          </h2>
          <p className="text-[#6B6B6B] font-medium max-w-2xl mx-auto uppercase text-xs tracking-widest">
            Transparency is at the core of Arush. See how science ensures every egg is perfectly safe and fresh.
          </p>
          <div className="w-24 h-1.5 bg-[#E6B65C] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* UV Cleaning - Zig-Zag Item 1 (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10"
          >
            <Image
              src="/hero_page/uv_sanetize egg.png" // Replace with your UV cleaning image
              alt="UV Sanitization Process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
              <span className="text-3xl font-black tracking-tight">UV Sanitization</span>
            </div>
            <div className="absolute top-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <FaLightbulb className="text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-2 bg-[#3A7D44]/10 text-[#3A7D44] px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-4">
              <FaMicroscope /> SCIENTIFICALLY CLEAN
            </span>
            <h3 className="text-4xl font-black text-[#1F1F1F] mb-6 leading-tight">
              Bacteria-Free Shells with <span className="text-blue-600">Advanced UV</span> Light.
            </h3>
            <p className="text-[#6B6B6B] text-lg mb-6 leading-relaxed">
              Every Arush egg undergoes a rigorous **UV sanitization process** that eliminates surface bacteria and pathogens. This ensures a cleaner, safer egg, without the use of harsh chemicals or washes.
            </p>
            <ul className="space-y-3 text-[#1F1F1F] font-medium">
              <li className="flex items-center gap-3"><FaCheckCircle className="text-[#E6B65C]" /> Removes 99.9% surface bacteria</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-[#E6B65C]" /> No chemicals, only light energy</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-[#E6B65C]" /> Extends shelf life naturally</li>
            </ul>
          </motion.div>
        </div>

        {/* Date Stamping - Zig-Zag Item 2 (Image Right, Text Left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-left md:order-2" // Order 2 for text on left
          >
            <span className="inline-flex items-center gap-2 bg-[#C84C4C]/10 text-[#C84C4C] px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-4">
              <FaStamp /> FRESHNESS GUARANTEED
            </span>
            <h3 className="text-4xl font-black text-[#1F1F1F] mb-6 leading-tight">
              Always Know the <span className="text-[#C84C4C]">Exact Age</span> of Your Egg.
            </h3>
            <p className="text-[#6B6B6B] text-lg mb-6 leading-relaxed">
              Unlike ordinary eggs, every single Arush egg is **individually date-stamped** with its packing date. This commitment to transparency empowers you to make informed choices and ensures you always get the freshest possible product.
            </p>
            <ul className="space-y-3 text-[#1F1F1F] font-medium">
              <li className="flex items-center gap-3"><FaCheckCircle className="text-[#E6B65C]" /> Direct from farm to stamp</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-[#E6B65C]" /> No guessing, just confidence</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-[#E6B65C]" /> Peak freshness for every meal</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-red-500/10 md:order-1" // Order 1 for image on right
          >
            <Image
              src="/hero_page/datedEgg.png" // Replace with your date stamping image
              alt="Date Stamping Process"
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#C84C4C]/60 to-transparent flex items-end p-8 text-white">
              <span className="text-3xl font-black tracking-tight">Date Stamping</span>
            </div>
            <div className="absolute top-8 left-8 bg-[#C84C4C] text-white p-3 rounded-full shadow-lg">
              <FaCalendarCheck className="text-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}