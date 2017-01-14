import {CHANGE_STATUS} from '../constants/actionTypes';

const changeLoadedStatus = (id) =>{
    return {
        type: CHANGE_STATUS,
        id
    }
};

export default changeLoadedStatus;