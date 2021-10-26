import { ADD_ITEM, REMOVE_ITEM } from 'Actions'

import { initialState } from 'initialState'

const Reducers = (state = initialState, action) => {
  let copyState = { ...state }
  let sizes = [...copyState.product.sizes]
  let cart = []
  let sizeIndex = -1
  let colorIndex = -1
  let quantity = -1

  switch (action.type) {
    case ADD_ITEM:
      cart = [...copyState.cart]
      cart.push(action.payload.checkout)
      sizeIndex = sizes.findIndex(size => size.id == action.payload.checkout.sizeId)
      colorIndex = sizes[sizeIndex].colors.findIndex(
        color => color.name == action.payload.checkout.colorId
      )
      quantity = sizes[sizeIndex].colors[colorIndex].quantity
      quantity = quantity - action.payload.checkout.quantity
      sizes[sizeIndex].colors[colorIndex].quantity = quantity

      return { ...copyState, sizes: sizes, cart: cart }

    case REMOVE_ITEM:
      return {
        ...copyState
      }

    default:
      return state
  }
}
export default Reducers
