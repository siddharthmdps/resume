import React from 'react';
import classes from './Timeline.module.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';

const timeline = props =>(
    <VerticalTimeline className={classes.verticalTimeline}>

        {props.Timeline.List.map(TimelineElement => (

            <VerticalTimelineElement
                className={classes.EduTab}
                contentStyle={{
                    background: 'rgba(0, 0, 0, 0.4)', color: 'white', borderTop: '3px solid #00FF99',
                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                }}
                contentArrowStyle={{ borderRight: '7px solid  #00FF33' }}
                date={TimelineElement.Date}
                iconStyle={{ background: '#00FF99', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3>{TimelineElement.Title}</h3>
                <h4>{TimelineElement.SubTitle}</h4>
                <p>
                    {TimelineElement.Description}
                </p>
            </VerticalTimelineElement>
        ))}           

        <VerticalTimelineElement
        iconStyle={{ background: '#9900FF', color: '#fff' }}
        icon={<StarIcon />}
        />
        
    </VerticalTimeline>
);

export default timeline;