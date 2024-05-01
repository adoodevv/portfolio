import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A brief description of the project",
    image: "src/assets/exxmon1.png",
    link: "https://yourproject.com",
  },
  {
    title: "Project 2",
    description: "A brief description of the project",
    image: "path/to/project/image.jpg",
    link: "https://yourproject.com",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 h-8 bg-sky-700"></div>
        <h2 className="text-2xl font-medium text-white mb-4">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
