import React from 'react';

const NavigationButtons = ({ 
	showDefault,
	nextDefault,
	prevDefault,
	category, 
	offset, 
	query, 
	count,
	prev, 
	next 
}) => (
	<div className="navigation">
		<button 
			disabled={ offset===0 } 
			onClick={
				showDefault?
				()=>prevDefault(offset-count) :
				()=>prev(offset-count, category, query) 
			}>
			PREV
		</button>
		<button 
			onClick={
				showDefault?
				()=>nextDefault(offset+count) :
				()=>next(offset+count, category, query) 
			}>
			NEXT
		</button>
	</div>
)

export default NavigationButtons;