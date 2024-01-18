import React from 'react'
import '../styles/Page-header.css'
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div>
      <Link className='page-header' to="https://mail.google.com/#inbox?compose=DmwnWrRqgrrwGMJXXMPNKRHnffrzjbBpRvBXLVRfpfkClmhfkMnLCHTLwVsCsrNDPvHMSZxTqfJb"> Email to our CEO</Link>
    </div>
    
  )
}

export default Contact
