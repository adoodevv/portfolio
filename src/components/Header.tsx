import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
   return (
      <header className="text-white bg-none fixed top-0 left-0 right-0">
         <div className="md:container md:mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
            <nav className="flex lg:w-1/3 flex-wrap items-center text-sm md:ml-auto justify-start">
               <a href="#about" className="mr-5 hover:text-gray-900">Projects</a>
               <a href="#projects" className="mr-5 hover:text-gray-900">Achievements</a>
               <a href="#gallery" className="mr-5 hover:text-gray-900">Gallery</a>
            </nav>
            <a className="flex lg:w-1/3 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
               <span className="ml-3 text-xl">adoodevv</span>
            </a>
            <div className="flex lg:w-1/3 justify-end">
               <button className="text-white text-sm rounded-full mr-5 border p-2 hover:bg-blue-500 hover:border-none transition-colors duration-200">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  CV
               </button>
               <button className="text-white text-sm rounded-full border p-2 hover:bg-white hover:text-black">
                  Contact
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;