import { ADD_ITEM, REMOVE_ITEM } from 'Actions'

import { initialState } from 'initialState'

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      state['cart'].push(action.payload.checkout)
      console.log(state['cart'])
      for (let i = 0; i < state.product.sizes.length; i++) {
        if (state.product.sizes[i].id == action.payload.checkout.sizeId) {
          for (let j = 0; j < state.product.sizes[i].colors.length; j++) {
            if (state.product.sizes[i].colors[j].name == action.payload.checkout.colorId) {
              state.product.sizes[i].colors[j].quantity =
                state.product.sizes[i].colors[j].quantity - action.payload.checkout.quantity
              break
            }
          }
          break
        }
      }
      return { ...state }

    case REMOVE_ITEM:
      return {
        ...state
      }

    default:
      return state
  }
}
export default Reducers
