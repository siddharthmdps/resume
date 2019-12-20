import React from 'react';
import classes from './App.module.css';

import Banner from './components/Banner/Banner';
import CoverPage from './containers/CoverPage/CoverPage';
import About from './containers/About/About';
import Education from './containers/Education/Education';
import AcademicProjects from './containers/AcademicProjects/AcademicProjects';

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
    </React.Fragment>
  );
}

export default App;
