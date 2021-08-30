import React from 'react'
import '../componentcss/Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import FormatIcon from '@material-ui/icons/FormatIndentIncrease';
import { Avatar } from "@material-ui/core";
import Post from './Post';
import { useEffect, useState } from 'react';
import db from "../firebase"
// import { doc, setDoc, updateDoc } from "firebase/firestore";
import avatar from "../images/Avatar.png"



function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    // 
    

    const postMessage = e => {
        e.preventDefault();
        // Take post and add it to the db
        // ({
        //     name: 'Chris H',
        //     description: 'this is a test',
        //     message: "Cool post message",
        //     photoUrl: '',
        //     timestamp: new Date() 
        // })

    }



    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__inputContainertop">
                    <Avatar avatar={Avatar} />
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
            <div style={{ borderTop: "2px solid lightgray", marginLeft: 20, marginRight: 20 }}></div>
            <br/ >
            <div className="mainfeed">
                
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post 
                        key = {id} 
                        name = {name}
                        description = {description}
                        message ={message}
                        photoUrl = {photoUrl}
                        />
                ))}
                
                <Post key={1} name={"Chris Houston"} description={"Software Developer"} message="Wow, I can't wait to build more projects like this!" photoUrl={avatar}/> 
                <Post key={2} name={"Billy Bob"} description={"Backend Engineer"} message="The name's Billy Bob and I need a job..." photoUrl={avatar}/>
                <Post key={3} name={"Elon Musky"} description={"Billionaire"} message="Buy Doge and self-drive to the moon!" photoUrl={avatar}/>
                <Post key={4} name={"Linked Ingram"} description={"Tech Recruiter"} message="Now hiring entry-level developers!  Masters degree in a STEM field and minimum 6 years Java or C# experience required." photoUrl={avatar}/>
                <Post key={4} name={"Johnny Appleseed"} description={"LinkedIn Superstar"} message="I sure do love networking!" photoUrl={avatar}/>

                
            </div>
            
        </div>  
        
    )
}

export default Feed



