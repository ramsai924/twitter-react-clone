import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

//css
import './widget.css'
import Trend from './trends/Trend';

function Widget() {
    return (
        <div className="widget">

            {/* search section */}
            <div className="search">
                <SearchIcon />
                <form>
                    <input type="text" name="search" className="search_input" placeholder="search" />
                </form>
            </div>

            {/* what happening */}
            <div className="tweet_whats_happening">
                <div className="tweet_whats_happening_header">
                    <h2>What's happening</h2>
                </div>

                {/* what happening loop */}
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />

                <div className="wh_data_more">
                    <a href="/">show more</a>
                </div>

            </div>

        </div>
    )
}

export default Widget
