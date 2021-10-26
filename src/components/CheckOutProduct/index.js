import { useDispatch } from 'react-redux'

import { REMOVE_ITEM } from 'Actions'
import 'components/CheckOutProduct/styles.scss'

export const CheckOutProduct = ({
  productName,
  productSize,
  productColor,
  productQuantity,
  productPrice,
  listId
}) => {
  const dispatch = useDispatch()
  const deleteRecord = () => {
    dispatch({
      type: REMOVE_ITEM,
      payload: { id: listId, size: productSize, color: productColor, quantity: productQuantity }
    })
  }

  return (
    <div className={'all-div'}>
      <div className={'product-div'}>
        <div className={'flex-left'}>
          <h1> {productName}</h1>
          <p> Color ID :</p>
          <p> Quantity :</p>
          <p> Size ID :</p>
          <p> Total Price : </p>
        </div>
        <div className={'flex-right'}>
          <h1 className={'blank-heading'}> c</h1>
          <p className={'para'}> {productColor}</p>
          <p className={'para'}> {productQuantity}</p>
          <p className={'para'}> {productSize}</p>
          <p className={'para'}> $ {productQuantity * (productPrice / 100)} </p>
        </div>
      </div>
      <div className={'product-div'}>
        <button className={'checkout-btn'}>Checkout</button>
        <button className={'cancel-btn'} onClick={() => deleteRecord()}>
          Delete
        </button>
      </div>
    </div>
  )
}
