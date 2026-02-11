"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <section className="w-full py-28 bg-white text-[#1F1F1F] font-sans overflow-hidden">
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
            {/* Main Sustainability Image */}
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#FBF7F2]">
              <Image 
                src="/hero_page/pulvizer_image.png" // Eggshells turning into powder visual
                alt="Arush Sustainability Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A7D44]/40 to-transparent"></div>
            </div>
            
            {/* Floating "Zero Waste" Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-[#3A7D44] text-white p-6 rounded-3xl shadow-xl z-10 hidden md:block"
            >
              <FaRecycle className="text-3xl mb-2" />
              <p className="font-black text-sm leading-tight uppercase tracking-tighter">100% Zero<br/>Waste Process</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#3A7D44]/10 text-[#3A7D44] px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-6">
              <FaLeaf /> OUR GREEN PROMISE
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-[#1F1F1F] leading-none mb-8 tracking-tighter">
              Good for You.<br />
              <span className="text-[#3A7D44] italic">Good for Earth.</span>
            </h2>

            <p className="text-[#6B6B6B] text-lg mb-8 leading-relaxed font-medium">
              At Arush, we don't just sell eggs; we respect nature. Our process is strictly **Zero-Waste**. Instead of discarding eggshells, we refine them into high-quality **Calcium Powder**, ensuring nothing goes to waste.
            </p>

            {/* Process Steps */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center text-[#3A7D44] shrink-0">
                  <span className="font-black">1</span>
                </div>
                <div>
                  <h4 className="font-black text-[#1F1F1F] uppercase text-sm">Collection & Cleaning</h4>
                  <p className="text-[#6B6B6B] text-xs font-bold">We collect shells post-sanitization to ensure hygiene.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center text-[#3A7D44] shrink-0">
                  <span className="font-black">2</span>
                </div>
                <div>
                  <h4 className="font-black text-[#1F1F1F] uppercase text-sm">Mineral Processing</h4>
                  <p className="text-[#6B6B6B] text-xs font-bold">Shells are processed into fine grain powder, a natural source of calcium.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center text-[#3A7D44] shrink-0">
                  <span className="font-black">3</span>
                </div>
                <div>
                  <h4 className="font-black text-[#1F1F1F] uppercase text-sm">Farmer Empowerment</h4>
                  <p className="text-[#6B6B6B] text-xs font-bold">This mineral-rich feed goes back to farmers for livestock nutrition.</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-3 bg-[#1F1F1F] text-white px-8 py-4 rounded-full font-black text-sm hover:bg-[#3A7D44] transition-all shadow-xl group">
              LEARN ABOUT SHAKTI-FEED <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}