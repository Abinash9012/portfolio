import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <Navbar />
        </div>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div id="about">
                  <About />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="projects">
                  <Projects />
                </div>
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                <Contact />
              </motion.div>
            } />
            <Route path="/resume" element={
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                <Resume />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <footer>
          <p>
            Abinash Sarangi | Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;