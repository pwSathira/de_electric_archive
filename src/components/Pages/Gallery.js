import React from 'react';
import './Pages.css';
import DPE1 from './GalleryImages/DPE1.jpg';
import DPE2 from './GalleryImages/DPE2.jpg';
import DPE3 from './GalleryImages/DPE3.jpg';
import DPE4 from './GalleryImages/DPE4.jpg';
import DPE5 from './GalleryImages/DPE5.jpg';

export const Gallery = () => {

    return (
        <div className="GalleryContainer">
            <div className="imageWrapper imageWrapper-0">
                <img className="gridImage" src={DPE1} alt="Slide 1" />
            </div>
            <div className="imageWrapper imageWrapper-1">
                <img className="gridImage" src={DPE2} alt="Slide 2" />
            </div>
            <div className="imageWrapper imageWrapper-2">
                <img className="gridImage" src={DPE3} alt="Slide 3" />
            </div>
            <div className="imageWrapper imageWrapper-3">
                <img className="gridImage" src={DPE4} alt="Slide 4" />
            </div>
            <div className="imageWrapper imageWrapper-4">
                <img className="gridImage" src={DPE5} alt="Slide 5" />
            </div>
        </div>

    );
};
