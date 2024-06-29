import React from 'react'
import './Chat.css'
import { useState, useEffect, useRef } from 'react'
import BorisMessage from '../ChatMessage/BorisMessage'
import UserMessage from '../ChatMessage/UserMessage'
import InputLine from '../InputLine/InputLine'



const Chat = (props) => {
  const [chatHistory, setChatHistory] = props.chatHistory
  const handleUpdateChatHistory = () => {

    const newChatHistory = [...chatHistory];
    setChatHistory(newChatHistory);

  };
  useEffect(()=>{
    handleUpdateChatHistory()
  }, [chatHistory]);

  return (
     <div className='chat-container'>
      {chatHistory.map((message) => (
        message.sender === 0 ? (
          <BorisMessage key={message.id} message={message.message} />
        ) : (
          <UserMessage key={message.id} message={message.message} />
        )
      ))}
    </div>

  )
}
export default Chat