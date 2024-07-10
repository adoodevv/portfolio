import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const checkScroll = () => {
         setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', checkScroll);

      return () => {
         window.removeEventListener('scroll', checkScroll);
      };
   }, []);

   return (
      <div className="min-h-screen flex flex-col">
         <nav className={`z-50 px-8 py-4 flex justify-between items-center fixed w-full top-0 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-sm text-black' : 'bg-tranparent text-white'}`}>
            <ul className="text-sm flex space-x-4">
               <button className="px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white">
                  <li>
                     <Link smooth to="/#">Home</Link>
                  </li>
               </button>
               <button className="px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white">
                  <li>
                     <Link smooth to="/#about">About</Link>
                  </li>
               </button>
               <button className="px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white">
                  <li>
                     <Link smooth to="/#projects">Projects</Link>
                  </li>
               </button>
            </ul>
            <Link to="/#" className="text-xl font-bold">adoodevv</Link>
            <ul className="text-sm flex space-x-4">
               <li>
                  <button className={`px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 ${isScrolled ? 'border border-black hover:text-white' : 'border border-white'}`}>
                     <Link smooth to="/#contact">Contact</Link>
                  </button>
               </li>
               <li>
                  <button className={`px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 ${isScrolled ? 'border border-black hover:text-white' : 'border border-white'}`}>
                     <Link smooth to="/#achievements">Achievements</Link>
                  </button>
               </li>
               <li>
                  <button className="text-sky-700 px-4 py-2 rounded-full border border-white bg-white hover:scale-110">
                     <a href="/path/to/my/cv.pdf" download className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faDownload} />
                        <span>CV</span>
                     </a>
                  </button>
               </li>
            </ul>
         </nav>
         <main className="flex-grow px-4 py-8">{children}</main>
      </div>
   );
};

export default Layout;