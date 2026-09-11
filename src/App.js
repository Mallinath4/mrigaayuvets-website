import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Vaccination from './pages/services/Vaccination';
import GeneralTreatment from './pages/services/GeneralTreatment';
import Deworming from './pages/services/Deworming';
import PetGrooming from './pages/services/PetGrooming';
import NailTrimming from './pages/services/NailTrimming';
import DentalCare from './pages/services/DentalCare';
import XRayImaging from './pages/services/XRayImaging';
import EmergencyCare from './pages/services/EmergencyCare';
import NutritionGuidance from './pages/services/NutritionGuidance';
import PuppyProofing from './pages/blogs/PuppyProofing';
import PuppyCare from './pages/blogs/PuppyCare';
import VetCheckups from './pages/blogs/VetCheckups';
import PetNutrition from './pages/blogs/PetNutrition';
import DogTraining from './pages/blogs/DogTraining';
import CatCare from './pages/blogs/CatCare';
import SeniorPetCare from './pages/blogs/SeniorPetCare';
import DogBreeds from './pages/blogs/DogBreeds';
import PetEmergencies from './pages/blogs/PetEmergencies';

function PolicyPage({ title, children }) {
  return (
    <div className="site-page"><div className="page-shell"><section className="page-hero"><div className="container"><span className="eyebrow">MrigAayuvets</span><h1>{title}</h1><p>Clear, simple information for pet parents.</p></div></section><section className="section"><div className="container prose-card">{children}</div></section></div></div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/vaccination" element={<Vaccination />} />
        <Route path="/services/general-treatment" element={<GeneralTreatment />} />
        <Route path="/services/deworming" element={<Deworming />} />
        <Route path="/services/pet-grooming" element={<PetGrooming />} />
        <Route path="/services/nail-trimming" element={<NailTrimming />} />
        <Route path="/services/dental-care" element={<DentalCare />} />
        <Route path="/services/xray-imaging" element={<XRayImaging />} />
        <Route path="/services/emergency-care" element={<EmergencyCare />} />
        <Route path="/services/nutrition-guidance" element={<NutritionGuidance />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/puppy-proofing" element={<PuppyProofing />} />
        <Route path="/blogs/puppy-care" element={<PuppyCare />} />
        <Route path="/blogs/vet-checkups" element={<VetCheckups />} />
        <Route path="/blogs/pet-nutrition" element={<PetNutrition />} />
        <Route path="/blogs/dog-training" element={<DogTraining />} />
        <Route path="/blogs/cat-care" element={<CatCare />} />
        <Route path="/blogs/senior-pet-care" element={<SeniorPetCare />} />
        <Route path="/blogs/dog-breeds" element={<DogBreeds />} />
        <Route path="/blogs/pet-emergencies" element={<PetEmergencies />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/privacy" element={<PolicyPage title="Privacy Policy"><p>We use information submitted through this website only to respond to enquiries, appointments and service requests. We do not sell personal information.</p><h2>Contact information</h2><p>For questions about your information, contact the MrigAayuvets team through the Contact page.</p></PolicyPage>} />
        <Route path="/terms" element={<PolicyPage title="Terms of Service"><p>Website content is provided for general information and does not replace professional veterinary assessment. Appointment availability, pricing and treatment plans may vary by case.</p></PolicyPage>} />
        <Route path="/refund" element={<PolicyPage title="Refund Policy"><p>Appointment and service refunds are handled case-by-case. Please contact our team as soon as possible if you need to cancel or change a booking.</p></PolicyPage>} />
        <Route path="/sitemap" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
