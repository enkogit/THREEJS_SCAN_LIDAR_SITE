import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * LoginModal Component
 * 
 * Beautiful modal for future customer portal login.
 * Currently shows a placeholder form (backend coming later).
 */
export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // alert('Login functionality coming soon! (Backend integration in progress)');
    // onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#05070F] border border-white/20 rounded-3xl w-full max-w-md mx-4 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">Welcome back</h3>
                <p className="text-[#C8D0FF] mt-1">Sign in to your customer portal</p>
              </div>
              <button onClick={onClose} className="text-white/60 hover:text-white transition">
                <X size={24} />
              </button>
            </div>

            {/* Login Form */}
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
              {/* Don't have an account?{' '} */}
              {/* <button className="text-[#00F0FF] hover:underline font-medium">Create one</button> */}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}