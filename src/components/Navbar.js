import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ==================== MAIN NAVBAR ==================== */}
      <header className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'shadow-indigo-500/50 py-1.5 sm:py-2 backdrop-blur-xl bg-opacity-95' 
          : 'py-2 sm:py-3'
      }`}>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ========== LOGO & BRAND ========== */}
            <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2 group" onClick={closeMobileMenu}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative bg-white p-[2px] rounded-full shadow-2xl group-hover:shadow-blue-400/50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-0.5">
                    <img 
                      src="/static/images/logo.png" 
                      alt="MrigaAayuvets - Best Veterinary Clinic Mumbai" 
                      className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover transform group-hover:scale-110 group-hover:rotate-6 transition duration-300"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-0.5 shadow-lg animate-pulse">
                  <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                    MrigAayuvets
                  </span>
                </h1>
                <p className="text-[9px] sm:text-[10px] text-blue-100 font-semibold mt-0 hidden sm:flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(103,232,249,0.9)]"></span>
                  Mumbai\'s Most Trusted Pet Care 🐾
                </p>
                <p className="text-[8px] text-blue-100 font-semibold mt-0 flex sm:hidden items-center gap-0.5">
                  <span className="inline-block w-0.5 h-0.5 bg-cyan-300 rounded-full animate-pulse"></span>
                  Trusted Pet Care 🐾
                </p>
              </div>
            </Link>

            {/* ========== DESKTOP NAVIGATION (TEXT ONLY) ========== */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                <li>
                  <Link 
                    to="/" 
                    className={`group relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive('/') 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform transition-all duration-500 ${
                      isActive('/') 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}></span>
                    <span className={`absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive('/') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    <span className="relative z-10">Home</span>
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transition-all duration-300 transform -translate-x-1/2 shadow-[0_0_10px_rgba(103,232,249,0.8)] ${
                      isActive('/') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </li>

                <li>
                  <Link 
                    to="/services" 
                    className={`group relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive('/services') 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform transition-all duration-500 ${
                      isActive('/services') 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}></span>
                    <span className={`absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive('/services') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    <span className="relative z-10">Services</span>
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transition-all duration-300 transform -translate-x-1/2 shadow-[0_0_10px_rgba(103,232,249,0.8)] ${
                      isActive('/services') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </li>

                <li>
                  <Link 
                    to="/gallery" 
                    className={`group relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive('/gallery') 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform transition-all duration-500 ${
                      isActive('/gallery') 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}></span>
                    <span className={`absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive('/gallery') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    <span className="relative z-10">Gallery</span>
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transition-all duration-300 transform -translate-x-1/2 shadow-[0_0_10px_rgba(103,232,249,0.8)] ${
                      isActive('/gallery') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </li>

                <li>
                  <Link 
                    to="/blogs" 
                    className={`group relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive('/blogs') 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform transition-all duration-500 ${
                      isActive('/blogs') 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}></span>
                    <span className={`absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive('/blogs') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    <span className="relative z-10">Blogs</span>
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transition-all duration-300 transform -translate-x-1/2 shadow-[0_0_10px_rgba(103,232,249,0.8)] ${
                      isActive('/blogs') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </li>

                <li>
                  <Link 
                    to="/about" 
                    className={`group relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive('/about') 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform transition-all duration-500 ${
                      isActive('/about') 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}></span>
                    <span className={`absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive('/about') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    <span className="relative z-10">About</span>
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transition-all duration-300 transform -translate-x-1/2 shadow-[0_0_10px_rgba(103,232,249,0.8)] ${
                      isActive('/about') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </li>

                <li>
                  <Link 
                    to="/contact" 
                    className={`group relative px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive('/contact') 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform transition-all duration-500 ${
                      isActive('/contact') 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}></span>
                    <span className={`absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive('/contact') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    <span className="relative z-10">Contact</span>
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 transition-all duration-300 transform -translate-x-1/2 shadow-[0_0_10px_rgba(103,232,249,0.8)] ${
                      isActive('/contact') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </li>

                <li className="ml-2">
                  <Link 
                    to="/appointment" 
                    className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <svg className="w-3.5 h-3.5 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ========== MOBILE MENU BUTTON ========== */}
            <div className="lg:hidden flex items-center gap-2">
              <Link 
                to="/appointment" 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-2.5 sm:px-3 py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition-all flex items-center gap-1"
                onClick={closeMobileMenu}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Book</span>
              </Link>

              <div className="mobile-menu-container">
                <button
                  className={`relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${mobileMenuOpen ? 'gap-0' : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                >
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 shadow-lg ${
                    mobileMenuOpen ? 'w-4 rotate-45 translate-y-[1px]' : 'w-4'
                  }`}></span>
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 shadow-lg ${
                    mobileMenuOpen ? 'w-0 opacity-0' : 'w-3.5'
                  }`}></span>
                  <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 shadow-lg ${
                    mobileMenuOpen ? 'w-4 -rotate-45 -translate-y-[1px]' : 'w-4'
                  }`}></span>
                </button>
              </div>
            </div>
          </div>

          {/* ========== MOBILE NAVIGATION MENU ========== */}
          <div 
            className={`mobile-menu overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              mobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="mt-3 space-y-1.5 pb-3">
              {[
                { path: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { path: '/services', label: 'Services', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
                { path: '/gallery', label: 'Gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { path: '/blogs', label: 'Blogs', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
                { path: '/about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { path: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map((item, index) => (
                <li 
                  key={item.path}
                  className={`transition-all duration-500 ${
                    mobileMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link 
                    to={item.path} 
                    onClick={closeMobileMenu} 
                    className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-lg backdrop-blur-md transition-all duration-300 font-bold text-sm shadow-lg active:scale-95 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 border-2 border-cyan-300/60 text-cyan-100 shadow-cyan-400/30'
                        : 'bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-cyan-300/40 hover:shadow-cyan-400/20 text-white'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'bg-cyan-400/40' 
                        : 'bg-white/20 group-hover:bg-cyan-400/30'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                      </svg>
                    </div>
                    <span className="flex-1">{item.label}</span>
                    {isActive(item.path) && (
                      <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_10px_rgba(103,232,249,0.9)]"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* ==================== EMERGENCY CALL BANNER ==================== */}
      <div className="sticky top-0 z-40">
        <div className="backdrop-blur-md bg-gradient-to-r from-orange-500/95 via-red-500/95 to-pink-500/95 text-white 
                    flex items-center justify-between px-3 sm:px-6 py-1.5 sm:py-2 shadow-2xl border-b-2 border-orange-300/50">

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
              <div className="relative bg-white p-1.5 sm:p-2 rounded-full shadow-xl">
                <svg 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
            </div>

            <div>
              <p className="text-[9px] sm:text-[10px] font-bold text-yellow-100 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></span>
                🚨 24/7 Emergency Pet Care
              </p>
              <p className="text-[10px] sm:text-xs font-extrabold">Available Now - Fast Response!</p>
            </div>
          </div>

          <a 
            href="tel:+918208657969" 
            className="bg-white text-red-600 font-extrabold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-2xl hover:scale-105 hover:shadow-white/50 transition-all duration-300 text-[10px] sm:text-xs flex items-center gap-1.5 group active:scale-95"
          >
            <svg 
              className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="hidden xs:inline">Call: </span>
            <span className="font-black">8208657969</span>
          </a>
        </div>
      </div>

       {/* ==================== FLOATING WHATSAPP BUTTON ==================== */}
      <a 
        href="https://wa.me/918208657969?text=Hi%2C%20I%20need%20veterinary%20help%20for%20my%20pet" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-5 right-3 sm:right-5 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse transition duration-500"></div>

          <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 p-3 sm:p-3.5 rounded-full shadow-2xl shadow-green-500/50 group-hover:scale-110 transition-all duration-300 active:scale-95">
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce shadow-lg">
              1
            </span>
          </div>
        </div>

        <div className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-emerald-400/40">
          💬 Need Help? Chat with Our Vet Team!
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
        </div>
      </a>
    </>
  );
} 

export default Navbar;
