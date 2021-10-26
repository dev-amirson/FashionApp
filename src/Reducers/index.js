import { ADD_ITEM, REMOVE_ITEM, ADD_MSG } from 'Actions'

import { initialState } from 'Reducers/initialState'

const Reducers = (state = initialState, action) => {
  let copyState,
    sizes,
    cart,
    sizeIndex,
    colorIndex,
    quantity = undefined

  switch (action.type) {
    case ADD_ITEM:
      copyState = { ...state }
      sizes = [...copyState.product.sizes]
      cart = [...copyState.cart]

      cart.push(action.payload.checkout)

      sizeIndex = sizes.findIndex(size => size.id == action.payload.checkout.sizeId)
      colorIndex = sizes[sizeIndex].colors.findIndex(
        color => color.name == action.payload.checkout.colorId
      )
      quantity = sizes[sizeIndex].colors[colorIndex].quantity
      sizes[sizeIndex].colors[colorIndex].quantity = quantity - action.payload.checkout.quantity

      return { ...copyState, sizes: sizes, cart: cart }

    case REMOVE_ITEM:
      copyState = { ...state }
      sizes = [...copyState.product.sizes]
      cart = [...copyState.cart]

      cart.splice(action.payload.id - 1, 1)

      sizeIndex = sizes.findIndex(size => size.id == action.payload.size)
      colorIndex = sizes[sizeIndex].colors.findIndex(color => color.name == action.payload.color)
      quantity = sizes[sizeIndex].colors[colorIndex].quantity
      sizes[sizeIndex].colors[colorIndex].quantity = quantity - action.payload.quantity

      return { ...copyState, sizes: sizes, cart: cart }

    case ADD_MSG:
      copyState = { ...state }
      copyState['chat'].push(action.payload.msg)
      return { ...copyState }

    default:
      return state
  }
}
export default Reducers
