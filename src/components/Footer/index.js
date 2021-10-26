import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

import 'components/Footer/styles.scss'

export const Footer = () => (
  <div className={'footer-div'}>
    <div className={'flex-container'}>
      <div className={'flex-item-left'}>
        <h2 className={'footer-heading'}> About Us</h2>
        <p className={'p1'}>
          {' '}
          Do you want to be even more successfull? Learn to love learning and growth. The more
          effort you put into your improving your skills.
        </p>
        <p className={'p1'}>Copyright! All rights Reserved! </p>
        <p className={'awais p1'}>Designed by Awais!</p>
      </div>

      <div className={'flex-item-middle'}>
        <h2 className={'footer-heading'}> Contact Us</h2>
        <p className={'p1'}> Stay updated with our latest updates!</p>
        <p className={'p1'}> Wear Clothes that Matter!</p>
      </div>

      <div className={'flex-item-right'}>
        <h2 className={'footer-heading'}> Follow Us</h2>
        <p className={'p1'}> Let us be social</p>
        <a href={'#facebook'}>
          <AiOutlineFacebook className={'footer-icons'} />
        </a>

        <a href={'#twitter'}>
          <AiOutlineTwitter className={'footer-icons'} />
        </a>

        <a href={'#linkedin'}>
          <AiOutlineLinkedin className={'footer-icons'} />
        </a>
      </div>
    </div>
  </div>
)
