"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaTag } from 'react-icons/fa';

const BlogGlimpse = () => {
  // Ye data aapke Admin Panel se aayega
  const featuredBlogs = [
    {
      id: 1,
      title: "How to check Egg Freshness in 10 seconds",
      excerpt: "Satna ke local market mein taaze ande kaise pehchanein? Jaaniye ye aasaan tarika...",
      category: "Tips",
      date: "12 Feb, 2026",
      image: "https://images.unsplash.com/photo-1582722872445-44c56bb62991?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Shakti-Feed: The Secret to Stronger Shells",
      excerpt: "Humara premium calcium feed kaise murgiyon ki health aur productivity badhata hai...",
      category: "Nutrition",
      date: "10 Feb, 2026",
      image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Poultry Farming Trends in Satna 2026",
      excerpt: "Madhya Pradesh mein poultry business ke naye mauke aur challenges par ek report...",
      category: "Business",
      date: "08 Feb, 2026",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#FBF7F2] w-full">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#E6B65C] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">
              Knowledge Hub
            </span>
            <h2 className="text-5xl font-black text-[#1F1F1F] tracking-tighter leading-none">
              LATEST FROM <br /> <span className="text-[#E6B65C]">ARUSH BLOG</span>
            </h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-3 bg-[#1F1F1F] text-[#E6B65C] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all duration-500 shadow-xl">
            View All Posts <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#1F1F1F]/90 backdrop-blur-md text-[#E6B65C] px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-[#E6B65C]" /> {blog.date}</span>
                  <span>•</span>
                  <span>Amit Vishwakarma</span>
                </div>
                
                <h3 className="text-xl font-black text-[#1F1F1F] mb-4 leading-tight group-hover:text-[#E6B65C] transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                  {blog.excerpt}
                </p>

                <Link 
                  href={`/blog/${blog.id}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1F1F1F] border-b-2 border-[#E6B65C] pb-1 hover:gap-4 transition-all"
                >
                  Read Full Story <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGlimpse;