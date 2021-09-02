import '../componentcss/Sidebar.css';
import { Avatar } from "@material-ui/core";
import "../componentcss/Sidebar.css"
import background from "../images/Background.jpg"
import RecentItem from './RecentItem';
import TechArticleList from './TechArticles';
import "../componentcss/Widgets.css"
import NYT from "../images/NYT.png"


function Sidebar(name, photoUrl) {

    return (
        <div className="sidebar">
            <div className="sidebar__top" >
                <img src={ background } alt=""/> 
                <Avatar className="sidebar__avatar" src={ photoUrl}/>
                <h2 className="sidebar__info text-center">Welcome, <br/>Christoper!</h2>
                <h4 className="sidebar__info">Add a photo</h4>
            </div>
            <div className="sidebar__stats" >
                <div className ="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <div className="spacerdiv__side"></div>
                    <p className="sidebar__statNumber" >931</p>
                </div>
                <div className="sidebar__stat" >
                    <p>Views of your post</p>
                    <div className="spacerdiv__side"></div>
                    <p className="sidebar__statNumber" >1,342</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                <RecentItem topic='React' />
                <RecentItem topic='Redux' />
                <RecentItem topic='Material UI' />
                <RecentItem topic='React Bootstrap' />
                <RecentItem topic='NYT Software API' />
                <RecentItem topic='NYT Tech API' />
                <RecentItem topic='Google Firebase' />
                
                <br/>
                <p className="sidebar__groups">Groups</p>
                <RecentItem topic='Software Engineering' />
                <RecentItem topic='Web Development' />
                <RecentItem topic='Full-Stack Developer' />
                <RecentItem topic='Backend Developer' />
                <RecentItem topic='Frontend Developer' />
            </div>     
            <div className="sidebar">
                <div className="widget__top">
                    <h5 className="widget__title">The Latest In Tech</h5>
                    <a className="widget__img" href="https://developer.nytimes.com/"><img src={NYT} alt="New York Times Logo and Attributation"></img></a>
                </div>
                <div className="widget__bottom ">
                    <TechArticleList />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
