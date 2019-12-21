import React from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import CoverPage from './containers/CoverPage/CoverPage';
import About from './containers/About/About';
import Education from './containers/Education/Education';
import AcademicProjects from './containers/AcademicProjects/AcademicProjects';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <React.Fragment>
      <CoverPage />
      <Banner>About</Banner>
      <About />
      <Banner>Education</Banner>
      <Education />
      <Banner>Academic Projects</Banner>
      <AcademicProjects />
      <Banner>Skills</Banner>
      <Skills />
      <Banner>Contact</Banner>
      <Contact />
    </React.Fragment>
  );
}

export default App;
