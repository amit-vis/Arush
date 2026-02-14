"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
export const BlogClientID = ()=>{
    return(
        <article className="w-full min-h-screen bg-white pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-24 pb-8">
        <Link href="/blog" className="flex items-center gap-2 text-[#1F1F1F] font-bold hover:text-[#E6B65C] transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Blogs
        </Link>
      </div>

      {/* Hero Section: Title & Image */}
      <header className="container mx-auto px-6 max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-[#1F1F1F] leading-tight">
          अंडे के अद्भुत फायदे: क्यों आपको इन्हें हर दिन खाना चाहिए?
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#E6B65C]" /> 15 Jan 2026</span>
          <span className="flex items-center gap-2"><FaUser className="text-[#E6B65C]" /> Arush Experts</span>
          <span className="flex items-center gap-2"><FaClock className="text-[#E6B65C]" /> 5 min read</span>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mt-12 border-8 border-[#FBF7F2]">
          <Image src="/blog/egg_nutrition.png" alt="Blog Image" fill className="object-cover" priority />
        </div>
      </header>

      {/* Blog Content */}
      <section className="container mx-auto px-6 max-w-3xl mt-16 prose prose-lg prose-headings:font-black prose-p:text-gray-600 prose-strong:text-[#1F1F1F]">
        <p>
          अंडे प्रोटीन का सबसे अच्छा और सस्ता स्रोत माने जाते हैं। लेकिन क्या आप जानते हैं कि एक अंडे में 
          प्रोटीन के अलावा विटामिन डी, बी12 और ओमेगा-3 फैटी एसिड भी प्रचुर मात्रा में होते हैं?
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. मांसपेशियों का निर्माण (Muscle Building)</h2>
        <p>
          अगर आप वर्कआउट करते हैं, तो अंडे आपके लिए 'लिक्विड गोल्ड' जैसे हैं। इनमें मौजूद अमीनो एसिड मांसपेशियों की 
          मरम्मत और विकास में तेजी लाते हैं।
        </p>

        <div className="bg-[#FBF7F2] p-8 rounded-3xl border-l-8 border-[#E6B65C] my-10 italic text-xl font-serif">
          "एक औसत अंडे में लगभग 6 ग्राम हाई-क्वालिटी प्रोटीन होता है जो शरीर द्वारा आसानी से सोख लिया जाता है।"
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. दिमाग की सेहत के लिए कोलीन</h2>
        <p>
          अंडे कोलीन (Choline) के सबसे अच्छे स्रोतों में से एक हैं, जो मस्तिष्क के विकास और याददाश्त के लिए आवश्यक है। 
          गर्भवती महिलाओं और बच्चों के लिए यह विशेष रूप से महत्वपूर्ण है।
        </p>

        {/* Aap isme aur bhi sections add kar sakte hain... */}
      </section>

      {/* Share/Footer Section */}
      <footer className="container mx-auto px-6 max-w-3xl mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
        <p className="font-bold text-[#1F1F1F]">Was this helpful?</p>
        <div className="flex gap-4">
           {/* Social share icons yahan aayenge */}
        </div>
      </footer>
    </article>
    )
}