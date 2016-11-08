import React from 'react';
require('./Image.css');

const Image = ({ src, gif, loaded, id, onLoad }) => (
	<div className={loaded? "image-container" : "image-container show-spiner"}>
		<img className="image__thumbnail" src={src} role="presentation"/>
		<img className="image__gif" onLoad={onLoad(id)} src={gif} role="presentation"/>
	</div>
)

export default Image;