"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp, 
  FaPaperPlane 
} from 'react-icons/fa';

// TypeScript Interface
interface ContactContent {
  heroTitle: React.ReactNode;
  heroSub: string;
  infoTitle: string;
  formTitle: string;
  placeholders: {
    name: string;
    email: string;
    message: string;
    button: string;
  };
  address: string;
}
export const ContactClient = ()=>{
    const [lang, setLang] = useState<'en' | 'hi'>('en');
    
      const content: Record<'en' | 'hi', ContactContent> = {
        en: {
          heroTitle: <>Get in Touch with <br/> <span className="text-[#E6B65C]">Team Arush</span></>,
          heroSub: "Have questions about our eggs or minerals? We are here to help you 24/7.",
          infoTitle: "Contact Information",
          formTitle: "Send us a Message",
          placeholders: {
            name: "Your Name",
            email: "Email Address",
            message: "How can we help you?",
            button: "Send Message"
          },
          address: "UCL Colony area, Satna, Madhya Pradesh | Farm: Ghoordang"
        },
        hi: {
          heroTitle: <>अरुष टीम से <br/> <span className="text-[#E6B65C]">संपर्क करें</span></>,
          heroSub: "हमारे अंडों या मिनरल्स के बारे में कोई सवाल है? हम आपकी मदद के लिए तैयार हैं।",
          infoTitle: "संपर्क जानकारी",
          formTitle: "हमें संदेश भेजें",
          placeholders: {
            name: "आपका नाम",
            email: "ईमेल पता",
            message: "हम आपकी क्या मदद कर सकते हैं?",
            button: "संदेश भेजें"
          },
          address: "UCL कॉलोनी क्षेत्र, सतना, मध्य प्रदेश | फार्म: घूरडांग"
        }
      };
    
      const t = content[lang];
    return(
        <div className="w-full bg-white font-sans">
      
      {/* LANGUAGE TOGGLE */}
      <div className="fixed top-24 right-4 md:right-10 z-[100]">
        <button 
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          className="bg-[#1F1F1F] text-[#E6B65C] font-bold px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 border border-[#E6B65C]/30 hover:scale-105 transition-all"
        >
          <span className="text-lg">🌐</span>
          <span className="text-sm uppercase tracking-widest">{lang === 'en' ? 'हिन्दी' : 'English'}</span>
        </button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[45vh] flex items-center justify-center bg-[#1F1F1F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            key={lang}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {t.heroTitle}
          </motion.h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">{t.heroSub}</p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-20 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-8 uppercase tracking-wider border-l-4 border-[#E6B65C] pl-4">
              {t.infoTitle}
            </h2>

            {/* Phone Card */}
            <div className="bg-[#FBF7F2] p-6 rounded-2xl flex items-center gap-5 group hover:bg-[#1F1F1F] transition-all duration-300">
              <div className="w-12 h-12 bg-[#E6B65C] rounded-xl flex items-center justify-center text-white text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase group-hover:text-gray-400">Call Us</p>
                <p className="text-[#1F1F1F] font-bold text-lg group-hover:text-white">+91 12345 67890</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FBF7F2] p-6 rounded-2xl flex items-center gap-5 group hover:bg-[#1F1F1F] transition-all duration-300">
              <div className="w-12 h-12 bg-[#E6B65C] rounded-xl flex items-center justify-center text-white text-xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase group-hover:text-gray-400">Email Us</p>
                <p className="text-[#1F1F1F] font-bold text-lg group-hover:text-white">contact@arush.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#FBF7F2] p-6 rounded-2xl flex items-center gap-5 group hover:bg-[#1F1F1F] transition-all duration-300">
              <div className="w-12 h-12 bg-[#E6B65C] rounded-xl flex items-center justify-center text-white text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase group-hover:text-gray-400">Our Location</p>
                <p className="text-[#1F1F1F] font-bold text-sm group-hover:text-white leading-tight">
                  {t.address}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#1F1F1F] hover:bg-[#E6B65C] hover:border-[#E6B65C] transition-all shadow-sm"><FaInstagram size={20}/></a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#1F1F1F] hover:bg-[#E6B65C] hover:border-[#E6B65C] transition-all shadow-sm"><FaFacebookF size={20}/></a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#1F1F1F] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all shadow-sm"><FaWhatsapp size={22}/></a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <h2 className="text-3xl font-bold text-[#1F1F1F] mb-8">{t.formTitle}</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder={t.placeholders.name} 
                  className="w-full bg-[#FBF7F2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#E6B65C] outline-none font-medium"
                />
                <input 
                  type="email" 
                  placeholder={t.placeholders.email} 
                  className="w-full bg-[#FBF7F2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#E6B65C] outline-none font-medium"
                />
              </div>
              <textarea 
                rows={5} 
                placeholder={t.placeholders.message} 
                className="w-full bg-[#FBF7F2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#E6B65C] outline-none font-medium"
              ></textarea>
              <button className="bg-[#1F1F1F] text-[#E6B65C] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all flex items-center gap-3 shadow-lg group">
                {t.placeholders.button} <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"/>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. GOOGLE MAPS PLACEHOLDER */}
      <section className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-[1s]">
        <iframe 
          title="Arush Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57963.74315264336!2d80.79377663045437!3d24.594895689140413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f9659f13019%3A0xc0232f7c0a72688b!2sSatna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>

    </div>
    )
}