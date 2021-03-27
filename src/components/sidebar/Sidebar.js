import React from 'react'
import { NavLink } from 'react-router-dom'

import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'

//css
import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            {/* logo */}
            <TwitterIcon className="twitter_icon" />
            {/* sidebarOtion */}
            <div className="icon_section">
                <NavLink to="/" exact>
                    <SidebarOption text={"Home"} Icon={HomeIcon} />
                </NavLink>
                
                <SidebarOption text={"Explore"} Icon={SearchIcon} />
                <SidebarOption text={"Notifications"} Icon={NotificationsIcon} />
                <SidebarOption text={"Message"} Icon={MailOutlineIcon} />
                <SidebarOption text={"Bookmarks"} Icon={BookmarkBorderIcon} />
                <SidebarOption text={"Lists"} Icon={SpeakerNotesIcon} />
                <NavLink to="/profile">
                    <SidebarOption text={"Profile"} Icon={AccountCircleIcon} />
                </NavLink>
                <SidebarOption text={"More"} Icon={MoreHorizIcon} />
            </div>

            {/* button tweet */}
            <Button className="tweet_btn">Tweet</Button>
        </div>
    )
}

export default Sidebar;
