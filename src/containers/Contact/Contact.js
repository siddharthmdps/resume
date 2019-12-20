import React, { Component } from 'react';
import classes from './Contact.module.css';

import { Container, Row, Col, Card } from 'react-bootstrap';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

class Contact extends Component{
    render(){
        return(
            <Container fluid className={classes.Contact}>
                <Row className={["align-items-center", classes.Contact]}>
                    <Col md={6} className={classes.ContactInfo}>
                        <div className={classes.Card}>
                            <GitHubIcon style={{fontSize: '2em'}}/> https://github.com/siddharthmdps
                            <br/>
                            <br/>
                            <LinkedInIcon style={{fontSize: '2em'}}/> http://linkedin.com/in/siddharthsingh98
                            <br/>
                            <br/>
                            <EmailIcon style={{fontSize: '2em'}}/> siddharthmdps@gmail.com
                            <br/>
                            <br/>
                            <PhoneAndroidIcon style={{fontSize: '2em'}}/> +65 84353954
                            <br/>
                            <br/>
                            <CloudDownloadIcon style={{fontSize: '2em'}}/> Resume
                        </div>
                    </Col>
                </Row>                    
            </Container>
        );
    }
}

export default Contact;