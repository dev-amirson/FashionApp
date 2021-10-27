import { DAILY_FASHION } from 'Helpers'
import 'components/Header/styles.scss'

export const Header = () => (
  <div className={'header-div'}>
    <nav className={'main-nav'}>
      <ul>
        <li className={'logo-heading'}>
          <a href={'/'}>
            <h1>{DAILY_FASHION}</h1>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
