import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <div className="relative bg-white rounded-3xl shadow-md overflow-hidden">
      <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={image} alt={title} />
      <div className="absolute bottom-0 bg-black bg-opacity-85 text-white p-4 w-full">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 mb-3">{description}</p>
      </div>
      <button className="absolute bottom-2 right-2 text-sky-700 px-2 py-1 rounded-full border border-white bg-white hover:scale-105 transition-transform duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faLink} />
          <span>View</span>
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
