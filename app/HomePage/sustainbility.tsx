"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaRecycle, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// TypeScript Interfaces for safety
interface Step {
  id: number;
  title: { en: string; hi: string };
  desc: { en: string; hi: string };
}

interface SustainContent {
  badge: { en: string; hi: string };
  heading: { 
    en: { part1: string; part2: string }; 
    hi: { part1: string; part2: string };
  };
  description: { en: string; hi: string };
  steps: Step[];
  cta: { en: string; hi: string };
  zeroWasteBadge: { en: string; hi: string };
}

export default function SustainabilitySection() {
  // 1. Language State
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  // 2. Content Data (English & Hindi)
  const content: SustainContent = {
    badge: {
      en: "OUR GREEN PROMISE",
      hi: "हमारा हरित संकल्प"
    },
    heading: {
      en: { part1: "Good for You.", part2: "Good for Earth." },
      hi: { part1: "आपके लिए श्रेष्ठ।", part2: "धरती के लिए बेहतर।" }
    },
    description: {
      en: "At Arush, we don't just sell eggs; we respect nature. Our process is strictly Zero-Waste. Instead of discarding eggshells, we refine them into high-quality Calcium Powder, ensuring nothing goes to waste.",
      hi: "अरुष (Arush) में हम सिर्फ अंडे नहीं बेचते; हम प्रकृति का सम्मान करते हैं। हमारा प्रोसेस पूरी तरह से Zero-Waste है। हम अंडे के छिलकों को फेंकने के बजाय उन्हें हाई-क्वालिटी कैल्शियम पाउडर में बदलते हैं, ताकि कुछ भी व्यर्थ न हो।"
    },
    steps: [
      {
        id: 1,
        title: { en: "Collection & Cleaning", hi: "संग्रह और सफाई" },
        desc: { 
          en: "We collect shells post-sanitization to ensure maximum hygiene.", 
          hi: "हम स्वच्छता सुनिश्चित करने के लिए सैनिटाइजेशन के बाद छिलके इकट्ठा करते हैं।" 
        }
      },
      {
        id: 2,
        title: { en: "Mineral Processing", hi: "मिनरल प्रोसेसिंग" },
        desc: { 
          en: "Shells are processed into fine grain powder, a natural source of calcium.", 
          hi: "छिलकों को बारीक पाउडर में संसाधित किया जाता है, जो कैल्शियम का प्राकृतिक स्रोत है।" 
        }
      },
      {
        id: 3,
        title: { en: "Farmer Empowerment", hi: "किसान सशक्तिकरण" },
        desc: { 
          en: "This mineral-rich feed goes back to farmers for livestock nutrition.", 
          hi: "यह खनिज युक्त पाउडर पशु पोषण के लिए वापस किसानों तक पहुँचाया जाता है।" 
        }
      }
    ],
    cta: {
      en: "LEARN ABOUT SHAKTI-FEED",
      hi: "शक्ति-फीड के बारे में जानें"
    },
    zeroWasteBadge: {
        en: "100% Zero Waste Process",
        hi: "100% जीरो वेस्ट प्रोसेस"
    }
  };

  return (
    <section className="w-full py-8 bg-white text-[#1F1F1F] font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#FBF7F2]">
              <Image 
                src="/hero_page/pulvizer_image.png" 
                alt="Arush Sustainability Process"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A7D44]/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-[#3A7D44] text-white p-6 rounded-3xl shadow-xl z-10 hidden md:block"
            >
              <FaRecycle className="text-3xl mb-2" />
              <p className="font-black text-sm leading-tight uppercase tracking-tighter">
                  {lang === 'en' ? (
                    <>100% Zero <br/> Waste Process</>
                  ) : (
                    <>100% जीरो <br/> वेस्ट प्रोसेस</>
                  )}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col">
            {/* HEADER WITH TOGGLE */}
            <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2 bg-[#3A7D44]/10 text-[#3A7D44] px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase">
                  <FaLeaf className="animate-pulse" /> {content.badge[lang]}
                </div>

                {/* LANGUAGE TOGGLE */}
                <div className="flex items-center gap-1 bg-[#F2EFE9] rounded-full p-1 border border-gray-200">
                    <button 
                        onClick={() => setLang('en')}
                        className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all duration-300 ${
                            lang === 'en' ? 'bg-[#3A7D44] text-white shadow-md' : 'text-gray-400 hover:text-[#3A7D44]'
                        }`}
                    >
                        EN
                    </button>
                    <button 
                        onClick={() => setLang('hi')}
                        className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all duration-300 ${
                            lang === 'hi' ? 'bg-[#3A7D44] text-white shadow-md' : 'text-gray-400 hover:text-[#3A7D44]'
                        }`}
                    >
                        हिन्दी
                    </button>
                </div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-5xl md:text-7xl font-black text-[#1F1F1F] leading-[0.9] mb-8 tracking-tighter">
                  {content.heading[lang].part1}<br />
                  <span className="text-[#3A7D44] italic font-serif lowercase">{content.heading[lang].part2}</span>
                </h2>

                <p className="text-[#6B6B6B] text-lg md:text-xl mb-10 leading-relaxed font-medium">
                   {content.description[lang]}
                </p>

                {/* Process Steps */}
                <div className="grid grid-cols-1 gap-6 mb-12">
                  {content.steps.map((step) => (
                      <div key={step.id} className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#3A7D44]/10 group-hover:bg-[#3A7D44] flex items-center justify-center text-[#3A7D44] group-hover:text-white shrink-0 transition-colors duration-300 shadow-sm font-black text-lg">
                          {step.id}
                        </div>
                        <div>
                          <h4 className="font-black text-[#1F1F1F] uppercase text-sm tracking-wide mb-1 transition-colors group-hover:text-[#3A7D44]">
                            {step.title[lang]}
                          </h4>
                          <p className="text-[#6B6B6B] text-sm font-semibold leading-relaxed">
                            {step.desc[lang]}
                          </p>
                        </div>
                      </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 bg-[#1F1F1F] text-[#E6B65C] px-10 py-5 rounded-2xl font-black text-sm hover:bg-[#3A7D44] hover:text-white transition-all shadow-xl group w-fit uppercase tracking-widest"
            >
              {content.cta[lang]} <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}