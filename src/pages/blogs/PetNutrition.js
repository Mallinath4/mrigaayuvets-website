import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function PetNutrition() {
  const dietBreakdown = [
    { nutrient: "Protein", percentage: "40%", color: "from-green-500 to-emerald-600" },
    { nutrient: "Carbohydrates", percentage: "30%", color: "from-blue-500 to-cyan-600" },
    { nutrient: "Healthy Fats", percentage: "15%", color: "from-amber-500 to-orange-600" },
    { nutrient: "Vitamins & Minerals", percentage: "15%", color: "from-purple-500 to-pink-600" }
  ];

  const toxicFoods = [
    "Chocolate (especially dark)",
    "Grapes and raisins",
    "Onions and garlic",
    "Avocado",
    "Xylitol (artificial sweetener)",
    "Alcohol",
    "Caffeine",
    "Macadamia nuts"
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
          <span>Pet Nutrition</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img4.jpg"
                  alt="Pet nutrition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-green-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    🥗 Nutrition Guide
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    The Ultimate Pet Nutrition Guide
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
                    Proper nutrition is the foundation of your pet's health and longevity. Just like humans, pets require a balanced diet with the right proportions of proteins, carbohydrates, fats, vitamins, and minerals.
                  </p>

                  {/* Diet Breakdown */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-8">
                    <h4 className="text-green-800 font-bold text-xl mb-4 text-center">
                      🥗 Ideal Pet Diet Breakdown
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {dietBreakdown.map((item, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                            {item.percentage}
                          </div>
                          <div className="text-sm text-gray-700 font-semibold">{item.nutrient}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                    Understanding Pet Nutritional Needs
                  </h2>

                  {/* Essential Nutrients */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 my-6">
                    <h3 className="text-xl font-bold text-teal-800 mb-4">Essential Nutrients for Pets:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: "💪", name: "Proteins", desc: "Building blocks for muscles and organs" },
                        { icon: "⚡", name: "Carbohydrates", desc: "Primary energy source" },
                        { icon: "✨", name: "Fats", desc: "Skin health and vitamin absorption" },
                        { icon: "🌟", name: "Vitamins", desc: "Support immune health" },
                        { icon: "🦴", name: "Minerals", desc: "Bone development and metabolism" },
                        { icon: "💧", name: "Water", desc: "Most important nutrient" }
                      ].map((nutrient, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 hover:shadow-md transition">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{nutrient.icon}</span>
                            <div>
                              <p className="font-bold text-gray-800">{nutrient.name}</p>
                              <p className="text-sm text-gray-600">{nutrient.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Life Stage Nutrition
                  </h2>

                  {/* Puppy/Kitten */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-6">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🍼</span> Puppy & Kitten Nutrition (0-12 months)
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Growing pets need more calories per pound than adults, with higher protein and fat content.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Feed 3-4 times daily until 6 months old",
                        "Choose food specifically formulated for growth",
                        "Protein should make up 22-32% of diet",
                        "Fat content should be 8-22%"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Adult */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                    <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🦴</span> Adult Pet Nutrition (1-7 years)
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Adult pets need balanced maintenance diet that supports their activity level.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Feed 1-2 times daily on consistent schedule",
                        "Protein content: 18-25%",
                        "Fat content: 5-15%",
                        "Monitor weight and adjust portions"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Senior */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">👴</span> Senior Pet Nutrition (7+ years)
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Older pets need easily digestible foods with modified nutrient profiles.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Higher quality, easily digestible proteins",
                        "Added joint support supplements",
                        "Reduced calories if less active",
                        "Enhanced with antioxidants"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reading Labels */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                    Choosing the Right Food
                  </h2>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-green-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-xl">🔍</span> Reading Pet Food Labels
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "First ingredient: Named protein source (chicken, beef)",
                        "AAFCO statement: Look for \"complete and balanced\"",
                        "Avoid: Generic terms like \"meat meal\"",
                        "Check: Expiration dates and storage instructions"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-gray-700"><strong>{tip.split(':')[0]}:</strong>{tip.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toxic Foods */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">🚫</span> Toxic Foods to Never Feed Your Pet
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {toxicFoods.map((food, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                          <span className="text-red-600 text-xl">⚠</span>
                          <span className="text-gray-700">{food}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signs of Good Nutrition */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-emerald-600 pl-6">
                    Signs of Good Nutrition
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { icon: "✨", sign: "Shiny coat" },
                      { icon: "👁️", sign: "Clear eyes" },
                      { icon: "💪", sign: "Good energy" },
                      { icon: "⚖️", sign: "Ideal weight" },
                      { icon: "😊", sign: "Healthy skin" },
                      { icon: "🦷", sign: "Good dental health" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 text-center hover:shadow-lg transition">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <p className="text-sm font-semibold text-gray-700">{item.sign}</p>
                      </div>
                    ))}
                  </div>

                  {/* FAQ */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {[
                      { q: "How do I transition my pet to new food?", a: "Gradually mix increasing amounts of new food with old food over 7-10 days." },
                      { q: "Can I feed my pet a vegetarian diet?", a: "Dogs can potentially thrive on well-planned vegetarian diets, but cats are obligate carnivores and require animal products." },
                      { q: "How much should I feed my pet?", a: "Follow feeding guidelines on food package, then adjust based on body condition and activity level." }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                        <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                        <p className="text-gray-600">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>

                  {/* Key Takeaway */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                    <h4 className="text-green-800 font-bold mb-3 text-xl flex items-center gap-2">
                      <span className="text-2xl">📌</span> Key Takeaway
                    </h4>
                    <p className="text-gray-700">
                      Nutritional needs are individual. What works for one pet may not work for another. Regular veterinary checkups and monitoring body condition will help you make the best nutritional choices.
                    </p>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-xl border-2 border-green-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🥗</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Nutrition Advice</h3>
                <p className="text-gray-600 text-sm">Get personalized diet plans</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20nutrition%20advice%20for%20my%20pet."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
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

export default PetNutrition;
