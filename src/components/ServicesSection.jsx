import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

/**
 * ServicesSection Component
 * 
 * Displays our three main service offerings in a clean card layout.
 */
export default function ServicesSection() {
  const services = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Industrial 3D Laser Scanning",
      desc: "Refineries, manufacturing plants, pipelines and heavy infrastructure with millimeter precision."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Digital Twin Creation",
      desc: "Interactive 3D digital twins with real-time data integration for smart facility management."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Commercial & Real Estate",
      desc: "As-built documentation, renovations, and facility management for commercial properties."
    }
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">OUR EXPERTISE</div>
        <h2 className="text-7xl font-semibold tracking-tighter text-white">Professional 3D Scanning Services</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#00F0FF]/60 transition-all duration-300"
          >
            <div className="text-[#00F0FF] mb-10 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-4xl font-semibold tracking-tight mb-5 text-white">{service.title}</h3>
            <p className="text-xl text-[#C8D0FF] leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}