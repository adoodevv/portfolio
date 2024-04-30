const Achievements: React.FC = () => {
   return (
      <div className="container mx-auto px-4 py-8">
         <h2 className="text-2xl font-medium text-gray-900 mb-4">Achievements</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4">
               <h3 className="text-xl font-medium text-gray-900 mb-2">Achievement 1</h3>
               <p className="text-gray-700">A brief description of the achievement</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
               <h3 className="text-xl font-medium text-gray-900 mb-2">Achievement 2</h3>
               <p className="text-gray-700">A brief description of the achievement</p>
            </div>
         </div>
      </div>
   );
};

export default Achievements;