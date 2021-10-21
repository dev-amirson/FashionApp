import { useDispatch } from 'react-redux'

import 'Components/CheckOutProduct/styles.scss'
import { REMOVE_ITEM } from 'Actions'

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
    <div className={'allDiv'}>
      <div className={'productDiv'}>
        <div className={'flex-left'}>
          <h1> {productName}</h1>
          <p> Color ID :</p>
          <p> Quantity :</p>
          <p> Size ID :</p>
          <p> Total Price : </p>
        </div>
        <div className={'flex-right'}>
          <h1 className={'blankheading'}> c</h1>
          <p className={'para'}> {productColor}</p>
          <p className={'para'}> {productQuantity}</p>
          <p className={'para'}> {productSize}</p>
          <p className={'para'}> $ {productQuantity * (productPrice / 100)} </p>
        </div>
      </div>
      <div className={'productDiv'}>
        <button className={'checkoutBtn'}>Checkout</button>
        <button className={'cancelBtn'} onClick={() => deleteRecord()}>
          Delete
        </button>
      </div>
    </div>
  )
}
