"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Content structure ke liye interface define kiya hai
interface PageContent {
  heroTitle: React.ReactNode;
  heroSub: string;
  philosophy: string;
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  storyP3: string;
  standardSub: string;
  standardTitle: string;
  cards: { title: string; desc: string }[];
  founderNote: string;
  quote: string;
}

const AboutPage: React.FC = () => {
  // State ko 'en' | 'hi' types tak restrict kiya hai
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const content: Record<'en' | 'hi', PageContent> = {
    en: {
      heroTitle: <>Redefining Nutrition in <br/> <span className="text-[#E6B65C]">Satna & Ghoordang</span></>,
      heroSub: "From our farm to your family—bringing you eggs that are clean, safe, and packed with health.",
      philosophy: "The Arush Philosophy",
      storyTitle: "It Started With a Simple Question.",
      storyP1: "For years, we observed a gap in the local market. The eggs available were often dirty, old, and handled without basic hygiene. Families in Satna deserved better, but there was no reliable source for 100% safe nutrition.",
      storyP2: "That’s when Arush was born. We decided to build a system where quality isn't just a promise—it's a process.",
      storyP3: "By integrating modern farming techniques with strict hygiene protocols, we ensure that every egg leaving our facility is UV-Sanitized, Clean, and Nutrient-Rich.",
      standardSub: "Why Choose Us",
      standardTitle: "The Arush Standard",
      cards: [
        { title: "UV Sanitized", desc: "We use advanced UV light technology to kill bacteria on the shell surface, ensuring your food is safe." },
        { title: "Farm Fresh", desc: "No middlemen, no long storage. Our eggs travel directly from Ghoordang to your kitchen within hours." },
        { title: "100% Transparent", desc: "We believe you have the right to know what you eat. We maintain complete transparency in feed." }
      ],
      founderNote: "A Note from the Founder",
      quote: "My vision is simple: To provide the kind of quality to Satna that I would want for my own family. When you buy Arush, you aren't just buying eggs; you are buying a promise of purity."
    },
    hi: {
      heroTitle: <>सतना और घूरडांग में <br/> <span className="text-[#E6B65C]">पोषण की नई परिभाषा</span></>,
      heroSub: "हमारे फार्म से सीधे आपके परिवार तक—साफ, सुरक्षित और सेहत से भरपूर अंडे पहुँचाना हमारा लक्ष्य है।",
      philosophy: "अरुष की विचारधारा",
      storyTitle: "एक साधारण सवाल से हुई शुरुआत।",
      storyP1: "सालों से हमने स्थानीय बाजार में एक बड़ी कमी देखी। मिलने वाले अंडे अक्सर गंदे और पुराने होते थे। सतना के परिवारों को बेहतर पोषण मिलना चाहिए था, लेकिन शुद्धता का कोई भरोसा नहीं था।",
      storyP2: "यहीं से अरुष (Arush) का जन्म हुआ। हमने एक ऐसा सिस्टम बनाया जहाँ क्वालिटी सिर्फ एक वादा नहीं, बल्कि एक प्रक्रिया है।",
      storyP3: "आधुनिक खेती और कड़े स्वच्छता नियमों के साथ, हम सुनिश्चित करते हैं कि हर अंडा UV-Sanitized, साफ और पोषक तत्वों से भरपूर हो।",
      standardSub: "हमें क्यों चुनें",
      standardTitle: "अरुष का मानक",
      cards: [
        { title: "यूवी सैनिटाइज्ड", desc: "हम अंडों की सतह से बैक्टीरिया खत्म करने के लिए एडवांस UV तकनीक का उपयोग करते हैं।" },
        { title: "फार्म फ्रेश", desc: "बिना किसी देरी के, घूरडांग फार्म से सीधे आपकी रसोई तक ताजे अंडे पहुँचते हैं।" },
        { title: "100% पारदर्शिता", desc: "आपको यह जानने का हक है कि आप क्या खा रहे हैं। हम अपने दाने और पैकेजिंग में पूरी पारदर्शिता रखते हैं।" }
      ],
      founderNote: "संस्थापक की ओर से",
      quote: "मेरा लक्ष्य सीधा है: सतना को वही क्वालिटी देना जो मैं अपने परिवार के लिए चाहता हूँ। जब आप Arush चुनते हैं, तो आप सिर्फ अंडे नहीं, बल्कि शुद्धता का वादा खरीदते हैं।"
    }
  };

  const t = content[lang];

  return (
    <div className="w-full bg-white transition-all duration-500 font-sans">
      
      {/* LANGUAGE TOGGLE BUTTON */}
      <div className="fixed top-24 right-4 md:right-10 z-[100]">
        <button 
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          className="bg-[#1F1F1F] text-[#E6B65C] font-bold px-5 py-2.5 rounded-full shadow-2xl hover:bg-[#2a2a2a] transition-all flex items-center gap-3 border border-[#E6B65C]/30 group"
        >
          <div className="w-6 h-6 bg-[#E6B65C] text-[#1F1F1F] rounded-full flex items-center justify-center text-xs group-hover:rotate-12 transition-transform">
            🌐
          </div>
          <span className="text-sm tracking-wide">
            {lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
          </span>
        </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center bg-[#1F1F1F]">
        <div className="absolute inset-0 opacity-30">
           <Image 
             src="/images/farm-bg.jpg" 
             alt="Poultry Farm" 
             fill 
             className="object-cover" 
             priority 
           />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="text-[#E6B65C] font-bold uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
            {t.philosophy}
          </h4>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-light">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY */}
      <section className="py-24 px-6 md:px-12 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
               <Image src="/about/fresh_egg.png" alt="Fresh Eggs" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl mt-12">
               <Image src="/about/healthy_hens.png" alt="Healthy Hens" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] leading-snug underline decoration-[#E6B65C] decoration-4 underline-offset-8">
              {t.storyTitle}
            </h3>
            <div className="space-y-6 text-[#4A4A4A] text-lg md:text-xl leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p className="font-bold text-[#1F1F1F] bg-[#E6B65C]/10 p-4 rounded-xl border-l-4 border-[#E6B65C]">
                {t.storyP3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 bg-[#FBF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h4 className="text-[#E6B65C] font-bold uppercase tracking-widest text-sm mb-3">{t.standardSub}</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">{t.standardTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {t.cards.map((card, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-[#FBF7F2] group-hover:bg-[#E6B65C] rounded-2xl flex items-center justify-center mb-8 text-3xl transition-colors duration-300">
                  {idx === 0 ? '✨' : idx === 1 ? '🚜' : '🔍'}
                </div>
                <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SECTION */}
      <section className="py-24 px-6 md:px-12 container mx-auto">
        <div className="bg-[#1F1F1F] rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 text-white relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6B65C] opacity-5 rounded-full -mr-32 -mt-32"></div>
          
          <div className="w-56 h-56 md:w-72 md:h-72 relative shrink-0">
             <Image 
                src="/about/myphoto.png" 
                alt="Amit Vishwakarma"
                fill
                className="object-cover rounded-3xl border-2 border-[#E6B65C]/30 rotate-3 group-hover:rotate-0 transition-transform"
             />
          </div>

          <div className="flex-1 text-center lg:text-left z-10">
            <h3 className="text-2xl font-semibold opacity-80 mb-2 italic">{t.founderNote}</h3>
            <p className="text-[#E6B65C] text-3xl font-bold mb-8">Amit Vishwakarma</p>
            
            <div className="relative">
                <span className="text-8xl text-[#E6B65C]/10 absolute -top-12 -left-10 font-serif">“</span>
                <blockquote className="text-xl md:text-3xl italic leading-relaxed text-gray-200 font-serif relative z-10">
                  {t.quote}
                </blockquote>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;