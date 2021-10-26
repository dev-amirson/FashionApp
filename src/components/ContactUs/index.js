import React, { useState } from 'react'

import { Header, Footer, TopHeader } from 'components'
import 'components/ContactUs/styles.scss'

export const ContactUs = () => {
  const [status, setStatus] = useState('Submit')
  const handleSubmit = event => {
    event.preventDefault()

    setStatus('Sending...')
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <div className={'contact-us'}>
        <h1> Contact Us </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={'name'}>Name:</label>
            <input className={'input-contact'} required />
          </div>

          <div>
            <label htmlFor={'email'}>Email:</label>
            <input className={'input-contact'} type={'email'} required />
          </div>

          <div>
            <label htmlFor={'message'}>Message:</label>
            <textarea className={'input-contact'} required />
          </div>

          <button className={'submit-button'} type={'submit'}>
            {status}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
