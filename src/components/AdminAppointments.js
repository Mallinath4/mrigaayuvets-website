import React, { useState, useEffect } from 'react';

function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/appointments', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setAppointments(data.appointments);
      }
    } catch (err) {
      console.error('Error fetching appointments:', err);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading appointments...</p>;

  if (appointments.length === 0) return <p>No appointments found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div key={appt._id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {appt.name}</p>
            <p><strong>Email:</strong> {appt.email}</p>
            <p><strong>Phone:</strong> {appt.phone}</p>
            <p><strong>Pet Name:</strong> {appt.pet_name}</p>
            <p><strong>Pet Type:</strong> {appt.pet_type}</p>
            <p><strong>Service:</strong> {appt.service}</p>
            <p><strong>Preferred Date:</strong> {appt.preferred_date}</p>
            <p><strong>Preferred Time:</strong> {appt.preferred_time}</p>
            <p><strong>Message:</strong> {appt.message}</p>
            <p><em>Submitted on: {new Date(appt.createdAt).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAppointments;
