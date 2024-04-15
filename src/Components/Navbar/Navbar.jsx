import React from 'react';

export default function Navbar() {
  return (
    <nav className='flex bg-teal-800  items-center p-4'>
      <div className='bg-gray-700 text-white p-4'>
        <h1>Logo</h1>
      </div>
      <div className=''>
        <ul className='flex list-none p-6'>
          <li><a href="/" className="text-white">Meet Dr. XYZ</a></li>
          <li><a href="/about" className="text-white">Services</a></li>
          <li><a href="/about" className="text-white">Patient Info</a></li>
          <li><a href="/about" className="text-white">Forum</a></li>
          <li><a href="/about" className="text-white">Members</a></li>
          <li><a href="/about" className="text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <button className='bg-indigo-500 text-white px-4 py-2 rounded'>Login</button>
      </div>
    </nav>
    
  );
}
