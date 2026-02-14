"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import AdminNavbar from '@/app/admin/adminNavbar/adminNav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check karein ki kya ye login page hai
  const isLoginPage = pathname === '/admin/login';

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#FBF7F2]">
      {/* Agar login page NAHI hai, tabhi navbar dikhao */}
      {!isLoginPage && <AdminNavbar />} 

      {/* Login page par padding-top (pt-20) nahi chahiye */}
      <main className={`flex-1 w-full ${!isLoginPage ? 'pt-20' : ''}`}>
        <div className="w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
}