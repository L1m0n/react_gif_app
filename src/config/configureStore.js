import {routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger();
const router = routerMiddleware(browserHistory);



const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, router, logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
