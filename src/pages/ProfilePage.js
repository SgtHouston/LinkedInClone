import React from 'react'
import Header from '../components/Header'
import Ad from '../components/Ad'
import "../componentcss/Profile.css"

function ProfilePage() {
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

export default ProfilePage
