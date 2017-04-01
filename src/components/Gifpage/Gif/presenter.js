import AddToCollection from './AddToCollection';
import RemoveFromCollection from './RemoveFromCollection';
import SharePanel from '../SharePanel';
import React from 'react';

const Gif = (props) => {

    return (
        <div className="signle-gif" >
            <SharePanel url={props.gif.url} fb={props.gif.fbUrl} />
            <img src={props.gif.url} alt=""/>
            {props.collection[props.gif.id] ?
                <RemoveFromCollection onClick={()=>{ props.remove(props.gif.id) }}/> :
                <AddToCollection onClick={()=>{ props.add(props.gif) }}/>
            }
        </div>
    )
};

export default Gif;
