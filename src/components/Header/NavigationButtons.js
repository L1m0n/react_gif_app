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
			className="navigation__button navigation__button--prev" 
			disabled={ offset===0 } 
			onClick={
				showDefault?
				()=>prevDefault(offset-count) :
				()=>prev(offset-count, category, query) 
			}>
			PREV
		</button>
		<button
			className="navigation__button navigation__button--next" 
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