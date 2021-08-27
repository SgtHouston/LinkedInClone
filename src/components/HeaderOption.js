import React from 'react';
import '../componentcss/HeaderOption.css';
import { Avatar } from "@material-ui/core";


function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {/* If I pass in an icon, render icon */}
            { Icon &&  <Icon className='headerOption__icon' /> }

            {/* If I pass in an avatar, render avatar */}
            { avatar && <Avatar className='headerOption__icon' src={avatar} /> }

            {/* Title of Option Passed in via header */}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption;
