import React from 'react';


const CategoryButtons = ({
	changeCategory,
	getDefault,
	offset=0
}) => {
	return (
	<div className="categories">
			<input 
				className="categories__input categories__input--gifs"
				name="category" 
				type="radio" 
				value="gifs" 
				id="gifs"
				onChange={ (e) => {
					changeCategory(e.target.value)
					getDefault(0, e.target.value)
				}}
			/>
			<label 
				className="categories__label categories__label--gifs"
				htmlFor="gifs">
				<span className="label__svg" dangerouslySetInnerHTML={{__html: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="260px" height="45px" viewBox="0 0 260 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1"><stop stop-color="#A234D5" offset="0%"></stop><stop stop-color="#D74059" offset="100%"></stop></linearGradient><polygon id="path-2" points="1.15463195e-14 39 254 39 254 0 0 1.33226763e-15"></polygon><mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="-3" y="-3" width="260" height="45"><rect x="-3" y="-3" width="260" height="45" fill="white"></rect><use xlink:href="#path-2" fill="black"></use></mask></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="gif_btn" transform="translate(-649.000000, -152.000000)" stroke-width="6" stroke="url(#linearGradient-1)"><g id="header"><g id="btns" transform="translate(652.000000, 152.000000)"><g id="gif-btn_active" transform="translate(0.000000, 3.000000)"><use id="Rectangle-8-Copy" mask="url(#mask-3)" xlink:href="#path-2"></use></g></g></g></g></g></svg>'}} />
				gif
			</label>
			<span className="categories__or">
				OR
			</span>
			<input
				className="categories__input categories__input--stickers" 
				type="radio" 
				name="category" 
				value="stickers" 
				id="stickers"
				onChange={ (e) => {
					changeCategory(e.target.value)
					getDefault(0, e.target.value)
				}}
			/>
			<label 
				className="categories__label categories__label--stickers"
				htmlFor="stickers">
				<span className="label__svg" dangerouslySetInnerHTML={{__html: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="260px" height="45px" viewBox="0 0 260 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1"><stop stop-color="#A234D5" offset="0%"></stop><stop stop-color="#D74059" offset="100%"></stop></linearGradient><polygon id="path-2" points="1.15463195e-14 39 254 39 254 0 0 1.33226763e-15"></polygon><mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="-3" y="-3" width="260" height="45"><rect x="-3" y="-3" width="260" height="45" fill="white"></rect><use xlink:href="#path-2" fill="black"></use></mask></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="gif_btn" transform="translate(-649.000000, -152.000000)" stroke-width="6" stroke="url(#linearGradient-1)"><g id="header"><g id="btns" transform="translate(652.000000, 152.000000)"><g id="gif-btn_active" transform="translate(0.000000, 3.000000)"><use id="Rectangle-8-Copy" mask="url(#mask-3)" xlink:href="#path-2"></use></g></g></g></g></g></svg>'}} />
				stickers
			</label>
		</div>
	)
}
export default CategoryButtons;