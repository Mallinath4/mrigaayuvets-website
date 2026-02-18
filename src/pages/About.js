import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  const [currentDoctorSlide, setCurrentDoctorSlide] = useState(0);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch doctors from API
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('/api/doctors');
      if (response.ok) {
        const data = await response.json();
        const mappedDoctors = data.doctors.map((doc, index) => ({
          name: doc.name,
          role: doc.qualification,
          experience: doc.bio,
          image: doc.image,
          gradient: ['from-blue-50 to-indigo-50', 'from-indigo-50 to-purple-50', 'from-purple-50 to-pink-50'][index % 3],
          roleColor: ['text-blue-600', 'text-indigo-600', 'text-purple-600'][index % 3],
          tags: [doc.specialization, `${doc.experience}+ years`],
          tagColors: [
            ['bg-blue-100 text-blue-800', 'bg-cyan-100 text-cyan-800'],
            ['bg-indigo-100 text-indigo-800', 'bg-purple-100 text-purple-800'],
            ['bg-purple-100 text-purple-800', 'bg-pink-100 text-pink-800']
          ][index % 3]
        }));
        setDoctors(mappedDoctors);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctors([
        {
          name: 'Dr. Siddheshwar Khonde',
          role: 'BVSc & AH',
          experience: '5+ years of experience in veterinary practice with specialization in small animal and emergency care.',
          image: '/static/images/siddhu.png',
          gradient: 'from-blue-50 to-indigo-50',
          roleColor: 'text-blue-600',
          tags: ['Surgery Specialist', '5+ Years'],
          tagColors: ['bg-blue-100 text-blue-800', 'bg-cyan-100 text-cyan-800']
        },
        {
          name: 'Dr. Ganesh Jagtap',
          role: 'BVSc & AH',
          experience: '5+ years specializing in pet internal medicine, cardiology, and preventive care for all breeds.',
          image: '/static/images/Ganesh.jpg',
          gradient: 'from-indigo-50 to-purple-50',
          roleColor: 'text-indigo-600',
          tags: ['Cardiology Expert', '5+ Years'],
          tagColors: ['bg-indigo-100 text-indigo-800', 'bg-purple-100 text-purple-800']
        },
        {
          name: 'Dr. Ankit Chavan',
          role: 'BVSc & AH',
          experience: '2+ years experience in small animals treatment and budding veterinary pathologist.',
          image: '/static/images/Aniket.jpg',
          gradient: 'from-purple-50 to-pink-50',
          roleColor: 'text-purple-600',
          tags: ['Pathology', '2+ Years'],
          tagColors: ['bg-purple-100 text-purple-800', 'bg-pink-100 text-pink-800']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (doctors.length > 0) {
      const interval = setInterval(() => {
        setCurrentDoctorSlide((prev) => (prev + 1) % doctors.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [doctors.length]);

  // Auto-rotate values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextDoctor = () => {
    setCurrentDoctorSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentDoctorSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const goToSlide = (index) => {
    setCurrentDoctorSlide(index);
  };

  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      desc: 'Highest standards of veterinary care with advanced medical equipment and techniques',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💚',
      title: 'Compassion',
      desc: 'Treating every pet with love, care, and respect as if they were our own',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🎯',
      title: 'Integrity',
      desc: 'Transparent pricing, honest advice, and ethical practices in all we do',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      desc: 'Adopting latest veterinary technologies and best practices for better outcomes',
      color: 'from-orange-500 to-red-500'
    }
  ];



  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "MrigAayuvets",
    "description": "Professional veterinary services in Mumbai with home visits, 24/7 emergency care, experienced vets, and compassionate pet care.",
    "url": "https://mrigaayuvets.in/about",
    "telephone": "+918208657969",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₹₹"
  };

  return (
    <div className="bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About MrigAayuvets | Best Veterinary Clinic Mumbai | Expert Pet Care</title>
        <meta name="description" content="Learn about MrigAayuvets - Mumbai\'s trusted veterinary clinic. Expert vets, 24/7 emergency care, home visits, 3000+ happy pets. Professional, compassionate pet healthcare." />
        <meta name="keywords" content="veterinary clinic mumbai, about mrigaayuvets, best vet mumbai, pet care mumbai, veterinary doctors mumbai, animal hospital mumbai" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About MrigAayuvets | Best Veterinary Clinic Mumbai" />
        <meta property="og:description" content="Mumbai\'s most trusted veterinary clinic with expert vets, 24/7 care, and home visits. 3000+ happy pets treated." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrigaayuvets.in/about" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://mrigaayuvets.in/about" />
      </Helmet>

      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-gray-900 font-semibold">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            MUMBAI\'S MOST TRUSTED VET CLINIC
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            About MrigAayuvets 🐾
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Compassionate, professional, and stress-free veterinary care – right at your doorstep
          </p>

          {/* Enhanced Stats */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">Pets Treated</div>
              <div className="text-xs text-blue-200 mt-1">& Growing Daily</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">Years Experience</div>
              <div className="text-xs text-blue-200 mt-1">Expert Team</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">Emergency Care</div>
              <div className="text-xs text-blue-200 mt-1">Always Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">Home Visits</div>
              <div className="text-xs text-blue-200 mt-1">All Mumbai</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Your Pet's Health is Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              At <strong className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">MrigAayuvets</strong>, we believe every pet deserves exceptional healthcare. Founded in 2019, we\'ve grown to become <span className="font-semibold text-gray-800">Mumbai\'s most trusted veterinary service</span>, treating over 5000 happy pets and counting.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Our team of <span className="font-semibold text-blue-600">certified veterinarians</span> brings decades of combined experience to provide comprehensive care – from <span className="font-semibold text-purple-600">routine checkups to emergency treatments</span> – all in the comfort of your home. We understand that pets are family, and we treat them accordingly.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {[
                { icon: '✅', text: 'Board-Certified Veterinarians with 5-10+ Years Experience', color: 'text-blue-600' },
                { icon: '✅', text: 'Advanced Medical Equipment & Modern Treatment Facilities', color: 'text-indigo-600' },
                { icon: '✅', text: 'Stress-Free Home Visits Across All Mumbai Localities', color: 'text-purple-600' },
                { icon: '✅', text: 'Transparent Pricing with No Hidden Charges Ever', color: 'text-pink-600' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm sm:text-base">
                  <span className={`${item.color} font-bold text-xl mr-3`}>{item.icon}</span>
                  <span className="text-gray-700 flex-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/appointment" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Appointment Now
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg border-2 border-blue-600 hover:border-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base group"
              >
                View All Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="/static/images/slide6.jpeg" 
                alt="Professional Veterinary Care at MrigAayuvets Mumbai" 
                className="relative rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">4.9⭐</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR CORE VALUES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our values guide every decision we make and shape the care we provide to your beloved pets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                onClick={() => setActiveValue(idx)}
                className={`group cursor-pointer bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-500 transform ${
                  activeValue === idx 
                    ? 'scale-105 shadow-2xl ring-4 ring-blue-500 ring-opacity-50' 
                    : 'hover:scale-105 hover:shadow-xl'
                }`}
              >
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform ${
                  activeValue === idx ? 'scale-110 rotate-6' : 'group-hover:scale-110 group-hover:rotate-6'
                } transition-transform duration-500`}>
                  <span className="text-3xl sm:text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className={`text-gray-600 text-sm text-center transition-all duration-500 ${
                  activeValue === idx ? 'opacity-100' : 'opacity-70'
                }`}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Fast & Effective Pet Care
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Getting professional veterinary care for your pet has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                img: '/static/images/book1.png',
                title: 'Book Appointment',
                desc: 'Choose your preferred time slot online or call us. We fit into your schedule.',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              {
                num: '02',
                img: '/static/images/home.jpeg',
                title: 'Vet Visits Your Home',
                desc: 'Our certified veterinarian arrives at your doorstep with all necessary equipment.',
                color: 'from-indigo-500 to-purple-500',
                bgColor: 'from-indigo-50 to-purple-50'
              },
              {
                num: '03',
                img: '/static/images/multi.jpeg',
                title: 'Comprehensive Care',
                desc: 'Complete examination, treatment, and follow-up care – all in your pet\'s comfort zone.',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50'
              }
            ].map((step, idx) => (
              <div key={idx} className={`group bg-gradient-to-br ${step.bgColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden`}>
                <div className={`absolute top-4 right-4 text-6xl sm:text-7xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-10`}>
                  {step.num}
                </div>
                <div className={`bg-gradient-to-r ${step.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:scale-110 transition-transform relative z-10`}>
                  <img src={step.img} className="h-10 sm:h-12 w-10 sm:w-12 object-contain" alt={step.title} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 sm:p-10 text-center transform hover:scale-105 transition-all duration-300">
              <div className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 rounded-full mb-6 shadow-lg">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To provide <span className="font-semibold text-blue-600">exceptional veterinary care</span> that enhances the health and happiness of pets across Mumbai. We are committed to <span className="font-semibold text-purple-600">stress-free home visits</span>, advanced treatments, and compassionate service that treats every pet like family. 🐾
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-3xl shadow-xl p-8 sm:p-10 text-center transform hover:scale-105 transition-all duration-300">
              <div className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-full mb-6 shadow-lg">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To become <span className="font-semibold text-purple-600">India\'s leading veterinary service</span> known for innovation, compassion, and accessibility. We envision a future where every pet receives <span className="font-semibold text-pink-600">world-class medical care</span> without the stress of clinic visits. 🌟
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Pet Healthcare Solutions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              From preventive care to emergency treatments, we provide comprehensive veterinary services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { img: '/static/images/vaccine.png', name: 'Vaccinations & Immunization', color: 'from-blue-50 to-indigo-50', iconBg: 'from-blue-500 to-indigo-500' },
              { img: '/static/images/emergancy.png', name: '24/7 Emergency Care', color: 'from-red-50 to-orange-50', iconBg: 'from-red-500 to-orange-500' },
              { img: '/static/images/surgery.png', name: 'Surgery & Procedures', color: 'from-purple-50 to-pink-50', iconBg: 'from-purple-500 to-pink-500' },
              { img: '/static/images/nutrication.png', name: 'Nutrition & Diet Plans', color: 'from-green-50 to-emerald-50', iconBg: 'from-green-500 to-emerald-500' },
              { img: '/static/images/vaccine.png', name: 'Wellness Checkups', color: 'from-cyan-50 to-blue-50', iconBg: 'from-cyan-500 to-blue-500' },
              { img: '/static/images/surgery.png', name: 'Dental Care', color: 'from-indigo-50 to-purple-50', iconBg: 'from-indigo-500 to-purple-500' },
              { img: '/static/images/nutrication.png', name: 'Laboratory Tests', color: 'from-pink-50 to-red-50', iconBg: 'from-pink-500 to-red-500' },
              { img: '/static/images/home.jpeg', name: 'Home Visit Services', color: 'from-yellow-50 to-orange-50', iconBg: 'from-yellow-500 to-orange-500' }
            ].map((service, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${service.color} p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 text-center group cursor-pointer`}>
                <div className={`bg-gradient-to-r ${service.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <img src={service.img} className="h-8 sm:h-10 md:h-12 object-contain" alt={service.name} />
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm md:text-base leading-tight">{service.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              View All Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MEET OUR EXPERTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Experienced Veterinary Team
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Board-certified veterinarians with decades of combined experience dedicated to your pet's health
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
            </div>
          ) : doctors.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 text-lg">Our team information will be available soon.</p>
            </div>
          ) : (
            <>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentDoctorSlide * 100}%)` }}
                >
                  {doctors.map((doctor, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                      <div className={`bg-gradient-to-br ${doctor.gradient} rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 text-center h-full border-2 border-white`}>
                        <div className="relative mb-6">
                          <div className="relative inline-block">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50"></div>
                            <img
                              src={doctor.image}
                              alt={`${doctor.name} - Expert Veterinarian at MrigAayuvets`}
                              className="relative rounded-full h-28 w-28 sm:h-36 sm:w-36 mx-auto object-cover border-4 border-white shadow-2xl"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-2 shadow-xl">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{doctor.name}</h3>
                        <p className={`${doctor.roleColor} font-bold mb-4 text-sm sm:text-base`}>{doctor.role}</p>
                        <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">{doctor.experience}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {doctor.tags.map((tag, idx) => (
                            <span key={idx} className={`${doctor.tagColors[idx]} text-xs sm:text-sm px-3 py-1.5 rounded-full font-semibold shadow-md`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevDoctor}
                  className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-2xl hover:shadow-blue-500/50 text-gray-700 p-4 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button
                  onClick={nextDoctor}
                  className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-2xl hover:shadow-blue-500/50 text-gray-700 p-4 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <div className="flex justify-center mt-8 space-x-3">
                {doctors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentDoctorSlide === index 
                        ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes MrigAayuvets Different
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We go beyond traditional veterinary care to provide an exceptional experience for both pets and owners
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '🏠',
                title: 'Stress-Free Home Visits',
                desc: 'No travel stress for your pets. Our vets come to you with all necessary equipment and medications.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '⏰',
                title: '24/7 Emergency Support',
                desc: 'Round-the-clock availability for urgent pet health concerns. We\'re just a phone call away, anytime.',
                gradient: 'from-red-500 to-orange-500'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                desc: 'No hidden charges, no surprises. Clear pricing discussed upfront with detailed treatment plans.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '🎓',
                title: 'Experienced Professionals',
                desc: 'Board-certified veterinarians with 5-10+ years of specialized experience in small animal care.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🔬',
                title: 'Advanced Equipment',
                desc: 'State-of-the-art medical instruments and diagnostic tools for accurate diagnosis and treatment.',
                gradient: 'from-indigo-500 to-blue-500'
              },
              {
                icon: '💚',
                title: 'Compassionate Care',
                desc: 'We treat every pet like our own family. Gentle handling and patient care is our priority.',
                gradient: 'from-pink-500 to-red-500'
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl sm:text-6xl mb-6">🐾</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 5000+ happy pet parents who trust MrigAayuvets for professional, compassionate veterinary care
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm sm:text-base">📍 Location</p>
                  <p className="text-xs sm:text-sm text-blue-100">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm sm:text-base">📞 24/7 Phone</p>
                  <a href="tel:+918208657969" className="text-xs sm:text-sm text-blue-100 hover:text-white transition">
                    +91 8208657969
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm sm:text-base">✉️ Email</p>
                  <a href="mailto:mrigaayuvets2025@gmail.com" className="text-xs sm:text-sm text-blue-100 hover:text-white transition break-all">
                    mrigaayuvets2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/appointment" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book Appointment Now
            </Link>
            <a 
              href="https://wa.me/918208657969?text=Hello%2C%20I%20want%20to%20know%20more%20about%20MrigAayuvets%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              <i className="fab fa-whatsapp text-xl group-hover:rotate-12 transition-transform"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
