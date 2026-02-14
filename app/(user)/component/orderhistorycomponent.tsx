"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBox, 
  FaChevronRight, 
  FaHistory, 
  FaCheckCircle, 
  FaTruck, 
  FaTimes,
  FaCalendarAlt
} from 'react-icons/fa';

// TypeScript Types
interface OrderItem {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  items: { name: string; qty: number; image: string }[];
}

interface OrderHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ isOpen, onClose }) => {
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  // Mock Orders Data
  const orders: OrderItem[] = [
    {
      id: "AR-9921",
      date: "10 Feb 2026",
      total: 540,
      status: 'Delivered',
      items: [
        { name: "Classic White Eggs", qty: 2, image: "/about/fresh_egg.png" },
        { name: "Shakti Calcium Powder", qty: 1, image: "/hero_page/pulvizer_image.png" }
      ]
    },
    {
      id: "AR-9945",
      date: "12 Feb 2026",
      total: 180,
      status: 'Processing',
      items: [
        { name: "Desi Brown Eggs", qty: 1, image: "/about/fresh_egg.png" }
      ]
    }
  ];

  const statusColors = {
    Delivered: "bg-green-100 text-green-700",
    Processing: "bg-blue-100 text-blue-700",
    Shipped: "bg-[#E6B65C]/20 text-[#1F1F1F]",
    Cancelled: "bg-red-100 text-red-700"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[3000]"
          />

          {/* Sidebar Drawer (Right Side) */}
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white z-[3001] shadow-2xl flex flex-col"
          >
            
            {/* HEADER */}
            <div className="p-6 bg-[#1F1F1F] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4">
                <FaHistory className="text-[#E6B65C] text-2xl" />
                <div>
                  <h2 className="text-xl font-black uppercase tracking-widest">
                    {lang === 'en' ? 'Order History' : 'ऑर्डर हिस्ट्री'}
                  </h2>
                  <p className="text-[10px] text-[#E6B65C] font-bold">Track your Arush deliveries</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Lang Toggle Inside Header */}
                <button 
                  onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                  className="text-[10px] font-black border border-white/20 px-2 py-1 rounded hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all"
                >
                  {lang === 'en' ? 'HINDI' : 'ENGLISH'}
                </button>
                <button onClick={onClose} className="hover:rotate-90 transition-transform"><FaTimes size={20}/></button>
              </div>
            </div>

            {/* ORDERS LIST */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#FBF7F2]/30">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    key={order.id} 
                    className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 group cursor-pointer"
                  >
                    {/* Order Top Info */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Order ID:</span>
                           <span className="text-sm font-black text-[#1F1F1F]">{order.id}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                           <FaCalendarAlt size={10} />
                           <span>{order.date}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-full ${statusColors[order.status]}`}>
                        {lang === 'en' ? order.status : (order.status === 'Delivered' ? 'पहुँच गया' : 'प्रोसेस हो रहा है')}
                      </span>
                    </div>

                    {/* Items Preview */}
                    <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                          <div className="absolute bottom-0 right-0 bg-[#1F1F1F] text-[#E6B65C] text-[8px] font-black px-1 rounded-tl-md">
                            x{item.qty}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase">Total Amount</span>
                        <span className="text-lg font-black text-[#1F1F1F]">₹{order.total}</span>
                      </div>
                      <button className="flex items-center gap-2 text-[#E6B65C] font-black text-xs group-hover:gap-4 transition-all uppercase tracking-widest">
                        {lang === 'en' ? 'Details' : 'विवरण'} <FaChevronRight />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center opacity-30">
                  <FaBox size={60} />
                  <p className="mt-4 font-bold tracking-widest uppercase">No orders yet</p>
                </div>
              )}
            </div>

            {/* NEED HELP SECTION */}
            <div className="p-6 bg-[#FBF7F2] border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-[#1F1F1F]">{lang === 'en' ? 'Need help?' : 'मदद चाहिए?'}</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Contact Arush Support for issues.</p>
                </div>
                <button className="bg-[#1F1F1F] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#E6B65C] hover:text-[#1F1F1F] transition-all">
                   Get Support
                </button>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderHistory;