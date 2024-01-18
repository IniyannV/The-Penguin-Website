import React from 'react'
import '../styles/Page-header.css'
import '../styles/Donate.css'
import penguin_sad from '../assets/penguin-sad.png'

function Donate() {
  return (
    <div>
      <div className='page-header'> Donation page</div>
      <div className='donation-screen'>
      <div className='filler filler-left'></div>
      <div className='filler filler-right'></div>
      <img className='penguin-beg-img' src={penguin_sad} /> 
        <button className='donate-btn'>Donate to our feather friends!</button>
      </div>
    </div>
  )
}

export default Donate
