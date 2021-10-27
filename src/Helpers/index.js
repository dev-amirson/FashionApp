export const DAILY_FASHION = 'DAILY FASHION'
export const FREE_SHIPPING = 'FREE SHIPPING'

export const COLOR_SELECTED = { color: 'white' }
export const COLOR_UNSELECTED = { color: 'transparent' }
export const ORDER_INITIAL_STATE = { quantity: 0, sizeId: 0, colorId: 'null' }
export const SELECTED = { boxShadow: '0px 0px 10px #000' }
export const UNSELECTED = { boxShadow: 'none' }

export const cartSum = cart => cart.map(c => c.quantity).reduce((a, b) => a + b)
