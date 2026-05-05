import React from 'react';

/**
 * Navbar Component
 * 
 * Fixed top navigation bar with logo, scroll-to-section links,
 * and Login + Get a Quote buttons.
 */
export default function Navbar({ onLoginClick }) {
  
  // Smooth scroll helper function
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070F]/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/scanetica_logo.png" alt="Scanetica Logo" className="h-11 w-auto drop-shadow-md" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          <button onClick={() => scrollTo('services')} className="hover:text-[#00F0FF] transition-colors">Services</button>
          <button onClick={() => scrollTo('technology')} className="hover:text-[#00F0FF] transition-colors">Technology</button>
          <button onClick={() => scrollTo('cases')} className="hover:text-[#00F0FF] transition-colors">Case Studies</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-[#00F0FF] transition-colors">Contact</button>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollTo('contact')} 
            className="px-5 py-2 text-sm font-medium border border-white/30 hover:bg-white/10 rounded-2xl transition-all active:scale-95"
          >
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