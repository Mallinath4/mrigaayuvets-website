import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';

function Services() {
  const services = Object.values(servicesData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "MrigAayuvets - Veterinary Services Mumbai",
    "image": "https://mrigaayuvets.in/static/images/logo.png",
    "description": "Professional veterinary services in Mumbai including pet vaccination, surgery, emergency care, grooming, and home visits. Available 24/7 for your pet's health.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+918208657969",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Veterinary Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  const faqData = [
    {
      question: "What veterinary services do you offer in Mumbai?",
      answer: "We offer comprehensive veterinary services including pet vaccination, surgery & treatment, emergency care 24/7, pet grooming, wellness checkups, dental care, lab tests, nutritional consultation, and home visit services across Mumbai."
    },
    {
      question: "Do you provide 24/7 emergency veterinary services?",
      answer: "Yes! We provide round-the-clock emergency veterinary care for pets in Mumbai. Call us anytime at +91 8208657969 for urgent pet health concerns."
    },
    {
      question: "Do you offer home visit veterinary services in Mumbai?",
      answer: "Absolutely! We provide convenient home visit services across Mumbai including Andheri, Bandra, Borivali, Thane, and surrounding areas. Book a home consultation for stress-free pet care."
    },
    {
      question: "How much do veterinary services cost in Mumbai?",
      answer: "Our veterinary service charges are transparent and affordable. Prices vary based on the service type. Contact us for detailed pricing or visit our clinic for a consultation. We offer competitive rates without compromising quality care."
    },
    {
      question: "Which areas in Mumbai do you serve?",
      answer: "We serve all major areas of Mumbai including Andheri, Bandra, Borivali, Powai, Thane, Dadar, Worli, Malad, Goregaon, and nearby localities. Home visits available across Mumbai."
    },
    {
      question: "Do I need to book an appointment for veterinary services?",
      answer: "While walk-ins are welcome, we recommend booking an appointment to avoid waiting time. You can book via WhatsApp, phone call, or our website. Emergency cases are prioritized immediately."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Best Veterinary Services in Mumbai | Pet Care | MrigAayuvets</title>
        <meta name="description" content="Professional veterinary services in Mumbai. Expert pet care including vaccination, surgery, emergency care 24/7, grooming, home visits. Call +91 8208657969. Mumbai\'s most trusted vet clinic." />
        <meta name="keywords" content="veterinary services mumbai, pet doctor mumbai, vet clinic mumbai, pet vaccination mumbai, emergency vet mumbai, pet surgery mumbai, pet grooming mumbai, home vet service mumbai, 24/7 vet mumbai, best vet in mumbai" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Veterinary Services in Mumbai | MrigAayuvets" />
        <meta property="og:description" content="Professional veterinary care for your pets in Mumbai. 24/7 emergency services, home visits, expert vets. Book now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrigaayuvets.in/services" />
        <meta property="og:image" content="https://mrigaayuvets.in/static/images/logo.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Veterinary Services in Mumbai | MrigAayuvets" />
        <meta name="twitter:description" content="Professional veterinary care for your pets in Mumbai. 24/7 emergency services available." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://mrigaayuvets.in/services" />
      </Helmet>

      <Navbar />

      {/* Breadcrumbs for SEO */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-gray-900 font-semibold">Veterinary Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PROFESSIONAL PET CARE SERVICES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            🐾 Veterinary Services in Mumbai
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Comprehensive pet healthcare from expert veterinarians — vaccination, surgery, emergency care, grooming & home visits across Mumbai
          </p>

          {/* Enhanced Stats */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold">12+</div>
              <div className="text-xs sm:text-sm mt-1">Services Offered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm mt-1">Emergency Care</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm mt-1">Home Visits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold">5000+</div>
              <div className="text-xs sm:text-sm mt-1">Happy Pets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Complete Pet Healthcare Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From routine checkups to emergency care, we provide all veterinary services your pet needs in Mumbai
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <article
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
                    alt={`${service.title} - Veterinary Service in Mumbai | MrigAayuvets`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-500 to-cyan-500' : 
                    index % 3 === 1 ? 'from-purple-500 to-pink-500' : 
                    'from-indigo-500 to-blue-500'
                  } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20`}>
                    Popular ⭐
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
                      aria-label={`Learn more about ${service.title}`}
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
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2.5 rounded-lg transition-all duration-300 transform hover:scale-105"
                      title="Quick Book via WhatsApp"
                      aria-label={`Book ${service.title} via WhatsApp`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Service Areas Section - Important for Local SEO */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                🗺️ Areas We Serve in Mumbai
              </h2>
              <p className="text-gray-600 text-lg">
                Professional veterinary services and home visits across all major Mumbai localities
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Andheri', 'Bandra', 'Dadar', 'Worli', 'Goregaon', 'Versova',
              'tilaknagar', 'Santacruz', 'Juhu', 'Versova', 'Vile Parle', 'Matunga',
              'Marines', 'Byculla', 'Tardeo', 'Ghatkopar', 'Chembur', 'Kemps Corner'
              ].map((area, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📍</div>
                  <p className="text-sm font-semibold text-gray-800">{area}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 text-sm">
              And many more localities across Mumbai & Navi Mumbai
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Mumbai's Most Trusted Veterinary Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Your pet's health and happiness are our top priorities. Here's why pet parents trust us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🏆',
                  title: 'Expert Veterinarians',
                  desc: 'Certified & experienced professionals with 10+ years expertise',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: '🏠',
                  title: 'Home Visit Service',
                  desc: 'Stress-free veterinary care at your doorstep across Mumbai',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: '⚡',
                  title: '24/7 Emergency',
                  desc: 'Round-the-clock emergency support - always available',
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  icon: '💰',
                  title: 'Affordable Pricing',
                  desc: 'Transparent pricing with no hidden costs or charges',
                  color: 'from-cyan-500 to-teal-500'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                  <div className={`text-5xl mb-4 inline-block bg-gradient-to-r ${item.color} p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section for SEO */}
          <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Common Questions About Our Veterinary Services
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-blue-600 group-open:rotate-180 transition-transform duration-300">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Need Immediate Pet Care? 🚨
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact our expert veterinarians now for professional pet healthcare services in Mumbai. Home visits available 24/7!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20veterinary%20services%20for%20my%20pet.%20Please%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  WhatsApp Us Now
                </a>
                <a
                  href="tel:+918208657969"
                  className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3 group"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
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
