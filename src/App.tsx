import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import ProjectsHome from './pages/projects/ProjectsHome';
import DataAnalysis from './pages/projects/DataAnalysis';
import WebDevelopment from './pages/projects/WebDevelopment';
import PythonUtilities from './pages/projects/PythonUtilities';
import Additional from './pages/projects/Additional';
import Contact from './pages/Contact';
import MorphingBackground from './components/MorphingBackground';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsHome />} />
        <Route path="/projects/data-analysis" element={<DataAnalysis />} />
        <Route path="/projects/web-development" element={<WebDevelopment />} />
        <Route path="/projects/python-utilities" element={<PythonUtilities />} />
        <Route path="/projects/additional" element={<Additional />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <MorphingBackground />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;