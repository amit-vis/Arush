"use client";
import React, { useState, useMemo } from 'react';
import { FaFileInvoice, FaPlus, FaTrash, FaDownload, FaTruck, FaTools } from 'react-icons/fa';

const AdminBilling = () => {
  const [customerType, setCustomerType] = useState('Retail');
  const [paymentMode, setPaymentMode] = useState('COD'); // COD or Prepaid
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [items, setItems] = useState([{ name: 'Premium Eggs', qty: 1, price: 0 }]);
  
  // Extra Charges States
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [serviceCharges, setServiceCharges] = useState(0);

  // Unique Invoice Number Logic (Date + Random Number)
  const invoiceNo = useMemo(() => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    return `AR-${date}-${Math.floor(1000 + Math.random() * 9000)}`;
  }, []);

  // Calculation Logic
  const itemsTotal = items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  const grandTotal = itemsTotal + deliveryCharges + serviceCharges;

  const addItem = () => setItems([...items, { name: '', qty: 1, price: 0 }]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));
  const handlePrint = () => window.print();

  return (
    <div className="p-8 bg-[#FBF7F2] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-[#1F1F1F]">Professional Billing</h1>
          <p className="text-gray-500 font-medium uppercase text-[10px] tracking-widest mt-1">Arush Enterprises - Satna Unit</p>
        </div>
        <button onClick={handlePrint} className="bg-[#E6B65C] text-[#1F1F1F] px-8 py-4 rounded-2xl font-black text-sm shadow-xl flex items-center gap-2 hover:scale-105 transition-all">
          <FaDownload /> DOWNLOAD PDF BILL
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* INPUT PANEL - HIDDEN ON PRINT */}
        <div className="lg:col-span-1 space-y-6 print:hidden">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h2 className="text-lg font-black mb-6">Order Details</h2>
            
            {/* Payment Mode Toggle */}
            <div className="flex gap-2 mb-6 bg-gray-50 p-1 rounded-xl">
              <button onClick={() => setPaymentMode('COD')} className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${paymentMode === 'COD' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}>COD</button>
              <button onClick={() => setPaymentMode('Prepaid')} className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${paymentMode === 'Prepaid' ? 'bg-green-600 text-white' : 'text-gray-400'}`}>PREPAID</button>
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="Customer/Company Name" className="w-full p-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#E6B65C]" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
              <input type="text" placeholder="Phone Number" className="w-full p-4 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#E6B65C]" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
            </div>

            {/* Extra Charges Inputs */}
            <div className="grid grid-cols-2 gap-3 mt-6">
               <div className="space-y-1">
                 <label className="text-[9px] font-black text-gray-400">DELIVERY (₹)</label>
                 <input type="number" className="w-full p-3 bg-gray-50 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#E6B65C]" value={deliveryCharges} onChange={(e) => setDeliveryCharges(Number(e.target.value))} />
               </div>
               <div className="space-y-1">
                 <label className="text-[9px] font-black text-gray-400">SERVICE (₹)</label>
                 <input type="number" className="w-full p-3 bg-gray-50 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#E6B65C]" value={serviceCharges} onChange={(e) => setServiceCharges(Number(e.target.value))} />
               </div>
            </div>
          </div>

          <div className="bg-[#1F1F1F] p-8 rounded-[2.5rem] text-white shadow-xl">
            <h2 className="text-lg font-black mb-6">Items & Pricing</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="space-y-2 border-b border-white/10 pb-4">
                  <input type="text" placeholder="Product Name" className="w-full bg-white/5 p-3 rounded-lg text-sm" value={item.name} onChange={(e) => { const n = [...items]; n[index].name = e.target.value; setItems(n); }} />
                  <div className="flex gap-2">
                    <input type="number" placeholder="Qty" className="w-full bg-white/5 p-3 rounded-lg text-sm" onChange={(e) => { const n = [...items]; n[index].qty = Number(e.target.value); setItems(n); }} />
                    <input type="number" placeholder="Price" className="w-full bg-white/5 p-3 rounded-lg text-sm" onChange={(e) => { const n = [...items]; n[index].price = Number(e.target.value); setItems(n); }} />
                    <button onClick={() => removeItem(index)} className="text-red-400 p-2"><FaTrash /></button>
                  </div>
                </div>
              ))}
              <button onClick={addItem} className="w-full py-3 border border-dashed border-white/20 rounded-xl text-[10px] font-black uppercase">+ Add Item</button>
            </div>
          </div>
        </div>

        {/* BILL PREVIEW */}
        <div className="lg:col-span-2 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 min-h-[850px] flex flex-col justify-between" id="printable-bill">
          <div>
            <div className="flex justify-between items-start mb-12 border-b-2 border-[#FBF7F2] pb-8">
              <div>
                <h1 className="text-4xl font-black tracking-tighter text-[#1F1F1F]">ARUSH <span className="text-[#E6B65C]">ENTERPRISES</span></h1>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Premium Poultry & Shakti-Feed [Satna]</p>
              </div>
              <div className="text-right">
                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase ${paymentMode === 'Prepaid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                   Payment: {paymentMode}
                </span>
                <p className="text-sm font-black text-[#1F1F1F] mt-3">{invoiceNo}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase">{new Date().toLocaleDateString('en-GB')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 mb-10 text-sm">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Billed To:</p>
                <p className="font-black text-[#1F1F1F] text-lg">{customerName || 'Walk-in Customer'}</p>
                <p className="text-gray-500 font-bold">{customerPhone}</p>
              </div>
            </div>

            <table className="w-full mb-10">
              <thead className="bg-[#FBF7F2] text-[10px] font-black uppercase text-[#1F1F1F]">
                <tr>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-center">Qty</th>
                  <th className="p-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item, i) => (
                  <tr key={i} className="text-sm">
                    <td className="p-4 font-bold text-gray-700">{item.name || '---'}</td>
                    <td className="p-4 text-center font-bold text-gray-500">{item.qty}</td>
                    <td className="p-4 text-right font-black">₹{item.qty * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t-2 border-[#FBF7F2] pt-6">
            <div className="flex flex-col items-end space-y-2">
              <div className="w-full max-w-[280px] space-y-2">
                <div className="flex justify-between text-[11px] font-bold text-gray-400">
                  <span>ITEMS TOTAL</span>
                  <span>₹{itemsTotal}</span>
                </div>
                {deliveryCharges > 0 && (
                  <div className="flex justify-between text-[11px] font-bold text-blue-500">
                    <span>DELIVERY CHARGES</span>
                    <span>+ ₹{deliveryCharges}</span>
                  </div>
                )}
                {serviceCharges > 0 && (
                  <div className="flex justify-between text-[11px] font-bold text-purple-500">
                    <span>SERVICE CHARGES</span>
                    <span>+ ₹{serviceCharges}</span>
                  </div>
                )}
                <div className="flex justify-between bg-[#1F1F1F] text-[#E6B65C] p-4 rounded-2xl mt-4">
                  <span className="font-black uppercase text-[10px] tracking-widest">Grand Total</span>
                  <span className="font-black text-lg">₹{grandTotal}</span>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest border-t border-dashed border-gray-100 pt-6">
              * This is a digital invoice. No GST is charged under current limits. *
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .print\:hidden { display: none !important; }
          #printable-bill { box-shadow: none !important; border: none !important; padding: 0 !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
};

export default AdminBilling;