"use client";
import React, { useState } from 'react';
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaClock, FaSearch } from 'react-icons/fa';

const AdminOrders = () => {
  // Demo Data (Inhe aap database se fetch karenge)
  const [orders, setOrders] = useState([
    { id: 'AR-101', customer: 'Rajesh (UCL Colony)', items: '30 Eggs', status: 'Pending', date: '13 Feb', amount: '₹300' },
    { id: 'AR-102', customer: 'Amit (Satna)', items: '5kg Calcium', status: 'Processing', date: '12 Feb', amount: '₹1200' },
  ]);

  const updateStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    // Yahan aapka API call jayega database update karne ke liye
    console.log(`Order ${orderId} updated to ${newStatus}`);
  };

  return (
    <div className="p-8 bg-[#FBF7F2] min-h-screen">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-[#1F1F1F]">Order Management</h1>
        <p className="text-gray-500 font-medium">Handle WhatsApp orders and database sync</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8 max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search by Order ID or Name..." 
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-[#E6B65C] outline-none"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
              <th className="p-6">Order ID</th>
              <th className="p-6">Customer</th>
              <th className="p-6">Items</th>
              <th className="p-6">Current Status</th>
              <th className="p-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/30 transition-colors">
                <td className="p-6 font-black text-[#1F1F1F]">{order.id}</td>
                <td className="p-6 font-bold text-gray-600">{order.customer}</td>
                <td className="p-6 text-sm text-gray-500">{order.items}</td>
                <td className="p-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    order.status === 'Paid' ? 'bg-green-100 text-green-600' : 
                    order.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-6">
                  <div className="flex gap-2">
                    {/* Mark as Paid */}
                    <button 
                      onClick={() => updateStatus(order.id, 'Paid')}
                      className="p-2 bg-green-500 text-white rounded-lg hover:shadow-lg transition-all"
                      title="Confirm & Paid"
                    >
                      <FaCheckCircle />
                    </button>
                    {/* Mark as Cancelled */}
                    <button 
                      onClick={() => updateStatus(order.id, 'Cancelled')}
                      className="p-2 bg-red-500 text-white rounded-lg hover:shadow-lg transition-all"
                      title="Cancel Order"
                    >
                      <FaTimesCircle />
                    </button>
                    {/* WhatsApp Context Link */}
                    <button className="p-2 bg-[#25D366] text-white rounded-lg hover:shadow-lg transition-all">
                      <FaWhatsapp />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;