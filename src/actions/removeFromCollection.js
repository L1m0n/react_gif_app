import {REMOVE_FROM_COLLECTION} from '../constants/actionTypes';

const removeFromCollection = (id) => {
    return{
        type: REMOVE_FROM_COLLECTION,
        id
    }
};

export default removeFromCollection;
