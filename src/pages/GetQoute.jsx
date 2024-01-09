import React from 'react'
import '../assets/styles/getqoute.css'
import Qoute from '../components/Qoute'
const GetQoute = () => {
  return (
    <div className='get_qoute'>
      <div className="container">
      <h1>Get qoute</h1>
      <p>Your email address will not be published. Required fields are marked *</p>
       
       <div className="input_content">
        <div className="box">
           <span className='label'>Moving from</span>
           <input type="text" placeholder='Street Address or Zip Code'/>
        </div>
        <div className="box">
           <span className='label'>Moving to</span>
           <input type="text" placeholder='Street Address or Zip Code'/>
        </div>
        <div className="box">
           <span className='label'>E-mail address</span>
           <input type="email" placeholder='example@gmail.com'/>
        </div>
        <div className="box">
           <span className='label'>Date of move</span>
           <input type="text" placeholder='00.00.0000' />
        </div>
        <div className="box">
           <span className='label'>Moving from</span>
           <input type="text" placeholder='What’s your name?'/>
        </div>
        <div className="box">
           <span className='label'>Name</span>
           <input type="text" placeholder='+1 (***) **-**-**'/>
        </div>
       </div>
       <span className='size'>Size of move</span>
    <div className="radio_buttons">
      <div className="radio">
      <input type="radio" name="transportation" id="car" value="car"/>
      <label htmlFor="">Studio</label>
      </div>
      <div className="radio">
      <input type="radio" name="transportation" id="car" value="car"/>
      <label htmlFor="">2-bedroom</label>
      </div>
      <div className="radio">
      <input type="radio" name="transportation" id="car" value="car"/>
      <label htmlFor="">3-bedroom</label>
      </div>
      <div className="radio">
      <input type="radio" name="transportation" id="car" value="car"/>
      <label htmlFor="">Office</label>
      </div>
      <div className="radio">
      <input type="radio" name="transportation" id="car" value="car"/>
      <label htmlFor="">Other</label>
      </div>
    </div>
      <a href="/" className='getqoute'>get qoute</a>
     </div>
    </div>
  )
}

export default GetQoute