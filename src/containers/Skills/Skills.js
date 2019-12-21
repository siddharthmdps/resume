import React, { Component } from 'react';
import classes from './Skills.module.css';

import { Container, Card } from 'react-bootstrap';

import Button from '../../components/Button1/Button1';

const SkillsList = {
    "Programming Languages": ["JavaScript", "Java", "C#", "C++", "C", "Bash"],
    "Web": ["React", "HTML5", "CSS3", "Bootstrap5", "jQuery", "Ajax", "AWS"],
    "Database": ["SQL", "MongoDB"],
    "Others": ["Embedded System and Robotics Programming", "Internet-of-Things"],
    "Software and Tools": ["GitHub", "Visual Studio Code", "Eclipse", "VMWare", "Brackets", "ArgoUML"],
    "Operating System": ["MacOS", "Windows", "Linux"]
};


class Skills extends Component{
    
    keys = Object.keys(SkillsList);

    render(){
        return(
            <Container fluid className={classes.Skills}>
                <Card className={classes.Card}>
                <div>
                    {this.keys.map(key => (
                        <React.Fragment>
                        <h1>{key}</h1>
                        {SkillsList[key].map(items => (
                            <Button>{items}</Button>
                        ))}
                        <br/>           
                        <br/>           
                        </React.Fragment>             
                    ))}                
                </div>
                </Card>
            </Container>
        );
    }
}

export default Skills;