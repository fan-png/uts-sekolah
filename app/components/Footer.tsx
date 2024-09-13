// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2b2d42] text-white py-10 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        <div className="space-y-6">
        <img src="/images/logo.png" alt="team" className="h-8 w-auto" />
          <p className="text-gray-400">Collaboration platform for modern team</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-blue-300">Company</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-blue-300">Features</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Screen Sharing</li>
            <li>iOS & Android Apps</li>
            <li>File Sharing</li>
            <li>User Management</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-blue-300">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li>info@teamapp.com</li>
            <li>1-800-200-300</li>
            <li>1010 Sunset Blvd. Palo Alto, California</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-blue-300">Stay up to date</h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 bg-gray-700 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-gray-600 text-white rounded-r-lg hover:bg-gray-500"
            >
              →
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8">© Copyright Team Inc.</p>
    </footer>
  );
};

export default Footer;
