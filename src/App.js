import { Provider } from 'react-redux'

import 'App.css'
import { Header, Footer, DetailsDiv, SelectionDiv, TopHeader } from 'Containers'
import { ImageSlider } from 'Components'
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
