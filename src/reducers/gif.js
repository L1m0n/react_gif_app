const  gif = (state = {}, action) => {
    return state.data.items[action.id];
};

export default gif;