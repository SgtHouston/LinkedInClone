import React from 'react'


function SidebarIcon({Icon, title}) {
    return (
        <div className="sidebarIcon">
            <br/>
            <p>{title}{Icon}</p>

            
        </div>
    )
}

export default SidebarIcon
