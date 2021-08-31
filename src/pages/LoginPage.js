import React from 'react'
import Header from '../components/Header'
import Ad from '../components/Ad'



function LoginPage(props) {
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

export default LoginPage
