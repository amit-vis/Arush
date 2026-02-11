import React from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-12 px-6 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-white text-3xl font-bold italic tracking-wider font-heading">
              ARUSH<span className="text-[#E6B65C]">.</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing premium poultry solutions—from farm-fresh eggs to high-quality 
              liquid eggs and essential minerals. Pure, nutrient-rich, and delivered 
              directly to you in Satna.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-[#E6B65C] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#E6B65C] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#E6B65C] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-4px] left-0 w-10 h-1 bg-[#E6B65C] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-[#E6B65C] transition-colors flex items-center gap-2">Home</a></li>
              <li><a href="/products" className="hover:text-[#E6B65C] transition-colors flex items-center gap-2">Our Products</a></li>
              <li><a href="/about" className="hover:text-[#E6B65C] transition-colors flex items-center gap-2">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#E6B65C] transition-colors flex items-center gap-2">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us (Corrected Layout) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-4px] left-0 w-10 h-1 bg-[#E6B65C] rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#E6B65C] mt-1 flex-shrink-0" size={18} />
                <span>
                  <strong>Arush Eggs & Minerals</strong><br/>
                  Near Main Road,<br/>
                  Ghoordang, Satna (M.P.) - 485001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#E6B65C] flex-shrink-0" size={18} />
                <span>+91 999xxxxxxx</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#E6B65C] flex-shrink-0" size={18} />
                <span>amit@arusheggs.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: CTA & Compliance */}
          <div className="flex flex-col space-y-6">
            
            {/* Order Button */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Order Fresh</h3>
              <a 
                href="https://wa.me/91999xxxxxxx" 
                target="_blank" 
                className="flex items-center justify-center gap-2 bg-[#E6B65C] hover:bg-[#d4a44c] text-[#121212] font-bold py-3 px-4 rounded-lg transition-all shadow-lg transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
            </div>

            {/* Compliance Badge */}
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">License Info</p>
              <div className="bg-[#1F1F1F] p-3 rounded border border-gray-700">
                <p className="text-gray-300 font-mono text-xs tracking-wide">
                  <span className="text-[#E6B65C] font-bold">FSSAI:</span> 2XXXXXXXXXXXXX
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2026 Arush Eggs & Minerals. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#E6B65C]">Privacy Policy</a>
            <a href="#" className="hover:text-[#E6B65C]">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;