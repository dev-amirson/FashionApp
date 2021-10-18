/* eslint-disable prettier/prettier */
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import 'Components/ImageSlider/styles.scss'

import image1 from 'assets/images/jumpsuit-1.jpg'
import image2 from 'assets/images/jumpsuit-2.jpg'
import image3 from 'assets/images/jumpsuit-3.jpg'
import image4 from 'assets/images/jumpsuit-4.jpg'
import image5 from 'assets/images/jumpsuit-5.jpg'

export const ImageSlider = () => (
  <AliceCarousel
    autoPlay
    autoPlayInterval='5000'
    controlsStrategy='default'
    disableDotsControls='true'
  >
    <img src={image4} className='sliderimg' alt=''/>
    <img src={image1} className='sliderimg' alt=''/>
    <img src={image2} className='sliderimg' alt=''/>
    <img src={image3} className='sliderimg' alt=''/>
    <img src={image5} className='sliderimg' alt=''/>
  </AliceCarousel>
)
