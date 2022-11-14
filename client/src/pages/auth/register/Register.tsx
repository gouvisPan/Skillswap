import React from 'react'
import RegisterForm from './RegisterForm/RegisterForm'
import './Register.scss'
import { useState } from 'react'
import {ImGoogle} from 'react-icons/im'
import {ImFacebook} from 'react-icons/im'

const Register = () => {
  const [isRegistered, setIsRegister] = useState(false);

  return (
    <div className="register">
      <div className="register__left">
        <h1>Create Account</h1>
        <div className="register__left--icons">
          <ImGoogle className="register__left--icons__icon"/>
          <ImFacebook className="register__left--icons__icon"/>
        </div>
        <RegisterForm/>
      </div>
      <div className="register__right">
        <h1>SkillSwap User?</h1>
        <h5>Welcome back! Get back to your growth journey right away</h5>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Register