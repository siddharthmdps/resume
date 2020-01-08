import React, { Component } from 'react';
import './App.css';

import Navigator from './containers/Navigator/Navigator';
import Banner from './components/Banner/Banner';
import CoverPage from './containers/CoverPage/CoverPage';
import About from './containers/About/About';
import Education from './containers/Education/Education';
import AcademicProjects from './containers/AcademicProjects/AcademicProjects';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';

class App extends Component {

  state = {AboutRef: "", EducationRef: ""};
  updateRef = (Ref, updateID) => {
    let temp = {...this.state};
    console.log(temp);
    temp[updateID] = Ref;
    console.log(temp);
    
    this.setState(temp);
  }
  goToPage = (PageRef) => {
    console.log(this.state[PageRef]);
    if(this.state[PageRef]){
      this.state[PageRef].current.scrollIntoView({ 
         behavior: "smooth", 
         block: "nearest"
      })
  }
  }
  render(){
    return (
      <React.Fragment>
        <CoverPage goToPage = {this.goToPage}/>
        <Banner>About</Banner>
        <About updateRef = {this.updateRef}/>
        {/* <Navigator /> */}
        <Banner>Education</Banner>
        <Education updateRef = {this.updateRef}/>
        <Banner>Academic Projects</Banner>
        <AcademicProjects />
        <Banner>Skills</Banner>
        <Skills />
        <Banner>Contact</Banner>
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
