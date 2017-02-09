import React from 'react';

const AddToCollection = (props) => {
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
            Add to collection
        </span>
    );
};

export default AddToCollection;