import React, { Component } from 'react';
import classes from './CoverPage.module.css';

import CoverImage from '../../components/CoverImage/CoverImage';

import { Container, Row, Col, ResponsiveEmbed, Image } from 'react-bootstrap';

class CoverPage extends Component{

    render(){
        return(
            <Container fluid className={classes.CoverPage}>
                <Row>
                    <Col md={8}>
                        <CoverImage />
                    </Col>
                </Row>
                <Row>
                    <Col md={{offset:1, span:3}} className={classes.CoverImage}>
                    <ResponsiveEmbed aspectRatio="1by1">
                            <Image src="./Photo.jpeg" className={classes.Image} />
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default CoverPage;