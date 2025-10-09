import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function DogBreeds() {
  const breedGroups = [
    { icon: "🏃‍♂️", name: "Working Group", purpose: "Guard, rescue, pull sleds", traits: "Strong, intelligent, task-oriented", examples: "German Shepherd, Siberian Husky" },
    { icon: "🦆", name: "Sporting Group", purpose: "Hunt and retrieve game", traits: "High energy, friendly, trainable", examples: "Golden Retriever, Labrador" },
    { icon: "🏠", name: "Toy Group", purpose: "Companionship", traits: "Small size, alert, affectionate", examples: "Chihuahua, Pomeranian" },
    { icon: "🐕", name: "Terrier Group", purpose: "Hunt vermin", traits: "Feisty, energetic, determined", examples: "Jack Russell, Bull Terrier" }
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
          <span>Dog Breeds Guide</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img8.jpg"
                  alt="Dog breeds"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    🐕 Dog Breeds
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Choosing the Right Dog Breed for Your Lifestyle
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
                    Choosing the right dog breed is one of the most important decisions you'll make as a pet owner. The perfect match depends on your lifestyle, living situation, experience level, and personal preferences.
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8 text-center my-8 shadow-lg">
                    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-3">
                      25%
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      of dogs are rehomed within their first year due to lifestyle mismatches with their breed characteristics
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-orange-600 pl-6">
                    Understanding Dog Breed Classifications
                  </h2>

                  {/* Breed Groups Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                    {breedGroups.map((group, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-4xl">{group.icon}</span>
                          <h4 className="text-lg font-bold text-gray-800">{group.name}</h4>
                        </div>
                        <p className="text-sm mb-1"><strong>Purpose:</strong> {group.purpose}</p>
                        <p className="text-sm mb-1"><strong>Traits:</strong> {group.traits}</p>
                        <p className="text-sm text-blue-600"><strong>Examples:</strong> {group.examples}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                    Activity Level Matching
                  </h2>

                  {/* High Energy */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-green-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🏃‍♂️</span> High-Energy Breeds (Need 2+ hours daily exercise)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Border Collie - Extremely intelligent",
                        "Australian Cattle Dog - Working breed",
                        "Jack Russell Terrier - Small but mighty",
                        "Siberian Husky - Built for endurance",
                        "Weimaraner - Needs vigorous exercise"
                      ].map((breed, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-green-600">•</span>
                          <span className="text-sm text-gray-700">{breed}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Moderate Energy */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-blue-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🚶‍♂️</span> Moderate-Energy Breeds (Need 1-2 hours daily)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Golden Retriever - Great family dogs",
                        "Labrador Retriever - Loves swimming",
                        "German Shepherd - Needs mental challenges",
                        "Standard Poodle - Highly trainable",
                        "Brittany Spaniel - Great with children"
                      ].map((breed, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-blue-600">•</span>
                          <span className="text-sm text-gray-700">{breed}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Low Energy */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-r-2xl p-6 my-6">
                    <h4 className="text-orange-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">😴</span> Low-Energy Breeds (Need 30-60 minutes daily)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Bulldog - Calm temperament",
                        "Basset Hound - Good with families",
                        "Shih Tzu - Friendly companion",
                        "Great Dane - Gentle giant",
                        "Cavalier King Charles - Adaptable"
                      ].map((breed, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-orange-600">•</span>
                          <span className="text-sm text-gray-700">{breed}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Living Space Table */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                    Living Space Requirements
                  </h2>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6 overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-white/50">
                          <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Living Situation</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Best Sizes</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Recommended Breeds</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {[
                          { space: "Small Apartment", size: "Toy to Small (5-25 lbs)", breeds: "French Bulldog, Cavalier King Charles" },
                          { space: "Large Apartment", size: "Small to Medium (10-50 lbs)", breeds: "Cocker Spaniel, Bulldog, Beagle" },
                          { space: "House with Small Yard", size: "Medium (25-60 lbs)", breeds: "Border Collie, Australian Shepherd" },
                          { space: "House with Large Yard", size: "Large (50+ lbs)", breeds: "Golden Retriever, German Shepherd" }
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                            <td className="border border-gray-300 p-3 font-medium">{row.space}</td>
                            <td className="border border-gray-300 p-3">{row.size}</td>
                            <td className="border border-gray-300 p-3 text-purple-700">{row.breeds}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Red Flags */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8 shadow-lg">
                    <h4 className="font-bold text-red-800 mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">🚩</span> Avoid These Breeds If You...
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Live in a small apartment: Great Danes, Siberian Huskies",
                        "Work long hours: Border Collies, Jack Russell Terriers",
                        "Are a first-time owner: Chow Chow, Afghan Hound",
                        "Have limited grooming time: Poodles, Old English Sheepdogs",
                        "Live in hot climate: Saint Bernard, Newfoundland"
                      ].map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span className="text-red-700"><strong>{warning.split(':')[0]}:</strong>{warning.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Adoption Advantage */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                    The Adoption Advantage
                  </h2>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                    <h4 className="text-green-800 font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">👍</span> Benefits of Adoption
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Save a life: Give a homeless dog a second chance",
                        "Known temperament: Shelter staff can assess personality",
                        "Lower cost: Adoption fees much less than breeder prices",
                        "Health benefits: Often already spayed/neutered",
                        "Adult dogs available: Skip puppy training phase",
                        "Mixed breeds: Often healthier and unique personalities"
                      ].map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-gray-700"><strong>{benefit.split(':')[0]}:</strong>{benefit.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Checklist */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 my-8">
                    <h4 className="text-blue-800 font-bold text-xl mb-4 flex items-center gap-2">
                      <span className="text-2xl">✅</span> Breed Selection Checklist
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Size appropriate for living space",
                        "Energy level matches yours",
                        "Grooming fits your schedule",
                        "Training needs match experience",
                        "Climate suitable for location",
                        "Temperament fits family",
                        "Budget allows for costs",
                        "Long-term commitment ready"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-blue-600 text-xl">✓</span>
                          <span className="text-gray-700">{item}</span>
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
                      { q: "Should I get a puppy or adult dog?", a: "Puppies require more time and training but can be molded to your lifestyle. Adult dogs have established personalities." },
                      { q: "Are mixed breeds healthier?", a: "Mixed breeds often have fewer genetic health issues due to greater genetic diversity." },
                      { q: "What about Indian native breeds?", a: "Indian Pariah Dogs are excellent - well-adapted to local climate, intelligent, and often available for adoption." }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                        <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                        <p className="text-gray-600">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>

                  {/* Final Tip */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 mt-10">
                    <h4 className="text-orange-800 font-bold mb-3 text-xl flex items-center gap-2">
                      <span className="text-2xl">🎯</span> Final Tip
                    </h4>
                    <p className="text-gray-700">
                      The best dog for you is one whose needs you can meet consistently and happily. A well-matched dog and owner make for the happiest, healthiest relationships.
                    </p>
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Blogs
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar - Same as other blog pages */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-xl border-2 border-orange-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">👨‍⚕️</div>
                <h3 className="text-2xl font-bold text-orange-700 mb-2">Ask Our Vet</h3>
                <p className="text-gray-600 text-sm">Questions about dog breeds?</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20help%20choosing%20a%20dog%20breed."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
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

export default DogBreeds;
