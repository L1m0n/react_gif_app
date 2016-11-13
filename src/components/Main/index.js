import React from 'react';
import Image from './Image';

require('./Main.scss');

const Main = ({ images, onGifLoadAction}) => {

	const drawImages=()=>{
		let counter = 0;
		let outerData = []
		for (let i = 0; i < 5; i++){
			let col = []
			for (let o = 0; o < 5; o++){
				col.push(
					<Image
						src={images[counter].thumbnail} 
						gif={images[counter].gif}
						key={images[counter].id}
						loaded={images[counter].loaded}
						onLoaded={onGifLoadAction}
						id={images[counter].id}
					/>
				)
				counter++
			}
			outerData.push(<div key={i} className="main__col">{col}</div>)
		}
		return outerData
	}
	return (
		<div className="main">
			{images&&drawImages()
			}
		</div>
	)
}
			/**/

export default Main;
