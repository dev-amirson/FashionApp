import { ADD_ITEM, REMOVE_ITEM } from 'Actions'

import { initialState } from 'initialState'

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state
        //[action.payload.item]: itemQuantity
      }

    case REMOVE_ITEM:
      return {
        ...state
        //[action.payload.item]: itemQuantity
      }

    default:
      return state
  }
}
export default Reducers
