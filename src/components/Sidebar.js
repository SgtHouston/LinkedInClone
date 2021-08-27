import '../componentcss/Sidebar.css';
import { Avatar } from "@material-ui/core";
import "../componentcss/Sidebar.css"
import background from "../images/Background.jpg"


function Sidebar() {
    // renders recent item jsx 
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );



    return (
        <div classname="sidebar">
            <div className="sidebar__top" >
                <img src={background } alt="" /> 
                <Avatar className="sidebar__avatar" />
                <h2 className="sidebar__info">Chris Houston</h2>
                <h4 className="sidebar__info">Chris.Houston314@gmail.com</h4>
            </div>
            <div className="sidebar__stats" >
                <div className ="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber" > 3,061 </p>
                </div>
                <div className="sidebar__stat" >
                    <p>Views on post</p>
                    <p className="sidebar__statNumber" >2,342</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                { recentItem('reactjs')}
                { recentItem('programming')}
                { recentItem('softwareengineering')}
                { recentItem('nodejs')}
                { recentItem('python')}
                { recentItem('webdevelopment')}
            </div>
            
            
        </div>
    )
}

export default Sidebar
