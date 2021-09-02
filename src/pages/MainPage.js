import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Ad from '../components/Ad'
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import "../componentcss/Main.css"
import { useSelector } from 'react-redux'


function MainPage(props) {

    const user = useSelector( state => state.user)
    console.log("You're logged in and on main! Here's your user info")
    console.log(user)
    
    
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