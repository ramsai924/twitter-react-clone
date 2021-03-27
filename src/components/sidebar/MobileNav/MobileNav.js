import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

//css
import './mobilenav.css'

function MobileNav() {
    return (
        <div className="mobile__nav">
            <HomeIcon />
            <SearchIcon />
            <NotificationsIcon />
            <MailOutlineIcon />
        </div>
    )
}

export default MobileNav
