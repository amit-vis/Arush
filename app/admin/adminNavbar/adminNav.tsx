"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaTachometerAlt, FaShoppingCart, FaEgg, 
  FaEdit, FaFileInvoiceDollar, FaSignOutAlt 
} from 'react-icons/fa';

const AdminNavbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/admin/dashboard' },
    { name: 'Orders', icon: <FaShoppingCart />, path: '/admin/orders' },
    { name: 'Stock', icon: <FaEgg />, path: '/admin/inventory' },
    { name: 'Blogs', icon: <FaEdit />, path: '/admin/blogs' },
    { name: 'Billing', icon: <FaFileInvoiceDollar />, path: '/admin/billing' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1F1F1F] z-[1500] shadow-xl border-b border-white/5">
      <div className="w-full px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <h2 className="text-xl font-black tracking-tighter text-white">
            ARUSH <span className="text-[#E6B65C]">ADMIN</span>
          </h2>
        </div>

        {/* Desktop Menu - Horizontally Centered */}
        <div className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => {
            // Check if current path matches the link path
            const isActive = pathname === item.path;
            
            return (
              <Link key={item.path} href={item.path}>
                <div className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'bg-[#E6B65C] text-[#1F1F1F] font-black shadow-lg scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}
                `}>
                  <span className={`text-lg ${isActive ? 'text-[#1F1F1F]' : 'text-[#E6B65C]'}`}>
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="flex-shrink-0">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-black text-[11px] uppercase tracking-widest">
            <FaSignOutAlt />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;