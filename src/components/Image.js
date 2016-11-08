import React from 'react';
require('./Image.css');

const Image = ({ src, gif, loaded, id, onLoaded }) => (
	<div className={loaded? "image-container" : "image-container show-spiner"}>
		<img className="image__thumbnail" src={src} role="presentation"/>
		<img className="image__gif"  src={gif} onLoad={()=> onLoaded(id)} role="presentation"/>
	</div>
)

export default Image;