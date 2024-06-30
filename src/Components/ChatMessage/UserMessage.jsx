import React from 'react'
import './ChatMessage.css'
import { useState } from 'react'
import axios from 'axios'

const UserMessage = (props) => {

  const [showButtons, setShowButtons] = useState(true);

  function checkMessage(message){
    return String(message).split("Ready").length > 1 
  }

  return (
    <div className='message-container user-message-container'>
        <div className='user-message-text user-message-text'>
            {props.message}
            {
              checkMessage(props.message) && showButtons ? 
                <div className='confirm-buttons-container'> 
                  <button className='confirm-button' id = "yes-button" onClick={()=>{
                    console.log("send yes back here!")
                    setShowButtons(false)
                  }}>Y</button>
                  <button className='confirm-button' id = "no-button" onClick={()=>{
                    console.log("send no  to back here!")
                    setShowButtons(false)
                  }}>N</button>
                </div>
               : <div>
              </div>
            }
        </div>
    </div>
  )
}

export default UserMessage