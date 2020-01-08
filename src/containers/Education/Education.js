import React, { Component } from 'react';
import classes from './Education.module.css';

import { Container } from 'react-bootstrap';

import Timeline from '../../components/Timeline/Timeline';

const EducationList = [
    {
        Title: "Bachelor of Computer Science", 
        SubTitle: "University of Wollongong", 
        Date: "July 2017 - Dec 2019", 
        Description: ` 
Weighted Average Marks (WAM) – 84.2/100 
Dean’s Merit Award 2017 – For achieving a WAM of 85 and above`
    }, 
    {
        Title: "Diploma in Infocomm. Technology", 
        SubTitle: "PSB Academy", 
        Date: "July 2016 - Apr 2017", 
        Description: `
GPA – 3.9/4.0
Scholarship Award 2016 – PSB Academy Scholarship Test`
    }
];

class Education extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    // componentDidMount(){
    //     this.props.updateRef(this.myRef, "EducationRef");
    // }
    render(){
        return(
            <Container fluid className={classes.Education} ref={this.myRef}>
                    <Timeline Timeline={{ List: EducationList}} />
            </Container>
        );
    }
}

export default Education;