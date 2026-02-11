"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaCheck, FaTimesCircle, FaSyncAlt } from 'react-icons/fa';

// --- 1. TYPE DEFINITIONS (Interfaces) ---

interface ProductOption {
  size: string;
  price: number;
  eggCount?: string; // Optional: Sirf Liquid Eggs ke liye
}

interface Product {
  id: number;
  category: 'shell' | 'liquid' | 'calcium';
  name: string;
  description: string;
  images: string[]; // 3 Images ka array
  tags: string[];
  note?: string;
  options: ProductOption[];
  inStock: boolean;            // Stock management ke liye
  isSubscriptionAvailable: boolean; // Subscription toggle control ke liye
}

// --- 2. DATA: Complete Products List ---
const products: Product[] = [
  // --- SHELL EGGS ---
  {
    id: 1,
    category: "shell",
    name: "Classic White Fresh",
    description: "UV Sanitized, Antibiotic-free, daily farm fresh eggs.",
    images: [
      "/shop/classic-white-1.jpg", 
      "/shop/classic-white-2.jpg", 
      "/shop/classic-white-3.jpg"
    ],
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
    images: [
      "/shop/orange-yolk-1.jpg",
      "/shop/orange-yolk-2.jpg",
      "/shop/orange-yolk-3.jpg"
    ],
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
    id: 3,
    category: "shell",
    name: "Desi Free Range",
    description: "Authentic country eggs from free-roaming hens. Traditional taste.",
    images: [
      "/shop/desi-egg-1.jpg",
      "/shop/desi-egg-2.jpg",
      "/shop/desi-egg-3.jpg"
    ],
    tags: ["Organic Feed", "Traditional"],
    inStock: true,
    isSubscriptionAvailable: true,
    options: [
      { size: "6 Pack", price: 90 },
      { size: "12 Pack", price: 175 },
      { size: "30 Pack", price: 420 },
    ]
  },
  {
    id: 4,
    category: "shell",
    name: "Kadaknath Power",
    description: "Black meat chicken eggs. Low fat, high protein, immunity booster.",
    images: [
      "/shop/kadaknath-1.jpg",
      "/shop/kadaknath-2.jpg",
      "/shop/kadaknath-3.jpg"
    ],
    tags: ["Superfood", "Immunity"],
    inStock: false, // SOLD OUT Example
    isSubscriptionAvailable: true,
    options: [
      { size: "6 Pack", price: 180 },
      { size: "12 Pack", price: 350 },
      { size: "30 Pack", price: 850 },
    ]
  },

  // --- LIQUID EGGS ---
  {
    id: 5,
    category: "liquid",
    name: "Pure Egg White Liquid",
    description: "100% Pasteurized Egg Whites. Zero Fat, Zero Cholesterol.",
    images: [
      "/shop/liquid-white-1.jpg",
      "/shop/liquid-white-2.jpg",
      "/shop/liquid-white-3.jpg"
    ],
    tags: ["Gym Essential", "Fat Free"],
    note: "Safe for raw consumption (Shakes/Smoothies).",
    inStock: true,
    isSubscriptionAvailable: true,
    options: [
      { size: "250ml", price: 80, eggCount: "Approx 7-8 Eggs" },
      { size: "500ml", price: 150, eggCount: "Approx 15-16 Eggs" },
      { size: "1000ml", price: 290, eggCount: "Approx 30-32 Eggs" },
    ]
  },
  {
    id: 6,
    category: "liquid",
    name: "Whole Egg Liquid",
    description: "Crack-free convenience. Perfect for baking and omelettes.",
    images: [
      "/shop/liquid-whole-1.jpg",
      "/shop/liquid-whole-2.jpg",
      "/shop/liquid-whole-3.jpg"
    ],
    tags: ["Baking Ready", "No Shells"],
    note: "Pasteurized & Homogenized.",
    inStock: true,
    isSubscriptionAvailable: true,
    options: [
      { size: "250ml", price: 70, eggCount: "Approx 5-6 Eggs" },
      { size: "500ml", price: 130, eggCount: "Approx 10-12 Eggs" },
      { size: "1000ml", price: 250, eggCount: "Approx 20-24 Eggs" },
    ]
  },

  // --- CALCIUM POWDER ---
  {
    id: 7,
    category: "calcium",
    name: "Natural Eggshell Calcium",
    description: "Finely ground, sterilized eggshell powder. High absorbability.",
    images: [
      "/shop/calcium-1.jpg",
      "/shop/calcium-2.jpg",
      "/shop/calcium-3.jpg"
    ],
    tags: ["For Pets", "For Plants"],
    inStock: true,
    isSubscriptionAvailable: false, // Subscription NOT available for Calcium
    options: [
      { size: "500g Pouch", price: 150 },
      { size: "1kg Pack", price: 280 },
      { size: "5kg Bulk", price: 1200 },
    ]
  }
];

// --- 3. COMPONENT: Product Card ---
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState<ProductOption>(product.options[0]);
  const [isSubscription, setIsSubscription] = useState(false);
  const [activeImage, setActiveImage] = useState(product.images[0]); // Active Image State

  // Calculate final price (10% discount if subscribed)
  const finalPrice = isSubscription 
    ? Math.floor(selectedOption.price * 0.9) 
    : selectedOption.price;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group ${!product.inStock ? 'opacity-80' : ''}`}
    >
      
      {/* --- IMAGE GALLERY SECTION --- */}
      <div className="relative h-72 w-full bg-gray-50 overflow-hidden">
        {/* Main Active Image */}
        <div className="relative h-full w-full">
            <Image 
              src={activeImage} 
              alt={product.name} 
              fill 
              className={`object-cover transition-all duration-500 ${!product.inStock ? 'grayscale-[0.8]' : ''}`}
            />
        </div>
        
        {/* Tags Overlay (Left) */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
           {product.tags.map((tag, i) => (
             <span key={i} className="bg-[#1F1F1F]/80 text-white text-[10px] px-2 py-1 rounded uppercase tracking-wider font-bold backdrop-blur-sm">
               {tag}
             </span>
           ))}
        </div>

        {/* Stock Status (Right) */}
        {!product.inStock && (
           <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1 z-10">
             <FaTimesCircle /> Sold Out
           </div>
        )}

        {/* THUMBNAILS (Floating at Bottom) */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20 px-2">
            {product.images.map((img, index) => (
                <button 
                    key={index}
                    onClick={() => setActiveImage(img)}
                    disabled={!product.inStock}
                    className={`w-10 h-10 rounded-lg border-2 overflow-hidden shadow-lg transition-all bg-white ${
                        activeImage === img 
                        ? 'border-[#E6B65C] scale-110' 
                        : 'border-white opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                >
                    <div className="relative w-full h-full">
                        <Image src={img} alt={`thumb-${index}`} fill className="object-cover" />
                    </div>
                </button>
            ))}
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
          
          {/* Liquid Info (Egg Count) */}
          {selectedOption.eggCount && (
            <div className="mb-4 bg-yellow-50 text-yellow-800 text-xs px-3 py-2 rounded-lg flex items-center gap-2 border border-yellow-100">
              <FaCheck className="text-[#E6B65C]" />
              Contains: <strong>{selectedOption.eggCount}</strong>
            </div>
          )}

          {/* Size Selector */}
          <div className="mb-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Select Pack Size</label>
            <div className="flex flex-wrap gap-2">
              {product.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(opt)}
                  disabled={!product.inStock}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                    selectedOption.size === opt.size 
                    ? "bg-[#1F1F1F] text-white border-[#1F1F1F]" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#E6B65C]"
                  }`}
                >
                  {opt.size}
                </button>
              ))}
            </div>
          </div>

          {/* Subscription Toggle (Only if available & in stock) */}
          {product.isSubscriptionAvailable && product.inStock && (
            <div className="mb-4 p-1 bg-gray-100 rounded-lg flex relative">
              <button 
                onClick={() => setIsSubscription(false)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all z-10 ${!isSubscription ? 'bg-white text-[#1F1F1F] shadow-sm' : 'text-gray-500'}`}
              >
                One-Time
              </button>
              <button 
                onClick={() => setIsSubscription(true)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all z-10 flex items-center justify-center gap-1 ${isSubscription ? 'bg-white text-[#E6B65C] shadow-sm' : 'text-gray-500'}`}
              >
                <FaSyncAlt className="text-[10px]" /> Subscribe
              </button>
            </div>
          )}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase flex items-center gap-1">
              Price {isSubscription && <span className="text-[#E6B65C] text-[10px]">(Save 10%)</span>}
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-[#E6B65C]">₹{finalPrice}</p>
              {isSubscription && (
                <p className="text-sm text-gray-400 line-through">₹{selectedOption.price}</p>
              )}
            </div>
          </div>
          
          <button 
            disabled={!product.inStock}
            className={`px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transition-all ${
              product.inStock 
              ? "bg-[#E6B65C] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white shadow-[#E6B65C]/20" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            {product.inStock ? (
              <> <FaShoppingCart /> {isSubscription ? "Subscribe" : "Add"} </>
            ) : (
              "Sold Out"
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. MAIN PAGE COMPONENT ---
export default function ShopPage() {
  const [filter, setFilter] = useState<string>("all");

  // Filtering Logic
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  // Categories
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'shell', label: 'Farm Fresh Eggs' },
    { id: 'liquid', label: 'Liquid Eggs' },
    { id: 'calcium', label: 'Calcium Powder' },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7F2] pb-20 font-sans">
      
      {/* HERO HEADER */}
      <section className="bg-[#1F1F1F] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The Arush <span className="text-[#E6B65C]">Store</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Direct from our farm to your kitchen. Select your nutrition preference below.
        </p>
      </section>

      {/* FILTER TABS - CENTERED */}
     {/* FILTER TABS - OPTIMIZED FOR MOBILE */}
      <div className="container mx-auto px-6 -mt-8 relative z-10 mb-12">
        <div className="
            bg-white p-2 shadow-xl mx-auto
            {/* MOBILE: Grid layout (2 columns), Thoda rectangular rounded look */}
            grid grid-cols-2 gap-2 rounded-2xl w-full max-w-sm
            
            {/* DESKTOP: Flex layout (1 line), Pill shape */}
            md:flex md:w-auto md:rounded-full md:gap-0 md:max-w-none md:flex-row
        ">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                py-3 text-sm font-bold uppercase tracking-wider transition-all
                {/* Mobile: Thoda kam padding, rounded box */}
                rounded-xl w-full text-center px-2
                
                {/* Desktop: Zyada padding, rounded pill */}
                md:rounded-full md:px-6
                
                ${
                  filter === cat.id 
                  ? "bg-[#E6B65C] text-[#1F1F1F] shadow-md" 
                  : "text-gray-500 hover:text-[#1F1F1F] hover:bg-gray-50"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>

      {/* WHOLESALE / B2B SECTION (Complete Code) */}
      <section className="container mx-auto px-6 mt-24">
        <div className="bg-[#1F1F1F] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6B65C] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">
            
            {/* Left Side: Information */}
            <div className="md:w-1/2 text-left">
              <span className="text-[#E6B65C] font-bold uppercase tracking-widest text-xs mb-3 block">
                Partner With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Wholesale & Bulk Orders <br/> for <span className="text-[#E6B65C]">Business.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Running a Gym, Bakery, Hotel, or Retail Shop in Satna? 
                Get direct B2B pricing. We ensure consistent daily supply with GST billing.
              </p>
              
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-white">
                   <span className="bg-[#E6B65C] rounded-full p-1 flex items-center justify-center h-5 w-5">
                     <FaCheck className="text-[#1F1F1F] text-[10px]"/>
                   </span>
                   Custom crate packaging available
                 </li>
                 <li className="flex items-center gap-3 text-white">
                   <span className="bg-[#E6B65C] rounded-full p-1 flex items-center justify-center h-5 w-5">
                     <FaCheck className="text-[#1F1F1F] text-[10px]"/>
                   </span>
                   Monthly billing & Priority Delivery
                 </li>
                 <li className="flex items-center gap-3 text-white">
                   <span className="bg-[#E6B65C] rounded-full p-1 flex items-center justify-center h-5 w-5">
                     <FaCheck className="text-[#1F1F1F] text-[10px]"/>
                   </span>
                   Consistent Quality & Size
                 </li>
              </ul>
            </div>

            {/* Right Side: Inquiry Form */}
            <div className="bg-white p-8 rounded-2xl w-full md:w-[450px] shadow-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-6">Request B2B Rates</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Business Name</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E6B65C] focus:ring-1 focus:ring-[#E6B65C] transition-all text-sm" 
                    placeholder="e.g. Rahul Bakery" 
                  />
                </div>
                <div>
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Contact Number</label>
                   <input 
                     type="tel" 
                     className="w-full mt-1 p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E6B65C] focus:ring-1 focus:ring-[#E6B65C] transition-all text-sm" 
                     placeholder="+91 98765 43210" 
                    />
                </div>
                <div>
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Requirement</label>
                   <select className="w-full mt-1 p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E6B65C] focus:ring-1 focus:ring-[#E6B65C] transition-all text-sm text-gray-600">
                     <option>Select Option</option>
                     <option>Daily 5-10 Crates</option>
                     <option>Weekly 100+ Trays</option>
                     <option>Liquid Egg Bulk (5L+)</option>
                     <option>Eggshell Powder (Bulk)</option>
                   </select>
                </div>
                <button type="submit" className="w-full bg-[#1F1F1F] text-white font-bold py-3.5 rounded-lg hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all duration-300 mt-2 shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}