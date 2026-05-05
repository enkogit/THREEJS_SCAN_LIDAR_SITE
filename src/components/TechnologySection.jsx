import React from 'react';
import ProjectViewer from './ProjectViewer';

/**
 * TechnologySection Component
 * 
 * Showcases our advanced LiDAR & Photogrammetry technology with a live 3D model
 * of a thermal power plant chimney as a demonstration.
 */
export default function TechnologySection() {
  return (
    <section id="technology" className="bg-black py-24 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-12 md:grid md:grid-cols-2 md:items-center md:text-left md:gap-16">
          
          {/* Left side - Text content */}
          <div>
            <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">ADVANCED TECHNOLOGY</div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-6 md:mb-8 text-white">
              LiDAR & Photogrammetry<br />for Digital Twins
            </h2>
            <p className="text-xl md:text-2xl text-[#C8D0FF] mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              We combine survey-grade terrestrial LiDAR, drone photogrammetry, and advanced processing software to deliver 
              precise 3D scanning results and digital twins across the USA and Canada.
            </p>
            
            {/* Technology tags */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Leica RTC360", "Trimble X12", "FARO Focus Premium", "DJI Matrice LiDAR", "RealityCapture", "Autodesk BIM 360"].map((tech, i) => (
                <div key={i} className="px-5 py-2 bg-white/10 rounded-full text-sm border border-white/10">{tech}</div>
              ))}
            </div>
          </div>

          {/* Right side - 3D Model Viewer */}
          <div className="h-[520px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black">
            <ProjectViewer 
              modelPath="/models/thermal_power_plant_chimney_1k.glb"
              scale={0.1}
              position={[5, -1, -5]}
              cameraPosition={[0, 12, 14]}
              cameraTarget={[0, 4, 0]}
              tilt={[0, 0, 0]}
              enableZoom={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}