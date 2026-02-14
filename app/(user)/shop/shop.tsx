"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaCheck, FaTimesCircle, FaSyncAlt, FaClock } from 'react-icons/fa';

// --- 1. TYPE DEFINITIONS ---
interface ProductOption {
  size: string;
  price: number;
  eggCount?: string;
}

interface Product {
  id: number;
  category: 'shell' | 'liquid' | 'calcium';
  name: string;
  description: string;
  images: string[];
  tags: string[];
  note?: string;
  options: ProductOption[];
  inStock: boolean;
  isSubscriptionAvailable: boolean;
}

// --- 2. DATA: Products List ---
const products: Product[] = [
  {
    id: 1,
    category: "shell",
    name: "Classic White Fresh",
    description: "UV Sanitized, Antibiotic-free, daily farm fresh eggs.",
    images: ["/shop/classic-white-1.jpg", "/shop/classic-white-2.jpg", "/shop/classic-white-3.jpg"],
    tags: ["Best Seller", "High Protein"],
    inStock: true,
    isSubscriptionAvailable: true,
    options: [
      { size: "6 Pack", price: 42 },
      { size: "12 Pack", price: 80 },
      { size: "30 Pack", price: 195 },
    ]
  },
  {
    id: 2,
    category: "shell",
    name: "Orange Yolk Premium",
    description: "Rich in Vitamin A & D3. Creamier taste with herbal feed.",
    images: ["/shop/orange-yolk-1.jpg", "/shop/orange-yolk-2.jpg", "/shop/orange-yolk-3.jpg"],
    tags: ["Premium", "Vitamin Rich"],
    inStock: true,
    isSubscriptionAvailable: true,
    options: [
      { size: "6 Pack", price: 60 },
      { size: "12 Pack", price: 115 },
      { size: "30 Pack", price: 280 },
    ]
  },
  {
    id: 5,
    category: "liquid",
    name: "Pure Egg White Liquid",
    description: "100% Pasteurized Egg Whites. Zero Fat, Zero Cholesterol.",
    images: ["/shop/liquid-white-1.jpg", "/shop/liquid-white-2.jpg", "/shop/liquid-white-3.jpg"],
    tags: ["Gym Essential", "Fat Free"],
    inStock: true,
    isSubscriptionAvailable: true,
    options: [
      { size: "250ml", price: 80, eggCount: "Approx 7-8 Eggs" },
      { size: "500ml", price: 150, eggCount: "Approx 15-16 Eggs" },
      { size: "1000ml", price: 290, eggCount: "Approx 30-32 Eggs" },
    ]
  },
  {
    id: 7,
    category: "calcium",
    name: "Natural Eggshell Calcium",
    description: "Finely ground, sterilized eggshell powder. High absorbability.",
    images: ["/shop/calcium-1.jpg", "/shop/calcium-2.jpg", "/shop/calcium-3.jpg"],
    tags: ["For Pets", "For Plants"],
    inStock: true,
    isSubscriptionAvailable: false,
    options: [
      { size: "500g Pouch", price: 150 },
      { size: "1kg Pack", price: 280 },
      { size: "5kg Bulk", price: 1200 },
    ]
  }
];

// --- 3. LOGIC: Smart Delivery Slots ---
const getAvailableSlots = () => {
  const now = new Date();
  const hour = now.getHours();
  const slots = [];

  if (hour < 6) {
    slots.push({ id: 'morning_today', label: 'Morning (Today 7-10 AM)' });
    slots.push({ id: 'evening_today', label: 'Evening (Today 6-9 PM)' });
  } else if (hour < 18) {
    slots.push({ id: 'evening_today', label: 'Evening (Today 6-9 PM)' });
    slots.push({ id: 'morning_tomorrow', label: 'Morning (Tomorrow 7-10 AM)' });
  } else {
    slots.push({ id: 'morning_tomorrow', label: 'Morning (Tomorrow 7-10 AM)' });
    slots.push({ id: 'evening_tomorrow', label: 'Evening (Tomorrow 6-9 PM)' });
  }
  return slots;
};

// --- 4. COMPONENT: Product Card ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [isSubscription, setIsSubscription] = useState(false);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [availableSlots, setAvailableSlots] = useState(getAvailableSlots());
  const [selectedSlot, setSelectedSlot] = useState(availableSlots[0].id);

  const basePrice = isSubscription ? Math.floor(selectedOption.price * 0.9) : selectedOption.price;
  const deliveryCharge = basePrice >= 200 ? 0 : 30;
  const finalPrice = basePrice + deliveryCharge;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full ${!product.inStock ? 'opacity-70' : ''}`}
    >
      {/* IMAGE SECTION */}
      <div className="relative h-72 w-full bg-gray-50 overflow-hidden">
        <Image src={activeImage} alt={product.name} fill className="object-cover" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.tags.map((tag, i) => (
            <span key={i} className="bg-[#1F1F1F]/90 text-[#E6B65C] text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-widest">{tag}</span>
          ))}
        </div>
        {!product.inStock && <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black uppercase tracking-widest">Sold Out</div>}
        
        {/* THUMBNAILS */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-2">
          {product.images.map((img, index) => (
            <button key={index} onClick={() => setActiveImage(img)} className={`w-10 h-10 rounded-xl border-2 overflow-hidden transition-all ${activeImage === img ? 'border-[#E6B65C] scale-110' : 'border-white/50'}`}>
              <div className="relative w-full h-full"><Image src={img} alt="thumb" fill className="object-cover" /></div>
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-black text-[#1F1F1F] mb-2">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">{product.description}</p>

          {/* SIZE SELECTOR */}
          <div className="mb-6">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Pack Size</label>
            <div className="flex flex-wrap gap-2">
              {product.options.map((opt, idx) => (
                <button key={idx} onClick={() => setSelectedOption(opt)} className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${selectedOption.size === opt.size ? "bg-[#1F1F1F] text-white" : "bg-white text-gray-600 hover:border-[#E6B65C]"}`}>
                  {opt.size}
                </button>
              ))}
            </div>
          </div>

          {/* SMART DELIVERY SLOTS */}
          <div className="mb-6">
            <label className="text-[10px] font-black text-[#3A7D44] uppercase tracking-widest mb-3 block flex items-center gap-2">
              <FaClock /> Delivery Slot
            </label>
            <select 
              value={selectedSlot} 
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full p-3 bg-[#FBF7F2] border border-gray-100 rounded-xl text-xs font-bold text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#E6B65C]/20"
            >
              {availableSlots.map(slot => <option key={slot.id} value={slot.id}>{slot.label}</option>)}
            </select>
          </div>

          {/* SUBSCRIPTION TOGGLE */}
          {product.isSubscriptionAvailable && (
            <div className="mb-6 p-1 bg-gray-100 rounded-xl flex">
              <button onClick={() => setIsSubscription(false)} className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all ${!isSubscription ? 'bg-white shadow-sm' : 'text-gray-400'}`}>ONE-TIME</button>
              <button onClick={() => setIsSubscription(true)} className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all flex items-center justify-center gap-2 ${isSubscription ? 'bg-white text-[#E6B65C] shadow-sm' : 'text-gray-400'}`}><FaSyncAlt size={10}/> SUBSCRIBE</button>
            </div>
          )}
        </div>

        {/* PRICE & ACTION */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Total Payable</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#1F1F1F]">₹{finalPrice}</span>
                {deliveryCharge === 0 ? <span className="text-[10px] font-black text-[#3A7D44] uppercase">Free Delivery</span> : <span className="text-[9px] text-red-400 font-bold">Add ₹{200 - basePrice} for Free Delivery</span>}
              </div>
            </div>
            <span className="text-[10px] font-black text-gray-300 uppercase">{selectedOption.size}</span>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#1F1F1F] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all shadow-xl">Buy Now</button>
            <button className="px-5 py-4 rounded-2xl border-2 border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-all"><FaShoppingCart/></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 5. MAIN PAGE ---
export default function ShopClient() {
  const [filter, setFilter] = useState("all");
  const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#FBF7F2] pb-20">
      <section className="bg-[#1F1F1F] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6B65C] opacity-5 rounded-full blur-3xl"></div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">THE ARUSH <span className="text-[#E6B65C]">STORE</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium italic">Direct from our farm in Ghoordang to your kitchen in Satna.</p>
      </section>

      {/* FILTER TABS */}
      <div className="container mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white p-3 shadow-2xl rounded-[2rem] flex flex-wrap md:flex-nowrap justify-center gap-2 max-w-3xl mx-auto border border-gray-50">
          {['all', 'shell', 'liquid', 'calcium'].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? "bg-[#E6B65C] text-[#1F1F1F] shadow-lg" : "text-gray-400 hover:text-[#1F1F1F]"}`}>
              {cat === 'all' ? 'All' : cat === 'shell' ? 'Shell Eggs' : cat === 'liquid' ? 'Liquid Eggs' : 'Calcium'}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      {/* WHOLESALE SECTION */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-[#1F1F1F] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl border-b-8 border-[#E6B65C]">
          <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
            <div className="lg:w-1/2">
              <span className="text-[#E6B65C] font-black text-xs uppercase tracking-[0.3em] mb-6 block">B2B Partnership</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none">Wholesale for <br/><span className="text-[#E6B65C]">Satna Businesses.</span></h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">Bakeries, Gyms, and Hotels—get custom billing and bulk priority delivery.</p>
              <div className="space-y-4">
                {["Custom Crates", "Monthly Billing", "Priority Slots"].map(t => <div key={t} className="flex items-center gap-4 text-white font-bold"><FaCheck className="text-[#E6B65C]"/> {t}</div>)}
              </div>
            </div>
            <div className="lg:w-[450px] bg-white p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-black text-[#1F1F1F] mb-8">Inquiry Form</h3>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Business Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#E6B65C] font-bold text-sm" />
                <input type="tel" placeholder="Contact Number" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#E6B65C] font-bold text-sm" />
                <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#E6B65C] font-bold text-sm text-gray-500">
                  <option>Daily 5+ Crates</option>
                  <option>Weekly Bulk</option>
                </select>
                <button className="w-full bg-[#1F1F1F] text-[#E6B65C] py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all shadow-xl">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}