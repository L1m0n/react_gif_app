import React from 'react';
import SearchForm from './SearchForm';
import NavigationButtons from './NavigationButtons';
import CategoryButtons from './CategoryButtons';
require('./Header.scss');

const Header = ({
	getDefaultStickers,
	selectedCategory, 
	changeCategory,
	showDefault,
	prevDefault,
	nextDefault,
	submitForm, 
	offset=0, 
	query="", 
	count, 
	next, 
	prev
}) => {
	return(
		<div className="controls">
			<CategoryButtons
				defaultStickers={getDefaultStickers}
				changeCategory={changeCategory}
				offset={offset} 
			/>
			<SearchForm
				category={selectedCategory}
				onSubmit={submitForm} 
			/>
			<NavigationButtons
				category={selectedCategory}
				showDefault={showDefault}
				prevDefault={prevDefault}
				nextDefault={nextDefault}
				offset={offset}
				query={query}
				count={count}
				prev={prev}
				next={next}
			/>
		</div>
	)
}

export default Header