
const items = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
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

const  mainReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return Object.assign({}, state, {
        selectedCategory: action.category
      });
    case "RECIVE_DATA":
      return Object.assign({}, state, {
        data:action.json
      });
      case "UPDATE_DATA":
      return Object.assign({}, state, {
          ...state,
          data:updateData(state.data, action.json)
      });
    case "CHANGE_STATUS":
      return Object.assign({}, state, {
        data:{
          ...state.data,
          items: items(state.data.items, action)
        }
      });
    default:
      return state
  }
};




export default mainReducer;