import { useSelector } from 'react-redux'

import 'Containers/DetailsDiv/styles.scss'

export const DetailsDiv = () => {
  const productDesc = useSelector(state => state.product.description)
  const productBullets = useSelector(state => state.product.bullets)
  const productName = useSelector(state => state.product.name)
  const productPrice = useSelector(state => state.product.price)

  const getListBullets = () => {
    return productBullets.map(item => <li key={item}>{item}</li>)
  }
  return (
    <div className={'stackedDiv'}>
      <h1 className={'h1'}> {productName} </h1>
      <hr />
      <h2 className={'h2'}> $ {productPrice} </h2>
      <p>{productDesc}</p>
      <ul>{getListBullets()}</ul>
    </div>
  )
}
