import React from 'react';

const CategoryButtons = ({}) => {
	return (
		<div className="category-buttons">
			<form>
				<label htmlFor="gifs">
					gifs
					<input type="radio" name="categry" value="gifs" id="gifs"/>
				</label>
				<label htmlFor="stikers">
					stikers
					<input type="radio" name="categry" value="stikers" id="stikers"/>
				</label>
				<label htmlFor="trends">
					trends
					<input type="radio" name="categry" value="trends" id="trends" />	
				</label>
			</form>
		</div>
	)
}
export default CategoryButtons;