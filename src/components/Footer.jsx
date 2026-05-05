import React from 'react';

/**
 * Footer Component
 * 
 * Simple footer with copyright and tagline.
 */
export default function Footer() {
  return (
    <footer className="bg-[#05070F] border-t border-white/10 py-16 text-center text-sm text-white/50">
      © {new Date().getFullYear()} scanetica. Professional 3D Laser Scanning & Digital Twin Services in the USA and Canada.
    </footer>
  );
}