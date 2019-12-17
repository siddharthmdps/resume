import React from 'react';
import classes from './CoverImage.module.css';

import { Image } from 'react-bootstrap';

const coverImage = props => (
    <React.Fragment>
        <div className={classes.Image}>
            <Image src="coverlogo.jpeg" className={classes.Image}/>
        </div>
    </React.Fragment>

);

export default coverImage;