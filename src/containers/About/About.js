import React, { Component } from 'react';
import classes from './About.module.css';

import { Container, Row, Col, ResponsiveEmbed, Image, Card } from 'react-bootstrap';

import CoverImage from '../../components/CoverImage/CoverImage';

class About extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount(){
        this.props.updateRef(this.myRef, "AboutRef");
    }
    render(){
        return(
            <Container fluid className={classes.About} ref={this.myRef}>
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
                    <Col md={{offset:1, span:6}}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>About Me</Card.Title>
                            <Card.Body>
                            Namaste 🙏, I am Siddharth Singh and I was born and brought up in India 🇮🇳. 
                            After my 12th grade I came to Singapore 🇸🇬 for further studies. 
                            Currently, I am a graduate with degree in Bachelors of Computer Science from University of Wollongong. 
                            I am passionate about technology and I like to keep myself updated with the new trends and learn new skills. 
                            I enjoy problem-solving and program/debug solutions.
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col md={{offset: 1, span: 3}}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>Journey</Card.Title>
                            <Card.Body>
                                I started out programming when I was a 6th grade high school student. I was quite intrigued by some of 11th grade students doing programming around me. So, I decided to give it a try and learn C and next thing I know, I have deeloped interest for programming.
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={{offset: 1, span: 3}}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>Passion</Card.Title>
                            <Card.Body>
                                My passion for programming motivates me to learn new languages and experiment with different elements. Once, I took a course on Embedded System and Programming and programmed a robot that can move on commands from laptop through bluetooth.

                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={{offset: 1, span: 3}}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.CardTitle}>Hobbies</Card.Title>
                            <Card.Body>
                                During my free time, I like to hang out with my friends, explore new places and different cuisines. 
                                I enjoy bowling and playing cricket.
                                At home, I play e-Sports like PUBG with friends or else Netflix and Chill.
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;