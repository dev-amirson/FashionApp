import { injectStyle } from 'react-toastify/dist/inject-style'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Tooltip from '@mui/material/Tooltip'

import 'containers/SelectionDiv/styles.scss'
import { ADD_ITEM } from 'Actions'

let order = { quantity: 0, sizeId: 0, colorId: 'null' }

export const SelectionDiv = () => {
  let [itemQuantity, setQuantity] = useState(0)
  const productDetails = useSelector(state => state.product)
  let [colors, showColors] = useState(productDetails.sizes[0].colors)
  const dispatch = useDispatch()

  const getSizes = () =>
    productDetails.sizes.map(size => (
      <button
        className={'rounded-button'}
        key={size.id}
        onClick={() => {
          order['sizeId'] = size.id
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

  const getColors = () => {
    let aa = colors.map(color =>
      color.quantity > 0 ? (
        <button
          className={'rounded-color-button'}
          key={color.name}
          style={{ backgroundColor: `${color.name}` }}
          onClick={() => (order['colorId'] = color.name)}
        ></button>
      ) : (
        <a />
      )
    )
    return aa
  }

  if (typeof window !== 'undefined') {
    injectStyle()
  }

  const notify = () => {
    if (itemQuantity > 0) {
      order['quantity'] = itemQuantity
      dispatch({ type: ADD_ITEM, payload: { checkout: order } })
      toast.dark(
        `Added to Cart! \n Quantity: ${order['quantity']} - Color: ${order['colorId']} - Size: ${order['sizeId']}`
      )
      order = { quantity: 0, sizeId: 0, colorId: 'null' }
      setQuantity(0)
    } else if (order['sizeId'] === 0) {
      toast.error('PLEASE SELECT A SIZE')
    } else if (order['colorId'] === 'null') {
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
