import {RECIVE_DATA} from '../constants/actionTypes';

const reciveData = (json) => {
    return {
        type:RECIVE_DATA,
        json
    }
};

export default reciveData;