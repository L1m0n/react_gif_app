import * as actionTypes from '../constants/actionTypes';
import { routerReducer } from 'react-router-redux';
import {combineReducers } from 'redux';
import collection from './collection';
import items from './items';
import user from './user';
import notifications from './notifications';

const  reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            return Object.assign({}, state, {
                selectedCategory: action.category
            });
        case actionTypes.RECIVE_DATA:
            return Object.assign({}, state, {
                data:action.json
            });
        case actionTypes.CHANGE_STATUS:
            return Object.assign({}, state, {
                data:{
                    ...state.data,
                    items: items(state.data.items, action)
                }
            });
        case actionTypes.SHOW_GIF:
            return Object.assign({}, state, {
                gif: action.gif
            });
        default:
            return state
    }
};

export default combineReducers({
    notifications,
    user,
    collection,
    app:reducer,
    routing: routerReducer
});
