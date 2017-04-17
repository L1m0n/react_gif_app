import {SET_USER} from '../../constants/actionTypes';

const addToCollection = (user) => {
    return{
        type: SET_USER,
        user
    }
};

export default addToCollection;
