import React from 'react'
import '../assets/styles/login.css'
const Login = () => {
  return (
    <div className='login'>
       <div className="content_login">
       <h1>Login</h1>
       <div className="list_box">
        <div className="box">         
            <input placeholder='Username or Email Address' type="text" />
        </div>
        <div className="box">
            <span>Password</span>
            <input type="password" placeholder='Create password'/>
        </div>
       </div>
      <div className="remember_me">
      <input type="checkbox" className='checkbox'/>
       <span>Remember me</span>
      </div>

       <a href="/"  className='log_in'>Log In</a>
      <div>
        <a href="/" className='recover_password'>Recover Password</a>
        <p> Don't have an account? <a href="register">Sign Up</a></p>
      </div>
       </div>
    </div>
  )
}

export default Login