import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 rounded-lg shadow-lg">
                <img 
                  src="/static/images/logo.png" 
                  alt="MrigaAayuvets" 
                  className="h-10 w-10 rounded-lg object-cover"
                />
              </div>
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MrigAayuvets
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing trusted veterinary & medical services with care, compassion, and professionalism.  
              Your pets' health and happiness are our priority. 🐾
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://facebook.com/mrigaayuvets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group"
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-lg group-hover:text-white"></i>
              </a>
              <a 
                href="https://twitter.com/mrigaayuvets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-sky-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50 group"
                title="Twitter"
              >
                <i className="fab fa-twitter text-lg group-hover:text-white"></i>
              </a>
              <a 
                href="https://instagram.com/mrigaayuvets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 group"
                title="Instagram"
              >
                <i className="fab fa-instagram text-lg group-hover:text-white"></i>
              </a>
              <a 
                href="https://wa.me/918208657969" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 group"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg group-hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: ' Home' },
                { to: '/about', label: ' About Us' },
                { to: '/services', label: ' Our Services' },
                { to: '/blogs', label: ' Pet Care Tips' },
                { to: '/gallery', label: ' Gallery' },
                { to: '/contact', label: ' Contact' },
                { to: '/admin/login', label: ' Admin Login' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full mr-2"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                ' Pet Vaccination',
                ' Surgery & Treatment',
                ' Pet Nutrition',
                ' Emergency Care',
                ' Wellness Checkups',
                ' Pet Grooming'
              ].map((service, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-blue-400 mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                  <span className="group-hover:text-blue-400 transition-colors duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <div className="bg-blue-500/10 p-2 rounded-lg mr-3 group-hover:bg-blue-500/20 transition-colors">
                  <i className="fas fa-map-marker-alt text-blue-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-indigo-500/10 p-2 rounded-lg mr-3 group-hover:bg-indigo-500/20 transition-colors">
                  <i className="fas fa-phone-alt text-indigo-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+918208657969" className="text-gray-400 hover:text-indigo-400 transition">
                    +91 8208657969
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-purple-500/10 p-2 rounded-lg mr-3 group-hover:bg-purple-500/20 transition-colors">
                  <i className="fas fa-envelope text-purple-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:mrigaayuvets@gmail.com" className="text-gray-400 hover:text-purple-400 transition break-all text-xs sm:text-sm">
                    mrigaayuvets2025@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-cyan-500/10 p-2 rounded-lg mr-3 group-hover:bg-cyan-500/20 transition-colors">
                  <i className="fas fa-clock text-cyan-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-white">Working Hours</p>
                  <p className="text-gray-400">Emergency Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated! 📬</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for pet care tips and special offers</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              />
              <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link 
            to="/appointment" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <i className="fas fa-calendar-check"></i>
            <span className="hidden xs:inline">Book </span>Appointment
          </Link>
          <a 
            href="tel:+918208657969" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <i className="fas fa-phone-alt"></i>
            Call Now
          </a>
          <a 
            href="https://wa.me/918208657969" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p className="text-center md:text-left">
              &copy; {currentYear} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">MrigAayuvets</span>. All rights reserved.
            </p>
            <p className="text-center md:text-right text-xs sm:text-sm">
              Designed & Developed by <span className="text-blue-400 font-semibold">Tulipspot Marketing & Sales PVT. LTD.</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-600">
            <Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-blue-400 transition">Terms of Service</Link>
            <span>•</span>
            <Link to="/sitemap" className="hover:text-blue-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
