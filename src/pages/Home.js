import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';


// ==================== LOADING SPINNER ====================
function LoadingSpinner() {
  return (
    <div className="flex justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
  );
}


// ==================== COUNTUP COMPONENT ====================
function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const currentRef = countRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const increment = end / (duration * 60);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
}


// ==================== DOCTORS GRID COMPONENT ====================
function DoctorsGrid() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('/api/doctors');
      if (response.ok) {
        const data = await response.json();
        const mappedDoctors = data.doctors.slice(0, 3).map((doc, index) => ({
          name: doc.name,
          role: doc.qualification || 'Veterinarian',
          experience: doc.bio || `${doc.experience}+ years of veterinary experience`,
          image: doc.image,
          gradient: ['from-blue-50 to-indigo-50', 'from-indigo-50 to-purple-50', 'from-purple-50 to-pink-50'][index % 3],
          roleColor: ['text-blue-600', 'text-indigo-600', 'text-purple-600'][index % 3]
        }));
        setDoctors(mappedDoctors);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctors([
        {
          name: 'Dr. Siddheshwar Khonde',
          role: 'BVSC & AH',
          experience: '5+ years of experience in veterinary practise with specialization in small animal and emergency care.',
          image: '/static/images/siddhu.png',
          gradient: 'from-blue-50 to-indigo-50',
          roleColor: 'text-blue-600'
        },
        {
          name: 'Dr. Ganesh Jagtap',
          role: 'Internal Medicine Specialist',
          experience: '5+ years specializing in pet internal medicine, cardiology, and preventive care for all breeds.',
          image: '/static/images/Ganesh.jpg',
          gradient: 'from-indigo-50 to-purple-50',
          roleColor: 'text-indigo-600'
        },
        {
          name: 'Dr. Ankit Chavan',
          role: 'BVSC & AH',
          experience: '2+ years experience in small animals treatment and budding veterinary pathologist.',
          image: '/static/images/Aniket.jpg',
          gradient: 'from-purple-50 to-pink-50',
          roleColor: 'text-purple-600'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No doctors available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {doctors.map((doctor, index) => (
        <div 
          key={index} 
          className={`group bg-gradient-to-br ${doctor.gradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100`}
        >
          <div className="relative mb-6">
            <div className="relative inline-block">
              <img
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.role} at MrigaAayuvets Mumbai`}
                className="rounded-full h-32 w-32 mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full p-2 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{doctor.name}</h3>
          <p className={`${doctor.roleColor} font-semibold mb-3 text-sm sm:text-base`}>{doctor.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{doctor.experience}</p>
        </div>
      ))}
    </div>
  );
}


// ==================== STICKY CONTACT BAR (MOBILE) ====================
function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
      <div className="flex items-center justify-between px-3 py-3">
        <a 
          href="tel:+918208657969"
          className="flex-1 bg-white text-blue-600 font-bold py-3 px-4 rounded-lg mr-2 text-center text-sm hover:bg-blue-50 transition-all shadow-md flex items-center justify-center gap-2"
          aria-label="Call MrigaAayuvets"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          Call Now
        </a>
        <a 
          href="https://wa.me/918208657969?text=Hi%2C%20I%20need%20veterinary%20help%20for%20my%20pet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white font-bold py-3 px-4 rounded-lg text-center text-sm hover:bg-green-600 transition-all shadow-md flex items-center justify-center gap-2"
          aria-label="WhatsApp MrigaAayuvets"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}


// ==================== MAIN HOME COMPONENT ====================
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hero Slides Data
  const heroSlides = [
    {
      imageDesktop: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      imageMobile: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop',
      title: 'Best Veterinary Services At Home in Mumbai',
      titleHighlight: 'Emergency Pet Care',
      description: 'Professional veterinary home services in Mumbai - Expert dog doctors, cat specialists, and emergency care at your doorstep',
      buttonText: 'Book Appointment',
      buttonLink: '/appointment'
    },
    {
      imageDesktop: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      imageMobile: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop',
      title: 'Expert Veterinarians',
      titleHighlight: 'Home Visit Services',
      description: 'Certified pet doctors providing professional treatment, vaccinations, surgery & complete animal healthcare at home',
      buttonText: 'Our Services',
      buttonLink: '/services'
    },
    {
      imageDesktop: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      imageMobile: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop',
      title: 'Emergency Available',
      titleHighlight: 'Pet Hospital',
      description: 'Round-the-clock emergency veterinary care for dogs, cats & all pets - Always available when your pet needs urgent help',
      buttonText: 'Emergency Contact',
      buttonLink: '/contact'
    },
    {
      imageDesktop: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      imageMobile: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop',
      title: 'Affordable Pet Care',
      titleHighlight: 'Home Visit Services',
      description: 'Stress-free veterinary care at your home - No clinic visits needed, professional treatment in your pet comfort zone',
      buttonText: 'Learn More',
      buttonLink: '/about'
    }
  ];

  const services = Object.values(servicesData).slice(0, 6);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Structured Data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "name": "MrigaAayuvets - Veterinary Clinic Mumbai",
      "image": "https://mrigaayuvets.in/static/images/logo.png",
      "description": "Professional veterinary home services in Mumbai - Expert emergency care, vaccinations, surgery & complete pet healthcare at your doorstep",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "telephone": "+918208657969",
      "priceRange": "₹₹",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "url": "https://www.mrigaayuvets.in",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "areaServed": "Mumbai"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* ==================== HERO SLIDER ==================== */}
      <section id="hero" className="relative h-screen max-h-[900px] min-h-[600px] overflow-hidden bg-gray-900 group">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'
              }`}
            >
              {/* Desktop Image */}
              <picture className="hidden md:block absolute inset-0">
                <img 
                  src={slide.imageDesktop}
                  alt={`${slide.title} - MrigaAayuvets Mumbai`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>

              {/* Mobile Image */}
              <picture className="block md:hidden absolute inset-0">
                <img 
                  src={slide.imageMobile}
                  alt={`${slide.title} - Pet Hospital Mumbai`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>

              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-block animate-fadeIn">
                <div className="bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-blue-600 shadow-xl hover:scale-105 transition-transform duration-300">
                  <span className="inline-block animate-pulse mr-1.5">✨</span>
                  Mumbai's Most Trusted Veterinary Clinic
                </div>
              </div>

              {/* Main Title */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-3" 
                    style={{textShadow: '0 4px 24px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)'}}>
                  <span className="text-white drop-shadow-2xl">
                    {heroSlides[currentSlide].title}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-black">
                    {heroSlides[currentSlide].titleHighlight}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium px-4" 
                   style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <Link
                  to={heroSlides[currentSlide].buttonLink}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50"
                  aria-label="Book veterinary appointment online"
                >
                  <span>{heroSlides[currentSlide].buttonText}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-blue-600 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-blue-600 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-full shadow-lg">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-7 h-1.5 bg-blue-600' 
                  : 'w-1.5 h-1.5 bg-gray-400 hover:bg-blue-400 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Slide Counter */}
        <div className="md:hidden absolute top-3 right-3 z-30 bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full text-blue-600 text-xs font-bold shadow-md">
          {currentSlide + 1}/{heroSlides.length}
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-white/20 rounded-full mb-4 hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                <CountUp end={3000} duration={2.5} suffix="+" />
              </div>
              <p className="text-sm sm:text-base text-blue-100 font-semibold">Happy Pet Parents</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-white/20 rounded-full mb-4 hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                <CountUp end={5} duration={2.5} suffix="+" />
              </div>
              <p className="text-sm sm:text-base text-blue-100 font-semibold">Years Experience</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-white/20 rounded-full mb-4 hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">100%</div>
              <p className="text-sm sm:text-base text-blue-100 font-semibold">Emergency Available</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-white/20 rounded-full mb-4 hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                <CountUp end={100} duration={2.5} suffix="%" />
              </div>
              <p className="text-sm sm:text-base text-blue-100 font-semibold">Home Visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">
              Serving Pet Owners Across <span className="text-blue-600">Mumbai</span>
            </h2>
            <p className="text-gray-600">Professional veterinary home visits in all Mumbai localities</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              'Andheri', 'Bandra', 'Dadar', 'Worli', 'Goregaon', 'Versova',
              'tilaknagar', 'Santacruz', 'Juhu', 'Versova', 'Vile Parle', 'Matunga',
              'Marines', 'Byculla', 'Tardeo', 'Ghatkopar', 'Chembur', 'Kemps Corner'
            ].map((area) => (
              <div key={area} className="bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-center py-3 px-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 border border-blue-100">
                <span className="text-sm font-semibold text-blue-700">📍 {area}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-sm text-gray-500">
            <strong>Can't find your area?</strong> Call us at <a href="tel:+918208657969" className="text-blue-600 font-semibold hover:underline">+91 8208657969</a> - we serve all Mumbai regions!
          </p>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏥 VETERINARY SERVICES IN MUMBAI
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Professional Pet Care <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive veterinary care for dogs, cats & all pets - Home visits, emergency care, vaccinations & surgery in Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border-t-4 ${
                  index % 3 === 0 ? 'border-blue-500' : 
                  index % 3 === 1 ? 'border-indigo-500' : 
                  'border-purple-500'
                }`}
              >
                <div className={`h-24 w-24 sm:h-32 sm:w-32 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-blue-100 to-blue-200' : 
                  index % 3 === 1 ? 'from-indigo-100 to-indigo-200' : 
                  'from-purple-100 to-purple-200'
                } p-2 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Veterinary Service Mumbai`}
                    className="h-full w-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  {service.description.substring(0, 100)}...
                </p>
                <Link 
                  to={`/service/${service.id}`} 
                  className={`inline-flex items-center gap-2 font-semibold text-sm bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-600 to-cyan-600' : 
                    index % 3 === 1 ? 'from-indigo-600 to-blue-600' : 
                    'from-purple-600 to-pink-600'
                  } bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              aria-label="View all veterinary services"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BADGES ==================== */}
      <section className="py-12 bg-gradient-to-r from-green-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
            🏆 Certified & Trusted Pet Care Professionals
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-4xl sm:text-5xl">✅</span>
              </div>
              <p className="font-semibold text-gray-700 text-sm sm:text-base">Veterinary Council<br/>Registered</p>
            </div>

            <div className="text-center group">
              <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-4xl sm:text-5xl">🔒</span>
              </div>
              <p className="font-semibold text-gray-700 text-sm sm:text-base">Secure Payment<br/>Options</p>
            </div>

            <div className="text-center group">
              <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-4xl sm:text-5xl">🏥</span>
              </div>
              <p className="font-semibold text-gray-700 text-sm sm:text-base">Fully Equipped<br/>Medical Kit</p>
            </div>

            <div className="text-center group">
              <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-4xl sm:text-5xl">💯</span>
              </div>
              <p className="font-semibold text-gray-700 text-sm sm:text-base">100% Satisfaction<br/>Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏥 MUMBAI'S TRUSTED VETERINARY CLINIC
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
                Your Pet's Health is Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Top Priority</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                At <strong className="text-blue-600">MrigAayuvets</strong>, we provide professional veterinary home services in Mumbai with expert care for dogs, cats, and all pets. Our experienced veterinarians offer emergency care, home visit services, vaccinations, surgery, and complete animal healthcare at affordable prices.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                From preventative care and regular check-ups to emergency treatments and specialized surgeries, we ensure your pet receives the best possible care – right at your doorstep in Mumbai. No stressful clinic visits required!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                  aria-label="Learn more about MrigaAayuvets"
                >
                  Learn More About Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
                <Link 
                  to="/appointment" 
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                  aria-label="Book veterinary appointment"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Appointment Now
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="/static/images/slide6.jpeg" 
                  alt="MrigaAayuvets Veterinary Clinic Mumbai - Professional Pet Care" 
                  className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DOCTORS SECTION ==================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              👨‍⚕️ EXPERT VETERINARY DOCTORS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Veterinary Specialists</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Certified and experienced veterinarians in Mumbai dedicated to your pet's health and well-being
            </p>
          </div>

          <DoctorsGrid />

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">Need to consult with a veterinary specialist in Mumbai?</p>
            <Link
              to="/appointment"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              aria-label="Book consultation with veterinary specialist"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book Consultation Today
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ VERIFIED CLIENT REVIEWS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              What Pet Parents Say About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Care</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from Mumbai pet owners who trust us with their beloved pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">
                "I am Miss Siddhika Shirke from Tilaknagar. I took my pets and 3 cats to MrigaAyuvet for vaccination and routine health check-up. The doctors were very professional, gentle, and caring. They explained everything clearly and handled my pets with great care. I am very satisfied with their services and highly recommend them to all pet parents."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  SS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Miss Siddhika Shirke</h4>
                  <p className="text-sm text-gray-600">Tilaknagar, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">
                "I am Miss Rachana Toshinwal from Worli, Mumbai. I availed MrigaAyuvet’s home visit service for my pet Tara’s skin issue and vaccination, as well as for my other pet Tigger’s follow-up treatment. The doctors were very knowledgeable, caring, and patient. They provided proper guidance and handled both my pets gently and professionally at home. I am very happy with the treatment and highly recommend MrigaAyuvet’s home veterinary services to all pet parents. "
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
                  RT
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Miss Rachana Toshinwal</h4>
                  <p className="text-sm text-gray-600">Worli, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">
                "I, Miss Ranjita Shinde from Tilaknagar, sincerely thank MrigaAyuvet for their caring and professional home visit service in Mumbai. My stray dog Rani was handled very gently, and the consultation was thorough and well explained. The home visit facility is very helpful for stray animals. Highly recommended for compassionate veterinary care."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">
                  RS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Miss Ranjita Shinde</h4>
                  <p className="text-sm text-gray-600">Tilaknagar, Mumbai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews Button */}
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?q=mrigaayuvets+mumbai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ❓ FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
              Common Questions About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pet Care</span>
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <summary className="cursor-pointer p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                <span className="text-base sm:text-lg">Do you provide 24/7 emergency veterinary services in Mumbai?</span>
                <svg className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes, MrigaAayuvets offers 24/7 emergency veterinary services across Mumbai. Call us at <a href="tel:+918208657969" className="text-blue-600 font-semibold">+91 8208657969</a> for immediate pet emergency assistance. We provide home visits for urgent cases.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <summary className="cursor-pointer p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                <span className="text-base sm:text-lg">What areas in Mumbai do you serve?</span>
                <svg className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                We serve all areas of Mumbai including Andheri, Bandra, Borivali, Powai, Goregaon, Malad, Kandivali, Santacruz, Juhu, Versova, Vile Parle, Dahisar, Mira Road, Thane, Mulund, Ghatkopar, Chembur, Vikhroli, and more.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <summary className="cursor-pointer p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                <span className="text-base sm:text-lg">What are your home visit charges?</span>
                <svg className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Our home visit charges vary based on the service required and location. Please call us at +91 8208657969 for specific pricing. We offer affordable and transparent pricing with no hidden costs.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <summary className="cursor-pointer p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                <span className="text-base sm:text-lg">Do you treat both dogs and cats?</span>
                <svg className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes! We provide comprehensive veterinary care for dogs, cats, and other small pets. Our veterinarians are experienced in treating all types of pets with specialized care for each species.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <summary className="cursor-pointer p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                <span className="text-base sm:text-lg">What vaccinations do you provide?</span>
                <svg className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                We provide all essential vaccinations including Rabies, DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza), Bordetella, Leptospirosis for dogs, and FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia), FeLV for cats.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <summary className="cursor-pointer p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                <span className="text-base sm:text-lg">How quickly can you reach for emergencies?</span>
                <svg className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                For emergency cases, we strive to reach you within 30-60 minutes depending on your location in Mumbai. We prioritize emergency calls and ensure prompt response for critical situations.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Contact Veterinary Clinic Mumbai 📞</h2>
            <p className="text-base sm:text-lg text-blue-100">24/7 Emergency Pet Care - Book Appointments, Questions & Urgent Help</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a 
              href="tel:+918208657969" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              aria-label="Call MrigaAayuvets Mumbai"
            >
              <div className="text-5xl mb-4">📞</div>
              <h4 className="font-bold text-lg mb-2">Call Veterinarian</h4>
              <p className="text-blue-100 text-sm mb-4">Direct consultation with pet doctor</p>
              <span className="text-white font-bold text-lg">+91 8208657969</span>
            </a>

            <a 
              href="https://wa.me/918208657969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              aria-label="WhatsApp MrigaAayuvets"
            >
              <div className="text-5xl mb-4">💬</div>
              <h4 className="font-bold text-lg mb-2">WhatsApp Pet Doctor</h4>
              <p className="text-blue-100 text-sm mb-4">Quick responses & booking</p>
              <span className="text-white font-bold">Chat Now</span>
            </a>

            <a 
              href="https://wa.me/918208657969?text=🚨%20EMERGENCY%20🚨" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              aria-label="Emergency veterinary care Mumbai"
            >
              <div className="text-5xl mb-4">🚨</div>
              <h4 className="font-bold text-lg mb-2">Emergency Pet Care</h4>
              <p className="text-blue-100 text-sm mb-4">Available 24/7 in Mumbai</p>
              <span className="text-white font-bold">Emergency Contact</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      

      {/* Sticky Mobile Contact Bar */}
      <StickyContactBar />
    </div>
  );
}

export default Home;
