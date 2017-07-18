import { combineReducers } from 'redux'
import { ITEMS_RECEIVED, PRODUCTS_RECEIVED, ITEM_CREATED } from '../actions'

// function items(state = { all: [] }, action) {
//   switch (action.type) {
//     case ITEMS_RECEIVED:
//       return {
//         ...state,
//         all: action.items
//       }
//     case ITEM_CREATED:
//       return {
//         ...state,
//         all: [
//           action.item,
//           ...state.all,
//         ]
//       }
//     default:
//       return state
//   }
// }
selected = () => {
  if (this.state.selected) {
    this.setState({selected: false});
  }
  else {
    this.setState({selected: true});
  }
}


export default combineReducers({
  selected,
})
