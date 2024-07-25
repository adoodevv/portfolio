import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
// import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <Router>
        <Layout>
          <div id="/"><Home /></div>
          <div id="about"><About /></div>
          <div id="projects"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id='achievements'><Achievements /></div>
          <div id='contact'><Contact /></div>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
