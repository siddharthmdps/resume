import React from 'react';
import classes from './App.module.css';

import Banner from './components/Banner/Banner';
import CoverPage from './containers/CoverPage/CoverPage';
import About from './containers/About/About';
import Education from './containers/Education/Education';

function App() {
  return (
    <React.Fragment>
      <CoverPage />
      <Banner Heading="About" />
      <About />
      <Education />
    </React.Fragment>
  );
}

export default App;
