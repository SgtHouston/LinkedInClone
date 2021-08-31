import React from 'react'
import GroupIcon from '@material-ui/icons/Group';

function RecentItem({topic}) {

    return (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash"><GroupIcon /></span>
            <p>{topic}</p>
        </div>
    )
}

export default RecentItem


