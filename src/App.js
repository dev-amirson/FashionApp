/* eslint-disable prettier/prettier */
import 'App.css'
import { Header, Footer } from 'Containers'
import { ImageSlider } from 'Components'

export const App = () => (
  <div>
    <Header />
    <div className='App'>
      <ImageSlider />
    </div>
    <Footer />
  </div>
)
