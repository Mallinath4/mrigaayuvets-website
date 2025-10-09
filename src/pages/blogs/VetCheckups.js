import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function VetCheckups() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/blogs" className="text-blue-600 hover:underline inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blogs
          </Link>
          <span className="mx-2">/</span>
          <span>Vet Checkups</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img2.jpg"
                  alt="Veterinary checkup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-teal-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    🩺 Preventive Care
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Why Regular Veterinary Checkups are Important
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      📅 March 18, 2025
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      ⏱️ 18 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-xl leading-relaxed text-gray-700 font-medium">
                    Regular veterinary checkups are one of the most important investments you can make in your pet's health and longevity. Just like humans need regular medical checkups, pets benefit tremendously from routine veterinary care.
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-8 text-center my-8 shadow-lg">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-3">
                      67%
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      of pet health problems are detected during routine checkups before owners notice any symptoms
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                    The Foundation of Preventive Care
                  </h2>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: "🔍", title: "Early Detection", desc: "Find problems before they're serious" },
                      { icon: "📊", title: "Health Monitoring", desc: "Track trends over time" },
                      { icon: "💉", title: "Vaccinations", desc: "Preventive treatments" },
                      { icon: "📚", title: "Expert Guidance", desc: "Nutrition & lifestyle advice" },
                      { icon: "📈", title: "Baseline Health", desc: "Individual health records" },
                      { icon: "💰", title: "Cost Savings", desc: "Prevent expensive emergencies" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{item.icon}</span>
                          <div>
                            <h4 className="font-bold text-gray-800">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Age-Specific Checkup Schedules
                  </h2>

                  {/* Schedule Table */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-6 overflow-x-auto">
                    <h4 className="text-blue-800 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-xl">📅</span> Recommended Checkup Schedule
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-white/50">
                            <th className="border border-gray-300 p-3 text-left font-semibold">Life Stage</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Age Range</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Frequency</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Focus Areas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { stage: "Puppy/Kitten", age: "0-12 months", freq: "Every 3-4 weeks until 16 weeks", focus: "Vaccinations, development" },
                            { stage: "Young Adult", age: "1-6 years", freq: "Annually", focus: "Preventive care, lifestyle" },
                            { stage: "Mature Adult", age: "7-10 years", freq: "Every 6 months", focus: "Early disease detection" },
                            { stage: "Senior", age: "10+ years", freq: "Every 3-4 months", focus: "Age-related conditions" }
                          ].map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}>
                              <td className="border border-gray-300 p-3 font-medium">{row.stage}</td>
                              <td className="border border-gray-300 p-3">{row.age}</td>
                              <td className="border border-gray-300 p-3 text-blue-700">{row.freq}</td>
                              <td className="border border-gray-300 p-3 text-gray-600">{row.focus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                    What Happens During a Routine Checkup
                  </h2>

                  {/* Physical Examination */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6">
                    <h4 className="font-bold text-purple-700 mb-4 text-lg">Physical Examination Includes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Weight & Body Condition",
                        "Vital Signs (Temperature, Heart Rate)",
                        "Head & Neck Examination",
                        "Heart & Lung Auscultation",
                        "Abdominal Palpation",
                        "Lymph Node Check",
                        "Skin & Coat Assessment",
                        "Musculoskeletal Evaluation"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                          <span className="text-purple-600">✓</span>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preparation Tips */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-green-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span> Preparing for Your Pet's Checkup:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Bring any previous medical records",
                        "List current medications and supplements",
                        "Note any behavioral or appetite changes",
                        "Bring a fresh stool sample if requested",
                        "Prepare questions about your pet's health"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-orange-600 pl-6">
                    The Economics of Preventive Care
                  </h2>

                  {/* Cost Comparison */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 my-6">
                    <h4 className="font-bold text-orange-800 mb-4 text-lg">Cost Comparison Examples:</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-semibold text-gray-800 mb-2">Dental Care:</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Routine cleaning:</span>
                          <span className="font-bold text-green-700">₹3,000-₹8,000</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-gray-600">Advanced disease treatment:</span>
                          <span className="font-bold text-red-700">₹15,000-₹50,000+</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-semibold text-gray-800 mb-2">Kidney Disease:</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Early management (yearly):</span>
                          <span className="font-bold text-green-700">₹5,000-₹10,000</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-gray-600">Advanced failure treatment:</span>
                          <span className="font-bold text-red-700">₹50,000-₹1,00,000+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dental Health */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-red-600 pl-6">
                    Dental Health Assessment
                  </h2>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-6 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-lg flex items-center gap-2">
                      <span className="text-xl">⚠️</span> Signs of Dental Problems:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Bad breath",
                        "Tartar buildup",
                        "Swollen gums",
                        "Difficulty eating",
                        "Pawing at mouth",
                        "Loose teeth"
                      ].map((sign, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                          <span className="text-red-600">•</span>
                          <span className="text-gray-700 text-sm">{sign}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-8 text-center my-8 shadow-lg">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-3">
                      2-3x
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      longer lifespan for pets who receive regular veterinary care compared to those who don't
                    </p>
                  </div>

                  {/* When to Schedule Extra */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                    When to Schedule Extra Checkups
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Changes in appetite or drinking",
                      "Unusual behavior or lethargy",
                      "Vomiting or diarrhea",
                      "Difficulty breathing",
                      "Limping or mobility issues",
                      "Unusual lumps or bumps",
                      "Changes in sleep patterns",
                      "Weight loss or gain"
                    ].map((sign, idx) => (
                      <div key={idx} className="bg-amber-50 border-2 border-amber-200 rounded-lg p-3 flex items-center gap-2">
                        <span className="text-amber-600 text-xl">⚠</span>
                        <span className="text-gray-700 text-sm">{sign}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 mt-10">
                    <h4 className="text-teal-800 font-bold mb-3 text-xl flex items-center gap-2">
                      <span className="text-2xl">💡</span> Take Action Today:
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Contact MrigaAayuvets to schedule your pet's routine checkup. Our caring team is available 24/7 for emergencies and ready to help you establish a preventive care plan that's right for your pet.
                    </p>
                    <a 
                      href="tel:+918208657969"
                      className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      📞 Call +91 82086 57969
                    </a>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Blogs
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 shadow-xl border-2 border-teal-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🩺</div>
                <h3 className="text-2xl font-bold text-teal-700 mb-2">Book Checkup</h3>
                <p className="text-gray-600 text-sm">Schedule your pet's wellness visit</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I'd%20like%20to%20schedule%20a%20checkup."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                💬 Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default VetCheckups;
