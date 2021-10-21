import 'Containers/Home/styles.scss'
import { DetailsDiv, SelectionDiv } from 'Containers'
import { Header, Footer, TopHeader } from 'Components'
import { ImageSlider } from 'Components'

export const Home = () => {
  return (
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
  )
}
