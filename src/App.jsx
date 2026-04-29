import React, { useMemo, useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight, Target, Zap, Users, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// SECTION 1: 3D MODEL VIEWER
// ============================================
function ProjectViewer({ modelPath, scale = 0.5, position = [0, -1, 0], cameraPosition = [0, 9, 13], cameraTarget = [0, 3, 0], tilt = [0, 0, 0], enableZoom = false }) {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas camera={{ position: cameraPosition, fov: 44 }} style={{ background: '#000000' }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[12, 16, 6]} intensity={1.5} />
      
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-3 text-white">
            <Loader2 className="w-8 h-8 animate-spin text-[#00F0FF]" />
            <p className="text-sm">Loading 3D Model...</p>
          </div>
        </div>
      }>
        <primitive object={scene} scale={scale} position={position} rotation={tilt} />
      </Suspense>
      
      <OrbitControls autoRotate autoRotateSpeed={0.14} enableZoom={enableZoom} target={cameraTarget} />
    </Canvas>
  );
}

// ============================================
// SECTION 2: DETAIL VIEW (Moved Outside - This is the key fix)
// ============================================
function DetailView({ selectedProject, onClose, isMobile }) {
  const getModelConfig = () => {
    switch (selectedProject) {
      case 'mining':
        return {
          path: "/models/67th_st_pit__pheonix_a_1k.glb",
          title: "67th Street Open Pit Mine",
          subtitle: "MINING • USA 2025",
          scale: 0.30,
          position: [0, 0, 0],
          cameraPosition: [-10, 10, 5],
          cameraTarget: [0, 0, 0],
          tilt: [0, 0, 0]
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

        <div className="pt-20 h-screen">
          <div className="h-full">
            <ProjectViewer 
              key={selectedProject}           // Extra safety
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

        {isMobile && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] bg-black/80 text-white text-xs px-4 py-2 rounded-full border border-white/20">
            Best viewed on desktop • 3D models may be slow on mobile
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================
// SECTION 3: NAVIGATION BAR
// ============================================
function Navbar({ onLoginClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070F]/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <img src="/scanetica_logo.png" alt="Scanetica Logo" className="h-11 w-auto drop-shadow-md" />
        </div>

        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          <button onClick={() => scrollTo('services')} className="hover:text-[#00F0FF] transition-colors">Services</button>
          <button onClick={() => scrollTo('technology')} className="hover:text-[#00F0FF] transition-colors">Technology</button>
          <button onClick={() => scrollTo('cases')} className="hover:text-[#00F0FF] transition-colors">Case Studies</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-[#00F0FF] transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('contact')} className="px-5 py-2 text-sm font-medium border border-white/30 hover:bg-white/10 rounded-2xl transition-all active:scale-95">
            Get a Quote
          </button>
          <button 
            onClick={onLoginClick}
            className="px-5 py-2 text-sm font-medium border border-white/30 hover:bg-white/10 rounded-2xl transition-all active:scale-95"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// SECTION 4: MAIN APP
// ============================================
export default function ScaneticaSite() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial page load progress bar
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

  // Preload 3D models
  useEffect(() => {
    useGLTF.preload("/models/67th_st_pit__pheonix_a_1k.glb");
    useGLTF.preload("/models/headquarters_building_office_building_4k.glb");
    useGLTF.preload("/models/highway_lnterchange_overpass_railway_village_4k.glb");
    useGLTF.preload("/models/linde_factory_industrial_installation_4k.glb");
  }, []);

  // ============================================
  // LOGIN MODAL
  // ============================================
  const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      console.log('Login attempt:', { email, password });
      alert('Login functionality coming soon! (Backend integration in progress)');
      setShowLogin(false);
    };

    return (
      <AnimatePresence>
        {showLogin && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#05070F] border border-white/20 rounded-3xl w-full max-w-md mx-4 overflow-hidden"
            >
              <div className="flex items-center justify-between p-8 border-b border-white/10">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">Welcome back</h3>
                  <p className="text-[#C8D0FF] mt-1">Sign in to your customer portal</p>
                </div>
                <button onClick={() => setShowLogin(false)} className="text-white/60 hover:text-white transition">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleLogin} className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#C8D0FF] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/20 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-[#00F0FF] text-lg placeholder:text-white/40"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C8D0FF] mb-2">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/20 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-[#00F0FF] text-lg placeholder:text-white/40"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex justify-end">
                  <button type="button" className="text-sm text-[#00F0FF] hover:underline">
                    Forgot password?
                  </button>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold text-xl rounded-3xl transition-all active:scale-[0.985] mt-2"
                >
                  Sign In
                </button>
              </form>

              <div className="px-8 pb-8 text-center text-sm text-[#C8D0FF]">
                Don't have an account?{' '}
                <button className="text-[#00F0FF] hover:underline font-medium">Create one</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="bg-[#05070F] text-[#E0E7FF] overflow-hidden">
      
      {/* INITIAL PAGE LOAD PROGRESS BAR */}
      <AnimatePresence>
        {isPageLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#05070F] flex items-center justify-center"
          >
            <div className="w-full max-w-md px-6">
              <div className="flex items-center gap-3 mb-4">
                <img src="/scanetica_logo.png" alt="Scanetica Logo" className="h-8 w-auto" />
              </div>
              
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                <motion.div 
                  className="h-full bg-[#00F0FF] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              
              <div className="flex justify-between text-xs text-white/50">
                <span>Loading experience...</span>
                <span>{Math.floor(loadProgress)}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar onLoginClick={() => setShowLogin(true)} />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/lidar_scan_video_color.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#05070F]/55 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 text-sm border border-white/20">
            <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse" /> 
            Serving USA & Canada Nationwide 
            <div className="flex items-center gap-1 ml-1">
              <img src="/US.png" alt="USA Flag" className="h-4 w-auto rounded-sm" />
              <img src="/CAN.png" alt="Canada Flag" className="h-4 w-auto rounded-sm" />
            </div>
          </div>
          
          <h1 className="text-[92px] md:text-[120px] font-semibold tracking-[-6px] leading-none mb-4 text-white">
            3D Laser Scanning<br />Services
          </h1>
          
          <p className="max-w-2xl mx-auto text-2xl text-[#C8D0FF] mb-12">
            Professional LiDAR scanning, photogrammetry & digital twin solutions 
            for industrial, oil & gas, manufacturing and commercial real estate across the USA and Canada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                    className="group px-10 py-4 bg-[#00F0FF] text-[#05070F] font-semibold rounded-3xl text-xl flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-[0.985]">
              Get a Custom Quote <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            
            <button onClick={() => document.getElementById('technology').scrollIntoView({ behavior: 'smooth' })} 
                    className="px-10 py-4 border border-white/30 hover:bg-white/10 rounded-3xl text-xl transition-all text-white">
              Explore Our Technology
            </button>
          </div>
        </div>
      </section>

      {/* ADVANCED TECHNOLOGY SECTION */}
      <section id="technology" className="bg-black py-24 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-12 md:grid md:grid-cols-2 md:items-center md:text-left md:gap-16">
            <div>
              <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">ADVANCED TECHNOLOGY</div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-6 md:mb-8 text-white">
                LiDAR & Photogrammetry<br />for Digital Twins
              </h2>
              <p className="text-xl md:text-2xl text-[#C8D0FF] mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
                We combine survey-grade terrestrial LiDAR, drone photogrammetry, and advanced processing software to deliver 
                precise 3D scanning results and digital twins across the USA and Canada.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {["Leica RTC360", "Trimble X12", "FARO Focus Premium", "DJI Matrice LiDAR", "RealityCapture", "Autodesk BIM 360"].map((tech, i) => (
                  <div key={i} className="px-5 py-2 bg-white/10 rounded-full text-sm border border-white/10">{tech}</div>
                ))}
              </div>
            </div>

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

      {/* OUR EXPERTISE SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">OUR EXPERTISE</div>
          <h2 className="text-7xl font-semibold tracking-tighter text-white">Professional 3D Scanning Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Target className="w-10 h-10" />, title: "Industrial 3D Laser Scanning", desc: "Refineries, manufacturing plants, pipelines and heavy infrastructure with millimeter precision." },
            { icon: <Zap className="w-10 h-10" />, title: "Digital Twin Creation", desc: "Interactive 3D digital twins with real-time data integration for smart facility management." },
            { icon: <Users className="w-10 h-10" />, title: "Commercial & Real Estate", desc: "As-built documentation, renovations, and facility management for commercial properties." },
          ].map((service, index) => (
            <div key={index} className="group bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#00F0FF]/60 transition-all duration-300">
              <div className="text-[#00F0FF] mb-10 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-5 text-white">{service.title}</h3>
              <p className="text-xl text-[#C8D0FF] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="cases" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[#00F0FF] text-sm tracking-[4px] font-medium mb-4">REAL RESULTS</div>
          <h2 className="text-7xl font-semibold tracking-tighter text-white">Featured 3D Scanning Projects</h2>
          <p className="mt-4 text-xl text-[#C8D0FF] max-w-2xl mx-auto">
            Real-world photogrammetry and LiDAR projects delivered across North America
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Mining Pit - PNG */}
          <div className="group relative overflow-hidden rounded-3xl h-[520px] bg-zinc-950 border border-white/10 flex flex-col">
            <div className="h-[320px] bg-black relative overflow-hidden">
              <img src="/models/67th_st_pit__pheonix_a_1k.png" alt="67th Street Open Pit Mine" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="p-8 flex-1 flex flex-col text-center md:text-left">
              <div className="text-[#00F0FF] text-sm tracking-widest mb-2">MINING • USA 2025</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">67th Street Open Pit Mine</h3>
              <p className="text-[#C8D0FF] text-lg flex-1 mb-6">High-resolution photogrammetry scan of a large open-pit copper mine in Phoenix, Arizona.</p>
              <button onClick={() => setSelectedProject('mining')} className="mt-auto w-full py-3.5 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold rounded-2xl text-lg transition-all active:scale-[0.985] flex items-center justify-center gap-2">
                View 3D Model <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Office Building - PNG */}
          <div className="group relative overflow-hidden rounded-3xl h-[520px] bg-zinc-950 border border-white/10 flex flex-col">
            <div className="h-[320px] bg-black relative overflow-hidden">
              <img src="/models/headquarters_building_office_building_1k.png" alt="Downtown Headquarters Tower" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="p-8 flex-1 flex flex-col text-center md:text-left">
              <div className="text-[#00F0FF] text-sm tracking-widest mb-2">COMMERCIAL REAL ESTATE • CANADA 2025</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">Downtown Headquarters Tower</h3>
              <p className="text-[#C8D0FF] text-lg flex-1 mb-6">Complete as-built photogrammetry scan of a 28-story office headquarters in Toronto.</p>
              <button onClick={() => setSelectedProject('office')} className="mt-auto w-full py-3.5 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold rounded-2xl text-lg transition-all active:scale-[0.985] flex items-center justify-center gap-2">
                View 3D Model <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Highway Interchange - PNG */}
          <div className="group relative overflow-hidden rounded-3xl h-[520px] bg-zinc-950 border border-white/10 flex flex-col">
            <div className="h-[320px] bg-black relative overflow-hidden">
              <img src="/models/highway_lnterchange_overpass_railway_village_1k.png" alt="Major Highway Interchange" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="p-8 flex-1 flex flex-col text-center md:text-left">
              <div className="text-[#00F0FF] text-sm tracking-widest mb-2">INFRASTRUCTURE • USA 2025</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">Major Highway Interchange</h3>
              <p className="text-[#C8D0FF] text-lg flex-1 mb-6">Large-scale LiDAR + photogrammetry scan of a complex highway interchange in Chicago.</p>
              <button onClick={() => setSelectedProject('highway')} className="mt-auto w-full py-3.5 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold rounded-2xl text-lg transition-all active:scale-[0.985] flex items-center justify-center gap-2">
                View 3D Model <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Industrial Factory - PNG */}
          <div className="group relative overflow-hidden rounded-3xl h-[520px] bg-zinc-950 border border-white/10 flex flex-col">
            <div className="h-[320px] bg-black relative overflow-hidden">
              <img src="/models/linde_factory_industrial_installation_1k.png" alt="Linde Industrial Facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="p-8 flex-1 flex flex-col text-center md:text-left">
              <div className="text-[#00F0FF] text-sm tracking-widest mb-2">OIL & GAS • CANADA 2025</div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4 text-white">Linde Industrial Facility</h3>
              <p className="text-[#C8D0FF] text-lg flex-1 mb-6">Detailed photogrammetry scan of a major industrial gas processing facility in Alberta.</p>
              <button onClick={() => setSelectedProject('factory')} className="mt-auto w-full py-3.5 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold rounded-2xl text-lg transition-all active:scale-[0.985] flex items-center justify-center gap-2">
                View 3D Model <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-black py-24 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-7xl font-semibold tracking-tighter mb-6 text-white">Ready for Professional 3D Laser Scanning?</h2>
          <p className="text-2xl text-[#C8D0FF] mb-14">Get a fast, detailed quote for your project anywhere in the USA or Canada.</p>

          <form className="space-y-5 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/20 px-7 py-4 rounded-2xl w-full focus:outline-none focus:border-[#00F0FF] text-lg" />
              <input type="email" placeholder="Work Email" className="bg-white/5 border border-white/20 px-7 py-4 rounded-2xl w-full focus:outline-none focus:border-[#00F0FF] text-lg" />
            </div>
            <input type="text" placeholder="Company / Project Name" className="bg-white/5 border border-white/20 px-7 py-4 rounded-2xl w-full focus:outline-none focus:border-[#00F0FF] text-lg" />
            <textarea placeholder="Tell us about your project (location, size, deadline, or specific needs)" rows="6" className="bg-white/5 border border-white/20 px-7 py-4 rounded-3xl w-full focus:outline-none focus:border-[#00F0FF] text-lg resize-y"></textarea>
            <button type="submit" className="w-full py-5 bg-[#00F0FF] hover:bg-white text-[#05070F] font-semibold text-xl rounded-3xl transition-all active:scale-[0.985]">
              Submit Project Request
            </button>
          </form>
          <p className="text-sm text-white/50 mt-8">We typically respond within 24 hours during business days.</p>
        </div>
      </section>

      <footer className="bg-[#05070F] border-t border-white/10 py-16 text-center text-sm text-white/50">
        © {new Date().getFullYear()} scanetica. Professional 3D Laser Scanning & Digital Twin Services in the USA and Canada.
      </footer>

      {/* Detail View - Now outside the main component */}
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
      <LoginModal />
    </div>
  );
}