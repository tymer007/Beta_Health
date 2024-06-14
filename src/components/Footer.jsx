import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <img src="logo.png" alt="Logo" className="h-20 w-auto mb-4" />
          <p className="mb-4">Your Health, Our Passion: Trusted Guidance from Medical Experts</p>
          <div className="flex space-x-4">
            <div className="bg-white h-8 w-8 rounded-full"></div>
            <div className="bg-white h-8 w-8 rounded-full"></div>
            <div className="bg-white h-8 w-8 rounded-full"></div>
          </div>
        </div>
        <div className="flex space-x-16">
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400"><a href="#">How it works</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Featured</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Partnership</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Business Relation</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Socials</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400"><a href="#">Facebook</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Linked In</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Twitter</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center border-t border-gray-800 pt-4">
        <p className="text-gray-400">©2024 Beta Health. All rights reserved</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gray-400">Privacy & Policy</a>
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer