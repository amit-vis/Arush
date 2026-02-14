"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaMicroscope, FaStamp, FaFlask, FaCheckCircle, FaLightbulb, FaCalendarCheck } from "react-icons/fa";

// Interface for type safety
interface WhyArushContent {
  hero: { title: string; subtitle: React.ReactNode };
  myth: { title: string; desc: string };
  features: {
    title: string;
    sub: string;
    desc: string;
    points: string[];
  }[];
  closing: { title: string; desc: string; btn: string };
}

const WhyArushClient: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const content: Record<'en' | 'hi', WhyArushContent> = {
    en: {
      hero: {
        title: "The Science of Safety",
        subtitle: <>We Don't Just Sell Eggs. <br/> <span className="text-[#E6B65C]">We Engineer Trust.</span></>
      },
      myth: {
        title: "The 'Fresh' Egg Myth",
        desc: "Most eggs in the market travel for days in unhygienic trucks. They are often covered in invisible bacteria like Salmonella. At Arush, we realized that 'farm fresh' wasn't enough. We needed to be clinically clean."
      },
      features: [
        {
          sub: "Step 01: Purification",
          title: "Bacteria-Free Shells",
          desc: "Before packaging, every egg passes through our Advanced UV Chamber. This light energy destroys 99.9% of surface bacteria without affecting the egg inside. No chemicals, just pure light.",
          points: ["Safe to handle for kids", "Extended natural shelf life"]
        },
        {
          sub: "Step 02: Verification",
          title: "No More Guessing Games",
          desc: "We don't just say it's fresh; we prove it. Every Arush egg is stamped with its packing date. You deserve to know exactly when your food was harvested, not when it reached the shop.",
          points: ["100% Transparency", "Eat at peak nutrition"]
        },
        {
          sub: "Innovation",
          title: "Pasteurized Liquid Gold",
          desc: "For athletes and chefs, we crack the eggs, remove the shells, and pasteurize the liquid. This gentle heat treatment kills bacteria while keeping the protein intact.",
          points: ["Safe for raw protein shakes", "Zero waste, zero mess"]
        }
      ],
      closing: {
        title: "Ready to Taste the Difference?",
        desc: "Join hundreds of families in Satna who have switched to the safer, cleaner choice.",
        btn: "Order Fresh Now"
      }
    },
    hi: {
      hero: {
        title: "सुरक्षा का विज्ञान",
        subtitle: <>हम सिर्फ अंडे नहीं बेचते। <br/> <span className="text-[#E6B65C]">हम भरोसा बनाते हैं।</span></>
      },
      myth: {
        title: "'ताज़े' अंडों का भ्रम",
        desc: "बाजार में मिलने वाले ज्यादातर अंडे कई दिनों तक गंदे ट्रकों में सफर करते हैं। उन पर साल्मोनेला जैसे अदृश्य बैक्टीरिया होते हैं। अरुष में हमने महसूस किया कि सिर्फ 'फार्म फ्रेश' होना काफी नहीं है। हमें क्लीनिकली साफ होना होगा।"
      },
      features: [
        {
          sub: "चरण 01: शुद्धिकरण",
          title: "बैक्टीरिया-मुक्त अंडे",
          desc: "पैकेजिंग से पहले, हर अंडा हमारे एडवांस UV चैंबर से गुजरता है। यह प्रकाश अंडे को प्रभावित किए बिना सतह के 99.9% बैक्टीरिया को खत्म कर देता है। कोई केमिकल नहीं, सिर्फ शुद्ध रोशनी।",
          points: ["बच्चों के छूने के लिए सुरक्षित", "प्राकृतिक शेल्फ लाइफ में सुधार"]
        },
        {
          sub: "चरण 02: सत्यापन",
          title: "अब कोई अंदाज़ा नहीं",
          desc: "हम सिर्फ ताज़ा कहते नहीं, साबित करते हैं। अरुष के हर अंडे पर पैकिंग की तारीख स्टैम्प की जाती है। आपको यह जानने का हक है कि आपका भोजन कब तैयार हुआ था।",
          points: ["100% पारदर्शिता", "उच्चतम पोषण का लाभ"]
        },
        {
          sub: "नवाचार (Innovation)",
          title: "पाश्चुरीकृत लिक्विड एग",
          desc: "एथलीटों और शेफ के लिए, हम अंडों को तोड़कर लिक्विड को पाश्चुरीकृत (Pasteurize) करते हैं। यह हल्की हीट ट्रीटमेंट प्रोटीन को सुरक्षित रखते हुए बैक्टीरिया को मार देती है।",
          points: ["प्रोटीन शेक के लिए सुरक्षित", "बिना किसी गंदगी के सीधा उपयोग"]
        }
      ],
      closing: {
        title: "क्या आप बदलाव के लिए तैयार हैं?",
        desc: "सतना के उन सैकड़ों परिवारों से जुड़ें जिन्होंने सुरक्षित और स्वच्छ विकल्प चुना है।",
        btn: "अभी ऑर्डर करें"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="w-full bg-white font-sans transition-all duration-500">
      
      {/* LANGUAGE TOGGLE BUTTON */}
      <div className="fixed top-24 right-4 md:right-10 z-[100]">
        <button 
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          className="bg-[#1F1F1F] text-[#E6B65C] font-bold px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 border border-[#E6B65C]/30 group hover:scale-105 transition-all"
        >
          <span className="text-lg">🌐</span>
          <span className="text-sm tracking-wide">
            {lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
          </span>
        </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-[#1F1F1F]">
        <div className="absolute inset-0 opacity-30">
           <Image src="/whyArush/lab_cleaning.png" alt="Lab" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h4 
            key={`hero-t-${lang}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#E6B65C] font-bold uppercase tracking-[0.2em] mb-4"
          >
            {t.hero.title}
          </motion.h4>
          <motion.h1 
            key={`hero-h-${lang}`}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-bold text-white leading-tight"
          >
            {t.hero.subtitle}
          </motion.h1>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 px-6 md:px-12 container mx-auto text-center max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] mb-8 uppercase tracking-tighter">
              {t.myth.title}
            </h2>
            <p className="text-[#6B6B6B] text-xl md:text-2xl leading-relaxed italic font-light">
              "{t.myth.desc}"
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="w-32 h-2 bg-[#E6B65C] mx-auto mt-12 rounded-full shadow-lg"></div>
      </section>

      {/* 3. THE SOLUTIONS (Features) */}
      <section className="w-full py-24 bg-[#FBF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          
          {t.features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-32 last:mb-0`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <Image 
                  src={idx === 0 ? "/hero_page/uv_sanetize egg.png" : idx === 1 ? "/hero_page/datedEgg.png" : "/whyArush/pestrize.png"} 
                  alt={feature.title} fill className="object-cover" 
                />
                <div className={`absolute top-6 ${idx % 2 !== 0 ? 'left-6' : 'right-6'} bg-[#1F1F1F] text-[#E6B65C] p-4 rounded-2xl shadow-xl`}>
                  {idx === 0 ? <FaLightbulb className="text-2xl" /> : idx === 1 ? <FaCalendarCheck className="text-2xl" /> : <FaFlask className="text-2xl" />}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 space-y-6"
              >
                <div className="flex items-center gap-3">
                   <div className="w-10 h-1 bg-[#E6B65C]"></div>
                   <span className="text-xs font-black uppercase tracking-widest text-gray-400">{feature.sub}</span>
                </div>
                <h3 className="text-4xl font-bold text-[#1F1F1F] leading-tight">{feature.title}</h3>
                <p className="text-[#6B6B6B] text-lg leading-relaxed">{feature.desc}</p>
                <ul className="space-y-4 pt-4">
                  {feature.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-4 text-[#1F1F1F] font-bold text-lg">
                      <FaCheckCircle className="text-[#E6B65C] text-xl" /> {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

        </div>
      </section>

      {/* 4. CLOSING PROMISE */}
      <section className="py-24 bg-[#1F1F1F] text-center px-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
            <FaMicroscope className="text-[40rem] text-white" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">{t.closing.title}</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto italic font-light">
            {t.closing.desc}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#E6B65C] text-[#1F1F1F] font-black rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(230,182,92,0.3)] uppercase tracking-widest"
          >
            {t.closing.btn}
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
};

export default WhyArushClient;