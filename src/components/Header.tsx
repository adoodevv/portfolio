import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
   return (
      <header className="text-gray-600 body-font">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
            <nav className="flex lg:w-1/3 flex-wrap items-center text-sm md:ml-auto justify-start">
               <a href="#about" className="mr-5 hover:text-gray-900">Projects</a>
               <a href="#projects" className="mr-5 hover:text-gray-900">Achievements</a>
               <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
               <a href="#gallery" className="mr-5 hover:text-gray-900">Gallery</a>
            </nav>
            <a className="flex lg:w-1/3 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
               <span className="ml-3 text-xl">adoodevv</span>
            </a>
            <div className="flex lg:w-1/3 justify-end">
               <button>
                  <a href="#contact" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-sm mt-4 md:mt-0">
                  <FontAwesomeIcon icon={faDownload} className="text-bg-gray-100 mr-2" />
                     CV
                  </a>
               </button>
            </div>
         </div>
      </header>
   )
}

export default Header