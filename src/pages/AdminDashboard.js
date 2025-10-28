import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminGallery from '../components/AdminGallery';
import AdminDoctors from '../components/AdminDoctors';
import AdminAppointments from '../components/AdminAppointments';
import AdminContacts from '../components/AdminContacts';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('gallery');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate('/admin/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const tabs = [
    { id: 'gallery', label: 'Gallery Management' },
    { id: 'doctors', label: 'Doctor Management' },
    { id: 'appointments', label: 'Appointment Management' },
    { id: 'contacts', label: 'Contact Messages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-6 text-sm font-medium text-gray-500 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-3 border-b-4 -mb-px transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-700'
                    : 'border-transparent hover:text-indigo-600'
                } focus:outline-none`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'gallery' && <AdminGallery />}
        {activeTab === 'doctors' && <AdminDoctors />}
        {activeTab === 'appointments' && <AdminAppointments />}
        {activeTab === 'contacts' && <AdminContacts />}
      </main>
    </div>
  );
}

export default AdminDashboard;
