import { useContext, useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress } from "@mui/material";

export default function Login() {

  const email=useRef();
  const password = useRef();
const {user,isFetching, error, dispatch}= useContext(AuthContext);


const handleClick =(e)=>{
e.preventDefault()
loginCall({email:email.current.value,password:password.current.value},dispatch);
};

console.log(user);

  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
       
            <h3 className="loginLogo">SocialApp</h3>
            <span className="loginDesc">Connet with friends and the world around you.</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input className="loginInput" type="email" placeholder="Email" required ref={email}></input>
                <input className="loginInput" type="password" placeholder="Password" required ref={password} minLength="6"></input>
                <button className="loginButton" type="submit">{isFetching ? <CircularProgress/>: "Log in"}</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">{isFetching ? <CircularProgress/>: "Create a New Account"}</button>
            </form>
        </div>
    </div>
      
    </div>
  )
}
