import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function XRayImaging() {
  const diagnosticConditions = [
    { title: "Bone Fractures", badge: "Excellent Visualization", badgeColor: "bg-red-500", icon: "🦴", desc: "All types of bone breaks clearly visible", details: "Location, severity, displacement, healing progress" },
    { title: "Arthritis and Joint Disease", badge: "Good Detail", badgeColor: "bg-yellow-500", icon: "🦴", desc: "Early changes: Joint space narrowing, bone spurs", details: "Grade joint damage and progression" },
    { title: "Hip Dysplasia", badge: "Diagnostic Standard", badgeColor: "bg-yellow-500", icon: "🦴", desc: "Screening: Early detection in young dogs", details: "OFA and PennHIP evaluation methods" },
    { title: "Lung Conditions", badge: "Critical Assessment", badgeColor: "bg-red-500", icon: "🫁", desc: "Pneumonia: Lung infection patterns and severity", details: "Pulmonary edema, tumors, trauma" },
    { title: "Heart Disease", badge: "Essential Monitoring", badgeColor: "bg-red-500", icon: "❤️", desc: "Heart size: Enlargement patterns indicate specific conditions", details: "Monitor improvement with medications" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Pet X-Ray Imaging Guide
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Complete Guide to Pet X-Ray Imaging: Understanding Diagnostic Radiography
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-500 text-xs sm:text-sm mb-6">
              <span>📅 Published: March 15, 2024</span>
              <span>⏱️ 18 min read</span>
              <span>🏷️ Diagnostic Imaging, X-Ray, Radiology</span>
              <span>👨‍⚕️ Dr. Veterinary Team</span>
            </div>

            <img 
              src="/static/images/imgs7.jpg" 
              alt="Pet X-Ray Imaging"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                X-ray imaging, also known as radiography, is one of the most valuable diagnostic tools in veterinary medicine. This non-invasive imaging technique allows veterinarians to see inside your pet's body, diagnosing conditions that would be impossible to detect through physical examination alone.
              </p>

              {/* Stats Box */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center my-8">
                <div className="text-5xl font-extrabold text-green-600 mb-3">75%</div>
                <p className="text-gray-700 text-lg">
                  of internal injuries and bone problems in pets can be accurately diagnosed using X-ray imaging, making it an essential diagnostic tool
                </p>
              </div>

              {/* Understanding X-Ray */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                Understanding X-Ray Technology
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How X-Rays Work:</h3>
              <ul className="space-y-3 ml-6">
                {[
                  "Radiation penetration: X-rays pass through soft tissues but are absorbed by dense materials",
                  "Image contrast: Different tissues appear as varying shades of gray",
                  "Bone visualization: Dense bones appear white on X-ray films",
                  "Soft tissue detail: Organs and muscles appear in gray tones",
                  "Air spaces: Lungs and gas-filled areas appear black",
                  "Digital advancement: Modern digital X-rays provide instant, high-quality images"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700"><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>

              {/* X-Ray Systems */}
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Types of X-Ray Systems:</h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
                  <h4 className="text-blue-700 font-bold text-xl mb-3 flex items-center gap-2 flex-wrap">
                    <span className="text-2xl">📱</span> Digital Radiography
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">Modern Standard</span>
                  </h4>
                  <p className="text-gray-700 mb-2"><strong>Advantages:</strong> Instant images, better quality, easy storage and sharing</p>
                  <p className="text-gray-700 mb-2"><strong>Image processing:</strong> Can enhance contrast and detail digitally</p>
                  <p className="text-gray-700"><strong>Environmental:</strong> No chemical processing required</p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h4 className="text-yellow-700 font-bold text-xl mb-3 flex items-center gap-2 flex-wrap">
                    <span className="text-2xl">🎞️</span> Traditional Film X-Rays
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">Still Used</span>
                  </h4>
                  <p className="text-gray-700 mb-2"><strong>Process:</strong> Chemical development required</p>
                  <p className="text-gray-700 mb-2"><strong>Time:</strong> 10-15 minutes for processing</p>
                  <p className="text-gray-700"><strong>Quality:</strong> Good image quality but less flexible</p>
                </div>
              </div>

              {/* Diagnostic Conditions */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                What X-Rays Can Diagnose
              </h2>

              <div className="space-y-4">
                {diagnosticConditions.map((condition, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-purple-700 mb-3 flex items-center gap-2 flex-wrap">
                      <span className="text-2xl">{condition.icon}</span>
                      {condition.title}
                      <span className={`${condition.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {condition.badge}
                      </span>
                    </h4>
                    <p className="text-gray-700 mb-2">{condition.desc}</p>
                    <p className="text-gray-600 text-sm"><strong>Details:</strong> {condition.details}</p>
                  </div>
                ))}
              </div>

              {/* X-Ray Procedure */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                X-Ray Procedure and What to Expect
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">📋 X-Ray Procedure Steps</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Step</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Process</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { step: "Positioning", process: "Pet placed in specific positions for different views", duration: "2-5 minutes per view" },
                        { step: "Restraint", process: "Manual restraint or sedation if needed", duration: "As required for safety" },
                        { step: "Imaging", process: "X-ray beam exposure (fraction of a second)", duration: "Instant per image" },
                        { step: "Review", process: "Veterinarian evaluates image quality", duration: "1-2 minutes" },
                        { step: "Additional views", process: "Multiple angles often needed", duration: "Variable" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.step}</td>
                          <td className="border border-gray-300 p-3">{row.process}</td>
                          <td className="border border-gray-300 p-3 text-blue-600">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sedation */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Sedation and Anesthesia for X-Rays
              </h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                  <h4 className="text-green-700 font-bold text-xl mb-3 flex items-center gap-2">
                    <span className="text-2xl">💊</span> Light Sedation
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold ml-2">Minimal Risk</span>
                  </h4>
                  <p className="text-gray-700 mb-2"><strong>Medications:</strong> Oral or injectable calming agents</p>
                  <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Reduces anxiety, allows better positioning</p>
                  <p className="text-gray-700"><strong>Recovery:</strong> 2-6 hours depending on medication</p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h4 className="text-yellow-700 font-bold text-xl mb-3 flex items-center gap-2">
                    <span className="text-2xl">😴</span> General Anesthesia
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold ml-2">More Involved</span>
                  </h4>
                  <p className="text-gray-700 mb-2"><strong>When used:</strong> Painful procedures, contrast studies</p>
                  <p className="text-gray-700 mb-2"><strong>Benefits:</strong> Complete immobilization, pain-free procedure</p>
                  <p className="text-gray-700"><strong>Recovery:</strong> Several hours with close monitoring</p>
                </div>
              </div>

              {/* Radiation Safety */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-xl">
                  <span className="text-2xl">⚠️</span> Radiation Safety Guidelines
                </h4>
                <ul className="space-y-2">
                  {[
                    "Never hold your pet during X-rays - trained staff will provide restraint",
                    "Pregnant women should not be in X-ray rooms during procedures",
                    "Children should remain in waiting areas during imaging",
                    "Lead protective equipment must be worn by all persons in X-ray room"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-red-700">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Breakdown */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                X-Ray Costs and Financial Planning
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-green-800 mb-4">💰 X-Ray Imaging Costs (₹)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">X-Ray Type</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Cost Range</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { type: "Basic 2-view X-rays", cost: "₹1,500 – ₹3,000" },
                        { type: "Chest X-rays", cost: "₹2,000 – ₹4,000" },
                        { type: "Abdominal X-rays", cost: "₹2,500 – ₹5,000" },
                        { type: "Dental X-rays", cost: "₹2,000 – ₹4,500" },
                        { type: "Contrast studies", cost: "₹3,500 – ₹7,000" },
                        { type: "Specialist interpretation", cost: "₹1,000 – ₹2,000 (extra)" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.type}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Financial Tips */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-6 my-6">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">💡</span> Financial Planning Tips
                </h4>
                <ul className="space-y-2">
                  {[
                    "Consider pet insurance that covers diagnostic imaging",
                    "Ask if your vet offers payment plans for larger bills",
                    "Prioritize essential imaging in emergencies",
                    "Keep a small emergency fund for unexpected vet costs",
                    "Compare costs between general practice and specialty clinics"
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                X-ray imaging is an essential diagnostic tool that gives veterinarians a clear window into your pet's internal health. While it has limitations, when combined with other tests and physical examination, it provides a powerful way to detect, treat, and monitor many conditions.
              </p>
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
                <div className="text-5xl mb-3">📡</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Professional X-Ray imaging services</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20Pet%20X-Ray%20Imaging%20service."
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

export default XRayImaging;
