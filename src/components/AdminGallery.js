import React, { useState, useEffect } from 'react';

function AdminGallery() {
  const [images, setImages]   = useState([]);
  const [newImage, setNewImage] = useState({
    title: '', description: '', category: 'dogs', file: null
  });
  const [loading,    setLoading]    = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [preview,    setPreview]    = useState(null);

  useEffect(() => { fetchImages(); }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res  = await fetch('/api/gallery');
      const data = await res.json();
      setImages(data.images || []);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      const file = e.target.files[0];
      setNewImage({ ...newImage, file });
      // Show preview
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setNewImage({ ...newImage, [e.target.name]: e.target.value });
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!newImage.file) {
      alert('Please select an image file');
      return;
    }

    setSubmitting(true);
    const formData = new FormData();
    formData.append('title',       newImage.title);
    formData.append('description', newImage.description);
    formData.append('category',    newImage.category);  // ← ADDED
    formData.append('image',       newImage.file);      // ← must be 'image'

    const token = localStorage.getItem('adminToken');

    try {
      const res  = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        // ❌ DO NOT set Content-Type manually — browser does it for FormData
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Image uploaded successfully!');
        setNewImage({ title: '', description: '', category: 'dogs', file: null });
        setPreview(null);
        fetchImages();
      } else {
        // Shows real backend error
        alert('❌ Error: ' + (data.error || data.message || 'Upload failed'));
      }
    } catch (err) {
      alert('❌ Network error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchImages();
      } else {
        alert('Failed to delete image');
      }
    } catch (err) {
      alert('Delete error: ' + err.message);
    }
  };

  const categories = [
    { value: 'dogs',  label: '🐕 Dogs'  },
    { value: 'cats',  label: '🐱 Cats'  },
    { value: 'birds', label: '🦜 Birds' },
    { value: 'other', label: '🐾 Other Animals' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Upload Gallery Image</h2>

      <form onSubmit={handleAdd} className="space-y-4">

        {/* Title */}
        <input
          name="title"
          placeholder="Title (e.g. Happy Golden Retriever)"
          value={newImage.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />

        {/* Description */}
        <input
          name="description"
          placeholder="Description (e.g. Post-vaccination checkup)"
          value={newImage.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />

        {/* Category Dropdown ← NEW */}
        <select
          name="category"
          value={newImage.category}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-sm bg-white"
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>

        {/* File Input */}
        <input
          type="file"
          name="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleChange}
          required
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
        />

        {/* Image Preview */}
        {preview && (
          <div className="mt-2">
            <p className="text-xs text-gray-500 mb-1">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-full max-h-48 object-cover rounded-md border"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded-md font-semibold shadow transition duration-300 text-white ${
            submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {submitting ? '⏳ Uploading...' : 'Add Image'}
        </button>
      </form>

      {/* Gallery List */}
      <h3 className="text-xl font-semibold mt-10 mb-6 text-center">Gallery</h3>

      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading images...</div>
      ) : images.length === 0 ? (
        <div className="text-center py-8 text-gray-400">No images uploaded yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map(img => (
            <div key={img._id} className="border rounded shadow p-3 hover:shadow-lg transition">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <div className="font-semibold text-lg mb-1">{img.title}</div>
              {img.category && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
                  {categories.find(c => c.value === img.category)?.label || img.category}
                </span>
              )}
              <div className="text-gray-600 text-sm mb-3">{img.description}</div>
              <p className="text-xs text-gray-400 mb-2">
                {new Date(img.createdAt).toLocaleDateString('en-IN')}
              </p>
              <button
                onClick={() => handleDelete(img._id)}
                className="text-red-600 hover:text-red-800 underline font-medium text-sm"
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
