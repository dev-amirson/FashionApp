import { AiOutlineShoppingCart } from 'react-icons/ai'

import 'containers/TopHeader/styles.scss'

export const TopHeader = () => (
  <div className={'top-div'}>
    <p className={'pa'}>
      <b> DAILY FASHION</b>
    </p>
    <p className={'pa'}>
      <b> FREE SHIPPING</b>
    </p>
    <a href={'#nextPage'}>
      <AiOutlineShoppingCart className={'cart-icon'} />
    </a>
  </div>
)
