import { useSelector } from 'react-redux'

import { Header, Footer, TopHeader, CheckOutProduct } from 'Components'
import 'Containers/CheckOut/styles.scss'

export const CheckOut = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart)
  const name = useSelector(state => state.product.name)
  const price = useSelector(state => state.product.price)

  const getCart = () => {
    let res = []
    if (cart.length === 0) {
      res.push(<p> There is nothing in the cart yet.</p>)
      return res
    }
    for (let i = 0; i < cart.length; i++) {
      res.push(
        <CheckOutProduct
          key={i + 1}
          productName={name}
          productSize={cart[i].sizeId}
          productColor={cart[i].colorId}
          productQuantity={cart[i].quantity}
          productPrice={price}
          listId={i + 1}
        />
      )
    }
    return res
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
