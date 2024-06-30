import React from 'react'
import './MainPage.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Chat from '../Chat/Chat'
import { useState, useEffect } from 'react'
import InputLine from '../InputLine/InputLine'
import AuthPage from '../AuthPage/AuthPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import CryptoJS from 'crypto-js'
import FileDrop from '../FileDrop/FileDrop'

const MainPage = () => {
    const [currentPageType, setCurrentPageType] = useState(true)
    const [chatHistory, setChatHistory] = useState([
        {sender: 1, message: "Hello! I am Boris and I`m here to help you to use TON wallet!"},  
    ])

    const onClickEvent = ()=>{
      setCurrentPageType(!currentPageType)
    }

    function handleChatHistory(chatMessage) {
        const currentChatHistory = chatHistory
        currentChatHistory.push(chatMessage)

        setChatHistory(currentChatHistory)
    }

    const hideAuthPage = ()=>{
      document.getElementsByClassName("auth-container")[0].classList.add("hidden")
    }


    function downloadTxtFile (content, password) {
      // Encrypt content with a password
  
      const encryptedContent = CryptoJS.AES.encrypt(content, password).toString();
  
      // Create Blob with encrypted content
      const element = document.createElement('a');
      const file = new Blob([encryptedContent], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = 'encryptedFile.txt';
      document.body.appendChild(element); 
      element.click();
    };

  return (
    <div className='main-page-container'>
        <Header/>
        <div className='row-flex-container'>
          {currentPageType ? <AuthPage onClick = {onClickEvent}/> : <RegisterPage onClick = {onClickEvent}/>}
          <div className='chat'>
          <Chat chatHistory={chatHistory} setChatHistory={setChatHistory}/>
          {/* <InputLine chatHistory = {[chatHistory, setChatHistory]}/> */}
          </div>
        </div >
        <FileDrop />
        {/* <button onClick={downloadTxtFile("0x00123", "123")}></button> */}
        <Footer/>
    </div>
  )
}

export default MainPage
