import React from 'react'
import '../componentcss/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'; 
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chris from "../images/Avatar.png"
import AppsIcon from '@material-ui/icons/Apps';
import LiveTvIcon from '@material-ui/icons/LiveTv';

function Header() {
    return (
            <div className="header">
                <div className="header__left">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""></img>
                    <div className="header__search">
                        <SearchIcon/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div> 
                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home" />
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                    <a href="https://Indubitably.app" ><HeaderOption Icon={BusinessCenterIcon} title="Jobs"/></a>
                    <HeaderOption Icon={SmsIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOption avatar={Chris} title="Me" />
                    <HeaderOption Icon={AppsIcon} title="Work" />
                    <HeaderOption Icon={LiveTvIcon} title="Learning" />
                </div>
            </div>
    )
}

export default Header
