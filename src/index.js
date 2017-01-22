import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './config/configureStore'
import Homepage from './components/Homepage';
import {Provider} from 'react-redux';
import Test from './components/Test';
import {render} from 'react-dom';
import React from 'react';
import App from './components/App';

const initialState = {
	app: {
        selectedCategory:'gifs',
        data: {}
	}
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App} >
				<IndexRoute component={Homepage} />
				<Route path='/' component={Homepage} />
				<Route path='/test' component={Test} />
			</Route>
		</Router>
	</Provider>,
    document.getElementById('app')
);

