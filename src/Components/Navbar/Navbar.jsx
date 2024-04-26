import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='flex flex-col lg:flex-row lg:h-24 bg-teal-800 justify-between items-center px-6 lg:px-16'>
      <div className='bg-gray-700  text-white lg:ml-0 mb-6 lg:mb-0 lg:mr-6 lg:rounded-full lg:overflow-hidden'>
        <img src="src/Images/logo.png" alt="logo" height="80px" width="200px" />
      </div>

      {/* Menu for larger screens */}
      <div className='hidden lg:flex flex-col lg:flex-row items-center'>
        <ul className='flex flex-col lg:flex-row list-none space-y-4 lg:space-y-0 lg:space-x-12 text-center lg:text-left'>
          <li><a href="/" className="text-white">Meet Dr. XYZ</a></li>

          <li><a href="/services" className="text-white">Services</a></li>
          <li><a href="/info" className="text-white">Patient Info</a></li>
          <li><a href="/forum" className="text-white">Forum</a></li>
          <li><a href="/member" className="text-white">Members</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>

        </ul>

        <button className='bg-teal-700 text-white px-4 py-2 rounded-full flex items-center justify-center mt-6 lg:mt-0 lg:ml-6'>
          <AccountCircleIcon className='mr-2' />
          Log In
        </button>
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
            <li><a href="/" className="text-white">Meet Dr. XYZ</a></li>
            <li><a href="/services" className="text-white">Services</a></li>
            <li><a href="/info" className="text-white">Patient Info</a></li>
            <li><a href="/forum" className="text-white">Forum</a></li>
            <li><a href="/members" className="text-white">Members</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
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
