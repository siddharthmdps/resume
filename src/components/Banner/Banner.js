import React from 'react';
import classes from './Banner.module.css';

const banner = props => (
    <div className={classes.Banner}>
        {props.children}
    </div>
);

export default banner;