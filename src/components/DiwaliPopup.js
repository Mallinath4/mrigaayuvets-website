import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DiwaliPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('diwaliPopupSeen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('diwaliPopupSeen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border-4 border-orange-300">
        
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Diwali Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500"></div>
        
        {/* Floating Diyas Animation */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🪔</div>
        <div className="absolute top-10 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>🪔</div>
        <div className="absolute bottom-10 left-20 text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>✨</div>
        <div className="absolute bottom-10 right-20 text-3xl animate-bounce" style={{ animationDelay: '0.9s' }}>✨</div>

        {/* Content */}
        <div className="relative p-8 sm:p-12 text-center">
          {/* Diwali Greeting */}
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">
              <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">
                Happy Diwali! 🪔
              </span>
            </h2>
            <p className="text-orange-800 text-lg font-semibold">
              शुभ दीपावली from MrigaAayuvets Family
            </p>
          </div>

          {/* Pet Diwali Image */}
          <div className="mb-6">
            <div className="inline-block bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-6xl">🐕🪔🐈</div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="bg-white rounded-2xl p-6 shadow-xl mb-6 border-2 border-orange-300">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                🎁 Diwali Special Offer
              </span>
            </div>
            
            <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
              Get <span className="text-orange-600">25% OFF</span> on All Services!
            </h3>
            
            <ul className="text-left space-y-2 mb-6 max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700"><strong>Pet Vaccination:</strong> Starting ₹375 only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700"><strong>Home Visit:</strong> Just ₹600 (Regular ₹800)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700"><strong>Free Pet Grooming</strong> with any health package</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700"><strong>24/7 Emergency Support</strong> at your doorstep</span>
              </li>
            </ul>

            {/* Validity */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg mb-6">
              <p className="text-orange-800 font-semibold">
                ⏰ Valid from <strong>Oct 20 - Nov 5, 2025</strong>
              </p>
              <p className="text-orange-700 text-sm mt-1">
                Use Code: <strong className="bg-orange-200 px-3 py-1 rounded">DIWALI25</strong>
              </p>
            </div>

            {/* Pet Safety Message */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-900 font-semibold text-sm">
                🐾 <strong>Pet Safety During Diwali:</strong> Keep your pets indoors, away from loud noises and firecrackers. We're here 24/7 if you need emergency care!
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              onClick={closePopup}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Diwali Appointment
            </Link>
            
            <a
              href="https://wa.me/918208657969?text=Hi! I want to avail Diwali offer (25% OFF)"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopup}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Offer
            </a>
          </div>

          {/* Fine Print */}
          <p className="text-gray-500 text-xs mt-6">
            *Terms & Conditions Apply. Cannot be combined with other offers.
          </p>
        </div>

        {/* Bottom Decorative Border */}
        <div className="h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500"></div>
      </div>
    </div>
  );
}

export default DiwaliPopup;
