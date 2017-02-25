import AddToColection from './AddToCollection';
import SharePanel from '../SharePanel';
import React from 'react';

const Gif = (props) => {

    return (
        <div className="signle-gif" >
            <SharePanel url={props.gif.url} fb={props.gif.fbUrl} />
            <img src={props.gif.url} alt=""/>
            <AddToColection onClick={()=>{
                props.add(props.gif)
            }}/>
        </div>
    )
};

export default Gif;
