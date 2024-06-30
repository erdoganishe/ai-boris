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
                    if ( props.message.split("create/load").length > 1){
                      let filedrop = document.getElementsByClassName('file-drop-area')[0]
                      filedrop.classList.remove("hidden");
                    }
                    setShowButtons(false)
                  }}>
                    {
                      props.message.split("create/load").length > 1 ? "I have wallet" : "Yes"
                  }</button>
                  <button className='confirm-button' id = "no-button" onClick={()=>{
                    console.log("send no  to back here!")
                    setShowButtons(false)
                  }}>{
                    props.message.split("create/load").length > 1 ? "I don`t have wallet" : "No"
                  }</button>
                </div>
               : <div>
              </div>
            }
        </div>
    </div>
  )
}

export default UserMessage