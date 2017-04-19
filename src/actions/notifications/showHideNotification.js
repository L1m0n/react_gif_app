import {SHOW_HIDE_NOTIFICATION} from '../../constants/actionTypes';

const showHideNotification = (notification) => {
    return{
        type: SHOW_HIDE_NOTIFICATION,
        notification
    }
};

export default showHideNotification;
