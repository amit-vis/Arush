"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan abhi temporary check laga rahe hain
    if (email === "admin@arush.com" && password === "arush2026") {
      router.push('/admin/dashboard');
    } else {
      alert("Bhai, galat details hain! Sahi email/password daalo.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FBF7F2] p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tighter text-[#1F1F1F]">
            ARUSH <span className="text-[#E6B65C]">ADMIN</span>
          </h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-2">
            Secure Access Portal
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Email Address</label>
            <div className="relative">
              <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
              <input 
                type="email" 
                required
                className="w-full pl-14 pr-6 py-5 bg-[#FBF7F2] rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C] font-bold text-sm"
                placeholder="admin@arush.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                className="w-full pl-14 pr-14 py-5 bg-[#FBF7F2] rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C] font-bold text-sm"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#E6B65C]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-[#1F1F1F] text-[#E6B65C] rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-[1.02] transition-all mt-4"
          >
            Enter Dashboard
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Arush Enterprises Satna Unit
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;