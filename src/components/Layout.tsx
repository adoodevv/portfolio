import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className="min-h-screen flex flex-col">
         <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center fixed w-full top-0">
            <ul className="text-sm flex space-x-4">
               <li>
                  <Link smooth to="/#" className="hover:text-gray-400">Home</Link>
               </li>
               <li>
                  <Link smooth to="/#about" className="hover:text-gray-400">About</Link>
               </li>
               <li>
                  <Link smooth to="/#projects" className="hover:text-gray-400">Projects</Link>
               </li>
            </ul>
            <Link to="/#" className="text-xl font-bold">adoodevv</Link>
            <ul className="text-sm flex space-x-4">
               <li>
                  <Link smooth to="/#contact" className="hover:text-gray-400">Contact</Link>
               </li>
               <li>
                  <Link smooth to="/#achievements" className="hover:text-gray-400">Achievements</Link>
               </li>
               <li>
                  CV
               </li>
            </ul>
         </nav>
         <main className="flex-grow px-4 py-8">{children}</main>
      </div>
   );
};

export default Layout;