import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // grid or masonry

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch gallery images from API
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
      // Fallback to sample images if API fails
      setImages([
        {
          _id: '1',
          url: '/static/images/slide1.jpeg',
          title: 'Happy Golden Retriever',
          description: 'Post-vaccination checkup - healthy and happy!',
          category: 'dogs'
        },
        {
          _id: '2',
          url: '/static/images/slide2.jpeg',
          title: 'Adorable Persian Cat',
          description: 'Regular wellness examination',
          category: 'cats'
        },
        {
          _id: '3',
          url: '/static/images/slide3.jpeg',
          title: 'Playful Labrador',
          description: 'Recovery after minor surgery',
          category: 'dogs'
        },
        {
          _id: '4',
          url: '/static/images/slide4.jpeg',
          title: 'Cute Beagle Puppy',
          description: 'First vaccination completed successfully',
          category: 'dogs'
        },
        {
          _id: '5',
          url: '/static/images/slide5.jpeg',
          title: 'Beautiful Siamese Cat',
          description: 'Dental care treatment',
          category: 'cats'
        },
        {
          _id: '6',
          url: '/static/images/slide6.jpeg',
          title: 'Friendly German Shepherd',
          description: 'Annual health checkup',
          category: 'dogs'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filters = [
    { id: 'all', name: 'All Photos', icon: '📸', count: images.length },
    { id: 'dogs', name: 'Dogs', icon: '🐕', count: images.filter(img => img.category === 'dogs').length },
    { id: 'cats', name: 'Cats', icon: '🐱', count: images.filter(img => img.category === 'cats').length },
    { id: 'birds', name: 'Birds', icon: '🦜', count: images.filter(img => img.category === 'birds').length },
    { id: 'exotic', name: 'Exotic', icon: '🦎', count: images.filter(img => img.category === 'exotic').length }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img._id === selectedImage._id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img._id === selectedImage._id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const funFacts = [
    { icon: '🐕', title: 'Dogs Treated', value: '2000+', color: 'from-blue-500 to-cyan-500' },
    { icon: '🐱', title: 'Cats Cared For', value: '1500+', color: 'from-purple-500 to-pink-500' },
    { icon: '🦜', title: 'Birds Healed', value: '300+', color: 'from-green-500 to-emerald-500' },
    { icon: '🦎', title: 'Exotic Pets', value: '200+', color: 'from-orange-500 to-red-500' }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "MrigAayuvets Pet Gallery",
    "description": "Photo gallery of happy pets treated at MrigAayuvets Mumbai. Dogs, cats, birds, and exotic pets receiving expert veterinary care.",
    "url": "https://mrigaayuvets.in/gallery"
  };

  // Get current filter name for empty state
  const getCurrentFilterName = () => {
    const currentFilter = filters.find(f => f.id === filter);
    return currentFilter ? currentFilter.name : 'photos';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Pet Gallery Mumbai | Happy Patients at MrigAayuvets | Dogs, Cats Photos</title>
        <meta name="description" content="Browse our pet gallery showcasing happy and healthy dogs, cats, birds, and exotic pets treated at MrigAayuvets Mumbai. Professional veterinary care with love." />
        <meta name="keywords" content="pet gallery mumbai, dog photos, cat photos, veterinary photos, happy pets, pet care gallery, mrigaayuvets gallery" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Pet Gallery | MrigAayuvets Happy Patients" />
        <meta property="og:description" content="See our happy and healthy pet patients. Professional veterinary care in Mumbai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrigaayuvets.in/gallery" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://mrigaayuvets.in/gallery" />
      </Helmet>

      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-gray-900 font-semibold">Pet Gallery</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR HAPPY PATIENTS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            📸 Pet Gallery - Moments of Joy
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-2">
            Trusted veterinary care with compassion, health, and love for every furry friend
          </p>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Browse through heartwarming moments of healing, happiness, and the special bond we share with our patients
          </p>

          {/* Stats */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {funFacts.map((fact, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-2">{fact.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold mb-1">{fact.value}</div>
                <div className="text-xs sm:text-sm text-blue-100">{fact.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Filter Buttons */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-3 min-w-max">
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
                    {filterItem.count > 0 && (
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                        filter === filterItem.id ? 'bg-white/20' : 'bg-gray-200'
                      }`}>
                        {filterItem.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                }`}
                title="Grid View"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'masonry' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                }`}
                title="Masonry View"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {filter === 'all' ? 'ALL CATEGORIES' : filters.find(f => f.id === filter)?.name.toUpperCase()}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Precious Patients 🐾
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Browse through moments of care, healing, and happiness. Each photo tells a story of trust and recovery.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
            <p className="text-gray-600 font-semibold">Loading amazing pet photos...</p>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl sm:text-7xl mb-4">
              {filter === 'all' ? '📸' : filters.find(f => f.id === filter)?.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {filter === 'all' ? 'No images in the gallery yet' : `No ${getCurrentFilterName()} photos yet`}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-md mx-auto">
              {filter === 'all' 
                ? 'Check back soon for photos of our happy patients!'
                : 'Try selecting a different category or view all photos'}
            </p>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                View All Photos
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 text-sm sm:text-base">
                Showing <span className="font-bold text-gray-900">{filteredImages.length}</span> {filteredImages.length === 1 ? 'photo' : 'photos'}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                Click to view full size
              </div>
            </div>

            {/* Gallery Grid */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
              : 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6'
            }>
              {filteredImages.map((image, index) => (
                <div
                  key={image._id}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer ${
                    viewMode === 'masonry' ? 'break-inside-avoid' : ''
                  }`}
                  onClick={() => openLightbox(image)}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'aspect-square' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={image.url}
                      alt={image.title || `Pet Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Zoom Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="text-white">
                        <p className="text-sm sm:text-base font-semibold mb-1">{image.title || 'View Full Image'}</p>
                        {image.description && (
                          <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{image.description}</p>
                        )}
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className={`absolute top-3 right-3 bg-gradient-to-r ${
                      index % 4 === 0 ? 'from-blue-500 to-cyan-500' : 
                      index % 4 === 1 ? 'from-purple-500 to-pink-500' : 
                      index % 4 === 2 ? 'from-green-500 to-emerald-500' :
                      'from-orange-500 to-red-500'
                    } text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20`}>
                      {index + 1}
                    </div>

                    {/* Category Badge */}
                    {image.category && (
                      <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
                        {filters.find(f => f.id === image.category)?.icon} {image.category}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl sm:text-6xl mb-6">🐾</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Want Your Pet Featured Here?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book an appointment today and let us capture beautiful moments of your pet&apos;s journey to wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              View Our Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition z-50 shadow-2xl group"
            title="Close (ESC)"
          >
            <svg className="w-8 h-8 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Previous Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition z-50 shadow-2xl group"
              title="Previous (←)"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div className="max-w-6xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title || 'Gallery'}
              className="max-w-full max-h-[75vh] object-contain"
            />
            {(selectedImage.title || selectedImage.description) && (
              <div className="bg-white/10 backdrop-blur-md text-white px-4 sm:px-6 py-3 sm:py-4">
                {selectedImage.title && (
                  <p className="font-bold text-base sm:text-lg mb-1">{selectedImage.title}</p>
                )}
                {selectedImage.description && (
                  <p className="text-xs sm:text-sm text-gray-200">{selectedImage.description}</p>
                )}
                {selectedImage.category && (
                  <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                    {filters.find(f => f.id === selectedImage.category)?.icon} {selectedImage.category}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Next Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition z-50 shadow-2xl group"
              title="Next (→)"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold shadow-2xl">
            {filteredImages.findIndex(img => img._id === selectedImage._id) + 1} / {filteredImages.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <a
              href={selectedImage.url}
              download
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 group"
              title="Download Image"
            >
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span className="hidden sm:inline">Download</span>
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Gallery;
