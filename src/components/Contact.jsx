import React from 'react';

const Contact = () => {
   return (
      <div className="h-screen bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                     Name
                  </label>
                  <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="name"
                     type="text"
                     placeholder="Enter your name"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                     Email
                  </label>
                  <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="email"
                     type="email"
                     placeholder="Enter your email"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                     Message
                  </label>
                  <textarea
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="message"
                     rows="5"
                     placeholder="Enter your message"
                  ></textarea>
               </div>
               <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
