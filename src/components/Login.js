import React from 'react'
import Header from './Header'
import Ad from './Ad'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            {/* Header */}
            <Header />
            <Ad />
            {/* Login Body */}

            <div className="login__body" ></div>
        </div>
    )
}

export default Login
