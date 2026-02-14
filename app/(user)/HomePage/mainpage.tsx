"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TypeScript Interface for Content
interface HomeContent {
  tagline: { en: string; hi: string };
  heading: { 
    en: { line1: string; line2: string }; 
    hi: { line1: string; line2: string };
  };
  description: { en: string; hi: string };
  cta: { en: string; hi: string };
  stampLabel: { en: string; hi: string };
}

export default function HomePageMain() {
  // 1. States with Typing
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [date, setDate] = useState<string>('LOADING');

  // 2. Date Formatting Effect
  useEffect(() => {
    const updateStamp = () => {
      const now = new Date();
      // English-US format keeps the stamp looking professional/international
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
      const formatted = now.toLocaleDateString('en-US', options);
      setDate(formatted);
    };
    updateStamp();
  }, []);

  // 3. Content Data Object
  const content: HomeContent = {
    tagline: {
      en: "Fresh by Nature. Clean by Science.",
      hi: "प्रकृति से ताज़ा। विज्ञान से साफ़।"
    },
    heading: {
      en: { line1: "Honest Eggs.", line2: "Clean Nutrition." },
      hi: { line1: "सच्चाई भरे अंडे।", line2: "शुद्ध पोषण।" }
    },
    description: {
      en: "24-hour fresh, UV-sanitized, date-stamped eggs delivered straight from farm to your doorstep.",
      hi: "24-घंटे के अंदर ताज़ा, UV-sanitized और डेट-स्टैम्प के साथ सीधे फार्म से आपके घर तक।"
    },
    cta: {
      en: "Order Fresh Eggs",
      hi: "अभी ऑर्डर करें"
    },
    stampLabel: {
      en: "Pack Date",
      hi: "पैकिंग तिथि"
    }
  };

  const t = content;

  return (
    <section className="w-[98%] mt-2 mx-auto bg-[#FBF7F2] rounded-3xl relative overflow-hidden">
      <div className="relative grid md:grid-cols-2 grid-cols-1 lg:p-6 hover:shadow-2xl transition-all duration-700">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 md:p-12 z-10 flex flex-col justify-center"
        >
          {/* TOP BAR: Tagline + Toggle */}
          <div className="flex items-center justify-between mb-8">
            <AnimatePresence mode="wait">
              <motion.span 
                key={lang}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="font-sans text-[#3A7D44] text-xs md:text-sm font-black uppercase tracking-[0.2em]"
              >
                {t.tagline[lang]}
              </motion.span>
            </AnimatePresence>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
                <button 
                    onClick={() => setLang('en')}
                    className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all duration-300 ${
                        lang === 'en' ? 'bg-[#1F1F1F] text-white shadow-md' : 'text-gray-400 hover:text-[#1F1F1F]'
                    }`}
                >
                    EN
                </button>
                <button 
                    onClick={() => setLang('hi')}
                    className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all duration-300 ${
                        lang === 'hi' ? 'bg-[#E6B65C] text-[#1F1F1F] shadow-md' : 'text-gray-400 hover:text-[#E6B65C]'
                    }`}
                >
                    हिन्दी
                </button>
            </div>
          </div>

          {/* Main Heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className={`font-heading text-[#1F1F1F] text-5xl lg:text-7xl font-bold mb-6 
  ${lang === 'hi' ? 'leading-[1.4] py-2' : 'leading-[1.1]'}`}>
  {t.heading[lang].line1} <br />
  <span className="text-[#E6B65C]">{t.heading[lang].line2}</span>
</h1>

              <p className="font-sans text-[#6B6B6B] text-lg md:text-2xl leading-relaxed max-w-lg mb-10 font-medium">
                {t.description[lang]}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit bg-[#1F1F1F] text-[#E6B65C] text-lg font-bold px-10 py-5 rounded-2xl hover:bg-[#2a2a2a] transition-all shadow-xl flex items-center gap-3 group"
          >
            {t.cta[lang]}
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>

        {/* Right Side: Image Section */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative md:h-full h-[400px] p-4"
        >
          <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image 
              src="/hero_page/hero_image.jpg" 
              className="object-cover hover:scale-105 transition-transform duration-[2s]" 
              fill 
              alt="Arush Fresh Eggs" 
              priority 
            />
            {/* Soft Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF7F2]/20 to-transparent" />
          </div>
        </motion.div>

        {/* --- FLOATING STAMP --- */}
        <motion.div 
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="absolute lg:left-[46%] md:left-[42%] left-[65%] lg:top-[18%] md:top-[15%] top-[46%] z-30"
        >
          <div className="relative group cursor-pointer">
            {/* Outer Glow Effect */}
            <div className="absolute inset-0 bg-[#5D7A97] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            
            {/* Main Stamp Circle */}
            <div className="md:w-40 md:h-40 w-32 h-32 rounded-full border-4 border-double border-[#5D7A97] 
                            flex items-center justify-center bg-white 
                            shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:rotate-12">

              {/* Inner Content */}
              <div className="md:w-[130px] md:h-[130px] w-[100px] h-[100px] rounded-full border border-[#5D7A97]/30 
                              flex flex-col items-center justify-center text-center">
                
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[9px] md:text-[11px] font-black text-[#5D7A97] uppercase tracking-widest"
                  >
                    {t.stampLabel[lang]}
                  </motion.span>
                </AnimatePresence>

                <span className="font-mono md:text-3xl text-xl font-black text-[#1F1F1F] mt-1">
                  {date}
                </span>

                <div className="mt-1 flex gap-1">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="w-1 h-1 bg-[#5D7A97] rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}