import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function PetEmergencies() {
  const goldenRules = [
    { num: "1", rule: "Stay Calm", desc: "Your pet senses your anxiety. Take deep breaths and think clearly." },
    { num: "2", rule: "Ensure Safety", desc: "Remove pet from immediate danger without putting yourself at risk." },
    { num: "3", rule: "Assess Quickly", desc: "Check for consciousness, breathing, and obvious injuries." },
    { num: "4", rule: "Call for Help", desc: "Contact your veterinarian or emergency clinic immediately." },
    { num: "5", rule: "Transport Safely", desc: "Move injured pets carefully to avoid further harm." }
  ];

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
          <span>Emergency Care</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img11.jpg"
                  alt="Pet emergency care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-red-500 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                    🚨 EMERGENCY GUIDE
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    How to Handle Pet Emergencies: Complete First Aid Guide
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
                    Pet emergencies can happen without warning and knowing how to respond quickly and correctly can mean the difference between life and death for your beloved companion.
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 text-center my-8 shadow-lg">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-3">
                      65%
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      of pet emergencies occur outside regular veterinary hours, making first aid knowledge crucial for every pet owner
                    </p>
                  </div>

                  {/* Emergency Hotline */}
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-6 my-8 text-center shadow-2xl animate-pulse">
                    <h4 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                      <span className="text-3xl">🚨</span> EMERGENCY HOTLINE
                    </h4>
                    <a href="tel:+918208657969" className="text-4xl font-bold my-3 block hover:text-yellow-300 transition">
                      +91 82086 57969
                    </a>
                    <p className="text-lg">Available 24/7 for immediate guidance</p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-red-600 pl-6">
                    Golden Rules of Pet Emergency Response
                  </h2>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-6 my-6">
                    <h4 className="text-red-700 font-bold text-xl mb-4">Essential First Steps in ANY Emergency</h4>
                    <div className="space-y-3">
                      {goldenRules.map((rule, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition">
                          <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                            {rule.num}
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{rule.rule}</p>
                            <p className="text-sm text-gray-600">{rule.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Critical Warning */}
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-red-600 rounded-r-2xl p-6 my-6 shadow-lg">
                    <h4 className="font-bold text-red-800 text-xl mb-3 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span> CRITICAL WARNING
                    </h4>
                    <p className="text-red-700 font-medium">
                      Injured animals may bite or scratch out of fear and pain, even if they're usually gentle. Approach cautiously and consider muzzling if necessary (but never muzzle if vomiting or having breathing difficulties).
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-red-600 pl-6">
                    Life-Threatening Emergencies: Act NOW
                  </h2>

                  {/* Choking */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 my-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🫁</span> Choking Emergency
                    </h3>
                    <h4 className="font-semibold text-red-700 mb-3">Immediate Actions for Choking:</h4>
                    <div className="space-y-3">
                      {[
                        { step: "1", action: "Open the mouth: Look for visible foreign objects. DO NOT use fingers if you can't see clearly." },
                        { step: "2", action: "Small Dogs (under 30 lbs): Hold upside down by hind legs, give 5 sharp taps between shoulder blades" },
                        { step: "3", action: "Large Dogs: Lift hind legs (wheelbarrow position), push firmly upward on belly just below rib cage" },
                        { step: "4", action: "For Cats: Hold by hind legs, head down, tap sharply between shoulder blades" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg">
                          <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {item.step}
                          </span>
                          <p className="text-gray-700">{item.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bleeding */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 my-6">
                    <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🩸</span> Severe Bleeding
                    </h3>
                    <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4">
                      <h4 className="font-semibold text-red-700 mb-3">Bleeding Control Steps:</h4>
                      <ul className="space-y-2">
                        {[
                          "Apply Direct Pressure: Use clean cloth, press firmly over wound",
                          "Do NOT Remove Saturated Bandages: Add more layers on top",
                          "Elevate if Possible: Raise injured limb above heart level",
                          "Pressure Points: Apply pressure on inner thigh or armpit",
                          "Transport Immediately: Continue pressure during transport"
                        ].map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span className="text-gray-700"><strong>{step.split(':')[0]}:</strong>{step.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Poisoning */}
                  <div className="bg-gradient-to-r from-orange-900 to-red-900 text-white rounded-2xl p-6 my-8 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-3xl">☠️</span> TOXIC SUBSTANCES - NEVER INDUCE VOMITING FOR:
                    </h3>
                    <ul className="space-y-2 ml-6">
                      {[
                        "Bleach, drain cleaners, toilet bowl cleaners",
                        "Gasoline, kerosene, motor oil",
                        "Sharp objects (bones, glass)",
                        "Unknown substances"
                      ].map((toxin, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-orange-300">⚠</span>
                          <span>{toxin}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Heatstroke */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-6 my-6">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🌡️</span> Heatstroke
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-2">Signs:</h4>
                        <ul className="text-sm space-y-1">
                          {["Excessive panting", "Drooling", "Collapse", "Red gums"].map((sign, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-orange-600">•</span>
                              <span>{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-orange-700 mb-2">Actions:</h4>
                        <ul className="text-sm space-y-1">
                          {["Move to cool area", "Apply cool water", "Wet towels on body", "Offer cool water"].map((action, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-orange-600">→</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* First Aid Kit */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Pet First Aid Kit Essentials
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { icon: "🩹", item: "Sterile gauze & bandages" },
                      { icon: "🧼", item: "Antiseptic wipes" },
                      { icon: "💧", item: "Hydrogen peroxide (3%)" },
                      { icon: "🌡️", item: "Digital thermometer" },
                      { icon: "✂️", item: "Tweezers & scissors" },
                      { icon: "🧊", item: "Instant cold packs" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 text-center hover:shadow-lg transition">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <p className="text-sm font-semibold text-gray-700">{item.item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                    <h4 className="text-green-800 font-bold text-xl mb-3">Remember</h4>
                    <p className="text-gray-700">
                      Being prepared for pet emergencies can save your pet's life. While first aid is never a substitute for veterinary care, knowing how to act quickly will stabilize your pet until professional help is available.
                    </p>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-xl border-2 border-red-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3 animate-pulse">🚨</div>
                <h3 className="text-2xl font-bold text-red-700 mb-2">Emergency Help</h3>
                <p className="text-gray-600 text-sm">24/7 Veterinary Support</p>
              </div>
              <a 
                href="tel:+918208657969"
                className="block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center mb-3"
              >
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/918208657969?text=EMERGENCY:%20I%20need%20immediate%20help%20with%20my%20pet!"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                💬 WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetEmergencies;
