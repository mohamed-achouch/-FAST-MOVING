import React from 'react'
import '../assets/styles/register.css'
const Register = () => {
  return (
    <div className='register'>
       <div className="content_register">
       <h1>Registration</h1>
       <div className="list_box">
        <div className="box">
            <span>Username</span>
            <input placeholder='Enter name' type="text" />
        </div>
        <div className="box">
            <span>Email</span>
            <input placeholder='example@gmail.com'  type="email" />
        </div>
        <div className="box">
            <span>Password</span>
            <input type="password" placeholder='Create password'/>
        </div>
       </div>
       <div className="agree">
         <div>
            <input type="checkbox" checked="checked" className='checkbox'/>           
            <p>I agree to the <span>Privacy & Policy</span></p>
         </div>
         <div>
            <input type="checkbox" className='checkbox'/>
            <p>I agree to the <span>Privacy & Policy</span></p>
         </div>
       </div>

       <a href="/" className='sign_up'>Sign Up</a>
       <p className='paragraph'>Already have an account? <a href="/login">Please login Here</a></p>
       </div>
    </div>
  )
}

export default Register