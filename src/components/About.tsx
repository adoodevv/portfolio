import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const items = [
    {
      title: "6+ Years",
      description: "Active involvement in robotics",
    },
    {
      title: "1+ Years",
      description: "Practising Web and Mobile app dev",
    },
    {
      title: "1x",
      description: "Internships",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentItem(prevItem => (prevItem === items.length - 1 ? 0 : prevItem + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="container px-44 py-24">
        <div className="">
          <h1 className="text-9xl font-light text-black mb-8">About</h1>
          <h2 className="text-9xl font-light text-black mb-8">me</h2>
        </div>
        <p className="absolute right-80 bottom-52 text-black text-sm w-1/3">
          A passionate and skilled software engineer and roboticist with experience in building
          modern and responsive web applications as well as designing, programming, constructing,
          and testing of robots
        </p>
        <div className="grid grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${currentItem === i ? 'opacity-100' : 'opacity-50'} transition-opacity duration-500`}
            >
              <h3 className="text-3xl font-medium text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
