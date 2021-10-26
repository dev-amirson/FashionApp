import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import 'components/TopHeader/styles.scss'

export const TopHeader = () => (
  <div className={'top-div'}>
    <p className={'pa'}>
      <b> DAILY FASHION</b>
    </p>
    <p className={'pa'}>
      <b> FREE SHIPPING</b>
    </p>
    <Link to={'/cart'}>
      {' '}
      <AiOutlineShoppingCart className={'cart-icon'} />{' '}
    </Link>
  </div>
)
