import React, { useState, useEffect } from 'react';

function AdminGallery() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState({ title: '', description: '', file: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchImages(); }, []);

  const fetchImages = async () => {
    setLoading(true);
    const res = await fetch('/api/gallery');
    if (res.ok) {
      const data = await res.json();
      setImages(data.images);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setNewImage({ ...newImage, file: e.target.files[0] });
    } else {
      setNewImage({ ...newImage, [e.target.name]: e.target.value });
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newImage.title);
    formData.append('description', newImage.description);
    if (newImage.file) formData.append('image', newImage.file);

    const token = localStorage.getItem('adminToken');
    const res = await fetch('/api/admin/gallery', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData,
    });

    if (res.ok) {
      setNewImage({ title: '', description: '', file: null });
      fetchImages();
    } else {
      alert('Error adding image');
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('adminToken');
    await fetch(`/api/admin/gallery/${id}`, { 
      method: 'DELETE', 
      headers: { 'Authorization': `Bearer ${token}` } 
    });
    fetchImages();
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Upload Gallery Image</h2>

      <form onSubmit={handleAdd} className="space-y-5">
        <input
          name="title"
          placeholder="Title"
          value={newImage.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />
        <input
          name="description"
          placeholder="Description"
          value={newImage.description}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />
        <input
          type="file"
          name="file"
          onChange={handleChange}
          required
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition duration-300"
        >
          Add Image
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-10 mb-6 text-center">Gallery</h3>

      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading images...</div>
      ) : images.length === 0 ? (
        <div className="text-center py-8 text-gray-400">No images uploaded yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map(img => (
            <div key={img._id} className="border rounded shadow p-3 hover:shadow-lg transition">
              <img src={img.url} alt={img.title} className="w-full h-40 object-cover rounded mb-3" />
              <div className="font-semibold text-lg mb-1">{img.title}</div>
              <div className="text-gray-600 mb-3">{img.description}</div>
              <button
                onClick={() => handleDelete(img._id)}
                className="text-red-600 hover:text-red-800 underline font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminGallery;
