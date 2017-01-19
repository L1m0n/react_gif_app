import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import Homepage from './components/Homepage';
import {render} from 'react-dom';
import React from 'react';

const loggerMiddleware = createLogger();

const initialState = {
	selectedCategory:'gifs',
	data: {}
};

const store = createStore(
	reducer,
	initialState,
	applyMiddleware(
		loggerMiddleware,
		thunkMiddleware
	)
);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={Homepage} />
		</Router>
	</Provider>,
    document.getElementById('app')
);

