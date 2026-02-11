"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEgg, FaTint, FaWeightHanging, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; 

const glimpseData = [
  { 
    id: 1, 
    title: "Classic & Gold Eggs", 
    tagline: "Farm fresh, UV-sanitized, and date-stamped.",
    badge: "Most Popular", 
    image: "/hero_page/Arush_egg_glimps.png",
    // Prefix use karein: brand-gold
    icon: <FaEgg className="text-[#E6B65C]" />, 
    color: "bg-[blue]"
  },
  { 
    id: 2, 
    title: "Liquid Egg Solutions", 
    tagline: "Pasteurized Whole Egg & Pure Albumen.",
    badge: "Bestseller", 
    image: "/hero_page/Arush_egg_liquid.png",
    icon: <FaTint className="text-[#E6B65C]" />,
    color: "bg-yellow-500"
  },
  { 
    id: 3, 
    title: "Animal Nutrition", 
    tagline: "High-calcium Shakti-Feed for your livestock.",
    badge: "Farmer's Choice", 
    image: "/hero_page/Arush_calcium_glimps.png",
    icon: <FaWeightHanging className="text-[#E6B65C]" />,
    color: "bg-[green]"
  },
];

export const ProductGlimpse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % glimpseData.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section className="w-full py-24 bg-[#FBF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="text-center w-full">
          {/* font-black (weight) aur text-brand-black (color) use karein */}
          <h2 className="text-5xl font-bold font-heading text-[#1F1F1F] tracking-tighter leading-none mb-4">
            Our <span className="text-[#E6B65C]">Range.</span>
            <div className="w-16 h-1.5 bg-[#E6B65C] mx-auto mt-2 rounded-full"></div>
          </h2>
          <p className="text-[#6B6B6B] font-medium max-w-md mx-auto uppercase text-xs tracking-widest">
            A sneak peek into our farm-to-fork ecosystem. Clean, safe, and honest nutrition.
          </p>
        </div>
      </div>

      <div className="relative h-[450px] flex items-center justify-center">
        <div 
          className="flex items-center justify-center w-full max-w-5xl px-4 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout">
            {glimpseData.map((item, index) => {
              const isCenter = index === currentIndex;
              const isLeft = index === (currentIndex - 1 + glimpseData.length) % glimpseData.length;
              const isRight = index === (currentIndex + 1) % glimpseData.length;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1.1 : 0.8,
                    x: isCenter ? 0 : isLeft ? -320 : 320,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className={`absolute w-[300px] md:w-[380px] bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden h-[380px]`}
                >
                  <div className="relative h-44">
                    <span className={`absolute top-4 left-4 z-10 ${item.color} text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest`}>
                      {item.badge}
                    </span>
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>

                  <div className="p-8 flex flex-col justify-center flex-grow text-center">
                    <div className="flex justify-center mb-3 text-2xl">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-[#6B6B6B] text-xs font-semibold leading-relaxed px-4">
                      {item.tagline}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 mt-12">
        {/* Simplified Pagination */}
        <div className="flex justify-center gap-2">
          {glimpseData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx ? "w-12 bg-[#E6B65C]" : "w-4 bg-[#1F1F1F]/20"
              }`}
            />
          ))}
        </div>

        {/* EXPLORE Button - Fixed with brand classes */}
        <Link 
          href="/shop" 
          className="group flex items-center justify-center gap-3 bg-[#1F1F1F] text-white px-8 py-4 rounded-full font-black text-sm w-[250px] hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all duration-500 shadow-xl"
        >
          EXPLORE FULL SHOP <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
};