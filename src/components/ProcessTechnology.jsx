import React from 'react';

/**
 * ProcessTechnology Component
 * Explains how we capture data + best technology for each use case + Digital Twin value.
 */
export default function ProcessTechnology() {
  const technologies = [
    {
      title: "Terrestrial LiDAR",
    //   icon: "📡",
      bestFor: "Indoor facilities, detailed as-built documentation, complex industrial environments",
      accuracy: "±2mm",
      description: "Ground-based laser scanning delivers the highest precision for factories, refineries, and buildings. Perfect for creating accurate digital twins of existing infrastructure."
    },
    {
      title: "Drone Footage",
    //   icon: "🚁",
      bestFor: "Mining pits, dense vegetation, large infrastructure, forested terrain",
      accuracy: "±5-15mm",
      description: "Drone-mounted Camera / LiDAR captures large areas quickly. Ideal for open-pit mines, highways, and sites with heavy tree cover."
    },
    {
      title: "Photogrammetry",
    //   icon: "📷",
      bestFor: "Construction progress, real estate, open sites, photorealistic models",
      accuracy: "±50-100mm",
      description: "Cost-effective and fast. Creates highly detailed, textured 3D models with realistic colors. Best for visual documentation and marketing materials."
    }
  ];

  return (
    <section className="bg-[#05070F] py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">OUR PROCESS</div>
          <h3 className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
            Precision Capture.<br />Intelligent Delivery.
          </h3>
          <p className="max-w-3xl mx-auto text-2xl text-[#C8D0FF]">
            We combine the right technology for each project to deliver the highest quality data and true   .
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-zinc-950 border border-white/10 rounded-3xl p-10 hover:border-[#00F0FF]/50 transition-all group">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">{tech.title}</h3>
              <div className="text-sm text-[#00F0FF] font-mono tracking-widest mb-4">ACCURACY: {tech.accuracy}</div>
              
              <div className="mb-6">
                <div className="text-[#C8D0FF] text-sm font-semibold mb-2">BEST FOR:</div>
                <p className="text-[#E0E7FF] leading-relaxed">{tech.bestFor}</p>
              </div>
              
              <p className="text-[#C8D0FF] text-[15px] leading-relaxed border-t border-white/10 pt-6">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Digital Twin Value Proposition */}
        <div className="max-w-4xl mx-auto text-center bg-zinc-950 border border-white/10 rounded-3xl p-16">
          <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">THE SCANETICA DIFFERENCE</div>
          <h4 className="text-5xl font-semibold tracking-tighter text-white mb-8">True Digital Twins, Not Just Pretty Models</h4>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-xl mb-3 text-white">What We Deliver</h4>
              <ul className="space-y-3 text-[#C8D0FF]">
                <li className="flex items-start gap-3">✓ Survey-grade accuracy (not just visual models)</li>
                <li className="flex items-start gap-3">✓ BIM-ready deliverables (Revit, Navisworks, IFC)</li>
                <li className="flex items-start gap-3">✓ Clean, classified point clouds</li>
                <li className="flex items-start gap-3">✓ Interactive web-based twins</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-3 text-white">How Top Companies Use Them</h4>
              <ul className="space-y-3 text-[#C8D0FF]">
                <li className="flex items-start gap-3">• Predictive maintenance &amp; asset management</li>
                <li className="flex items-start gap-3">• Construction simulation &amp; clash detection</li>
                <li className="flex items-start gap-3">• Training &amp; safety planning</li>
                <li className="flex items-start gap-3">• Carbon tracking &amp; sustainability reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}