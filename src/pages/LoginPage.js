import React from 'react'
import Logo from '../images/LI-Logo.png'
import '../componentcss/Login.css'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import { useState } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import "../firebase";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();


function LoginPage(props) {
    

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [job, setJob] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({})
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    

    function redirect_Login() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);
            // clear time out.
        }, 1000);
    }

    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/main";
            window.clearTimeout(tID);
            // clear time out.
        }, 1000);
    }

    async function handleRegister(e) {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential.user.uid);
                addDoc(collection(db, 'users'), {
                    id: userCredential.user.uid,
                    fname: fname,
                    lname: lname,
                    name: fname + ' ' + lname,
                    jobdescription: job,
                    email: email,
                })        
                setUser({
                    id: userCredential.user.uid,
                    fname: fname,
                    lname: lname,
                    name: fname + ' ' + lname,
                    jobdescription: job,
                    email: email,
                })

                dispatch(actionCreateUser(user))
                
            })
            .catch((error) => {
                console.log(error);
            });
        redirect_Login()
        console.log("user", user)
        
        
    }


    async function handleLogin(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            
        console.log('logged in with user' , user )
        redirect_Main()
            
        
    }



    return (
        <div className="login__page">

            {/* Header */}
            <div className="login__header">
                <img className="header__img" src={Logo} alt=""></img>
            </div >

            {/* Login Body */}
            <div className="login__body" >
                <div className="login__spacerdiv">

                </div>

                <div>
                    <form className="form">
                        <fieldset>
                            <legend className="col-md-12 mb-3 Register login__text"> Login</legend>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <input type="email" className="login__form-control" id="validationDefault01" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <input type="password" className="login__form-control" id="validationDefault02" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button className="btn login__button col-md-6 mb-3" type="submit" onClick={(e) => { handleLogin(e) }} > Login </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="login__spacerdiv">

                </div>

            </div>
        </div>
    )
}

export default LoginPage
