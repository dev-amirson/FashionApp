import { Provider } from 'react-redux'

import { DetailsDiv, SelectionDiv } from 'containers'
import { Header, Footer, TopHeader, ImageSlider } from 'components'
import store from 'store'
import 'containers/Home/styles.scss'

export const Home = () => (
  <Provider store={store}>
    <div>
      <TopHeader />
      <Header />
      <div className={'app'}>
        <ImageSlider />
        <DetailsDiv />
        <SelectionDiv />
      </div>
      <Footer />
    </div>
  </Provider>
)
