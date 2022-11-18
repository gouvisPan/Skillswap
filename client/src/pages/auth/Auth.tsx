import React, { Fragment } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./Auth.scss";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Shapes from "../../components/UI/shapes/Shapes";
import LoginForm from "./LoginForm/LoginForm";

const Auth: React.FC = () => {
  const [whiteCSS, setwhiteCss] = useState("register__left");
  const [colorfulCSS, setColorfulCss] = useState("register__right");
  const [signIn, setSignIn] = useState(true);

  const signInHandler = () => {
    setwhiteCss(`register__left unmountWR`);
    setColorfulCss(`register__right unmountCL`);

    setTimeout(() => {
      setSignIn(false);
    }, 500);
  };

  const signUpHandler = () => {
    setwhiteCss(`register__left unmountWL`);
    setColorfulCss(`register__right unmountCR`);

    setTimeout(() => {
      setSignIn(true);
    }, 500);
  };

  const whiteJSX = signIn ? (
    <Fragment>
      <h1>Sign In</h1>

      <LoginForm />
      <h3>Or</h3>
      <div className="register__left--google">
        <FcGoogle className="register__left--google__icon" />
        <span>Login with google</span>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <h1>Create Account</h1>
      <RegisterForm />
      <h3>Or</h3>
      <div className="register__left--google">
        <FcGoogle className="register__left--google__icon" />
        <span>Sing Up with google</span>
      </div>
    </Fragment>
  );

  const colorJSX = signIn ? (
    <Fragment>
      <Shapes />
      <h1>Not a user?</h1>
      <h5>
        Fill in your credentials to create an account or chose another sign-up
        method.
      </h5>
      <button onClick={signInHandler}>Sign Up</button>
    </Fragment>
  ) : (
    <Fragment>
      <Shapes />
      <h1>SkillSwap User?</h1>
      <h5>
        Welcome back! Login to your account and get back to your growth journey
        right away
      </h5>
      <button onClick={signUpHandler}>Sign In</button>
    </Fragment>
  );

  return (
    <div className="register">
      <div className={whiteCSS}>{whiteJSX}</div>
      <div className={colorfulCSS}>{colorJSX}</div>
    </div>
  );
};

export default Auth;
