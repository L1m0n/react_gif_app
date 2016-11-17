import React from 'react';
import SearchForm from './SearchForm';
import NavigationButtons from './NavigationButtons';
import CategoryButtons from './CategoryButtons';
require('./Header.scss');

const Header = ({
	getDefault,
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
		<div className="header-wrapper">
			<div className="header">
				<div className="logo">
					<img src="logo.svg" alt="Logo"/>
				</div>	
				<CategoryButtons
					getDefault={getDefault}
					changeCategory={changeCategory}
					offset={offset} 
				/>
				<SearchForm
					category={selectedCategory}
					onSubmit={submitForm} 
				/>
			</div>
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