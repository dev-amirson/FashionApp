import { useSelector } from 'react-redux'
import { useState } from 'react'
import 'containers/SelectionDiv/styles.scss'
import Tooltip from '@mui/material/Tooltip'

export const SelectionDiv = () => {
  let [itemQuantity, setQuantity] = useState(0)
  const productDetails = useSelector(state => state.product)

  const getSizes = () =>
    productDetails.sizes.map(size => (
      <button className={'rounded-button'} key={size.id}>
        {size.abbreviation}
      </button>
    ))

  const getMaterials = () =>
    productDetails.materials.map(material => (
      <button
        className={'rounded-material-button'}
        key={material.id}
        style={{ backgroundColor: '#cc637e', color: 'white' }}
      >
        {material}
      </button>
    ))

  return (
    <div className={'stack-div'}>
      <div className={'guide-div'}>
        <p className={'ps'}>
          <b>Select Your Size</b>
        </p>
        <Tooltip title={productDetails.sizeInfo} arrow leaveDelay={200} placement={'top'}>
          <p className={'underline'}>View Size Guide</p>
        </Tooltip>
      </div>

      {getSizes()}

      <hr />

      <p>
        <b>Select Your Color</b> <br />
        {getSizes()}
      </p>

      <hr />

      <div className={'guide-div'}>
        <p className={'ps'}>
          <b>Select Material</b>
        </p>
        <Tooltip title={productDetails.materialInfo} arrow leaveDelay={200} placement={'bottom'}>
          <p className={'underline'}>View Size Guide</p>
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

      <button className={'cart-btn'}>ADD TO CART</button>
    </div>
  )
}
