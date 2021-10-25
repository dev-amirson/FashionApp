import { AiOutlineShoppingCart } from 'react-icons/ai'

import 'Containers/TopHeader/styles.scss'

export const TopHeader = () => {
  return (
    <div className={'topDiv'}>
      <p className={'pa'}>
        <b> DAILY FASHION</b>
      </p>
      <p className={'pa'}>
        <b> FREE SHIPPING</b>
      </p>
      <a href={'#nextPage'}>
        <AiOutlineShoppingCart className={'cartIcon'} />
      </a>
    </div>
  )
}
