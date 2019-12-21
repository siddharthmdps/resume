import React, { Component } from 'react';
import classes from './Education.module.css';

import { Container } from 'react-bootstrap';

import Timeline from '../../components/Timeline/Timeline';


class Education extends Component{
    render(){
        return(
            <Container fluid className={classes.Education}>
                    <Timeline Timeline={{ List: [{Title: "Bachelor of Computer Science", SubTitle: "University of Wollongong", Date: "July 2017 - Dec 2019", Description: " Digital System Security"}, {Title: "Bachelor of Computer Science", SubTitle: "University of Wollongong", Date: "July 2017 - Dec 2019", Description: " Digital System Security"}]}} />
            </Container>
        );
    }
}

export default Education;