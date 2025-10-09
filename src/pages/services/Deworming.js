import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Deworming() {
  const parasiteTypes = [
    {
      name: "Roundworms (Ascarids)",
      risk: "High Risk",
      riskColor: "bg-red-500",
      common: "Puppies and kittens",
      appearance: "Long, white, spaghetti-like worms",
      symptoms: "Pot-bellied appearance, vomiting, diarrhea, poor growth",
      humanRisk: "Yes - can cause serious health issues in children"
    },
    {
      name: "Hookworms",
      risk: "High Risk",
      riskColor: "bg-red-500",
      common: "Dogs in warm climates",
      appearance: "Small, thin worms (rarely visible in stool)",
      symptoms: "Anemia, pale gums, weakness, bloody diarrhea",
      humanRisk: "Yes - can cause skin problems"
    },
    {
      name: "Whipworms",
      risk: "Medium Risk",
      riskColor: "bg-orange-500",
      common: "Dogs (rare in cats)",
      appearance: "Whip-like shape with thick and thin ends",
      symptoms: "Chronic diarrhea, weight loss, dehydration",
      humanRisk: "Low"
    },
    {
      name: "Tapeworms",
      risk: "Low Risk",
      riskColor: "bg-green-500",
      common: "Dogs and cats that hunt or have fleas",
      appearance: "Flat, segmented worms; segments look like rice grains",
      symptoms: "Often none; may see segments around anus or in stool",
      humanRisk: "Low with proper hygiene"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Deworming
        </nav>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Complete Guide to Pet Deworming
            </h1>
            
            <img 
              src="/static/images/imgs3.jpg" 
              alt="Pet Deworming"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6">
              {/* Introduction */}
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Intestinal parasites are one of the most common health issues affecting pets worldwide. These unwelcome guests can cause serious health problems if left untreated, making regular deworming an essential part of your pet's healthcare routine.
              </p>

              {/* Stat Box */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 my-8 text-center">
                <div className="text-5xl font-extrabold text-blue-600 mb-3">85%</div>
                <p className="text-gray-700 text-lg">
                  of puppies are born with intestinal worms, making early deworming crucial for their health
                </p>
              </div>

              {/* What Are Parasites */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                What Are Intestinal Parasites?
              </h2>
              <p className="text-gray-700">
                Intestinal parasites are organisms that live inside your pet's digestive system, feeding off nutrients and potentially causing harm. They can be microscopic or visible to the naked eye.
              </p>

              {/* How Pets Get Infected */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How Pets Get Infected:</h3>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "From mother to baby", desc: "Through milk or in the womb" },
                  { title: "Environmental exposure", desc: "Contaminated soil, water, or surfaces" },
                  { title: "Prey consumption", desc: "Eating infected rodents, birds, or insects" },
                  { title: "Flea ingestion", desc: "Some worms are transmitted by fleas" },
                  { title: "Direct contact", desc: "With infected animals or their feces" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Common Types */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Common Types of Intestinal Parasites
              </h2>

              {parasiteTypes.map((parasite, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 rounded-2xl p-6 my-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-3 flex-wrap">
                    {parasite.name}
                    <span className={`${parasite.riskColor} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold`}>
                      {parasite.risk}
                    </span>
                  </h4>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li><strong>Most common in:</strong> {parasite.common}</li>
                    <li><strong>Appearance:</strong> {parasite.appearance}</li>
                    <li><strong>Symptoms:</strong> {parasite.symptoms}</li>
                    <li><strong>Human risk:</strong> {parasite.humanRisk}</li>
                  </ul>
                </div>
              ))}

              {/* Signs of Worms */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Signs Your Pet May Have Worms
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Visible Signs:</h3>
              <ul className="space-y-2 ml-6">
                {[
                  "Worms visible in vomit or stool",
                  "Small rice-like segments around the anus (tapeworms)",
                  "Scooting or dragging rear end on ground",
                  "Excessive licking of anal area"
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Health Symptoms:</h3>
              <ul className="space-y-2 ml-6">
                {[
                  "Diarrhea (may contain blood or mucus)",
                  "Vomiting",
                  "Weight loss despite good appetite",
                  "Pot-bellied appearance (especially in puppies)",
                  "Dull, dry coat",
                  "Weakness or lethargy",
                  "Pale gums (sign of anemia)"
                ].map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              {/* Emergency Warning */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-xl">
                  <span className="text-2xl">⚠️</span> Emergency Signs - Contact Vet Immediately
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Severe diarrhea with blood",
                    "Persistent vomiting",
                    "Extreme weakness or collapse",
                    "Very pale or white gums",
                    "Difficulty breathing",
                    "Severe dehydration"
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <a href="tel:+918208657969" className="text-blue-600 hover:underline font-medium">+91 82086 57969</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    <a href="mailto:Mrigaayuvets2025@gmail.com" className="text-blue-600 hover:underline font-medium">Mrigaayuvets2025@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Deworming Schedule */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Deworming Schedule
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">Recommended Deworming Schedule</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Age Group</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Frequency</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { age: "Puppies (2-12 weeks)", freq: "Every 2 weeks", note: "Start at 2 weeks of age" },
                        { age: "Kittens (2-12 weeks)", freq: "Every 2 weeks", note: "Start at 2 weeks of age" },
                        { age: "Young adults (6 months - 2 years)", freq: "Every 3 months", note: "More frequent if high risk" },
                        { age: "Adult pets (2+ years)", freq: "Every 6 months", note: "Based on lifestyle and fecal exams" },
                        { age: "Pregnant females", freq: "Before breeding & during pregnancy", note: "Prevents transmission to offspring" }
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

              {/* Prevention Strategies */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Prevention Strategies
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Environmental Management:</h3>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "Clean up waste immediately", desc: "Remove feces from yard daily" },
                  { title: "Maintain clean living areas", desc: "Wash bedding and toys regularly" },
                  { title: "Control moisture", desc: "Fix leaky areas where parasites thrive" },
                  { title: "Limit hunting", desc: "Supervise outdoor time to prevent prey consumption" },
                  { title: "Flea control", desc: "Prevent fleas to reduce tapeworm transmission" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Cost Table */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-amber-600 pl-6">
                Cost of Deworming
              </h2>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">Typical Deworming Costs in India</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Service</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Cost Range</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { service: "Fecal examination", cost: "₹200 - ₹500", note: "Essential for accurate diagnosis" },
                        { service: "Basic deworming tablet", cost: "₹50 - ₹200", note: "Depends on pet size and medication type" },
                        { service: "Broad spectrum dewormer", cost: "₹150 - ₹500", note: "More comprehensive protection" },
                        { service: "Veterinary consultation", cost: "₹300 - ₹800", note: "Includes examination and advice" }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}>
                          <td className="border border-gray-300 p-3 font-medium">{row.service}</td>
                          <td className="border border-gray-300 p-3 text-green-600 font-semibold">{row.cost}</td>
                          <td className="border border-gray-300 p-3">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "How often should I deworm my adult dog?",
                    a: "Generally every 6 months, but this may vary based on lifestyle and risk factors. Consult your veterinarian."
                  },
                  {
                    q: "Can I use the same dewormer for dogs and cats?",
                    a: "Never give dog medication to cats. Some ingredients safe for dogs are toxic to cats."
                  },
                  {
                    q: "Do indoor pets need deworming?",
                    a: "Yes! Indoor pets can still get parasites from various sources including insects, contaminated items, and brief outdoor exposure."
                  },
                  {
                    q: "What should I do if my pet vomits after deworming medication?",
                    a: "Contact your veterinarian. They may recommend giving the medication with food or switching to a different formulation."
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
                Regular deworming is a simple yet crucial aspect of responsible pet ownership. By understanding the types of parasites, maintaining a proper deworming schedule, and working closely with your veterinarian, you can keep your pet healthy and protect your family from zoonotic infections.
              </p>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
                  <span>📌</span> Key Takeaways
                </h4>
                <ul className="space-y-3">
                  {[
                    "Start deworming early for puppies and kittens",
                    "Repeat treatments as per veterinary guidance",
                    "Watch for signs of infestation and act quickly",
                    "Prevent re-infestation through hygiene and flea control",
                    "Deworming also protects human family members from zoonotic risks"
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
                <div className="text-5xl mb-3">📅</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Get professional veterinary care at your doorstep</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20Deworming%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                📅 Book Now via WhatsApp
              </a>
            </div>

            {/* Contact Info */}
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
                  📍 Mumbai, Maharashtra, India
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

export default Deworming;
