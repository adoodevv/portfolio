import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img className="w-48 h-48 rounded-full object-cover mx-auto" src="Myprofile.jpg" alt="My Profile" />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Adoo Darko Jonathan</h1>
          <h2 className="text-xl font-medium text-gray-700">Software Engineer and Robotics Enthusiast</h2>
          <p className="text-gray-600 mt-4">
            I'm a passionate web developer with a knack for building user-friendly and interactive web experiences. Let's collaborate on your next project!
          </p>
          <Link smooth to="/#contact" className="text-blue-500 mt-4">
            <button className="text-gray-700 px-3 py-1 rounded-md bg-gray-200 mt-4">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Skills</h3>
        <ul className="flex flex-wrap gap-2">
          <li className="text-gray-700 px-3 py-1 rounded-md bg-gray-200">React</li>
          <li className="text-gray-700 px-3 py-1 rounded-md bg-gray-200">JavaScript</li>
          <li className="text-gray-700 px-3 py-1 rounded-md bg-gray-200">TypeScript</li>
          <li className="text-gray-700 px-3 py-1 rounded-md bg-gray-200">HTML</li>
          <li className="text-gray-700 px-3 py-1 rounded-md bg-gray-200">CSS</li>
          <li className="text-gray-700 px-3 py-1 rounded-md bg-gray-200">Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;