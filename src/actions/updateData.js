import {UPDATE_DATA} from '../constants/actionTypes';

const updateData = (json) => {
    return{
        type:UPDATE_DATA,
        json
    }
};

export default updateData;