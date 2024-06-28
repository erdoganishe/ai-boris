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
            chatHistory[0].sender == 0 ? 
            <BorisMessage message = {chatHistory[0].message}/>
            :
            <UserMessage message = {chatHistory[0].message}/>
        }
    </div>
  )
}

export default Chat