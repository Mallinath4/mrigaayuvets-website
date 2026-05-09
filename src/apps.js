import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Appointment from './pages/Appointment';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

// Import all service detail pages
import Vaccination from './pages/services/Vaccination';
import GeneralTreatment from './pages/services/GeneralTreatment';
import Deworming from './pages/services/Deworming';
import PetGrooming from './pages/services/PetGrooming';
import NailTrimming from './pages/services/NailTrimming';
import DentalCare from './pages/services/DentalCare';
import XRayImaging from './pages/services/XRayImaging';
import EmergencyCare from './pages/services/EmergencyCare';
import NutritionGuidance from './pages/services/NutritionGuidance';

// Import all blog detail pages
import PuppyProofing from './pages/blogs/PuppyProofing';
import PuppyCare from './pages/blogs/PuppyCare';
import VetCheckups from './pages/blogs/VetCheckups';
import PetNutrition from './pages/blogs/PetNutrition';
import DogTraining from './pages/blogs/DogTraining';
import CatCare from './pages/blogs/CatCare';
import SeniorPetCare from './pages/blogs/SeniorPetCare';
import DogBreeds from './pages/blogs/DogBreeds';
import PetEmergencies from './pages/blogs/PetEmergencies';

// ✅ ADD ADMIN IMPORTS
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       
        
        
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          
          {/* Gallery Routes */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Blog Routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          
          {/* Individual Blog Detail Pages */}
          <Route path="/blogs/puppy-proofing" element={<PuppyProofing />} />
          <Route path="/blogs/puppy-care" element={<PuppyCare />} />
          <Route path="/blogs/vet-checkups" element={<VetCheckups />} />
          <Route path="/blogs/pet-nutrition" element={<PetNutrition />} />
          <Route path="/blogs/dog-training" element={<DogTraining />} />
          <Route path="/blogs/cat-care" element={<CatCare />} />
          <Route path="/blogs/senior-pet-care" element={<SeniorPetCare />} />
          <Route path="/blogs/dog-breeds" element={<DogBreeds />} />
          <Route path="/blogs/pet-emergencies" element={<PetEmergencies />} />
          
          {/* Service Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          
          {/* Individual Service Detail Pages */}
          <Route path="/services/vaccination" element={<Vaccination />} />
          <Route path="/services/general-treatment" element={<GeneralTreatment />} />
          <Route path="/services/deworming" element={<Deworming />} />
          <Route path="/services/pet-grooming" element={<PetGrooming />} />
          <Route path="/services/nail-trimming" element={<NailTrimming />} />
          <Route path="/services/dental-care" element={<DentalCare />} />
          <Route path="/services/xray-imaging" element={<XRayImaging />} />
          <Route path="/services/emergency-care" element={<EmergencyCare />} />
          <Route path="/services/nutrition-guidance" element={<NutritionGuidance />} />
          
          {/* ✅ ADMIN ROUTES - ADD THESE */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🐾</div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Looks like this page took a walk without a leash. Let's get you back home!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🏠 Go Back Home
          </a>
          <a 
            href="/services" 
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🩺 View Services
          </a>
          <a 
            href="/blogs" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            📚 Read Blogs
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
