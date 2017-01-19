import * as actionTypes from '../constants/actionTypes';
import updateData from './updateData';
import items from './items';

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
        case actionTypes.UPDATE_DATA:
            return Object.assign({}, state, {
                ...state,
                data:updateData(state.data, action.json)
            });
        case actionTypes.CHANGE_STATUS:
            return Object.assign({}, state, {
                data:{
                    ...state.data,
                    items: items(state.data.items, action)
                }
            });
        default:
            return state
    }
};

export default reducer;