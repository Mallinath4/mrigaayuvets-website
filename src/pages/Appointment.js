import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pet_name: '',
    pet_type: '',
    service: '',
    preferred_date: new Date().toISOString().split('T')[0],
    preferred_time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Updated to use backend API
  const sendToWhatsApp = async () => {
    if (!validateForm()) {
      alert('Please fill in all required fields correctly before submitting.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Open WhatsApp with the generated URL
        window.open(data.whatsappUrl, '_blank');

        setSuccessMessage('✅ Appointment booked! Opening WhatsApp...');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          pet_name: '',
          pet_type: '',
          service: '',
          preferred_date: '',
          preferred_time: '',
          message: ''
        });

        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            BOOK YOUR VISIT
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            📅 Book Appointment
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            We're here to care for your pets available. Schedule your home visit today! 🐾
          </p>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918208657969"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/918208657969"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {successMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg flex items-center animate-fade-in">
            <span className="text-2xl mr-3">✅</span>
            <span className="font-semibold">{successMessage}</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SCHEDULE YOUR VISIT
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll confirm your slot via WhatsApp 📲
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Info Card */}
          <div className="space-y-6">
            {/* Why Book Card */}
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Why Book With Us?</h3>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                We provide trusted veterinary services at your doorstep. Booking online helps us serve your pets faster and better.
              </p>

              <ul className="space-y-3">
                {[
                  { icon: '🏠', text: 'Stress-free home visits' },
                  { icon: '⚡', text: 'emergency support' },
                  { icon: '🥗', text: 'Personalized nutrition & care' },
                  { icon: '👨‍⚕️', text: 'Experienced veterinarians' },
                  { icon: '💊', text: 'Modern equipment & medicines' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚕️</span>
                Our Services
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  '💉 Vaccination',
                  '⚕️ General Treatment',
                  '💊 Deworming',
                  '✂️ Pet Grooming',
                  '💅 Nail Trimming',
                  '🦷 Dental Care',
                  '📸 X-Ray Services',
                  '🚨 Emergency Care'
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg">
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Card */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
              <div className="text-5xl mb-3">🚨</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Need Immediate Care?</h3>
              <p className="text-red-100 text-sm mb-5">
                Contact us now for emergency veterinary services at your doorstep
              </p>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20emergency%20veterinary%20services%20for%20my%20pet.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 hover:bg-red-50 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                Emergency Contact
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Book Your Appointment</h3>
            </div>
            
            <form className="space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Pet Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                    className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="pet_name" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    id="pet_name"
                    name="pet_name"
                    value={formData.pet_name}
                    onChange={handleChange}
                    placeholder="e.g., Bruno"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Service & Pet Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  >
                    <option value="">Select Service</option>
                    <option value="Vaccination">💉 Vaccination</option>
                    <option value="General Treatment">⚕️ General Treatment</option>
                    <option value="Deworming">💊 Deworming</option>
                    <option value="Grooming">✂️ Pet Grooming</option>
                    <option value="Nail Trimming">💅 Nail Trimming</option>
                    <option value="Dental Care">🦷 Dental Care</option>
                    <option value="X-Ray">📸 X-Ray Services</option>
                    <option value="Emergency Care">🚨 Emergency Care</option>
                    <option value="Nutrition Consultation">🥗 Nutrition</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="pet_type" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Pet Type
                  </label>
                  <select
                    id="pet_type"
                    name="pet_type"
                    value={formData.pet_type}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  >
                    <option value="">Select Type</option>
                    <option value="Dog">🐕 Dog</option>
                    <option value="Cat">🐈 Cat</option>
                    <option value="Bird">🐦 Bird</option>
                    <option value="Rabbit">🐰 Rabbit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferred_date" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    min={minDate}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="preferred_time" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">🕘 9:00 AM</option>
                    <option value="10:00">🕙 10:00 AM</option>
                    <option value="11:00">🕚 11:00 AM</option>
                    <option value="12:00">🕛 12:00 PM</option>
                    <option value="14:00">🕑 2:00 PM</option>
                    <option value="15:00">🕒 3:00 PM</option>
                    <option value="16:00">🕓 4:00 PM</option>
                    <option value="17:00">🕔 5:00 PM</option>
                    <option value="18:00">🕕 6:00 PM</option>
                    <option value="19:00">🕖 7:00 PM</option>
                    <option value="19:00">🕖 8:00 PM</option>
                    <option value="19:00">🕖 9:00 PM</option>
                    <option value="19:00">🕖 10:00 PM</option>
                    <option value="19:00">🕖 11:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  Additional Message / Symptoms
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your pet's condition in detail..."
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed scale-100' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                      Book via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Appointment;
