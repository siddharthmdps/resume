import React, { Component } from 'react';
import classes from './About.module.css';

import { Container, Row, Col, ResponsiveEmbed, Image } from 'react-bootstrap';

import CoverImage from '../../components/CoverImage/CoverImage';

class About extends Component{
    render(){
        return(
            <Container fluid className={classes.About}>
                <Row>
                    <Col md={8}>
                        <CoverImage />
                    </Col>
                </Row>
                <Row>
                    <Col md={{offset:1, span:3}}>
                        <ResponsiveEmbed aspectRatio="1by1">
                            <Image src="./Photo.jpeg" className={classes.Image} />
                        </ResponsiveEmbed>
                    </Col>
                    <Col md={{offset:1, span:6}} className={classes.AboutMe}>
                    Abput Me
                    <br/>
                    Namaste 🙏, I am a graduate from University of Wollongong. I finished my Bachelors in Computer Science.
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;