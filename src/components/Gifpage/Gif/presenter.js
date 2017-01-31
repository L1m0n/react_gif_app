import SharePanel from '../SharePanel';
import React from 'react';

const Gif = (props) => {

    return (
        <div className="signle-gif" >
            <SharePanel url={props.url} fb={props.fbUrl} />
            <img src={props.url} alt=""/>
        </div>
    )
};

export default Gif;
