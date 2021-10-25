import { ADD_ITEM, REMOVE_ITEM } from 'Actions'

import { initialState } from 'initialState'

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state
      }

    case REMOVE_ITEM:
      return {
        ...state
      }

    default:
      return state
  }
}
export default Reducers
