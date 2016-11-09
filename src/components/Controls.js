import React from 'react';
import SearchForm from './SearchForm';
import NavigationButtons from './NavigationButtons';
import CategoryButtons from '../components/CategoryButtons';

const Controls = ({submitForm, selectedCategory, offset=0, count, query="", next, prev, changeCategory}) => {
	return(
		<div className="controls">
			<SearchForm
				onSubmit={submitForm} 
				category={selectedCategory}
			/>
			<NavigationButtons
				prev={prev}
				next={next}
				offset={offset}
				query={query}
				count={count}
				category={selectedCategory}
			/>
			<CategoryButtons
				changeCategory={changeCategory} 
			/>
		</div>
	)
}

export default Controls