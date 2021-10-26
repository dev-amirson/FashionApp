import { BsFillChatFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { ADD_MSG } from 'Actions'
import 'containers/Chat/styles.scss'

export const ChatModal = () => {
  const [isHidden, setState] = useState(false)
  const [msg, setMsg] = useState('')
  const chat = useSelector(state => state.chat)
  const dispatch = useDispatch()
  const history = useHistory()

  const divClick = () => {
    let time = new Date().getHours()

    if (time <= 9 || time >= 20) {
      history.push('/contactus')
    } else {
      if (isHidden === true) {
        setState(false)
      } else {
        setState(true)
      }
    }
  }

  const getChats = () =>
    chat.map((chat, i) => (
      <p className={i == 0 ? 'left-msg' : 'right-msg'} key={i}>
        {chat}
      </p>
    ))

  const handleChange = e => {
    setMsg(e.target.value)
  }

  const sendMsg = () => {
    setMsg('')
    dispatch({ type: ADD_MSG, payload: { msg: msg } })
  }

  return (
    <>
      <div className={'div'} onClick={() => divClick()}>
        <span>
          <BsFillChatFill className={'icon'} />{' '}
        </span>
      </div>

      <div className={'chat-div'} style={{ display: isHidden ? 'block' : 'none' }}>
        {getChats()}

        <div className={'input-send'}>
          <input
            className={'input'}
            type={'text'}
            id={'name'}
            required
            value={msg}
            onChange={handleChange}
          />
          <button className={'send-btn'} onClick={sendMsg}>
            Send
          </button>
        </div>
      </div>
    </>
  )
}
