import React from 'react';// Ensure you have a logo image in your src directory
import { Link } from 'react-router-dom';

const FeatureCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 mx-auto cursor-pointer">
    <img src="index.jpeg" alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {/* <a href="#" className="text-orange-600 font-bold">View More</a> */}
    </div>
  </div>
);

const AboutUs = () => (
  <div className="bg-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">About Us</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <FeatureCard
          src="index.jpeg"
          title="Book Consultations"
          description="Connect with top medical professionals for personalized advice and treatment plans from the comfort of your home."
        />
        <FeatureCard
          src="index.jpeg"
          title="Health Related Articles"
          description="Discover our handpicked selection of detailed articles covering common medical conditions, wellness tips, and healthcare news."
        />
        <FeatureCard
          src="index.jpeg"
          title="Our Medical Experts"
          description="We have a team of dedicated professionals from various specialties ready to provide you with personalized advice."
        />
      </div>
      <p className="text-gray-600 mt-8 text-center text-xl">
        At Beta Health, our mission is to empower individuals with trusted medical insights and wellness advice from experienced professionals. We provide personalized consultations, an extensive library of health articles, and a supportive community to help you make informed decisions about your health. Committed to accuracy, increasing health awareness, and offering tailored solutions, our team strives to guide you on your unique health journey. Join us to access reliable information, connect with experts, and take charge of your well-being.
      </p>
    </div>
  </div>
);

export default AboutUs;
