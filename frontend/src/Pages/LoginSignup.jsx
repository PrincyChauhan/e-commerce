import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginSignup'>
            <div className="loginsignup-container">
                <h1>Signup</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account?<span>login here</span></p>
                <div className="lofinsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to the terms use & privcy policy</p>

                </div>

            </div>
        </div>
    )
}

export default LoginSignup