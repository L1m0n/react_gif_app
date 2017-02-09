import * as actionTypes from '../constants/actionTypes';

const collection = (state = [], action) => {
    switch (action.type){
        case actionTypes.ADD_TO_COLLECTION:
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
};

export default collection;