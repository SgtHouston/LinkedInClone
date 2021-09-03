
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
import { useDispatch, useSelector } from 'react-redux'
import { actionAddPost } from '../redux/actions/posts';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'



function Feed() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const user = useSelector( state => state.user.user)
    
    const postMessage = e => {
        e.preventDefault();
        dispatch(actionAddPost(
            {
                name: user.name,
                jobdescription: user.jobdescription,
                message: input,
                photoUrl: user.photoUrl || '',
                time: new Date()
            }
        ))

        // reset Text field
        setInput('')
        handleClose()
    }

    const handleClose = () => {
        setShow(false);
    };




    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__inputContainertop">
                    <Avatar avatar={Avatar} />
                    <div className="spacerdivfeed"></div>
                    <div className="feed__input">
                        <form onClick={handleShow} title="Start a post">
                            Start a post
                        </form>
                        <Modal size="md" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create A Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{user.name}</Modal.Body>
                            <InputGroup style={{ height: '10rem' }}>
                                <FormControl as="textarea" aria-label="With textarea" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Start a post" />
                            </InputGroup>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Exit
                                </Button>
                                <Button variant="primary" onClick={postMessage}>
                                    Post
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className="feed__inputOptions">
                    {/* Input Options */}
                    <InputOption Icon={ImageIcon} title="Photo" color="70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#6EB84C" />
                    <InputOption Icon={EventIcon} title="Event" color="#E09230" />
                    <InputOption Icon={FormatIcon} title="Write Article" color="#F97C83" />
                </div>
            </div>
            <div style={{ borderTop: "2px solid lightgray", marginLeft: 2, marginRight: 2 }}></div>
            <br />
            <div className="mainfeed">
                {posts.map(({ name, jobdescription, message, photoUrl, time }, index) => (

                    <Post
                        key={index}
                        name={name}
                        jobdescription={jobdescription}
                        message={message}
                        photoUrl={photoUrl}
                        time={time.toDate()}
                    />
                    
                ))}
            </div>
        </div>
    )
}

export default Feed



