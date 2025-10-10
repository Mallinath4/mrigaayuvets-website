import React from 'react';
import { Link } from 'react-router-dom';

function DiwaliBanner() {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-12 sm:py-16 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z\' fill=\'%23ffffff\' fill-opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          animation: 'twinkle 3s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Diyas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 text-6xl animate-bounce">🪔</div>
        <div className="absolute top-20 right-1/4 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🪔</div>
        <div className="absolute bottom-10 left-1/3 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
            <span className="text-white font-bold text-sm uppercase tracking-wide">
              🎆 Diwali Special Offer 2025 🎆
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Celebrate Diwali with<br />
            <span className="bg-white text-orange-600 px-6 py-2 rounded-2xl inline-block mt-2">
              25% OFF
            </span>
            <br />
            on All Pet Care Services!
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            🐾 Keep your furry friends healthy this festive season with our exclusive Diwali packages!
          </p>

          {/* Offer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">💉</div>
              <h3 className="font-bold text-lg mb-2">Vaccinations</h3>
              <p className="text-orange-100 text-sm">Starting at ₹375</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-lg mb-2">Home Visits</h3>
              <p className="text-orange-100 text-sm">Just ₹600</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">✂️</div>
              <h3 className="font-bold text-lg mb-2">Free Grooming</h3>
              <p className="text-orange-100 text-sm">With any package</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">🚨</div>
              <h3 className="font-bold text-lg mb-2">24/7 Emergency</h3>
              <p className="text-orange-100 text-sm">Always available</p>
            </div>
          </div>

          {/* Countdown Timer (Optional) */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-white font-bold text-lg mb-2">⏰ Offer Valid Until</p>
            <p className="text-white text-3xl font-extrabold">November 5, 2025</p>
            <p className="text-orange-100 mt-2">Use Code: <span className="bg-white text-orange-600 px-4 py-1 rounded-full font-bold">DIWALI25</span></p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/appointment"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 inline-flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now & Save 25%
            </Link>

            <a
              href="https://wa.me/918208657969?text=Hi! I want to know more about Diwali offer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 inline-flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Pet Safety Message */}
          <div className="mt-8 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-white font-semibold flex items-center justify-center gap-3">
              <span className="text-2xl">🐾</span>
              <span><strong>Pet Safety Tip:</strong> Keep your pets calm and indoors during firecracker noise. We're here 24/7 for emergencies!</span>
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

export default DiwaliBanner;
