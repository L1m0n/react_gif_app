import * as actionTypes from '../constants/actionTypes';

const initialState = {
    email_exist: false,
    register_success: false
}

const notifications = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SHOW_HIDE_NOTIFICATION):
            return Object.assign({}, {
                ...state,
                [action.notification]: !state[action.notification]
            });
        default:
            return state;
    }
}

export default notifications;