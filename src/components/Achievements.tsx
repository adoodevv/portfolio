import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

const Achievements: React.FC = () => {
   return (
      <div>
         <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center mb-16">
               <h1 className="text-8xl font-light text-white mb-4">Achievements</h1>
               <p className="w-1/3 text-center text-gray-400">Here are a number of competitions I have participated at the World level and in 🇬🇭</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-2 text-xl self-start" />
                  <h3 className="text-base font-medium text-white mb-2">1st Place - Robofest UMC</h3>
                  <p className="text-gray-400 text-sm">First African team to win the Unknown Mission Challenge at the Robofest International Finals in 2021.</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <FontAwesomeIcon icon={faMedal} className="text-yellow-500 mb-2 text-xl self-start" />
                  <h3 className="text-base font-medium text-white mb-2">2nd and 3rd Place - Shell Xprize</h3>
                  <p className="text-gray-400 text-sm">2nd in Creativity and 3rd in Moonshot idea in the World Shell Ocean Discovery Xprize Challenge in 2018.</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <FontAwesomeIcon icon={faCertificate} className="text-red-500 mb-2 text-xl self-start" />
                  <h3 className="text-base font-medium text-white mb-2">Semi-finalist - A2SV Hackathon</h3>
                  <p className="text-gray-400 text-sm">Our run ended in the Semi-finals in the 2023 Africa to Silicon Valley Generative AI Hackathon.</p>
               </div>
               <div className="bg-white h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <h3 className="text-base font-medium text-white mb-2">Participant - WSC 2024</h3>
                  <p className="text-gray-400 text-sm">Contested in the Mechanical Engineering CAD in the World Skills Competition in Iran, 2024.</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <FontAwesomeIcon icon={faCertificate} className="text-red-500 mb-2 text-xl self-start" />
                  <h3 className="text-base font-medium text-white mb-2">Participant - WRO 2017</h3>
                  <p className="text-gray-400 text-sm">Held in Costa Rica in 2017, I participated in the Elementary Category of the World Robot Olympiad.</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-2 text-xl self-start" />
                  <h3 className="text-base font-medium text-white mb-2">1st Place - RiSE</h3>
                  <p className="text-gray-400 text-sm">In my first ever robotic competition in Ghana, my team came first in the Autonomous Rescue Challenge.</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end hover:bg-opacity-30 transition-colors duration-300">
                  <FontAwesomeIcon icon={faAward} className="text-yellow-500 mb-2 text-xl self-start" />
                  <h3 className="text-base font-medium text-white mb-2">5th Place - Robofest Game</h3>
                  <p className="text-gray-400 text-sm">In the 2020 Robofest Game Challenge, Robogolf, we came 5th worldwide in the game of autonomous robots golfing.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Achievements;