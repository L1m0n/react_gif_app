import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
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
		<App />
	</Provider>,
	document.getElementById('app')
)
