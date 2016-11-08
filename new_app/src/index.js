import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Root from './containers/Root';
import {createStore, applyMiddleware} from 'redux';
import mainReducer from './reducers/reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const initialState = {
	selectedCategory:'gifs',
	data: {}
}

const store = createStore(
	mainReducer,
	initialState,
	applyMiddleware(
		loggerMiddleware,
		thunkMiddleware
	)
)

render (
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('app')
)
