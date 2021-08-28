import React from 'react'
import '../componentcss/Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import FormatIcon from '@material-ui/icons/FormatIndentIncrease';
import { Avatar } from "@material-ui/core";


function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__inputContainertop">
                    <Avatar avatar={Avatar} />
                    
                    <div className="feed__input">
                        <form >
                            <input type="text" placeholder="Start a post"/>
                            <button type="submit"> Send</button>
                        </form>
                    </div>
                </div>
                <div className="feed__inputOptions">
                    {/* Input Options */}
                    <InputOption  Icon={ImageIcon} title="Photo" color="70B5F9"/>
                    <InputOption  Icon={SubscriptionsIcon} title="Video" color="#6EB84C"/>
                    <InputOption  Icon={EventIcon} title="Event" color="#E09230"/>
                    <InputOption  Icon={FormatIcon} title="Write Article" color="#F97C83"/>   
                </div>
            </div>
            <div style={{ borderTop: "2px solid lightgray", marginLeft: 20, marginRight: 20 }}></div>
        </div>  
    )
}

export default Feed



