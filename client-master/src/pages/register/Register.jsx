import "./register.css"
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const email=useRef();
  const password = useRef();
  const username = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick =async (e)=>{
    e.preventDefault()
if(password.current.value !== passwordAgain.current.value){
  passwordAgain.current.setCustomValidity("Passwords don't match!");
}else{
  const user={
    username:username.current.value,
    password:password.current.value,
    email:email.current.value,
  }
  try{
    await axios.post("/auth/register",user);
    navigate("/login");
   
  }catch(err)
  {
    console.log(err);
  }
 
}
  };

  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
       
            <h3 className="loginLogo">SocialApp</h3>
            <span className="loginDesc">Connet with friends and the world around you.</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
            <input className="loginInput" required ref={username} placeholder="Username"></input>
                <input className="loginInput"  required ref={email} minLength="6" type="email" placeholder="Email"></input>
                <input className="loginInput"  required ref={password} minLength="6" type="password" placeholder="Password"></input>
                <input className="loginInput"  required ref={passwordAgain} type="password" placeholder="Password Again"></input>
                <button className="loginButton" type="submit">Sign Up</button>
              
                <button className="loginRegisterButton">Login Into Account</button>
            </form>
        </div>
    </div>
      
    </div>
  )
}
