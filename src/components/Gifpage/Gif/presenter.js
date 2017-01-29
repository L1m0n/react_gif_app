import React from 'react';

const Gif = (props) => {

    return (
        <div className="signle-gif" >
            <img src={props.url} alt=""/>
        </div>
    )
};

export default Gif;
