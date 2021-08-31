import React from 'react'
import Logo from '../images/LI-Logo.png'
import '../componentcss/Login.css'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import {useState } from 'react'




function LoginPage(props) {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [job, setJob] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({})
    const [pic, setPic] =  useState({})
    const dispatch = useDispatch()

    function redirect_Page () {
        var tID = setTimeout(function () {
            window.location.href = "/main";
            window.clearTimeout(tID);		// clear time out.
        }, 2000);
        } 

    function handleClick(e) {
        e.preventDefault();
        console.log('Logging User')
        setUser ({
            fname : fname,
            lname : lname,
            name : fname + ' ' + lname,
            jobdescription : job, 
            email : email, 
            pic : pic
        })
            
        console.log(user)

        dispatch(actionCreateUser(user))
        
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
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <input type="text" className="form-control" id="validationDefault01" placeholder="First name"  onChange={(e) => setFname(e.target.value)} required />
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
                                <input type="email" className="form-control" id="validationDefault03" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-muted" onChange={(e) => setPic(e.target.value)}>Upload A Headshot Photo</label>
                            <br/>
                            <input type="file" className="form-control-file" id="FormControlFile1" />
                        </div>
                        <br/>
                        <button className="btn btn-primary login__button" type="submit" onClick={(e) => {handleClick(e)}} >Login </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
