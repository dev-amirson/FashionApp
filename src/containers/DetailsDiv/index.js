import { useSelector } from 'react-redux'

import 'containers/DetailsDiv/styles.scss'

export const DetailsDiv = () => {
  const productDesc = useSelector(state => state.product.description)
  const productBullets = useSelector(state => state.product.bullets)
  const productName = useSelector(state => state.product.name)
  const productPrice = useSelector(state => state.product.price)

  const getListBullets = () => productBullets.map(item => <li key={item}>{item}</li>)

  return (
    <div className={'stacked-div'}>
      <h1 className={'h1'}> {productName} </h1>
      <hr />
      <h2 className={'h2'}> $ {productPrice / 100} </h2>
      <p>{productDesc}</p>
      <ul>{getListBullets()}</ul>
    </div>
  )
}
