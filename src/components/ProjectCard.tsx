interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-full w-full object-cover hover:scale-110" src={image} alt={title} />
      <div className="absolute bottom-0 bg-black bg-opacity-70 text-white p-4 w-full">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1">{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 flex items-center px-4 py-2 text-sm font-medium text-center text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        View Project
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  );
};

export default ProjectCard;
