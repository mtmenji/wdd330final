import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</p>
        <div>
            <input type='email' placeholder='Your Email ID'/>
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter