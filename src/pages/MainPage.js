import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Ad from '../components/Ad'
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import "../componentcss/Main.css"
import { useSelector } from 'react-redux'
import { db } from "../firebase";
import { useEffect } from 'react';


function MainPage(props) {

    const user = useSelector( state => state.user)
    const uid = db._credentials.currentUser.uid

    // Same as ComponentDidMount
    useEffect(() => {
        console.log("You're logged in and on main! Here's your user id")
        
        console.log(uid)
        // if uid not null
        if(uid) {
            // return uid = uid from db users in firestore
            console.log("i got the uid, it's", uid)
            // store info in state
            
            // Use state to display info on the page
        }
        
            
            
    },[uid]); 
    // empty dependence array to only run once
    
    return (
        <div className="main">
            {/* Header */}
            <Header />

            {/* App Body */}
            <Ad />
            <div className="main__body" >
                <div className="spacerdiv">

                </div>
                {/* Sidebar */}
                <Sidebar />
                {/* Feed */}
                <Feed />
                {/* Widgets */}
                <Widgets />
                <div className="spacerdiv">

                </div>
            </div>

        </div>
    );
}

export default MainPage;