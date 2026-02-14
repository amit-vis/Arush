"use client";
import Link from "next/link";
import { TopBar } from "./TopBar";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import CartDrawer from "../component/cartcomponent";
import UserProfile from "../component/userprofilecomponent";
import OrderHistory from "../component/orderhistorycomponent";

export const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isUserNav, setIsUserNav] = useState(false);
  const [isCartOpen, setIsCartopen] = useState(false)
  const [isProfileOpen, setIsProfileopen] = useState(false)
  const [isOrderHistoryOpen, setIsOrderHistoryopen] = useState(false)

  // --- REFS ---
  // 1. User Menu Refs
  const userMenuRef = useRef<HTMLDivElement>(null);
  const userButtonRef = useRef<HTMLLIElement>(null);

  // 2. ✅ NEW: Mobile Menu Refs add kiye
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLDivElement>(null);

  // --- LOGIC: Handle Click Outside ---
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      
      // LOGIC 1: Close User Menu
      if (isUserNav) {
        if (
          userMenuRef.current &&
          !userMenuRef.current.contains(event.target) &&
          userButtonRef.current &&
          !userButtonRef.current.contains(event.target)
        ) {
          setIsUserNav(false);
        }
      }

      // LOGIC 2: ✅ NEW: Close Mobile Menu
      if (isMobileNav) {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target) &&
          mobileToggleRef.current &&
          !mobileToggleRef.current.contains(event.target)
        ) {
          setIsMobileNav(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserNav, isMobileNav]); // Dependency array mein dono hone chahiye

  const handleToggleMenu = () => {
    setIsMobileNav(!isMobileNav);
    if (isUserNav) setIsUserNav(false);
  };

  const handleToggleUser = () => {
    setIsUserNav(!isUserNav);
    if (isMobileNav) setIsMobileNav(false);
  };

  const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Why Arush?", path: "/why-arush" }, // Yahan humne specific route diya
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];


const handleCartClose = ()=>setIsCartopen(false)
const handleProfileClose = ()=>setIsProfileopen(false)
const handleOrderHistoryClose = ()=>setIsOrderHistoryopen(false)

  return (
    <section className="w-full sticky top-0 z-50">
      <TopBar />

      <nav className="flex relative justify-between items-center w-full bg-brand-cream/90 border-b border-brand-gold/20 shadow-lg py-2 md:px-4 px-2 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex-shrink-0">
  <Link href="/">
    {/* Stylish Logo Header */}
    <h1 className="lg:text-[32px] md:text-[24px] text-[20px] font-black font-heading tracking-tighter leading-none flex flex-col md:flex-row md:items-center">
      <span className="text-[#1F1F1F]">ARUSH</span>
      <span className="text-[#E6B65C] md:ml-2 flex items-center gap-1">
        EGGS <span className="text-[#1F1F1F] text-xs md:text-sm font-light mt-1">&</span> MINERALS
      </span>
    </h1>
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-[-2px] hidden md:block">
      Purely From Farm
    </p>
  </Link>
</div>

        {/* Desktop Menu */}
        <div className="md:flex hidden items-center">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
  <li key={item.name} className="relative group">
    <Link 
      href={item.path} // Yahan ab dynamic path aayega
      className="text-[#1F1F1F] font-heading font-medium hover:text-[#E6B65C] transition-colors"
    >
      {item.name}
    </Link>
    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#E6B65C] transition-all duration-300 group-hover:w-full"></span>
  </li>
))}
          </ul>
        </div>

        {/* Icons Section */}
        <div className="text-[#1F1F1F] flex items-center gap-6">
          <ul className="flex items-center gap-4">

            <li className="relative cursor-pointer hover:text-[#E6B65C]">
              
              <FaCartPlus onClick={()=>setIsCartopen(true)} className="text-[24px] z-0" />
            </li>
            
            {/* User Icon Button */}
            <li
              ref={userButtonRef} 
              onClick={handleToggleUser}
              className="cursor-pointer rounded-full border-[1.5px] border-[#1F1F1F] p-2 hover:bg-[#1F1F1F] hover:text-white transition-all"
            >
              <FaUser className="text-[18px]" />
            </li>

            {/* Mobile Menu Toggle Button */}
            <div
              ref={mobileToggleRef} // ✅ NEW: Ref yahan lagaya
              onClick={handleToggleMenu}
              className="md:hidden flex flex-col gap-1 cursor-pointer"
            >
              <span className="block h-[3px] w-6 rounded bg-[#1F1F1F]"></span>
              <span className="block h-[3px] w-6 rounded bg-[#1F1F1F]"></span>
              <span className="block h-[3px] w-6 rounded bg-[#1F1F1F]"></span>
            </div>
          </ul>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileNav && (
          <div 
            ref={mobileMenuRef} // ✅ NEW: Ref yahan lagaya
            className="lg:hidden rounded-lg block absolute bg-white p-4 right-2 top-15 shadow-2xl"
          >
            <ul className="flex flex-col space-x-8 gap-2">
              {navItems.map(
                (item, index) => (
                  <li key={index} className="relative group">
                    <Link href={item.path} className="text-[#1F1F1F] font-heading font-medium hover:text-[#E6B65C] transition-colors">
                      {item.name}
                    </Link>
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#E6B65C] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {/* User Nav Dropdown */}
        {isUserNav && (
          <div 
            ref={userMenuRef} 
            className="rounded-lg absolute bg-white p-4 right-2 top-15 lg:top-17 z-100 shadow-2xl w-48"
          >
            <ul className="flex flex-col gap-3">
              
              <li className="relative group w-full">
                  <span onClick={()=>setIsProfileopen(true)} className="block w-full text-[#1F1F1F] font-heading font-medium hover:text-[#E6B65C] transition-colors">
                    Personal Details
                  </span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#E6B65C] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group w-full">
                  <span onClick={()=>setIsOrderHistoryopen(true)} className="block w-full text-[#1F1F1F] font-heading font-medium hover:text-[#E6B65C] transition-colors">
                    Order History
                  </span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#E6B65C] transition-all duration-300 group-hover:w-full"></span>
                </li>
              <li>
                <button className="bg-[#E6B65C] cursor-pointer py-2 transition-all duration-200 ease-in-out hover:bg-[#cf9f45] hover:shadow-md hover:scale-[1.02] active:scale-95 w-full rounded-full text-white font-semibold font-heading">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <CartDrawer
      isOpen={isCartOpen}
          onClose={handleCartClose}
      />
      <UserProfile
      isOpen={isProfileOpen}
      onClose={handleProfileClose}
      />
      <OrderHistory
      isOpen={isOrderHistoryOpen}
      onClose={handleOrderHistoryClose}
      />
    </section>
  );
};