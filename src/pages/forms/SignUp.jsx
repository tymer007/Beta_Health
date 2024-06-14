import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="md:w-2/3 flex justify-center bg-white relative">
        <div className="absolute mx-auto">
          <img src="logo.png" alt="Logo" className="w-24" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-14 bg-white ">
          <h1 className="text-3xl font-bold mb-4">
            Join our <span className="text-orange-500">community</span> today
          </h1>
          <p className="text-gray-600 mb-6">Become a part of our informative community</p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mb-4">
                <label className="block font-bold mb-1 text-customOrange ">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1 text-customOrange ">Last Name</label>
                <input
                  type="name"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  required
                />
              </div>

            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1 text-customOrange ">Your email</label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1 text-customOrange ">Create Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="8"
                  maxLength="15"
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded "
                  pattern="(?=.*\d)[A-Za-z\d]{8,}"
                  title="Password must be at least 8 characters long and contain at least one digit"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 mt-1"
                required
              />
              <label>
                By creating an account you are agreeing to our Terms and Conditions and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
            >
              CONTINUE
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <a href="#" className="text-teal-500">Login</a>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 hidden md:flex items-center justify-center">
        <img src="index.jpeg" alt="Form" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;
