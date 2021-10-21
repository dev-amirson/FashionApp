import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { ToastContainer, toast } from 'react-toastify'
import Tooltip from '@mui/material/Tooltip'

import 'Containers/SelectionDiv/styles.scss'
import { ADD_ITEM } from 'Actions'

let order = { quantity: 0, sizeId: 0, colorId: 'null' }

export const SelectionDiv = () => {
  const productDetails = useSelector(state => state.product)
  let [itemQuantity, setQuantity] = useState(0)
  let [colors, showColors] = useState(productDetails.sizes[0].colors)
  const dispatch = useDispatch()

  const getSizes = () => {
    let res = []

    for (let i = 0; i < productDetails.sizes.length; i++) {
      res.push(
        <button
          className={'roundedbutton'}
          key={productDetails.sizes[i].id}
          onClick={() => {
            order['sizeId'] = productDetails.sizes[i].id
            showColors(productDetails.sizes[i].colors)
          }}
        >
          {productDetails.sizes[i].abbreviation}
        </button>
      )
    }
    return res
  }

  const getMaterials = () => {
    let res = []

    for (let i = 0; i < productDetails.materials.length; i++) {
      res.push(
        <button
          className={'roundedMaterialButton'}
          key={productDetails.materials[i]}
          style={{ backgroundColor: '#cc637e', color: 'white' }}
        >
          {productDetails.materials[i]}
        </button>
      )
    }
    return res
  }

  const getColors = () => {
    let res = []
    for (let i = 0; i < colors.length; i++) {
      if (colors[i].quantity > 0) {
        res.push(
          <button
            className={'roundedColorButton'}
            key={i}
            style={{ backgroundColor: `${colors[i].name}` }}
            onClick={() => (order['colorId'] = colors[i].name)}
          ></button>
        )
      }
      if (i == colors.length - 1 && res.length == 0) {
        res.push(<p> Currently we are out of stock for this size</p>)
      }
    }
    return res
  }
  if (typeof window !== 'undefined') {
    injectStyle()
  }

  const notify = () => {
    if (itemQuantity > 0 && order['sizeId'] != 0 && order['colorId'] != 'null') {
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
    <div className={'stackeddiv'}>
      <div className={'guideDiv'}>
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
      <div className={'guideDiv'}>
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
      <div className={'countDiv'}>
        <button className={'counterBtn'} onClick={() => setQuantity(itemQuantity + 1)}>
          +
        </button>
        <div className={'quantityDiv'}>{itemQuantity}</div>
        <button
          className={'counterBtn'}
          onClick={() => {
            itemQuantity >= 1 ? setQuantity(itemQuantity - 1) : setQuantity(0)
          }}
        >
          -
        </button>
      </div>
      <hr />

      <button className={'cartBtn'} onClick={notify}>
        ADD TO CART
      </button>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
