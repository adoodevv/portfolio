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
               <Link smooth to="/#">
                  <button className="px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white transition-colors duration-300">
                     <li>
                        Home
                     </li>
                  </button>
               </Link>
               <Link smooth to="/#about">
                  <button className="px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white transition-colors duration-300">
                     <li>
                        About
                     </li>
                  </button>
               </Link>
               <Link smooth to="/#projects">
                  <button className="px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white transition-colors duration-300">
                     <li>
                        Projects
                     </li>
                  </button>
               </Link>
            </ul>
            <Link to="/#" className="text-xl font-bold">adoodevv</Link>
            <ul className="text-sm flex space-x-4">
               <Link smooth to="/#contact">
                  <li>
                     <button className={`px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 ${isScrolled ? 'border border-black hover:text-white' : 'border border-white'} transition-colors duration-300`}>
                        Contact
                     </button>
                  </li>
               </Link>
               <Link smooth to="/#achievements">
                  <li>
                     <button className={`px-4 py-2 rounded-full bg-transparent hover:border-sky-700 hover:bg-sky-700 ${isScrolled ? 'border border-black hover:text-white' : 'border border-white'} transition-colors duration-300`}>
                        Achievements
                     </button>
                  </li>
               </Link>
               <li>
                  <button className="text-sky-700 px-4 py-2 rounded-full border border-white bg-white hover:scale-105 transition-transform duration-300">
                     <a href="src/assets/Resume.pdf" download className="flex items-center">
                        <FontAwesomeIcon icon={faDownload} />
                        <span className="ml-1">Resume</span>
                     </a>
                  </button>
               </li>
            </ul>
         </nav>
         <main className="flex-grow">{children}</main>
      </div>
   );
};

export default Layout;