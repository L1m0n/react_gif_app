//import {combineReducers} from 'redux';



function mainReducer(state = {}, action) {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return Object.assign({}, state, {
        selectedCategory: action.category
      })
    case "RECIVE_DATA":
      return Object.assign({}, state, {
        [action.category]:action.json,
      })
    case "CHANGE_STATUS":
      return state
    default:
      return state
  }
}



export default mainReducer;