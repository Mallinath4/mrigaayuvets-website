import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Vaccination() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/services" className="text-blue-600 hover:underline">← Back to Services</Link> / Pet Vaccination
        </nav>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left: Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Header */}
            <article className="mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                Complete Guide to Pet Vaccination: Protecting Your Furry Friend
              </h1>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-500 text-xs sm:text-sm mb-6">
                <span className="flex items-center gap-1">📅 Published: March 18, 2024</span>
                <span className="flex items-center gap-1">⏱️ 12 min read</span>
                <span className="flex items-center gap-1">🏷️ Vaccination, Prevention, Pet Health</span>
                <span className="flex items-center gap-1">👨‍⚕️ Dr. Veterinary Team</span>
              </div>

              <img 
                src="/static/images/imgs1.png" 
                alt="Pet vaccination" 
                className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6 shadow-lg"
              />
            </article>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Vaccination is one of the most important things you can do to protect your pet's health. Vaccines help prevent serious, often life-threatening diseases that can affect dogs, cats, and other pets. Understanding which vaccines your pet needs and when they need them is crucial for responsible pet ownership.
              </p>

              {/* How Vaccines Work */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                How Vaccines Work
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vaccines contain antigens that look like disease-causing microorganisms but don't actually cause disease. When injected, they stimulate your pet's immune system to recognize and fight specific diseases. If your pet is later exposed to the actual disease, their immune system will remember how to fight it off.
              </p>

              {/* Types of Immunity */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">Types of Immunity:</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Active immunity:</strong> Your pet's own immune system produces antibodies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Passive immunity:</strong> Antibodies passed from mother to babies through milk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Herd immunity:</strong> Protection of the entire population when most animals are vaccinated</span>
                </li>
              </ul>

              {/* Core vs Non-Core */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Core vs. Non-Core Vaccines
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Veterinarians classify vaccines into two main categories based on risk assessment and disease severity:
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">Core Vaccines (Essential for All Pets)</h3>
              <p className="text-gray-700">These vaccines protect against diseases that are widespread, highly contagious, or pose serious health risks:</p>

              {/* Dog Vaccines Card */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🐕</span> Dogs - Core Vaccines
                </h4>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-gray-800">Rabies:</strong> <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold ml-2">Fatal</span>
                    <p className="text-gray-600 text-sm mt-1">Required by law, protects against rabies virus</p>
                  </li>
                  <li>
                    <strong className="text-gray-800">DHPP (4-in-1):</strong> Protects against:
                    <ul className="ml-6 mt-2 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Distemper <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-2">Often Fatal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Hepatitis <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs ml-2">Severe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Parvovirus <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-2">Often Fatal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Parainfluenza <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ml-2">Respiratory</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Cat Vaccines Card */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🐱</span> Cats - Core Vaccines
                </h4>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-gray-800">Rabies:</strong> <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold ml-2">Fatal</span>
                    <p className="text-gray-600 text-sm mt-1">Required by law</p>
                  </li>
                  <li>
                    <strong className="text-gray-800">FVRCP (3-in-1):</strong> Protects against:
                    <ul className="ml-6 mt-2 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Feline Viral Rhinotracheitis <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ml-2">Respiratory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Calicivirus <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ml-2">Respiratory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Panleukopenia <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-2">Often Fatal</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Non-Core Vaccines */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">Non-Core Vaccines (Risk-Based)</h3>
              <p className="text-gray-700 mb-4">These vaccines are recommended based on your pet's lifestyle, location, and exposure risk:</p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-cyan-800 mb-4">📋 Non-Core Vaccines by Risk Factors</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-800">Lifestyle/Risk</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-800">Dogs</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-800">Cats</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">Boarding/Daycare</td>
                        <td className="border border-gray-300 p-3">Kennel Cough, Canine Influenza</td>
                        <td className="border border-gray-300 p-3">Feline Leukemia (FeLV)</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">Outdoor/Hunting</td>
                        <td className="border border-gray-300 p-3">Lyme Disease, Leptospirosis</td>
                        <td className="border border-gray-300 p-3">FeLV, Feline Immunodeficiency Virus</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">High Tick Area</td>
                        <td className="border border-gray-300 p-3">Lyme Disease</td>
                        <td className="border border-gray-300 p-3">Not typically needed</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">Multi-cat Household</td>
                        <td className="border border-gray-300 p-3">Not applicable</td>
                        <td className="border border-gray-300 p-3">FeLV, FIV</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Vaccination Schedule */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Vaccination Schedule
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Proper timing is crucial for vaccine effectiveness. Puppies and kittens need a series of vaccines because maternal antibodies can interfere with vaccination.
              </p>

              {/* Puppy Schedule */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">Puppy Vaccination Schedule</h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span>🐕</span> Recommended Puppy Vaccine Timeline
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Age</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Vaccines</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">6-8 weeks</td>
                        <td className="border border-gray-300 p-3">First DHPP</td>
                        <td className="border border-gray-300 p-3">Start of vaccine series</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">10-12 weeks</td>
                        <td className="border border-gray-300 p-3">Second DHPP</td>
                        <td className="border border-gray-300 p-3">Booster for better immunity</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">14-16 weeks</td>
                        <td className="border border-gray-300 p-3">Third DHPP + Rabies</td>
                        <td className="border border-gray-300 p-3">Final puppy series</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">12-16 months</td>
                        <td className="border border-gray-300 p-3">DHPP + Rabies boosters</td>
                        <td className="border border-gray-300 p-3">First adult boosters</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kitten Schedule */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3">Kitten Vaccination Schedule</h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <span>🐱</span> Recommended Kitten Vaccine Timeline
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Age</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Vaccines</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">6-8 weeks</td>
                        <td className="border border-gray-300 p-3">First FVRCP</td>
                        <td className="border border-gray-300 p-3">Start of vaccine series</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">10-12 weeks</td>
                        <td className="border border-gray-300 p-3">Second FVRCP</td>
                        <td className="border border-gray-300 p-3">Booster + non-core if needed</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">14-16 weeks</td>
                        <td className="border border-gray-300 p-3">Third FVRCP + Rabies</td>
                        <td className="border border-gray-300 p-3">Final kitten series</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3">12-16 months</td>
                        <td className="border border-gray-300 p-3">FVRCP + Rabies boosters</td>
                        <td className="border border-gray-300 p-3">First adult boosters</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Adult Pet Vaccination */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-green-600 pl-6">
                Adult Pet Vaccination
              </h2>
              <p className="text-gray-700 mb-4">After completing the initial series, adult pets need regular boosters to maintain immunity:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Rabies:</strong> Every 1-3 years (depending on vaccine type and local laws)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>DHPP/FVRCP:</strong> Every 1-3 years (based on vaccine type and risk assessment)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Non-core vaccines:</strong> Annually or as recommended by your veterinarian</span>
                </li>
              </ul>

              {/* Tip Box */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Vaccination Reminder
                </h4>
                <p className="text-gray-700">
                  Keep a vaccination record for your pet. Many clinics send reminders, but it's good to track dates yourself. Some boarding facilities and groomers require up-to-date vaccination records.
                </p>
              </div>

              {/* Common Vaccine Reactions */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-blue-600 pl-6">
                Common Vaccine Reactions
              </h2>
              <p className="text-gray-700 mb-4">Most pets tolerate vaccines well, but mild reactions can occur. Knowing what to expect helps you monitor your pet properly:</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Normal Reactions (First 24-48 hours):</h3>
              <ul className="space-y-2 ml-6">
                {[
                  'Mild lethargy or reduced activity',
                  'Slight fever',
                  'Reduced appetite',
                  'Soreness at injection site',
                  'Small lump at injection site (may last several weeks)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Warning Box */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Serious Reactions - Contact Vet Immediately
                </h4>
                <ul className="space-y-2">
                  {[
                    'Vomiting or diarrhea',
                    'Difficulty breathing',
                    'Swelling of face or muzzle',
                    'Hives or skin reactions',
                    'Collapse or extreme lethargy',
                    'Seizures'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-semibold text-red-800">
                  These symptoms may indicate an allergic reaction and require immediate veterinary attention.
                </p>
              </div>

              {/* Special Considerations */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-indigo-600 pl-6">
                Special Considerations
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pregnant Animals</h3>
                  <p className="text-gray-700">
                    Pregnant pets should not receive live vaccines. However, vaccinating before breeding can help pass antibodies to offspring through milk.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sick Animals</h3>
                  <p className="text-gray-700">
                    Vaccines should be delayed if your pet is ill. A healthy immune system is necessary for proper vaccine response.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Senior Pets</h3>
                  <p className="text-gray-700">
                    Older pets may have different vaccination needs. Some may require more frequent boosters, while others may need modified schedules based on health status.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Indoor vs. Outdoor Pets</h3>
                  <p className="text-gray-700">
                    Even indoor pets need core vaccines. However, outdoor pets may need additional protection based on exposure risks.
                  </p>
                </div>
              </div>

              {/* Indoor Cat Myth */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-cyan-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏠</span> Indoor Cat Myth
                </h4>
                <p className="text-gray-700">
                  Many people think indoor cats don't need vaccines, but this isn't true! Rabies vaccination is required by law in most areas, and other diseases can enter homes on shoes, clothing, or through open doors.
                </p>
              </div>

              {/* Cost Comparison */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-purple-600 pl-6">
                Vaccination Costs and Value
              </h2>
              <p className="text-gray-700 mb-6">While vaccines require an upfront investment, they're far less expensive than treating the diseases they prevent:</p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">💰 Cost Comparison: Prevention vs. Treatment</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Disease</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Vaccine Cost</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Treatment Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">Parvovirus</td>
                        <td className="border border-gray-300 p-3 text-green-600 font-semibold">₹200 (part of DHPP)</td>
                        <td className="border border-gray-300 p-3 text-red-600 font-semibold">₹15,000 - ₹50,000</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">Rabies</td>
                        <td className="border border-gray-300 p-3 text-green-600 font-semibold">₹300 - ₹500</td>
                        <td className="border border-gray-300 p-3 text-red-600 font-semibold">No cure - Fatal</td>
                      </tr>
                      <tr className="hover:bg-white/30">
                        <td className="border border-gray-300 p-3 font-medium">Distemper</td>
                        <td className="border border-gray-300 p-3 text-green-600 font-semibold">₹200 (part of DHPP)</td>
                        <td className="border border-gray-300 p-3 text-red-600 font-semibold">₹10,000 - ₹30,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10 mb-6 border-l-4 border-teal-600 pl-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Can my puppy go outside before completing vaccines?",
                    a: "Limited exposure is okay, but avoid areas with high dog traffic until 2 weeks after the final vaccine."
                  },
                  {
                    q: "What if my pet misses a booster appointment?",
                    a: "Contact your vet immediately. Depending on how late, you may need to restart the series."
                  },
                  {
                    q: "Are there alternatives to traditional vaccines?",
                    a: "Some newer vaccines offer longer protection, but there are no effective alternatives to vaccination for disease prevention."
                  },
                  {
                    q: "Can I vaccinate my pet myself?",
                    a: "While vaccines are available for purchase, professional administration ensures proper handling, storage, and medical oversight."
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
                Vaccination is a simple, safe, and effective way to protect your pet from serious diseases. Working with your veterinarian to develop an appropriate vaccination schedule based on your pet's age, health, and lifestyle ensures they receive optimal protection throughout their life.
              </p>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-10">
                <h4 className="font-bold text-green-800 mb-4 text-xl flex items-center gap-2">
                  <span>📌</span> Key Takeaways
                </h4>
                <ul className="space-y-3">
                  {[
                    'Start vaccines early and follow the recommended schedule',
                    'Keep vaccination records up to date',
                    'Discuss risk factors with your veterinarian',
                    'Monitor for reactions and seek help if needed',
                    'Remember that prevention is always better than treatment'
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

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Book Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl mb-8 border-2 border-blue-200 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">📅</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Book This Service</h3>
                <p className="text-gray-600 text-sm">Get professional veterinary care at your doorstep</p>
              </div>
              
              <a 
                href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20Pet%20Vaccination%20service.%20Please%20let%20me%20know%20the%20available%20time."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                📅 Book Now via WhatsApp
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+918208657969" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <span className="text-2xl">📞</span>
                  <span className="font-medium">+91 82086 57969</span>
                </a>
                <a href="mailto:Mrigaayuvets2025@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <span className="text-2xl">📧</span>
                  <span className="font-medium text-sm">Mrigaayuvets2025@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="text-2xl">📍</span>
                  <span className="font-medium">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🚨</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Emergency Services</h3>
                <p className="text-gray-600 text-sm mb-4">For urgent veterinary care, contact us immediately</p>
              </div>
              <a 
                href="tel:+918208657969" 
                className="block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full text-center transition shadow-lg"
              >
                🚨 Call Emergency
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Vaccination;
