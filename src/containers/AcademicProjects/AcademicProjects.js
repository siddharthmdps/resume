import React, { Component } from 'react';
import classes from './AcademicProjects.module.css';

import { Container } from 'react-bootstrap';

import Timeline from '../../components/Timeline/Timeline';

import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';

class AcademicProjects extends Component{
    render(){
        return(
            <Container fluid className={classes.AcademicProjects}>
                    <Timeline Timeline={{Icon: <SchoolIcon />, List: [{Title: "Pegasus: A SIM Online Recruitment using Cloud Computing", SubTitle: "University of Wollongong", Date: "Jul 2019 – Dec 2019", Description: " Led a team of 6 members to develop a full-stack recruitment website as the final year project. The website was built using React, Bootstrap, Express, AWS RDS, AWS EC2 etc."}, {Title: "Pegasus: A SIM Online Recruitment using Cloud Computing", SubTitle: "University of Wollongong", Date: "Jul 2019 – Dec 2019", Description: " Led a team of 6 members to develop a full-stack recruitment website as the final year project. The website was built using React, Bootstrap, Express, AWS RDS, AWS EC2 etc."}]}} />
            </Container>
        );
    }
}

export default AcademicProjects;