import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AuthInput from '../AuthInput/AuthInput'
import AuthButton from '../AuthButton/AuthButton'
import './AuthPage.css'


const AuthPage = (props) => {
    const buttonOnClick = ()=>{
        const inputs = document.getElementsByClassName("login-element-input")
        let login = inputs[0].value
        let pwd = inputs[1].value
        let formData = new FormData()
        formData.append("login", login)
        formData.append("password", pwd)
        
        

        console.log(formData)
        //checkValid???????????
        let page = document.getElementsByClassName("auth-container")[0]
        page.classList.add('hidden')
    }
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