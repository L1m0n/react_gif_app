import React from 'react';

const SharePanel = (props) => {

    let share,
        copy;
    share = () => {
        return open('https://www.facebook.com/sharer/sharer.php?u=' + props.fb, 'Share on Facebook', 'width=600px, height=500px');
    };

    copy = (e) => {
        e.target.querySelector('input').select();
        document.execCommand('copy');
    };

    return (
        <div className="share-panel">
            <span
                onClick={(e)=>{copy(e)}}
                className="share-panel__button share-panel__button--copy"
            >
                Copy link
                <input className="share-panel__input" readOnly type="text" value={props.url} />
            </span>
            <a
                href={props.url}
                download={'gif-hub'+1+'.gif'}
                target="_blank"
                className="share-panel__button share-panel__button--download"
            >
                Download
            </a>
            <span
                onClick={()=>{share()}}
                className="share-panel__button share-panel__button--fb"
            >
                Share on facebook
            </span>
            <span
                className="share-panel__button share-panel__button--add"
            >
                Add to collection
            </span>
        </div>
    )
};

export default SharePanel;