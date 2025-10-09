import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function PetGrooming() {
  const groomingServices = [
    { title: "Hair Trimming & Styling", badge: "Essential", badgeColor: "bg-red-500", icon: "✂️", freq: "Every 4-12 weeks depending on breed", benefits: "Prevents matting, improves hygiene, maintains breed standards" },
    { title: "Bathing & Shampooing", badge: "Essential", badgeColor: "bg-red-500", icon: "🛁", freq: "Monthly or as needed", benefits: "Removes dirt, allergens, and excess oils" },
    { title: "Brushing & De-shedding", badge: "Important", badgeColor: "bg-orange-500", icon: "🪮", freq: "Daily to weekly depending on coat type", benefits: "Reduces shedding, prevents matting, distributes natural oils" },
    { title: "Nail Trimming", badge: "Essential", badgeColor: "bg-red-500", icon: "💅", freq: "Every 3-4 weeks", benefits: "Prevents overgrowth, reduces scratching damage" },
    { title: "Ear Cleaning", badge: "Important", badgeColor: "bg-orange-500", icon: "👂", freq: "Weekly to monthly", benefits: "Prevents infections, removes wax buildup" },
    { title: "Eye Cleaning", badge: "Beneficial", badgeColor: "bg-green-500", icon: "👁️", freq: "As needed, usually weekly", benefits: "Removes tear stains, prevents irritation" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Pet Grooming
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <article className="mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                Complete Guide to Pet Grooming: Keeping Your Pet Clean and Healthy
              </h1>
              
              <div className="flex flex-wrap gap-4 text-gray-500 text-xs sm:text-sm mb-6">
                <span>📅 Published: March 20, 2024</span>
                <span>⏱️ 12 min read</span>
                <span>🏷️ Grooming, Hygiene, Pet Care</span>
                <span>👨‍⚕️ Dr. Veterinary Team</span>
              </div>

              <img 
                src="/static/images/imgs4.jpg" 
                alt="Pet grooming"
                className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
              />
            </article>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Regular grooming is essential for your pet's health, comfort, and appearance. Beyond keeping your pet looking beautiful, proper grooming helps prevent skin conditions, reduces shedding, strengthens the bond between you and your pet, and allows for early detection of health issues.
              </p>

              {/* Stats Box */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 text-center my-8">
                <div className="text-5xl font-extrabold text-blue-600 mb-3">78%</div>
                <p className="text-gray-700 text-lg">
                  of pet owners report their pets are calmer and more comfortable after regular grooming sessions
                </p>
              </div>

              {/* Why Important */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                Why Grooming is Important
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Health Benefits:</h3>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "Skin health", desc: "Removes dead skin cells and promotes healthy circulation" },
                  { title: "Parasite prevention", desc: "Early detection of fleas, ticks, and mites" },
                  { title: "Infection prevention", desc: "Clean ears and eyes reduce infection risk" },
                  { title: "Temperature regulation", desc: "Proper coat maintenance helps with cooling" },
                  { title: "Injury detection", desc: "Regular handling reveals cuts, lumps, or sore spots" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Grooming Schedule */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Grooming Schedule by Pet Type
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">📋 Recommended Grooming Frequency</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Pet Type</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Professional Grooming</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">At-Home Maintenance</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { type: "Short-haired dogs", prof: "Every 8-12 weeks", home: "Weekly brushing, monthly baths" },
                        { type: "Long-haired dogs", prof: "Every 4-6 weeks", home: "Daily brushing, bi-weekly baths" },
                        { type: "Cats (short-hair)", prof: "2-3 times per year", home: "Weekly brushing, occasional baths" },
                        { type: "Cats (long-hair)", prof: "Every 6-8 weeks", home: "Daily brushing, monthly baths" },
                        { type: "Double-coated breeds", prof: "Every 6-8 weeks", home: "3-4 times weekly brushing" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.type}</td>
                          <td className="border border-gray-300 p-3">{row.prof}</td>
                          <td className="border border-gray-300 p-3">{row.home}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Essential Services */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Essential Grooming Services
              </h2>

              <div className="space-y-4">
                {groomingServices.map((service, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2 flex-wrap">
                      <span className="text-2xl">{service.icon}</span>
                      {service.title}
                      <span className={`${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {service.badge}
                      </span>
                    </h4>
                    <p className="text-gray-700 mb-2"><strong>Frequency:</strong> {service.freq}</p>
                    <p className="text-gray-700"><strong>Benefits:</strong> {service.benefits}</p>
                  </div>
                ))}
              </div>

              {/* Warning Box */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-xl">
                  <span className="text-2xl">⚠️</span> Never Attempt These Without Training
                </h4>
                <ul className="space-y-2">
                  {[
                    "Cutting matted fur close to skin",
                    "Using human hair products on pets",
                    "Trimming nails if you can't identify the quick",
                    "Deep ear cleaning with cotton swabs",
                    "Grooming an aggressive or highly stressed pet"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-red-700">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Grooming Tools */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Essential Grooming Tools
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span>🛠️</span> Tool Selection Tips
                </h4>
                <ul className="space-y-2">
                  {[
                    "Choose tools appropriate for your pet's coat type",
                    "Invest in quality tools that will last longer",
                    "Keep tools clean and sanitized between uses",
                    "Replace worn or damaged tools immediately",
                    "Store tools in a clean, organized grooming kit"
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                Common Grooming Challenges
              </h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">🚧 Challenge Solutions</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Challenge</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Cause</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Solution</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { challenge: "Matted fur", cause: "Lack of regular brushing", solution: "Professional de-matting, increase brushing frequency" },
                        { challenge: "Fear of water", cause: "Bad experiences, unfamiliarity", solution: "Gradual desensitization, positive reinforcement" },
                        { challenge: "Nail trimming resistance", cause: "Fear of pain, bad experiences", solution: "Professional training, gradual conditioning" },
                        { challenge: "Excessive shedding", cause: "Seasonal, diet, health issues", solution: "Regular brushing, vet consultation if sudden" },
                        { challenge: "Skin irritation", cause: "Wrong products, allergies", solution: "Use pet-specific products, consult veterinarian" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.challenge}</td>
                          <td className="border border-gray-300 p-3">{row.cause}</td>
                          <td className="border border-gray-300 p-3 text-blue-600">{row.solution}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cost Breakdown */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Grooming Cost Breakdown
              </h2>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">💰 Typical Grooming Costs in India</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Service</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Small Dogs</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Large Dogs</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Cats</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { service: "Full grooming package", small: "₹800 - ₹1,500", large: "₹1,200 - ₹2,500", cats: "₹600 - ₹1,200" },
                        { service: "Bath only", small: "₹300 - ₹600", large: "₹500 - ₹800", cats: "₹400 - ₹700" },
                        { service: "Nail trimming only", small: "₹150 - ₹300", large: "₹200 - ₹400", cats: "₹150 - ₹250" },
                        { service: "De-shedding treatment", small: "₹400 - ₹800", large: "₹600 - ₹1,000", cats: "₹300 - ₹600" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.service}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.small}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.large}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.cats}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How often should I bathe my pet?",
                    a: "It depends on coat type and lifestyle. Most pets benefit from monthly baths, but some may need weekly while others only need baths a few times per year."
                  },
                  {
                    q: "Can I use human shampoo on my pet?",
                    a: "Never. Human products have different pH levels that can cause skin irritation and damage your pet's coat."
                  },
                  {
                    q: "My pet hates grooming. What can I do?",
                    a: "Start slowly with positive reinforcement, consider professional help, and never force the process. Some pets need medication for severe anxiety."
                  },
                  {
                    q: "Should I tip my pet groomer?",
                    a: "Tipping 15-20% is appreciated for good service, especially if your pet is difficult to handle."
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
                    "Establish regular grooming routines appropriate for your pet's breed",
                    "Invest in quality, pet-specific grooming tools and products",
                    "Learn basic techniques but leave complex procedures to professionals",
                    "Use grooming time to check for health issues",
                    "Make grooming a positive experience with patience and rewards"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border-2 border-blue-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🛁</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Professional grooming at your doorstep</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20Pet%20Grooming%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                📅 Book Now via WhatsApp
              </a>
            </div>

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

export default PetGrooming;
