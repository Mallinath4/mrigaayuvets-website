import React from 'react';

function MaintenancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <div className="text-5xl mb-6">🐾</div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Mrigaayuvets is under maintenance
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mb-8">
          We are updating the website to serve pet parents better.
          For appointments or urgent pet care, contact us directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+918208657969"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/918208657969?text=Hi%2C%20I%20need%20veterinary%20help%20for%20my%20pet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Thank you for your patience.
        </p>
      </div>
    </div>
  );
}

export default MaintenancePage;