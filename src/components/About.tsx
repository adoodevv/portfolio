const About: React.FC = () => {
   return (
     <div className="container mx-auto px-4 py-8">
       <h2 className="text-2xl font-medium text-gray-900 mb-4">About Me</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
           <p className="text-gray-700">
             A passionate and skilled web developer with experience in building modern and responsive web applications. Eager to learn and collaborate on new projects.
           </p>
           <p className="text-gray-700 mt-4">
             <b>Skills:</b> React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS
           </p>
         </div>
         <img className="rounded-lg shadow-md object-cover" src="path/to/your/about.jpg" alt="About You" />
       </div>
     </div>
   );
 };
 
 export default About;