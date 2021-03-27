import React from 'react'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import SortOutlinedIcon from '@material-ui/icons/SortOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';



import { Avatar, Button } from '@material-ui/core'

function Feedform() {

    let inputRef = React.useRef()

    const handleFile = () => {
        inputRef.current.click()
        console.log(inputRef.current)
    }

    return (
        <div className="feed_header">
            <Avatar className="feed_avatar" />

            <div className="feed_header_form">
                <form>
                    <div className="feed_input">
                        <input type="text" placeholder="whats happening ?" />
                    </div>
                    <div className="feed_btn_tweet">
                        <div className="tweet_data">
                            <span onClick={handleFile}><CropOriginalIcon /></span>
                            <input type="file" style={{ "display": "none" }} ref={inputRef} />
                            <GifIcon />
                            <SortOutlinedIcon className="sort_icon" />
                            <EmojiEmotionsOutlinedIcon />
                            <ScheduleIcon className="schdule_icon"/>
                        </div>
                        <Button className="feed_tweet_submit_btn">Tweet</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Feedform
