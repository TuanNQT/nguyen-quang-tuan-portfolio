// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useScroll';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  useSmoothScroll();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 scroll-smooth transition-colors duration-300">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
