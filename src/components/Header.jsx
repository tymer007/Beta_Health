import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <img src="logo.png" alt="Logo" className="h-20 w-auto" />
        <nav className="flex space-x-8">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Contact us</a>
          <a href="#" className="hover:text-gray-400">Write Articles</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-400">Sign up</a>
        <a href="#" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Login</a>
      </div>
    </header>
  )
}

export default Header