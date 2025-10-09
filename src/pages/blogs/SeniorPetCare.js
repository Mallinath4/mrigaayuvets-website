import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function SeniorPetCare() {
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
          <span>Senior Pet Care</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img6.jpg"
                  alt="Senior pet care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-amber-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    👴 Senior Care
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Caring for Senior Pets: What You Need to Know
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      📅 March 20, 2025
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      ⏱️ 10 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-xl leading-relaxed text-gray-700 font-medium">
                    As our beloved pets age, they require special attention and care to maintain their health and happiness. Senior pets (dogs 7+ years, cats 8+ years) face unique challenges that pet owners must understand.
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 text-center my-8 shadow-lg">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">
                      68%
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      of senior pet health issues go undetected because owners mistake aging symptoms for "normal" changes
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                    Understanding the Aging Process
                  </h2>

                  {/* Age-Related Changes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: "🦴", title: "Decreased Mobility", desc: "Arthritis and joint stiffness" },
                      { icon: "👁️", title: "Sensory Changes", desc: "Hearing and vision decline" },
                      { icon: "🧠", title: "Cognitive Changes", desc: "Memory and learning affected" },
                      { icon: "❤️", title: "Organ Function", desc: "Kidney, heart, liver decrease" },
                      { icon: "🛡️", title: "Immune System", desc: "Less effective at fighting" },
                      { icon: "😴", title: "Energy Levels", desc: "Increased rest needed" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
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
                    Essential Health Monitoring
                  </h2>

                  {/* Checkup Schedule Table */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-6 overflow-x-auto">
                    <h4 className="text-blue-800 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-xl">📋</span> Recommended Checkup Schedule
                    </h4>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-white/50">
                          <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Age Group</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Frequency</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Key Focus</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {[
                          { age: "7-10 years (Dogs) / 8-12 years (Cats)", freq: "Every 6 months", focus: "Blood work, dental, joints" },
                          { age: "10+ years (Dogs) / 12+ years (Cats)", freq: "Every 3-4 months", focus: "Comprehensive organ function" }
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}>
                            <td className="border border-gray-300 p-3">{row.age}</td>
                            <td className="border border-gray-300 p-3 font-medium text-blue-700">{row.freq}</td>
                            <td className="border border-gray-300 p-3">{row.focus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                    Nutrition for Senior Pets
                  </h2>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                    <h4 className="font-bold text-green-800 mb-4 text-lg">Dietary Needs Change:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: "🔽", title: "Reduced Calories", desc: "Lower activity = fewer calories" },
                        { icon: "🥩", title: "High-Quality Protein", desc: "Maintains muscle mass" },
                        { icon: "💊", title: "Joint Supplements", desc: "Glucosamine & chondroitin" },
                        { icon: "🐟", title: "Omega-3", desc: "Brain function & inflammation" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3 flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                            <p className="text-xs text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                    Creating a Senior-Friendly Environment
                  </h2>

                  {/* Environment Improvements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
                      <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                        <span className="text-xl">🏠</span> Mobility Improvements
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Orthopedic beds with padding",
                          "Ramps or steps for access",
                          "Non-slip mats on floors",
                          "Raised food/water bowls",
                          "Lower-sided litter boxes"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-purple-600">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6">
                      <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
                        <span className="text-xl">🌡️</span> Temperature Control
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Warm bedding in cold weather",
                          "Cool shaded areas in summer",
                          "Extra blankets for arthritis",
                          "Avoid temperature extremes",
                          "Heated beds in winter"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-orange-600">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Emergency Signs */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">⚠️</span> When to Call Your Vet Immediately
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Difficulty breathing",
                        "Loss of appetite >24hrs",
                        "Sudden collapse",
                        "Excessive drinking",
                        "Seizures or disorientation",
                        "Pale or yellow gums"
                      ].map((sign, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                          <span className="text-red-600 text-xl">🚨</span>
                          <span className="text-gray-700 font-medium text-sm">{sign}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quality of Life Table */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                    Quality of Life Assessment
                  </h2>

                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 my-6 overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-white/50">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Factor</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Good Signs</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Concerning</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { factor: "Appetite", good: "Eager to eat, maintains weight", bad: "Refuses food, weight loss" },
                          { factor: "Mobility", good: "Moves willingly, manages stairs", bad: "Reluctant to move, falls" },
                          { factor: "Social", good: "Responds to family, enjoys attention", bad: "Withdrawn, avoids interaction" },
                          { factor: "Comfort", good: "Rests peacefully, normal breathing", bad: "Restless, panting, pain signs" }
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}>
                            <td className="border border-gray-300 p-3 font-medium">{row.factor}</td>
                            <td className="border border-gray-300 p-3 text-green-700">{row.good}</td>
                            <td className="border border-gray-300 p-3 text-red-700">{row.bad}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Happiness Checklist */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-8 my-8">
                    <h4 className="text-amber-800 font-bold text-xl mb-4 flex items-center gap-2">
                      <span className="text-2xl">🎯</span> Senior Pet Happiness Checklist
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Maintain familiar routines",
                        "Provide extra comfort",
                        "Adjust activity expectations",
                        "Increase quality time",
                        "Monitor health closely",
                        "Celebrate good days"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                          <span className="text-amber-600 text-xl">✓</span>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {[
                      { q: "When should I switch to senior pet food?", a: "Generally around 7 years for dogs and 8 years for cats, but consult your vet." },
                      { q: "Is it normal for senior pets to sleep more?", a: "Yes, but sudden changes in sleep patterns warrant attention." },
                      { q: "Can senior pets learn new things?", a: "Absolutely! Mental stimulation benefits senior pets greatly." },
                      { q: "How do I know if my pet is in pain?", a: "Look for reluctance to move, changes in posture, or behavioral changes." }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                        <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                        <p className="text-gray-600">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>

                  {/* Remember Box */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 mt-10">
                    <h4 className="text-amber-800 font-bold mb-3 text-xl flex items-center gap-2">
                      <span className="text-2xl">📌</span> Remember
                    </h4>
                    <p className="text-gray-700">
                      Age is not a disease. Many age-related conditions are treatable when caught early. Regular veterinary care and attentive home monitoring are the keys to successful senior pet care.
                    </p>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-xl border-2 border-amber-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">👴</div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">Senior Care Support</h3>
                <p className="text-gray-600 text-sm">Expert guidance for aging pets</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20help%20with%20senior%20pet%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                💬 Chat with Vet
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SeniorPetCare;
