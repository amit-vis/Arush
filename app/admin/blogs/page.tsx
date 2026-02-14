"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus, FaImage, FaSearch, FaTimes, FaSave, FaUpload } from 'react-icons/fa';

const AdminBlogs = () => {
  // Existing Blogs State
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Benefits of Fresh Farm Eggs', category: 'Health', content: 'Sample content...', author: 'Amit', tags: 'eggs, health', date: '12 Feb 2026', status: 'Published' },
    { id: 2, title: 'How Calcium Boosts Poultry Growth', category: 'Shakti-Feed', content: 'Sample content...', author: 'Amit', tags: 'calcium', date: '10 Feb 2026', status: 'Draft' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Blog Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Eggs',
    author: 'Amit Vishwakarma',
    content: '',
    image: null as File | null,
    imageUrl: '',
    tags: ''
  });

  // --- ACTIONS ---

  const openCreateModal = () => {
    setEditingId(null);
    setFormData({ title: '', category: 'Eggs', author: 'Amit Vishwakarma', content: '', image: null, imageUrl: '', tags: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (blog: any) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      category: blog.category,
      author: blog.author || 'Amit Vishwakarma',
      content: blog.content,
      image: null,
      imageUrl: blog.image || '',
      tags: blog.tags || ''
    });
    setIsModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSave = () => {
    if (!formData.title || !formData.content) {
      alert("Bhai, Title aur Content zaroori hai!");
      return;
    }

    if (editingId) {
      // Update Logic
      setBlogs(blogs.map(b => b.id === editingId ? { ...b, ...formData, title: formData.title } : b));
    } else {
      // Create Logic
      const newEntry = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString('en-GB'),
        status: 'Published'
      };
      setBlogs([newEntry, ...blogs]);
    }
    setIsModalOpen(false);
  };

  const deleteBlog = (id: number) => {
    if(confirm("Kya aap sach mein ye blog delete karna chahte hain?")) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  return (
    <div className="p-8 bg-[#FBF7F2] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#1F1F1F]">Blog Control</h1>
          <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-1">Arush Enterprises Content Manager</p>
        </div>
        <button onClick={openCreateModal} className="bg-[#1F1F1F] text-[#E6B65C] px-8 py-4 rounded-2xl font-black text-sm shadow-xl flex items-center gap-2 hover:scale-105 transition-all">
          <FaPlus /> CREATE NEW POST
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 text-[10px] font-black uppercase text-gray-400">
            <tr>
              <th className="p-6">Title</th>
              <th className="p-6 text-center">Category</th>
              <th className="p-6 text-center">Date</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50/30 transition-all">
                <td className="p-6 font-black text-[#1F1F1F] text-sm">{blog.title}</td>
                <td className="p-6 text-center">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase">{blog.category}</span>
                </td>
                <td className="p-6 text-center text-xs text-gray-400 font-bold">{blog.date}</td>
                <td className="p-6 text-right space-x-2">
                  <button onClick={() => openEditModal(blog)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"><FaEdit /></button>
                  <button onClick={() => deleteBlog(blog.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-all"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- CREATE / EDIT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[2000] flex items-center justify-center p-6">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-gray-400 hover:text-red-500"><FaTimes size={24} /></button>
              <h2 className="text-2xl font-black text-[#1F1F1F] mb-8">{editingId ? 'Edit Blog Post' : 'Create New Post'}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Title</label>
                    <input type="text" className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#E6B65C]" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Category</label>
                    <select className="w-full p-4 bg-gray-50 rounded-2xl font-bold outline-none" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                      <option value="Eggs">Fresh Eggs</option>
                      <option value="Shakti-Feed">Shakti-Feed (Calcium)</option>
                      <option value="Health">Poultry Health</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Featured Image</label>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 flex items-center justify-center gap-2 p-4 bg-[#FBF7F2] border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 font-bold text-xs hover:border-[#E6B65C] transition-all"
                      >
                        <FaUpload /> {formData.image ? formData.image.name : 'Upload File'}
                      </button>
                      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Tags</label>
                    <input type="text" className="w-full p-4 bg-gray-50 rounded-2xl outline-none" placeholder="eggs, farm, satna" value={formData.tags} onChange={(e) => setFormData({...formData, tags: e.target.value})} />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Content</label>
                <textarea rows={6} className="w-full p-6 bg-gray-50 rounded-[2rem] outline-none focus:ring-2 focus:ring-[#E6B65C] resize-none" value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})}></textarea>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-5 font-black text-gray-400 uppercase text-[10px]">Discard</button>
                <button onClick={handleSave} className="flex-1 py-5 bg-[#1F1F1F] text-[#E6B65C] rounded-2xl font-black uppercase text-[10px] shadow-xl flex items-center justify-center gap-2">
                  <FaSave /> {editingId ? 'Save Changes' : 'Publish Blog'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminBlogs;