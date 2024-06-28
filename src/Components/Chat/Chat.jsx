import React from 'react'
import './Chat.css'
import { useState, useEffect } from 'react'
import BorisMessage from '../ChatMessage/BorisMessage'
import UserMessage from '../ChatMessage/UserMessage'

const Chat = (props) => {
  const [chatHistory, setChatHistory] = props.chatHistory
  return (
    <div className='chat-container'>
        {
            chatHistory.array.forEach(message => {
            message.sender == 0 ? 
              <BorisMessage message = {message.message}/>
              :
              <UserMessage message = {message.message}/>
            })                        
        }
    </div>
  )
}

export default Chat