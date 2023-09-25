import React, { useState } from 'react';
import './Pages.css';
import DPE1 from './GalleryImages/DPE1.jpg';
import DPE2 from './GalleryImages/DPE2.jpg';
import DPE3 from './GalleryImages/DPE3.jpg';
import DPE4 from './GalleryImages/DPE4.jpg';

export const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [DPE1, DPE2, DPE3, DPE4];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <body>
        <div className="GalleryContainer">
            {images.map((image, index) => (
                <img
                    key={index}
                    className="mySlides"
                    src={image}
                    alt="Slide"
                    style={{ display: index === currentSlide ? "block" : "none" }}
                />
            ))}
        </div>
        <button className="w3-button w3-display-left" onClick={prevSlide}>&#10094;</button>
        <button className="w3-button w3-display-right" onClick={nextSlide}>&#10095;</button>
        </body>

    );
};
