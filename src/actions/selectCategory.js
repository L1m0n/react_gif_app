import {SELECT_CATEGORY} from '../constants/actionTypes';

const selectCategory =(category) => {
    return {
        type:SELECT_CATEGORY,
        category
    }
};

export default selectCategory;
