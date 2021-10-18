import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

import { IoChevronForwardSharp } from 'react-icons/io5'

import 'Containers/Footer/styles.scss'

export const Footer = () => (
  <div className={'footerDiv'}>
    <div className={'flex-container'}>
      <div className={'flex-item-left'}>
        <h2 className={'footerHeading'}> About Me</h2>
        <p className={'p1'}>
          {' '}
          Do you want to be even more successfull? Learn to love learning and growth. The more
          effort you put into your improving your skills.
        </p>
        <p className={'p1'}>Copyright 2asaasd021 All rights Reserved! Designed by </p>
        <p className={'awais p1'}>Awais!</p>
      </div>
      <div className={'flex-item-middle'}>
        <h2 className={'footerHeading'}> Newsletter</h2>
        <p className={'p1'}> Stay updated with our latest updates!</p>
        <div className={'emailcontainer'}>
          <button className={'forwardbtn'}>
            <IoChevronForwardSharp />
          </button>
        </div>
      </div>
      <div className={'flex-item-right'}>
        <h2 className={'footerHeading'}> Follow Me</h2>
        <p className={'p1'}> Let us be social</p>
        <a href={'#facebook'}>
          <AiOutlineFacebook />
        </a>
        <a href={'#twitter'}>
          <AiOutlineTwitter />
        </a>
        <a href={'#linkedin'}>
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  </div>
)
