import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch gallery images from API
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch('/api/gallery');
      if (response.ok) {
        const data = await response.json();
        setImages(data.images);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
      // Fallback to empty array if API fails
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const filters = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'dogs', name: 'Dogs', icon: '🐕' },
    { id: 'cats', name: 'Cats', icon: '🐱' },
    { id: 'birds', name: 'Birds', icon: '🦜' },
    { id: 'exotic', name: 'Exotic', icon: '🦎' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img._id === selectedImage._id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img._id === selectedImage._id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section - Beautiful Blue/Purple Gradient */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            OUR HAPPY PATIENTS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg animate-fade-in">
            📸 Our Pet Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Trusted veterinary care with compassion, health, and love for every furry friend
          </p>

          {/* Stats */}
          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">{images.length}+</div>
              <div className="text-xs sm:text-sm mt-1">Happy Pets</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">500+</div>
              <div className="text-xs sm:text-sm mt-1">Treatments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition">
              <div className="text-3xl sm:text-4xl font-bold">5★</div>
              <div className="text-xs sm:text-sm mt-1">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max sm:justify-center">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  filter === filterItem.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{filterItem.icon}</span>
                {filterItem.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Our Precious Patients 🐾
          </h2>
          <p className="text-gray-600">
            Browse through moments of care, healing, and happiness
          </p>
        </div>

        {/* ✅ Loading State */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-gray-600 text-lg">No images in the gallery yet.</p>
            <p className="text-gray-500 text-sm mt-2">Check back soon for photos of our happy patients!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div
                  key={image._id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={image.url}
                      alt={image.title || `Pet Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="text-white">
                        <p className="text-sm font-semibold">{image.title || 'View Full Image'}</p>
                        {image.description && (
                          <p className="text-xs text-gray-200 mt-1">{image.description}</p>
                        )}
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className={`absolute top-3 right-3 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-500 to-cyan-500' : 
                      index % 3 === 1 ? 'from-purple-500 to-pink-500' : 
                      'from-indigo-500 to-blue-500'
                    } text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button - Hidden for now, can be activated later */}
            {/* <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
                Load More Photos
              </button>
            </div> */}
          </>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl transition z-50 shadow-2xl"
            title="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-4xl sm:text-5xl transition z-50 shadow-2xl"
            title="Previous"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Image Container */}
          <div className="max-w-6xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title || 'Gallery'}
              className="max-w-full max-h-[85vh] object-contain"
            />
            {selectedImage.title && (
              <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 text-center">
                <p className="font-semibold">{selectedImage.title}</p>
                {selectedImage.description && (
                  <p className="text-sm text-gray-200">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-4xl sm:text-5xl transition z-50 shadow-2xl"
            title="Next"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold shadow-2xl">
            {images.findIndex(img => img._id === selectedImage._id) + 1} / {images.length}
          </div>

          {/* Download Button */}
          <a
            href={selectedImage.url}
            download
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            title="Download"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Gallery;
