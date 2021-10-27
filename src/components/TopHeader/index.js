import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { DAILY_FASHION, FREE_SHIPPING } from 'Helpers'
import 'components/TopHeader/styles.scss'

export const TopHeader = () => (
  <div className={'top-div'}>
    <p className={'pa'}>
      <b> {DAILY_FASHION}</b>
    </p>

    <p className={'pa'}>
      <b> {FREE_SHIPPING}</b>
    </p>

    <Link to={'/cart'}>
      {' '}
      <AiOutlineShoppingCart className={'cart-icon'} />{' '}
    </Link>
  </div>
)
