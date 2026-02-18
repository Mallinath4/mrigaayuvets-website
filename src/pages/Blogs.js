import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData } from '../data/siteData';

function Blogs() {
  const blogs = Object.values(blogsData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter blogs based on category and search term
  useEffect(() => {
    let filtered = blogs;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchTerm, blogs]);

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📚' },
    { id: 'health', name: 'Pet Health', icon: '⚕️' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗' },
    { id: 'training', name: 'Training', icon: '🎓' },
    { id: 'care', name: 'Pet Care', icon: '💚' }
  ];

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return blogs.length;
    return blogs.filter(blog => blog.category === categoryId).length;
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MrigAayuvets Pet Care Blog",
    "description": "Expert veterinary advice, pet health tips, nutrition guides, and training tips for dogs and cats in Mumbai.",
    "url": "https://mrigaayuvets.in/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "MrigAayuvets",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mrigaayuvets.in/static/images/logo.png"
      }
    },
    "blogPost": filteredBlogs.slice(0, 10).map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "image": blog.image,
      "datePublished": blog.date,
      "author": {
        "@type": "Person",
        "name": "Dr. MrigAayuvets Team"
      }
    }))
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Pet Care Blog & Tips Mumbai | Expert Veterinary Advice | MrigAayuvets</title>
        <meta name="description" content="Expert pet care blog with veterinary advice, health tips, nutrition guides, and training tips for dogs and cats. Get professional pet care insights from Mumbai\'s trusted vets." />
        <meta name="keywords" content="pet care blog, pet health tips, dog care tips, cat care tips, pet nutrition guide, pet training tips, veterinary advice mumbai, pet wellness blog, dog health blog, cat health blog" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Pet Care Blog & Tips | MrigAayuvets Mumbai" />
        <meta property="og:description" content="Expert veterinary advice and pet care tips from Mumbai\'s trusted veterinarians. Health, nutrition, training guides for your pets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mrigaayuvets.in/blogs" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Care Blog & Tips | MrigAayuvets" />
        <meta name="twitter:description" content="Expert veterinary advice and pet care tips for healthy, happy pets." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://mrigaayuvets.in/blogs" />
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
            <span className="text-gray-900 font-semibold">Pet Care Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            EXPERT PET CARE INSIGHTS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            🐾 Pet Care Blog & Expert Tips
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Veterinary advice, wellness guides, nutrition tips, and training insights for happy, healthy pets
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles about pet care, health, nutrition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2.5 rounded-full hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-2xl font-bold">{blogs.length}+</div>
              <div className="text-xs text-blue-100">Articles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-2xl font-bold">Expert</div>
              <div className="text-xs text-blue-100">Veterinary Advice</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-xs text-blue-100">New Content</div>
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
                <span className={`ml-2 ${
                  selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  ({getCategoryCount(category.id)})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Featured Post */}
        {filteredBlogs.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              ⭐ FEATURED ARTICLE
            </div>
            <article className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:shadow-blue-500/20 transition-all duration-500">
              <div className="relative overflow-hidden h-64 lg:h-auto group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                <img
                  src={filteredBlogs[0].image}
                  alt={`${filteredBlogs[0].title} - Pet Care Blog | MrigAayuvets`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-20 flex items-center gap-1">
                  <span className="animate-pulse">🔥</span> TRENDING
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
                  {filteredBlogs[0].category || 'Pet Care'}
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors leading-tight">
                  {filteredBlogs[0].title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                  {filteredBlogs[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="font-semibold">{filteredBlogs[0].readTime || '5 min read'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="font-semibold">{filteredBlogs[0].date || 'Jan 24, 2026'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span className="font-semibold">{Math.floor(Math.random() * 1000) + 500} views</span>
                  </div>
                </div>
                <Link
                  to={filteredBlogs[0].route}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 w-fit group"
                >
                  Read Full Article
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        )}

        {/* Blog Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Post' : 'Posts'}
            </span>
          </div>

          {filteredBlogs.length > 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBlogs.slice(1).map((blog, index) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={blog.image}
                      alt={`${blog.title} - Pet Care Blog | MrigAayuvets`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${
                      blog.category === 'health' ? 'from-blue-500 to-cyan-500' : 
                      blog.category === 'nutrition' ? 'from-green-500 to-emerald-500' :
                      blog.category === 'training' ? 'from-purple-500 to-pink-500' : 
                      'from-indigo-500 to-blue-500'
                    } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20 capitalize`}>
                      {blog.category || 'Pet Care'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="font-semibold">{blog.readTime || '4 min read'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span className="font-semibold">{Math.floor(Math.random() * 500) + 100}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                      to={blog.route}
                      className={`inline-flex items-center gap-2 font-bold text-sm bg-gradient-to-r ${
                        blog.category === 'health' ? 'from-blue-600 to-cyan-600' : 
                        blog.category === 'nutrition' ? 'from-green-600 to-emerald-600' :
                        blog.category === 'training' ? 'from-purple-600 to-pink-600' : 
                        'from-indigo-600 to-blue-600'
                      } bg-clip-text text-transparent hover:gap-3 transition-all duration-300 group/link`}
                    >
                      Read More
                      <svg className="w-4 h-4 text-blue-600 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : filteredBlogs.length === 1 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Only Featured Article Available</h3>
              <p className="text-gray-600">Check other categories for more articles</p>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `No articles match "${searchTerm}". Try different keywords.`
                  : `No articles in this category yet. Check back soon!`}
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                View All Posts
              </button>
            </div>
          )}
        </div>

        {/* Popular Topics */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              POPULAR TOPICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Pet Care Topics
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our most popular pet care categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categories.filter(cat => cat.id !== 'all').map((category, idx) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`group bg-gradient-to-br ${
                  idx % 4 === 0 ? 'from-blue-500 to-cyan-500' : 
                  idx % 4 === 1 ? 'from-green-500 to-emerald-500' :
                  idx % 4 === 2 ? 'from-purple-500 to-pink-500' : 
                  'from-indigo-500 to-blue-500'
                } rounded-2xl p-6 sm:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
              >
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-white/90 mb-3">
                  {getCategoryCount(category.id)} Articles
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-semibold">
                  Explore
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
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
            <div className="text-5xl sm:text-6xl mb-4">📬</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Never Miss a Pet Care Tip!
            </h3>
            <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for weekly pet health tips, expert veterinary advice, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-xl"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 group">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Subscribe
              </button>
            </div>
            <p className="text-xs text-blue-100 mt-4">
              🔒 We respect your privacy. Unsubscribe anytime. No spam, ever!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blogs;
