import { ADD_ITEM, REMOVE_ITEM } from 'Actions'

import { initialState } from 'initialState'

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let copyState = { ...state }
      let sizes = [...copyState.product.sizes]
      let cart = [...copyState.cart]

      cart.push(action.payload.checkout)

      let sizeIndex = sizes.findIndex(size => size.id == action.payload.checkout.sizeId)
      let colorIndex = sizes[sizeIndex].colors.findIndex(
        color => color.name == action.payload.checkout.colorId
      )
      let quantity = sizes[sizeIndex].colors[colorIndex].quantity
      sizes[sizeIndex].colors[colorIndex].quantity = quantity - action.payload.checkout.quantity

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
