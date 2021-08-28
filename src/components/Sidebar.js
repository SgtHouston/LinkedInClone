import '../componentcss/Sidebar.css';
import { Avatar } from "@material-ui/core";
import "../componentcss/Sidebar.css"
import background from "../images/Background.jpg"
import RecentItem from './RecentItem';




function Sidebar() {

    return (
        <div classname="sidebar">
            <div className="sidebar__top" >
                <img src={ background } alt=""/> 
                <Avatar className="sidebar__avatar" />
                <h2 className="sidebar__info">Chris Houston</h2>
                <h4 className="sidebar__info">chris.houston314@gmail.com</h4>
            </div>
            <div className="sidebar__stats" >
                <div className ="sidebar__stat">
                    <p>Who viewed your profile </p>
                    <div className="spacerdiv"></div>
                    <p className="sidebar__statNumber" > 2,061 </p>
                </div>
                <div className="sidebar__stat" >
                    <p>Views of you post</p>
                    <div className="spacerdiv"></div>
                    <p className="sidebar__statNumber" >1,342</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                    <p>Recent</p>
                    <RecentItem topic='React' />
                    <RecentItem topic='Redux' />
                    <RecentItem topic='Material UI' />
                    <RecentItem topic='Bootstrap' />
                    <br/>
                    <p>Groups</p>
                    <RecentItem topic='Software Engineering' />
                    <RecentItem topic='Web Development' />
                    <RecentItem topic='Frontend Developer' />
                    
            </div>
            
        </div>
    )
}

export default Sidebar
