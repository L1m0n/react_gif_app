import * as actionTypes from '../constants/actionTypes';

const collection = (state = {}, action) => {
    switch (action.type){
        case actionTypes.ADD_TO_COLLECTION:
            return {
                ...state,
                [action.item.id] : action.item
            };
        case actionTypes.REMOVE_FROM_COLLECTION:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default collection;