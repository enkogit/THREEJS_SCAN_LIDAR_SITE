import React from 'react';

/**
 * TrustBar Component
 * Shows logos of major clients + short trust signals.
 */
export default function TrustBar() {
  const clients = [
    { name: "Forge Refining", logo: "/img/ForgeRefining.png" },
    { name: "Vanguard Mining", logo: "/img/VanguardMining.png" },
    { name: "Nexus Contractors", logo: "/img/NexusContractors.png" },
    { name: "Vortex Life Sciences", logo: "/img/VortexLifeSciences.png" },
    { name: "Atlas Meridian", logo: "/img/AtlasMeridian.png" },
  ];

  return (
    <div className="bg-black border-y border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-[#C8D0FF] text-sm tracking-[3px] font-medium">TRUSTED BY INDUSTRY LEADERS</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-80">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <span className="text-xs text-white/40 mt-2 tracking-widest">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}