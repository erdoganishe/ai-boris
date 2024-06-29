import React from 'react'
import './ChatMessage.css'

const UserMessage = (props) => {
  return (
    <div className='message-container user-message-container'>
        <div className='user-message-text user-message-text'>
            {props.message}
        </div>
    </div>
  )
}

export default UserMessage