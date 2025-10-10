import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function DiwaliPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closePopup = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
      sessionStorage.setItem('diwaliPopupSeen', 'true');
    }, 250);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('diwaliPopupSeen');
      if (!hasSeenPopup) {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) closePopup();
    };
    if (isVisible) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isVisible, closePopup]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closePopup();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden border-4 border-orange-400 transform transition-all duration-300 ${
          isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 z-50 bg-red-600 hover:bg-red-700 rounded-full p-2 shadow-2xl transition-all duration-200 transform hover:scale-125 hover:rotate-90"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500"></div>
        
        <div className="absolute top-3 left-3 text-xl animate-bounce">🪔</div>
        <div className="absolute top-3 right-12 text-xl animate-bounce" style={{ animationDelay: '0.3s' }}>🪔</div>

        <div className="p-5 text-center">
          
          <div className="mb-2">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Happy Diwali! 🪔
            </h2>
            <p className="text-orange-900 text-xs font-semibold">शुभ दीपावली from MrigaAayuvets</p>
          </div>

          <div className="mb-2 text-2xl">🐕🪔🐈</div>

          <div className="bg-white rounded-lg p-3 shadow-lg mb-3 border-2 border-orange-300">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-2 py-1 rounded-full text-[10px] font-bold uppercase inline-block mb-2">
              🎁 Diwali Special
            </span>
            
            <h3 className="text-base font-extrabold text-gray-900 mb-2">
              Get <span className="text-orange-600 text-lg">25% OFF</span>
            </h3>
            
            <div className="space-y-1 mb-2 text-xs text-left">
              <div className="flex items-center gap-1 bg-green-50 py-1 px-2 rounded">
                <span className="text-green-600 text-sm">✓</span>
                <span className="text-gray-800"><strong>Vaccination:</strong> ₹375+</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-50 py-1 px-2 rounded">
                <span className="text-blue-600 text-sm">✓</span>
                <span className="text-gray-800"><strong>Home Visit:</strong> ₹600</span>
              </div>
              <div className="flex items-center gap-1 bg-purple-50 py-1 px-2 rounded">
                <span className="text-purple-600 text-sm">✓</span>
                <span className="text-gray-800"><strong>Free Grooming</strong></span>
              </div>
              <div className="flex items-center gap-1 bg-red-50 py-1 px-2 rounded">
                <span className="text-red-600 text-sm">✓</span>
                <span className="text-gray-800"><strong>24/7 Emergency</strong></span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-600 p-2 rounded mb-2">
              <p className="text-orange-900 font-bold text-[11px]">
                ⏰ Oct 20 - Nov 5, 2025
              </p>
              <p className="text-orange-800 text-[10px] mt-0.5">
                Code: <span className="bg-orange-300 text-orange-900 px-2 py-0.5 rounded font-bold">DIWALI25</span>
              </p>
            </div>
          </div>

          <div className="space-y-1.5 mb-2">
            <Link
              to="/appointment"
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs"
            >
              Book Now
            </Link>
            
            <a
              href="https://wa.me/918208657969?text=Hi! I want Diwali offer (25% OFF)"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs"
            >
              WhatsApp
            </a>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-1.5">
            <p className="text-blue-900 font-semibold text-[10px]">
              🐾 Keep pets safe during fireworks!
            </p>
          </div>
        </div>

        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500"></div>
      </div>
    </div>
  );
}

export default DiwaliPopup;

