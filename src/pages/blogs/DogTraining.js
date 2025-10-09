import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function DogTraining() {
  const bigFiveCommands = [
    { num: "1", command: "Sit", description: "Easiest command to teach and most useful in daily life" },
    { num: "2", command: "Stay", description: "Builds impulse control and keeps your dog safe" },
    { num: "3", command: "Come", description: "Most important command for safety and recall" },
    { num: "4", command: "Down", description: "Teaches calm, submissive behavior" },
    { num: "5", command: "Leave it", description: "Prevents picking up dangerous items" }
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
          <span>Dog Training</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Hero */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent z-10"></div>
                <img 
                  src="/static/images/img5.jpg"
                  alt="Dog training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="inline-block bg-indigo-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    🎓 Training Tips
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Top 5 Dog Training Tips for Beginners
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
                    Training your dog doesn't have to be stressful! With the right approach, patience, and consistency, you can build a strong bond with your furry friend while teaching them essential skills.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                    Why Training Matters
                  </h2>
                  <p className="text-gray-600">
                    Dog training is more than just teaching tricks — it's about communication, safety, and building a harmonious relationship. Well-trained dogs are happier, more confident, and better integrated into family life.
                  </p>

                  {/* Tip 1 - Positive Reinforcement */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-8 relative hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mt-2 mb-4 ml-8">
                      Start with Positive Reinforcement
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Positive reinforcement is the most effective and humane training method. Focus on rewarding good behavior immediately when it happens.
                    </p>
                    
                    <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-4">
                      <h4 className="font-semibold text-green-800 mb-3">How to Use Positive Reinforcement:</h4>
                      <ul className="space-y-2">
                        {[
                          "Timing is everything: Reward within 3 seconds",
                          "Use high-value treats your dog loves",
                          "Add praise and petting with treats",
                          "Be consistent with everyone in family"
                        ].map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span className="text-gray-700"><strong>{tip.split(':')[0]}:</strong>{tip.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-100 border border-green-300 rounded-xl p-4 mt-4">
                      <p className="text-green-800 text-sm">
                        <span className="font-bold">💡 Pro Tip:</span> Keep training treats smaller than your pinky nail. You'll be giving lots of rewards!
                      </p>
                    </div>
                  </div>

                  {/* Tip 2 - Short Sessions */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-8 relative hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mt-2 mb-4 ml-8">
                      Keep Training Sessions Short and Sweet
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Dogs have limited attention spans, especially puppies. Short, frequent training sessions are much more effective.
                    </p>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-blue-800 mb-3">Optimal Training Schedule:</h4>
                      <div className="space-y-3">
                        {[
                          { age: "Puppies (8-16 weeks)", time: "5-10 minutes, 2-3 times daily" },
                          { age: "Young dogs (4mo-2yr)", time: "10-15 minutes, 2 times daily" },
                          { age: "Adult dogs", time: "15-20 minutes, 1-2 times daily" }
                        ].map((schedule, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <span className="text-2xl">⏰</span>
                            <div>
                              <p className="font-semibold text-gray-800">{schedule.age}</p>
                              <p className="text-sm text-gray-600">{schedule.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tip 3 - Basic Commands */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-8 relative hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 mt-2 mb-4 ml-8">
                      Master the Basic Commands First
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Before teaching fancy tricks, ensure your dog has mastered these essential life skills.
                    </p>

                    <h4 className="font-bold text-purple-800 mb-4 text-lg">The "Big 5" Essential Commands:</h4>
                    <div className="space-y-3">
                      {bigFiveCommands.map((cmd, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-purple-200">
                          <div className="flex items-start gap-3">
                            <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                              {cmd.num}
                            </div>
                            <div>
                              <p className="font-bold text-gray-800 mb-1">"{cmd.command}"</p>
                              <p className="text-sm text-gray-600">{cmd.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tip 4 - Consistency */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-8 relative hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-amber-800 mt-2 mb-4 ml-8">
                      Be Consistent with Commands and Rules
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Consistency is the key to successful dog training. Mixed messages confuse your dog and slow down learning.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                        <span className="text-xl">⚠️</span> Avoid These Consistency Mistakes
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Sometimes allowing behavior you usually forbid",
                          "Different family members using different commands",
                          "Inconsistent meal and potty schedules",
                          "Rewarding the same behavior differently"
                        ].map((mistake, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span className="text-red-700 text-sm">{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tip 5 - Different Environments */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-8 relative hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      5
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-800 mt-2 mb-4 ml-8">
                      Practice in Different Environments
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Dogs don't automatically generalize their training. Gradually practice in various locations to strengthen learning.
                    </p>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-cyan-800 mb-3">Progressive Environment Training:</h4>
                      <div className="space-y-2">
                        {[
                          "1. Start at home - Quiet, familiar environment",
                          "2. Move to backyard - Slightly more distracting",
                          "3. Try front yard - More stimulation",
                          "4. Practice on walks - High-distraction",
                          "5. Visit stores - Ultimate test"
                        ].map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 hover:bg-cyan-50 rounded-lg transition">
                            <span className="text-cyan-600">→</span>
                            <span className="text-gray-700 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Common Mistakes */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-red-600 pl-6">
                    Common Training Mistakes to Avoid
                  </h2>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6">
                    <ul className="space-y-3">
                      {[
                        "Punishment-based training: Creates fear and aggression",
                        "Training when frustrated: Dogs pick up on emotions",
                        "Expecting immediate results: Learning takes time",
                        "Inconsistent practice: Once a week won't work",
                        "Skipping socialization: Training includes new experiences"
                      ].map((mistake, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-red-600 text-xl mt-1">✗</span>
                          <span className="text-gray-700"><strong>{mistake.split(':')[0]}:</strong>{mistake.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Success Box */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mt-10">
                    <h4 className="text-green-800 font-bold text-xl mb-4 flex items-center gap-2">
                      <span className="text-2xl">🚀</span> Ready to Start?
                    </h4>
                    <p className="text-gray-700">
                      Pick one command from the "Big 5" and commit to practicing it for 5 minutes, twice a day. You'll be amazed at the progress you can make in just one week!
                    </p>
                  </div>

                  {/* FAQ */}
                  <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {[
                      { q: "How long does it take to train a dog?", a: "Basic commands can be learned in 4-6 weeks with consistent daily practice. Reliable behavior takes 3-6 months." },
                      { q: "What if my dog won't take treats?", a: "Try training before meal times or experiment with toys, praise, or playtime as rewards." },
                      { q: "Is it too late to train an older dog?", a: "Absolutely not! Adult dogs can learn at any age and often have better attention spans than puppies." }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                        <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                        <p className="text-gray-600">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-indigo-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-2">Training Help</h3>
                <p className="text-gray-600 text-sm">Need training advice?</p>
              </div>
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20need%20help%20with%20dog%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
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

export default DogTraining;
