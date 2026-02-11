"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Types define karte hain taaki error na aaye
interface SectionContent {
  heading: { en: React.ReactNode; hi: React.ReactNode };
  subHeading: { en: string; hi: string };
  story: { en: string; hi: string };
  btnText: { en: string; hi: string };
}

const AboutSection: React.FC = () => {
  // 1. State with Strict Typing
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  // 2. Data Object with TypeScript Interface
  const content: SectionContent = {
    heading: {
      en: <>Bringing Pure Nutrition to <br/><span className="text-[#E6B65C]">Your Doorstep.</span></>,
      hi: <>शुद्ध पोषण, <br/><span className="text-[#E6B65C]">सीधा आपके घर तक।</span></>
    },
    subHeading: {
        en: "OUR VISION",
        hi: "हमारा विजन"
    },
    story: {
      en: "We realized that finding clean, fresh eggs in the market was a struggle. Most were unhygienic or old. That’s why we started Arush — with a simple promise: to deliver UV-Sanitized, farm-fresh nutrition that you can trust blindly.",
      hi: "हमने देखा कि मार्केट में साफ और ताजे अंडे मिलना मुश्किल था। ज्यादातर अंडे अस्वच्छ या पुराने होते थे। इसीलिए हमने अरुष (Arush) की शुरुआत की — एक सरल वादे के साथ: आप तक UV-Sanitized और सीधे फार्म से ताज़ा पोषण पहुँचाना, जिस पर आप आँख बंद करके भरोसा कर सकें।"
    },
    btnText: {
      en: "Read Our Full Story",
      hi: "पूरी कहानी पढ़ें"
    }
  };

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: Founder Image with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative order-2 md:order-1"
          >
            <div className="relative w-full h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#FBF7F2]">
              <Image 
                src="/about/myphoto.png" 
                alt="Amit Vishwakarma"
                fill
                className="object-cover object-top hover:scale-110 transition-transform duration-[1.5s]"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-4 md:right-4 bg-[#E6B65C] text-[#1F1F1F] px-6 py-4 rounded-2xl shadow-xl z-10"
            >
              <p className="text-xs font-black uppercase tracking-widest text-center">
                Satna's Own <br/> Brand
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="md:w-1/2 space-y-8 order-1 md:order-2">
            
            {/* HEADER WITH LANGUAGE TOGGLE */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h4 className="text-[#E6B65C] font-bold uppercase tracking-[0.2em] text-sm">
                  {content.subHeading[lang]}
                </h4>

                {/* --- TOGGLE BUTTON --- */}
                <div className="flex items-center gap-1 bg-[#F2EFE9] rounded-full p-1 border border-gray-200 shadow-inner">
                    <button 
                        onClick={() => setLang('en')}
                        className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                            lang === 'en' 
                            ? 'bg-[#1F1F1F] text-white shadow-lg' 
                            : 'text-gray-400 hover:text-[#1F1F1F]'
                        }`}
                    >
                        EN
                    </button>
                    <button 
                        onClick={() => setLang('hi')}
                        className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                            lang === 'hi' 
                            ? 'bg-[#E6B65C] text-[#1F1F1F] shadow-lg' 
                            : 'text-gray-400 hover:text-[#1F1F1F]'
                        }`}
                    >
                        हिन्दी
                    </button>
                </div>
            </div>

            {/* DYNAMIC CONTENT AREA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-tight">
                  {content.heading[lang]}
                </h2>
                
                <p className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed font-light">
                  <span className="text-[#E6B65C] text-4xl leading-none mr-2 font-serif inline-block">“</span>
                  {content.story[lang]}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Button */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 pt-4"
            >
              <a href="/about" className="group flex items-center gap-3 text-[#1F1F1F] text-lg font-black hover:text-[#E6B65C] transition-colors uppercase tracking-wider">
                {content.btnText[lang]}
                <span className="bg-[#1F1F1F] group-hover:bg-[#E6B65C] text-white p-2 rounded-full transition-colors group-hover:rotate-45 duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;