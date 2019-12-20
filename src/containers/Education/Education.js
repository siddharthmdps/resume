import React, { Component } from 'react';
import classes from './Education.module.css';

import { Container, Row, Col } from 'react-bootstrap';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';

class Education extends Component{
    render(){
        return(
            <Container fluid className={classes.Education}>
                <Row>
                    <Col>
                    <VerticalTimeline className={classes.verticalTimeline}>
                    
                            <VerticalTimelineElement
                                className={classes.EduTab}
                                contentStyle={{
                                    background: 'rgba(0, 0, 0, 0.4)', color: 'white', borderTop: '3px solid #00FF99',
                                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  #00FF33' }}
                                date={"educationDetail.StartDate" + " - " + "educationDetail.EndDate"}
                                iconStyle={{ background: '#00FF99', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{"educationDetail.Degree" + " in " +
                                    "educationDetail.FieldOfStudy" + " (" +
                                    "educationDetail.Major" + ")"}</h3>
                                <p>
                                    {"educationDetail.University"}
                                    <br />
                                    {"educationDetail.GPA"}
                                </p>
                            </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: '#9900FF', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Education;