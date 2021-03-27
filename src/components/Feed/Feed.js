import React from 'react'

//icons
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';


//css
import './feed.css'
import Post from './post/Post';
import Feedform from './feed_form/Feedform';

function Feed(props) {

   console.log(props)

    return (
        <div className="feed">
            {/* main feed header */}
            <div className="main_feed_header">
                <h2>Home</h2>
                <EqualizerRoundedIcon />
            </div>

            {/* tweet section */}
            <Feedform />

            {/* posts section */}
            <div className="posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>


        </div>
    )
}

export default Feed
