import 'containers/Header/styles.scss'

export const Header = () => (
  <div className={'header-div'}>
    <nav className={'main-nav'}>
      <ul>
        <li className={'logoHeading'}>
          <a href={'#Home'}>
            <h1>Daily Fashion</h1>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
