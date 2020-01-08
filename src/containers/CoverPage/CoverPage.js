import React, { Component } from 'react';
import classes from './CoverPage.module.css';

import { Container, Row, Col } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class CoverPage extends Component{

    render(){
        return(
            <Container fluid className={classes.CoverPage}>
                <Row>
                    <Col md={{offset:1, span:3}} className={classes.CoverImage}>
                    </Col>
                    <Col md={{offset:2, span:5}} className={classes.Introduction}>
                        HI, I'M 
                        <br/>
                        <span style={{fontWeight: 'bolder'}}> SIDDHARTH SINGH </span>                    
                        <br/>
                        <span style={{textDecoration: 'line-through'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style={{fontWeight: 'bolder'}}> Developer </span>
                        <span style={{textDecoration: 'line-through'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <br/>
                        <br/>
                        <span style={{fontWeight: 'bolder'}}> Welcome to my website </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={{offset:6, span:5}} className={classes.More}>
                        <ExpandMoreIcon style={{ fontSize: '2em'}} onClick={()=>{ this.props.goToPage("AboutRef")}}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default CoverPage;