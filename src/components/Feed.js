import React from 'react'
import '../componentcss/Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import FormatIcon from '@material-ui/icons/FormatIndentIncrease';
import { Avatar } from "@material-ui/core";
import Post from './Post';
import { useState } from 'react';
// import db from "../firebase"
// import { doc, setDoc, updateDoc } from "firebase/firestore";
import avatar from '../images/Avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetPosts } from '../redux/actions/posts';
import { CSSTransition } from 'react-transition-group';


function Feed() {
    
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    const postMessage = e => {
        e.preventDefault();
        // Store results in piece of state
        const user = {
            name: 'Chris Houston',
            jobdescription : 'Software Developer',
            message : input,
            photoUrl : avatar,
        }
        
        // Use state to display results on the page
        dispatch(actionSetPosts(
            {
                name: user.name,
                jobdescription : user.jobdescription,
                message : input,
                photoUrl : user.photoUrl,
            }
        ))
        
        // reset Text field
        setInput('')
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__inputContainertop">
                    <Avatar avatar={Avatar} />
                    <div className="spacerdivfeed"></div>
                    <div className="feed__input">
                        <form >
                            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Start a post"/>
                            <button onClick={postMessage}  type="submit"> Send</button>
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
            <div style={{ borderTop: "2px solid lightgray", marginLeft: 2, marginRight: 2 }}></div>
            <br/>
            <div className="mainfeed">
                    { posts.reverse().map(({ name, jobdescription, message, photoUrl }, index) => (
                        <CSSTransition timeout={500} className="post" key={index}>
                            <Post 
                                key = {index} 
                                name = {name}
                                jobdescription = {jobdescription}
                                message ={message}
                                photoUrl = {photoUrl}
                                />
                        </ CSSTransition >
                    ))}
            </div>
        </div>  
    )
}

export default Feed



