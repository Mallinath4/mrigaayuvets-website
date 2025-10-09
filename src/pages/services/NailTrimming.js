import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function NailTrimming() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Complete Guide to Pet Nail Trimming
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <article className="mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                Complete Guide to Pet Nail Trimming: Safe and Stress-Free Techniques
              </h1>
              
              <div className="flex flex-wrap gap-4 text-gray-500 text-xs sm:text-sm mb-6">
                <span>📅 Published: March 18, 2024</span>
                <span>⏱️ 8 min read</span>
                <span>🏷️ Nail Care, Pet Health, Grooming</span>
                <span>👨‍⚕️ Dr. Veterinary Team</span>
              </div>

              <img 
                src="/static/images/nail.jpeg" 
                alt="Pet nail trimming"
                className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
              />
            </article>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Regular nail trimming is one of the most important yet often overlooked aspects of pet care. Overgrown nails can cause pain, affect your pet's gait, lead to injuries, and damage furniture and floors.
              </p>

              {/* Stats Box */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 text-center my-8">
                <div className="text-5xl font-extrabold text-blue-600 mb-3">65%</div>
                <p className="text-gray-700 text-lg">
                  of pet owners avoid trimming their pet's nails due to fear of injury, leading to overgrown nails and related health issues
                </p>
              </div>

              {/* Why Essential */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                Why Nail Trimming is Essential
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Health Benefits:</h3>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "Prevents ingrown nails", desc: "Overgrown nails can curl and pierce paw pads" },
                  { title: "Maintains proper gait", desc: "Correct nail length ensures natural walking posture" },
                  { title: "Reduces injury risk", desc: "Long nails can catch and tear causing pain" },
                  { title: "Prevents joint problems", desc: "Overgrown nails alter weight distribution" },
                  { title: "Reduces infections", desc: "Torn or split nails are prone to bacterial infections" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Nail Anatomy */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Understanding Nail Anatomy
              </h2>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-r-2xl p-6 my-6">
                <h4 className="text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
                  <span>🦴</span> The Nail Structure
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold ml-2">Must Know</span>
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Nail/Claw:</strong> The hard, visible outer portion that grows continuously</p>
                  <p><strong>Quick:</strong> The pink blood vessel and nerve running through the nail</p>
                  <p><strong>Cutting zone:</strong> The white/clear tip that's safe to trim</p>
                  <p><strong>Growth rate:</strong> Approximately 2-3mm per month in most pets</p>
                </div>
              </div>

              {/* Trimming Schedule */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Nail Trimming Schedule
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">📋 Recommended Trimming Frequency</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Pet Type</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Active Pets</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Indoor Pets</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Senior Pets</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { type: "Dogs", active: "Every 4-6 weeks", indoor: "Every 3-4 weeks", senior: "Every 2-3 weeks" },
                        { type: "Cats", active: "Every 3-4 weeks", indoor: "Every 2-3 weeks", senior: "Every 2 weeks" },
                        { type: "Small breeds", active: "Every 3-4 weeks", indoor: "Every 2-3 weeks", senior: "Every 2 weeks" },
                        { type: "Large breeds", active: "Every 4-6 weeks", indoor: "Every 3-4 weeks", senior: "Every 2-3 weeks" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.type}</td>
                          <td className="border border-gray-300 p-3">{row.active}</td>
                          <td className="border border-gray-300 p-3">{row.indoor}</td>
                          <td className="border border-gray-300 p-3">{row.senior}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Essential Tools */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Essential Tools and Equipment
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Nail Clippers",
                    badge: "Essential",
                    badgeColor: "bg-red-500",
                    icon: "✂️",
                    items: [
                      "Guillotine type: Good for small to medium dogs with round nails",
                      "Scissor type: Best for large dogs and cats, more control",
                      "Grinder tools: Electric sanders for gradual, precise trimming"
                    ]
                  },
                  {
                    title: "Safety Supplies",
                    badge: "Essential",
                    badgeColor: "bg-red-500",
                    icon: "🩹",
                    items: [
                      "Styptic powder: Stops bleeding if quick is accidentally cut",
                      "Cornstarch: Alternative bleeding control method",
                      "Treats: High-value rewards for positive reinforcement",
                      "Good lighting: Essential for seeing nail structure clearly"
                    ]
                  }
                ].map((tool, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">{tool.icon}</span>
                      {tool.title}
                      <span className={`${tool.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold ml-2`}>
                        {tool.badge}
                      </span>
                    </h4>
                    {tool.items.map((item, iidx) => (
                      <p key={iidx} className="text-gray-700 mb-2">• {item}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Step by Step */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Step-by-Step Trimming Process
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span>✂️</span> Professional Cutting Tips
                </h4>
                <ul className="space-y-2">
                  {[
                    "Start with just front paws for anxious pets",
                    "Cut small amounts frequently rather than large amounts rarely",
                    "Always cut from top to bottom, not side to side",
                    "Take breaks if pet becomes stressed",
                    "End sessions on a positive note with treats and praise"
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Signs */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                Signs Your Pet Needs Nail Trimming
              </h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">👀 Visual and Audio Indicators</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Indicator</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">What It Means</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Action Needed</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { indicator: "Clicking on floors", means: "Nails touching ground when standing", action: "Immediate trimming needed" },
                        { indicator: "Curved nail tips", means: "Nails growing in circular pattern", action: "Professional help recommended" },
                        { indicator: "Catching in carpets", means: "Nails too long and sharp", action: "Urgent trimming needed" },
                        { indicator: "Altered walking", means: "Nails affecting natural gait", action: "Immediate veterinary check" },
                        { indicator: "Scratching damage", means: "Nails causing injury to people", action: "Priority trimming required" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3">{row.indicator}</td>
                          <td className="border border-gray-300 p-3">{row.means}</td>
                          <td className="border border-gray-300 p-3 text-red-600 font-semibold">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cost Comparison */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Professional vs DIY Trimming
              </h2>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">💰 Cost Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Option</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Cost Per Session</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Annual Cost</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Pros</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { option: "Professional groomer", session: "₹150 - ₹400", annual: "₹1,800 - ₹4,800", pros: "Expert technique" },
                        { option: "Veterinary clinic", session: "₹200 - ₹500", annual: "₹2,400 - ₹6,000", pros: "Medical expertise" },
                        { option: "DIY at home", session: "₹0", annual: "₹300 - ₹800", pros: "Cost-effective" },
                        { option: "Mobile groomer", session: "₹300 - ₹600", annual: "₹3,600 - ₹7,200", pros: "Convenient" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.option}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.session}</td>
                          <td className="border border-gray-300 p-3 text-blue-600 font-semibold">{row.annual}</td>
                          <td className="border border-gray-300 p-3">{row.pros}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How short should I cut my pet's nails?",
                    a: "Cut just the white/clear tip, staying well away from the pink quick. When in doubt, cut less rather than more."
                  },
                  {
                    q: "My pet's nails are black - how do I see the quick?",
                    a: "Look at the nail from underneath. You'll see a small dark circle in the center - that's where the quick begins."
                  },
                  {
                    q: "Can I use human nail clippers on my pet?",
                    a: "Only for very small pets in emergencies. Pet clippers are designed for the thickness and shape of animal nails."
                  },
                  {
                    q: "What if my pet won't let me touch their paws?",
                    a: "Start with gradual desensitization, touching paws briefly and rewarding. This may take weeks or months."
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
                    "Trim nails every 3-6 weeks depending on your pet's lifestyle",
                    "Invest in proper pet nail clippers and styptic powder",
                    "Start paw handling early and make it a positive experience",
                    "When in doubt, cut less or seek professional help",
                    "Regular trimming prevents serious health and behavior problems"
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
                <div className="text-5xl mb-3">✂️</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Professional nail trimming at your doorstep</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20nail%20trimming%20service."
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

export default NailTrimming;
