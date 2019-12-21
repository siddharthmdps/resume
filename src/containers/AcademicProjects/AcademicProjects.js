import React, { Component } from 'react';
import classes from './AcademicProjects.module.css';

import { Container } from 'react-bootstrap';

import Timeline from '../../components/Timeline/Timeline';

const ProjectList = [
        {
            Title: "Pegasus: A SIM Online Recruitment using Cloud Computing", 
            SubTitle: "", 
            Date: "Jul 2019 – Dec 2019", 
            Description: " Led a team of 6 members to develop a full-stack recruitment website as the final year project. The website was built using React, Bootstrap, Express, AWS RDS, AWS EC2 etc."
        }, 
        {
            Title: "Chords System", 
            SubTitle: "", 
            Date: "Jul 2019 – Sep 2019", 
            Description: " Simulated Chords to demonstrate scalability & efficiency using structured peer-to-peer architecture in C++."
        },
        {
            Title: "War of Greek God Game", 
            SubTitle: "", 
            Date: "Apr 2018 – Jun 2018", 
            Description: " A Java game was developed in 4 different versions, game card inventory management, CLI based game, GUI based Game and a broadcaster system using threads and networking."
        },
        {
            Title: "Maze Solver", 
            SubTitle: "", 
            Date: "Jan 2018 – Mar 2018", 
            Description: " A bot to solve a maze in C++ using advanced algorithms according to the description provided in Assignment."
        },
        {
            Title: "Book Inventory shell program", 
            SubTitle: "", 
            Date: "Jan 2018 – Mar 2018", 
            Description: " A bash script was developed to maintain an inventory where user can add/remove/update/search/sell a book. In addition to these features, user can generate a summary report, sort the summary and search using keywords."
        },
        {
            Title: "Inventory System Development", 
            SubTitle: "", 
            Date: "Jan 2018 – Mar 2018", 
            Description: " Lead a group of 6 teammates to design an inventory system to showcase RUP model, versioning system and provide a detailed report including business case, plans, requirements, risks, UML diagrams, etc."
        },
];

class AcademicProjects extends Component{
    render(){
        return(
            <Container fluid className={classes.AcademicProjects}>
                    <Timeline Timeline={{List: ProjectList}} />
            </Container>
        );
    }
}

export default AcademicProjects;