import React from 'react';

const NavigationButtons = ({ query, category, offset, count, prev, next }) => (
	<div className="navigation">
		<button onClick={()=>prev(offset-count, category, query) } disabled={ offset===0 } >
			PREV
		</button>
		<button onClick={()=>prev(offset+count, category, query) }>
			NEXT
		</button>
	</div>
)

export default NavigationButtons;