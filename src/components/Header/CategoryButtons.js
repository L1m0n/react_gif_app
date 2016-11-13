import React from 'react';

const CategoryButtons = ({
	changeCategory,
	defaultStickers,
	offset=0
}) => {
	return (
	<div className="category-buttons">
			<label htmlFor="gifs">
				gifs
				<input 
					type="radio" 
					name="category" 
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
					name="category" 
					value="stickers" 
					id="stickers"
					onChange={ (e) => {
						changeCategory(e.target.value)
						defaultStickers(0)
					}}
				/>
			</label>
		</div>
	)
}
export default CategoryButtons;