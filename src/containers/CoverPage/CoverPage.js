import React, { Component } from 'react';
import classes from './CoverPage.module.css';

import CoverImage from '../../components/CoverImage/CoverImage';

class CoverPage extends Component{

    render(){
        return(
            <div className={classes.CoverPage}>
                Hi, I am 
                    <CoverImage />
            </div>
        );
    }

}

export default CoverPage;