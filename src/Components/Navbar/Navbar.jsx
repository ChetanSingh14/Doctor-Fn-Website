import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSetActiveTab = (tabName) => {
    setActiveTab(tabName);
    setShowDropdown(false);  // Hide dropdown when any tab is clicked
  };

  const handleToggleDropdown = (show) => {
    setShowDropdown(show);
  };

  return (
    <nav className='flex flex-col lg:flex-row lg:h-24 bg-teal-800 justify-between items-center px-6 lg:px-16'>
      <div className='bg-gray-700 text-white lg:ml-0 mb-6 lg:mb-0 lg:mr-6 lg:rounded-full lg:overflow-hidden'>
        <img src="src/Images/logo.png" alt="logo" height="80px" width="200px" />
      </div>

      {/* Menu for larger screens */}
      <div className='hidden lg:flex flex-col lg:flex-row items-center'>
        <ul className='flex flex-col lg:flex-row list-none space-y-4 lg:space-y-0 lg:space-x-12 text-center lg:text-left'>
          <li><Link to="/" className={activeTab === '/' ? 'text-green-200' : 'text-white'} onClick={() => handleSetActiveTab('/')}>Meet Dr. XYZ</Link></li>
          <li><Link to="/about" className={activeTab === '/about' ? 'text-green-200' : 'text-white'} onClick={() => handleSetActiveTab('/about')}>About</Link></li>
          <li><Link to="/services" className={activeTab === '/services' ? 'text-green-200' : 'text-white'} onClick={() => handleSetActiveTab('/services')}>Services</Link></li>       
          <li
            onMouseEnter={() => handleToggleDropdown(true)}
            onMouseLeave={() => handleToggleDropdown(false)}
            className="relative"
          >
            <Link to="/info" className={activeTab === '/info' ? 'text-green-200' : 'text-white'}>
              Patient Info
            </Link>
            {showDropdown && (
              <div className="absolute bg-white py-2 px-4 rounded-lg top-8 left-0 z-10">
                <Link to="/info" className="block text-teal-800 hover:text-teal-600" onClick={() => handleSetActiveTab('/info')}>Patient Info</Link>
                <Link to="/reviews" className="block text-teal-800 hover:text-teal-600" onClick={() => handleSetActiveTab('/reviews')}>Patient Reviews</Link>
              </div>
            )}
          </li>
          <li><Link to="/blog" className={activeTab === '/blog' ? 'text-green-200' : 'text-white'} onClick={() => handleSetActiveTab('/blog')}>Blogs</Link></li>
          <li><Link to="/location" className={activeTab === '/location' ? 'text-green-200' : 'text-white'} onClick={() => handleSetActiveTab('/location')}>Location</Link></li>
          <li><Link to="/contact" className={activeTab === '/contact' ? 'text-green-200' : 'text-white'} onClick={() => handleSetActiveTab('/contact')}>Contact</Link></li>
        </ul>

        <Link to='register'><button className='bg-teal-700 text-white px-4 py-2 rounded-full flex items-center justify-center mt-6 lg:mt-0 lg:ml-6'>
          <AccountCircleIcon className='mr-2' />
          Log In
        </button></Link>
      </div>

      {/* Menu button for smaller screens */}
      <div className='lg:hidden'>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='text-white focus:outline-none'
        >
          {showMenu ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

      {/* Menu for smaller screens */}
      {showMenu && (
        <div className='lg:hidden mt-6'>
          <ul className='flex flex-col list-none space-y-4 text-center'>
            <li><Link to="/" className="text-white" onClick={() => handleSetActiveTab('/')}>Meet Dr. XYZ</Link></li>
            <li><Link to="/about" className="text-white" onClick={() => handleSetActiveTab('/about')}>About</Link></li>
            <li><Link to="/services" className="text-white" onClick={() => handleSetActiveTab('/services')}>Services</Link></li>       
            <li>
              <div className="relative">
                <Link to="/info" className="text-white" onClick={() => handleSetActiveTab('/info')}>
                  Patient Info
                </Link>
                {activeTab === '/info' && (
                  <div className="absolute bg-white py-2 px-4 rounded-lg top-8 left-0 z-10">
                    <Link to="/info" className="block text-teal-800 hover:text-teal-600" onClick={() => handleSetActiveTab('/info')}>Patient Info</Link>
                    <Link to="/reviews" className="block text-teal-800 hover:text-teal-600" onClick={() => handleSetActiveTab('/reviews')}>Patient Reviews</Link>
                  </div>
                )}
              </div>
            </li>
            <li><Link to="/blog" className="text-white" onClick={() => handleSetActiveTab('/blog')}>Blogs</Link></li>
            <li><Link to="/location" className="text-white" onClick={() => handleSetActiveTab('/location')}>Location</Link></li>
            <li><Link to="/contact" className="text-white" onClick={() => handleSetActiveTab('/contact')}>Contact</Link></li>
          </ul>

          <button className='bg-teal-700 text-white px-4 py-2 rounded-full flex items-center justify-center mt-6'>
            <AccountCircleIcon className='mr-2' />
            Log In
          </button>
        </div>
      )}
    </nav>
  );
}
