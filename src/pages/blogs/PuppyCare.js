import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function PuppyCare() {
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
          <span>Puppy Care Guide</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/Maltese Dog 1.png"
                  alt="Adorable puppy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-pink-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    🐶 Puppy Care
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    How to Take Care of Your Puppy and Feed Them
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      📅 March 15, 2025
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      ⏱️ 15 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-xl leading-relaxed text-gray-700 font-medium">
                    The first few weeks and months of a puppy's life are absolutely critical for their development, health, and future well-being. Proper nutrition and care during this period lay the foundation for a long, healthy, and happy life.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-pink-600 pl-6">
                    The Critical First Week
                  </h2>

                  {/* Emergency Signs */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-6 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-lg flex items-center gap-2">
                      <span className="text-xl">⚠️</span> Emergency Signs in Newborn Puppies:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Not gaining weight or losing weight",
                        "Constant crying or lethargy",
                        "Difficulty nursing",
                        "Cold to the touch",
                        "Diarrhea or lack of urination"
                      ].map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600 text-xl">•</span>
                          <span className="text-red-700">{sign}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-red-800 font-semibold">
                      Contact your veterinarian immediately if you notice any of these signs.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Feeding Schedule by Age
                  </h2>

                  {/* Feeding Schedule Table */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 my-6 overflow-x-auto">
                    <h4 className="text-blue-800 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-xl">📅</span> Age-Based Feeding Schedule
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-white/50">
                            <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Age</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Frequency</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Food Type</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {[
                            { age: "0-4 weeks", freq: "Every 2-3 hours", food: "Mother's milk only", note: "Critical bonding period" },
                            { age: "4-6 weeks", freq: "4-5 times daily", food: "Begin weaning", note: "Gradual transition" },
                            { age: "6-12 weeks", freq: "4 times daily", food: "Puppy food", note: "Small frequent meals" },
                            { age: "3-6 months", freq: "3 times daily", food: "Puppy food", note: "Consistent schedule" },
                            { age: "6-12 months", freq: "2 times daily", food: "Puppy food", note: "Monitor growth" },
                            { age: "12+ months", freq: "1-2 times daily", food: "Adult food", note: "Transition complete" }
                          ].map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}>
                              <td className="border border-gray-300 p-3 font-medium">{row.age}</td>
                              <td className="border border-gray-300 p-3">{row.freq}</td>
                              <td className="border border-gray-300 p-3">{row.food}</td>
                              <td className="border border-gray-300 p-3 text-gray-600">{row.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                    Choosing the Right Puppy Food
                  </h2>

                  {/* What to Look For */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">What to Look for in Puppy Food:</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: "✅", text: "AAFCO certification", desc: "Meets nutritional standards" },
                        { icon: "🥩", text: "High-quality protein", desc: "Should be first ingredient" },
                        { icon: "🧠", text: "DHA", desc: "For brain and eye development" },
                        { icon: "🦴", text: "Appropriate calcium", desc: "For proper bone development" },
                        { icon: "🚫", text: "No artificial preservatives", desc: "Avoid BHA, BHT, ethoxyquin" }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg hover:shadow-md transition">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <p className="font-bold text-gray-800">{item.text}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feeding Tips */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-green-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span> Feeding Tips for Success:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Stick to a consistent feeding schedule",
                        "Measure portions according to package guidelines",
                        "Use the same bowl and feeding location",
                        "Remove uneaten food after 20-30 minutes",
                        "Always provide fresh water"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toxic Foods */}
                  <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Foods to Avoid</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "🍫 Chocolate",
                      "🍇 Grapes & raisins",
                      "🧅 Onions & garlic",
                      "🥑 Avocado",
                      "🍬 Xylitol",
                      "🦴 Cooked bones",
                      "🍺 Alcohol",
                      "☕ Caffeine"
                    ].map((food, idx) => (
                      <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center text-sm font-semibold text-red-700">
                        {food}
                      </div>
                    ))}
                  </div>

                  {/* Daily Schedule */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                    Sample Daily Schedule
                  </h2>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6">
                    <h4 className="text-purple-800 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-xl">📅</span> Sample Daily Schedule (8-12 weeks)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { time: "6:00 AM", activity: "Wake up, potty, breakfast" },
                        { time: "7:00 AM", activity: "Playtime and training" },
                        { time: "8:00 AM", activity: "Nap time" },
                        { time: "10:00 AM", activity: "Potty break, play" },
                        { time: "12:00 PM", activity: "Lunch and potty" },
                        { time: "1:00 PM", activity: "Nap time" },
                        { time: "3:00 PM", activity: "Potty and socialization" },
                        { time: "5:00 PM", activity: "Dinner and potty" },
                        { time: "6:00 PM", activity: "Play and training" },
                        { time: "8:00 PM", activity: "Final potty break" },
                        { time: "9:00 PM", activity: "Quiet time and sleep" }
                      ].map((slot, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {slot.time}
                          </span>
                          <span className="text-gray-700 text-sm">{slot.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-6 mt-10">
                    <h4 className="text-pink-800 font-bold mb-3 text-xl flex items-center gap-2">
                      <span className="text-2xl">💡</span> Remember:
                    </h4>
                    <p className="text-gray-700">
                      The investment you make in proper puppy care during these early months will pay dividends in the form of a healthier, happier companion for years to come. Every moment of care and attention you provide is building the foundation for a lifetime of love and companionship.
                    </p>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-xl border-2 border-pink-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🐶</div>
                <h3 className="text-2xl font-bold text-pink-700 mb-2">Puppy Care Help</h3>
                <p className="text-gray-600 text-sm">Expert guidance for new puppy parents</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20help%20with%20puppy%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
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

export default PuppyCare;
