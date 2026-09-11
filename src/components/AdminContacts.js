import React, { useState, useEffect } from 'react';

function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admin/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading contact messages...</p>;

  if (contacts.length === 0) return <p>No contact messages found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      <div className="space-y-4">
        {contacts.map(contact => (
          <div key={contact._id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone || 'N/A'}</p>
            <p><strong>Subject:</strong> {contact.subject || 'N/A'}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            <p><em>Received on: {new Date(contact.createdAt).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminContacts;
