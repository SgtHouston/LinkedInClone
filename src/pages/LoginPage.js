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
    

    function redirect_Page() {
        var tID = setTimeout(function () {
            window.location.href = "/main";
            window.clearTimeout(tID);		// clear time out.
        }, 2000);
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
                // window.location.replace('/main')
            })
            .catch((error) => {
                console.log(error);
            });
        // redirect_Page()
        console.log("user", user)
        
        
    }


    async function handleLogin(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            
        console.log('logged in with user' , user )
        redirect_Page()
            
        
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

                <div className="form__div">
                    <form className="form">
                        <fieldset>
                            <legend className="col-md-4 mb-3 Register"> Register</legend>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" onChange={(e) => setFname(e.target.value)} required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" onChange={(e) => setLname(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <input type="text" className="form-control" id="validationDefault03" placeholder="Job Description" onChange={(e) => setJob(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <input type="email" className="form-control" id="validationDefault04" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <input type="password" className="form-control" id="validationDefault05" placeholder="Password" minLength="6" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <button className="btn btn-primary login__button col-md-4 mb-3" type="submit" onClick={(e) => { handleRegister(e) }} >Register </button>
                        </fieldset>
                    </form>
                    <br/>
                    <form className="form">
                        <fieldset>
                            <legend className="col-md-4 mb-3 Register"> Login</legend>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <input type="email" className="form-control" id="validationDefault01" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input type="password" className="form-control" id="validationDefault02" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            
                            <button className="btn btn-primary login__button col-md-4 mb-3" type="submit" onClick={(e) => { handleLogin(e) }} > Login </button>
                        </fieldset>
                    </form>





                </div>
            </div>
        </div>
    )
}

export default LoginPage
