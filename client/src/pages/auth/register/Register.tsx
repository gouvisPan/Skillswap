import React from 'react'
import RegisterForm from './RegisterForm/RegisterForm'
import './Register.scss'
import { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook} from 'react-icons/im'
import Shapes from '../../../components/Header/UI/shapes/Shapes'

const Register = () => {
  const [isRegistered, setIsRegister] = useState(false);

  return (
    <div className="register">
      <div className="register__left">
        <h1>Create Account</h1>
        <RegisterForm/>
        <h3>Or</h3>
        <div className="register__left--google">
          <FcGoogle className="register__left--google__icon" />
          <span>Login with google</span>
        </div>
        
      </div>
      <div className="register__right">
        <Shapes/>
        <h1>SkillSwap User?</h1>
        <h5>Welcome back! Get back to your growth journey right away</h5>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Register