import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "A Movie Dashboard",
    description: "This is a movie dashboard design that fetches movies from TmDB API built with React",
    image: "src/assets/exxmon1.png",
    link: "https://github.com/adoodevv/movie-dashboard",
  },
  {
    title: "Gazebo Simulation",
    description: "A Gazebo simulation for the World Robot Olympiad Future Engineers Category - Self Driving Cars",
    image: "src/assets/simulation.png",
    link: "https://github.com/adoodevv/simulation",
  },
  {
    title: "File Uploader",
    description: "A simple file uploader built with React frontend and FastAPI backend",
    image: "src/assets/aneva1.jpg",
    link: "https://github.com/adoodevv/Aneva",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-sky-500 to-indigo-500">
      <div className="container px-8 py-8 mx-auto">
        <div className="text-black flex flex-col items-center space-y-4 justify-center">
          <h1 className="text-8xl font-light">Projects</h1>
          <p className="w-1/3 text-center text-gray-800">Check out a number of projects I have completed and some of which I am still working on, both in robotics and software</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
