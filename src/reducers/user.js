import * as actionTypes from '../constants/actionTypes';

const user = (state = {}, action) => {
    switch (action.type) {
        case (actionTypes.SET_USER):
            return Object.assign({}, action.user);
        default:
            return state;
    }
}

export default user;
