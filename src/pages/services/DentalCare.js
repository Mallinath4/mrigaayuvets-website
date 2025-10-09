import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function DentalCare() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Pet Dental Care Guide
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Complete Guide to Pet Dental Care
            </h1>
            
            <img 
              src="/static/images/imgs6.jpg" 
              alt="Pet Dental Care"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6">
              {/* Introduction */}
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Dental health is a frequently overlooked but vital part of pet care. Maintaining good oral hygiene prevents pain, tooth loss, and serious health issues involving the heart, liver, and kidneys.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <p className="font-bold text-red-700 text-lg">
                  About 80% of dogs and 70% of cats show signs of dental disease by age 3, emphasizing the need for preventive care.
                </p>
              </div>

              {/* Why Critical */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                Why Dental Care is Critical
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Health Impact</h3>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "Systemic disease prevention", desc: "Oral bacteria can spread to vital organs" },
                  { title: "Pain management", desc: "Often hidden chronic pain caused by dental issues" },
                  { title: "Nutritional health", desc: "Healthy teeth enable proper eating and digestion" },
                  { title: "Longevity and quality of life", desc: "Healthy teeth support a longer, happier life" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Common Dental Problems</h3>
              <ul className="space-y-2 ml-6">
                {[
                  "Plaque and tartar buildup",
                  "Gingivitis (gum inflammation)",
                  "Periodontitis (advanced gum disease)",
                  "Tooth loss",
                  "Oral infections affecting the body systemically"
                ].map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>

              {/* Dental Anatomy */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Understanding Pet Dental Anatomy
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🦷</span> Dog Dental Facts
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 42 adult teeth (12 incisors, 4 canines, 16 premolars, 10 molars)</li>
                    <li>• Puppy teeth replaced by 6 months of age</li>
                    <li>• Jaw designed for tearing and grinding</li>
                    <li>• Back molars and gum line are problem areas</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🐱</span> Cat Dental Facts
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 30 adult teeth (12 incisors, 4 canines, 10 premolars, 4 molars)</li>
                    <li>• Prone to tooth resorption (unique feline cavities)</li>
                    <li>• Jaw designed for catching and tearing prey</li>
                    <li>• Canine teeth and premolars often affected</li>
                  </ul>
                </div>
              </div>

              {/* Signs of Problems */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Signs of Dental Problems
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Visible Signs</h3>
              <ul className="space-y-2 ml-6">
                {[
                  "Yellow or brown tartar, especially on gums",
                  "Red or swollen gums, bleeding gums",
                  "Broken or loose teeth, oral masses or growths"
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Behavioral Changes</h3>
              <ul className="space-y-2 ml-6">
                {[
                  "Persistent bad breath",
                  "Difficulty eating, dropping food, slow eating",
                  "Pawing at face, excessive drooling with possible blood",
                  "Favoring a side while chewing",
                  "Reluctance to play or avoid mouth-related activities"
                ].map((behavior, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{behavior}</span>
                  </li>
                ))}
              </ul>

              {/* Emergency Signs */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-xl">
                  <span className="text-2xl">🚨</span> Emergency Dental Signs - Seek Veterinary Care Immediately
                </h4>
                <ul className="space-y-2">
                  {[
                    "Severe facial swelling",
                    "Inability to eat or drink",
                    "Excessive bleeding or broken jaw",
                    "Signs of severe pain or discharge from nose"
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-red-700">
                      <span>•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Care */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Daily Dental Care Routine
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tooth Brushing - The Gold Standard</h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 my-6">
                <h4 className="font-bold text-green-800 mb-3">Brushing Success Tips</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Never use human toothpaste—it is toxic to pets",
                    "Start young for better acceptance",
                    "Brush at least three times per week, daily is ideal",
                    "Focus on outer tooth surfaces where tartar forms",
                    "Keep sessions short and positive",
                    "Choose flavored pet toothpaste your pet likes"
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Cleaning Schedule */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-cyan-600 pl-6">
                Professional Dental Care
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">Professional Cleaning Schedule</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Pet Age / Risk</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Frequency</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Special Considerations</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { age: "Young pets (1-3 years)", freq: "Every 2-3 years", note: "Establish baseline, monitor development" },
                        { age: "Adult pets (4-7 years)", freq: "Every 1-2 years", note: "Prevention focus, early intervention" },
                        { age: "Senior pets (8+ years)", freq: "Every 6-12 months", note: "More frequent monitoring needed" },
                        { age: "High-risk breeds", freq: "Every 6-12 months", note: "Small and brachycephalic breeds" },
                        { age: "Pets with dental disease", freq: "As recommended", note: "Follow veterinary treatment plan" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.age}</td>
                          <td className="border border-gray-300 p-3">{row.freq}</td>
                          <td className="border border-gray-300 p-3">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Procedures & Costs */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                Common Dental Procedures
              </h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Procedure</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Purpose</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-sm">Cost Range (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { proc: "Basic cleaning", purpose: "Remove plaque and tartar", cost: "3,000 - 8,000" },
                        { proc: "Deep cleaning with extractions", purpose: "Advanced disease treatment", cost: "8,000 - 15,000" },
                        { proc: "Dental X-rays", purpose: "Diagnose hidden problems", cost: "1,500 - 3,000" },
                        { proc: "Single tooth extraction", purpose: "Remove diseased tooth", cost: "1,500 - 4,000" },
                        { proc: "Multiple extractions", purpose: "Advanced disease cases", cost: "5,000 - 12,000" },
                        { proc: "Oral surgery", purpose: "Complex dental problems", cost: "10,000 - 25,000" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.proc}</td>
                          <td className="border border-gray-300 p-3">{row.purpose}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Anesthesia Warning */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">⚠️</span> Warning: Anesthesia-Free Dental Cleaning
                </h4>
                <p className="text-red-700">
                  Anesthesia-free cleanings are not recommended by veterinary dental specialists because they cannot safely or effectively clean below the gum line and may provide only cosmetic improvement, giving false reassurance.
                </p>
              </div>

              {/* Breed-Specific */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Breed-Specific Dental Considerations
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Small Dog Breeds (Chihuahuas, Yorkies, Pomeranians)",
                    points: [
                      "Higher risk for rapid plaque and tartar buildup",
                      "Often retain baby teeth requiring surgical removal",
                      "Crowded teeth needing more frequent cleaning",
                      "Early dental care initiation is critical"
                    ]
                  },
                  {
                    title: "Brachycephalic Breeds (Bulldogs, Pugs, Persian Cats)",
                    points: [
                      "Crowded mouths with misaligned teeth",
                      "Special anesthesia care due to breathing issues",
                      "Challenging home dental care",
                      "Often require more frequent professional cleanings"
                    ]
                  },
                  {
                    title: "Large Dog Breeds",
                    points: [
                      "Lower risk due to better natural tooth cleaning",
                      "Can handle harder dental chews",
                      "Higher anesthetic doses needed for procedures",
                      "Risk of tooth fractures from strong chewing"
                    ]
                  }
                ].map((breed, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{breed.title}</h3>
                    <ul className="space-y-2 ml-6">
                      {breed.points.map((point, pidx) => (
                        <li key={pidx} className="flex items-start gap-3">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How do I know if my pet needs professional dental cleaning?",
                    a: "Visible tartar buildup, bad breath, red inflamed gums, or difficulty eating are key signs professional care is needed."
                  },
                  {
                    q: "Are dental chews as effective as brushing?",
                    a: "Dental chews help reduce plaque and tartar but do not replace the effectiveness of regular tooth brushing."
                  },
                  {
                    q: "How often should I have my pet's teeth professionally cleaned?",
                    a: "Cleaning frequency depends on age, breed, and risk but generally ranges from every 6 months to 2 years."
                  },
                  {
                    q: "Can I perform dental cleaning without anesthesia?",
                    a: "Anesthesia-free cleaning is not recommended as it cannot safely clean below the gum line where disease develops."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition">
                    <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                    <p className="text-gray-600">A: {faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Maintaining your pet's dental health is a vital part of responsible pet ownership. Consistent home care, regular professional cleanings, and early attention to problems help prevent pain, improve quality of life, and avoid costly treatments.
              </p>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
                  <span>📌</span> Key Takeaways
                </h4>
                <ul className="space-y-3">
                  {[
                    "Start dental care early and maintain consistent home routines",
                    "Daily tooth brushing is the most effective home care",
                    "Professional cleanings under anesthesia are essential for thorough care",
                    "Watch for signs of dental disease and act early",
                    "Prevention saves money and improves pet well-being",
                    "Consult your veterinarian regularly for best results"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back Button */}
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
            {/* Book Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border-2 border-blue-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🦷</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Professional dental care at your doorstep</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20Pet%20Dental%20Care%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                📅 Book Now via WhatsApp
              </a>
            </div>

            {/* Contact */}
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

            {/* Emergency */}
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

export default DentalCare;
