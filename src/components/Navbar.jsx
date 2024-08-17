import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle sidebar (mobile view) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-4 text-xl text-white bg-accent fixed top-4 left-4 z-50"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-full bg-sectionBackground shadow-md z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-white"
        >
          &times;
        </button>

        <nav className="flex flex-col items-center justify-center w-full h-full text-sm font-semibold uppercase tracking-wide">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#overview" className="hover:text-accent">Overview</a></li>
            <li><a href="#authentication" className="hover:text-accent">Authentication</a></li>
            <li><a href="#endpoints" className="hover:text-accent">Endpoints</a></li>
            <li><a href="#tutorial" className="hover:text-accent">Tutorial</a></li>
            <li><a href="#code-examples" className="hover:text-accent">Code Examples</a></li>
            <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
          </ul>
        </nav>
      </div>

      {/* Full-width Navbar (desktop view) */}
      <nav className="hidden lg:flex lg:justify-center lg:space-x-6 lg:bg-sectionBackground lg:shadow-md lg:py-6 lg:z-50 lg:mb-6">
        <ul className="flex space-x-4 text-sm font-semibold uppercase tracking-wide">
          <li><a href="#overview" className="hover:text-accent">Overview</a></li>
          <li><a href="#authentication" className="hover:text-accent">Authentication</a></li>
          <li><a href="#endpoints" className="hover:text-accent">Endpoints</a></li>
          <li><a href="#tutorial" className="hover:text-accent">Tutorial</a></li>
          <li><a href="#code-examples" className="hover:text-accent">Code Examples</a></li>
          <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
