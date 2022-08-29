import React from 'react'
import '../componentcss/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderLink from './HeaderLink';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { actionCreateUser } from '../redux/actions/user'
import Logo from '../images/LI-In-Bug.png'
import "../firebase";

function Header() {
    

    const dispatch = useDispatch()
    const auth = getAuth();

    
    

    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo}   alt=""></img>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" onSubmit={() => {}} />
                    
                </div>
                {/* sign out button */}
                <button className="logout__button" title="Log Out User"
                        
                        onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    // Sign-out successful.
                                    dispatch(actionCreateUser(null));
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                            
                            
                        }}
                    >
                        Log Out
                    </button>
            </div>

            <div className="header__right">
                <a href="/main"><HeaderLink Icon={HomeIcon} title="Home" /></a>
                <HeaderLink Icon={SupervisorAccountIcon} title="My Network" />
                <a href="https://Indubitably.app" ><HeaderLink Icon={BusinessCenterIcon} title="Jobs" /></a>
                <a href="https://smac-overflow.netlify.app" ><HeaderLink Icon={SmsIcon} title="Messaging" /></a>
                <HeaderLink Icon={NotificationsIcon} title="Notifications" />
                <a href="https://chouston.dev" ><HeaderLink avatar={AccountCircleIcon} title="About The Dev" /></a>
                <a href="https://Indubitably.app" ><HeaderLink Icon={AppsIcon} title="Work" /></a>
                <a href="https://www.linkedin.com/learning/search?trk=homepage-basic_guest_nav_menu_learning"><HeaderLink Icon={LiveTvIcon} title="Learning" /></a>
            </div>
        </div>
    )
}

export default Header
