//import {combineReducers} from 'redux';

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
      
    })
    default : 
      return state
  }
} 

const  mainReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return Object.assign({}, state, {
        selectedCategory: action.category
      })
    case "RECIVE_DATA":
      return Object.assign({}, state, {
        data:action.json
      })
    case "CHANGE_STATUS":
      return items(state.data, action)
    default:
      return state
  }
}




export default mainReducer;