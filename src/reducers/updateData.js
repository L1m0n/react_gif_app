const updateData = (state, data) => {
    let newData = {
            ...state,
            offset:state.count+=data.count,
            count:state.count,
        },
        oldItems = state.items,
        dataLength = data.items.length,
        i;

    for (i = 0; i < dataLength; i++) {
        oldItems.push(data.items[i]);
    }

    newData.items = oldItems;
    return newData;
};

export default updateData;