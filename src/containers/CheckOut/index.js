import { useSelector } from 'react-redux'

import { Header, Footer, TopHeader, CheckOutProduct } from 'components'
import 'containers/CheckOut/styles.scss'

export const CheckOut = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart)
  const name = useSelector(state => state.product.name)
  const price = useSelector(state => state.product.price)

  const getCart = () => {
    if (cart.length === 0) {
      return <p> There is nothing in the cart yet.</p>
    }

    return cart.map((item, i) => (
      <CheckOutProduct
        key={i + 1}
        productName={name}
        productSize={item.sizeId}
        productColor={item.colorId}
        productQuantity={item.quantity}
        productPrice={price}
        listId={i + 1}
      />
    ))
  }
  return (
    <div>
      <TopHeader />
      <Header />
      <div className={'checkout'}>
        <h1>Your Cart</h1>
        {getCart()}
      </div>
      <Footer />
    </div>
  )
}
