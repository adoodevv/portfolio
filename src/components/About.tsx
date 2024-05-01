const About: React.FC = () => {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 h-8 bg-sky-700"></div>
          <h2 className="text-2xl font-medium text-white mb-4">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-white">
              A passionate and skilled software engineer and roboticist with experience in building modern and responsive web applications as well as designing, programming, constructing, and testing of robots. Eager to learn and collaborate on new projects.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-medium text-white mb-4">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                <li className="text-white px-3 py-1 rounded-md bg-sky-700">React</li>
                <li className="text-white px-3 py-1 rounded-md bg-sky-700">JavaScript</li>
                <li className="text-white px-3 py-1 rounded-md bg-sky-700">TypeScript</li>
                <li className="text-white px-3 py-1 rounded-md bg-sky-700">HTML</li>
                <li className="text-white px-3 py-1 rounded-md bg-sky-700">CSS</li>
                <li className="text-white px-3 py-1 rounded-md bg-sky-700">Python</li>
              </ul>
            </div>
          </div>
          <img className="rounded-lg shadow-md object-cover" src="path/to/your/about.jpg" alt="About You" />
        </div>
      </div>
    </div>
  );
};

export default About;