import 'components/Header/styles.scss'

export const Header = () => (
  <div className={'header-div'}>
    <nav className={'main-nav'}>
      <ul>
        <li className={'logo-heading'}>
          <a href={'/'}>
            <h1>Daily Fashion</h1>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
