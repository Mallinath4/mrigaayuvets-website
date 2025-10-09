import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function PuppyProofing() {
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
          <span>Puppy Care</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero Image with Gradient Overlay */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/puppy.jpeg" 
                  alt="Happy puppies playing safely"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-emerald-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    🐾 Puppy Care
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    10 Essential Puppy Proofing Tips
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      March 15, 2025
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      15 min read
                    </span>
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      👨‍⚕️ Dr. Veterinary Team
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-xl leading-relaxed text-gray-700 font-medium">
                    Bringing a new puppy home is one of life's most exciting experiences, but it also comes with great responsibility. Your adorable bundle of fur is naturally curious and will explore everything with their mouth, paws, and boundless energy.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    At MrigaAayuvets, we've seen countless preventable accidents that could have been avoided with proper puppy-proofing. Here are our top 10 essential tips to create a safe haven for your new family member.
                  </p>

                  {/* Stats Box */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8 text-center my-8 shadow-lg">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-3">
                      85%
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      of puppy accidents can be prevented with proper home preparation and puppy-proofing measures
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Understanding Puppy Behavior
                  </h2>
                  <p>
                    Before diving into specific tips, it's important to understand that puppies explore the world primarily through their mouths. They'll chew on anything they can find, dig into corners, and squeeze into tight spaces.
                  </p>

                  {/* Tip 1 */}
                  <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Secure All Electrical Cords and Outlets
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Electrical cords pose a serious threat to curious puppies who love to chew. A single bite can result in severe burns, electrocution, or even death.
                        </p>
                        
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-xl p-4">
                          <h4 className="text-green-800 font-semibold mb-2 flex items-center gap-2">
                            <span className="text-xl">💡</span> Pro Tips:
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            {[
                              "Use cord protectors or PVC tubing to cover exposed wires",
                              "Unplug appliances when not in use",
                              "Install outlet covers on all unused electrical outlets",
                              "Route cords behind furniture or use cord management systems"
                            ].map((tip, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 2 */}
                  <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl bg-gradient-to-br from-purple-500 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Remove or Relocate Toxic Plants
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Many common houseplants and garden plants are toxic to dogs and can cause serious health issues ranging from mild stomach upset to organ failure.
                        </p>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4 mb-4">
                          <p className="font-semibold text-red-800 mb-2">⚠️ Dangerous plants to avoid:</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {[
                              "Lilies", "Azaleas", "Sago Palms", "Oleander",
                              "Castor Bean", "Cyclamen", "Tulip bulbs", "Daffodil bulbs"
                            ].map((plant, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-red-600">•</span>
                                <span>{plant}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 border border-red-300 rounded-xl p-4">
                          <p className="text-red-800 font-semibold">
                            <span className="text-xl mr-2">🚨</span>
                            If you suspect your puppy has ingested any toxic plant, contact your veterinarian immediately. Time is critical in these situations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 3 */}
                  <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Secure Household Chemicals and Medications
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Cleaning supplies, medications, and chemicals should be stored in locked cabinets or placed well out of reach.
                        </p>
                        
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-r-xl p-4">
                          <p className="font-semibold text-amber-800 mb-2">Items to secure:</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {[
                              "All cleaning products",
                              "Human & pet medications",
                              "Automotive fluids",
                              "Fertilizers & pesticides",
                              "Paint & thinners",
                              "Pool chemicals"
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-amber-600">🔒</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Continue with remaining tips in similar styled boxes... */}
                  
                  {/* Emergency Preparedness */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6 border-l-4 border-red-600 pl-6">
                    Emergency Preparedness
                  </h2>
                  
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">🚨</span> Emergency Action Plan
                    </h4>
                    <p className="mb-4 font-semibold text-red-700">If your puppy ingests something dangerous:</p>
                    <ol className="space-y-3">
                      {[
                        "Stay calm and remove your puppy from the area",
                        "Identify what and how much was consumed",
                        "Call your veterinarian or poison control immediately",
                        "Do NOT induce vomiting unless specifically instructed",
                        "Follow professional guidance exactly",
                        "Transport to veterinary clinic if advised"
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mt-10">
                    <h4 className="font-bold text-green-800 mb-4 text-2xl flex items-center gap-2">
                      <span className="text-3xl">🎯</span> Puppy Proofing Success Keys
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Think from a puppy's perspective - get down to their level",
                        "Start puppy-proofing before bringing your puppy home",
                        "Regularly reassess as your puppy grows and develops",
                        "Combine proofing with proper training and supervision",
                        "Keep emergency contacts readily available",
                        "Remember that prevention is always better than treatment"
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-600 mt-1 text-xl">✓</span>
                          <span className="text-gray-700 font-medium">{key}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Back Button */}
                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            {/* Ask the Vet */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-xl border-2 border-green-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">👨‍⚕️</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Ask Our Vet</h3>
                <p className="text-gray-600 text-sm">Have questions about your pet's health?</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20have%20a%20question%20about%20puppy%20proofing."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                💬 Chat with Vet
              </a>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Related Articles
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Puppy Care Guide", desc: "Complete guide for new puppy owners" },
                  { title: "Pet Vaccination", desc: "Essential vaccines for your pet" },
                  { title: "Emergency Pet Care", desc: "What to do in emergencies" }
                ].map((article, idx) => (
                  <Link 
                    key={idx}
                    to="/blogs" 
                    className="block hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200"
                  >
                    <h4 className="font-semibold text-gray-800 mb-1">{article.title}</h4>
                    <p className="text-sm text-gray-500">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="text-2xl">📬</span> Get Pet Care Tips
              </h3>
              <p className="text-gray-600 mb-4 text-sm">Subscribe for expert advice</p>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PuppyProofing;
