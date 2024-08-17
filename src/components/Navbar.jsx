import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-4 text-xl text-white bg-accent fixed top-4 left-4 z-50"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-full bg-sectionBackground shadow-md z-40 transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:h-auto lg:flex lg:items-center lg:space-x-4 lg:shadow-none ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-2xl text-white"
        >
          &times;
        </button>

        <nav className="flex flex-col items-center justify-center w-full h-full lg:flex-row lg:items-center lg:space-x-4 text-sm font-semibold uppercase tracking-wide">
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-sm font-semibold uppercase tracking-wide">
            <li><a href="#overview" className="block py-2 px-4 hover:text-accent">Overview</a></li>
            <li><a href="#authentication" className="block py-2 px-4 hover:text-accent">Authentication</a></li>
            <li><a href="#endpoints" className="block py-2 px-4 hover:text-accent">Endpoints</a></li>
            <li><a href="#tutorial" className="block py-2 px-4 hover:text-accent">Tutorial</a></li>
            <li><a href="#code-examples" className="block py-2 px-4 hover:text-accent">Code Examples</a></li>
            <li><a href="#pricing" className="block py-2 px-4 hover:text-accent">Pricing</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
