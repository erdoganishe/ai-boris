import React from 'react'
import './InputLine.css'
import { useState, useEffect } from 'react'

const InputLine = (props) => {

  const [chatHistory, setChatHistory] = props.chatHistory


  return (
    <div className='prompt-line-container'>
        <input className='propmt-line-input' placeholder = {"Give your slave Boris a job"} />
        <img src='Static/Icons/send.png' id = "send-button" onClick = {()=>{
          const value = document.getElementsByClassName('propmt-line-input')[0].value
          if (value && value !== ""){
            let tmp = chatHistory
            
            tmp.push({
              "sender": 0,
              "message": value,
            })
            setChatHistory(tmp)
            document.getElementsByClassName('propmt-line-input')[0].value = ""
          }
          // props.onClick
        }}/>
    </div>

  )
}

export default InputLine