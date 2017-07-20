import { combineReducers } from 'redux'
// import { ITEMS_RECEIVED, PRODUCTS_RECEIVED, ITEM_CREATED } from '../actions'
import messageList from './seed.js'

const messages = (state= [messageList], action) => {
  switch(action.type) {
    case 'GET_MESSAGES':
    return {
      ...state
      // taco: 'yay'
    }
    default:
    return state;
  }
}

const selected = (state= null, action) => {
  console.log('here');
  switch(action.type) {
    case 'MESSAGE_SELECTED':
    return {
      ...state,
      selected: true
    }
    default:
    return state;
  }

}



export default combineReducers({
  selected, messages,
})
