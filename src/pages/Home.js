import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';

// CountUp Component
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

// DoctorsGrid Component
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
          image: '/images/siddhu.png',
          gradient: 'from-blue-50 to-indigo-50',
          roleColor: 'text-blue-600'
        },
        {
          name: 'Dr. Ganesh Jagtap',
          role: 'Internal Medicine Specialist',
          experience: '5+ years specializing in pet internal medicine, cardiology, and preventive care for all breeds.',
          image: '/images/Ganesh.jpg',
          gradient: 'from-indigo-50 to-purple-50',
          roleColor: 'text-indigo-600'
        },
        {
          name: 'Dr. Ankit Chavan',
          role: 'BVSC & AH',
          experience: '2+ years experience in small animals treatment and budding veterinary pathologist.',
          image: '/images/Aniket.jpg',
          gradient: 'from-purple-50 to-pink-50',
          roleColor: 'text-purple-600'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {doctors.map((doctor, index) => (
        <div 
          key={index} 
          className={`group bg-gradient-to-br ${doctor.gradient} rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center`}
        >
          <div className="relative mb-4 md:mb-6">
            <div className="relative inline-block">
              <img
                src={doctor.image}
                alt={`${doctor.name} - Veterinarian at MrigaAayuvets`}
                className="rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full p-1.5 md:p-2 shadow-lg animate-pulse">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{doctor.name}</h3>
          <p className={`${doctor.roleColor} font-semibold mb-2 md:mb-3 text-xs md:text-sm`}>{doctor.role}</p>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{doctor.experience}</p>
        </div>
      ))}
    </div>
  );
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroSlides = [
    {
      imageDesktop: '/images/djsl.jpg',
      imageMobile: '/images/djsl.jpg',
      title: 'Best Veterinary Services',
      subtitle: 'At Home in Mumbai',
      titleHighlight: 'Emergency Pet Care',
      description: 'Expert dog doctors, cat specialists, and emergency care at your doorstep',
      buttonText: 'Book Appointment',
      buttonLink: '/appointment'
    },
    {
      imageDesktop: '/images/djsl1.jpg',
      imageMobile: '/images/djsl1.jpg',
      title: 'Expert Veterinarians',
      subtitle: 'Professional Care',
      titleHighlight: 'Home Visit Services',
      description: 'Certified pet doctors providing treatment, vaccinations & surgery',
      buttonText: 'Our Services',
      buttonLink: '/services'
    },
    {
      imageDesktop: '/images/djsl2.jpg',
      imageMobile: '/images/djsl2.jpg',
      title: 'Emergency Available',
      subtitle: 'Always Ready',
      titleHighlight: 'Pet Hospital',
      description: 'Round-the-clock emergency care for dogs, cats & all pets',
      buttonText: 'Emergency Contact',
      buttonLink: '/contact'
    },
    {
      imageDesktop: '/images/slider4.jpg',
      imageMobile: '/images/slider4.jpg',
      title: 'Affordable Pet Care',
      subtitle: 'Stress-Free Service',
      titleHighlight: 'Home Visit Services',
      description: 'Professional treatment in your pet\'s comfort zone',
      buttonText: 'Learn More',
      buttonLink: '/about'
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
      
      {/* Hero Slider - Fully Responsive */}
      <section id="hero" className="relative w-full h-screen max-h-[600px] sm:max-h-[700px] md:max-h-[800px] lg:max-h-[900px] min-h-[500px] overflow-hidden bg-gray-900 group">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
              }`}
            >
              {/* Images with proper object-fit */}
              <img 
                src={currentSlide === index ? slide.imageDesktop : slide.imageMobile}
                alt={`${slide.title} - MrigaAayuvets Mumbai`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-3 sm:space-y-5 md:space-y-6">
              {/* Badge */}
              <div className="inline-block animate-fadeIn">
                <div className="bg-white/90 backdrop-blur-md px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-semibold text-blue-600 shadow-xl hover:scale-105 transition-transform">
                  <span className="inline-block animate-pulse mr-2">✨</span>
                  Mumbai's Most Trusted Veterinary Clinic
                </div>
              </div>

              {/* Main Title */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
                  {heroSlides[currentSlide].title}
                  <br className="hidden sm:block" />
                  <span className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-black">
                  {heroSlides[currentSlide].titleHighlight}
                </p>
              </div>

              {/* Description */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs sm:text-sm md:text-lg text-white max-w-3xl mx-auto leading-relaxed font-medium px-2" 
                   style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <Link
                  to={heroSlides[currentSlide].buttonLink}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
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
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-blue-600 p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-blue-600 p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 bg-white/85 backdrop-blur px-3 py-2 rounded-full shadow-lg">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-6 h-1.5 bg-blue-600' 
                  : 'w-1.5 h-1.5 bg-gray-400 hover:bg-blue-400 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Slide Counter */}
        <div className="md:hidden absolute top-3 right-3 z-30 bg-white/85 px-2 py-1 rounded-full text-blue-600 text-xs font-bold shadow-md">
          {currentSlide + 1}/{heroSlides.length}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8 sm:py-12 md:py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
            {[
              { icon: '👥', label: 'Happy Pet Parents', value: 3000 },
              { icon: '⭐', label: 'Years Experience', value: 5 },
              { icon: '🏥', label: 'Emergency Available', value: 100, suffix: '%' },
              { icon: '🏡', label: 'Home Visits', value: 100, suffix: '%' }
            ].map((stat, i) => (
              <div key={i} className="text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-4">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 md:mb-2">
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || '+'} />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-blue-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              VETERINARY SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-800">
              Professional Pet Care <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive veterinary care for dogs, cats & all pets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`group bg-white rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl p-5 sm:p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border-t-4 ${
                  index % 3 === 0 ? 'border-blue-500' : 
                  index % 3 === 1 ? 'border-indigo-500' : 
                  'border-purple-500'
                }`}
              >
                <div className={`h-20 w-20 sm:h-32 sm:w-32 mx-auto mb-4 sm:mb-6 overflow-hidden rounded-full bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-blue-100 to-blue-200' : 
                  index % 3 === 1 ? 'from-indigo-100 to-indigo-200' : 
                  'from-purple-100 to-purple-200'
                } p-2 group-hover:scale-110 transition-transform duration-300`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">{service.title}</h3>
                <p className="text-xs sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description.substring(0, 80)}...
                </p>
                <Link 
                  to={`/service/${service.id}`} 
                  className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm text-blue-600 hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2.5 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl inline-flex items-center gap-2 text-sm sm:text-base"
            >
              View All Services
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                TRUSTED VETERINARY CLINIC
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-800">
                Your Pet's Health is Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Priority</span>
              </h2>
              <p className="text-xs sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-6 leading-relaxed">
                At <strong className="text-blue-600">MrigAayuvets</strong>, we provide professional veterinary home services in Mumbai with expert care for dogs, cats, and all pets.
              </p>
              <p className="text-xs sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                From preventative care to emergency treatments and specialized surgeries, we ensure your pet receives the best possible care – right at your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  to="/about" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow-lg inline-flex items-center justify-center gap-2 text-xs sm:text-base"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
                <Link 
                  to="/appointment" 
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow-lg inline-flex items-center justify-center gap-2 text-xs sm:text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Now
                </Link>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl sm:rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="/images/slide6.jpeg" 
                  alt="MrigaAayuvets Veterinary Clinic" 
                  className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full object-cover h-64 sm:h-96 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              EXPERT VETERINARY DOCTORS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-800">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Specialists</span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Certified and experienced veterinarians dedicated to your pet's health
            </p>
          </div>

          <DoctorsGrid />

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/appointment"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-2.5 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4">Contact Us 📞</h2>
            <p className="text-xs sm:text-base md:text-lg text-blue-100">Emergency Pet Care - Book Appointments & Urgent Help</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <a 
              href="tel:+918208657969" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-5 sm:p-8 rounded-xl sm:rounded-2xl text-center transition-all transform hover:-translate-y-2 border border-white/20"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📞</div>
              <h4 className="font-bold text-base sm:text-lg mb-2">Call Veterinarian</h4>
              <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Direct consultation with pet doctor</p>
              <span className="text-white font-bold">+91 8208657969</span>
            </a>

            <a 
              href="https://wa.me/918208657969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-5 sm:p-8 rounded-xl sm:rounded-2xl text-center transition-all transform hover:-translate-y-2 border border-white/20"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💬</div>
              <h4 className="font-bold text-base sm:text-lg mb-2">WhatsApp</h4>
              <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Quick responses & booking</p>
              <span className="text-white font-bold">Chat Now</span>
            </a>

            <a 
              href="https://wa.me/918208657969?text=🚨%20EMERGENCY%20🚨" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-5 sm:p-8 rounded-xl sm:rounded-2xl text-center transition-all transform hover:-translate-y-2 border border-white/20"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚨</div>
              <h4 className="font-bold text-base sm:text-lg mb-2">Emergency</h4>
              <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Available in Mumbai</p>
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
