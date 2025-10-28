import React, { useState, useEffect } from 'react';

function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    qualification: '',
    specialization: '',
    experience: '',
    phone: '',
    email: '',
    bio: '',
    image: null // store the file object
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/doctors', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setDoctors(data.doctors);
      }
    } catch (error) {
      console.error('Failed to fetch doctors:', error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setNewDoctor({ ...newDoctor, image: e.target.files[0] });
    } else {
      setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
    }
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', newDoctor.name);
    formData.append('qualification', newDoctor.qualification);
    formData.append('specialization', newDoctor.specialization);
    formData.append('experience', newDoctor.experience);
    formData.append('phone', newDoctor.phone);
    formData.append('email', newDoctor.email);
    formData.append('bio', newDoctor.bio);
    if (newDoctor.image) {
      formData.append('image', newDoctor.image);
    }

    const token = localStorage.getItem('adminToken');
    const response = await fetch('/api/admin/doctors', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      setDoctors([...doctors, data.doctor]);
      setNewDoctor({
        name: '',
        qualification: '',
        specialization: '',
        experience: '',
        phone: '',
        email: '',
        bio: '',
        image: null,
      });
      alert('Doctor added!');
    } else {
      alert('Error adding doctor');
    }
    setIsSubmitting(false);
  };

  const handleDeleteDoctor = async (id) => {
    if (!window.confirm('Delete this doctor?')) return;
    const token = localStorage.getItem('adminToken');
    await fetch(`/api/admin/doctors/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    setDoctors(doctors.filter(doc => doc._id !== id));
  };

  const handleToggleStatus = async (id) => {
    const token = localStorage.getItem('adminToken');
    const res = await fetch(`/api/admin/doctors/${id}/toggle-status`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      setDoctors(doctors.map(doc => doc._id === id ? { ...doc, status: data.status } : doc));
    }
  };

  if (loading) return <div className="text-center py-10">Loading doctors...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Doctor</h2>
      
      <form onSubmit={handleAddDoctor} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="name"
            placeholder="Name"
            value={newDoctor.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="qualification"
            placeholder="Qualification"
            value={newDoctor.qualification}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="specialization"
            placeholder="Specialization"
            value={newDoctor.specialization}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="experience"
            type="number"
            placeholder="Experience"
            min="1"
            value={newDoctor.experience}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={newDoctor.phone}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={newDoctor.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <textarea
          name="bio"
          placeholder="Bio"
          value={newDoctor.bio}
          onChange={handleChange}
          rows={4}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        
        <div>
          <label className="block mb-2 font-medium">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          {isSubmitting ? 'Adding...' : 'Add Doctor'}
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Doctors List</h2>

      <div className="space-y-4">
        {doctors.map(doc => (
          <div
            key={doc._id}
            className="flex flex-col md:flex-row items-center gap-6 p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-purple-600"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{doc.name}</h3>
              <p className="text-gray-600">{doc.qualification} | {doc.specialization}</p>
              <p className="text-gray-500">{doc.experience} years experience | {doc.phone}</p>
              <p className="mt-1 font-medium">Status: <span className={doc.status === 'active' ? 'text-green-600' : 'text-red-600'}>{doc.status}</span></p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleToggleStatus(doc._id)}
                  className="text-sm underline text-indigo-600 hover:text-indigo-800"
                >
                  {doc.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleDeleteDoctor(doc._id)}
                  className="text-sm underline text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDoctors;
