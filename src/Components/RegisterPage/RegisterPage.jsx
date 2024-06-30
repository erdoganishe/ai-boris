import React from 'react'
import './RegisterPage.css'
import AuthInput from '../AuthInput/AuthInput'
import AuthButton from '../AuthButton/AuthButton'
import axios from 'axios'

const RegisterPage = (props) => {

    

    const buttonOnClick = ()=>{
        const inputs = document.getElementsByClassName("login-element-input")
        let email = inputs[0].value
        let pwd = inputs[2].value
        let login = inputs[1].value
        let confpwd = inputs[3].value
        
        if (confpwd==pwd){
            let formData = new FormData()
            formData.append("login", login)
            formData.append("email", email)
            formData.append("password_hash", pwd)    
            console.log(formData)
            
            const fetchData = async (data) => {
                try {
                console.log(data)
                const response = await axios.post('auth/register', data, {
                    headers: {
                      'Content-Type': 'application/json'
                    }})
                console.log(response)
                nav("../login")
                } catch (error) {
                console.error('Error fetching data:', error)
                }
            };

            let page = document.getElementsByClassName("register-container")[0]
            page.classList.add('hidden')

        }
        else
        {
            alert("Passwords doesn`t match")
        }

       
    }
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