import React from 'react';
import SearchForm from './SearchForm';
import NavigationButtons from './NavigationButtons';

const Controls = ({submitForm, selectedCategory, offset=0, count, query, next, prev}) => {
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
		</div>
	)
}

export default Controls