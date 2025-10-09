import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxLength = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: digitsOnly });
    } 
    else if (name === 'message') {
      if (value.length <= maxLength) {
        setFormData({ ...formData, [name]: value });
        setCharCount(value.length);
      }
    } 
    else {
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

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = () => {
    if (!validateForm()) {
      alert('Please fill in all required fields before sending to WhatsApp.');
      return;
    }

    setLoading(true);

    const whatsappMessage = `📧 *New Contact Message* 📧%0A%0A👤 *Contact Details:*%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'Not provided'}%0A%0A📋 *Subject:* ${formData.subject || 'General Inquiry'}%0A%0A💬 *Message:*%0A${formData.message}%0A%0AThank you for contacting MrigaAayuvets!`;

    const phone = '918208657969';
    window.open(`https://wa.me/${phone}?text=${whatsappMessage}`, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Opening WhatsApp...');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setCharCount(0);
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section - Beautiful Blue/Indigo Gradient */}
<section className="relative h-48 sm:h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative z-10 text-center px-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-2 sm:mb-3 animate-fade-in">
      Contact MrigaAayuvets 📞
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-blue-100">
      We're here to care for your pets 24/7
    </p>
  </div>
</section>


      {successMessage && (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-lg flex items-center animate-fade-in">
      <span className="text-2xl mr-3">✅</span>
      <span className="font-semibold">{successMessage}</span>
    </div>
  </div>
)}


      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
  GET IN TOUCH
</div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 sm:mb-4">
            We'd Love To Hear From You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out for appointments, questions, or emergencies. Our team is ready to help! 🐾
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          
          {/* Contact Info Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Information</h3>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base">
              Our veterinary experts are here to provide the best care for your beloved pets. Contact us anytime!
            </p>
            
            <div className="space-y-5">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                <div className="bg-green-500 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Phone</p>
                  <a href="tel:+918208657969" className="text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm">
                    +91 8208657969
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                <div className="bg-purple-500 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Email</p>
                  <a href="mailto:mrigaayuvets@gmail.com" className="text-purple-600 hover:text-purple-800 font-semibold text-xs sm:text-sm break-all">
                    mrigaayuvets@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Working Hours</p>
                  <p className="text-gray-600 text-xs sm:text-sm">24/7 Emergency Services</p>
                  <p className="text-gray-500 text-xs">Regular: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-5 sm:p-6 shadow-lg mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h4 className="font-extrabold text-base sm:text-lg">Emergency Contact</h4>
              </div>
              <p className="text-red-100 text-xs sm:text-sm mb-4">
                For immediate veterinary emergencies, contact us directly via WhatsApp or call:
              </p>
              <a 
                href="https://wa.me/918208657969?text=🚨%20EMERGENCY%20🚨%0AHello%20Doctor,%20I%20have%20a%20pet%20emergency.%20Please%20help%20immediately!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 hover:bg-red-50 font-bold py-2.5 px-5 rounded-lg transition duration-300 inline-flex items-center gap-2 text-xs sm:text-sm shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                Emergency WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Send Us a Message</h3>
            </div>
            
            <form className="space-y-5">
              {/* Name */}
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
                  placeholder="Enter your full name"
                  className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  Phone Number <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.phone}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">💬 General Inquiry</option>
                  <option value="Appointment Booking">📅 Appointment Booking</option>
                  <option value="Emergency">🚨 Emergency</option>
                  <option value="Service Information">⚕️ Service Information</option>
                  <option value="Billing Inquiry">💰 Billing Inquiry</option>
                  <option value="Feedback">⭐ Feedback</option>
                  <option value="Other">📝 Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you and your pet..."
                  className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.message}</p>}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    {charCount}/{maxLength} characters
                  </p>
                  <div className={`text-xs font-semibold ${charCount > maxLength * 0.9 ? 'text-red-500' : 'text-gray-400'}`}>
                    {maxLength - charCount} remaining
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base ${loading ? 'opacity-70 cursor-not-allowed scale-100' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* WhatsApp */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-4xl sm:text-5xl mb-3 animate-bounce">💬</div>
            <h4 className="font-bold mb-2 text-base sm:text-lg">WhatsApp Chat</h4>
            <p className="text-xs sm:text-sm text-green-100 mb-4">Quick chat for instant responses</p>
            <a 
              href="https://wa.me/918208657969" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition duration-200 inline-block text-xs sm:text-sm shadow-lg"
            >
              Start Chat Now
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-4xl sm:text-5xl mb-3 animate-pulse">📞</div>
            <h4 className="font-bold mb-2 text-base sm:text-lg">Direct Call</h4>
            <p className="text-xs sm:text-sm text-blue-100 mb-4">Speak directly with our vets</p>
            <a 
              href="tel:+918208657969" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 inline-block text-xs sm:text-sm shadow-lg"
            >
              Call Now
            </a>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="text-4xl sm:text-5xl mb-3">📧</div>
            <h4 className="font-bold mb-2 text-base sm:text-lg">Email Support</h4>
            <p className="text-xs sm:text-sm text-purple-100 mb-4">For detailed inquiries</p>
            <a 
              href="mailto:mrigaayuvets@gmail.com" 
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition duration-200 inline-block text-xs sm:text-sm shadow-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
