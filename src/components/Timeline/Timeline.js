import React from 'react';
import classes from './Timeline.module.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';

const animate = window.screen.width>992;

const timeline = props =>(
    <VerticalTimeline className={classes.verticalTimeline} animate={animate}>

        {props.Timeline.List.map(TimelineElement => (

            <VerticalTimelineElement
                className={classes.EduTab}
                contentStyle={{
                    background: 'rgba(0, 0, 0, 0.8)', color: '#00FF99', borderTop: '3px solid #00FF99',
                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                }}
                contentArrowStyle={{ borderRight: '7px solid  #00FF33' }}
                date={TimelineElement.Date}
                iconStyle={{ background: '#00FF99', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3>{TimelineElement.Title}</h3>
                <h4>{TimelineElement.SubTitle}</h4>
                <div>
                    <pre className={classes.Description}>
                        {TimelineElement.Description}
                    </pre>
                </div>
            </VerticalTimelineElement>
        ))}           

        <VerticalTimelineElement
        iconStyle={{ background: '#9900FF', color: '#fff' }}
        icon={<CodeIcon />}
        />
        
    </VerticalTimeline>
);

export default timeline;