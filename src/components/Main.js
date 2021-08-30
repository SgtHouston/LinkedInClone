import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Ad from './Ad';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import "../componentcss/Main.css"


function Main() {
    return (
        <div className="main">
            {/* Header */}
            <Header />

            {/* App Body */}
            <Ad />
            <div className="main__body" >

                {/* Sidebar */}
                <Sidebar />
                {/* Feed */}
                <Feed />
                {/* Widgets */}
                <Widgets />
            </div>

        </div>
    );
}

export default Main;