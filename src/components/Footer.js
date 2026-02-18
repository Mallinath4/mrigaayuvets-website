import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Animated paw prints pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute top-32 right-20 text-5xl">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🐾</div>
        <div className="absolute bottom-40 right-1/3 text-6xl">🐾</div>
      </div>

      {/* Trust badges section */}
      <div className="relative z-10 border-b border-gray-800/50 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="text-white font-bold text-lg mb-1">Certified Vets</h4>
                <p className="text-xs text-gray-400">Licensed & Experienced</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                <div className="text-4xl mb-3">⏰</div>
                <h4 className="text-white font-bold text-lg mb-1">24/7 Available</h4>
                <p className="text-xs text-gray-400">Emergency Services</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 backdrop-blur-sm border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-green-500/20">
                <div className="text-4xl mb-3">❤️</div>
                <h4 className="text-white font-bold text-lg mb-1">5000+ Pets</h4>
                <p className="text-xs text-gray-400">Treated with Care</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 backdrop-blur-sm border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="text-white font-bold text-lg mb-1">Top Rated</h4>
                <p className="text-xs text-gray-400">Mumbai\'s Best Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Logo & About */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-lg">
                  <img 
                    src="/static/images/logo.png" 
                    alt="MrigaAayuvets" 
                    className="h-11 w-11 rounded-lg object-cover"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MrigAayuvets
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              <span className="text-blue-400 font-semibold">Mumbai's Most Trusted</span> veterinary clinic providing compassionate care for your beloved pets. 🐾 
              <span className="block mt-2 text-xs text-gray-500">Because every pet deserves the best medical care!</span>
            </p>

            {/* Enhanced Social Media */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></span>
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/mrigaayuvets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-600 hover:to-blue-700 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700 hover:border-blue-500"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f text-lg text-gray-400 group-hover:text-white transition-colors"></i>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                </a>
                <a 
                  href="https://twitter.com/mrigaayuvets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 hover:from-sky-500 hover:to-sky-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700 hover:border-sky-500"
                  title="Twitter"
                >
                  <i className="fab fa-twitter text-lg text-gray-400 group-hover:text-white transition-colors"></i>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                </a>
                <a 
                  href="https://instagram.com/mrigaayuvets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 hover:from-pink-500 hover:to-purple-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700 hover:border-pink-500"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-lg text-gray-400 group-hover:text-white transition-colors"></i>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                </a>
                <a 
                  href="https://wa.me/918208657969" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 hover:from-green-500 hover:to-emerald-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group border border-gray-700 hover:border-green-500"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-lg text-gray-400 group-hover:text-white transition-colors"></i>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 rounded-full mr-3 shadow-lg shadow-blue-500/50"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home', icon: 'fa-home' },
                { to: '/about', label: 'About Us', icon: 'fa-info-circle' },
                { to: '/services', label: 'Our Services', icon: 'fa-stethoscope' },
                { to: '/blogs', label: 'Pet Care Tips', icon: 'fa-blog' },
                { to: '/gallery', label: 'Gallery', icon: 'fa-images' },
                { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
                { to: '/appointment', label: 'Book Appointment', icon: 'fa-calendar-check' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-8 h-8 bg-gray-800 group-hover:bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 border border-gray-700 group-hover:border-blue-500/50">
                      <i className={`fas ${link.icon} text-xs group-hover:scale-110 transition-transform`}></i>
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-500 rounded-full mr-3 shadow-lg shadow-purple-500/50"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: 'Pet Vaccination', icon: '💉' },
                { name: 'Surgery & Treatment', icon: '🏥' },
                { name: 'Pet Nutrition', icon: '🍖' },
                { name: 'Emergency Care', icon: '🚨' },
                { name: 'Wellness Checkups', icon: '🩺' },
                { name: 'Pet Grooming', icon: '✂️' },
                { name: 'Lab Tests', icon: '🧪' },
                { name: 'Dental Care', icon: '🦷' }
              ].map((service, index) => (
                <li key={index} className="flex items-center group cursor-pointer">
                  <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <span className="group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 text-sm">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-purple-400 via-pink-400 to-red-500 rounded-full mr-3 shadow-lg shadow-pink-500/50"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="group">
                <div className="flex items-start bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Location</p>
                    <p className="text-gray-400 text-xs leading-relaxed">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-800">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Phone</p>
                    <a href="tel:+918208657969" className="text-gray-400 hover:text-indigo-400 transition text-xs font-mono">
                      +91 8208657969
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2.5 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white mb-1">Email</p>
                    <a href="mailto:mrigaayuvets2025@gmail.com" className="text-gray-400 hover:text-purple-400 transition break-all text-xs">
                      mrigaayuvets2025@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start bg-gray-800/50 p-3 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Working Hours</p>
                    <p className="text-gray-400 text-xs">24/7 Emergency Available</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-gray-700/50 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/50">
                  <span className="text-3xl">📬</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Stay Updated with Pet Care Tips!
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Get expert advice, health tips, and exclusive offers delivered to your inbox
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-5 py-4 rounded-xl bg-gray-800/80 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition backdrop-blur-sm"
                  />
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-paper-plane"></i>
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  🔒 We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Action Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link 
            to="/appointment" 
            className="relative group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <i className="fas fa-calendar-check relative z-10 group-hover:rotate-12 transition-transform"></i>
            <span className="relative z-10">Book Appointment</span>
          </Link>
          <a 
            href="tel:+918208657969" 
            className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <i className="fas fa-phone-alt relative z-10 group-hover:rotate-12 transition-transform"></i>
            <span className="relative z-10">Call Now</span>
          </a>
          <a 
            href="https://wa.me/918208657969" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <i className="fab fa-whatsapp relative z-10 text-xl group-hover:scale-110 transition-transform"></i>
            <span className="relative z-10">WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 text-xs text-gray-600">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors hover:underline">Privacy Policy</Link>
            <span className="text-gray-700">•</span>
            <Link to="/terms" className="hover:text-blue-400 transition-colors hover:underline">Terms of Service</Link>
            <span className="text-gray-700">•</span>
            <Link to="/sitemap" className="hover:text-blue-400 transition-colors hover:underline">Sitemap</Link>
            <span className="text-gray-700">•</span>
            <Link to="/refund" className="hover:text-blue-400 transition-colors hover:underline">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-3 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 z-50 hidden lg:block"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </footer>
  );
}

export default Footer;
