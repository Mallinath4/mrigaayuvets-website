import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function GeneralTreatment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / General Treatment
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Complete Guide to General Veterinary Treatment
            </h1>
            
            <img 
              src="/static/images/imgs2.jpg" 
              alt="General Treatment"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6">
              {/* Introduction */}
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                General veterinary treatment encompasses routine health care, illness diagnosis, and treatment of common pet health issues. Our experienced veterinarians provide comprehensive care for all your pet's medical needs, ensuring their health and wellbeing throughout their life.
              </p>

              {/* Why It's Important */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-2xl p-6 my-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">💡</span>
                  Why General Treatment is Important
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Regular check-ups and prompt treatment of health issues prevent minor problems from becoming serious. Early detection and treatment save lives, reduce overall healthcare costs, and ensure your pet maintains optimal quality of life.
                </p>
              </div>

              {/* What We Offer */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                What Our General Treatment Includes
              </h2>
              
              <ul className="space-y-3 ml-6">
                {[
                  "Complete physical examination and health assessment",
                  "Diagnosis and treatment of common illnesses",
                  "Medication prescription and administration",
                  "Health monitoring and follow-up care",
                  "Emergency consultation and treatment",
                  "Preventive care and wellness counseling"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Common Conditions */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Common Conditions We Treat
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Respiratory Issues", items: ["Coughing", "Sneezing", "Breathing difficulties"] },
                  { title: "Digestive Problems", items: ["Vomiting", "Diarrhea", "Loss of appetite"] },
                  { title: "Skin Conditions", items: ["Allergies", "Infections", "Parasites"] },
                  { title: "Urinary Issues", items: ["Frequent urination", "Blood in urine", "Straining"] }
                ].map((condition, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{condition.title}</h3>
                    <ul className="space-y-1 text-sm">
                      {condition.items.map((item, iidx) => (
                        <li key={iidx} className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 my-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  Benefits of Professional General Treatment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Early disease detection',
                    'Comprehensive health assessment',
                    'Personalized treatment plans',
                    'Home visit convenience',
                    'Experienced veterinarians',
                    'Affordable quality care'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-green-600">●</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* When to Schedule */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-cyan-600 pl-6">
                When to Schedule General Treatment
              </h2>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-6">
                <h4 className="font-bold text-cyan-800 mb-3">Recommended Schedule:</h4>
                <ul className="space-y-2">
                  {[
                    { title: "Puppies/Kittens", desc: "Monthly check-ups until 6 months" },
                    { title: "Adult Pets", desc: "Annual wellness exams" },
                    { title: "Senior Pets", desc: "Every 6 months recommended" },
                    { title: "As Needed", desc: "Any health concerns"  }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span><strong>{item.title}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Signs */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-xl">
                  <span className="text-2xl">⚠️</span> Contact Us Immediately If:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Loss of appetite for more than 24 hours",
                    "Vomiting or diarrhea",
                    "Unusual lethargy or weakness",
                    "Difficulty breathing or coughing",
                    "Any behavioral changes"
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-red-700">
                      <span>•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <a href="tel:+918208657969" className="text-blue-600 hover:underline font-medium">+91 82086 57969</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    <a href="mailto:Mrigaayuvets2025@gmail.com" className="text-blue-600 hover:underline font-medium">Mrigaayuvets2025@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Our Approach */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Our Professional Approach
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                At MrigaAayuvets, we believe in providing compassionate, comprehensive care. Our experienced veterinarians use the latest techniques and equipment to ensure your pet receives the best possible treatment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">👨‍⚕️</div>
                  <h4 className="font-bold text-gray-800 mb-1">Expert Vets</h4>
                  <p className="text-sm text-gray-600">5+ years experience</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <h4 className="font-bold text-gray-800 mb-1">Home Service</h4>
                  <p className="text-sm text-gray-600">Your pet's comfort</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-bold text-gray-800 mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>

              {/* Diagnostic Services */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                Diagnostic Services
              </h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
                <div className="space-y-3">
                  {[
                    { service: "Physical Examination", desc: "Thorough head-to-tail assessment" },
                    { service: "Laboratory Tests", desc: "Blood work, urinalysis, fecal tests" },
                    { service: "Imaging", desc: "X-rays, ultrasound when needed" },
                    { service: "Vital Signs Monitoring", desc: "Temperature, pulse, respiration" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-amber-600 text-xl">→</span>
                      <div>
                        <strong className="text-gray-800">{item.service}:</strong>
                        <span className="text-gray-600 ml-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "How long does a general check-up take?",
                    a: "Typically 30-45 minutes including examination and consultation."
                  },
                  {
                    q: "What should I prepare for the visit?",
                    a: "Have your pet's medical history, current medications, and any symptoms noted down."
                  },
                  {
                    q: "Do you provide follow-up care?",
                    a: "Yes, we provide complete follow-up including phone consultations and home visits if needed."
                  },
                  {
                    q: "What are your service hours?",
                    a: "We're available 24/7 for consultations and emergency services."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                    <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                    <p className="text-gray-600">A: {faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
                  <span>📌</span> Key Takeaways
                </h4>
                <ul className="space-y-3">
                  {[
                    "Regular general treatment is essential for your pet's health",
                    "Home visits reduce stress for your pet",
                    "Early detection prevents serious health issues",
                    "Professional care ensures best outcomes",
                    "Prevention is always better than treatment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back Button */}
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Services
            </Link>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Book Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border-2 border-blue-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🩺</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Get professional care at your doorstep</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20General%20Treatment%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                📅 Book Now via WhatsApp
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a href="tel:+918208657969" className="flex items-center gap-2 text-blue-600 hover:underline">
                  📞 +91 82086 57969
                </a>
                <a href="mailto:Mrigaayuvets2025@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline text-sm">
                  📧 Mrigaayuvets2025@gmail.com
                </a>
                <p className="flex items-center gap-2 text-gray-600">
                  📍 Mumbai, Maharashtra
                </p>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🚨</div>
                <h3 className="text-xl font-bold text-red-700">Emergency Services</h3>
              </div>
              <a 
                href="tel:+918208657969" 
                className="block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full text-center transition"
              >
                Call Emergency
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GeneralTreatment;
