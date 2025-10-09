import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function NutritionGuidance() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Pet Nutrition Guide
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Complete Guide to Pet Nutrition: Comprehensive Dietary Healthcare
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-500 text-xs sm:text-sm mb-6">
              <span>📅 Published: March 20, 2024</span>
              <span>⏱️ 25 min read</span>
              <span>🏷️ Nutrition, Diet, Prevention, Health</span>
              <span>👨‍⚕️ Dr. Veterinary Nutrition Team</span>
            </div>

            <img 
              src="/static/images/imgs9.jpg" 
              alt="Pet Nutrition"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Proper nutrition is the foundation of your pet's health, affecting everything from energy levels and immune function to coat quality and longevity. Understanding nutritional requirements, choosing appropriate foods, and maintaining healthy feeding practices can prevent numerous health problems.
              </p>

              {/* Stats Box */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8 text-center my-8">
                <div className="text-5xl font-extrabold text-emerald-600 mb-3">70%</div>
                <p className="text-gray-700 text-lg">
                  of pet health problems are directly or indirectly related to nutrition, making proper diet the single most important factor in maintaining long-term health
                </p>
              </div>

              {/* Essential Nutrients */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-emerald-600 pl-6">
                Understanding Pet Nutritional Science
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Essential Nutrients for Pets:</h3>
              <ul className="space-y-3 ml-6">
                {[
                  "Proteins: Building blocks for muscles, organs, enzymes, and immune system",
                  "Fats: Energy source, essential fatty acids, vitamin absorption",
                  "Carbohydrates: Energy source, fiber for digestive health",
                  "Vitamins: Catalysts for metabolic processes and immune function",
                  "Minerals: Bone health, enzyme function, fluid balance",
                  "Water: Most critical nutrient for all body functions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span className="text-gray-700"><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>

              {/* Nutrient Requirements */}
              <div className="space-y-4 my-8">
                {[
                  { title: "Protein Requirements", badge: "Essential", icon: "🥩", dogs: "18-25% protein (dry matter basis)", cats: "26-32% protein minimum", detail: "Complete amino acid profile more important than quantity" },
                  { title: "Fat Requirements", badge: "Essential", icon: "🧈", dogs: "8-15% fat content for maintenance", cats: "9-15% fat content", detail: "Essential fatty acids: Omega-3 and Omega-6 for skin, coat, brain health" },
                  { title: "Carbohydrate Considerations", badge: "Variable", icon: "🌾", dogs: "Can utilize 50-70% carbohydrates efficiently", cats: "Limited carbohydrate tolerance, maximum 10-12%", detail: "Energy source, fiber for digestion, prebiotics" }
                ].map((nutrient, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6">
                    <h4 className="text-amber-700 font-bold text-xl mb-3 flex items-center gap-2 flex-wrap">
                      <span className="text-2xl">{nutrient.icon}</span> {nutrient.title}
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">{nutrient.badge}</span>
                    </h4>
                    <p className="text-gray-700 mb-2"><strong>Dogs:</strong> {nutrient.dogs}</p>
                    <p className="text-gray-700 mb-2"><strong>Cats:</strong> {nutrient.cats}</p>
                    <p className="text-gray-600 text-sm">{nutrient.detail}</p>
                  </div>
                ))}
              </div>

              {/* Life Stage Nutrition */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                Life Stage Nutrition Requirements
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">🍼 Puppy/Kitten Nutrition (0-12 months)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Age Range</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Feeding Frequency</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Key Nutritional Focus</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Caloric Needs</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { age: "0-3 months", freq: "4-6 meals daily", focus: "High protein (28-32%), DHA, calcium balance", cal: "2x adult requirements" },
                        { age: "3-6 months", freq: "3-4 meals daily", focus: "Continued growth support, immune development", cal: "1.8x adult requirements" },
                        { age: "6-12 months", freq: "2-3 meals daily", focus: "Controlled growth, bone development", cal: "1.5x adult requirements" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.age}</td>
                          <td className="border border-gray-300 p-3">{row.freq}</td>
                          <td className="border border-gray-300 p-3">{row.focus}</td>
                          <td className="border border-gray-300 p-3 text-blue-600 font-semibold">{row.cal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">🦴 Adult Maintenance Nutrition (1-7 years)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Activity Level</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Protein %</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Fat %</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Feeding Schedule</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { activity: "Sedentary/Indoor", protein: "18-22%", fat: "8-12%", schedule: "1-2 meals daily" },
                        { activity: "Moderate Activity", protein: "20-25%", fat: "10-15%", schedule: "2 meals daily" },
                        { activity: "High Activity/Working", protein: "25-32%", fat: "15-20%", schedule: "2-3 meals daily" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.activity}</td>
                          <td className="border border-gray-300 p-3 text-green-600">{row.protein}</td>
                          <td className="border border-gray-300 p-3 text-blue-600">{row.fat}</td>
                          <td className="border border-gray-300 p-3">{row.schedule}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Weight Management */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Weight Management and Body Condition
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 text-center my-8">
                <div className="text-5xl font-extrabold text-red-600 mb-3">56%</div>
                <p className="text-gray-700 text-lg">
                  of dogs and 60% of cats are overweight or obese, making weight management one of the most important nutritional concerns
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-blue-800 mb-4">🔍 9-Point Body Condition Scale</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Score</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Description</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Action Needed</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { score: "1-3", desc: "Underweight - ribs easily visible", action: "Increase calories, veterinary evaluation" },
                        { score: "4-5", desc: "Ideal - ribs felt with slight pressure", action: "Maintain current diet and exercise" },
                        { score: "6-7", desc: "Overweight - ribs felt with pressure", action: "Reduce calories, increase exercise" },
                        { score: "8-9", desc: "Obese - ribs difficult to feel", action: "Significant intervention needed" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-bold">{row.score}</td>
                          <td className="border border-gray-300 p-3">{row.desc}</td>
                          <td className="border border-gray-300 p-3 text-blue-600 font-medium">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Supplements */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Common Supplements and Their Uses
              </h2>

              <div className="space-y-4">
                {[
                  { title: "Omega-3 Fatty Acids", badge: "Anti-inflammatory", icon: "🐟", benefits: "Skin/coat health, joint support, cognitive function", sources: "Fish oil, algae oil, flaxseed oil" },
                  { title: "Joint Support Supplements", badge: "Mobility", icon: "🦴", benefits: "Cartilage support, reduced inflammation, improved mobility", sources: "Glucosamine, chondroitin, MSM" }
                ].map((supp, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6">
                    <h4 className="text-amber-700 font-bold text-xl mb-3 flex items-center gap-2 flex-wrap">
                      <span className="text-2xl">{supp.icon}</span> {supp.title}
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">{supp.badge}</span>
                    </h4>
                    <p className="text-gray-700 mb-2"><strong>Benefits:</strong> {supp.benefits}</p>
                    <p className="text-gray-600 text-sm"><strong>Sources:</strong> {supp.sources}</p>
                  </div>
                ))}
              </div>

              {/* Safety Warning */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-xl">
                  <span className="text-2xl">⚠️</span> Supplement Safety Warning
                </h4>
                <p className="text-red-700">
                  Not all supplements are necessary or safe. Over-supplementation can cause toxicity, especially with fat-soluble vitamins (A, D, E, K) and minerals like calcium and iron. Always consult your veterinarian before adding supplements to your pet's diet.
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Should I rotate between different pet food brands?",
                    a: "If your pet is thriving on their current food, rotation isn't necessary. However, gradual rotation can provide dietary variety and may help prevent food sensitivities from developing."
                  },
                  {
                    q: "How do I know if my pet has a food allergy?",
                    a: "Common signs include itching, skin infections, ear infections, and digestive upset. Diagnosis requires an elimination diet trial lasting 8-12 weeks under veterinary supervision."
                  },
                  {
                    q: "Can I feed my dog and cat the same food?",
                    a: "No. Cat food is formulated with higher protein and specific nutrients that cats require, while dog food may not meet feline nutritional needs."
                  },
                  {
                    q: "When should I switch my pet to senior food?",
                    a: "Generally around 7 years of age for most dogs and cats, though large breed dogs may benefit from senior nutrition earlier."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                    <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                    <p className="text-gray-600">A: {faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Success Keys */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
                  <span>🎯</span> Nutrition Success Keys
                </h4>
                <ul className="space-y-3">
                  {[
                    "Focus on complete and balanced nutrition appropriate for life stage",
                    "Maintain ideal body weight through proper portions and exercise",
                    "Choose high-quality foods with AAFCO certification",
                    "Monitor your pet's response and adjust as needed",
                    "Work with your veterinary team for guidance",
                    "Remember that good nutrition is preventive medicine"
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
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 shadow-xl border-2 border-emerald-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🥗</div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Expert nutrition consultation</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20Pet%20Nutrition%20Consultation%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
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

export default NutritionGuidance;
