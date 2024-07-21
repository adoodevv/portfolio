import React from 'react';
import '../styles/Gallery.css';

import img1 from '../assets/gallery/tarmo5.jpg';

const Gallery: React.FC = () => {
   const images = [img1, ];

   return (
      <div className="gallery h-screen overflow-hidden relative">
         <div className="relative flex items-center space-x-4  ml-8">
            <div className="absolute left-0 top-4 w-1 h-16 bg-sky-700"></div>
            <h2 className="text-8xl font-light text-white mb-4">Gallery</h2>
         </div>
         <div className="gallery-wrapper absolute left-0 bottom-36 w-1/2 h-1/2">
            {images.map((src: string, index: number) => (
               <img key={index} src={src} alt={`gallery-img-${index}`} className="gallery-img" />
            ))}
         </div>
      </div>
   );
};

export default Gallery;
