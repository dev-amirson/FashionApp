import { BsFillChatFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { ADD_MSG } from 'Actions'
import 'containers/Chat/styles.scss'

const CHAT_TIME_START = 9
const CHAT_TIME_END = 20

export const ChatModal = () => {
  const [isHidden, setState] = useState(false)
  const [msg, setMsg] = useState('')
  const chat = useSelector(state => state.chat)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = () => {
    let time = new Date().getHours()

    if (time <= CHAT_TIME_START || time >= CHAT_TIME_END) {
      history.push('/contactus')
    } else {
      isHidden == true ? setState(false) : setState(true)
    }
  }

  const getChats = () =>
    chat.map((chat, i) => (
      <p className={i === 0 ? 'left-msg' : 'right-msg'} key={i}>
        {chat}
      </p>
    ))

  const handleChange = event => {
    setMsg(event.target.value)
  }

  const sendMsg = () => {
    setMsg('')
    dispatch({ type: ADD_MSG, payload: { msg: msg } })
  }

  return (
    <>
      <div className={'div'} onClick={() => handleClick()}>
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
