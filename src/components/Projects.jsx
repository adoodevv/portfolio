import React from 'react';

const Projects = () => {
   const projects = [
      {
         title: 'Project 1',
         description: 'This is the first project',
         imageUrl: 'https://example.com/project1.jpg',
      },
      {
         title: 'Project 2',
         description: 'This is the second project',
         imageUrl: 'https://example.com/project2.jpg',
      },
      {
         title: 'Project 3',
         description: 'This is the third project',
         imageUrl: 'https://example.com/project3.jpg',
      }
   ];

   return (
      <div className="container mx-auto h-screen py-5">
         <h1 className="text-3xl font-bold mb-4">Projects</h1>
         <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
               <div key={index} className="bg-white p-4 shadow">
                  <img src={project.imageUrl} alt={project.title} className="mb-2" />
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
