import { useSelector } from 'react-redux'
import { useState } from 'react'
import 'Containers/SelectionDiv/styles.scss'
import Tooltip from '@mui/material/Tooltip'

export const SelectionDiv = () => {
  const productDetails = useSelector(state => state.product)
  let [itemQuantity, setQuantity] = useState(0)
  const getSizes = () => {
    let res = []

    for (let i = 0; i < productDetails.sizes.length; i++) {
      res.push(
        <button className={'roundedbutton'} key={productDetails.sizes[i].id}>
          {productDetails.sizes[i].abbreviation}
        </button>
      )
    }
    return res
    // productDetails.sizes.map(size => {
    //   return (
    //     <button className={'roundedbutton'} key={size.id}>
    //       {size.abbreviation}
    //     </button>
    //   )
    // })
  }
  const getMaterials = () => {
    let res = []

    for (let i = 0; i < productDetails.materials.length; i++) {
      res.push(
        <button
          className={'roundedMaterialButton'}
          key={productDetails.materials[i].id}
          style={{ backgroundColor: '#cc637e', color: 'white' }}
        >
          {productDetails.materials[i]}
        </button>
      )
    }
    return res
  }
  return (
    <div className={'stackeddiv'}>
      <div className={'guideDiv'}>
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
      <div className={'guideDiv'}>
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
      <button className={'cartBtn'}>ADD TO CART</button>
    </div>
  )
}
