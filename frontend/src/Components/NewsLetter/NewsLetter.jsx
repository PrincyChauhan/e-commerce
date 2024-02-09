import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on Your Email</h1>
        <p1>
            Subscribe to our newsletter and stay updated for special offers!
            <div>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </p1>
    </div>
  )
}

export default NewsLetter