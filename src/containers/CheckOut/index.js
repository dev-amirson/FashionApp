import { Header, Footer, TopHeader } from 'components'
import 'containers/CheckOut/styles.scss'

export const CheckOut = () => (
  <div>
    <TopHeader />
    <Header />
    <div className={'checkout'}>
      <p>this is something</p>
    </div>
    <Footer />
  </div>
)
