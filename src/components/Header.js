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
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import "../firebase";

function Header() {
    const dispatch = useDispatch()
    const auth = getAuth();
    function redirect_Page() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);		// clear time out.
        }, 1000);
    }


    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"   alt=""></img>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                    {/* sign out button */}
                    <button
                        onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    // Sign-out successful.
                                    dispatch(actionCreateUser(null));
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                            
                            redirect_Page()
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            <div className="header__right">
                <a href="/main"><HeaderOption Icon={HomeIcon} title="Home" /></a>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <a href="https://Indubitably.app" ><HeaderOption Icon={BusinessCenterIcon} title="Jobs" /></a>
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={Chris} title="Me" />
                <HeaderOption Icon={AppsIcon} title="Work" />
                <HeaderOption Icon={LiveTvIcon} title="Learning" />
            </div>
        </div>
    )
}

export default Header
