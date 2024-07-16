const About: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 relative">
          <div className="absolute left-0 top-4 w-1 h-16 bg-sky-700"></div>
          <h2 className="text-8xl font-light text-white mb-4">About</h2>
        </div>
        <div className="absolute w-1/2 right-0">
          <h3 className="text-2xl font-medium text-white mb-4">Skills</h3>
          <ul className="flex flex-wrap gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-16 h-16 hover:animate-spin-slow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className="w-16 h-16 hover:animate-spin-slow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-16 h-16 hover:animate-spin-slow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gazebo/gazebo-original.svg" className="w-16 h-16 hover:animate-wiggle" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="w-16 h-16 hover:animate-spin-slow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" className="w-16 h-16 hover:animate-spin-slow" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" className="w-16 h-16 hover:animate-wiggle" />
          </ul>
        </div>
        <div className="mt-80">
          <h2 className="absolute right-0 text-8xl font-light text-white mr-8">Me</h2>
          <p className="absolute left-0 text-white text-lg w-1/3 ml-8">
            A passionate and skilled software engineer and roboticist with experience in building
            modern and responsive web applications as well as designing, programming, constructing,
            and testing of robots. Eager to learn and collaborate on new projects.
          </p>
        </div>
      </div>
    </div>

  );
};

export default About;