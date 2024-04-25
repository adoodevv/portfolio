import React from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">adoodevv</NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="hover:text-gray-400">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="hover:text-gray-400">Projects</NavLink>
          </li>
        </ul>
      </nav>
      <main className="flex-grow px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;