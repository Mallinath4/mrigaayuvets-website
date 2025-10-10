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
        
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 z-50 bg-red-600 hover:bg-red-700 rounded-full p-2 shadow-2xl transition-all duration-200 transform hover:scale-125 hover:rotate-90"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top Border */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500"></div>
        
        {/* Diyas */}
        <div className="absolute top-3 left-3 text-xl animate-bounce">🪔</div>
        <div className="absolute top-3 right-12 text-xl animate-bounce" style={{ animationDelay: '0.3s' }}>🪔</div>

        {/* Content */}
        <div className="p-5 text-center">
          
          {/* Greeting */}
          <div className="mb-2">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Happy Diwali! 🪔
            </h2>
            <p className="text-orange-900 text-xs font-semibold">शुभ दीपावली from MrigaAayuvets</p>
          </div>

          {/* Pet Icon */}
          <div className="mb-2 text-2xl">🐕🪔🐈</div>

          {/* Offer Box */}
          <div className="bg-white rounded-lg p-3 shadow-lg mb-3 border-2 border-orange-300">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-2 py-1 rounded-full text-[10px] font-bold uppercase inline-block mb-2">
              🎁 Diwali Special
            </span>
            
            <h3 className="text-base font-extrabold text-gray-900 mb-2">
              Get <span className="text-orange-600 text-lg">25% OFF</span>
            </h3>
            
            {/* Offer List */}
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

            {/* Validity */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-600 p-2 rounded mb-2">
              <p className="text-orange-900 font-bold text-[11px]">
                ⏰ Oct 20 - Nov 5, 2025
              </p>
              <p className="text-orange-800 text-[10px] mt-0.5">
                Code: <span className="bg-orange-300 text-orange-900 px-2 py-0.5 rounded font-bold">DIWALI25</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-1.5 mb-2">
            <Link
              to="/appointment"
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </Link>
            
            <a
              href="https://wa.me/918208657969?text=Hi! I want Diwali offer (25% OFF)"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Safety Message */}
          <div className="bg-blue-50 border border-blue-200 rounded p-1.5">
            <p className="text-blue-900 font-semibold text-[10px]">
              🐾 Keep pets safe during fireworks!
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500"></div>
      </div>
    </div>
  );
}

export default DiwaliPopup;
