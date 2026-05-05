import React from 'react';

/**
 * FeaturedProjects Component
 * 
 * Displays the four featured 3D scanning projects with images and 
 * "View 3D Model" buttons that open the DetailView modal.
 */
export default function FeaturedProjects({ onProjectClick }) {
  const projects = [
    {
      id: 'mining',
      image: "/models/67th_st_pit__pheonix_a_1k.png",
      category: "MINING • USA 2025",
      title: "67th Street Open Pit Mine",
      description: "High-resolution photogrammetry scan of a large open-pit copper mine in Phoenix, Arizona."
    },
    {
      id: 'office',
      image: "/models/headquarters_building_office_building_1k.png",
      category: "COMMERCIAL REAL ESTATE • CANADA 2025",
      title: "Downtown Headquarters Tower",
      description: "Complete as-built photogrammetry scan of a 28-story office headquarters in Toronto."
    },
    {
      id: 'highway',
      image: "/models/highway_lnterchange_overpass_railway_village_1k.png",
      category: "INFRASTRUCTURE • USA 2025",
      title: "Major Highway Interchange",
      description: "Large-scale LiDAR + photogrammetry scan of a complex highway interchange in Chicago."
    },
    {
      id: 'factory',
      image: "/models/linde_factory_industrial_installation_1k.png",
      category: "OIL & GAS • CANADA 2025",
      title: "Linde Industrial Facility",
      description: "Detailed photogrammetry scan of a major industrial gas processing facility in Alberta."
    }
  ];

  return (
    <section id="cases" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">REAL RESULTS</div>
        <h2 className="text-7xl font-semibold tracking-tighter text-white">Featured 3D Scanning Projects</h2>
        <p className="mt-4 text-xl text-[#C8D0FF] max-w-2xl mx-auto">
          Real-world photogrammetry and LiDAR projects delivered across North America
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden rounded-3xl h-[520px] bg-zinc-950 border border-white/10 flex flex-col"
          >
            {/* Project Image */}
            <div className="h-[320px] bg-black relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="p-8 flex-1 flex flex-col text-center md:text-left">
              <div className="text-[#00F0FF] text-sm tracking-widest mb-2">{project.category}</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">{project.title}</h3>
              <p className="text-[#C8D0FF] text-lg flex-1 mb-6">{project.description}</p>
              
              <button 
                onClick={() => onProjectClick(project.id)}
                className="mt-auto w-full py-3.5 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold rounded-2xl text-lg transition-all active:scale-[0.985] flex items-center justify-center gap-2"
              >
                View 3D Model <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}