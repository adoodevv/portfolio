import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achievements from './components/Achievements';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black m-0 p-0">
      <Router>
        <Layout>
          <div id="/"><Home /></div>
          <div id="about"><About /></div>
          <div id="projects"><Projects /></div>
          <div id="achievements"><Achievements /></div>
          <div id="contact"><Contact /></div>
        </Layout>
      </Router>
    </div>
  );
};

export default App;