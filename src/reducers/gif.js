const  gif = (state = {}, action) => {
    let l = state.data.items.length,
        ob = {},
        i;

    for (i = 0; i < l; i +=1) {
        if (state.data.items[i].id === action.id){
            ob = state.data.items[i];
        }
    }

    return ob;
};

export default gif;