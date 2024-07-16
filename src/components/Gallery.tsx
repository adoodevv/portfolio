import React from 'react';
import '../styles/Gallery.css';

import img1 from '../assets/gallery/tarmo5.jpg';

const Gallery: React.FC = () => {
   const images = [img1];

   return (
      <div className="gallery h-screen overflow-hidden relative">
         <h1 className="text-8xl font-light text-white mb-4">Gallery</h1>
         <div className="gallery-wrapper absolute top-0 left-0 w-1/3 h-1/3">
            {images.map((src: string, index: number) => (
               <img key={index} src={src} alt={`gallery-img-${index}`} className="gallery-img" />
            ))}
         </div>
      </div>
   );
};

export default Gallery;
