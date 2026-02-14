"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaIdBadge, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaEdit, FaSignOutAlt, FaTimes, FaPlus, FaUserFriends 
} from 'react-icons/fa';

interface UserData {
  userId: string;
  name: string;
  email: string;
  phoneNumbers: string[];
  addresses: string[];
  otherRecipient?: { name: string; phone: string; address: string };
}

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
  // Mock Data: Initial state empty bhi ho sakta hai
  const [user, setUser] = useState<UserData>({
    userId: "ARUSH-2026-001",
    name: "Amit Vishwakarma",
    email: "amit.v@arush.com",
    phoneNumbers: ["+91 98765 43210"],
    addresses: ["UCL Colony, Satna, MP"],
    otherRecipient: { name: "Rajesh Kumar", phone: "+91 88888 77777", address: "Ghoordang, Satna" }
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[2000]"
          />

          {/* Profile Modal */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 m-auto w-[95%] max-w-[550px] h-fit max-h-[85vh] bg-white z-[2001] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
          >
            
            {/* STICKY HEADER */}
            <div className="relative h-24 bg-[#1F1F1F] shrink-0">
              <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-[#E6B65C] z-10">
                <FaTimes size={20} />
              </button>
              <div className="absolute -bottom-10 left-8">
                <div className="w-20 h-20 rounded-2xl bg-[#E6B65C] border-4 border-white flex items-center justify-center text-white text-3xl font-black shadow-lg">
                  {user.name ? user.name.charAt(0) : "?"}
                </div>
              </div>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="flex-1 overflow-y-auto pt-12 px-6 pb-8 space-y-8 custom-scrollbar">
              
              {/* Profile Main Info */}
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-2xl font-black text-[#1F1F1F]">{user.name || "Set Your Name"}</h2>
                  <p className="text-xs font-bold text-[#E6B65C] uppercase tracking-widest">Arush Member</p>
                </div>
                <button className="p-2 text-[#1F1F1F] hover:bg-[#FBF7F2] rounded-lg transition-all border border-gray-100">
                  <FaEdit size={18} />
                </button>
              </div>

              {/* Dynamic Details Section */}
              <div className="space-y-4">
                
                {/* Email (Read Only) */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 opacity-70">
                  <FaEnvelope className="text-[#E6B65C]" />
                  <span className="text-sm font-bold">{user.email}</span>
                </div>

                {/* Multiple Phone Numbers */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Numbers</label>
                    <button className="text-[#E6B65C] text-xs font-bold flex items-center gap-1 hover:underline">
                      <FaPlus size={10} /> Add New
                    </button>
                  </div>
                  {user.phoneNumbers.map((phone, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-[#FBF7F2] border border-gray-100">
                      <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-[#E6B65C] text-sm" />
                        <span className="text-sm font-bold text-[#1F1F1F]">{phone}</span>
                      </div>
                      <FaEdit className="text-gray-300 cursor-pointer hover:text-[#E6B65C]" size={14} />
                    </div>
                  ))}
                </div>

                {/* Multiple Delivery Addresses */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Saved Addresses</label>
                    <button className="text-[#E6B65C] text-xs font-bold flex items-center gap-1 hover:underline">
                      <FaPlus size={10} /> Add New
                    </button>
                  </div>
                  {user.addresses.map((addr, i) => (
                    <div key={i} className="flex items-start justify-between p-4 rounded-2xl bg-[#FBF7F2] border border-gray-100">
                      <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-[#E6B65C] mt-1 shrink-0" />
                        <span className="text-sm font-bold text-[#1F1F1F] leading-tight">{addr}</span>
                      </div>
                      <FaEdit className="text-gray-300 cursor-pointer hover:text-[#E6B65C]" size={14} />
                    </div>
                  ))}
                </div>

                {/* Other Recipient (Gift/Family) */}
                {user.otherRecipient && (
                   <div className="space-y-2 pt-4">
                      <label className="text-[10px] font-black text-[#3A7D44] uppercase tracking-widest flex items-center gap-2">
                        <FaUserFriends /> Ordering for Someone Else?
                      </label>
                      <div className="p-4 rounded-2xl bg-[#3A7D44]/5 border border-[#3A7D44]/20">
                        <p className="text-sm font-black text-[#1F1F1F]">{user.otherRecipient.name}</p>
                        <p className="text-xs text-gray-500 font-medium">{user.otherRecipient.phone}</p>
                        <p className="text-xs text-gray-500 mt-1">{user.otherRecipient.address}</p>
                      </div>
                   </div>
                )}
              </div>
            </div>

            {/* STICKY FOOTER */}
            <div className="p-6 bg-white border-t border-gray-100 shrink-0">
              <button className="w-full py-4 rounded-2xl bg-[#1F1F1F] text-white font-bold flex items-center justify-center gap-3 hover:bg-red-600 transition-all duration-300 group">
                <FaSignOutAlt className="group-hover:-translate-x-1 transition-transform" /> 
                Logout
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UserProfile;