import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function EmergencyCare() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Pet Emergency Care Guide
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Complete Guide to Pet Emergency Care: Life-Saving Knowledge Every Pet Owner Needs
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-500 text-xs sm:text-sm mb-6">
              <span>📅 Published: March 15, 2024</span>
              <span>⏱️ 25 min read</span>
              <span>🏷️ Emergency Medicine, First Aid, Critical Care</span>
              <span>👨‍⚕️ Dr. Emergency Veterinary Team</span>
            </div>

            <img 
              src="/static/images/imgs8.jpg" 
              alt="Emergency veterinary care"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
            />

            {/* Critical Alert */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 sm:p-8 rounded-2xl mb-8 shadow-2xl">
              <h4 className="text-red-100 text-xl mb-3 flex items-center gap-2">
                <span className="text-3xl animate-pulse">⚠️</span>
                TIME IS CRITICAL IN EMERGENCIES
              </h4>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-3">Golden Hour: First 60 Minutes</p>
              <p className="text-lg">The first hour after a pet emergency can determine survival. Quick recognition and immediate action save lives.</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Pet emergencies are every owner's worst nightmare, but being prepared can mean the difference between life and death for your beloved companion. This comprehensive guide covers everything you need to know about recognizing, responding to, and managing pet emergencies.
              </p>

              {/* Stats Box */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 text-center my-8">
                <div className="text-5xl font-extrabold text-red-600 mb-3">78%</div>
                <p className="text-gray-700 text-lg">
                  of pet emergency outcomes improve significantly when owners provide appropriate first aid before reaching veterinary care
                </p>
              </div>

              {/* Life-Threatening Emergencies */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-red-600 pl-6">
                Recognizing Life-Threatening Emergencies
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8 shadow-lg">
                <h4 className="text-red-800 text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🆘</span> IMMEDIATE LIFE-THREATENING EMERGENCIES
                </h4>
                <p className="font-bold mb-4">Call your emergency veterinarian immediately if your pet shows any of these signs:</p>
                <ul className="space-y-3">
                  {[
                    { title: "Difficulty breathing", desc: "Gasping, open-mouth breathing, blue tongue/gums" },
                    { title: "Severe bleeding", desc: "Uncontrolled bleeding from any source" },
                    { title: "Unconsciousness", desc: "Non-responsive, cannot be awakened" },
                    { title: "Seizures", desc: "Especially lasting longer than 2-3 minutes" },
                    { title: "Severe trauma", desc: "Hit by vehicle, falls from height, animal attacks" },
                    { title: "Bloat/GDV", desc: "Distended abdomen with unsuccessful vomiting attempts" },
                    { title: "Heatstroke", desc: "Excessive panting, drooling, collapse in hot weather" },
                    { title: "Poisoning", desc: "Known ingestion of toxic substances" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-600 mt-1 font-bold">•</span>
                      <span><strong>{item.title}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Triage Table */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Emergency Triage Classification
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">🚨 Emergency Priority Levels</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Priority Level</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Time Frame</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Examples</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { level: "CRITICAL", color: "text-red-700", time: "0-15 minutes", examples: "Not breathing, severe bleeding, unconscious", action: "Call immediately, start first aid" },
                        { level: "URGENT", color: "text-red-600", time: "15-60 minutes", examples: "Difficulty breathing, severe pain, trauma", action: "Call within 15 minutes" },
                        { level: "SEMI-URGENT", color: "text-yellow-600", time: "1-4 hours", examples: "Persistent vomiting, lameness, eye injuries", action: "Same day veterinary care" },
                        { level: "ROUTINE", color: "text-green-600", time: "24-48 hours", examples: "Mild cough, decreased appetite, minor cuts", action: "Schedule appointment" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className={`border border-gray-300 p-3 font-bold ${row.color}`}>{row.level}</td>
                          <td className="border border-gray-300 p-3">{row.time}</td>
                          <td className="border border-gray-300 p-3">{row.examples}</td>
                          <td className="border border-gray-300 p-3 font-medium">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CPR Instructions */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Essential First Aid Techniques
              </h2>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-6 my-6">
                <h4 className="text-yellow-700 font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="text-2xl">❤️</span> CPR for Dogs and Cats
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold ml-2 animate-pulse">CRITICAL SKILL</span>
                </h4>
                
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-4">
                  <h5 className="font-bold text-blue-800 mb-3">CPR Steps:</h5>
                  <ol className="space-y-2 text-sm sm:text-base">
                    {[
                      "Check responsiveness: Tap firmly, call pet's name loudly",
                      "Position pet: Right side down on firm surface",
                      "Check airway: Open mouth, remove visible obstructions",
                      "Rescue breathing: Close muzzle, breathe into nose (2 breaths)",
                      "Chest compressions: Place hands over heart, compress 1/3 to 1/2 chest width",
                      "Compression rate: 100-120 compressions per minute",
                      "Ratio: 30 compressions to 2 breaths",
                      "Continue: Until pet responds or you reach veterinary care"
                    ].map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">{idx + 1}.</span>
                        <span className="text-gray-700"><strong>{step.split(':')[0]}:</strong>{step.split(':')[1]}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Poisoning Emergency */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-orange-600 pl-6">
                Poisoning and Toxin Emergencies
              </h2>

              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 my-8 shadow-xl">
                <h4 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                  <span className="text-2xl">☠️</span> POISON EMERGENCY PROTOCOL
                </h4>
                <p className="font-bold mb-4 text-red-100">
                  NEVER induce vomiting unless specifically instructed by a veterinarian or poison control center. Some substances cause more damage coming back up.
                </p>
                
                <p className="font-bold mb-2">Immediate steps:</p>
                <ul className="space-y-2">
                  {[
                    "Remove pet from source of poison",
                    "Identify the substance if possible",
                    "Call poison control or emergency vet immediately",
                    "Bring substance container/sample with you",
                    "Follow specific instructions given by professionals"
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Kit */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Emergency Supplies and Preparation
              </h2>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">🥼 Complete Emergency Kit Checklist</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Category</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Essential Items</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { cat: "Wound Care", items: "Gauze pads, medical tape, antiseptic, bandages", purpose: "Control bleeding, protect wounds" },
                        { cat: "Medications", items: "Hydrogen peroxide, activated charcoal", purpose: "Poison response (only if instructed)" },
                        { cat: "Tools", items: "Thermometer, flashlight, tweezers, scissors", purpose: "Assessment and basic care" },
                        { cat: "Restraint", items: "Muzzle, towels, E-collar, leash", purpose: "Safe handling" },
                        { cat: "Transport", items: "Blankets, rigid board, carriers", purpose: "Emergency transport" },
                        { cat: "Information", items: "Vet contacts, medical history, poison control number", purpose: "Quick reference" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.cat}</td>
                          <td className="border border-gray-300 p-3">{row.items}</td>
                          <td className="border border-gray-300 p-3 text-blue-600">{row.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">📞</span> Critical Phone Numbers
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "Your regular veterinarian", value: "[Your vet's number]" },
                    { label: "24-hour emergency clinic", value: "+91 82086 57969" },
                    { label: "Pet Poison Helpline", value: "+1-855-764-7661 (fee applies)" },
                    { label: "ASPCA Animal Poison Control", value: "+1-888-426-4435 (fee applies)" }
                  ].map((contact, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>{contact.label}:</strong> {contact.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Frequently Asked Emergency Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Should I induce vomiting if my pet ate something toxic?",
                    a: "Never induce vomiting unless specifically instructed by a veterinarian or poison control center. Some substances cause more damage coming back up."
                  },
                  {
                    q: "How do I know if my pet is really having an emergency?",
                    a: "When in doubt, call your veterinarian. Signs like difficulty breathing, severe bleeding, unconsciousness, or severe pain always warrant immediate care."
                  },
                  {
                    q: "Can I give my pet human pain medications during an emergency?",
                    a: "Never give human medications to pets unless specifically instructed by a veterinarian. Many human medications are toxic to animals."
                  },
                  {
                    q: "What should I do if my pet is injured but seems aggressive?",
                    a: "Injured pets may bite from fear and pain. Use a towel or blanket to wrap them safely, or create a makeshift muzzle with gauze or fabric."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                    <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                    <p className="text-gray-600">A: {faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Final Reminders */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 mt-10 shadow-lg">
                <h4 className="font-bold text-red-800 mb-4 text-xl">Final Emergency Reminders</h4>
                <ul className="space-y-3">
                  {[
                    "Trust your instincts: If something seems wrong, seek help",
                    "Have a plan: Know your emergency contacts and nearest clinics",
                    "Stay prepared: Keep emergency supplies current and accessible",
                    "Learn the basics: Basic first aid knowledge saves lives",
                    "Act quickly: In emergencies, time is often critical",
                    "Stay calm: Your pet needs you to think clearly"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">✓</span>
                      <span className="text-gray-700"><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
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
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-xl border-2 border-red-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3 animate-pulse">🚨</div>
                <h3 className="text-2xl font-bold text-red-700 mb-2">Emergency Services</h3>
                <p className="text-gray-600 text-sm">24/7 Emergency Care Available</p>
              </div>
              
              <a 
                href="tel:+918208657969" 
                className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center mb-3"
              >
                📞 Call Emergency Now
              </a>

              <a 
                href="https://wa.me/918208657969?text=EMERGENCY:%20I%20need%20immediate%20veterinary%20help!"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 text-center"
              >
                💬 WhatsApp Emergency
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EmergencyCare;
