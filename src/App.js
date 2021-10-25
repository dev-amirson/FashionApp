import { Provider } from 'react-redux'

import 'App.css'
import { Header, Footer, DetailsDiv, SelectionDiv, TopHeader } from 'containers'
import { ImageSlider } from 'components'
import store from 'store'

export const App = () => (
  <Provider store={store}>
    <div>
      <TopHeader />
      <Header />
      <div className={'App'}>
        <ImageSlider />
        <DetailsDiv />
        <SelectionDiv />
      </div>
      <Footer />
    </div>
  </Provider>
)
