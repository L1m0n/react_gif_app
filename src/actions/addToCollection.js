import {ADD_TO_COLLECTION} from '../constants/actionTypes';

const addToCollection = (item) => {
    return{
        type: ADD_TO_COLLECTION,
        item
    }
};

export default addToCollection;
