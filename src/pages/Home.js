import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';

// CountUp Component - Fixed ESLint warning
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

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // SEO-OPTIMIZED Hero Slides with Keywords
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1530041539828-114de669390e?w=1920&q=80',
      imageDesktop: 'https://images.unsplash.com/photo-1530041539828-114de669390e?w=1920&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1530041539828-114de669390e?w=1080&q=80',
      title: 'Best Veterinary Clinic in Mumbai',
      titleHighlight: '24/7 Emergency Pet Care',
      description: 'Professional veterinary home services in Mumbai - Expert dog doctors, cat specialists, and 24/7 emergency care at your doorstep',
      buttonText: 'Book Appointment',
      buttonLink: '/appointment'
    },
    {
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80',
      imageDesktop: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1080&q=80',
      title: 'Expert Veterinarians',
      titleHighlight: 'Home Visit Services',
      description: 'Certified pet doctors providing professional treatment, vaccinations, surgery & complete animal healthcare at home',
      buttonText: 'Our Services',
      buttonLink: '/services'
    },
    {
      image: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1920&q=80',
      imageDesktop: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1920&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1080&q=80',
      title: '24/7 Emergency',
      titleHighlight: 'Pet Hospital',
      description: 'Round-the-clock emergency veterinary care for dogs, cats & all pets - Always available when your pet needs urgent help',
      buttonText: 'Emergency Contact',
      buttonLink: '/contact'
    },
    {
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80',
      imageDesktop: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1080&q=80',
      title: 'Affordable Pet Care',
      titleHighlight: 'Home Visit Services',
      description: 'Stress-free veterinary care at your home - No clinic visits needed, professional treatment in your pet\'s comfort zone',
      buttonText: 'Learn More',
      buttonLink: '/about'
    }
  ];

  const doctors = [
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
      role: 'Internal Medicine ',
      experience: '5+ years specializing in pet internal medicine, cardiology, and preventive care for all breeds.',
      image: '/static/images/Ganesh.jpg',
      gradient: 'from-indigo-50 to-purple-50',
      roleColor: 'text-indigo-600'
    },
    {
      name: 'Dr. Ankit Chavan',
      role: 'BVSC & AH',
      experience: '2+ years experience in small animals.',
      image: '/static/images/Aniket.jpg',
      gradient: 'from-purple-50 to-pink-50',
      roleColor: 'text-purple-600'
    }
  ];

  const services = Object.values(servicesData).slice(0, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

      {/* SEO-Optimized Hero Slider */}
      <section id="hero" className="relative h-screen max-h-[900px] min-h-[600px] overflow-hidden bg-gray-900 group">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <picture className="hidden md:block absolute inset-0">
                <img 
                  src={slide.imageDesktop}
                  alt={`${slide.title} - MrigaAayuvets Mumbai`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>

              <picture className="block md:hidden absolute inset-0">
                <img 
                  src={slide.imageMobile}
                  alt={`${slide.title} - Pet Hospital Mumbai`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
            </div>
          ))}
        </div>

        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block animate-fadeIn">
                <div className="bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold border border-white/20 text-white shadow-2xl">
                  ✨ Mumbai's Most Trusted Veterinary Clinic
                </div>
              </div>

              {/* SEO-OPTIMIZED H1 with Keywords */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4">
                  {heroSlides[currentSlide].title}
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                    {heroSlides[currentSlide].titleHighlight}
                  </span>
                </h1>
              </div>

              <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <Link
                  to={heroSlides[currentSlide].buttonLink}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
                  aria-label="Book veterinary appointment online"
                >
                  <span>{heroSlides[currentSlide].buttonText}</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 rounded-full transition-all duration-300 shadow-2xl border border-white/20 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 rounded-full transition-all duration-300 shadow-2xl border border-white/20 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-white/20 shadow-2xl">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-10 sm:w-12 h-2.5 sm:h-3 bg-white shadow-lg' 
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="md:hidden absolute top-4 right-4 z-30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-bold shadow-lg">
          {currentSlide + 1} / {heroSlides.length}
        </div>
      </section>

      {/* Stats Bar - With Keywords */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM4.5 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm14 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 4c-3 0-5.5 1.5-7 3.5 0 0 0 .1 0 .1V21h14v-3.4c0-.1 0-.1 0-.1-1.5-2-4-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">
                <CountUp end={500} duration={2.5} suffix="+" />
              </div>
              <p className="text-sm sm:text-base text-blue-100">Happy Pet Parents</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">
                <CountUp end={5} duration={2.5} suffix="+" />
              </div>
              <p className="text-sm sm:text-base text-blue-100">Years Experience</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm3 11h-2v2H9v-2H7v-2h2v-2h2v2h2v2z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">24/7</div>
              <p className="text-sm sm:text-base text-blue-100">Emergency Available</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">
                <CountUp end={100} duration={2.5} suffix="%" />
              </div>
              <p className="text-sm sm:text-base text-blue-100">Home Visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - SEO Optimized */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              VETERINARY SERVICES IN MUMBAI
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
                } p-2 group-hover:scale-110 transition-transform duration-300`}>
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Veterinary Service Mumbai`}
                    className="h-full w-full object-cover rounded-full"
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

      {/* About Section - SEO Keywords */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                MUMBAI'S TRUSTED VETERINARY CLINIC
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
                Your Pet's Health is Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Top Priority</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                At <strong className="text-blue-600">MrigaAayuvets</strong>, we provide professional veterinary home services in Mumbai with expert care for dogs, cats, and all pets. Our experienced veterinarians offer 24/7 emergency care, home visit services, vaccinations, surgery, and complete animal healthcare at affordable prices.
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
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
                <img 
                  src="/static/images/slide6.jpeg" 
                  alt="MrigaAayuvets Veterinary Clinic Mumbai - Professional Pet Care" 
                  className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              EXPERT VETERINARY DOCTORS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Veterinary Specialists</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Certified and experienced veterinarians in Mumbai dedicated to your pet's health and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${doctor.gradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center`}
              >
                <div className="relative mb-6">
                  <div className="relative inline-block">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.role} at MrigaAayuvets Mumbai`}
                      className="rounded-full h-32 w-32 mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{doctor.name}</h3>
                <p className={`${doctor.roleColor} font-semibold mb-3 text-sm sm:text-base`}>{doctor.role}</p>
                <p className="text-gray-600 text-sm">{doctor.experience}</p>
              </div>
            ))}
          </div>

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

      {/* Contact Section - SEO Keywords */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
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
              <p className="text-blue-100 text-sm mb-4">24/7 Available in Mumbai</p>
              <span className="text-white font-bold">Emergency Contact</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
