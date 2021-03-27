import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import AssessmentIcon from '@material-ui/icons/Assessment';

import './post.css'

function Post(props) {
    return (
        <div className="main_post_content_start">
            <Avatar className="post_feed_avatar" />

            <div className="post_data">
                <div className="user_to_know_content">
                    <h2>Ramsai<VerifiedUserRoundedIcon style={{ "fontSize": "15px", "color": "#1DA1F2" }} /></h2>
                    <p>@ramsai924</p>
                </div>
                <div className="post_content_data">
                    <p style={{ margin: "0" }}>Note that the development build is not optimized.To create a production build, use npm run build.  </p>
                </div>
                <div className="post_image">
                    <img src="https://pbs.twimg.com/media/Ewx4GU1WUAIfNmz?format=jpg&name=small" alt="post_image" />
                </div>
                <div className="post_activity_controll">
                    <ChatBubbleOutlineIcon />
                    <ReplayIcon />
                    <FavoriteBorderIcon />
                    <ScreenShareOutlinedIcon />
                    {props.userTweet && <AssessmentIcon />}
                </div>
            </div>
        </div>
    )
}

export default Post
