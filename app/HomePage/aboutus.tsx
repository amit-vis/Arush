// import React from 'react';
// import Image from 'next/image';

// const AboutSection = () => {
//   return (
//     <section className="w-full py-16 bg-[#FBF7F2] text-[#1F1F1F]">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="flex flex-col md:flex-row items-center gap-12">
          
//           {/* Left Side: Text Content */}
//           <div className="md:w-1/2 space-y-6">
//             <h4 className="text-[#E6B65C] font-bold uppercase tracking-widest text-sm">
//               Our Story
//             </h4>
//             <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
//               Bringing Pure Nutrition to <br />
//               <span className="text-[#E6B65C]">Ghoordang & Satna</span>
//             </h2>
            
//             <p className="text-[#6B6B6B] leading-relaxed text-lg">
//               "Maine hamesha dekha hai ki market mein milne wale ande aksar gande aur purane hote hain. 
//               Humein pata hi nahi chalta ki hum kya kha rahe hain. 
//               Mera sapna tha ek aisa brand banane ka jo 100% <strong>Transparent</strong> aur <strong>Hygienic</strong> ho."
//             </p>

//             <p className="text-[#6B6B6B] leading-relaxed text-lg">
//               Aaj, <strong>Arush Eggs & Minerals</strong> ke zariye hum 
//               UV-Sanitized aur Date-Stamped ande seedha farm se aapke ghar tak pahunchate hain.
//             </p>

//             <div className="pt-4 border-l-4 border-[#E6B65C] pl-4 mt-6">
//               <h3 className="text-xl font-bold font-heading">Amit Vishwakarma</h3>
//               <p className="text-sm text-[#6B6B6B]">Founder & Owner</p>
//             </div>
//           </div>

//           {/* Right Side: Image (Placeholder for now) */}
//           <div className="md:w-1/2 relative">
//             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
//               {/* Yahan Amit ji ki ya Farm ki photo lagana */}
//               <div className="absolute inset-0 bg-[#E6B65C]/20 z-10"></div> {/* Golden Overlay */}
//               <Image 
//                 src="/amit-founder.jpg" // Apni image ka path yahan dena
//                 alt="Amit Vishwakarma - Founder of Arush"
//                 fill
//                 className="object-cover"
//               />
//             </div>
            
//             {/* Location Badge */}
//             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block">
//               <div className="flex items-center gap-3">
//                 <div className="bg-[#E6B65C] p-2 rounded-full text-white">
//                   📍
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 uppercase font-bold">Headquarters</p>
//                   <p className="font-bold text-[#1F1F1F]">Ghoordang, Satna (M.P.)</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutTeaser = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Founder Image */}
          <div className="md:w-1/2 relative order-2 md:order-1">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#FBF7F2]">
              <Image 
                src="/images/amit-founder-professional.jpg" 
                alt="Amit Vishwakarma - Arush Founder"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4 bg-[#E6B65C] text-white px-4 py-2 rounded-lg shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider">Satna's Own Brand</p>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="md:w-1/2 space-y-6 order-1 md:order-2">
            <h4 className="text-[#E6B65C] font-bold uppercase tracking-widest text-sm">
              Our Vision
            </h4>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F1F1F] leading-tight">
              Bringing Pure Nutrition to <br/>
              <span className="text-[#E6B65C]">Your Doorstep.</span>
            </h2>
            
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              "We realized that finding clean, fresh eggs in the market was a struggle. Most were unhygienic or old. 
              That’s why we started <strong>Arush</strong> — with a simple promise: to deliver <strong>UV-Sanitized</strong>, farm-fresh nutrition that you can trust blindly."
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link href="/about" className="group flex items-center gap-2 text-[#1F1F1F] font-bold hover:text-[#E6B65C] transition-colors">
                Read Our Story
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;