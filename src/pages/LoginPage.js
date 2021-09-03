import React from 'react'
import Logo from '../images/LI-Logo.png'
import '../componentcss/Login.css'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../firebase";




const auth = getAuth();


function LoginPage(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/main";
            window.clearTimeout(tID);
            // clear time out.
        }, 1000);
    }

    async function handleLogin(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password);

        redirect_Main();


    }


    return (
        <div className="login__page">

            {/* Header */}
            <div className="login__header">
                <a href="/" title="Sign In Page"><img className="header__img" src={Logo} alt=""></img></a>
                <a href="/register" title="Register A New User"><button className="register__btn" >Register</button></a>
            </div >

            {/* Login Body */}
            <div className="login__body" >
                <div className="login__spacerdiv">

                </div>

                <div>
                    <form className="form">
                        <fieldset>
                            <legend className="col-md-12 mb-3 Register login__text"> Sign In</legend>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <input type="email" className="login__form-control" id="validationDefault01" title="Please Enter Your E-Mail" placeholder=" E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <input type="password" className="login__form-control" id="validationDefault02" title="Please Enter Your Password" placeholder=" Password" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <a href="/register"><p className="forgot__password text-muted" title="Register A New User">Forgot Password?</p></a>
                                <button className="btn login__button col-md-12 mb-3" type="submit" onClick={(e) => { handleLogin(e) }} title="Sign In" > Sign in </button>

                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
