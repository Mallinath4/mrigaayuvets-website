import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';

function Services() {
  const services = Object.values(servicesData);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section - Beautiful Blue/Purple Gradient */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            🐾 Our Veterinary Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Comprehensive care for your pets — from regular check-ups to specialized treatments.
          </p>

          {/* Stats */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">9+</div>
              <div className="text-xs sm:text-sm mt-1">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm mt-1">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm mt-1">Home Care</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">3000+</div>
              <div className="text-xs sm:text-sm mt-1">Happy Pets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl ${
                  index % 3 === 0 ? 'hover:shadow-blue-500/20' : 
                  index % 3 === 1 ? 'hover:shadow-purple-500/20' : 
                  'hover:shadow-indigo-500/20'
                }`}
              >
                {/* Image with Gradient Overlay */}
                <div className="relative overflow-hidden h-52 sm:h-56">
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    index % 3 === 0 ? 'from-blue-900/60' : 
                    index % 3 === 1 ? 'from-purple-900/60' : 
                    'from-indigo-900/60'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-500 to-cyan-500' : 
                    index % 3 === 1 ? 'from-purple-500 to-pink-500' : 
                    'from-indigo-500 to-blue-500'
                  } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20`}>
                    Popular
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-600 to-cyan-600' : 
                    index % 3 === 1 ? 'from-purple-600 to-pink-600' : 
                    'from-indigo-600 to-blue-600'
                  } bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={service.route}
                      className={`flex-1 bg-gradient-to-r ${
                        index % 3 === 0 ? 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' : 
                        index % 3 === 1 ? 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : 
                        'from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600'
                      } text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm shadow-lg`}
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <a
                      href={`https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20${service.title}%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold p-2.5 rounded-lg transition-all duration-300 transform hover:scale-105"
                      title="Quick Book"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Your Pet's Health is Our Priority
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🏆',
                  title: 'Expert Vets',
                  desc: 'Certified & experienced professionals',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: '🏠',
                  title: 'Home Service',
                  desc: 'Stress-free care at your doorstep',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: '⚡',
                  title: 'Quick Response',
                  desc: '24/7 emergency support available',
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  icon: '💰',
                  title: 'Affordable',
                  desc: 'Transparent pricing, no hidden costs',
                  color: 'from-cyan-500 to-teal-500'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className={`text-5xl mb-4 inline-block bg-gradient-to-r ${item.color} p-4 rounded-2xl text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                Need Immediate Care for Your Pet? 🐾
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us now for professional veterinary services at your doorstep. We're here available!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20veterinary%20services%20for%20my%20pet.%20Please%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  WhatsApp Us Now
                </a>
                <a
                  href="tel:+918208657969"
                  className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  Call: +91 8208657969
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
