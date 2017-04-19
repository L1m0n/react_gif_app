import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import SignInPage from './components/SignInPage';
import configureStore from './config/configureStore'
import Collection from './components/Collection';
import SignUpPage from './components/SignUpPage';
import Homepage from './components/Homepage';
import Gifpage from './components/Gifpage';
import {Provider} from 'react-redux';
import App from './components/App';
import {render} from 'react-dom';
import React from 'react';

const initialState = {
	app: {
        selectedCategory:'gifs',
        data: {},
		gif :{}
	}
};



const persistedState = localStorage.getItem('app') ? JSON.parse(localStorage.getItem('app')) : initialState;

const store = configureStore(persistedState);
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(()=>{
	localStorage.setItem('app', JSON.stringify(store.getState()))
});

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App} >
				<IndexRoute component={Homepage} />
				<Route path='/' component={Homepage} />
				<Route path='/collection' component={Collection} />
				<Route path='/gifpage' component={Gifpage} />
				<Route path='/registration' component={SignUpPage} />
				<Route path='/login' component={SignInPage} />
			</Route>
		</Router>
	</Provider>,
    document.getElementById('app')
);

