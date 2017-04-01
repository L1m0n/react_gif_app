import React from 'react';

const RemoveFromCollection = (props) => {
    const styles = {
        fontFamily:'Montserrat, sans-serif',
        cursor:'pointer',
        display:'block',
        color:'white'
    };
    return(
        <span
            style={styles}
            onClick={()=>props.onClick()}
        >
            Remove from collection
        </span>
    );
};

export default RemoveFromCollection;