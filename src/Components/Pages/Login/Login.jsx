/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState,useContext,useEffect} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import UserContext from "../../../store/user-context";
import {useHistory} from 'react-router-dom';

const StyledLogin = styled.div`
  height: 70vh;
  display: grid;
  place-items: center;

  .loginContainer {
    display: flex;
    flex-flow: column;

    padding: 5rem;
    // border: 2px solid black;
    border-radius: 1.5rem;

    > * {
      margin: 1rem;
    }
  }

  .inputCont {
    border: none;
    outline: none;
    border-bottom: 1px solid #03898e;
    padding: 10px 20px;
    transition: all 100ms ease;

    &:focus {
      border: 1px solid #03898e;
    }
  }

  .loginLinks {
    a {
      color: #03989E;
    }
  }

  .loginTitle {
    color: #03989e;
  }

  .submit input{
    display: block;
    width: 245px;
    background-color: #03989E;
    border: none;
    padding: 5px;
    color: white;
    font-size: 20px;
  }

  .loginLinks .login{
    display: flex;
    text-align: left;
    margin-bottom: 10px;

    span{
      margin-right: 2px;
    }
  }

`;

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [check,setCheck] = useState('');

  const userCtx = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if(userCtx.isLoggedIn){
      history.push('/');
    }
  },[userCtx.isLoggedIn]);

  const submitHandler = () => {
    userCtx.onLogIn(email,password);
    if(email !== 'owncrib@gmail.com' || password !== '123456'){
      setCheck('Invalid email or password');
    }
  }

  const EmailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value)
  }

  const PasswordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value)
  }

  return (
    <StyledLogin>
      <div className="loginContainer">
        <h1 className="loginTitle">LOGIN:</h1>
        <div className="emailContainer">
          <input className="inputCont" placeholder="Email" required onChange={EmailHandler} type="email" />
        </div>
        <div className="passContainer ">
          <input className="inputCont" placeholder="Password" required onChange={PasswordHandler} type="password" />
        </div>
        <div className="submit">
          <input type='submit' value='Login' onClick={submitHandler} />
        </div>
        <span>{check}</span>
        <div className="loginLinks">
          <div className='login'>
            <span>Don't have an account?</span>
            <Link to="/register" onClick={() => window.location.href="/register"}>Register</Link>
          </div>
          <Link to="/">Forgot Password?</Link>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
