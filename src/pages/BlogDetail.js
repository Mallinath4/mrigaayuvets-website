import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData } from '../data/siteData';

function BlogDetail() {
  const { blogId } = useParams();
  const blog = blogsData[blogId];

  if (!blog) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blogs" className="text-white hover:text-gray-200 mb-4 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">{blog.title}</h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {blog.image && (
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
          )}

          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {blog.content && blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {blog.tips && (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">💡 Quick Tips:</h3>
                  <ul className="space-y-2">
                    {blog.tips.map((tip, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Need Professional Advice?</h3>
              <p className="text-gray-600 mb-4">
                Our veterinary experts are here to help you with any questions about your pet's health.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition inline-block">
                  Contact Us
                </Link>
                <Link to="/appointment" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition inline-block">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogDetail;
