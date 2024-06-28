import React from 'react'
import './MainPage.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Chat from '../Chat/Chat'
import { useState, useEffect } from 'react'
const MainPage = () => {

    const [chatHistory, setChatHistory] = useState([
        {sender: 1, message: "hui"}
    ])

  return (
    <div className='main-page-container'>
        <Header/>
        <Chat chatHistory = {[chatHistory, setChatHistory]}/>
        <Footer/>
    </div>
  )
}

export default MainPage