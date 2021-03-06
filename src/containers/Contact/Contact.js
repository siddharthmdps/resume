import React, { Component } from 'react';
import classes from './Contact.module.css';

import { Container, Row, Col, Card } from 'react-bootstrap';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DescriptionIcon from '@material-ui/icons/Description';

class Contact extends Component{
    render(){
        return(
            <Container fluid className={classes.Contact}>
                <Row className={["align-items-center", classes.Contact]}>
                    <Col sm={12} md={6} className={classes.ContactInfo}>
                        <Card className={classes.Card}>
                            <div className={classes.Links} onClick={()=>{window.open('https://github.com/siddharthmdps', '_blank')}}><GitHubIcon style={{fontSize: '2em'}}/> https://github.com/siddharthmdps</div> 
                            <div className={classes.Links} onClick={()=>{window.open('http://linkedin.com/in/siddharthsingh98', '_blank')}}><LinkedInIcon style={{fontSize: '2em'}}/> http://linkedin.com/in/siddharthsingh98</div>
                            <div className={classes.Links} onClick={()=>{window.open('mailto:siddharthmdps@gmail.com')}}><EmailIcon style={{fontSize: '2em'}}/> siddharthmdps@gmail.com</div>
                            <div className={classes.Links} onClick={()=>{window.open('tel:+6584353954')}}><PhoneAndroidIcon style={{fontSize: '2em'}}/> +65 84353954</div>
                            <div className={classes.Links} onClick={()=>{window.open('https://drive.google.com/file/d/1Yn2D2BH_XRFm-oTqBf7-iS1ER8Z3AMm2/view?usp=sharing', '_blank')}}><DescriptionIcon style={{fontSize: '2em'}}/> Resume</div>
                        </Card>
                    </Col>
                </Row>                    
            </Container>
        );
    }
}

export default Contact;