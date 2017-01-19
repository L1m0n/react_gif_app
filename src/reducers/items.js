import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
    switch (action.type) {
        case actionTypes.CHANGE_STATUS:
            return  state.map((item)=>{
                if (item.id !== action.id) {
                    return item
                }

                return Object.assign({}, item, {
                    loaded:true
                })

            });
        default :
            return state
    }
} ;

export default items;