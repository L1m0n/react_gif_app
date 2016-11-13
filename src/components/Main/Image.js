import React from 'react';


const Image = ({ src, gif, loaded, id, onLoaded }) => (
	<div className={loaded? "image-container" : "image-container show-spiner"}>
		<img className="image__thumbnail" src={src} role="presentation"/>
		<img className="image__gif"  src={gif} onLoad={()=> onLoaded(id)} role="presentation"/>
		<div className="spinner__wrapper">
			<div className="spinner">
			  <div className="bounce1"></div>
			  <div className="bounce2"></div>
			  <div className="bounce3"></div>
			</div>
		</div>	
	</div>
)

export default Image;