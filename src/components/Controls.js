import React from 'react';
import SearchForm from './SearchForm';
import NavigationButtons from './NavigationButtons';

const Controls = ({submitForm, selectedCategory, offset=0},) => {
	return(
		<div className="controls">
			<SearchForm
				onSubmit={submitForm} 
				category={selectedCategory}
			/>
			<NavigationButtons
/*				prev={}
				next={}
				offset={offset}
				query={}
				count={}*/ 
			/>
		</div>
	)
}

export default Controls