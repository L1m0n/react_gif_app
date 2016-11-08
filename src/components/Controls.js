import React from 'react';

const Controls = ({submitForm}) => {
	let input
	render(
		<div className="controls">
			<form onSubmit={(e) => {
				e.prevntDevfault()
				submitForm(input.value)
			}}>
				<input ref={node => input = node} type="text" placeholder="Type something..." />
				<button type="submit">
					find
				</button>
			</form>
		</div>
	)
}

export default Controls