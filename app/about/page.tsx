import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-[#1F1F1F]">
        {/* Background Overlay or Image */}
        <div className="absolute inset-0 opacity-40">
           {/* You can place a background image of the farm here */}
           <Image 
             src="/images/farm-bg.jpg" // Placeholder for farm image
             alt="Poultry Farm Background"
             fill
             className="object-cover"
           />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="text-[#E6B65C] font-bold uppercase tracking-[0.2em] mb-4">
            The Arush Philosophy
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Redefining Nutrition in <br/>
            <span className="text-[#E6B65C]">Satna & Ghoordang</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            From our farm to your family—bringing you eggs that are clean, safe, and packed with health.
          </p>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY */}
      <section className="py-20 px-6 md:px-12 container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16">
          
          {/* Left: Image Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-100">
               <Image src="/images/egg-tray.jpg" alt="Fresh Eggs" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-100 mt-8">
               <Image src="/images/chicken-farm.jpg" alt="Healthy Hens" fill className="object-cover" />
            </div>
          </div>

          {/* Right: The Narrative */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#1F1F1F]">
              It Started With a Simple Question.
            </h3>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              For years, we observed a gap in the local market. The eggs available were often dirty, old, and handled without basic hygiene. Families in Satna deserved better, but there was no reliable source for 100% safe nutrition.
            </p>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              That’s when <strong>Arush</strong> was born.
            </p>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              We decided to build a system where quality isn't just a promise—it's a process. By integrating modern farming techniques with strict hygiene protocols, we ensure that every egg leaving our facility is <strong>UV-Sanitized, Clean, and Nutrient-Rich.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES (Cards) */}
      <section className="py-20 bg-[#FBF7F2]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h4 className="text-[#E6B65C] font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-12">The Arush Standard</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">UV Sanitized</h3>
              <p className="text-gray-600">
                We use advanced UV light technology to kill bacteria on the shell surface, ensuring your food is safe to touch and eat.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">Farm Fresh</h3>
              <p className="text-gray-600">
                No middlemen, no long storage. Our eggs travel directly from our farm in Ghoordang to your kitchen within hours.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#E6B65C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">100% Transparent</h3>
              <p className="text-gray-600">
                We believe you have the right to know what you eat. We maintain complete transparency in our feed and packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SECTION */}
      <section className="py-20 px-6 md:px-12 container mx-auto">
        <div className="bg-[#1F1F1F] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
          
          {/* Founder Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
             <Image 
                src="/about/myphoto.png" 
                alt="Amit Vishwakarma"
                fill
                className="object-cover rounded-full border-4 border-[#E6B65C]"
             />
          </div>

          {/* Founder Quote */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">A Note from the Founder</h3>
            <p className="text-[#E6B65C] font-medium mb-6">Amit Vishwakarma</p>
            
            <blockquote className="text-lg md:text-2xl italic leading-relaxed text-gray-300 font-serif">
              "My vision is simple: To provide the kind of quality to Satna that I would want for my own family. When you buy Arush, you aren't just buying eggs; you are buying a promise of purity."
            </blockquote>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;