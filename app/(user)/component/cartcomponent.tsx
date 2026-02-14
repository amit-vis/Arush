"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaShoppingBasket, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

// Types for Cart Item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: string; // e.g., "White Eggs", "Calcium Powder"
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartProps> = ({ isOpen, onClose }) => {
  // Mock Data: Aap isse apne State Management (Redux/Context) se connect kar sakte hain
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Classic White Eggs",
      price: 180,
      quantity: 1,
      image: "/about/fresh_egg.png",
      type: "Pack of 30"
    },
    {
      id: 2,
      name: "Shakti Calcium Powder",
      price: 450,
      quantity: 1,
      image: "/hero_page/pulvizer_image.png",
      type: "500g Pouch"
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Backdrop Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000]"
          />

          {/* 2. Cart Drawer Container */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[1001] shadow-2xl flex flex-col"
          >
            
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between bg-[#1F1F1F] text-white">
              <div className="flex items-center gap-3">
                <FaShoppingBasket className="text-[#E6B65C] text-2xl" />
                <h2 className="text-xl font-bold uppercase tracking-widest">Your Basket</h2>
                <span className="bg-[#E6B65C] text-[#1F1F1F] text-xs font-black px-2 py-1 rounded-md">
                  {cartItems.length}
                </span>
              </div>
              <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 bg-[#FBF7F2] p-4 rounded-2xl relative group"
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-white shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-[#1F1F1F] text-lg">{item.name}</h4>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-tighter">{item.type}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                          <button className="px-3 py-1 hover:bg-gray-100"><FaMinus size={10}/></button>
                          <span className="px-3 py-1 font-bold text-sm">{item.quantity}</span>
                          <button className="px-3 py-1 hover:bg-gray-100"><FaPlus size={10}/></button>
                        </div>
                        <p className="font-black text-[#1F1F1F]">₹{item.price * item.quantity}</p>
                      </div>
                    </div>

                    {/* Delete Icon */}
                    <button className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaTrash size={12} />
                    </button>
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <FaShoppingBasket size={40} />
                  </div>
                  <p className="text-gray-500 font-bold">Your cart is empty</p>
                  <button onClick={onClose} className="text-[#E6B65C] font-bold underline">Start Shopping</button>
                </div>
              )}
            </div>

            {/* Footer / Checkout Section */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-[#1F1F1F] font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-medium">
                  <span>Delivery (Satna Local)</span>
                  <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Free</span>
                </div>
                <div className="flex justify-between items-center text-xl font-black border-t pt-4 text-[#1F1F1F]">
                  <span>Total Amount</span>
                  <span>₹{subtotal}</span>
                </div>
                
                <button className="w-full bg-[#1F1F1F] text-[#E6B65C] py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all duration-300 flex items-center justify-center gap-3 group">
                  Proceed to Checkout 
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>
                    →
                  </motion.span>
                </button>
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Secure Payment Powered by Arush Eggs
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;