import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { cartSum } from 'Helpers'
import { Header, Footer, TopHeader, CheckOutProduct } from 'components'
import 'containers/CheckOut/styles.scss'

export const CheckOut = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  const cart = useSelector(state => state.cart)
  const name = useSelector(state => state.product.name)
  const price = useSelector(state => state.product.price)
  const sizes = useSelector(state => state.size)

  const getCart = () => {
    if (cart.length === 0) {
      return <p> There is nothing in the cart yet.</p>
    }

    return cart.map((item, index) => (
      <CheckOutProduct
        key={index + 1}
        productName={name}
        productSize={sizes[item.sizeId]}
        productColor={item.colorId}
        productQuantity={item.quantity}
        productPrice={price}
        listId={index + 1}
      />
    ))
  }

  useEffect(() => {
    cart.length === 0 ? setTotalAmount(0) : setTotalAmount(((cartSum(cart) || 0) * price) / 100)
  }, [cart])

  return (
    <div>
      <TopHeader />
      <Header />
      <div className={'checkout'}>
        <h1>YOUR CART</h1>
        {getCart()}
      </div>

      <div className={'row-div'}>
        <h2> Proceed to CheckOut! </h2>
        <h3> Total Amount: $ {totalAmount} </h3>
        <button className={'checkout-btn'}>CheckOut</button>
      </div>
      <Footer />
    </div>
  )
}
