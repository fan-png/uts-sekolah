'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call handleScroll once to set initial state
    handleScroll();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-blue-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-30 flex items-center justify-between p-6 transition-colors duration-300 ${
          isScrolled ? 'bg-cyan-300' : 'bg-transparent'
        }`}
      >
        <div className="text-center">
          <img
            src="/images/logo.png"
            alt="Team Image"
            className="w-32 h-auto"
          />
        </div>

        <div className="md:flex items-center space-x-4 md:space-x-6 hidden">
          {/* Navigation links hidden on mobile */}
          <a href="#" className="text-white">
            Product
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Support
          </a>
          <a href="#" className="text-white">
            Log In
          </a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">
            Get Access
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-white relative z-40" // Higher z-index
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center space-y-4 transition-transform transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } ease-out duration-300`}
        onClick={toggleMenu} // Close menu on outside click
      >
        {/* Prevent clicks on the menu content from closing the menu */}
        <div className="relative z-50 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a href="#" className="text-white text-lg" onClick={toggleMenu}>
            Product
          </a>
          <a href="#" className="text-white text-lg" onClick={toggleMenu}>
            Blog
          </a>
          <a href="#" className="text-white text-lg" onClick={toggleMenu}>
            Support
          </a>
          <a href="#" className="text-white text-lg" onClick={toggleMenu}>
            Log In
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            Get Access
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-start justify-center z-10 p-4 md:p-8 lg:p-12 xl:p-16 mt-20">
        <div className="max-w-2xl text-left p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 typing-animation">
            Instant collaboration for remote teams
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            All-in-one place for your remote team to chat, collaborate and track project progress.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start">
            <input
              type="email"
              placeholder="Email"
              className="p-3 sm:p-4 rounded-l sm:rounded-r-none bg-white text-black w-full sm:w-64 mb-4 sm:mb-0 mr-0 sm:mr-4"
            />
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-r sm:rounded-l-none flex items-center w-full sm:w-auto">
              <span>Get Early Access</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-img.png"
          alt="Woman using a tablet in a modern office hallway"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
    </div>
  );
}
