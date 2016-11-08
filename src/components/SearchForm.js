import React from 'react';

const SearchForm = ({ onSubmit, category }) => {
	let input
	return (
		<div className="search-form">
			<form onSubmit={(evt) => {
				evt.preventDefault()
				onSubmit(0, category, input.value, )
				input.value = ""
			}}>
				<input ref={node => input = node} type="text" placeholder="Type something..." />
				<button type="submit">
					find
				</button>
			</form>
		</div>
	)
}

export default SearchForm