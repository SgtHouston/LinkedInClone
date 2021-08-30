import React from 'react'
import Header from './Header'
import Ad from './Ad'
import "../componentcss/Profile.css"

function Profile() {
    return (
        <div>
            {/* Header */}
            <Header />
            <Ad />
            {/* Profile Body */}
            <div className="profile__body" >
                <div className="main__panel">
                    Main Panel
                </div>
                <div className="side__panel">
                    Side Panel
                </div>


            </div>
        </div>
    )
}

export default Profile
