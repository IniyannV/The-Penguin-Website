import React, { useState } from 'react'
import './LoginSignup.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import lock_icon from '../assets/lock.png';

const LoginSignup = () => {
    
    let [width, setWidth] = useState(100);

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input">
            <img src={user_icon} height={30} alt="" />
            <input type="text" />
        </div>

        <div className="input">
            <img src={email_icon} height={30} alt="" />
            <input type="email" />
        </div>

        <div className="input">
            <img src={lock_icon } height={30} alt="" />
            <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
