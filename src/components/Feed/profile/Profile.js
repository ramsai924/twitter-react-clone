import React from 'react'
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CakeIcon from '@material-ui/icons/Cake';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Avatar } from '@material-ui/core'

import Post from '../post/Post'

//css
import './profile.css'


function Profile() {
  

    return (
        <div className="profile_section" >
            <div className="profile_top_header">
                <NavLink to="/" className="atag_MuiSvgIcon-root">
                    <ArrowBackIcon />
                </NavLink>
                <div className="header_display_user_name">
                    <h2>Ramsai</h2>
                    <p>24 Tweets</p>
                </div>
            </div>

            <div className="cover_pic_section">
                <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432" alt="cover_photo" />
                
            </div>

            <div className="profile_data">
                <div className="avatar_and_tweet">
                    <Avatar className="profile_avatar" src="https://pbs.twimg.com/profile_images/1197935827226988544/oKY371YH_400x400.jpg"/>
                    <button className="profile_tweet_btn">Edit Profile</button>
                </div>

                <div className="display_user_profile_name">
                    <h2>Ramsai</h2>
                    <p>@ramsai924</p>
                </div>

                <div className="display_user_data">
                    <div className="user_data_item">
                        <PersonPinIcon />
                        <span>&nbsp;Hyderabad, India</span>
                    </div>
                    <div className="user_data_item">
                        <CakeIcon />
                        <span>&nbsp;16 Sep 1996</span>
                    </div>
                    <div className="user_data_item">
                        <CalendarTodayIcon />
                        <span>&nbsp;Nov 2008</span>
                    </div>
                </div>

                <div className="followers_and_tweets">
                    <p>74<span className="followtweets_content"> Following</span></p>
                    <p>10<span className="followtweets_content"> Followers</span></p>
                </div>
            </div>


            <div className="profile_feed_data">
                <Post userTweet={true} />
                <Post userTweet={true} />
                <Post userTweet={true} />
            </div>
        </div>
    )
}

export default Profile
