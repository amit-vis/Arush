"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEgg, FaBoxOpen, FaFlask, FaPlus, FaSave, FaTimes, FaEdit } from 'react-icons/fa';

const AdminInventory = () => {
  // 1. Products State (Isme naye products add honge)
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium White Eggs', category: 'Eggs', stock: 850, unit: 'Units', icon: <FaEgg />, color: 'text-[#E6B65C]' },
    { id: 2, name: 'Shakti-Feed (Calcium)', category: 'Minerals', stock: 120, unit: 'Kg', icon: <FaBoxOpen />, color: 'text-blue-500' },
    { id: 3, name: 'Liquid Growth Booster', category: 'Liquid', stock: 45, unit: 'Litre', icon: <FaFlask />, color: 'text-purple-500' },
  ]);

  // Modals Visibility States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // States for Manual Update
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [tempStockValue, setTempStockValue] = useState<string>("");

  // States for New Product Form
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Eggs");
  const [newStock, setNewStock] = useState("");
  const [newUnit, setNewUnit] = useState("");

  // --- ACTIONS ---

  // Add New Product logic
  const addNewProduct = () => {
    if (!newName || !newStock) {
      alert("Bhai, saari details bhariye!");
      return;
    }

    const newEntry = {
      id: Date.now(), // Unique ID
      name: newName,
      category: newCategory,
      stock: parseInt(newStock),
      unit: newUnit || (newCategory === 'Eggs' ? 'Units' : 'Kg'),
      icon: newCategory === 'Eggs' ? <FaEgg /> : newCategory === 'Liquid' ? <FaFlask /> : <FaBoxOpen />,
      color: newCategory === 'Eggs' ? 'text-[#E6B65C]' : newCategory === 'Liquid' ? 'text-purple-500' : 'text-blue-500'
    };

    setProducts([...products, newEntry]);
    setIsAddModalOpen(false);
    // Form reset
    setNewName(""); setNewStock(""); setNewUnit("");
  };

  // Manual Update logic
  const openManualUpdate = (product: any) => {
    setSelectedProduct(product);
    setTempStockValue(product.stock.toString());
    setIsEditModalOpen(true);
  };

  const saveManualStock = () => {
    const newVal = parseInt(tempStockValue);
    if (isNaN(newVal) || newVal < 0) return;
    setProducts(products.map(p => p.id === selectedProduct.id ? { ...p, stock: newVal } : p));
    setIsEditModalOpen(false);
  };

  return (
    <div className="p-8 bg-[#FBF7F2] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#1F1F1F]">Inventory Control</h1>
          <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-1">Arush Enterprises - Satna Unit</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)} // AB YE KAAM KAREGA!
          className="bg-[#1F1F1F] text-[#E6B65C] px-8 py-4 rounded-2xl font-black text-sm shadow-xl flex items-center gap-2 hover:scale-105 transition-all active:scale-95"
        >
          <FaPlus /> ADD NEW PRODUCT
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div layout key={product.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex justify-between mb-6">
              <div className={`text-4xl ${product.color}`}>{product.icon}</div>
              <span className="text-[10px] font-black uppercase text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{product.category}</span>
            </div>
            <h3 className="text-xl font-black text-[#1F1F1F] mb-6">{product.name}</h3>
            <div className="bg-[#FBF7F2] p-6 rounded-[2rem] flex justify-between items-center mb-6">
              <span className="text-4xl font-black text-[#1F1F1F]">{product.stock}</span>
              <span className="text-xs font-black text-gray-500 uppercase">{product.unit}</span>
            </div>
            <button onClick={() => openManualUpdate(product)} className="w-full py-5 border-2 border-[#1F1F1F]/5 text-[#1F1F1F] rounded-2xl font-black text-xs hover:bg-[#1F1F1F] hover:text-[#E6B65C] transition-all flex items-center justify-center gap-3">
              <FaEdit /> MANUALLY UPDATE STOCK
            </button>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL: ADD NEW PRODUCT --- */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[2000] flex items-center justify-center p-6">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[3rem] p-12 shadow-2xl relative"
            >
              <button onClick={() => setIsAddModalOpen(false)} className="absolute top-8 right-8 text-gray-400 hover:text-red-500"><FaTimes size={24} /></button>
              <h2 className="text-2xl font-black text-[#1F1F1F] mb-8 text-center">New Product Entry</h2>
              
              <div className="space-y-5">
                <input type="text" placeholder="Product Name (e.g. Liquid XL)" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full p-5 bg-[#FBF7F2] rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C]" />
                
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-full p-5 bg-[#FBF7F2] rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C] font-bold">
                  <option value="Eggs">Eggs</option>
                  <option value="Minerals">Minerals/Calcium</option>
                  <option value="Liquid">Liquid</option>
                </select>

                <div className="flex gap-4">
                  <input type="number" placeholder="Initial Stock" value={newStock} onChange={(e) => setNewStock(e.target.value)} className="flex-1 p-5 bg-[#FBF7F2] rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C]" />
                  <input type="text" placeholder="Unit (Kg/Units)" value={newUnit} onChange={(e) => setNewUnit(e.target.value)} className="w-32 p-5 bg-[#FBF7F2] rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C]" />
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button onClick={() => setIsAddModalOpen(false)} className="flex-1 py-5 font-black text-gray-400 uppercase text-[10px]">Cancel</button>
                <button onClick={addNewProduct} className="flex-1 py-5 bg-[#1F1F1F] text-[#E6B65C] rounded-2xl font-black uppercase text-[10px] shadow-lg">Save & Add</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: MANUAL UPDATE --- */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[2000] flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-[3rem] p-12 shadow-2xl text-center"
            >
              <div className={`text-5xl mb-6 flex justify-center ${selectedProduct?.color}`}>{selectedProduct?.icon}</div>
              <h2 className="text-2xl font-black text-[#1F1F1F] mb-8">Update Stock: {selectedProduct?.name}</h2>
              <input type="number" value={tempStockValue} onChange={(e) => setTempStockValue(e.target.value)} className="w-full bg-[#FBF7F2] p-6 rounded-2xl text-4xl font-black text-center outline-none border-2 border-transparent focus:border-[#E6B65C]" />
              <div className="flex gap-4 mt-10">
                <button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-5 font-black text-gray-400 uppercase text-[10px]">Discard</button>
                <button onClick={saveManualStock} className="flex-1 py-5 bg-[#E6B65C] text-[#1F1F1F] rounded-2xl font-black uppercase text-[10px]">Update Now</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminInventory;