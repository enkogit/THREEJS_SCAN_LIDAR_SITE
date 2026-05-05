import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import all components
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import DetailView from './components/DetailView';
import Hero from './components/Hero';
import AdvancedTechnology from './components/AdvancedTechnology';
import TrustBar from './components/TrustBar';
import ProcessTechnology from './components/ProcessTechnology';
import Testimonials from './components/Testimonials';
import TechnologySection from './components/TechnologySection';
import ServicesSection from './components/ServicesSection';
import FeaturedProjects from './components/FeaturedProjects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingProgress from './components/LoadingProgress';

/**
 * App.jsx - Main Application Component
 * 
 * This is the root component of the Scanetica website.
 * It manages global state (mobile detection, selected project, loading, login modal)
 * and composes all the smaller components together.
 */
export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  // Detect if user is on mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate page loading progress bar
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        setTimeout(() => setIsPageLoading(false), 400);
        clearInterval(interval);
      } else {
        setLoadProgress(Math.min(progress, 100));
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Preload all 3D models for faster loading later
  useEffect(() => {
    const preloadModels = async () => {
      const models = [
        "/models/67th_st_pit__pheonix_a_1k.glb",
        "/models/headquarters_building_office_building_4k.glb",
        "/models/highway_lnterchange_overpass_railway_village_4k.glb",
        "/models/linde_factory_industrial_installation_4k.glb"
      ];
      
      // Preload using drei's useGLTF
      const { useGLTF } = await import('@react-three/drei');
      models.forEach(model => useGLTF.preload(model));
    };
    
    preloadModels();
  }, []);

  return (
    <div className="bg-[#05070F] text-[#E0E7FF] overflow-hidden">
      
      {/* Top loading progress bar */}
      <LoadingProgress isLoading={isPageLoading} progress={loadProgress} />

      {/* Fixed Navigation Bar */}
      <Navbar onLoginClick={() => setShowLogin(true)} />

      {/* All main sections */}
      <Hero />
      <AdvancedTechnology />
      <TrustBar />
      <ProcessTechnology />
      {/* <Testimonials /> */}
      {/* <ServicesSection /> */}
      <FeaturedProjects onProjectClick={setSelectedProject} />
      <ContactSection />
      <Footer />

      {/* Detail View Modal (opens when user clicks a project) */}
      <AnimatePresence>
        {selectedProject && (
          <DetailView 
            selectedProject={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            isMobile={isMobile} 
          />
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </div>
  );
}