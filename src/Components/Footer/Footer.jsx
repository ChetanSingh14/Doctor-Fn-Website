import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-8">
      <div className="container mx-auto sm:m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <p>123 Doctor Street, City Name</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Connect with Us</h5>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon/>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FacebookIcon/>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <TwitterIcon/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center pt-24">
        <p>&copy; 2024 Your Doctor's Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
