import React from 'react'
import './MainPage.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Chat from '../Chat/Chat'
import { useState, useEffect } from 'react'
import InputLine from '../InputLine/InputLine'
import AuthPage from '../AuthPage/AuthPage'
import RegisterPage from '../RegisterPage/RegisterPage'
const MainPage = () => {
    const [currentPageType, setCurrentPageType] = useState(true)
    const [chatHistory, setChatHistory] = useState([
        {sender: 1, message: "Hello! I am Boris and I`m here to help you to use TON wallet!"},  
    ])

    const onClickEvent = ()=>{
      setCurrentPageType(!currentPageType)
    }

    const hideAuthPage = ()=>{
      document.getElementsByClassName("auth-container")[0].classList.add("hidden")
    }

  return (
    <div className='main-page-container'>
        <Header/>
        <div className='row-flex-container'>
          {currentPageType ? <AuthPage onClick = {onClickEvent}/> : <RegisterPage onClick = {onClickEvent}/>}
          <div className='chat'>
          <Chat chatHistory = {[chatHistory, setChatHistory]}/>
          <InputLine chatHistory = {[chatHistory, setChatHistory]}/>
          </div>
        </div >
        <Footer/>
    </div>
  )
}

export default MainPage