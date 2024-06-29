import React from 'react'
import './RegisterPage.css'
import AuthInput from '../AuthInput/AuthInput'
import AuthButton from '../AuthButton/AuthButton'

const RegisterPage = (props) => {

    const buttonOnClick = ()=>{}
    return (
        <div className='register-container'>
        <div className='register-header'>
            Register
        </div>
        <div className='register-redirect'>
            Already have an account?
            <button onClick = {props.onClick} className='switch-button'> {"Sign up"} </button>
        </div>
        <div className='login-elements'>
            <AuthInput name = {"Email"} src = "./Static/email.png"/>
            <AuthInput name = {"Username"} src = "./Static/person.png"/>
            <AuthInput name = {"Password"} src = "./Static/password.png"/>
            <AuthInput name = {"Confirm password"} src = "./Static/password.png"/>
        </div>
        <div className='register-button'>
            <AuthButton name = "Sign up" function = {buttonOnClick}/>
        </div>
    </div>
    )
}

export default RegisterPage