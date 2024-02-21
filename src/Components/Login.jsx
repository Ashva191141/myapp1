import React from 'react';
import './Login.css';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    return (

     <div className='wrapper'>

         <form action="">
            <h1>Login</h1>
             <div className="input-box">
               <input type="text" 
               style={{paddingLeft:"20px"}} 
               placeholder='Username' required />
               <FaUser className='icon'/>
             </div>
             <div className="input-box">
               <input type="password" 
               style={{paddingLeft:"20px"}} 
               placeholder='Password' required />
               <FaLock className='icon' />
             </div>
             <div className="remember-forgot">
             <label><input type="checkbox" />Remember me</label>
             <a href="#">Forgot password?</a>
             </div>

             <button type="submit">Login</button>
             <p>Don't have an account ?</p>
            <Link to='/SignUp'>
              <div className="SignUp">
            <p> <a href="#">SignUp</a></p>
            </div>
            </Link>

            
          </form> 
       </div>
    );
 };

 export default Login;
