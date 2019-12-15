import React, { Component } from 'react';
import classes from './CoverPage.module.css';

import CoverImage from '../../components/CoverImage/CoverImage';

class CoverPage extends Component{

    render(){
        return(
            <div className={classes.CoverPage}>
                <div className={classes.Content}>
                    <CoverImage />
                </div>
            </div>
        );
    }

}

export default CoverPage;