"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import {motion} from "framer-motion";

export const HomePageMain = () => {
  const [date, setDate] = useState<string>('LOADING');

  useEffect(() => {
    const updateStamp = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
      const formatted = now.toLocaleDateString('en-US', options);
      setDate(formatted);
    };

    updateStamp();
  }, []);
  return (
    <section className="w-[98%] mt-2 mx-auto bg-[#FBF7F2] rounded-xl">
      <div className="relative grid md:grid-cols-2 grid-cols-1 rounded-2xl lg:p-6 hover:shadow-2xl transition-all duration-700">
        <motion.div 
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.5, ease: "easeInOut"}}
        className="p-6 z-10">
          {/* Label/Tagline */}
          <span className="font-sans text-[#3A7D44] text-sm font-bold uppercase tracking-widest mb-2 block">
            Fresh by Nature. Clean by Science.
          </span>

          {/* Main Heading */}
          <h1 className="font-heading text-[#1F1F1F] text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Honest Eggs. <br />
            <span className="text-brand-gold">Clean Nutrition.</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-[#6B6B6B] text-base md:text-xl leading-relaxed max-w-lg mb-8">
            24-hour fresh, UV-sanitized, date-stamped eggs delivered straight from farm to your doorstep.
          </p>

          {/* CTA Button */}
          <button className="bg-[#E6B65C] text-[#1F1F1F] text-base font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition-all">
            Order Fresh Eggs
          </button>
        </motion.div>
        <motion.div 
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:100}}
        transition={{duration:0.5, ease: "easeInOut"}}
        
        className="relative md:h-auto h-[300px]">
          <Image src="/hero_page/hero_image.jpg" className="rounded-xl brightness-[90%]" fill alt="hero Image" />
        </motion.div>
        <div className="absolute lg:left-[44.5%] md:left-[40%] left-[62%] lg:top-[15%] md:top-[12%] top-[44%]">
          {/* Outer Container for Rotation */}
          <div className="relative transform -rotate-12 transition-transform hover:rotate-0 duration-500 select-one">

            {/* Main Stamp Circle */}
            <div className="md:w-36 md:h-36 w-28 h-28 rounded-full border-4 border-double border-[#5D7A97]/80 
                        flex items-center justify-center bg-[#5D7A97]/5 
                        shadow-[inset_0_0_15px_rgba(93,122,151,0.1)]
                        relative overflow-hidden group"
                       
                        >

              {/* Rough/Grunge Texture Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none 
                          bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

              {/* Inner Circle Border */}
              <div className="md:w-[115px] md:h-[115px] w-[92px] h-[92px] rounded-full border-2 border-[#5D7A97]/80 
                          flex flex-col items-center justify-center text-center opacity-80 mix-blend-multiply filter contrast-125 saturate-190">

                {/* Label */}
                <span className="font-mono text-[13px] font-bold text-[#5D7A97] uppercase tracking-tighter">
                  Pack Date:
                </span>

                {/* Real-time Date */}
                <span className="font-mono md:text-2xl text-lg font-black text-[#5D7A97] uppercase mt-1">
                  {date}
                </span>
              </div>
            </div>

            {/* Optional: Subtle Ink Smudge Effect (Bottom Shadow) */}
            <div className="absolute -bottom-1 -right-1 w-full h-full rounded-full border-4 border-[#5D7A97]/10 -z-10 blur-[1px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
