import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faLinkedin, faHashnode } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
   return (
      <div className="container mx-auto px-4 py-8">
         <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact Me</h2>
         <form className="w-full max-w-lg mx-auto mt-10">
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First Name" />
               </div>
               <div className="w-full md:w-1/2 px-3">
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Last Name" />
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Email" />
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Message"></textarea>
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3 text-right">
                  <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                     Send Message
                  </button>
               </div>
            </div>
         </form>
         <div className="social-links mt-4 flex justify-center space-x-4">
            <a href="https://github.com/adoodevv" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://instagram.com/adoodevv" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/adoodevv" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://hashnode.com/@adoojoey" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faHashnode} size="2x" />
            </a>
         </div>
      </div>
   );
};

export default Contact;