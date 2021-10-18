/* eslint-disable prettier/prettier */
import { AiOutlineShoppingCart } from 'react-icons/ai'
import 'Containers/Header/styles.scss'

export const Header = () => (
  <div className='headerDiv'>
    <nav className='main-nav'>
      <ul>
        <li>
          <a href='#nextPage'><AiOutlineShoppingCart className='cartIcon'/> </a>
        </li>

        <li className= 'logoHeading'>
          <a href='#Home'>
            <h3>Daily Fashion Page</h3>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
