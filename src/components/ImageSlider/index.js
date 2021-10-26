import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image1 from 'Assets/images/jumpsuit-1.jpg'
import image2 from 'Assets/images/jumpsuit-2.jpg'
import image3 from 'Assets/images/jumpsuit-3.jpg'
import image4 from 'Assets/images/jumpsuit-4.jpg'
import image5 from 'Assets/images/jumpsuit-5.jpg'
import 'components/ImageSlider/styles.scss'

export const ImageSlider = () => (
  <AliceCarousel
    autoPlay
    autoPlayInterval={'3000'}
    infinite={'true'}
    controlsStrategy={'default'}
    animationType={'fadeout'}
    disableDotsControls={'true'}
  >
    <img src={image4} className={'slider-img'} alt={''} />
    <img src={image1} className={'slider-img'} alt={''} />
    <img src={image2} className={'slider-img'} alt={''} />
    <img src={image3} className={'slider-img'} alt={''} />
    <img src={image5} className={'slider-img'} alt={''} />
  </AliceCarousel>
)
