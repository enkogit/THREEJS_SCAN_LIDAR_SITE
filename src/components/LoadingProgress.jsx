import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingProgress Component
 * 
 * Shows a beautiful loading bar at the very top when the website first loads.
 */
export default function LoadingProgress({ isLoading, progress }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#05070F] flex items-center justify-center"
        >
          <div className="w-full max-w-md px-6">
            <div className="flex items-center gap-3 mb-4">
              <img src="/scanetica_logo.png" alt="Scanetica Logo" className="h-8 w-auto" />
              <span className="text-xl font-semibold tracking-tight">scanetica</span>
            </div>
            
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
              <motion.div 
                className="h-full bg-[#00F0FF] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-white/50">
              <span>Loading experience...</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}