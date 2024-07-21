const Achievements: React.FC = () => {
   return (
      <div>
         <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center mb-16">
               <h1 className="text-8xl font-light text-white mb-4">Achievements</h1>
               <p className="w-1/3 text-center text-gray-400">Here are a number of competitions I have participated on the World level and in </p>
            </div>
            <div className="grid grid-cols-4 gap-4">
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end">
                  <h3 className="text-base font-medium text-white mb-2">1st Place - Robofest UMC</h3>
                  <p className="text-gray-400 text-sm">A brief description of the achievement</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end">
                  <h3 className="text-base font-medium text-white mb-2">2nd and 3rd Place - Shell Xprize</h3>
                  <p className="text-gray-400 text-sm">A brief description of the achievement</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end">
                  <h3 className="text-base font-medium text-white mb-2">Semi-finalist - A2SV Hackathon</h3>
                  <p className="text-gray-400 text-sm">A brief description of the achievement</p>
               </div>
               <div className="bg-white h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end">
                  <h3 className="text-base font-medium text-white mb-2">Participant - World Skills Competition</h3>
                  <p className="text-gray-400 text-sm">A brief description of the achievement</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end">
                  <h3 className="text-base font-medium text-white mb-2">Participant - World Robot Olympiad</h3>
                  <p className="text-gray-400 text-sm">A brief description of the achievement</p>
               </div>
               <div className="bg-white  h-56 p-4 bg-opacity-20 rounded-2xl flex flex-col justify-end">
                  <h3 className="text-base font-medium text-white mb-2">1st Place - RiSE</h3>
                  <p className="text-gray-400 text-sm">A brief description of the achievement</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Achievements;