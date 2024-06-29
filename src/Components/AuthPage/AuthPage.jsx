import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AuthInput from '../AuthInput/AuthInput'
import AuthButton from '../AuthButton/AuthButton'
import './AuthPage.css'


const AuthPage = (props) => {
    const buttonOnClick = ()=>{}
  return (
    <div className='auth-container'>
        {/* <button className = "hide-button" onClick = {()=>{
            const menu = document.getElementsByClassName("auth-container")[0].classList.add("hidden")
        }}></button> */}
        <div className='auth-header'>
            {"Sign in"}
        </div>
        <div className='auth-redirect'>
        {"Have no account?"}
        <button onClick = {props.onClick} className='switch-button'> {"Register"} </button>
        </div>
        <div className='login-elements'>
            <AuthInput name =  {"Username" } src = "./Static/person.png"/>
            <AuthInput name = {"Password" }src = "./Static/password.png"/>
        </div>
        <div className='auth-button'>
            <AuthButton name = {"Sign in"} function = {buttonOnClick} />
        </div>
    </div>
  )
}

export default AuthPage