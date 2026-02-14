"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEgg, 
  FaSearch, 
  FaLeaf, 
  FaArrowRight, 
  FaChevronLeft, 
  FaChevronRight,
  FaFlask
} from 'react-icons/fa';
import Link from 'next/link';

// TypeScript Interfaces for Blog Data
interface BlogPost {
  id: string;
  category: 'Eggs' | 'Calcium Powder';
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: string;
}

interface BlogPageContent {
  hero: { title: React.ReactNode; subtitle: string; };
  categoryEggs: string;
  categoryCalcium: string;
  searchPlaceholder: string;
  readMore: string;
}

const ITEMS_PER_PAGE = 4; // Ek baar mein 10 blogs dikhane hain

export const BlogClient = ()=>{
      const [lang, setLang] = useState<'en' | 'hi'>('en');
      const [activeCategory, setActiveCategory] = useState<'Eggs' | 'Calcium Powder'>('Eggs');
      const [currentPage, setCurrentPage] = useState(1);
      const [searchTerm, setSearchTerm] = useState('');
    
      // Mock Blog Data (Real mein ye API se aayega)
      const allBlogs: BlogPost[] = [
        {
          id: "egg-benefits-1",
          category: 'Eggs',
          title: " अंडे के अद्भुत फायदे: क्यों आपको इन्हें हर दिन खाना चाहिए?",
          excerpt: "जानें अंडे खाने के कुछ सबसे महत्वपूर्ण फायदे, जिनमें प्रोटीन, विटामिन और मिनरल्स शामिल हैं।",
          imageUrl: "/blog/egg_nutrition.png",
          date: "15 Jan 2026",
          author: "Arush Experts",
          readTime: "5 min read"
        },
        {
          id: "calcium-power-2",
          category: 'Calcium Powder',
          title: "कैल्शियम पाउडर: हड्डियाँ और दाँत कैसे मजबूत करें?",
          excerpt: "कैल्शियम पाउडर के लाभों और इसे अपनी डाइट में शामिल करने के तरीकों के बारे में जानें।",
          imageUrl: "/blog/calcium_benefits.png",
          date: "20 Jan 2026",
          author: "Arush Nutrition",
          readTime: "7 min read"
        },
        {
          id: "egg-recipes-3",
          category: 'Eggs',
          title: "5 आसान और स्वादिष्ट अंडे की रेसिपीज जो आप घर पर बना सकते हैं",
          excerpt: "ब्रेकफास्ट से डिनर तक, अंडे से बनने वाली इन स्वादिष्ट रेसिपीज को ट्राई करें।",
          imageUrl: "/blog/egg_recipes.png",
          date: "25 Jan 2026",
          author: "Arush Kitchen",
          readTime: "6 min read"
        },
        {
            id: "egg-protein-4",
            category: 'Eggs',
            title: "अंडे: प्रोटीन का पावरहाउस और मांसपेशी निर्माण",
            excerpt: "मांसपेशियों के निर्माण और मरम्मत के लिए अंडे कैसे महत्वपूर्ण हैं, जानें उनके प्रोटीन लाभ।",
            imageUrl: "/blog/egg_muscle.png",
            date: "01 Feb 2026",
            author: "Arush Fitness",
            readTime: "8 min read"
          },
          {
            id: "calcium-animals-5",
            category: 'Calcium Powder',
            title: "जानवरों के लिए कैल्शियम: बेहतर स्वास्थ्य और उत्पादन के लिए",
            excerpt: "किसानों के लिए कैल्शियम पाउडर के फायदे, जो जानवरों को स्वस्थ और मजबूत रखने में मदद करता है।",
            imageUrl: "/blog/calcium_animal_feed.png",
            date: "05 Feb 2026",
            author: "Arush Shakti-Feed",
            readTime: "9 min read"
          },
          {
            id: "egg-myths-6",
            category: 'Eggs',
            title: "अंडों से जुड़े 10 आम मिथक और उनके पीछे की सच्चाई",
            excerpt: "अंडों के बारे में कई गलत धारणाएं हैं; जानें असली तथ्य और मिथकों को तोड़ें।",
            imageUrl: "/blog/egg_myths.png",
            date: "10 Feb 2026",
            author: "Arush Research",
            readTime: "7 min read"
          },
          {
            id: "calcium-supplements-7",
            category: 'Calcium Powder',
            title: "आपके दैनिक आहार में कैल्शियम पाउडर कैसे शामिल करें?",
            excerpt: "अपने भोजन और पेय में प्राकृतिक कैल्शियम पाउडर को आसानी से जोड़ने के तरीके।",
            imageUrl: "/blog/calcium_diet.png",
            date: "15 Feb 2026",
            author: "Arush Wellness",
            readTime: "6 min read"
          },
          {
            id: "egg-cholesterol-8",
            category: 'Eggs',
            title: "क्या अंडे कोलेस्ट्रॉल के लिए खराब हैं? नवीनतम शोध क्या कहता है?",
            excerpt: "अंडे और कोलेस्ट्रॉल के बीच के संबंध को समझें, वैज्ञानिक तथ्यों के साथ।",
            imageUrl: "/blog/egg_cholesterol.png",
            date: "20 Feb 2026",
            author: "Arush Health",
            readTime: "8 min read"
          },
          {
            id: "calcium-kids-9",
            category: 'Calcium Powder',
            title: "बच्चों के विकास के लिए कैल्शियम: क्यों यह महत्वपूर्ण है?",
            excerpt: "बच्चों की बढ़ती हड्डियों और समग्र विकास के लिए कैल्शियम की भूमिका।",
            imageUrl: "/blog/calcium_kids.png",
            date: "25 Feb 2026",
            author: "Arush Parenthood",
            readTime: "7 min read"
          },
          {
            id: "egg-quality-10",
            category: 'Eggs',
            title: "एक अच्छे अंडे की पहचान कैसे करें? गुणवत्ता जांच के तरीके",
            excerpt: "ताजा और उच्च गुणवत्ता वाले अंडे चुनने के लिए विशेषज्ञ युक्तियाँ।",
            imageUrl: "/blog/egg_quality.png",
            date: "01 Mar 2026",
            author: "Arush Quality",
            readTime: "5 min read"
          },
          {
            id: "egg-quality-11",
            category: 'Eggs',
            title: "एक अच्छे अंडे की पहचान कैसे करें? गुणवत्ता जांच के तरीके",
            excerpt: "ताजा और उच्च गुणवत्ता वाले अंडे चुनने के लिए विशेषज्ञ युक्तियाँ।",
            imageUrl: "/blog/egg_quality.png",
            date: "01 Mar 2026",
            author: "Arush Quality",
            readTime: "5 min read"
          },
          {
            id: "egg-quality-12",
            category: 'Eggs',
            title: "एक अच्छे अंडे की पहचान कैसे करें? गुणवत्ता जांच के तरीके",
            excerpt: "ताजा और उच्च गुणवत्ता वाले अंडे चुनने के लिए विशेषज्ञ युक्तियाँ।",
            imageUrl: "/blog/egg_quality.png",
            date: "01 Mar 2026",
            author: "Arush Quality",
            readTime: "5 min read"
          },
          {
            id: "egg-quality-13",
            category: 'Eggs',
            title: "एक अच्छे अंडे की पहचान कैसे करें? गुणवत्ता जांच के तरीके",
            excerpt: "ताजा और उच्च गुणवत्ता वाले अंडे चुनने के लिए विशेषज्ञ युक्तियाँ।",
            imageUrl: "/blog/egg_quality.png",
            date: "01 Mar 2026",
            author: "Arush Quality",
            readTime: "5 min read"
          },
          {
            id: "calcium-uses-11",
            category: 'Calcium Powder',
            title: "कैल्शियम पाउडर के अन्य उपयोग: सिर्फ स्वास्थ्य से बढ़कर",
            excerpt: "कैल्शियम पाउडर का उपयोग सिर्फ डाइट में ही नहीं, अन्य क्षेत्रों में भी।",
            imageUrl: "/blog/calcium_uses.png",
            date: "05 Mar 2026",
            author: "Arush Innovation",
            readTime: "6 min read"
          },
          {
            id: "egg-vitamins-12",
            category: 'Eggs',
            title: "अंडों में कौन से विटामिन और खनिज होते हैं? एक पूर्ण गाइड",
            excerpt: "अंडों में मौजूद सभी आवश्यक पोषक तत्वों की विस्तृत जानकारी।",
            imageUrl: "/blog/egg_vitamins.png",
            date: "10 Mar 2026",
            author: "Arush Nutrition",
            readTime: "9 min read"
          },
      ];
    
      const pageContent: Record<'en' | 'hi', BlogPageContent> = {
        en: {
          hero: {
            title: <>Our <span className="text-[#E6B65C]">Insights</span></>,
            subtitle: "Deep dive into the world of eggs & nutrition with Arush."
          },
          categoryEggs: "Egg Facts & Nutrition",
          categoryCalcium: "Calcium Powder Benefits",
          searchPlaceholder: "Search articles...",
          readMore: "Read More"
        },
        hi: {
          hero: {
            title: <>हमारी <span className="text-[#E6B65C]">जानकारी</span></>,
            subtitle: "अरुष के साथ अंडों और पोषण की दुनिया में गहराई से उतरें।"
          },
          categoryEggs: "अंडे के तथ्य और पोषण",
          categoryCalcium: "कैल्शियम पाउडर के फायदे",
          searchPlaceholder: "लेख खोजें...",
          readMore: "और पढ़ें"
        }
      };
    
      const t = pageContent[lang];
    
      // Filter and Search Blogs
      const filteredBlogs = allBlogs.filter(blog => 
        blog.category === activeCategory &&
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      // Pagination Logic
      const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    
      const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
    return(
         <div className="w-full bg-white font-sans text-[#1F1F1F]">
      
      {/* LANGUAGE TOGGLE BUTTON */}
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
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[#1F1F1F] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/blog-bg-pattern.png')] bg-repeat bg-center"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            key={`hero-title-${lang}`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            key={`hero-subtitle-${lang}`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. BLOG CONTENT SECTION */}
      <section className="py-20 px-6 md:px-12 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Sidebar for Categories & Search */}
          <div className="lg:col-span-1 space-y-8 sticky top-28 h-fit">
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative"
            >
              <input 
                type="text" 
                placeholder={t.searchPlaceholder} 
                className="w-full p-4 pl-12 rounded-2xl bg-[#FBF7F2] border-none focus:ring-2 focus:ring-[#E6B65C] outline-none font-medium text-[#1F1F1F]"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Search karne par page 1 par wapas aayega
                }}
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </motion.div>

            {/* Categories */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#FBF7F2] p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4"
            >
              <h3 className="text-lg font-black text-[#1F1F1F] mb-4">
                {lang === 'en' ? 'Blog Categories' : 'ब्लॉग श्रेणियाँ'}
              </h3>
              <button 
                onClick={() => { setActiveCategory('Eggs'); setCurrentPage(1); }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl font-bold transition-all ${
                  activeCategory === 'Eggs' ? 'bg-[#1F1F1F] text-[#E6B65C]' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaEgg className="text-lg" /> {t.categoryEggs}
              </button>
              <button 
                onClick={() => { setActiveCategory('Calcium Powder'); setCurrentPage(1); }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl font-bold transition-all ${
                  activeCategory === 'Calcium Powder' ? 'bg-[#1F1F1F] text-[#E6B65C]' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaFlask className="text-lg" /> {t.categoryCalcium}
              </button>
            </motion.div>
          </div>

          {/* Right Section for Blog Posts */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {currentBlogs.length > 0 ? (
                <motion.div
                  key={`${activeCategory}-${currentPage}-${lang}`} // Key changed for re-animation on page/category change
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {currentBlogs.map((blog) => (
                    <motion.div 
                      key={blog.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden cursor-pointer group"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image src={blog.imageUrl} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#E6B65C] mb-2 block">
                          {blog.category === 'Eggs' ? (lang === 'en' ? 'Eggs' : 'अंडे') : (lang === 'en' ? 'Calcium Powder' : 'कैल्शियम पाउडर')}
                        </span>
                        <h3 className="text-lg font-black text-[#1F1F1F] mb-3 leading-tight group-hover:text-[#E6B65C] transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                          <span>{blog.date} • {blog.readTime}</span>
                          <Link href={`/blog/${blog.id}`} className="flex items-center gap-1 group-hover:gap-2 transition-all text-[#1F1F1F] group-hover:text-[#E6B65C]">
   {t.readMore} <FaArrowRight />
</Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-blogs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20 text-gray-400"
                >
                  <FaSearch size={50} className="mb-4" />
                  <p className="text-xl font-bold">{lang === 'en' ? 'No articles found' : 'कोई लेख नहीं मिला'}</p>
                  <p className="text-sm">{lang === 'en' ? 'Try a different search term or category.' : 'कोई और शब्द या श्रेणी आजमाएं।'}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-3 rounded-full bg-[#FBF7F2] text-[#1F1F1F] hover:bg-[#E6B65C] hover:text-white disabled:opacity-50 transition-all"
                >
                  <FaChevronLeft size={14} />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-full font-bold transition-all ${
                      currentPage === index + 1 ? 'bg-[#1F1F1F] text-[#E6B65C]' : 'bg-[#FBF7F2] text-[#1F1F1F] hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-full bg-[#FBF7F2] text-[#1F1F1F] hover:bg-[#E6B65C] hover:text-white disabled:opacity-50 transition-all"
                >
                  <FaChevronRight size={10} />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
    )
}