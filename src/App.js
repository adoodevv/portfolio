import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="fixed w-full bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" onClick={(e) => handleClick(e, 'home')} className="hover:text-gray-300">Home</a></li>
              <li><a href="#about" onClick={(e) => handleClick(e, 'about')} className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="home" className="pt-24"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;