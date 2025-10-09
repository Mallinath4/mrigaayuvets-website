import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/siteData';

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the service you're looking for doesn't exist.</p>
          <Link to="/services" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="text-white hover:text-gray-200 mb-4 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">{service.title}</h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {service.image && (
            <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
          )}

          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              {service.details && (
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.details}
                </p>
              )}

              {service.benefits && (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">✨ Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Book This Service Today</h3>
              <p className="text-gray-600 mb-4">
                Ready to provide the best care for your pet? Book an appointment now!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition inline-block">
                  📅 Book Appointment
                </Link>
                <a
                  href="https://wa.me/918208657969?text=Hello%20Doctor,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition inline-block"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default ServiceDetail;
