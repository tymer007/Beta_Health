import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react'

const WriterProfile = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md overflow-hidden w-full max-w-full">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="cover-photo.png"
            alt="cover photo"
          />
          <img
            className="w-32 h-32 rounded-full border-4 border-red-500 absolute top-28 left-1/2 transform -translate-x-1/2 md:left-40 md:transform-none shadow-lg"
            src="doctress.jpg"
            alt="Author"
          />
        </div>
        <div className='flex justify-end pr-4 pt-4 md:pr-40'>
          <button type="submit" className="bg-[#D73D00] text-white py-2 px-4 rounded-md hover:bg-orange-700">
            Digest
          </button>
        </div>
        <div className="px-4 md:px-14 py-4">
          <div className="flex flex-col items-center md:items-start mt-16 md:mt-0 md:ml-32 md:px-28">
            <h2 className="text-2xl font-semibold">Emily Carter</h2>
            <span className="text-gray-500">Dr Journalist / Gynaecologist</span>
          </div>
          <p className="text-gray-600 mb-6 mt-4 md:ml-32 md:px-28">Dr. Emily Carter is a renowned physician specializing in women's health, with a distinguished career in both clinical practice and academic research. She earned her medical degree from Johns Hopkins University and completed her residency in Obstetrics and Gynecology at the Mayo Clinic. With over 15 years of experience, Dr. Carter has become a leading expert in reproductive health, prenatal care, and gynecologic disorders.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-28">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">About Author</h3>
              <h4 className="text-md font-semibold">Education :</h4>
              <p className="text-gray-700 mb-4">John Hopkins University, Scotland</p>
              <div className="mb-4">
                <h4 className="text-md font-semibold">Certifications :</h4>
                <p className="text-gray-700">Licensed Gynaecologist</p>
              </div>
              <div className="mb-4">
                <h4 className="text-md font-semibold">Affiliations:</h4>
                <p className="text-gray-700">CardinalHealth, Nuffield Health, LivingWell</p>
              </div>
              <div>
                <h4 className="text-md font-semibold">Professional Accomplishments :</h4>
                <p className="text-gray-700">Certified Doctor</p>
              </div>
            </div>
            <div className="col-span-2 pb-5">
              <h3 className="text-lg text-center font-semibold mb-4 text-[#D73D00]">Articles Written</h3>
              <div className="space-y-4">
                {[1, 2, 3 ].map((article, index) => (
                  <div key={index} className="flex flex-col cursor-pointer md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <img
                      className="w-full md:w-1/4 h-24 object-cover rounded-lg"
                      src="b-cancer.jpeg"
                      alt="Article"
                    />
                    <div className="w-full md:w-3/4">
                      <h4 className="text-md font-semibold hover:text-customOrange">How to Avoid Breast Cancer </h4>
                      <p className="text-gray-500 text-sm mb-2">By Emily Carter &middot; Posted on 28th May, 2024 </p>
                      <p className="text-gray-700 mb-2">
                      Breast cancer remains one of the most prevalent and impactful diseases affecting women worldwide. This article delves into the lates...</p>
                      <div className='flex flex-col text-end'>
                        <a href="#" className="text-[#18CDCD] text-sm font-bold">Read more</a>
                      </div>
                    </div>
                  </div>
                  
                ))}
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="flex items-center justify-center bg-[#18CDCD] text-white rounded-md hover:bg-teal-500">
                    <ArrowLeft />
                  </button>
                  <button className="flex items-center justify-center bg-[#18CDCD] text-white rounded-md hover:bg-teal-500">
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriterProfile;
