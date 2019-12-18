import React from 'react';
import classes from './App.module.css';

import Banner from './components/Banner/Banner';
import CoverPage from './containers/CoverPage/CoverPage';
import About from './containers/About/About';

function App() {
  return (
    <React.Fragment>
      <CoverPage />
      <Banner Heading="Abput" />
      <About />
    </React.Fragment>
  );
}

export default App;
