import React from 'react';
import Gif from './Gif';
require('./assets/styles.scss');
import {browserHistory} from 'react-router';

const Gifpage = () => {
    let back = (e) => {
        if(e.target.classList.contains('gif-page') ) {
            //browserHistory.push('/');
            browserHistory.goBack();
        }
    };
    return(
        <div className="gif-page" onClick={(e)=>{back(e)}}>
            <Gif/>
        </div>
    )
};

export default Gifpage;