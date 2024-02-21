import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';


const SignUp = (e) => {

  
    useEffect(() => {
      fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR'
    
  }),

}).then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err, "network Issue"))

    } , []);

     const [info,setInfo] =useState();


 const handleChange = (e) => {
   setInfo((prev) => ({
     ...prev,
     [e.target.name]: e.target.value,
   })); 
 };
  useEffect(()=>{
    fetchdata();
  })
 
 useEffect(() => console.log(info), [info]);

 const fetchdata = async () => {

  const res= await fetch(" https://dummyjson.com/auth/login" );
  const data = await res.json();
  console.log(data);
 }

    return (

     <div className='wrapper'>

         <form action="" >
            <h1>Sign Up</h1>
             <div className="input-box">
               <input name="name"  style={{paddingLeft:"20px"}}
                type="text" placeholder='Username' required 
                onChange={handleChange}/>
               
             </div>
             <div className="input-box">
               <input  name="email" style={{paddingLeft:"20px"}}
               type="email" placeholder='E-mail ID' required 
               onChange={handleChange}/>
               
             </div>
             <div className="input-box">
               <input name="password" style={{paddingLeft:"20px"}}
               type="password" placeholder='Password' required 
               onChange={handleChange}/>
             </div>
             <div className="input-box">
               <input name ="confirm password" style={{paddingLeft:"20px"}}
               type="Confirm password" placeholder='Confirm Password' required 
               onChange={handleChange}/>
             
             
             </div>
             <Link to='/Login'>

             <button type="submit" >Submit</button>

             </Link>

          </form> 
       </div>
    );
 };

 export default SignUp;
