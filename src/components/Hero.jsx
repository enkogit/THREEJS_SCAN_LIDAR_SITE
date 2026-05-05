import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Component
 * 
 * The main landing section with the full-screen video background,
 * headline, subheadline, and call-to-action buttons.
 * 
 * This is the first thing visitors see when they land on the site.
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      
      {/* Full-screen background video (LiDAR scan footage) */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/lidar_scan_video_color.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-[#05070F]/55 z-10" />

      {/* Main content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 text-sm border border-white/20">
          <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse" /> 
          Serving USA & Canada Nationwide 
          <div className="flex items-center gap-1 ml-1">
            <img src="/US.png" alt="USA Flag" className="h-4 w-auto rounded-sm" />
            <img src="/CAN.png" alt="Canada Flag" className="h-4 w-auto rounded-sm" />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-[92px] md:text-[120px] font-semibold tracking-[-6px] leading-none mb-4 text-white">
          3D Laser Scanning<br />Services
        </h1>
        
        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-2xl text-[#C8D0FF] mb-12">
          Professional LiDAR scanning, photogrammetry & digital twin solutions 
          for industrial, oil & gas, manufacturing and commercial real estate across the USA and Canada.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-4 bg-[#00F0FF] text-[#05070F] font-semibold rounded-3xl text-xl flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-[0.985]"
          >
            Get a Custom Quote 
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </button>
          
          <button 
            onClick={() => document.getElementById('technology').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/30 hover:bg-white/10 rounded-3xl text-xl transition-all text-white"
          >
            Explore Our Technology
          </button>
        </div>
      </div>
    </section>
  );
}