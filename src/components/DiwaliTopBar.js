import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DiwaliTopBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white py-3 px-4 text-center font-semibold shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-2xl animate-bounce">🪔</span>
          <span className="text-sm sm:text-base">
            🎉 <strong>Diwali Special:</strong> Get 25% OFF on all pet care services! Use Code: <span className="bg-white text-orange-600 px-3 py-1 rounded-full font-bold mx-2">DIWALI25</span>
          </span>
          <Link
            to="/appointment"
            className="bg-white text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-full font-bold text-sm transition transform hover:scale-105"
          >
            Book Now →
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-orange-200 transition"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DiwaliTopBar;
