import { injectStyle } from 'react-toastify/dist/inject-style'
import { ToastContainer, toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

import { ADD_ITEM } from 'Actions'
import 'containers/SelectionDiv/styles.scss'

const ORDER_INITIAL_STATE = { quantity: 0, sizeId: 0, colorId: 'null' }

export const SelectionDiv = () => {
  const dispatch = useDispatch()
  const [itemQuantity, setQuantity] = useState(0)
  const productDetails = useSelector(state => state.product)
  const [colors, showColors] = useState(productDetails.sizes[0].colors)
  const [order, setOrder] = useState(ORDER_INITIAL_STATE)

  const getSizes = () =>
    productDetails.sizes.map(size => (
      <button
        className={'rounded-button'}
        key={size.id}
        onClick={() => {
          setOrder({ ...order, sizeId: size.id })
          showColors(size.colors)
        }}
      >
        {size.abbreviation}
      </button>
    ))

  const getMaterials = () =>
    productDetails.materials.map(material => (
      <button
        className={'rounded-material-button'}
        key={material}
        style={{ backgroundColor: '#cc637e', color: 'white' }}
      >
        {material}
      </button>
    ))

  const getColors = () =>
    colors.map(color =>
      color.quantity > 0 ? (
        <button
          className={'rounded-color-button'}
          key={color.name}
          style={{ backgroundColor: `${color.name}` }}
          onClick={() => setOrder({ ...order, colorId: color.name })}
        ></button>
      ) : (
        <> </>
      )
    )

  if (typeof window !== 'undefined') {
    injectStyle()
  }

  const notify = () => {
    if (itemQuantity > 0) {
      let orderDetail = { ...order, quantity: itemQuantity }
      setOrder(orderDetail)
      dispatch({ type: ADD_ITEM, payload: { checkout: orderDetail } })
      toast.dark(
        `Added to Cart! \n Quantity: ${orderDetail.quantity} - Color: ${orderDetail.colorId} - Size: ${orderDetail.sizeId}`
      )
      setOrder(ORDER_INITIAL_STATE)
      setQuantity(0)
    } else if (order.sizeId === 0) {
      toast.error('PLEASE SELECT A SIZE')
    } else if (order.colorId === 'null') {
      toast.error('PLEASE SELECT A COLOR')
    } else {
      toast.error('PLEASE ADD QUANTITY')
    }
  }

  return (
    <div className={'stack-div'}>
      <div className={'guide-div'}>
        <p className={'ps'}>
          <b>Select Your Size</b>
        </p>
        <Tooltip title={productDetails.sizeInfo} arrow leaveDelay={200} placement={'top'}>
          <p className={'underline'}>Size Guide</p>
        </Tooltip>
      </div>
      {getSizes()}
      <hr />

      <p className={'ps'}>
        <b>Select Your Color</b> <br />
      </p>
      {getColors()}
      <hr />
      <div className={'guide-div'}>
        <p className={'ps'}>
          <b>Select Material</b>
        </p>
        <Tooltip title={productDetails.materialInfo} arrow leaveDelay={200} placement={'bottom'}>
          <p className={'underline'}>Material Guide</p>
        </Tooltip>
      </div>
      {getMaterials()}
      <hr />

      <p>
        <b> Select Quantity </b>{' '}
      </p>
      <div className={'count-div'}>
        <button className={'counter-btn'} onClick={() => setQuantity(itemQuantity + 1)}>
          +
        </button>
        <div className={'quantity-div'}>{itemQuantity}</div>
        <button
          className={'counter-btn'}
          onClick={() => {
            itemQuantity >= 1 ? setQuantity(itemQuantity - 1) : setQuantity(0)
          }}
        >
          -
        </button>
      </div>
      <hr />

      <button className={'cart-btn'} onClick={notify}>
        ADD TO CART
      </button>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
