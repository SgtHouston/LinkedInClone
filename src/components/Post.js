
import React from 'react'
import '../componentcss/Post.css'
import { Avatar } from '@material-ui/core'
import RelativeTime from "./RelativeTime"
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SendIcon from '@material-ui/icons/Send';


function Post({name, description, message, photoUrl, time}) {
    const now = new Date()




    return ( 
        
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar"/>
                <div className="post__info">
                    <p className="post__name">{name} &#8226; 1st</p>
                    <p className="post__description text-muted">{description}</p>
                    <p className="post__time text-muted"><RelativeTime date={now}/></p>
                </div>
            </div>
            <div className="post__body">
                <p className="post__body">{message}</p>
            </div>
            <div className="post__bottom">
                <div className="post__buttons">
                    <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
                    <InputOption Icon={InsertCommentIcon} title="Comment" color="gray" />
                    <InputOption Icon={ArrowForwardIcon} title="Share" color="gray"/>
                    <InputOption Icon={SendIcon} title="Send" color="gray"/>
                </div>
                <div className="spacediv">
                    
                </div>
            </div>
        </div>
        
    )
}

export default Post
