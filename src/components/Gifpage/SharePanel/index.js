import React from 'react';

const SharePanel = (props) => {
    return (
        <div className="share-panel">
            <button className="share-panel__button">
                Copy link
            </button>
            <button className="share-panel__button">
                Download
            </button>
            <button className="share-panel__button">
                Share on facebook
            </button>
        </div>
    )
};

export default SharePanel;