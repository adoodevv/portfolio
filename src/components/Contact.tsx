import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter, faLinkedin, faHashnode } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
   return (
      <div className="bg-[url('src/assets/tarmo5.jpg')] flex items-center justify-center">
         <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
               <div className="flex flex-col items-start justify-center text-center md:text-left">
                  <h1 className="text-6xl md:text-8xl font-light text-black">Let's get in touch</h1>
                  <div className="mt-8 flex justify-center md:justify-start space-x-6 text-black">
                     <a href="https://github.com/adoodevv" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                     </a>
                     <a href="https://instagram.com/adoodevv" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                     </a>
                     <a href="https://twitter.com/adoodevv" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                     </a>
                     <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                     </a>
                     <a href="https://hashnode.com/@adoojoey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
                        <FontAwesomeIcon icon={faHashnode} size="2x" />
                     </a>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <form className="w-full max-w-lg mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-transparent text-black border border-black border-opacity-30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-opacity-20 focus:border-black" type="text" placeholder="First Name" />
                     </div>
                     <div className="w-full md:w-1/2 px-3">
                        <input className="appearance-none block w-full bg-transparent text-black border border-black border-opacity-30 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-20 focus:border-black" type="text" placeholder="Last Name" />
                     </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <input className="appearance-none block w-full bg-transparent text-black border border-black border-opacity-30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-opacity-20 focus:border-black" type="email" placeholder="Email" />
                     </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <textarea className="appearance-none block w-full bg-transparent text-black border border-black border-opacity-30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-opacity-20 focus:border-black" placeholder="Message"></textarea>
                     </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                     <div className="w-full px-3 text-right">
                        <button className="bg-sky-700 hover:bg-sky-900 transition-colors duration-300 text-white font-bold py-2 px-4 rounded" type="button">
                           Send Message
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
