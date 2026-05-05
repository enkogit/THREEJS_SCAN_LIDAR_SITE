import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_im4s92d',           // ← Replace with your EmailJS Service ID
        'template_5uom1xq',          // ← Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        'URJFwRqp9FCfJwwAl'            // ← Replace with your EmailJS Public Key
      );

      console.log('Email sent successfully:', result.text);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      // Hide success message after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setShowError(true);
      
      setTimeout(() => {
        setShowError(false);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-7xl font-semibold tracking-tighter mb-6 text-white">
          Ready for Professional 3D Laser Scanning?
        </h2>
        <p className="text-2xl text-[#C8D0FF] mb-14">
          Get a fast, detailed quote for your project anywhere in the USA or Canada.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name" 
              className="bg-white/5 border border-white/20 px-7 py-4 rounded-2xl w-full focus:outline-none focus:border-[#00F0FF] text-lg" 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email" 
              className="bg-white/5 border border-white/20 px-7 py-4 rounded-2xl w-full focus:outline-none focus:border-[#00F0FF] text-lg" 
              required 
            />
          </div>
          
          <input 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Project Name" 
            className="bg-white/5 border border-white/20 px-7 py-4 rounded-2xl w-full focus:outline-none focus:border-[#00F0FF] text-lg" 
            required 
          />
          
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project (location, size, deadline, or specific needs)" 
            rows="6" 
            className="bg-white/5 border border-white/20 px-7 py-4 rounded-3xl w-full focus:outline-none focus:border-[#00F0FF] text-lg resize-y" 
            required 
          ></textarea>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-5 bg-[#00F0FF] hover:bg-white disabled:bg-gray-600 text-[#05070F] font-semibold text-xl rounded-3xl transition-all active:scale-[0.985] flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#05070F] border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              'Submit Project Request'
            )}
          </button>
        </form>

        <p className="text-sm text-white/50 mt-8">
          We typically respond within 24 hours during business days.
        </p>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[400] bg-green-600 text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            ✅ Thank you! Your message has been sent successfully. We'll reply within 24 hours.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Toast */}
      <AnimatePresence>
        {showError && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[400] bg-red-600 text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            ❌ Something went wrong. Please try again or email us directly at hello@scanetica.com
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}