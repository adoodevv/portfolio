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
    description: "A brief description of your project",
    image: "path/to/project/image.jpg",
    link: "https://yourproject.com",
  },
  {
   title: "Project 2",
   description: "A brief description of your project",
   image: "path/to/project/image.jpg",
   link: "https://yourproject.com",
 },
   {
      title: "Project 3",
      description: "A brief description of your project",
      image: "path/to/project/image.jpg",
      link: "https://yourproject.com",
   },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-medium text-gray-900 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
