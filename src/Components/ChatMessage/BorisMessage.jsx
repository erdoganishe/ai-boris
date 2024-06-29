import React from 'react'
import './ChatMessage.css'

const BorisMessage = (props) => {
  return (
    <div className='message-container boris-message-container'>
    <div className='boris-message-text boris-message-text'>
        {props.message}
    </div>
</div>
  )
}

export default BorisMessage