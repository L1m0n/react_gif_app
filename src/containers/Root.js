import React from 'react';
import ImagesContainer from './ImagesContainer';
import ControlsContainer from './ControlsContainer';
import CategoryButtons from '../components/CategoryButtons'
//import App from './App';

const Root = () => (
	<div>
		<CategoryButtons />
		<ControlsContainer />
		<ImagesContainer />
	</div>
)

export default Root;