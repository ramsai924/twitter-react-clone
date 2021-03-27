import React from 'react'

import './sidebarOption.css'

function SidebarOption({ text, Icon }) {
    return (
        <div className="sidebar_option">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
