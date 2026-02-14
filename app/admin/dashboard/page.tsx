"use client";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FaWallet, FaEgg, FaBoxOpen, FaUsers, 
  FaArrowUp, FaArrowDown, FaHistory, FaMapMarkerAlt,
  FaFlask, FaPlus
} from 'react-icons/fa';

const AdminDashboard = () => {
  const router = useRouter();

  const stats = [
    { title: 'Today\'s Revenue', value: '₹12,450', trend: '+12%', isUp: true, icon: <FaWallet />, color: 'bg-green-500' },
    { title: 'Eggs Inventory', value: '850 Units', trend: 'Low Stock', isUp: false, icon: <FaEgg />, color: 'bg-[#E6B65C]' },
    { title: 'Calcium Stock', value: '120 Kg', trend: 'Healthy', isUp: true, icon: <FaBoxOpen />, color: 'bg-blue-500' },
    { title: 'Liquid Stock', value: '45 Ltr', trend: '+2 Ltr', isUp: true, icon: <FaFlask />, color: 'bg-purple-500' },
  ];

  return (
    // FIX: Added 'p-8' for spacing and ensured 'w-full'
    <div className="bg-[#FBF7F2] w-full p-8 min-h-screen">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#1F1F1F]">Business Overview</h1>
          <p className="text-gray-500 font-medium">Monitoring Arush Enterprises - Satna Unit</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
            Download Report
          </button>
          <button 
            onClick={() => router.push('/admin/billing')}
            className="px-6 py-3 bg-[#1F1F1F] text-[#E6B65C] rounded-2xl font-bold text-sm hover:shadow-lg transition-all flex items-center gap-2"
          >
            <FaPlus /> Manual Billing
          </button>
        </div>
      </div>

      {/* Stats Grid - Responsive layout check */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-[#E6B65C]/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-inner`}>
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.isUp ? <FaArrowUp /> : <FaArrowDown />} {stat.trend}
              </div>
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.title}</p>
            <h3 className="text-2xl font-black text-[#1F1F1F]">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area - Full width distribution */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Live Order Stream - Takes 2/3 space on large screens */}
        <div className="xl:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-4">
            <h2 className="text-xl font-black text-[#1F1F1F] flex items-center gap-3">
              <FaHistory className="text-[#E6B65C]" /> Live Order Stream
            </h2>
            <button onClick={() => router.push('/admin/orders')} className="text-[#E6B65C] text-xs font-black uppercase tracking-widest hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-5 rounded-[1.5rem] bg-[#FBF7F2]/50 border border-gray-50 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center font-bold text-[#1F1F1F] shadow-sm group-hover:bg-[#E6B65C] group-hover:text-white transition-all">
                    {item}
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#1F1F1F]">Order #AR-202{item}</p>
                    <p className="text-[10px] text-gray-500 flex items-center gap-1 uppercase font-bold mt-1">
                      <FaMapMarkerAlt className="text-[#E6B65C]" /> UCL Colony, Satna
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-[#1F1F1F]">₹450.00</p>
                  <span className="text-[9px] font-black uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded-md">Processing</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Panel - Quick Actions */}
        <div className="bg-[#1F1F1F] rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-black mb-8">Stock Quick-Action</h2>
            <div className="space-y-8">
              {/* Egg Stock */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Egg Inventory</p>
                  <p className="text-[10px] text-[#E6B65C] font-black">850 Units</p>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#E6B65C] w-[85%] h-full rounded-full"></div>
                </div>
              </div>
              
              {/* Calcium Stock */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Shakti-Feed</p>
                  <p className="text-[10px] text-green-500 font-black">120 Kg</p>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 w-[60%] h-full rounded-full"></div>
                </div>
              </div>

              {/* Liquid Stock */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Liquid Booster</p>
                  <p className="text-[10px] text-purple-400 font-black">45 Ltr</p>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 w-[45%] h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => router.push('/admin/inventory')}
            className="mt-12 py-5 bg-[#E6B65C] text-[#1F1F1F] font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all shadow-lg"
          >
            Manage All Inventory
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;