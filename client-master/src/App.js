import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {Person} from "@mui/icons-material";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React, { useContext } from "react";
import { Routes ,Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext)
  return (
<Router>
  <Routes>
  <Route path='/' element={user ?<Home />: <Register/>}>
      
    </Route>
    <Route path='/login' element={user ?<Navigate replace to="/" />: <Login />}>
     
    </Route>
    <Route path='/register' element={user? <Navigate replace to="/" />: <Register />}> 
      
    </Route>
    <Route path='/profile/:username' element={<Profile />}>
      
    </Route>
  </Routes>
    
  
  
</Router>
  )
}

export default App;
