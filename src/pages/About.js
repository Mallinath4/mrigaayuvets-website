import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  const [currentDoctorSlide, setCurrentDoctorSlide] = useState(0);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch doctors from API
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('/api/doctors');
      if (response.ok) {
        const data = await response.json();
        // Map API data to match your existing structure
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
      // Fallback to default doctors if API fails
      setDoctors([
        {
          name: 'Dr. Siddheshwar Khonde',
          role: 'BVSC & AH',
          experience: '5+ years of experience in veterinary practise with specialization in small animal and emergency care.',
          image: '/static/images/siddhu.png',
          gradient: 'from-blue-50 to-indigo-50',
          roleColor: 'text-blue-600',
          tags: ['Surgery', 'Emergency Care'],
          tagColors: ['bg-blue-100 text-blue-800', 'bg-cyan-100 text-cyan-800']
        },
        {
          name: 'Dr. Ganesh Jagtap',
          role: 'BVSC & AH',
          experience: '5+ years specializing in pet internal medicine, cardiology, and preventive care for all breeds.',
          image: '/static/images/Ganesh.jpg',
          gradient: 'from-indigo-50 to-purple-50',
          roleColor: 'text-indigo-600',
          tags: ['Cardiology', 'Internal Med'],
          tagColors: ['bg-indigo-100 text-indigo-800', 'bg-purple-100 text-purple-800']
        },
        {
          name: 'Dr. Ankit Chavan',
          role: 'BVSC & AH',
          experience: '2+ years experience in small animals treatment and budding veterinary pathologist.',
          image: '/static/images/Aniket.jpg',
          gradient: 'from-purple-50 to-pink-50',
          roleColor: 'text-purple-600',
          tags: ['Exotic Pets', 'Rabbits'],
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
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [doctors.length]);

  const nextDoctor = () => {
    setCurrentDoctorSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentDoctorSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const goToSlide = (index) => {
    setCurrentDoctorSlide(index);
  };

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section - Beautiful Blue/Purple Gradient */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg animate-fade-in">
            About MrigAayuvets 🐾
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Compassionate, professional, and stress-free veterinary care – right at your doorstep.
          </p>
          
          {/* Stats */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">3000+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Happy Pets</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">100%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">100%</div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Home Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Your Pet's Health is Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              At <strong className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MrigAayuvets</strong>, we are dedicated to delivering high-quality veterinary services with
              compassion. Our team is passionate about animal health and strives to make every pet feel safe,
              comfortable, and cared for.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              From <span className="font-semibold text-blue-600">preventive care</span> to <span className="font-semibold text-purple-600">emergency treatments</span>, 
              we ensure your beloved pets receive the best care possible – in the comfort of their own home.
            </p>
            
            {/* Feature list */}
            <ul className="space-y-3 mb-6">
              {[
                '✅ Experienced & Certified Veterinarians',
                '✅ State-of-the-art Medical Equipment',
                '✅ Stress-Free Home Visits',
                '✅ Affordable & Transparent Pricing'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm sm:text-base">
                  <span className="text-blue-500 font-bold mr-2">{item.split(' ')[0]}</span>
                  <span className="text-gray-700">{item.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/appointment" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book Appointment
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src="/static/images/slide6.jpeg" 
                alt="Veterinary Service" 
                className="relative rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Responsive Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simple, Fast & Effective
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our home veterinary service is designed to make pet care convenient and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <img src="/static/images/home.jpeg" className="h-8 sm:h-10 w-8 sm:w-10 object-contain" alt="Home Visit" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Stress-Free Home Visits</h3>
              <p className="text-gray-600 text-sm sm:text-base">Keep your furry friends safe & relaxed with in-home vet care – no travel stress!</p>
            </div>
            
            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <img src="/static/images/multi.jpeg" className="h-8 sm:h-10 w-8 sm:w-10 object-contain" alt="Multi-Pet" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Multi-Pet Appointments</h3>
              <p className="text-gray-600 text-sm sm:text-base">One visit for the whole pack – ensuring complete family pet care in one go.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <img src="/static/images/book1.png" className="h-8 sm:h-10 w-8 sm:w-10 object-contain" alt="Booking" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Easy Online Booking</h3>
              <p className="text-gray-600 text-sm sm:text-base">Choose a slot that fits your schedule – we bring professional care to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12">
            <div className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 rounded-full mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We strive to enhance pet health and well-being through <span className="font-semibold text-blue-600">advanced treatments</span> and <span className="font-semibold text-purple-600">personalized care</span>.
              Every visit is designed to reduce stress, improve comfort, and deliver the highest standard of veterinary excellence. 🐾
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Complete Pet Care Solutions</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { img: '/static/images/emergancy.png', name: 'Emergency Care', color: 'from-red-50 to-orange-50' },
              { img: '/static/images/vaccine.png', name: 'Vaccinations', color: 'from-blue-50 to-indigo-50' },
              { img: '/static/images/surgery.png', name: 'Surgical Procedures', color: 'from-purple-50 to-pink-50' },
              { img: '/static/images/nutrication.png', name: 'Nutrition & Diet', color: 'from-cyan-50 to-blue-50' }
            ].map((service, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${service.color} p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group`}>
                <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <img src={service.img} className="h-8 sm:h-10 md:h-12 object-contain" alt={service.name} />
                </div>
                <p className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Responsive Slider with API Data */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR EXPERTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Experienced veterinarians dedicated to your pet's health and well-being
            </p>
          </div>

          {/* ✅ Loading State */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : doctors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No doctors available at the moment.</p>
            </div>
          ) : (
            <>
              {/* Doctor Slider */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentDoctorSlide * 100}%)` }}
                >
                  {doctors.map((doctor, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                      <div className={`bg-gradient-to-br ${doctor.gradient} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center h-full`}>
                        <div className="relative mb-4 sm:mb-6">
                          <div className="relative inline-block">
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="rounded-full h-24 w-24 sm:h-32 sm:w-32 mx-auto object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-blue-500 text-white rounded-full p-1.5 sm:p-2 shadow-lg">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{doctor.name}</h3>
                        <p className={`${doctor.roleColor} font-semibold mb-3 text-sm sm:text-base`}>{doctor.role}</p>
                        <p className="text-gray-600 text-xs sm:text-sm mb-4">{doctor.experience}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {doctor.tags.map((tag, idx) => (
                            <span key={idx} className={`${doctor.tagColors[idx]} text-xs px-2 sm:px-3 py-1 rounded-full font-medium`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevDoctor}
                  className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-xl hover:shadow-2xl text-gray-700 p-3 rounded-full transition duration-300 hover:bg-blue-50 hover:scale-110"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button
                  onClick={nextDoctor}
                  className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-xl hover:shadow-2xl text-gray-700 p-3 rounded-full transition duration-300 hover:bg-blue-50 hover:scale-110"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              {/* Slider Indicators */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {doctors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition duration-300 ${
                      currentDoctorSlide === index ? 'bg-blue-600 w-6 sm:w-8' : 'bg-blue-200 hover:bg-blue-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact CTA - Beautiful Blue/Purple Gradient */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Care for Your Pet? 🐾</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm sm:text-base">📍 Location</p>
                  <p className="text-xs sm:text-sm text-blue-100">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm sm:text-base">📞 Phone</p>
                  <a href="tel:+918208657969" className="text-xs sm:text-sm text-blue-100 hover:text-white transition">
                    +91 8208657969
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/appointment" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/918208657969" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 hover:bg-purple-800 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <i className="fab fa-whatsapp text-xl"></i>
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
