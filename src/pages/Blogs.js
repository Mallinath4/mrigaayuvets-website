import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData } from '../data/siteData';

function Blogs() {
  const blogs = Object.values(blogsData);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📚' },
    { id: 'health', name: 'Pet Health', icon: '⚕️' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗' },
    { id: 'training', name: 'Training', icon: '🎓' },
    { id: 'care', name: 'Pet Care', icon: '💚' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section - Beautiful Gradient */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            PET CARE INSIGHTS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg animate-fade-in">
            🐾 Pet Care Blog & Tips
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Expert veterinary advice, wellness guides, and tips for happy, healthy pets
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2.5 rounded-full hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max sm:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Featured Post */}
        {blogs.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ FEATURED ARTICLE
            </div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden h-64 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10"></div>
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-20">
                  NEW
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                  {blogs[0].title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                  {blogs[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {blogs[0].readTime || '5 min read'}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {blogs[0].date || 'Today'}
                  </div>
                </div>
                <Link
                  to={blogs[0].route}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 w-fit"
                >
                  Read Full Article
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Latest Articles</h2>
            <span className="text-gray-500 text-sm">{blogs.length} Posts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.slice(1).map((blog, index) => (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-500 to-cyan-500' : 
                    index % 3 === 1 ? 'from-purple-500 to-pink-500' : 
                    'from-indigo-500 to-blue-500'
                  } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20`}>
                    {blog.category || 'Pet Health'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {blog.readTime || '4 min read'}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      {Math.floor(Math.random() * 500) + 100} views
                    </div>
                  </div>

                  {/* Read More Link - UPDATED */}
                  <Link
                    to={blog.route}
                    className={`inline-flex items-center gap-2 font-semibold text-sm bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-600 to-cyan-600' : 
                      index % 3 === 1 ? 'from-purple-600 to-pink-600' : 
                      'from-indigo-600 to-blue-600'
                    } bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                  >
                    Read More
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-5xl mb-4">📬</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Stay Updated with Pet Care Tips!
            </h3>
            <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly pet health tips, expert advice, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blogs;
