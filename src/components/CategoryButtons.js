import React from 'react';

const CategoryButtons = ({changeCategory}) => {
	return (
	<div className="category-buttons">
			<label htmlFor="gifs">
				gifs
				<input 
					type="radio" 
					name="categry" 
					value="gifs" 
					id="gifs"
					onChange={ (e) => {
						changeCategory(e.target.value)
					}}
				/>
			</label>
			<label htmlFor="stickers">
				stickers
				<input 
					type="radio" 
					name="categry" 
					value="stickers" 
					id="stikers"
					onChange={ (e) => {
						changeCategory(e.target.value)
					}}
				/>
			</label>
			<label htmlFor="trends">
				trends
				<input 
					type="radio" 
					name="categry" 
					value="trends" 
					id="trends"
					onChange={ (e) => {
						changeCategory(e.target.value)
					}} 
				/>	
			</label>
		</div>
	)
}
export default CategoryButtons;