import React, { Component } from 'react';
import classes from './About.module.css';

import { Container, Row, Col, ResponsiveEmbed, Image, Card } from 'react-bootstrap';

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
                <br/>
                <br/>
                <Row>
                    <Col md={{offset:1, span:3}}>
                        <ResponsiveEmbed aspectRatio="1by1">
                            <Image src="./Photo.jpeg" className={classes.Image} />
                        </ResponsiveEmbed>
                    </Col>
                    <Col md={{offset:1, span:6}} className={classes.AboutMe}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>About Me</Card.Title>
                            <Card.Body>
                                Namaste <span role="img" aria-label="">🙏</span>, I am a graduate from University of Wollongong. I finished my Bachelors in Computer Science.

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col md={{offset: 1, span: 3}} className={classes.AboutMe}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>About Me</Card.Title>
                            <Card.Body>
                                Namaste <span role="img" aria-label="">🙏</span>, I am a graduate from University of Wollongong. I finished my Bachelors in Computer Science.

                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={{offset: 1, span: 3}} className={classes.AboutMe}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>About Me</Card.Title>
                            <Card.Body>
                                Namaste <span role="img" aria-label="">🙏</span>, I am a graduate from University of Wollongong. I finished my Bachelors in Computer Science.

                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={{offset: 1, span: 3}} className={classes.AboutMe}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>About Me</Card.Title>
                            <Card.Body>
                                Namaste <span role="img" aria-label="">🙏</span>, I am a graduate from University of Wollongong. I finished my Bachelors in Computer Science.

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;