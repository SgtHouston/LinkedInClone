import React from 'react';
import '../componentcss/HeaderLink.css';
import { Avatar } from "@material-ui/core";

function HeaderLink({ avatar, Icon, title }) {
    return (
        <div className="headerLink">
            {/* If I pass in an icon, render icon */}
            { Icon &&  <Icon className='headerLink__icon' /> }

            {/* If I pass in an avatar, render avatar */}
            { avatar && <Avatar className='headerLink__icon' src={avatar} /> }

            {/* Title of Option Passed in via header */}
            <h3 className='headerLink__title'>{title}</h3>
        </div>
    )
}

export default HeaderLink;
