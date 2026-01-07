'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+971501234567'; // WhatsApp format (no spaces or special chars)
  const displayNumber = '+971 50 123 4567';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px] sm:min-w-[320px]"
          >
            {/* Close button for mobile */}
            <button
              onClick={() => setIsHovered(false)}
              className="absolute top-2 right-2 sm:hidden p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 pr-6 sm:pr-0">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Chat with us on WhatsApp</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">We're here to help you!</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-center rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
                >
                  Start Chat
                </a>
                <p className="text-center text-xs text-gray-500 mt-2">{displayNumber}</p>
              </div>
            </div>
            
            {/* Arrow pointing to button */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (window.innerWidth < 640) {
            // On mobile, toggle the popup
            setIsHovered(!isHovered);
          } else {
            // On desktop, go directly to WhatsApp
            window.open(whatsappUrl, '_blank');
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-green-600 hover:to-green-700 transition-all group relative"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        {/* Tooltip for desktop */}
        <span className="hidden lg:block absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
