import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function CatCare() {
  const happyCatSigns = [
    { icon: "😸", label: "Purring" },
    { icon: "🎯", label: "Playful" },
    { icon: "🍽️", label: "Good Appetite" },
    { icon: "💤", label: "Relaxed Sleep" },
    { icon: "🤗", label: "Seeks Affection" }
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
          <span>Cat Care</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero Image with Gradient */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img10.jpg" 
                  alt="Happy cat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-purple-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    😺 Cat Care
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Essential Tips for Keeping Your Cat Happy
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      March 22, 2025
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
                    Cats require specific care and attention to thrive in our homes. Understanding their unique needs and behaviors is key to ensuring your feline friend lives a happy, healthy, and fulfilling life.
                  </p>

                  {/* Happiness Meter */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-8">
                    <h4 className="text-purple-800 font-bold text-xl mb-4 text-center">🐱 Signs of a Happy Cat</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                      {happyCatSigns.map((sign, idx) => (
                        <div key={idx} className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                          <div className="text-4xl mb-2">{sign.icon}</div>
                          <div className="text-sm text-gray-700 font-semibold">{sign.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                    Understanding Your Cat's Basic Needs
                  </h2>

                  {/* Need 1: Safe Territory */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🏠</span> Safe Territory and Personal Space
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Cats are territorial animals who need to feel secure in their environment. A happy cat has access to safe spaces where they can retreat and observe their surroundings.
                    </p>
                    
                    <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-4">
                      <h4 className="font-semibold text-purple-800 mb-3">Creating Safe Spaces:</h4>
                      <ul className="space-y-2">
                        {[
                          "Vertical territory: Cat trees, shelves, and perches",
                          "Hiding spots: Boxes, cat caves, or quiet corners",
                          "Multiple resources: Food, water, litter boxes in different locations",
                          "Consistent layout: Avoid frequent furniture rearrangement"
                        ].map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Need 2: Mental Stimulation */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-6 my-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🎮</span> Mental Stimulation and Play
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Indoor cats especially need regular mental stimulation to prevent boredom, anxiety, and behavioral problems. Play mimics hunting behavior, which is essential for their psychological wellbeing.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4 my-4">
                      <h4 className="text-green-800 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-xl">🎯</span> Play Schedule for Maximum Happiness
                      </h4>
                      <p className="text-green-700 text-sm">
                        Schedule active play sessions before meals to mimic the natural hunt-catch-eat-groom-sleep cycle. This helps maintain your cat's natural rhythms and promotes better behavior.
                      </p>
                    </div>
                  </div>

                  {/* Need 3: Nutrition */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
                      <span className="text-3xl">🥘</span> Proper Nutrition and Hydration
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Cats have unique dietary requirements as obligate carnivores. Proper nutrition directly impacts their energy levels, coat quality, and overall happiness.
                    </p>

                    <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl p-4">
                      <h4 className="text-cyan-800 font-semibold mb-3 flex items-center gap-2">
                        <span className="text-xl">💧</span> Hydration Hacks
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Place water bowls away from food",
                          "Use wide, shallow bowls to avoid whisker stress",
                          "Try water fountains - many cats prefer moving water",
                          "Add wet food to increase moisture intake"
                        ].map((hack, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-600">✓</span>
                            <span className="text-gray-700 text-sm">{hack}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Health Warning Box */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">🚨</span> When to Call Your Vet Immediately
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Not eating for more than 24 hours",
                        "Difficulty urinating or no urination for 12+ hours",
                        "Labored breathing or panting",
                        "Severe lethargy or unresponsiveness",
                        "Vomiting multiple times in a day",
                        "Signs of pain (hiding, hunched posture)"
                      ].map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600">•</span>
                          <span className="text-red-700">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Environment Section */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-emerald-600 pl-6">
                    Creating an Enriching Environment
                  </h2>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                    <h4 className="text-green-800 font-semibold mb-3 flex items-center gap-2">
                      <span className="text-xl">🌱</span> Cat-Safe Plants
                    </h4>
                    <p className="text-green-700">
                      Add greenery safely with cat grass, spider plants, Boston ferns, or catnip. Always research plants before bringing them home, as many common houseplants are toxic to cats.
                    </p>
                  </div>

                  {/* Multi-Cat Household */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Managing Multi-Cat Households
                  </h2>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-blue-800 font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🏠</span> Multi-Cat Golden Rule
                    </h4>
                    <p className="text-blue-700">
                      Provide one resource per cat plus one extra. This means if you have 2 cats, you need 3 litter boxes, 3 food stations, and 3 water bowls in different locations.
                    </p>
                  </div>

                  {/* FAQ */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {[
                      {
                        q: "How many hours do cats sleep per day?",
                        a: "Cats sleep 12-16 hours per day on average. This is normal behavior and allows them to conserve energy for hunting-like activities."
                      },
                      {
                        q: "Why does my cat knead me with their paws?",
                        a: "Kneading is a sign of contentment that originates from kittenhood nursing behavior. It shows your cat feels safe and happy with you."
                      },
                      {
                        q: "Should I let my cat outside?",
                        a: "Indoor cats live longer, healthier lives on average. If you want to provide outdoor experiences, consider supervised outdoor time or cat harness training."
                      }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                        <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                        <p className="text-gray-600">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 mt-10">
                    <h4 className="text-purple-800 font-bold mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">⭐</span> Remember
                    </h4>
                    <p className="text-gray-700">
                      Every cat is an individual with unique preferences and needs. Pay attention to what makes your specific cat happy, and adjust your care accordingly. The effort you put into understanding your cat will be rewarded with years of companionship and purrs.
                    </p>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            {/* Ask Vet */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-xl border-2 border-purple-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">👨‍⚕️</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">Ask Our Vet</h3>
                <p className="text-gray-600 text-sm">Questions about cat care?</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20have%20a%20question%20about%20cat%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
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
                  { title: "Senior Pet Care", desc: "Caring for older cats" },
                  { title: "Pet Nutrition Guide", desc: "Complete dietary guide" },
                  { title: "Emergency Pet Care", desc: "What to do in emergencies" }
                ].map((article, idx) => (
                  <Link 
                    key={idx}
                    to="/blogs" 
                    className="block hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-purple-200"
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
                <span className="text-2xl">📬</span> Get Cat Care Tips
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

export default CatCare;
