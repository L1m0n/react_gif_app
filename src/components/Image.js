import React, {Component} from 'react';
require('./Image.css');

const Image = ({ src, gifSrc, loaded }) => (
	<div className="image-container">
		<img className="image__thumbnail" src={src} />
		<img className="image__gif" onLoad={e=>console.log(loaded)} src={gifSrc} />
	</div>
)

export default Image;