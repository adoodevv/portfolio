import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-8">
          <img className="w-96 h-96 rounded-full object-cover mx-auto" src="src/assets/profile.jpg" alt="My Profile" />
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold text-white">
              <span className="text-sky-700">Adoo</span> Darko Jonathan
            </h1>
            <h2 className="text-xl font-medium text-gray-400 mt-4">Software Engineer and Roboticist</h2>
            <p className="text-white mt-4 text-sm w-1/2">
              I have a knack for building user-friendly and interactive web experiences as well as designing, programming, constructing, and testing of robots. Let's collaborate on your next project!
            </p>
            <Link smooth to="/#contact" className="mt-4">
              <button className="text-sky-700 px-3 py-1 rounded-md border border-sky-700 bg-transparent mt-4 hover:text-white hover:bg-sky-700">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;