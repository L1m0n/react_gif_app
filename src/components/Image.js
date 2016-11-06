import React, {Component} from 'react';
require('./Image.css');

const Image = ({ src, gifSrc }) => (
	<div className="image-container">
		<img className="image__thumbnail" src={src} />
		<img className="image__gif" src={gifSrc} />
	</div>
)

export default Image;