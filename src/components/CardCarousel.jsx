// src/components/CardCarousel.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Utility function to truncate text
const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};

const CardCarousel = () => {
    const cards = Array(8).fill({
        title: 'Balanced Diet: What Is It and How to Achieve It',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing emot. Curabitur vel egestas lectus, ac suscipit odio.',
        image: 'https://via.placeholder.com/150'
    });

    const headerCategory = {
        category: 'Nutrition & Diet',
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Default number of cards for desktop
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px (e.g., tablets)
                settings: {
                    slidesToShow: 3, // Number of cards for small screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600, // For screens smaller than 600px (e.g., mobile phones)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-2 relative">
            <h6 className="text-xs font-bold">Featured Category,</h6>
            <h2 className="text-xl font-bold mb-4">{headerCategory.category}</h2>

            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="p-2 pb-2 cursor-pointer">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg hover:text-customOrange">{card.title}</h3>
                                <p>{truncateText(card.description, 55)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="mt-4 text-end pt-3">
                <button className="bg-orange-100 text-customOrange px-4 py-2 rounded">Read More</button>
            </div>
        </div>
    );
};

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
        onClick={onClick}
    >
        <ChevronRight className="text-black" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
        onClick={onClick}
    >
        <ChevronLeft className="text-black" />
    </button>
);

export default CardCarousel;
