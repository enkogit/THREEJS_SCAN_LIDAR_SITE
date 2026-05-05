import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectViewer from './ProjectViewer';

/**
 * DetailView Component
 * 
 * This is the full-screen modal that opens when a user clicks "View 3D Model"
 * on any of the Featured Projects cards.
 * 
 * It contains hardcoded optimal camera, position, scale, and tilt settings
 * for each of the four projects so they look perfect when opened.
 */
export default function DetailView({ selectedProject, onClose, isMobile }) {
  
  /**
   * getModelConfig
   * 
   * Returns the perfect default settings for each project.
   * These values were tuned manually so each model looks its best.
   */
  const getModelConfig = () => {
    switch (selectedProject) {
      case 'mining':
        return {
          path: "/models/67th_st_pit__pheonix_a_1k.glb",
          title: "67th Street Open Pit Mine",
          subtitle: "MINING • USA 2025",
          scale: 0.05,
          position: [-10, 15, 0],
          cameraPosition: [0, 28, 18],
          cameraTarget: [5, 8, 0],
          tilt: [0, -8, 0]
        };
      case 'office':
        return {
          path: "/models/headquarters_building_office_building_4k.glb",
          title: "Downtown Headquarters Tower",
          subtitle: "COMMERCIAL REAL ESTATE • CANADA 2025",
          scale: 0.06,
          position: [0, 0, 0],
          cameraPosition: [-6, 6, 16],
          cameraTarget: [0, 4, 0],
          tilt: [0, 0, 0]
        };
      case 'highway':
        return {
          path: "/models/highway_lnterchange_overpass_railway_village_4k.glb",
          title: "Major Highway Interchange",
          subtitle: "INFRASTRUCTURE • USA 2025",
          scale: 0.12,
          position: [0, -1.8, 0],
          cameraPosition: [0, 11, 15],
          cameraTarget: [0, 4.5, 0],
          tilt: [0.1, -12, 0]
        };
      case 'factory':
        return {
          path: "/models/linde_factory_industrial_installation_4k.glb",
          title: "Linde Industrial Facility",
          subtitle: "OIL & GAS • CANADA 2025",
          scale: 0.12,
          position: [0, -0.8, 0],
          cameraPosition: [0, 10, 14],
          cameraTarget: [0, 3.2, 0],
          tilt: [0.15, 4, 0]
        };
      default:
        return null;
    }
  };

  const config = getModelConfig();
  if (!config) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[#05070F]"
      >
        {/* Top navigation bar inside the modal */}
        <div className="fixed top-0 left-0 right-0 z-[110] bg-[#05070F]/95 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/scanetica_logo.png" alt="Scanetica Logo" className="h-11 w-auto drop-shadow-md" />
            </div>
            
            <button 
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/30 hover:bg-white/10 rounded-2xl text-sm font-medium transition-all"
            >
              <X size={18} /> Close
            </button>
          </div>
        </div>

        {/* 3D Viewer Area */}
        <div className="pt-20 h-screen">
          <div className="h-full">
            <ProjectViewer 
              key={selectedProject}           // Forces remount when switching projects
              modelPath={config.path}
              scale={config.scale}
              position={config.position}
              cameraPosition={config.cameraPosition}
              cameraTarget={config.cameraTarget}
              tilt={config.tilt}
              enableZoom={true}
            />
          </div>
        </div>

        {/* Mobile warning */}
        {isMobile && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] bg-black/80 text-white text-xs px-4 py-2 rounded-full border border-white/20">
            Best viewed on desktop • 3D models may be slow on mobile
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}