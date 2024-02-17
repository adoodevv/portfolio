import React from 'react';

const Home = () => {
   return (
      <div className="flex justify-between items-center bg-gray-100 h-screen px-8">
         <main className="container mx-auto py-5">
            <section className="mb-6">
               <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to My Portfolio</h2>
               <p className="text-gray-600">My name is Adoo Darko Jonathan</p>
            </section>
         </main>
         <div>
            <img
               src=""
               alt="My Image"
               className="rounded-full shadow-lg h-96 w-96 object-cover"
            />
         </div>
      </div>
   );
};

export default Home;