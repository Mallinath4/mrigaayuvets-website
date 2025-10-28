import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        closeMobileMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Header - Light Professional Colors */}
      <header className={`bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 text-white shadow-xl sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sky-300/50 py-3 sm:py-4' : 'py-4 sm:py-6 md:py-7'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo and Brand - Enhanced Design */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                {/* Animated gradient ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 rounded-full blur-sm opacity-75 group-hover:opacity-100 animate-pulse transition duration-500"></div>
                
                {/* White background circle for logo */}
                <div className="relative bg-white p-0.5 sm:p-1 rounded-full shadow-2xl ring-2 ring-amber-300/60 group-hover:ring-amber-400 transition-all duration-300">
                  <img 
                    src="/static/images/logo.png" 
                    alt="MrigaAayuvets Logo" 
                    className="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                
                {/* Verified badge */}
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full p-1 shadow-lg">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              
              {/* Brand text - Golden Gradient */}
              <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight truncate">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(251,191,36,0.7)] filter brightness-110">
                    MrigAayuvets
                  </span>
                </h1>
                
                {/* Subtitle - Desktop */}
                <p className="text-[10px] sm:text-xs text-white font-semibold mt-0.5 hidden sm:flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse shadow-[0_0_10px_rgba(252,211,77,0.9)]"></span>
                  Compassionate Care for Your Beloved Pets 🐾
                </p>
                {/* Subtitle - Mobile */}
                <p className="text-[9px] text-white font-semibold mt-0.5 flex sm:hidden items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-amber-300 rounded-full animate-pulse"></span>
                  Care & Compassion 🐾
                </p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                <li>
                  <Link 
                    to="/" 
                    className="nav-link px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:text-amber-200 hover:bg-white/20 rounded-xl transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">Home</span>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/gallery" 
                    className="nav-link px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:text-amber-200 hover:bg-white/20 rounded-xl transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">Gallery</span>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs" 
                    className="nav-link px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:text-amber-200 hover:bg-white/20 rounded-xl transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">Blogs</span>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="nav-link px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:text-amber-200 hover:bg-white/20 rounded-xl transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">Services</span>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="nav-link px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:text-amber-200 hover:bg-white/20 rounded-xl transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">About</span>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="nav-link px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:text-amber-200 hover:bg-white/20 rounded-xl transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">Contact</span>
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="ml-2">
                  <Link 
                    to="/appointment" 
                    className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-orange-400/60 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="hidden xl:inline">Book Appointment</span>
                    <span className="xl:hidden">Book Now</span>
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3">
              <Link 
                to="/appointment" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-[10px] sm:text-xs shadow-lg whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-1"
              >
                📅 <span className="hidden xs:inline">Book</span>
              </Link>
              <div className="mobile-menu-container">
                <div 
                  className={`hamburger w-7 sm:w-8 h-6 sm:h-6 relative cursor-pointer ${mobileMenuOpen ? 'active' : ''}`}
                  onClick={toggleMobileMenu}
                >
                  <span className={`block absolute h-0.5 w-full bg-white rounded-sm left-0 transition-all duration-300 shadow-lg ${mobileMenuOpen ? 'top-2.5 rotate-[135deg]' : 'top-0'}`}></span>
                  <span className={`block absolute h-0.5 w-full bg-white rounded-sm left-0 transition-all duration-300 top-2.5 shadow-lg ${mobileMenuOpen ? 'opacity-0 -left-16' : 'opacity-100'}`}></span>
                  <span className={`block absolute h-0.5 w-full bg-white rounded-sm left-0 transition-all duration-300 shadow-lg ${mobileMenuOpen ? 'top-2.5 rotate-[-135deg]' : 'top-5'}`}></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation - Light Clean Design */}
          <div 
            className={`mobile-menu overflow-hidden transition-all duration-400 ease-in-out ${mobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}
          >
            <ul className="mt-5 sm:mt-6 space-y-2.5 pb-4">
              <li className={`${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-400 delay-75`}>
                <Link to="/" onClick={closeMobileMenu} className="block px-5 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all font-bold text-white text-base shadow-lg">
                  Home
                </Link>
              </li>
              <li className={`${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-400 delay-100`}>
                <Link to="/gallery" onClick={closeMobileMenu} className="block px-5 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all font-bold text-white text-base shadow-lg">
                  Gallery
                </Link>
              </li>
              <li className={`${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-400 delay-150`}>
                <Link to="/blogs" onClick={closeMobileMenu} className="block px-5 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all font-bold text-white text-base shadow-lg">
                  Blogs
                </Link>
              </li>
              <li className={`${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-400 delay-200`}>
                <Link to="/services" onClick={closeMobileMenu} className="block px-5 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all font-bold text-white text-base shadow-lg">
                  Services
                </Link>
              </li>
              <li className={`${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-400 delay-250`}>
                <Link to="/about" onClick={closeMobileMenu} className="block px-5 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all font-bold text-white text-base shadow-lg">
                  About
                </Link>
              </li>
              <li className={`${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'} transition-all duration-400 delay-300`}>
                <Link to="/contact" onClick={closeMobileMenu} className="block px-5 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all font-bold text-white text-base shadow-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Emergency Call Banner - No Animation on Icon */}
      <div className="sticky top-0 z-40">
        <div className="backdrop-blur-lg bg-gradient-to-r from-orange-500/95 via-amber-500/95 to-yellow-500/95 text-white 
                    flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 shadow-xl border-b border-orange-300/40">
          
          {/* Left Text with Static Call Icon */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Static Icon - No Animation */}
            <div className="bg-white p-2 sm:p-2.5 rounded-full shadow-xl">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            
            <div>
              <p className="text-[10px] sm:text-xs text-orange-100 font-bold">🚨 Pet Emergency?</p>
              <p className="text-xs sm:text-sm font-extrabold text-white">Available Now</p>
            </div>
          </div>
          
          {/* Call Button */}
          <a 
            href="tel:+918208657969" 
            className="bg-white text-orange-600 font-extrabold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm whitespace-nowrap flex items-center gap-1.5 sm:gap-2"
          >
            <svg 
              className="w-4 h-4 sm:w-4 sm:h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="hidden xs:inline">+91 </span>8208657969
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button - No Pulse Animation */}
      <a 
        href="https://wa.me/918208657969" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 group"
      >
        <div className="relative">
          {/* Static shadow - no animation */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full blur-md opacity-70 group-hover:opacity-90 transition duration-300"></div>
          
          {/* Icon container */}
          <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 p-3 sm:p-3.5 rounded-full shadow-2xl shadow-green-500/50 group-hover:scale-105 transition-transform duration-300">
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-emerald-400/40">
          💬 Chat with Our Vet Team
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
        </div>
      </a>
    </>
  );
}

export default Navbar;
